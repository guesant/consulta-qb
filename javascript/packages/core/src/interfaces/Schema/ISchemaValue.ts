import { ISchemaColumn } from "./ISchemaColumn";
import { ISchemaLiteral } from "./ISchemaLiteral";
import { ISchemaParam } from "./ISchemaParam";
import { ISchemaSymbol } from "./ISchemaSymbol";

export type ISchemaValue =
  | ISchemaColumn
  | ISchemaLiteral
  | ISchemaParam
  | ISchemaSymbol;
