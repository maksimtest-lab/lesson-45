import { useUserContext } from "../../context/user-context";
import "./search-bar.css";

export const SearchBar = () => {
  const { searchQuery, setSearchQuery } =  useUserContext();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return  <input type="text" value={searchQuery} onChange={handleSearchChange} className="search-bar-input" placeholder="Поиск по имени или email" />;
};
