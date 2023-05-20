import { ISchemaConstraintColumnName } from "./ISchemaConstraintColumnName";
import { ISchemaConstraintTableName } from "./ISchemaConstraintTableName";
import { ISchemaExpression } from "./ISchemaExpression";
import { ISchemaCmpBetween } from "./ISchemaCmpBetween";
import { ISchemaCmpEqual } from "./ISchemaCmpEqual";
import { ISchemaCmpGreaterThan } from "./ISchemaCmpGreaterThan";
import { ISchemaCmpGreaterThanOrEqual } from "./ISchemaCmpGreaterThanOrEqual";
import { ISchemaCmpIn } from "./ISchemaCmpIn";
import { ISchemaCmpIsNotNull } from "./ISchemaCmpIsNotNull";
import { ISchemaCmpIsNull } from "./ISchemaCmpIsNull";
import { ISchemaCmpLessThan } from "./ISchemaCmpLessThan";
import { ISchemaCmpLessThanOrEqual } from "./ISchemaCmpLessThanOrEqual";
import { ISchemaCmpLike } from "./ISchemaCmpLike";
import { ISchemaCmpNotEqual } from "./ISchemaCmpNotEqual";
import { ISchemaColumn } from "./ISchemaColumn";
import { ISchemaLiteral } from "./ISchemaLiteral";
import { ISchemaOpAnd } from "./ISchemaOpAnd";
import { ISchemaOpNot } from "./ISchemaOpNot";
import { ISchemaOpOr } from "./ISchemaOpOr";
import { ISchemaParam } from "./ISchemaParam";
import { ISchemaSymbol } from "./ISchemaSymbol";
import { ISchemaValue } from "./ISchemaValue";
import { ISchemaQuery } from "./ISchemaQuery";
import { ISchemaQuerySelect } from "./ISchemaQuerySelect";
import { ISchemaQuerySelectColumn } from "./ISchemaQuerySelectColumn";
import { ISchemaQuerySelectColumnVerbose } from "./ISchemaQuerySelectColumnVerbose";
import { ISchemaQuerySelectFrom } from "./ISchemaQuerySelectFrom";
import { ISchemaQuerySelectFromVerbose } from "./ISchemaQuerySelectFromVerbose";
import { ISchemaQuerySelectJoin } from "./ISchemaQuerySelectJoin";

export type ISchemaNode =
  | ISchemaConstraintColumnName
  | ISchemaConstraintTableName
  | ISchemaExpression
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
  | ISchemaValue
  | ISchemaQuery
  | ISchemaQuerySelect
  | ISchemaQuerySelectColumn
  | ISchemaQuerySelectColumnVerbose
  | ISchemaQuerySelectFrom
  | ISchemaQuerySelectFromVerbose
  | ISchemaQuerySelectJoin;
