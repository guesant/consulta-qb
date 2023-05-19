import { AST_TOKEN_COLUMN } from "./AstTokens";

export type IAstColumn = {
  type: AST_TOKEN_COLUMN;

  name: string;

  table: string | null;
};
