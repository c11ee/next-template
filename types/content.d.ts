/**
 * 'solute' => '解决方案',
   'partner' => '合作伙伴',
   'research' => '研发实力',
   'about' => '关于格恩源',
   'good' => '产品中心',
 */
type ContentType = "solute" | "partner" | "research" | "about" | "good";

interface Banner {
  id: number;
  abstract: Name;
  name: Name;
  url: string;
  images: string;
  sort: number;
  status: number;
  create_time: string;
  delete_time: null;
  language: Language;
}

interface Content {
  id: number;
  type: string;
  nid: number;
  name: Name[];
  abstract: Name[];
  button: Name[];
  content: Name[];
  images: Image[] | null;
  sort: number;
  status: number;
  create_time: string;
  delete_time: null;
  language: Language;
}

/** 咨询动态 */
interface Con {
  type_text: string;
  id: number;
  type: string;
  nid: number;
  name: Name;
  content: Name;
  cover: string;
  sort: number;
  status: number;
  create_time: string;
  delete_time: null;
  language: Language;
}

interface Language {
  cn: Cn;
  en: Cn;
}

interface Cn {
  name: string;
  abstract: string;
}

interface Name {
  cn: string;
  en: string;
}