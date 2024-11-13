import { useSelector } from "react-redux";
import { StoreStateType } from "@/store";

type Prop = {
  name: Name;
  onClick?: () => void;
  [key: string]: string | Name | (() => void) | undefined;
};

/**
 * 处理后端返回国际化文本
 */
const LangText = ({ name, ...arg }: Prop) => {
  const { lang } = useSelector((state: StoreStateType) => state.app);

  return (
    <span {...arg} dangerouslySetInnerHTML={{ __html: name[lang] }}></span>
  );
};

export default LangText;
