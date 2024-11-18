import { StoreStateType } from "@/store";
import { useElementVisibility } from "@reactuses/core";
import { AnimeParams } from "animejs";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
const anime = require("animejs");

type PropsType = {
  /** 动画配置 */
  options?: AnimeParams;
  style?: React.CSSProperties;
  className?: string;
  children: React.ReactNode;
  /** 是否只触发一次 */
  once?: boolean;
  /** 是否为数字动画 是的话必须执行动画，否者会为空 */
  isNumberAnime?: boolean;
};

const Anime = ({
  options,
  children,
  once,
  isNumberAnime,
  ...other
}: PropsType) => {
  const appState = useSelector((state: StoreStateType) => state.app);
  const ref = useRef(null);
  const [visible] = useElementVisibility(ref);
  const [isTriggered, setIsTriggered] = useState(false);

  options ??= {};
  options.opacity = options.opacity || [0, 1];
  options.duration = options.duration || 500;
  options.delay = options.delay || 0;
  options.easing = options.easing || "easeInOutQuad";
  options.targets = options.targets || ref.current;
  useEffect(() => {
    if ((appState.model === "h5" && !isNumberAnime) || (once && isTriggered)) {
      return;
    }
    if (visible) {
      anime.default(options);
      setIsTriggered(true);
    }
  }, [visible]);
  return (
    <div ref={ref} {...other}>
      {children}
    </div>
  );
};

export default Anime;
