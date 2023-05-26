import { AST_TOKEN_CMP_GTE } from "./AstTokens";
import { IAstExpression } from "./IAstExpression";

export type IAstCmpGte = {
  type: AST_TOKEN_CMP_GTE;

  items: [IAstExpression, IAstExpression];
};
