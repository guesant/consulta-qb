import { IExpression } from "./IExpression";

export type IExpressionOperatorNot = IExpression;

export type IExpressionOperatorNotRef =
  | {
      ref: "op_not";
      NOT: IExpressionOperatorNot;
    }
  | {
      ref: "op_not";
      "!": IExpressionOperatorNot;
    };
