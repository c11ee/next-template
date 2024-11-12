import cn from "./lang/cn";
import en from "./lang/en";
import ja from "./lang/ja";
import { useSelector } from "react-redux";
import { StoreStateType } from "@/store";

const t = (key: string) => {
  const { lang } = useSelector((state: StoreStateType) => state.app);
  let map = {
    cn: cn,
    en: en,
    ja: ja,
  };
  let data: any = map[lang];
  return data[key] || key;
};

export default t;
