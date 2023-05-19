import {
  AST_TOKEN_CMP_GT,
  IAstCmpGt,
  IAstExpression,
  ISchemaExpressionCmpGreaterThan,
} from "../../../interfaces";
import { generateAst } from "../generateAst";
import { IAstGeneratorNodeHandler } from "../interfaces/IAstGeneratorNodeHandler";

export const AstGeneratorCmpGtHandler: IAstGeneratorNodeHandler<
  ISchemaExpressionCmpGreaterThan,
  IAstCmpGt
> = {
  path: "#/$defs/cmp_gt",

  handle(gtStructure) {
    const data = gtStructure.data;

    const items = data[">"]
      .map((item) => generateAst(item) as IAstExpression)
      .slice(0, 2) as [IAstExpression, IAstExpression];

    const astExpression: IAstCmpGt = {
      type: AST_TOKEN_CMP_GT,
      items,
    };

    return astExpression;
  },
};
