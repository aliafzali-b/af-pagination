import React, { FC, useState } from "react";
import stylesModule from "./styles/styles.module.scss";
import { AF_Pagination_props } from "./models";
import PrevBtn from "./PrevBtn";
import NextBtn from "./NextBtn";
import SingleBtn from "./SingleBtn";
import Dots from "./Dots";
import { createArray } from "./helper";

const AF_Pagination: FC<AF_Pagination_props> = (props) => {
  let {
    per_page,
    current_page, //1,2,3,...
    total_count,
    total_pages,
    show_if_only_one_page,
  } = props;
  let totalPage = 1;
  if (total_pages) totalPage = Math.ceil(total_pages);
  if (total_count && per_page) totalPage = Math.ceil(total_count / per_page);
  if (totalPage <= 0) return null;
  if (totalPage === 1 && !show_if_only_one_page) return null;
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
  let gap = props.gap != null ? props.gap : 5;
  return (
    <div
      dir={props.dir}
      className={`${stylesModule["pagination-container"]}`}
      style={{ gap: `${gap}px` }}
    >
      {!props.hideNavigation && current_page > 1 && <PrevBtn {...props} />}
      {finalPages.map((page) => {
        return (
          <>
            {current_page < totalPage - 3 && page === totalPage - 1 && (
              <Dots {...props} />
            )}
            <SingleBtn {...props} page={page} />
            {current_page > 4 && page === 2 && <Dots {...props} />}
          </>
        );
      })}
      {!props.hideNavigation && current_page !== totalPage && (
        <NextBtn {...props} totalPage={totalPage} />
      )}
    </div>
  );
};
export default AF_Pagination;
