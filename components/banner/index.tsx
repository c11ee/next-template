import useBanner from "@/hooks/useBanner";
import Image from "@/components/image/";
import LangText from "../langText";

/**
 *  轮播图组件
 */
const Banner = ({ sort }: { sort: number }) => {
  const { images, name, abstract } = useBanner(sort);

  return (
    <section className="relative w-full sm:h-[300px] md:h-[600px] xl:h-[1000px] text-base">
      <Image
        priority
        src={process.env.NEXT_PUBLIC_HOST + images}
        alt="Banner"
        layout="fill"
        objectFit="cover"
      />

      <div className="text-white w-full h-full pt-[18%] md:pt-[25%] xl:pt-[16.75%] relative z-10 px-global">
        <h1 className="text-lg sm:text-[30px] lg:text-[45px] sm:leading-[53px] font-pht-b font-bold">
          <LangText name={name}></LangText>
        </h1>
        <span className="text-base sm:text-[18px] lg:text-[26px] my-5 inline-block">
          <LangText name={abstract}></LangText>
        </span>
      </div>
    </section>
  );
};

export default Banner;
