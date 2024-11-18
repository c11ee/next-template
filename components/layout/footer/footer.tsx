import Image from "@/components/image/";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getIndexLink, getIndexNav } from "@/apis/nav";
import LangText from "@/components/langText";
import t from "@/i18n";
import useContact from "@/hooks/useContact";

const Footer = () => {
  const [footList, setFootList] = useState<Nav[]>([]);
  const { data } = getIndexNav(1);
  const { data: contentData } = useContact();
  const { data: dataLink } = getIndexLink();

  useEffect(() => {
    setFootList(data?.data.navs || []);
  }, [data]);
  return (
    <footer className="bg-gray-900">
      <div className="py-5 sm:py-[60px] md:py-[80px]  md:flex px-global">
        <div className="flex-1">
          <div className="hidden sm:flex flex-wrap gap-[50px] xxl:gap-[78px]">
            {footList.map((foot, index) => (
              <ul key={index} className="text-white">
                <li className="font-pht-b font-bold text-lg mb-[40px]">
                  <LangText name={foot.name}></LangText>
                </li>
                {foot.children ? (
                  foot.children.map((child, childIndex) => (
                    <li key={childIndex} className="text-sm mb-5 last:mb-0">
                      <Link
                        href={child.url}
                        target={child.url.indexOf("http") != -1 ? "_black" : ""}
                      >
                        <LangText name={child.name}></LangText>
                      </Link>
                    </li>
                  ))
                ) : (
                  <li key={foot.url + "b"} className="text-sm mb-5 last:mb-0">
                    <Link
                      href={foot.url}
                      target={foot.url.indexOf("http") != -1 ? "_black" : ""}
                    >
                      <LangText name={foot.name}></LangText>
                    </Link>
                  </li>
                )}
              </ul>
            ))}
          </div>
          {/* 友情链接 */}
          <div className="text-white text-sm sm:mt-4">
            <span>{t("link")}：</span>
            {dataLink?.data.link.map((i) => (
              <Link href={i.url} target="_black" className="mr-2" key={i.id}>
                <LangText name={i.name}></LangText>
              </Link>
            ))}
          </div>
        </div>
        <div
          className=" gap-x-5 flex md:block sm:mb-5 md:mb-0 md:mt-0 sm:mt-10 mt-4 md:border-l border-gray-300 md:ml-[30px] lg:ml-[60px] xl:ml-[80px]
        md:pl-[30px] lg:pl-[60px] xl:pl-[80px]"
        >
          <div className="size-[100px] md:size-[150px] relative">
            {contentData && (
              <Image
                src={process.env.NEXT_PUBLIC_HOST + contentData[0].wecom}
                alt="bottom-logo"
                layout="fill"
              ></Image>
            )}
          </div>
          <address className="text-white text-sm flex flex-col gap-y-5 not-italic md:mt-[40px] w-[211px]">
            {contentData && (
              <p>
                <i className="iconfont icon-daohangdizhi mr-2"></i>
                <LangText name={contentData[0].address}></LangText>
              </p>
            )}
            {contentData && (
              <p>
                <i className="iconfont icon-24gf-telephone mr-2"></i>
                <span>{contentData[0].customer}</span>
              </p>
            )}
            {contentData && (
              <p>
                <i className="iconfont icon-email-fill mr-2"></i>
                <span>
                  {
                    contentData.config.find((i) => i.name == "site_email")
                      ?.value
                  }
                </span>
              </p>
            )}
          </address>
        </div>
      </div>
      {contentData && (
        <div className="text-xs text-white py-5 px-2 bg-gray-900 text-center border border-solid border-white border-opacity-60">
          {contentData[0].version}
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <Link href={"https://beian.miit.gov.cn"} target="_block">
            {contentData[0].record}
          </Link>
        </div>
      )}
    </footer>
  );
};

export default Footer;
