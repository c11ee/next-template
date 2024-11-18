import { getContent } from "@/apis/content";
import Banner from "@/components/banner";
import Counseling from "@/components/counseling";
import Partners from "@/components/partners";
import Products from "@/components/products";
import Solution from "@/components/solution";
import { StoreStateType } from "@/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const { nid } = useSelector((state: StoreStateType) => state.app);
  const { data } = getContent({ type: "good", nid: Number(nid) });
  const [product, setProduct] = useState<Content>();

  useEffect(() => {
    if (data) {
      const s0 = data.data.content[0];

      setProduct(s0);
    }
  }, [data]);
  return (
    <>
      <Banner></Banner>

      <Products contentData={product}></Products>

      <Solution></Solution>

      <Partners></Partners>

      <Counseling></Counseling>
    </>
  );
}
