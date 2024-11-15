import { getContent } from "@/apis/content";
import Image from "@/components/image/";
import { useEffect, useState } from "react";
import LangText from "../langText";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { StoreStateType } from "@/store";

/** 产品解决方案 */
const Solution = ({
  propData,
  hideTitle,
}: {
  propData?: Content;
  hideTitle?: boolean;
}) => {
  const { data } = getContent({ type: "solute" });
  const [content, setContent] = useState<Content>();
  const { nid } = useSelector((state: StoreStateType) => state.app);

  useEffect(() => {
    if (data) {
      setContent(data.data.content.find((i) => i.nid == nid)!);
    }
  }, [data]);
  useEffect(() => {
    if (propData) {
      setContent(propData);
    }
  }, [propData]);
  return (
    <section className="section px-global">
      {!hideTitle && (
        <div className="title">
          <h1>{content && <LangText name={content.name[0]}></LangText>}</h1>
          <p>{content && <LangText name={content.abstract[0]}></LangText>}</p>
        </div>
      )}

      <ul className="w-full grid gap-y-5 sm:gap-y-10">
        {content &&
          content.images?.map((i, index) => (
            <li
              className={`sm:flex ${
                index % 2 == 0 ? "sm:flex-row-reverse" : ""
              }`}
              key={index}
            >
              <div className="relative sm:w-1/2 h-[150px] sm:h-[300px] lg:h-[500px]">
                <Image
                  src={process.env.NEXT_PUBLIC_HOST + i.src}
                  alt={i.title || "Solution"}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="sm:mt-0 mt-2 sm:w-1/2 box-border px-0 sm:px-10 flex flex-col items-center justify-center">
                <h1 className="text-lg sm:text-2xl font-bold font-pht-b text-gray-900 ">
                  <LangText name={content.name[index + 1]}></LangText>
                </h1>
                <p className="text-sm sm:text-xl my-2 sm:my-5 text-gray-400">
                  <LangText name={content.content[index + 1]}></LangText>
                </p>
                {content.button[index + 1].cn && (
                  <Button variant="outlined">
                    <LangText name={content.button[index + 1]}></LangText>
                  </Button>
                )}
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default Solution;
