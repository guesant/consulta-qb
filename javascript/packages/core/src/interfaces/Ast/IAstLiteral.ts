import { AST_TOKEN_LITERAL } from "./AstTokens";

export type IAstLiteral = {
  type: AST_TOKEN_LITERAL;

  value: string | number | boolean | null;
};
