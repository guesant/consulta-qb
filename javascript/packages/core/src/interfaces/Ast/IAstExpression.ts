import { AST_TOKEN_EXPRESSION } from "./AstTokens";
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
import { IAstOpAnd } from "./IAstOpAnd";
import { IAstOpNot } from "./IAstOpNot";
import { IAstOpOr } from "./IAstOpOr";
import { IAstValue } from "./IAstValue";

export type IAstExpression = {
  type: AST_TOKEN_EXPRESSION;

  data:
    | IAstOpAnd
    | IAstOpOr
    | IAstOpNot
    | IAstCmpEq
    | IAstCmpNEq
    | IAstCmpLt
    | IAstCmpLte
    | IAstCmpGt
    | IAstCmpGte
    | IAstCmpLike
    | IAstCmpIn
    | IAstCmpIsNull
    | IAstCmpIsNotNull
    | IAstValue;
};
