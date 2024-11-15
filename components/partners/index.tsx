import { getPartner } from "@/apis/content";
import { useEffect, useState } from "react";
import LangText from "../langText";
import Image from "@/components/image/";
import useNav from "@/hooks/useNav";

/** 合作伙伴 */
const Partners = () => {
  const { data } = getPartner();
  const [partners, setPartners] = useState<Partner[]>([]);
  const { data: navData } = useNav(0);
  const [info, setInfo] = useState<Nav>();

  useEffect(() => {
    if (navData) {
      const item = navData.data.navs.find((i) => i.url == "/partner");
      setInfo(item);
    }
  }, [navData]);
  useEffect(() => {
    setPartners(data?.data.partner || []);
  }, [data]);
  return (
    <section className="section px-global">
      {info && (
        <div className="title">
          <h1>
            <LangText name={info.name}></LangText>
          </h1>
        </div>
      )}
      <ul className="grid grid-cols-2 md:flex flex-wrap justify-center">
        {partners.map((i) => (
          <li
            key={i.id}
            className="flex items-center 
              md:flex-row md:justify-center md:text-left
              flex-col justify-start text-center
          "
          >
            <div className="relative ">
              <img
                className=" h-auto w-[100px]"
                src={process.env.NEXT_PUBLIC_HOST + i.logo}
                alt={"logo"}
              ></img>
            </div>
            <LangText
              name={i.name}
              className="md:w-[150px] w-[100px] md:ml-5 md:mt-0 mt-2 line-clamp-2 md:text-base text-sm"
            ></LangText>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Partners;
