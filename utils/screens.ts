import { AppStoreType } from "@/store/app";

export function handleComScreens(width: number): AppStoreType["screens"] {
  if (width >= 1440) {
    return "xxl";
  } else if (width >= 1200 && width < 1440) {
    return "xl";
  } else if (width >= 992 && width < 1200) {
    return "lg";
  } else if (width >= 768 && width < 992) {
    return "md";
    //   } else if (width >= 480) {
  } else {
    return "sm";
  }
}
