import { AST_TOKEN_CMP_LT } from "./AstTokens";
import { IAstExpression } from "./IAstExpression";

export type IAstCmpLt = {
  type: AST_TOKEN_CMP_LT;

  items: [IAstExpression, IAstExpression];
};
