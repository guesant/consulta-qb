import { AST_TOKEN_SELECT } from "./AstTokens";
import { IAstExpression } from "./IAstExpression";
import { IAstQuerySelectColumn } from "./IAstQuerySelectColumn";
import { IAstQuerySelectFrom } from "./IAstQuerySelectFrom";
import { IAstQuerySelectJoin } from "./IAstQuerySelectJoin";

export type IAstQuerySelect = {
  type: AST_TOKEN_SELECT;

  from: IAstQuerySelectFrom;

  columns: IAstQuerySelectColumn[];

  joins: IAstQuerySelectJoin[];

  where: IAstExpression | null;
};
