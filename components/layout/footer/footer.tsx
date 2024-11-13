"use client";

import Image from "@/components/image/";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getIndexNav } from "@/apis/nav";
import LangText from "@/components/langText";
import Qrcode from "../../../public/image/qrcode.png";

const Footer = () => {
  const [footList, setFootList] = useState<Nav[]>([]);
  const friendlyLinks = [
    {
      label: "格恩源1688店铺",
      url: "https://www.1688.com/",
    },
    {
      label: "格恩源亚马逊店铺",
      url: "https://www.amazon.com/",
    },
    {
      label: "格恩源淘宝店铺",
      url: "https://www.taobao.com/",
    },
  ];
  const { data } = getIndexNav("bottom");
  // const footList = [
  //   {
  //     title: "首页",
  //     children: [
  //       {
  //         label: "核心业务",
  //         href: "/#business",
  //       },
  //       {
  //         label: "精选案例",
  //         href: "/#case",
  //       },
  //       {
  //         label: "合作伙伴",
  //         href: "/#partners",
  //       },
  //     ],
  //   },
  //   {
  //     title: "定制开发",
  //     children: [
  //       {
  //         label: "APP开发",
  //         href: "/appdev",
  //       },
  //       {
  //         label: "小程序开发",
  //         href: "/miniprogram",
  //       },
  //       {
  //         label: "网页定制开发",
  //         href: "/urlcustom",
  //       },
  //       {
  //         label: "各行业软件开发",
  //         href: "/industrysoftdev",
  //       },
  //     ],
  //   },
  //   {
  //     title: "资讯动态",
  //     children: [
  //       {
  //         label: "资讯动态",
  //         href: "/trends",
  //       },
  //     ],
  //   },
  //   {
  //     title: "关于我们",
  //     children: [
  //       {
  //         label: "公司简介",
  //         href: "/aboutus#intro",
  //       },
  //       {
  //         label: "资质荣誉",
  //         href: "/aboutus#honor",
  //       },
  //       {
  //         label: "发展历程",
  //         href: "/aboutus#course",
  //       },
  //     ],
  //   },
  // ];

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
            <span>友情链接：</span>
            {friendlyLinks.map((i) => (
              <Link href={i.url} target="_black" className="mr-2" key={i.label}>
                {i.label}
              </Link>
            ))}
          </div>
        </div>
        <div
          className=" gap-x-5 flex md:block sm:mb-5 md:mb-0 md:mt-0 sm:mt-10 mt-4 md:border-l border-gray-300 md:ml-[30px] lg:ml-[60px] xl:ml-[80px]
        md:pl-[30px] lg:pl-[60px] xl:pl-[80px]"
        >
          <div className="size-[100px] md:size-[150px] relative">
            <Image src={Qrcode} alt="bottom-logo" layout="fill"></Image>
          </div>
          <address className="text-white text-sm flex flex-col gap-y-5 not-italic md:mt-[40px] w-[211px]">
            <p>
              <i className="iconfont icon-daohangdizhi mr-2"></i>
              <span>广东省深圳市沙河西路科技园7栋22楼</span>
            </p>
            <p>
              <i className="iconfont icon-24gf-telephone mr-2"></i>
              <span>400-8888-9999</span>
            </p>
            <p>
              <i className="iconfont icon-email-fill mr-2"></i>
              <span>onli@outlook.com</span>
            </p>
          </address>
        </div>
      </div>
      <div className="text-xs text-white py-5 px-2 bg-gray-900 text-center border border-solid border-white border-opacity-60">
        Copyright© emallevepower.com 2012 - 2022 格恩源 All Rights Reserved |
        网站备案号:
        <Link href={"https://beian.miit.gov.cn"} target="_block">
          粤ICP备07510784号-5
        </Link>
        <Link href={"https://beian.miit.gov.cn"} target="_block">
          粤公网安备4413307878100225号
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
