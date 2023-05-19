import { ISchemaExpressionColumn } from "./ISchemaExpressionColumn";
import { ISchemaExpressionSymbol } from "./ISchemaExpressionSymbol";

export type ISchemaQuerySelectColumnTarget =
  | ISchemaExpressionColumn
  | ISchemaExpressionSymbol;
