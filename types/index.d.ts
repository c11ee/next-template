declare module "lodash";

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
