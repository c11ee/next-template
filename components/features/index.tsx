import Image from "@/components/image/";
import LangText from "../langText";

/** 功能特点 */
const Features = ({ data }: { data?: Content }) => {
  return (
    <section className="section px-global">
      <div className="title">
        <h1>{data && <LangText name={data.name[0]}></LangText>}</h1>
        <p>{data && <LangText name={data.abstract[0]}></LangText>}</p>
      </div>

      <ul className="w-full flex gap-5 sm:gap-y-10 sm:gap-x-[100px] flex-wrap justify-center">
        {data &&
          data.images?.map((i, index) => (
            <li key={index} className="text-center">
              <div className=" inline-block border border-solid border-gray-200 rounded-full p-[10px] sm:p-[20px] lg:p-[30px] xl:p-[50px] m-auto sm:mb-5 mb-2">
                <div className="relative size-[20px] sm:size-[30px] lg:size-[50px] xl:size-[100px]  ">
                  <Image
                    src={process.env.NEXT_PUBLIC_HOST + i.src}
                    alt={i.title || "Features"}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className="w-[150px] sm:w-[200px]">
                <h1 className="line-clamp-1 text-gray-900 text-base sm:text-xl mb-2">
                  <LangText name={data.name[index + 1]}></LangText>
                </h1>
                <p className="line-clamp-3 text-gray-400 text-sm sm:text-base">
                  <LangText name={data.abstract[index + 1]}></LangText>
                </p>
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default Features;
