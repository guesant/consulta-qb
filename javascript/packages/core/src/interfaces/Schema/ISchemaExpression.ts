import { ISchemaValue } from "./ISchemaValue";
import { ISchemaOpAnd } from "./ISchemaOpAnd";
import { ISchemaOpOr } from "./ISchemaOpOr";
import { ISchemaOpNot } from "./ISchemaOpNot";
import { ISchemaCmpEqual } from "./ISchemaCmpEqual";
import { ISchemaCmpNotEqual } from "./ISchemaCmpNotEqual";
import { ISchemaCmpLessThan } from "./ISchemaCmpLessThan";
import { ISchemaCmpLessThanOrEqual } from "./ISchemaCmpLessThanOrEqual";
import { ISchemaCmpGreaterThan } from "./ISchemaCmpGreaterThan";
import { ISchemaCmpGreaterThanOrEqual } from "./ISchemaCmpGreaterThanOrEqual";
import { ISchemaCmpBetween } from "./ISchemaCmpBetween";
import { ISchemaCmpLike } from "./ISchemaCmpLike";
import { ISchemaCmpIn } from "./ISchemaCmpIn";
import { ISchemaCmpIsNull } from "./ISchemaCmpIsNull";
import { ISchemaCmpIsNotNull } from "./ISchemaCmpIsNotNull";
import { ISchemaColumn } from "./ISchemaColumn";
import { ISchemaLiteral } from "./ISchemaLiteral";
import { ISchemaParam } from "./ISchemaParam";
import { ISchemaSymbol } from "./ISchemaSymbol";

export type ISchemaExpression =
  | ISchemaCmpBetween
  | ISchemaCmpEqual
  | ISchemaCmpGreaterThan
  | ISchemaCmpGreaterThanOrEqual
  | ISchemaCmpIn
  | ISchemaCmpIsNotNull
  | ISchemaCmpIsNull
  | ISchemaCmpLessThan
  | ISchemaCmpLessThanOrEqual
  | ISchemaCmpLike
  | ISchemaCmpNotEqual
  | ISchemaColumn
  | ISchemaLiteral
  | ISchemaOpAnd
  | ISchemaOpNot
  | ISchemaOpOr
  | ISchemaParam
  | ISchemaSymbol
  //
  | ISchemaValue;
