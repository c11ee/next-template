import { useRouter } from "next/router";
import Banner from "@/components/banner";
import { getConsult } from "@/apis/content";
import { useEffect, useState } from "react";
import LangText from "@/components/langText";

// 咨询中心
const Consult = () => {
  const router = useRouter();
  const id = router.query.id;

  // 获取所有再筛选详情
  const { data } = getConsult({
    limit: 999,
  });

  const [detail, setDetail] = useState<Con>();

  useEffect(() => {
    if (data) {
      setDetail(data.data.con.find((i) => i.id == Number(id)));
    }
  }, [data]);

  return (
    <>
      <Banner></Banner>

      <section className="section px-global text-sm md:text-base">
        {detail && <LangText name={detail?.content}></LangText>}
      </section>
    </>
  );
};

export default Consult;
