import { http } from "@/utils/http/index";
import useSWR from "swr";

/** 内容列表  */
export const getContent = ({
  type,
  cid,
}: {
  type: ContentType;
  cid?: number;
}) => {
  return useSWR(
    `/index/content?cid=${cid || 0}&type=${type!}` as string,
    (url) => http.request<ResultType<{ content: Content[] }>>("get", url),
    { revalidateOnFocus: false }
  );
};

/** 咨询  */
export const getConsult = () => {
  return useSWR(
    `/index/consult`,
    (url) => http.request<ResultType<{ con: Con[] }>>("get", url),
    { revalidateOnFocus: false }
  );
};
