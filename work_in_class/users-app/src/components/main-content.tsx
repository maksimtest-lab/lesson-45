import { useUserContext } from "../context/user-context";
import { UserList } from "./user-list/";
import { SearchBar } from "./search-bar";
import { FilterPanel } from "./filter-panel";
import { Pagination } from "./pagination";
import { Loader } from "./loader";

export const MainContent = () => {
  const { isLoading } = useUserContext();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <SearchBar />
      <FilterPanel />
      <UserList />
      <Pagination />
    </div>
  );
}