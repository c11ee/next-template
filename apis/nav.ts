import { http } from "@/utils/http/index";
import useSWR from "swr";

/** (顶部/底部)导航 */
export const getIndexNav = (type: 0 | 1) => {
  return useSWR(
    "/index/nav?type=" + type,
    (url) => http.request<ResultType<{ navs: Nav[] }>>("get", url),
    { revalidateOnFocus: false }
  );
};

/** 友情链接 */
export const getIndexLink = () => {
  return useSWR(
    "/index/link",
    (url) => http.request<ResultType<{ link: Link[] }>>("get", url),
    { revalidateOnFocus: false }
  );
};
