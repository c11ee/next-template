import { http } from "@/utils/http/index";
import useSWR from "swr";

/** seo */
export const getIndexSeo = () => {
  return useSWR(
    "/index/seo",
    (url) => http.request<ResultType<{ seo: Seo[] }>>("get", url),
    { revalidateOnFocus: false }
  );
};
