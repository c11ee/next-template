declare module "lodash";
declare module 'swiper';

type Langs = "cn" | "en" | "ja";

interface Language {
  cn: Cn;
  en: Cn;
  ja: Cn;
}

interface Cn {
  name: string;
}

interface Name {
  cn: string;
  en: string;
  ja: string;
}

type Type = "hot" | "new";
