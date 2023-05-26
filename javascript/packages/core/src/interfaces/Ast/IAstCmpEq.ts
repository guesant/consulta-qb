import { AST_TOKEN_CMP_EQ } from "./AstTokens";
import { IAstExpression } from "./IAstExpression";

export type IAstCmpEq = {
  type: AST_TOKEN_CMP_EQ;

  items: [IAstExpression, IAstExpression];
};
