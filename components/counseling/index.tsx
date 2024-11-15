import { useEffect, useState } from "react";
import LangText from "../langText";
import Empty from "../empty";
import t from "@/i18n";
import { getConsult } from "@/apis/content";
import { Card, CardContent, CardMedia } from "@mui/material";
import Link from "next/link";

/** 咨询中心 */
const Counseling = () => {
  const { data } = getConsult();
  const [news, setNews] = useState<Con[]>([]);

  useEffect(() => {
    if (data) {
      setNews(data?.data.con);
    }
  }, [data]);

  return (
    <section className={`section px-global`}>
      <div className="title">
        <h1>{t("zxzx")}</h1>
      </div>

      <div className="flex justify-end text-gray-900 text-sm sm:text-base">
        <Link href="/consult/0">
          <span>{t("all")}</span>
          <i className="iconfont icon-gengduo ml-2  sm:!text-base !text-sm"></i>
        </Link>
      </div>
      {news.length ? (
        <div className="md:flex gap-x-[40px]">
          <Link href={`/consult/2/${news[0].id}`}>
            <Card
              variant="outlined"
              className="w-full md:w-[300px] lg:w-[500px] xl:w-[700px]"
            >
              <CardMedia
                className="h-[150px] sm:h-[300px] bg-gray-100"
                image={
                  news[0].cover
                    ? process.env.NEXT_PUBLIC_HOST + news[0].cover
                    : ""
                }
                title="News image"
                sx={{
                  backgroundSize: "100%",
                }}
              />
              <CardContent className="!p-2 sm:!p-4">
                <LangText
                  name={news[0].name}
                  className="text-lg sm:text-xl text-gray-900 sm:font-bold font-pht-b line-clamp-1"
                ></LangText>
                <LangText
                  name={news[0].content}
                  className="line-clamp-3 text-sm sm:text-base text-gray-400 my-1 sm:my-5"
                ></LangText>
                <span className="text-sm sm:text-base text-gray-200">
                  {news[0].create_time.split(" ")[0].replaceAll("-", "/")}
                </span>
              </CardContent>
            </Card>
          </Link>
          <ul className="flex-1">
            {news.slice(1).length ? (
              news.slice(1).map((i) => (
                <Link key={i.id} href={`/consult/2/${i.id}`}>
                  <li className="flex justify-between py-[10px] sm:py-[19px] border-b border-solid border-gray-200 text-sm sm:text-base">
                    <p className="text-gray-900">
                      <LangText
                        name={i.name}
                        className="line-clamp-1"
                      ></LangText>
                    </p>
                    <span className="text-gray-200 ">
                      {i.create_time.split(" ")[0].replaceAll("-", "/")}
                    </span>
                  </li>
                </Link>
              ))
            ) : (
              <Empty></Empty>
            )}
          </ul>
        </div>
      ) : (
        <Empty></Empty>
      )}
    </section>
  );
};

export default Counseling;
