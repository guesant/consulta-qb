import { ISchemaValue } from "./ISchemaValue";
import { ISchemaConstraintTableName } from "./ISchemaConstraintTableName";

export type ISchemaQuerySelectJoin = {
  mode: "inner" | "left" | "right" | "full";
  table: ISchemaConstraintTableName;
  as?: string;
  on: ISchemaValue;
};
