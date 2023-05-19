import { AST_TOKEN_SYMBOL } from "./AstTokens";

export type IAstSymbol = {
  type: AST_TOKEN_SYMBOL;

  data: string;
};
