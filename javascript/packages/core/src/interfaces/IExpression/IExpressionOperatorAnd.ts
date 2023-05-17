import {IExpression} from "./IExpression";

export type IExpressionOperatorAnd = [IExpression, IExpression];

export type IExpressionOperatorAndRef =
  | {
  ref: "op_and";
  AND: IExpressionOperatorAnd;
}
  | {
  ref: "op_and";
  "&&": IExpressionOperatorAnd;
};
