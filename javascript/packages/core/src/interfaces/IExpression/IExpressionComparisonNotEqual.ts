import { IExpression } from "./IExpression";

export type IExpressionComparisonNotEqual = [IExpression, IExpression];

export type IExpressionComparisonNotEqualRef =
  | {
      ref: "cmp_neq";
      "!=": IExpressionComparisonNotEqual;
    }
  | {
      ref: "cmp_neq";
      "<>": IExpressionComparisonNotEqual;
    };
