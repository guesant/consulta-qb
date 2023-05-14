import {IConstraintTableName} from "../../IConstraints";
import {IExpressionValue} from "../../IExpression";

export type IQuerySelectJoin = {
  mode: "inner" | "left" | "right" | "full";
  table: IConstraintTableName;
  as?: string;
  on: IExpressionValue;
};