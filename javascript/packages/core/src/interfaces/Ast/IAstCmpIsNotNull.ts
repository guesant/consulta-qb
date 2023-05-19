import { AST_TOKEN_CMP_IS_NOT_NULL } from "./AstTokens";
import { IAstExpression } from "./IAstExpression";

export type IAstCmpIsNotNull = {
  type: AST_TOKEN_CMP_IS_NOT_NULL;

  value: IAstExpression;
};
