import { AST_TOKEN_CMP_BETWEEN } from "./AstTokens";
import { IAstExpression } from "./IAstExpression";

export type IAstCmpBetween = {
  type: AST_TOKEN_CMP_BETWEEN;

  value: IAstExpression;

  start: IAstExpression;

  end: IAstExpression;
};
