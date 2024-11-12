import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Img from "next/image";
import cloudinaryLoader from "@/my-loader";
import { CSSProperties } from "react";

type PropsType = {
  className?: string;
  style?: CSSProperties;
  src: string | StaticImport;
  alt: string;
  height?: number | `${number}` | undefined;
  width?: number | `${number}` | undefined;
  priority?: boolean;
  mdWidth?: number | `${number}` | undefined;
  mdHeight?: number | `${number}` | undefined;
  layout?: string;
  objectFit?: string;
};
function Image({ ...other }: PropsType) {
  other.width ??= 0;
  other.height ??= 0;
  return <Img {...other} loader={cloudinaryLoader}></Img>;
}

export default Image;
