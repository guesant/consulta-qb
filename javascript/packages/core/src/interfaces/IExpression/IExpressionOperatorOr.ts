import {IExpression} from "./IExpression";

export type IExpressionOperatorOr = {
  items: [IExpression, IExpression];
};

export type IExpressionOperatorOrRef =
  | {
  ref: "op_or";
  OR: IExpressionOperatorOr;
}
  | {
  ref: "op_or";
  "||": IExpressionOperatorOr;
};
