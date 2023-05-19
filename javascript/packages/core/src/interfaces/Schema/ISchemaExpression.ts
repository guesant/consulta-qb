import { ISchemaExpressionValue } from "./ISchemaExpressionValue";
import { ISchemaExpressionOpAnd } from "./ISchemaExpressionOpAnd";
import { ISchemaExpressionOpOr } from "./ISchemaExpressionOpOr";
import { ISchemaExpressionOpNot } from "./ISchemaExpressionOpNot";
import { ISchemaExpressionCmpEqual } from "./ISchemaExpressionCmpEqual";
import { ISchemaExpressionCmpNotEqual } from "./ISchemaExpressionCmpNotEqual";
import { ISchemaExpressionCmpLessThan } from "./ISchemaExpressionCmpLessThan";
import { ISchemaExpressionCmpLessThanOrEqual } from "./ISchemaExpressionCmpLessThanOrEqual";
import { ISchemaExpressionCmpGreaterThan } from "./ISchemaExpressionCmpGreaterThan";
import { ISchemaExpressionCmpGreaterThanOrEqual } from "./ISchemaExpressionCmpGreaterThanOrEqual";
import { ISchemaExpressionCmpBetween } from "./ISchemaExpressionCmpBetween";
import { ISchemaExpressionCmpLike } from "./ISchemaExpressionCmpLike";
import { ISchemaExpressionCmpIn } from "./ISchemaExpressionCmpIn";
import { ISchemaExpressionCmpIsNull } from "./ISchemaExpressionCmpIsNull";
import { ISchemaExpressionCmpIsNotNull } from "./ISchemaExpressionCmpIsNotNull";
import { ISchemaExpressionColumn } from "./ISchemaExpressionColumn";
import { ISchemaExpressionLiteral } from "./ISchemaExpressionLiteral";
import { ISchemaExpressionParam } from "./ISchemaExpressionParam";
import { ISchemaExpressionSymbol } from "./ISchemaExpressionSymbol";

export type ISchemaExpression =
  | ISchemaExpressionCmpBetween
  | ISchemaExpressionCmpEqual
  | ISchemaExpressionCmpGreaterThan
  | ISchemaExpressionCmpGreaterThanOrEqual
  | ISchemaExpressionCmpIn
  | ISchemaExpressionCmpIsNotNull
  | ISchemaExpressionCmpIsNull
  | ISchemaExpressionCmpLessThan
  | ISchemaExpressionCmpLessThanOrEqual
  | ISchemaExpressionCmpLike
  | ISchemaExpressionCmpNotEqual
  | ISchemaExpressionColumn
  | ISchemaExpressionLiteral
  | ISchemaExpressionOpAnd
  | ISchemaExpressionOpNot
  | ISchemaExpressionOpOr
  | ISchemaExpressionParam
  | ISchemaExpressionSymbol
  //
  | ISchemaExpressionValue;
