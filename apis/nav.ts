import { http } from "@/utils/http/index";
import useSWR from "swr";

/** (顶部/底部)导航 */
export const getIndexNav = (type: "top" | "bottom") => {
  return useSWR(
    "/index/nav?type=" + type,
    (url) => http.request<ResultType<{ navs: Nav[] }>>("get", url),
    { revalidateOnFocus: false }
  );
};
