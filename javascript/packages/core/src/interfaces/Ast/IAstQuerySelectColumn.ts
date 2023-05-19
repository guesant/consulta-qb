import { AST_TOKEN_SELECT_COLUMN } from "./AstTokens";
import { IAstQuerySelectTarget } from "./IAstQuerySelectTarget";

export type IAstQuerySelectColumn = {
  type: AST_TOKEN_SELECT_COLUMN;

  as: string | null;

  value: IAstQuerySelectTarget;
};
