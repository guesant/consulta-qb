import {IExpression} from "./IExpression";

export type IExpressionComparisonEqual = [IExpression, IExpression];

export type IExpressionComparisonEqualRef = {
  ref: "cmp_eq";
  "==": IExpressionComparisonEqual;
};
