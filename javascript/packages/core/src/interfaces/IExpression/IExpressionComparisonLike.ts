import {IExpression} from "./IExpression";

export type IExpressionComparisonLike = {
  type: "like";
  value: IExpression;
  pattern: IExpression;
};

export type IExpressionComparisonLikeRef = {
  ref: "cmp_like";
  LIKE: IExpressionComparisonLike;
};
