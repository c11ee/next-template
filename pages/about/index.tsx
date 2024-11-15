import { getContent } from "@/apis/content";
import Banner from "@/components/banner";
import Course from "@/components/course";
import Honor from "@/components/honor";
import Image from "@/components/image";
import LangText from "@/components/langText";
import { useEffect, useState } from "react";

// 关于我们
const About = () => {
  const { data } = getContent({ type: "about" });
  const [intro, setIntro] = useState<Content>();
  const [high, setHigh] = useState<Content>();
  const [culture, setCulture] = useState<Content>();
  const [ambition, setAmbition] = useState<Content>();
  const [honor, setHonor] = useState<Content>();
  const [course, setCourse] = useState<Content>();

  useEffect(() => {
    if (data) {
      setIntro(data.data.content[0]);
      setHigh(data.data.content[1]);
      setCulture(data.data.content[2]);
      setAmbition(data.data.content[3]);
      setHonor(data.data.content[4]);
      setCourse(data.data.content[5]);
    }
  }, [data]);
  return (
    <>
      <Banner></Banner>

      {intro && (
        <section className="section px-global">
          <div className="title">
            <h1>
              <LangText name={intro.name[0]}></LangText>
            </h1>
            <p>
              <LangText name={intro.abstract[0]}></LangText>
            </p>
          </div>
          <ul className="w-full grid gap-y-10">
            {intro.images?.map((i, index) => (
              <li
                className={`sm:flex ${
                  index % 2 == 0 ? "sm:flex-row-reverse" : ""
                }`}
                key={index}
              >
                <div className="relative sm:w-1/2 h-[150px] sm:h-[300px] lg:h-[500px]">
                  <Image
                    src={process.env.NEXT_PUBLIC_HOST + i.src}
                    alt={i.title || "Solution"}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="sm:w-1/2 box-border sm:px-10 md:mt-0 mt-2 flex flex-col">
                  <p className="text-sm md:text-xl text-gray-400">
                    <LangText name={intro.content[index]}></LangText>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {high && (
        <section className="section px-global">
          <div className="title">
            <h1>
              <LangText name={high.name[0]}></LangText>
            </h1>
            <p>
              <LangText name={high.abstract[0]}></LangText>
            </p>
          </div>

          <ul className="grid grid-cols-3 gap-2 sm:gap-10">
            {high.images?.map((i, index) => (
              <li key={index}>
                <div className="relative h-[150px] sm:h-[300px] lg:h-[500px]">
                  <Image
                    src={process.env.NEXT_PUBLIC_HOST + i.src}
                    alt={i.title || "High"}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <p className="text-sm md:text-xl text-gray-400 mt-2 sm:mt-5 text-center">
                  <LangText name={high.name[index + 1]}></LangText>
                </p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {culture && (
        <section className="section px-global">
          <div className="title">
            <h1>
              <LangText name={culture.name[0]}></LangText>
            </h1>
            <p>
              <LangText name={culture.abstract[0]}></LangText>
            </p>
          </div>
          <ul className="w-full grid gap-y-10">
            {culture.images?.map((i, index) => (
              <li
                className={`sm:flex ${
                  index % 2 == 0 ? "" : "sm:flex-row-reverse"
                }`}
                key={index}
              >
                <div className="relative sm:w-1/2 h-[200px] sm:h-[300px] lg:h-[500px]">
                  <Image
                    src={process.env.NEXT_PUBLIC_HOST + i.src}
                    alt={i.title || "Solution"}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="sm:w-1/2 box-border md:px-10 md:mt-0 mt-2 flex flex-col justify-center">
                  <p className="text-sm sm:text-xl text-gray-400">
                    <LangText name={culture.name[index + 1]}></LangText>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {ambition?.images && (
        <section className="section px-global relative h-[300px] md:h-[600px] lg:h-[800px]">
          <Image
            src={process.env.NEXT_PUBLIC_HOST + ambition.images[0].src}
            alt={ambition.images[0].title || "Ambition"}
            layout="fill"
            objectFit="cover"
          />

          <div className="relative z-[1] text-center w-full h-full flex items-center flex-col justify-center text-white">
            <h1 className="text-lg md:text-2xl lg:text-5xl">
              <LangText name={ambition.name[0]}></LangText>
            </h1>

            <i className="inline-block w-[100px] h-[3px] md:h-[6px] bg-primary  my-1 md:my-5 bg-opacity-50"></i>

            <p className="text-sm md:text-base lg:text-lg">
              <LangText name={ambition.abstract[0]}></LangText>
            </p>
          </div>
        </section>
      )}

      {honor && <Honor data={honor}></Honor>}

      {course && <Course data={course}></Course>}
    </>
  );
};

export default About;
