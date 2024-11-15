interface Nav {
  type_text: string;
  id: number;
  pid: number;
  name: Name;
  type: number;
  url: string;
  sort: number;
  status: number;
  create_time: string;
  delete_time: null;
  language: Language;
  children?: Child[];
}

interface Child {
  type_text: string;
  id: number;
  pid: number;
  name: Name;
  type: number;
  url: string;
  sort: number;
  status: number;
  create_time: string;
  delete_time: null;
  language: Language;
}

interface Link {
  id: number;
  name: Name;
  url: string;
  mark: string;
  sort: number;
  status: number;
  create_time: string;
  delete_time: null;
  language: Language;
}

interface Seo {
  id: number;
  key_title: Name;
  key_word: Name;
  key_content: Name;
  create_time: string;
  delete_time: null;
}
