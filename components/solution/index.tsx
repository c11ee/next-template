import { getContent } from "@/apis/content";
import t from "@/i18n";
import Image from "@/components/image/";
import { useEffect, useState } from "react";
import LangText from "../langText";
import { Button } from "@mui/material";
import Img from "../../public/image/bigImg1.png";

/** 产品解决方案 */
const Solution = () => {
  const { data } = getContent({ type: "solute" });
  const [content, setContent] = useState<Content>();

  useEffect(() => {
    data && setContent(data.data.content.find((i) => i.nid == 1));
  }, [data]);
  return (
    <section className="section px-global">
      <div className="title">
        <h1>{t("cpjjfa")}</h1>
        <desc>{t("cpjjfa-s")}</desc>
      </div>

      <ul className="w-full">
        {content &&
          content.images?.map((i, index) => (
            <li
              className={`sm:flex ${
                (index + 1) % 2 == 0 ? "sm:flex-row-reverse" : ""
              }flex-row-reverse`}
              key={index}
            >
              <div className="relative sm:w-1/2 h-[200px] sm:h-[300px] lg:h-[500px]">
                <Image
                  src={process.env.NEXT_PUBLIC_HOST + i.src}
                  alt={i.title || "Solution"}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="sm:mt-0 mt-5 sm:w-1/2 box-border px-10 flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold font-pht-b text-gray-900 ">
                  <LangText name={content.name[index]}></LangText>
                </h1>
                <p className="text-xl my-5 text-gray-400">
                  <LangText name={content.abstract[index]}></LangText>
                </p>
                <Button variant="outlined">
                  <LangText name={content.button[index]}></LangText>
                </Button>
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default Solution;
