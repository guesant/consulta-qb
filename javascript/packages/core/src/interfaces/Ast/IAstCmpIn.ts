import { AST_TOKEN_CMP_IN } from "./AstTokens";
import { IAstExpression } from "./IAstExpression";

export type IAstCmpIn = {
  type: AST_TOKEN_CMP_IN;

  value: IAstExpression;

  items: IAstExpression[];
};
