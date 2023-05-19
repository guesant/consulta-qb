import { AST_TOKEN_CMP_NEQ } from "./AstTokens";
import { IAstExpression } from "./IAstExpression";

export type IAstCmpNEq = {
  type: AST_TOKEN_CMP_NEQ;

  items: [IAstExpression, IAstExpression];
};
