import { AST_TOKEN_VALUE } from "./AstTokens";
import { IAstColumn } from "./IAstColumn";
import { IAstLiteral } from "./IAstLiteral";
import { IAstParam } from "./IAstParam";
import { IAstSymbol } from "./IAstSymbol";

export type IAstValue = {
  type: AST_TOKEN_VALUE;

  data: IAstColumn | IAstSymbol | IAstLiteral | IAstParam;
};
