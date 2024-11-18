import { useRouter } from "next/router";
import Banner from "@/components/banner";
import { getConsult } from "@/apis/content";
import { useEffect, useRef, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Pagination,
} from "@mui/material";
import LangText from "@/components/langText";
import t from "@/i18n";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setNid } from "@/store/app";
import useNav from "@/hooks/useNav";

// 咨询中心
const Consult = () => {
  const dispatch = useDispatch(); // 定义派发器
  const router = useRouter();
  const type = router.query.type;

  const { data: navData, getNidByPath } = useNav(0);

  const tabRef = useRef<any>();
  const [pagetion, setPagetion] = useState({ page: 1, limit: 9, total: 0 });
  const [consultTabs, setConsultTabs] = useState<Nav[]>([]);
  const [currentType, setCurrentCats] = useState<string>(type as string);
  const [news, setNews] = useState<Con[]>([]);
  const { data } = getConsult({
    type: currentType,
    page: pagetion.page,
    limit: pagetion.limit,
  });

  function handleSetCurrentCats(type: string) {
    setPagetion({ page: 1, limit: 9, total: 0 });
    setCurrentCats(type);
  }

  useEffect(() => {
    if (navData) {
      setConsultTabs(
        navData.data.navs.find((i) => i.url == "/consult")?.children || []
      );
    }
  }, [navData]);

  useEffect(() => {
    setCurrentCats(type as string);
  }, [type]);

  useEffect(() => {
    if (data) {
      setTimeout(() => {
        setNews(data.data.con);
        setPagetion({ ...pagetion, total: data.data.count });
      }, 1);
    }
  }, [data]);

  return (
    <>
      <Banner></Banner>

      <section className="section px-global" ref={tabRef}>
        <ul className="flex flex-wrap justify-center gap-x-5 border-b border-solid border-gray-100 pb-5 mb-8">
          <Button
            variant="text"
            size="large"
            sx={{
              fontSize: 16,
              color: currentType == "" ? "" : "#5c5c5c",
            }}
            onClick={() => handleSetCurrentCats("")}
          >
            {t("allT")}
          </Button>
          {consultTabs
            .filter((i) => i.status == 1)
            .map((i) => (
              <li key={i.id}>
                <Link
                  href={i.url}
                  onClick={() => {
                    let type = i.url.replace("/consult/", "");
                    handleSetCurrentCats(type);
                  }}
                >
                  <Button
                    variant="text"
                    size="large"
                    sx={{
                      fontSize: 16,
                      color:
                        "/consult/" + currentType == i.url ? "" : "#5c5c5c",
                    }}
                  >
                    <LangText name={i.name}></LangText>
                  </Button>
                </Link>
              </li>
            ))}
        </ul>

        <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-10">
          {news.map((i) => (
            <li key={i.id}>
              <Link
                href={`/consult/${type}/${i.id}`}
                onClick={() => {
                  dispatch(setNid(getNidByPath("/consult/[type]/[id]")));
                }}
              >
                <Card variant="outlined" className="group">
                  <CardMedia
                    className="h-[100px] md:h-[150px] lg:h-[250px] bg-gray-100"
                    image={process.env.NEXT_PUBLIC_HOST + i.cover}
                    title="news image"
                    sx={{
                      backgroundSize: "100%",
                    }}
                  />
                  <CardContent className="!p-2 sm:!p-4">
                    <p className="text-base md:text-lg text-gray-900 group-hover:text-primary line-clamp-3">
                      <LangText name={i.name}></LangText>
                    </p>
                    <p className="mt-2 text-gray-600 text-sm">
                      {i.create_time.split(" ")[0].replaceAll("-", "/")}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex justify-center">
          <Pagination
            count={Math.ceil(pagetion.total / 9)}
            page={pagetion.page}
            onChange={(e, page) => {
              window.scrollTo({
                top: tabRef.current!.offsetTop - 100 - 80,
                behavior: "smooth",
              });
              setPagetion({ ...pagetion, page: page });
            }}
          />
        </div>
      </section>
    </>
  );
};

export default Consult;
