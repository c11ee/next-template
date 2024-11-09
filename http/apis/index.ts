import { http } from "../http";
import useSWR from "swr";

/** 驾照题库接口 */
export const getJztk = (data?: object) => {
  return useSWR("/jztk/query", (url) =>
    http.request<ResultType<JZTKTYType>>("get", url, {
      params: data,
    })
  );
};
