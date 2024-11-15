import { useEffect, useState } from "react";
import Swiper from "swiper";
import LangText from "../langText";

/**
 * 历程
 */
const Course = ({ data }: { data: Content }) => {
  const [swiper, setSwiper] = useState(null);
  useEffect(() => {
    if (data.images) {
      setTimeout(() => {
        setSwiper(
          new Swiper(".course-swiper", {
            slidesPerView: 1.5,
            centeredSlides: true,
            spaceBetween: 2,
            loop: true,
            observer: true, //修改swiper自己或子元素时，自动初始化swiper
            observeParents: true, //修改swiper的父元素时，自动初始化swiper
            resizeObserver: true,
            autoplay: {
              delay: 4000,
              disableOnInteraction: false,
            },
            pagination: {
              el: ".swiper-page",
              clickable: true,
              renderBullet: function (index: number, className: string) {
                return (
                  '<span class="' +
                  className +
                  ' w-[40px] h-[5px] rounded-none"></span>'
                );
              },
            },
          })
        );
      }, 100);
    }
  }, [data]);

  return (
    <section className="section px-global">
      <div className="title">
        <h1>
          <LangText name={data.name[0]}></LangText>
        </h1>
        <p>
          <LangText name={data.abstract[0]}></LangText>
        </p>
      </div>

      <div className="relative">
        <div className="swiper-container course-swiper ">
          <div className="swiper-wrapper">
            {data.images?.map((i, index) => (
              <div
                key={index}
                className={`swiper-slide h-[200px] sm:h-[250px] md:!h-[350] lg:!h-[550px] relative bg-gray-600`}
              >
                {/* Next.js 图标会自动懒加载，放到轮播图时Next懒加载会导致图片未加载，即使已经能看到图片元素 */}
                <img
                  src={process.env.NEXT_PUBLIC_HOST + i.src}
                  className="w-full h-[170px] sm:h-[200px] md:h-[300px] lg:h-[500px] object-cover"
                ></img>
                <p
                  className="h-[30px] leading-[30px] text-sm pl-2 sm:h-[50px] sm:leading-[50px] sm:text-base sm:pl-5
                bg-gray-100 line-clamp-1"
                >
                  <LangText name={data.name[index + 1]}></LangText>
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="swiper-page mt-[20px] flex gap-x-[10px] justify-center"></div>
      </div>
    </section>
  );
};

export default Course;
