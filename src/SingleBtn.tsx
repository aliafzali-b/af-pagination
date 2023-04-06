import React, { FC, useState } from "react";
import stylesModule from "./styles/styles.module.scss";
import { AF_Pagination_props } from "./models";
type props = {
  page: number;
};
const SingleBtn: FC<AF_Pagination_props & props> = (props) => {
  const [hovered, set_hovered] = useState<boolean>(false);
  let styles = props.style ? props.style : {};
  const is_active = props.current_page === props.page;
  if (is_active && props.activeStyles)
    styles = { ...styles, ...props.activeStyles };
  if (hovered && props.hoverStyles)
    styles = { ...styles, ...props.hoverStyles };
  return (
    <button
      onMouseEnter={() => set_hovered(true)}
      onMouseLeave={() => set_hovered(false)}
      style={styles}
      key={`af-pagination-page-${props.page}`}
      className={`${stylesModule["single-pagination-button"]} ${
        stylesModule["prev-page-button"]
      } ${is_active ? stylesModule["active"] : ""}`}
      onClick={() =>
        props.current_page !== props.page && props.set_page(props.page)
      }
    >
      {props.page}
    </button>
  );
};
export default SingleBtn;
