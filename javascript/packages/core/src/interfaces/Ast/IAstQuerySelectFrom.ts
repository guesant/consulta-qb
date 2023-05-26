import { AST_TOKEN_SELECT_FROM } from "./AstTokens";

export type IAstQuerySelectFrom = {
  type: AST_TOKEN_SELECT_FROM;

  table: string;

  as: string | null;
};
