import { IExpression } from "./IExpression";

export type IExpressionComparisonLessThanOrEqual = [IExpression, IExpression];

export type IExpressionComparisonLessThanOrEqualRef = {
  ref: "cmp_lte";
  "<=": IExpressionComparisonLessThanOrEqual;
};
