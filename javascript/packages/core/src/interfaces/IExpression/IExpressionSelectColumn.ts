import {IConstraintColumnName, IConstraintTableName} from "../IConstraints";

export type IExpressionSelectColumn = {
  type: "select_column";

  table?: IConstraintTableName;
  name: IConstraintColumnName;
};

export type IExpressionSelectColumnRef = {
  ref: "select_column";

  column: IExpressionSelectColumn;
};
