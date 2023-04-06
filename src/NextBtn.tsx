import React, { FC, useState } from "react";
import stylesModule from "./styles/styles.module.scss";
import { AF_Pagination_props } from "./models";
type props = { totalPage: number };
const NextBtn: FC<AF_Pagination_props & props> = (props) => {
  const [hovered, set_hovered] = useState<boolean>(false);
  let styles = props.style ? props.style : {};
  if (hovered && props.hoverStyles)
    styles = { ...styles, ...props.hoverStyles };
  if (props.navStyles) styles = { ...styles, ...props.navStyles };
  if (hovered && props.navHoverStyles)
    styles = { ...styles, ...props.navHoverStyles };
  return (
    <button
      onMouseEnter={() => set_hovered(true)}
      onMouseLeave={() => set_hovered(false)}
      style={styles}
      className={`${stylesModule["single-pagination-nav-button"]} ${stylesModule["next-page-button"]}`}
      onClick={() =>
        props.current_page !== props.totalPage &&
        props.set_page(props.current_page + 1)
      }
    >
      {props.next_element ? (
        props.next_element
      ) : (
        <>
          {props.dir === "rtl" ? (
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
          ) : (
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
          )}
        </>
      )}
    </button>
  );
};
export default NextBtn;
