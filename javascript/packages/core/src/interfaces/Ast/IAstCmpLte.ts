import { AST_TOKEN_CMP_LTE } from "./AstTokens";
import { IAstExpression } from "./IAstExpression";

export type IAstCmpLte = {
  type: AST_TOKEN_CMP_LTE;

  items: [IAstExpression, IAstExpression];
};
