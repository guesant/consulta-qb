import { ISchemaExpressionValue } from "./ISchemaExpressionValue";
import { ISchemaConstraintTableName } from "./ISchemaConstraintTableName";

export type ISchemaQuerySelectJoin = {
  mode: "inner" | "left" | "right" | "full";
  table: ISchemaConstraintTableName;
  as?: string;
  on: ISchemaExpressionValue;
};
