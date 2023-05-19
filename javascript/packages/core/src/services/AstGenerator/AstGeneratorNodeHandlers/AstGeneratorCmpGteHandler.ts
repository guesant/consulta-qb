import {
  AST_TOKEN_CMP_GTE,
  IAstCmpGte,
  IAstExpression,
  ISchemaExpressionCmpGreaterThanOrEqual,
} from "../../../interfaces";
import { generateAst } from "../generateAst";
import { IAstGeneratorNodeHandler } from "../interfaces/IAstGeneratorNodeHandler";

export const AstGeneratorCmpGteHandler: IAstGeneratorNodeHandler<
  ISchemaExpressionCmpGreaterThanOrEqual,
  IAstCmpGte
> = {
  path: "#/$defs/cmp_gte",

  handle(gteStructure) {
    const data = gteStructure.data;

    const items = data[">="]
      .map((item) => generateAst(item) as IAstExpression)
      .slice(0, 2) as [IAstExpression, IAstExpression];

    const astExpression: IAstCmpGte = {
      type: AST_TOKEN_CMP_GTE,
      items,
    };

    return astExpression;
  },
};
