import {IExpressionValue} from "../../IExpression";

export type IQuerySelectColumn =
  IExpressionValue
  | { value: IExpressionValue, as?: string }