import { AST_TOKEN_CMP_GT } from "./AstTokens";
import { IAstExpression } from "./IAstExpression";

export type IAstCmpGt = {
  type: AST_TOKEN_CMP_GT;

  items: [IAstExpression, IAstExpression];
};
