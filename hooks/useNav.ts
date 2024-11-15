import { getIndexNav } from "@/apis/nav";

/**
 *
 */
const useNav = (type: 0 | 1) => {
  const { data } = getIndexNav(type);

  const recursion = (url: string, data: Nav[]): number => {
    for (const i of data) {
      if (i.url == url) {
        return i.id;
      } else if (i.children) {
        const result = recursion(url, i.children);
        if (result !== -1) {
          return result;
        }
      }
    }
    return -1;
  };

  const getNidByPath = (path: string) => {
    return recursion(path, data?.data.navs || []);
  };
  return {
    data,
    getNidByPath,
  };
};

export default useNav;
