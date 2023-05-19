import { ISchemaConstraintColumnName } from "./ISchemaConstraintColumnName";
import { ISchemaConstraintTableName } from "./ISchemaConstraintTableName";
import { ISchemaExpression } from "./ISchemaExpression";
import { ISchemaExpressionCmpBetween } from "./ISchemaExpressionCmpBetween";
import { ISchemaExpressionCmpEqual } from "./ISchemaExpressionCmpEqual";
import { ISchemaExpressionCmpGreaterThan } from "./ISchemaExpressionCmpGreaterThan";
import { ISchemaExpressionCmpGreaterThanOrEqual } from "./ISchemaExpressionCmpGreaterThanOrEqual";
import { ISchemaExpressionCmpIn } from "./ISchemaExpressionCmpIn";
import { ISchemaExpressionCmpIsNotNull } from "./ISchemaExpressionCmpIsNotNull";
import { ISchemaExpressionCmpIsNull } from "./ISchemaExpressionCmpIsNull";
import { ISchemaExpressionCmpLessThan } from "./ISchemaExpressionCmpLessThan";
import { ISchemaExpressionCmpLessThanOrEqual } from "./ISchemaExpressionCmpLessThanOrEqual";
import { ISchemaExpressionCmpLike } from "./ISchemaExpressionCmpLike";
import { ISchemaExpressionCmpNotEqual } from "./ISchemaExpressionCmpNotEqual";
import { ISchemaExpressionColumn } from "./ISchemaExpressionColumn";
import { ISchemaExpressionLiteral } from "./ISchemaExpressionLiteral";
import { ISchemaExpressionOpAnd } from "./ISchemaExpressionOpAnd";
import { ISchemaExpressionOpNot } from "./ISchemaExpressionOpNot";
import { ISchemaExpressionOpOr } from "./ISchemaExpressionOpOr";
import { ISchemaExpressionParam } from "./ISchemaExpressionParam";
import { ISchemaExpressionSymbol } from "./ISchemaExpressionSymbol";
import { ISchemaExpressionValue } from "./ISchemaExpressionValue";
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
  | ISchemaExpressionValue
  | ISchemaQuery
  | ISchemaQuerySelect
  | ISchemaQuerySelectColumn
  | ISchemaQuerySelectColumnVerbose
  | ISchemaQuerySelectFrom
  | ISchemaQuerySelectFromVerbose
  | ISchemaQuerySelectJoin;
