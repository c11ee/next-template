import Nav from "../nav/index";
import { Provider } from "react-redux";
import store from "@/store";
import { handleChangeScrollY, handleChangeWindowWidth } from "@/store/app";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Footer from "../footer/footer";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import localFont from "next/font/local";
import Head from "next/head";
import { getIndexSeo } from "@/apis";
import { StoreStateType } from "@/store";
import { useSelector } from "react-redux";
import useMonitorUserAccessTime from "@/hooks/useMonitorUserAccessTime";

const aliPuHuiTiBold = localFont({
  src: "../../../public/fonts/Alibaba-PuHuiTi-Bold.ttf",
  variable: "--font-ali-puhuiti-bold",
  weight: "100 900",
});
const aliPuHuiTiRegular = localFont({
  src: "../../../public/fonts/Alibaba-PuHuiTi-Regular.ttf",
  variable: "--font-ali-puhuiti-regular",
  weight: "100 900",
});

const Warp = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  useMonitorUserAccessTime();
  const { lang } = useSelector((state: StoreStateType) => state.app);
  const { data } = getIndexSeo();
  const dispatch = useDispatch(); // 定义派发器
  const handleScroll = () => {
    dispatch(handleChangeScrollY(window.scrollY));
  };

  const handleResize = () => {
    dispatch(
      handleChangeWindowWidth(
        window.innerWidth || document.getElementById("__next")?.clientWidth
      )
    );
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    /**
     * 在 React 中，`useEffect` 钩子可以返回一个函数，这个函数会在组件销毁时执行，
     * 类似于类组件中的 `componentWillUnmount` 生命周期方法。
     */
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    // 清理函数，在组件卸载时移除事件监听器
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // 空依赖数组表示这个effect只在组件挂载和卸载时运行
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
        <meta name="keywords" content={data?.data.seo[0].key_word[lang]} />
        {/* 网页描述 */}
        <meta
          name="description"
          content={data?.data.seo[0].key_content[lang]}
        />
        <title>{data?.data.seo[0].key_title[lang] || "恩格源"}</title>
        {/* 
          直接设置会出现警告，还得在 `_document` 组件设置
          <html lang="zh" /> 
        */}
      </Head>
      <div
        className={`${aliPuHuiTiBold.variable} ${aliPuHuiTiRegular.variable}`}
      >
        {children}
      </div>
    </>
  );
};

export default function RootTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <Warp>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Nav></Nav>
            {children}
            <Footer></Footer>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </Warp>
    </Provider>
  );
}
