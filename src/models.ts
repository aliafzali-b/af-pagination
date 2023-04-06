import { CSSProperties, ReactElement } from "react";

export type AF_Pagination_props = {
  current_page: any;
  set_page: any;
  total_pages?: number;
  total_count?: number;
  per_page?: number;
  activeStyles?: CSSProperties;
  hoverStyles?: CSSProperties;
  navStyles?: CSSProperties;
  navHoverStyles?: CSSProperties;
  style?: CSSProperties;
  show_if_only_one_page?: boolean;
  next_element?: ReactElement;
  prev_element?: ReactElement;
  dots_element?: ReactElement;
  dir?: "rtl" | "ltr";
  gap?: number;
  hideNavigation?: boolean;
};
