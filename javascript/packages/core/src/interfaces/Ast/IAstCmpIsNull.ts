import { AST_TOKEN_CMP_IS_NULL } from "./AstTokens";
import { IAstExpression } from "./IAstExpression";

export type IAstCmpIsNull = {
  type: AST_TOKEN_CMP_IS_NULL;

  value: IAstExpression;
};
