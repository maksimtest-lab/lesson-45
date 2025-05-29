import { createContext, useEffect, useMemo, useState, useContext } from "react";
import type { User } from "../types/user";

interface UsersContextType {
  users: Array<User>;
  isLoading: boolean;
  filteredUsers: Array<User>;
  searchQuery: string;
  gender: string;
  country: string;
  setSearchQuery: (query: string) => void;
  setGender: (gender: string) => void;
  setCountry: (country: string) => void;
  setPage: (page: number) => void;
  page: number;
  paginatedUsers: Array<User>;
}

const UsersContext = createContext<UsersContextType | null>(null);

export const UsersProvider = ({ children }: { children: React.ReactNode }) => {
  const [users, setUsers] = useState<Array<User>>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [gender, setGender] = useState<string>("all");
  const [country, setCountry] = useState<string>("all");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [page, setPage] = useState(1);
  const usersPerPage = 10;
  const startIndex = (page - 1) * usersPerPage;

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.results);
        console.log(data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  const filteredUsers = useMemo(() => {
    let data = [...users];
    if (searchQuery) {
      data = data.filter(
        (user) =>
          (user.name.first + ' ' + user.name.last + user.email)
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
      );
    }

    if (gender !== 'all') {
      data = data.filter((user) => user.gender === gender);
    }

    if (country !== 'all') {
      data = data.filter((user) => user.location.country === country);
    }

    return data;
  }, [users, searchQuery, gender, country, usersPerPage, startIndex]);

  const paginatedUsers = useMemo(() => {
    return filteredUsers.slice(startIndex, startIndex + usersPerPage);
  }, [filteredUsers, startIndex]);

  const contextValue = useMemo(
    () => ({
      users,
      isLoading,
      filteredUsers,
      searchQuery,
      gender,
      country,
      setSearchQuery,
      setGender,
      setCountry,
      setPage,
      page,
      paginatedUsers
    }),
    [users, isLoading, filteredUsers, searchQuery, gender, country, page, paginatedUsers]
  );

  return (
    <UsersContext.Provider value={contextValue}>
      {children}
    </UsersContext.Provider>
  );
};

export const useUserContext = () => {
    const context = useContext(UsersContext);
    if (!context) throw new Error("useUserContext must be used within UserProvider");
    return context;
};