import { AST_TOKEN_OP_PARAM } from "./AstTokens";

export type IAstParam = {
  type: AST_TOKEN_OP_PARAM;

  name: string;
};
