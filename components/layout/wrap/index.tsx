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
    <div className={`${aliPuHuiTiBold.variable} ${aliPuHuiTiRegular.variable}`}>
      {children}
    </div>
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
