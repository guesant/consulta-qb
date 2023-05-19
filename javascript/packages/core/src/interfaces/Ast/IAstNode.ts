import { IAstCmpBetween } from "./IAstCmpBetween";
import { IAstCmpEq } from "./IAstCmpEq";
import { IAstCmpGt } from "./IAstCmpGt";
import { IAstCmpGte } from "./IAstCmpGte";
import { IAstCmpIn } from "./IAstCmpIn";
import { IAstCmpIsNotNull } from "./IAstCmpIsNotNull";
import { IAstCmpIsNull } from "./IAstCmpIsNull";
import { IAstCmpLike } from "./IAstCmpLike";
import { IAstCmpLt } from "./IAstCmpLt";
import { IAstCmpLte } from "./IAstCmpLte";
import { IAstCmpNEq } from "./IAstCmpNEq";
import { IAstColumn } from "./IAstColumn";
import { IAstExpression } from "./IAstExpression";
import { IAstLiteral } from "./IAstLiteral";
import { IAstOpAnd } from "./IAstOpAnd";
import { IAstOpNot } from "./IAstOpNot";
import { IAstOpOr } from "./IAstOpOr";
import { IAstParam } from "./IAstParam";
import { IAstQuery } from "./IAstQuery";
import { IAstQuerySelect } from "./IAstQuerySelect";
import { IAstSymbol } from "./IAstSymbol";
import { IAstValue } from "./IAstValue";

export type IAstNode =
  | IAstCmpBetween
  | IAstCmpEq
  | IAstCmpGt
  | IAstCmpGte
  | IAstCmpIn
  | IAstCmpIsNotNull
  | IAstCmpIsNull
  | IAstCmpLike
  | IAstCmpLt
  | IAstCmpLte
  | IAstCmpNEq
  | IAstExpression
  | IAstLiteral
  | IAstOpAnd
  | IAstOpNot
  | IAstOpOr
  | IAstParam
  | IAstQuery
  | IAstQuerySelect
  | IAstColumn
  | IAstSymbol
  | IAstValue;
