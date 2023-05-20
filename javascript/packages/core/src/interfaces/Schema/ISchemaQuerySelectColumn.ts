import { ISchemaValue } from "./ISchemaValue";
import { ISchemaQuerySelectColumnVerbose } from "./ISchemaQuerySelectColumnVerbose";

export type ISchemaQuerySelectColumn =
  | ISchemaValue
  | ISchemaQuerySelectColumnVerbose;
