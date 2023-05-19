import { AST_TOKEN_OP_AND } from "./AstTokens";
import { IAstExpression } from "./IAstExpression";

export type IAstOpAnd = {
  type: AST_TOKEN_OP_AND;

  items: IAstExpression[];
};
