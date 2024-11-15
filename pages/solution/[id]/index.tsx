import { useRouter } from "next/router";
import Banner from "@/components/banner";
import { getContent } from "@/apis/content";
import Solution from "@/components/solution";
import { useEffect, useState } from "react";
import Features from "@/components/features";
import Parameter from "@/components/parameter";

// 解决方案
const SolutionPage = () => {
  const router = useRouter();
  const id = router.query.id;
  const { data } = getContent({ type: "solute", nid: Number(id) });
  const [solution, setSolution] = useState<Content>();
  const [features, setFeatures] = useState<Content>();
  const [parameter, setParameter] = useState<Content>();

  useEffect(() => {
    if (data) {
      let s0 = data.data.content[0];
      let s1 = data.data.content[1];
      let s2 = data.data.content[2];

      setSolution(s0);
      setFeatures(s1);
      setParameter(s2);
    }
  }, [data]);
  return (
    <>
      <Banner></Banner>

      <Solution propData={solution} hideTitle></Solution>

      <Features data={features}></Features>

      <Parameter data={parameter}></Parameter>
    </>
  );
};

export default SolutionPage;
