import { http } from "@/utils/http/index";
import useSWR from "swr";

/**
 * 根据当前路由路径获取对应轮播图信息
 */
const useBanner = (sort: number) => {
  const { data } = useSWR(
    "/index/banner",
    (url) => http.request<ResultType<{ banner: Banner[] }>>("get", url),
    { revalidateOnFocus: false }
  );

  return (
    data?.data.banner.find((i) => i.sort == sort) || {
      images: "",
      name: {
        cn: "",
        en: "",
        ja: "",
      },
      url: "/",
    }
  );
};

export default useBanner;
