import { http } from "@/utils/http/index";
import useSWR from "swr";

/** 内容列表  */
export const getContent = ({
  type,
  cid,
  nid,
}: {
  type: ContentType;
  cid?: number;
  nid?: number;
}) => {
  return useSWR(
    `/index/content?cid=${cid || 0}&nid=${nid || 0}&type=${type!}` as string,
    (url) => http.request<ResultType<{ content: Content[] }>>("get", url),
    { revalidateOnFocus: false }
  );
};

/** 咨询  */
export const getConsult = ({
  type,
  page,
  limit,
}: {
  type?: string;
  page?: number;
  limit?: number;
} = {}) => {
  return useSWR(
    `/index/consult?page=${page || 1}&limit=${limit || 10}${
      type ? "&type=" + type : ""
    }` as string,
    (url) =>
      http.request<ResultType<{ con: Con[]; count: number }>>("get", url),
    { revalidateOnFocus: false }
  );
};

/** 合作伙伴  */
export const getPartner = () => {
  return useSWR(
    `/index/partner`,
    (url) => http.request<ResultType<{ partner: Partner[] }>>("get", url),
    { revalidateOnFocus: false }
  );
};
