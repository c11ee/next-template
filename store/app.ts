import { handleComScreens } from "@/utils/screens";
import { createSlice } from "@reduxjs/toolkit";

export type AppStoreType = {
  scrollY: number;
  windowWidth: number;
  screens: "sm" | "md" | "lg" | "xl" | "xxl";
  lang: Langs;
  nid?: number;
  model: "pc" | "h5";
};

const appSlice = createSlice({
  name: "app", // 唯一
  // state初始值
  initialState: {
    scrollY: 0,
    windowWidth: 0,
    screens: "xxl",
    lang: "cn",
    // 路由id
    nid: undefined,
    model: "pc",
  } as AppStoreType,
  // 指定state的各种操作，直接在对象中添加方法
  reducers: {
    handleChangeScrollY(state, action) {
      // state是个代理，直接操作，不需复制返回未改变值
      state.scrollY = action.payload as number;
    },
    handleChangeWindowWidth(state, action) {
      state.windowWidth = action.payload as number;

      state.screens = handleComScreens(state.windowWidth);
      state.model = ["sm", "md"].includes(state.screens) ? "h5" : "pc";
    },
    setLang(state, action) {
      state.lang = action.payload;
    },
    setNid(state, action) {
      state.nid = action.payload;
      console.log(" state.nid", state.nid);
    },
  },
});

export const { handleChangeScrollY, handleChangeWindowWidth, setLang, setNid } =
  appSlice.actions; // 暴露操作方法

export const { reducer: appReducer } = appSlice;
