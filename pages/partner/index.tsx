import { getContent } from "@/apis/content";
import Banner from "@/components/banner";
import Image from "@/components/image";
import LangText from "@/components/langText";
import Partners from "@/components/partners";
import { useEffect, useState } from "react";

// 合作伙伴
const Partner = () => {
  const { data } = getContent({ type: "partner" });
  const [info, setInof] = useState<Content>();

  useEffect(() => {
    if (data) {
      setInof(data.data.content[0]);
    }
  }, [data]);
  return (
    <>
      <Banner></Banner>

      <Partners></Partners>

      <section className="section px-global">
        {info && (
          <div className="title">
            <h1>
              <LangText name={info.name[0]}></LangText>
            </h1>
            <p>
              <LangText name={info.abstract[0]}></LangText>
            </p>
          </div>
        )}
        {info?.images && (
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-center">
            {info.images.map((i, index) => (
              <li
                key={index}
                className="group flex items-center h-[300px] md:h-[400px] lg:h-[600px] relative"
              >
                <Image
                  className="object-cover"
                  src={process.env.NEXT_PUBLIC_HOST + i.src}
                  alt={i.title || "bg"}
                  layout="fill"
                ></Image>

                <div
                  className="opacity-0 group-hover:opacity-100 bg-primary bg-opacity-40 
              absolute top-0 right-0 left-0 bottom-0 z-[1]
              flex items-center justify-center flex-col
              text-center text-white transition-all
              "
                >
                  <h1 className="text-base md:text-2xl line-clamp-1 w-1/2 mb-4">
                    <LangText name={info.name[index + 1]}></LangText>
                  </h1>
                  <h1 className="text-sm md:text-base line-clamp-3  w-1/2">
                    <LangText name={info.abstract[index + 1]}></LangText>
                  </h1>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
};

export default Partner;
