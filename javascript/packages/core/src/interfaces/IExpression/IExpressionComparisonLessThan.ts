import {IExpression} from "./IExpression";

export type IExpressionComparisonLessThan = [IExpression, IExpression];

export type IExpressionComparisonLessThanRef = {
  ref: "cmp_lt";
  "<": IExpressionComparisonLessThan;
};
