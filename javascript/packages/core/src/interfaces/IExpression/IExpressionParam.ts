export type IExpressionParam = {
  type: "param";
  name: string;
};

export type IExpressionParamRef = {
  ref: "param";
  param: IExpressionParam;
};
