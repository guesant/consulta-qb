import {IExpression} from "./IExpression";

export type IExpressionComparisonIsNotNull = IExpression;

export type IExpressionComparisonIsNotNullRef = {
  ref: "cmp_is_not_null";
  "IS NOT NULL": IExpressionComparisonIsNotNull;
};
