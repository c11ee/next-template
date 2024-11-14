import Wrapper from "../components/layout/wrap";
import { type ReactElement, type ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import "swiper/css/swiper.min.css"; // 注意这里的引入
import "../public/globals.css";
import "../public/iconfont/iconfont.css";
import { getIndexSeo } from "@/apis";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const { data } = getIndexSeo();

  return (
    <>
      <Head>
        {/* 360浏览器限制极速模式 */}
        <meta name="renderer" content="webkit" />
        <meta http-equiv="X-UA-Compatible" content="IE=10,chrome=1" />
        <meta name="force-rendering" content="webkit" />
        {/* 网页作者 */}
        <meta name="author" content="毕方网络开发" />
        {/* 网页地址 */}
        <meta name="website" content="http://bfidc.bifnet.com/" />
        {/* 网页版权信息 */}
        {/* <meta name="copyright" content="2020-2021 demo.com" /> */}
        {/* 搜索引擎索引方式，一般为all，不用深究 */}
        <meta name="robots" content="all" />
        {/* 移动端常用视口设置 */}
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,maximum-scale=1.0, user-scalable=no"
        />
        {/* 网页关键字, 用于SEO */}
        <meta name="keywords" content={data?.data.seo[0].key_word} />
        {/* 网页描述 */}
        <meta name="description" content={data?.data.seo[0].key_content} />
        <title>{data?.data.seo[0].key_title || "恩格源"}</title>
        {/* 
          直接设置会出现警告，还得在 `_document` 组件设置
          <html lang="zh" /> 
        */}
      </Head>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </>
  );
}
