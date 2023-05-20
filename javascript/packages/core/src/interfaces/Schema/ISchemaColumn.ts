import { ISchemaConstraintTableName } from "./ISchemaConstraintTableName";
import { ISchemaConstraintColumnName } from "./ISchemaConstraintColumnName";

export type ISchemaColumn = {
  column: {
    table?: ISchemaConstraintTableName;
    name: ISchemaConstraintColumnName;
  };
};
