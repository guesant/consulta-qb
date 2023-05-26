import { AST_TOKEN_OP_OR } from "./AstTokens";
import { IAstExpression } from "./IAstExpression";

export type IAstOpOr = {
  type: AST_TOKEN_OP_OR;

  items: IAstExpression[];
};
