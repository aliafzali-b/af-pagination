import React, { FC } from "react";
import styles from "./styles/styles.module.scss";
type props = {
  total_count?: number;
  per_page?: number;
  total_pages?: number;
  current_page: any;
  set_page: any;
};
const AF_Pagination: FC<props> = ({
  per_page,
  current_page, //1,2,3,...
  set_page,
  total_count,
  total_pages,
}) => {
  let totalPage = 1;
  if (total_pages) totalPage = Math.ceil(total_pages);
  if (total_count && per_page) totalPage = Math.ceil(total_count / per_page);
  if (totalPage <= 1) return null;
  let valid_pages = createArray(totalPage);
  let allowedPages = [
    1,
    2,
    current_page - 1,
    current_page,
    current_page + 1,
    totalPage - 1,
    totalPage,
  ];
  let finalPages = valid_pages.filter((page) => allowedPages.includes(page));
  return (
    <div className={`${styles["pagination-container"]}`}>
      {current_page > 1 && (
        <button
          className={`${styles["single-pagination-nav-button"]} ${styles["prev-page-button"]}`}
          onClick={() => current_page > 1 && set_page(current_page - 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
        </button>
      )}
      {finalPages.map((page) => (
        <>
          {current_page < totalPage - 3 && page === totalPage - 1 && (
            <span className={`${styles["dots"]}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
              </svg>
            </span>
          )}
          <button
            key={`af-pagination-page-${page}`}
            className={`${styles["single-pagination-button"]} ${
              styles["prev-page-button"]
            } ${current_page === page ? styles["active"] : ""}`}
            onClick={() => current_page !== page && set_page(page)}
          >
            {page}
          </button>
          {current_page > 4 && page === 2 && (
            <span className={`${styles["dots"]}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
              </svg>
            </span>
          )}
        </>
      ))}
      {current_page !== totalPage && (
        <button
          className={`${styles["single-pagination-nav-button"]} ${styles["next-page-button"]}`}
          onClick={() =>
            current_page !== totalPage && set_page(current_page + 1)
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </button>
      )}
    </div>
  );
};
export default AF_Pagination;
function createArray(length: number): number[] {
  return Array.from({ length }, (_v, i) => i + 1);
  //const myArray = createArray(6)
  // Output: [1, 2, 3, 4, 5, 6]
}
