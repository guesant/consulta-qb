import { ISchemaExpressionColumn } from "./ISchemaExpressionColumn";
import { ISchemaExpressionLiteral } from "./ISchemaExpressionLiteral";
import { ISchemaExpressionParam } from "./ISchemaExpressionParam";
import { ISchemaExpressionSymbol } from "./ISchemaExpressionSymbol";

export type ISchemaExpressionValue =
  | ISchemaExpressionColumn
  | ISchemaExpressionLiteral
  | ISchemaExpressionParam
  | ISchemaExpressionSymbol;
