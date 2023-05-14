import { IExpression } from "./IExpression";

export type IExpressionComparisonIsNull = IExpression;

export type IExpressionComparisonIsNullRef = {
  ref: "cmp_is_null";
  "IS NULL": IExpressionComparisonIsNull;
};
