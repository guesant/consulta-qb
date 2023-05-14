import { IExpression } from "./IExpression";

export type IExpressionComparisonGreaterThan = [IExpression, IExpression];

export type IExpressionComparisonGreaterThanRef = {
  ref: "cmp_gt";
  ">": IExpressionComparisonGreaterThan;
};
