import { IExpression } from "./IExpression";

export type IExpressionComparisonGreaterThanOrEqual = [
  IExpression,
  IExpression
];

export type IExpressionComparisonGreaterThanOrEqualRef = {
  ref: "cmp_gte";
  ">=": IExpressionComparisonGreaterThanOrEqual;
};
