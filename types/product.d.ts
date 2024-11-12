interface ProductCate {
  status_text: string;
  id: number;
  pid: number;
  name: Name;
  image: string;
  status: string;
  create_time: string;
  delete_time: null;
  language: Language;
  children: Child[];
}

interface Child {
  status_text: string;
  id: number;
  pid: number;
  name: Name;
  image: string;
  status: string;
  create_time: string;
  delete_time: null;
  language: Language;
}

interface Product {
  id: number;
  cid: number;
  nid: number;
  name: Name;
  abstract: Name;
  images: Image[] | null;
  sort: number;
  status: number;
  recommand: number;
  new: number;
  create_time: string;
  delete_time: null;
  language: Language;
}
interface Image {
  src: string;
  title: string;
}