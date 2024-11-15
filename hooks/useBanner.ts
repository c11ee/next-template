import { http } from "@/utils/http/index";
import useSWR from "swr";
import { useSelector } from "react-redux";
import { StoreStateType } from "@/store";
import { useState } from "react";

/**
 * 根据当前路由路径获取对应轮播图信息
 */
const useBanner = () => {
  const { nid } = useSelector((state: StoreStateType) => state.app);
  // const [bnid,setBnid] = useState(i => )

  if (!nid) return;

  const { data } = useSWR(
    "/index/banner?nid=" + nid,
    (url) => http.request<ResultType<{ banner: Banner[] }>>("get", url),
    { revalidateOnFocus: false }
  );

  return data;
};

export default useBanner;
