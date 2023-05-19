import { AST_TOKEN_CMP_LIKE } from "./AstTokens";
import { IAstExpression } from "./IAstExpression";

export type IAstCmpLike = {
  type: AST_TOKEN_CMP_LIKE;

  value: IAstExpression;
  pattern: IAstExpression;
};
