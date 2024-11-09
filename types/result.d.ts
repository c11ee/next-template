/**
 * 接口返回类型
 * 还需增加 code
 * 接口返回类型
 */
interface ResultType<T> {
  error_code: 0 | 1 | -1;
  reason: string;
  result: T;
}

type JZTKTYType = {
  id: number;
  question: string; //问题
  answer: string; //答案
  item1: string; //选项，当内容为空时表示判断题正确选项
  item2: string; //选项，当内容为空时表示判断题错误选项
  item3: string;
  item4: string;
  explains: string; //答案解释
  url: string; //图片url
};
