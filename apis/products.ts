import { http } from "@/utils/http/index";
import useSWR from "swr";

/** 产品分类API  */
export const getProductCateApi = () => {
  return http.request<ResultType<{ cats: ProductCate[] }>>(
    "get",
    "/index/category"
  );
};

/** 产品分类  */
export const getProductCate = () => {
  return useSWR(
    "/index/category",
    (url) => http.request<ResultType<{ cats: ProductCate[] }>>("get", url),
    { revalidateOnFocus: false }
  );
};

/** 产品  */
export const getProduct = ({ cid, type }: { cid?: number; type?: Type }) => {
  return useSWR(
    `/index/product?status=1&cid=${cid || 0}&recommand=${type == "hot" ? 1 : 0}&new=${
      type == "new" ? 1 : 0
    }` as string,
    (url) => http.request<ResultType<{ product: Product[] }>>("get", url),
    { revalidateOnFocus: false }
  );
};
