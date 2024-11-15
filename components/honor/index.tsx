import { useEffect, useState } from "react";
import Swiper from "swiper";
import LangText from "../langText";
import { useSelector } from "react-redux";
import { StoreStateType } from "@/store";

type HonorType = {
  url: string;
  width: number;
};
/**
 * 荣誉
 */
const Honor = ({ data }: { data: Content }) => {
  const { screens } = useSelector((state: StoreStateType) => state.app);
  let [list, setList] = useState<HonorType[]>([]);
  const [swiper, setSwiper] = useState(null);
  useEffect(() => {
    if (data.images) {
      Promise.all(
        data.images.map(
          (item) =>
            new Promise((resolve) => {
              const img = new Image();

              img.src = process.env.NEXT_PUBLIC_HOST + item.src;
              img.onload = function () {
                const that = this as HTMLImageElement;
                let i = { url: img.src, width: that.width };
                resolve(i); // 当图片加载完成时，解析这个 Promise
              };
            })
        )
      ).then((newList) => {
        setList(newList as any);
        setTimeout(() => {
          setSwiper(
            new Swiper(".honor-swiper", {
              slidesPerView: "auto",
              spaceBetween: screens == "sm" ? 10 : 40,
              loop: true,
              freeMode: true,
              loopFillGroupWithBlank: true,
              resizeObserver: true,
              speed: 4000,
              autoplay: {
                delay: 0,
                disableOnInteraction: false,
              },
            })
          );
        }, 1);
      }); // 当所有的 Promise 都解析完成时，更新状态
    }
  }, [data, screens]);

  return (
    <section className="section px-global" id="honor">
      <div className="title">
        <h1>
          <LangText name={data.name[0]}></LangText>
        </h1>
        <p>
          <LangText name={data.abstract[0]}></LangText>
        </p>
      </div>

      <div className="swiper-container honor-swiper">
        <div className="swiper-wrapper">
          {list.map((i, index) => (
            <div
              key={index}
              className={`swiper-slide h-[200px] md:!h-[320px] relative bg-gray-600`}
              style={{
                width: screens == "sm" ? i.width / 1.5 : i.width,
              }}
            >
              {/* Next.js 图标会自动懒加载，放到轮播图时Next懒加载会导致图片未加载，即使已经能看到图片元素 */}
              <img src={i.url} className="w-full h-full "></img>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Honor;
