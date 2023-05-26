import { AST_TOKEN_SELECT_JOIN } from "./AstTokens";
import { IAstExpression } from "./IAstExpression";

export type IAstQuerySelectJoin = {
  type: AST_TOKEN_SELECT_JOIN;

  mode: "inner" | "left" | "right" | "full";

  table: string;

  as: string;

  on: IAstExpression;
};
