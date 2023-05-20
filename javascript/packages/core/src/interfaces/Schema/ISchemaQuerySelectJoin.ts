import { ISchemaConstraintTableName } from "./ISchemaConstraintTableName";
import { ISchemaExpression } from "./ISchemaExpression";

export type ISchemaQuerySelectJoin = {
  mode: "inner" | "left" | "right" | "full";
  table: ISchemaConstraintTableName;
  as?: string;
  on: ISchemaExpression;
};
