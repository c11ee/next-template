import t from "@/i18n";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import Swiper from "swiper";
import LangText from "../langText";

/** 应用场景 */
const Scenario = ({ data }: { data?: Content }) => {
  const [type, setType] = useState(0);

  useEffect(() => {
    if (data?.images) {
      new Swiper(".scenario-swiper" + data.id, {
        spaceBetween: 40,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        resizeObserver: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }
  }, [data]);
  return (
    <section className="section px-global">
      {data && (
        <div className="title">
          <h1>
            <LangText name={data.name[0]}></LangText>
          </h1>
          <p>
            <LangText name={data.abstract[0]}></LangText>
          </p>
        </div>
      )}

      <ul className="flex flex-wrap justify-center gap-x-5 border-b border-solid border-gray-100 pb-5 mb-8">
        {data &&
          data.name.slice(1).map((i, index) => (
            <li key={index}>
              <Button
                variant="text"
                size="large"
                sx={{
                  fontSize: 16,
                  color: type == index ? "" : "#5c5c5c",
                }}
                onClick={() => setType(index)}
              >
                <LangText name={i}></LangText>
              </Button>
            </li>
          ))}
      </ul>

      <div className="lg:flex gap-x-10 ">
        {/* swiper */}
        {data?.images && (
          <div
            className={`swiper-container ${
              "scenario-swiper" + data.id
            } flex-1 h-[200px] sm:h-[300px] lg:!h-[420px]`}
          >
            <div className="swiper-wrapper h-full">
              {data.images.map((i, index) => (
                <div
                  key={index}
                  className={`swiper-slide h-full relative bg-gray-600`}
                >
                  {/* Next.js 图标会自动懒加载，放到轮播图时Next懒加载会导致图片未加载，即使已经能看到图片元素 */}
                  <img
                    src={process.env.NEXT_PUBLIC_HOST + i.src}
                    className="w-full h-full object-cover"
                    alt={i.title}
                  ></img>
                </div>
              ))}
            </div>
            <div className="swiper-pagination"></div>
          </div>
        )}
        {/* info */}
        <div className="flex-1 mt-5 lg:mt-0 font-pht">
          {data && <LangText name={data?.content[type + 1]}></LangText>}
        </div>
      </div>
    </section>
  );
};

export default Scenario;
