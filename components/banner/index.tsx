import LangText from "../langText";
import { useEffect, useState } from "react";
import Swiper from "swiper";
import useSWR from "swr";
import { useSelector } from "react-redux";
import { StoreStateType } from "@/store";
import { http } from "@/utils/http/index";
import Link from "next/link";
import Anime from "../anime";

/**
 *  轮播图组件
 */
const Banner = () => {
  const { nid } = useSelector((state: StoreStateType) => state.app);
  const { data } = useSWR(
    "/index/banner?nid=" + nid,
    (url) => http.request<ResultType<{ banner: Banner[] }>>("get", url),
    { revalidateOnFocus: false }
  );
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (data) {
      new Swiper(".banner-swiper", {
        effect: "fade",
        slidesPerView: "auto",
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        resizeObserver: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        on: {
          slideChange: function () {
            let that: any = this;
            setActive(that.activeIndex);
          },
        },
      });
    }
  }, [data, nid]);
  return (
    <section className="relative w-full h-[170px] sm:h-[300px] md:h-[600px] text-base">
      <div
        className={`swiper-container w-full h-full flex-1 ${"banner-swiper"}`}
      >
        <div className="swiper-wrapper">
          {data &&
            data.data.banner.map((i, index) => (
              <div key={index} className={`swiper-slide xl:h-[800px] `}>
                <Link
                  className="relative bg-gray-600"
                  href={i.url}
                  target={i.url.indexOf("http") != -1 ? "_black" : ""}
                >
                  {/* Next.js 图标会自动懒加载，放到轮播图时Next懒加载会导致图片未加载，即使已经能看到图片元素 */}
                  <img
                    src={process.env.NEXT_PUBLIC_HOST + i.images}
                    className="w-full h-full absolute object-cover right-0 left-0 top-0 bottom-0"
                    fetchPriority="high"
                  ></img>

                  <div
                    className="text-white w-full h-full pt-[10%] md:pt-[25%] xl:pt-[10%] relative z-10 px-global"
                    key={active}
                  >
                    <Anime options={{ translateY: [100, 0] }}>
                      <h1 className="text-lg sm:text-[30px] lg:text-[40px]">
                        <LangText name={i.name}></LangText>
                      </h1>
                    </Anime>
                    <Anime options={{ translateY: [100, 0] }}>
                      <span className="text-base sm:text-[18px] lg:text-[26px] sm:my-5 inline-block line-clamp-3">
                        <LangText name={i.abstract}></LangText>
                      </span>
                    </Anime>
                  </div>
                </Link>
              </div>
            ))}
        </div>
        {data && data?.data.banner.length > 1 && (
          <div className="swiper-pagination"></div>
        )}
      </div>
    </section>
  );
};

export default Banner;
