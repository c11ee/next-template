import { useRouter } from "next/router";
import Products from "@/components/products";
import Banner from "@/components/banner";
import Scenario from "@/components/scenario";
import { getContent } from "@/apis/content";
import { useEffect, useState } from "react";

// 产品
const Product = () => {
  const router = useRouter();
  const id = router.query.id;
  const nid = router.query.nid;

  const { data } = getContent({ type: "good", nid: Number(nid) });
  const [product, setProduct] = useState<Content>();
  const [scenario, setScenario] = useState<Content>();

  useEffect(() => {
    if (data) {
      const s0 = data.data.content.find((i) => i.sort == 0);
      const s1 = data.data.content.find((i) => i.sort == 1);

      setProduct(s0);
      setScenario(s1);
    }
  }, [data]);
  return (
    <>
      <Banner sort={1}></Banner>

      <Products
        contentData={product}
        id={Number(id)}
        key={(id as string) + "products"}
      ></Products>

      <Scenario data={scenario}></Scenario>
    </>
  );
};

export default Product;
