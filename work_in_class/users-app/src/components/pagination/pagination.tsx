
import { useUserContext } from "../../context/user-context";
import "./pagination.css";

export const Pagination = () => {
  const { page:currentPage, filteredUsers, setPage } = useUserContext();
  const totalPages = Math.ceil(filteredUsers.length / 10);

  if (totalPages <= 1) {
    return null; // No pagination needed if there's only one page
  }
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const handlePageChange = (page: number) => {
    setPage(page);
  };
  const isActive = (page: number) => currentPage === page;

  return (
    <div className="pagination">
      {pages.map((page) => (
        <button
          key={page}
          className={`page-button ${isActive(page) ? "active" : ""}`}
          onClick={() => handlePageChange(page)} disabled={isActive(page) ? true : false}
        >
          {page}
        </button>
      ))}
    </div>
  );
};
