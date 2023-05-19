import { ISchemaConstraintTableName } from "./ISchemaConstraintTableName";
import { ISchemaConstraintColumnName } from "./ISchemaConstraintColumnName";

export type ISchemaExpressionColumn = {
  column: {
    table?: ISchemaConstraintTableName;
    name: ISchemaConstraintColumnName;
  };
};
