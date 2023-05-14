import { IExpression } from "./IExpression";

export type IExpressionComparisonBetween = {
  type: "cmp_between";

  value: IExpression;
  start: IExpression;
  end: IExpression;
};

export type IExpressionComparisonBetweenRef = {
  ref: "cmp_between";

  BETWEEN: IExpressionComparisonBetween;
};
