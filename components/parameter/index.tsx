import LangText from "../langText";
import { useEffect } from "react";
import Swiper from "swiper";

/** 规格参数 */
const Parameter = ({ data }: { data?: Content }) => {
  useEffect(() => {
    if (data?.images) {
      new Swiper(".parameter-swiper", {
        slidesPerView: "auto",
        loop: true,
        speed: 2000,
      });
    }
  }, [data]);

  return (
    <section className="section px-global">
      <div className="title">
        <h1>{data && <LangText name={data.name[0]}></LangText>}</h1>
        <p>{data && <LangText name={data.abstract[0]}></LangText>}</p>
      </div>

      {data && data.images && (
        <div className="swiper-container parameter-swiper flex-1">
          <div className="swiper-wrapper">
            {data.images.map((i, index) => (
              <div
                key={index}
                className={`swiper-slide xl:h-[800px] relative bg-gray-600`}
              >
                {/* Next.js 图标会自动懒加载，放到轮播图时Next懒加载会导致图片未加载，即使已经能看到图片元素 */}
                <img
                  src={process.env.NEXT_PUBLIC_HOST + i.src}
                  className="w-full h-full "
                ></img>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Parameter;
