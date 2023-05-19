import { ISchemaQuerySelectFromVerbose } from "./ISchemaQuerySelectFromVerbose";
import { ISchemaConstraintTableName } from "./ISchemaConstraintTableName";

export type ISchemaQuerySelectFrom =
  | ISchemaConstraintTableName
  | ISchemaQuerySelectFromVerbose;
