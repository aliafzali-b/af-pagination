import { FC } from "react";
import { AF_Pagination_props } from "./models";
type props = {
    totalPage: number;
};
declare const NextBtn: FC<AF_Pagination_props & props>;
export default NextBtn;
