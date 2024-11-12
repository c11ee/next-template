import { getContent } from "@/apis/content";
import t from "@/i18n";
import { Card, CardContent, CardMedia } from "@mui/material";
import { useEffect, useState } from "react";
import LangText from "../langText";
import Image from "@/components/image/";

/** 合作伙伴 */
const Partners = () => {
  const { data } = getContent({ type: "partner" });
  const [partners, setPartners] = useState<Content[]>([]);

  useEffect(() => {
    setPartners(data?.data.content || []);
  }, [data]);
  return (
    <section className="section px-global">
      <div className="title">
        <h1>{t("hzhb")}</h1>
      </div>
      <ul className="flex flex-wrap gap-5 justify-center">
        {partners.map((i) => (
          <li key={i.id} className="flex items-center">
            <div className="relative h-[100px] w-[100px]">
              <Image
                className=" object-cover"
                src={
                  i.images ? process.env.NEXT_PUBLIC_HOST + i.images[0].src : ""
                }
                alt={i.images?.[0].title || "logo"}
                layout="fill"
              ></Image>
            </div>
            <LangText name={i.name[0]} className="w-[150px] ml-5 line-clamp-2"></LangText>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Partners;
