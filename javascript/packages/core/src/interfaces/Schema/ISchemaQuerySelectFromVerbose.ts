import { ISchemaConstraintTableName } from "./ISchemaConstraintTableName";

export type ISchemaQuerySelectFromVerbose = {
  table: ISchemaConstraintTableName;
  as?: string;
};
