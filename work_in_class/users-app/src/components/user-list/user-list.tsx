import { useUserContext } from "../../context/user-context";
import { UserCard } from "./components/user-card";
import "./user-list.css";

export const UserList = () => {
  const { paginatedUsers } =  useUserContext();
  return (
    <>
      <div className="user-list">
        {paginatedUsers.map((user) => (
          <UserCard key={user.email} user={user} />
        ))}
      </div>
    </>
  );
};
