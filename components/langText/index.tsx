import { useSelector } from "react-redux";
import { StoreStateType } from "@/store";

type Prop = {
  name: Name;
  onClick?: () => void;
  unit?: string;
  classNames?: string[];
  [key: string]: string | Name | (() => void) | undefined | string[];
};

/**
 * 处理后端返回国际化文本
 */
const LangText = ({ name, unit, classNames, ...arg }: Prop) => {
  const { lang } = useSelector((state: StoreStateType) => state.app);

  return (
    <>
      {!unit ? (
        <span {...arg} dangerouslySetInnerHTML={{ __html: name[lang] }}></span>
      ) : (
        name[lang]
          .split(unit)
          .map((i, index) => (
            <span
              {...arg}
              key={index}
              dangerouslySetInnerHTML={{ __html: i }}
              className={classNames && classNames[index]}
            ></span>
          ))
      )}
    </>
  );
};

export default LangText;
