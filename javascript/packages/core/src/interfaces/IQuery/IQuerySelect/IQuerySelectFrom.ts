import {IConstraintTableName} from "../../IConstraints";

export type IQuerySelectFrom =
  IConstraintTableName
  | { table: IConstraintTableName, as?: string }