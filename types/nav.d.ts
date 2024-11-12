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


