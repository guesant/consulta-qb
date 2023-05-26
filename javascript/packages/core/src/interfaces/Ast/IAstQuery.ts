import { AST_TOKEN_QUERY } from "./AstTokens";
import { IAstQuerySelect } from "./IAstQuerySelect";

export type IAstQuery = {
  type: AST_TOKEN_QUERY;

  query: IAstQuerySelect;
};
