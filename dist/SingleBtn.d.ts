import { FC } from "react";
import { AF_Pagination_props } from "./models";
type props = {
    page: number;
};
declare const SingleBtn: FC<AF_Pagination_props & props>;
export default SingleBtn;
