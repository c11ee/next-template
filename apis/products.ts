import { http } from "@/utils/http/index";
import useSWR from "swr";

/** 产品分类  */
export const getProductCate = () => {
  return useSWR(
    "/index/category",
    (url) => http.request<ResultType<{ cats: ProductCate[] }>>("get", url),
    { revalidateOnFocus: false }
  );
};

/** 产品  */
export const getProduct = ({ cid }: { cid?: number }) => {
  return useSWR(
    `/index/product?cid=${cid || 0}`,
    (url) => http.request<ResultType<{ product: Product[] }>>("get", url),
    { revalidateOnFocus: false }
  );
};
