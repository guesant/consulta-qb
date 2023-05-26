import { AST_TOKEN_OP_NOT } from "./AstTokens";
import { IAstExpression } from "./IAstExpression";

export type IAstOpNot = {
  type: AST_TOKEN_OP_NOT;

  value: IAstExpression;
};
