import { getContent } from "@/apis/content";
import t from "@/i18n";
import { useEffect, useState } from "react";
import LangText from "../langText";
import Image from "@/components/image/";
import { Card, CardContent, CardMedia } from "@mui/material";

/** 创新理念 */
const Innovative = ({ data }: { data?: Content }) => {
  return (
    <section className="section px-global">
      <div className="title">
        <h1>{data && <LangText name={data.name[0]}></LangText>}</h1>
      </div>
      {data?.images && (
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-5 justify-center">
          {data.images.map((i, index) => (
            <li key={index} className="flex items-center">
              <Card className="h-full">
                <CardMedia
                  className="size-[50px] md:size-[100px] m-auto mt-4"
                  image={process.env.NEXT_PUBLIC_HOST + i.src}
                  title={i.title}
                />
                <CardContent>
                  <p className="text-base md:text-xl text-gray-900 line-clamp-1">
                    <LangText name={data.name[index + 1]}></LangText>
                  </p>
                  <p className="text-sm md:text-base mt-4 text-gray-400">
                    <LangText name={data.abstract[index + 1]}></LangText>
                  </p>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Innovative;
