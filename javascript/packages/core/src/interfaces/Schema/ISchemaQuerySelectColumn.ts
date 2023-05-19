import { ISchemaExpressionValue } from "./ISchemaExpressionValue";
import { ISchemaQuerySelectColumnVerbose } from "./ISchemaQuerySelectColumnVerbose";

export type ISchemaQuerySelectColumn =
  | ISchemaExpressionValue
  | ISchemaQuerySelectColumnVerbose;
