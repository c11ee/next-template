import { useRouter } from "next/router";
import Products from "@/components/products";
import Banner from "@/components/banner";
import Scenario from "@/components/scenario";
import { getContent } from "@/apis/content";
import { useEffect, useState } from "react";
import Innovative from "@/components/innovative";
import { Card, CardContent, CardMedia } from "@mui/material";
import Image from "@/components/image";
import LangText from "@/components/langText";

// 研发实力
const Research = () => {
  const router = useRouter();
  const id = router.query.id;

  const { data } = getContent({ type: "research", nid: Number(id) });
  const [sortData1, setSortData1] = useState<Content>();
  const [sortData2, setSortData2] = useState<Content>();
  const [sortData3, setSortData3] = useState<Content>();
  const [sortData4, setSortData4] = useState<Content>();

  useEffect(() => {
    if (data) {
      const s0 = data.data.content.find((i) => i.sort == 0);
      const s1 = data.data.content.find((i) => i.sort == 1);
      const s2 = data.data.content.find((i) => i.sort == 2);
      const s3 = data.data.content.find((i) => i.sort == 3);

      setSortData1(s0);
      setSortData2(s1);
      setSortData3(s2);
      setSortData4(s3);
    }
  }, [data]);
  return (
    <>
      <Banner sort={3}></Banner>

      <Innovative data={sortData1}></Innovative>

      {sortData2?.images?.[0] && (
        <section className="section px-global h-[350px] md:h-[500px] relative">
          <Image
            className="w-full"
            src={process.env.NEXT_PUBLIC_HOST + sortData2.images[0].src}
            alt={sortData2.images[0].title || "bg"}
            layout="fill"
            objectFit="cover"
          ></Image>
          <div className="title relative z-10">
            <h1>
              <LangText name={sortData2.name[0]}></LangText>
            </h1>
            <p className="line-clamp-3">
              <LangText name={sortData2.abstract[0]}></LangText>
            </p>
          </div>

          <ul className="grid grid-cols-2 md:grid-cols-4 gap-5 text-center relative z-10 md:pt-[80px] xl:pt-[150px]">
            {sortData2.name
              .slice(1)
              .filter((i) => i.cn)
              .map((i, index) => (
                <li key={index} className="">
                  <p className="text-xl md:text-5xl text-primary font-bold font-pht-b line-clamp-1">
                    <LangText
                      name={i}
                      unit="|"
                      classNames={["", "text-sm md:text-lg"]}
                    ></LangText>
                  </p>
                  <p className="text-gray-900 text-base mt-4 line-clamp-1">
                    <LangText name={sortData2.abstract[index + 1]}></LangText>
                  </p>
                </li>
              ))}
          </ul>
        </section>
      )}

      {sortData3?.images && (
        <section className="section px-global ">
          <div className="title">
            <h1>
              <LangText name={sortData3.name[0]}></LangText>
            </h1>
          </div>
          <Card className="sm:grid sm:grid-cols-2 flex flex-col-reverse">
            <CardContent className="flex items-center justify-center flex-col md:!px-10">
              <p className="text-base md:text-3xl text-gray-900 font-bold font-pht-b">
                <LangText name={sortData3.name[1]}></LangText>
              </p>
              <p className="mt-4 text-sm md:text-xl text-gray-400">
                <LangText name={sortData3.abstract[1]}></LangText>
              </p>
            </CardContent>
            <CardMedia
              className="bg-gray-100 h-[200px] md:h-[500px]"
              image={process.env.NEXT_PUBLIC_HOST + sortData3.images[0].src}
              title="icon"
              sx={{
                backgroundSize: "100%",
              }}
            />
          </Card>
        </section>
      )}

      {sortData4 && (
        <section className="section px-global py-10 md:py-20 bg-gray-100 bg-opacity-40">
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-[40px] md:gap-10">
            {sortData4.name.map((i, index) => (
              <li key={index}>
                <p
                  className="font-bold font-pht-b text-base md:text-2xl  
              text-primary border-b border-solid border-gray-200
                md:pb-5 md:mb-5 pb-2 mb-2 
              "
                >
                  <LangText name={i} className="line-clamp-1"></LangText>
                </p>
                <p className="line-clamp-3 text-sm md:text-base text-gray-400">
                  <LangText name={sortData4.abstract[index]}></LangText>
                </p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
};

export default Research;
