import {
  AST_TOKEN_CMP_LT,
  IAstCmpLt,
  IAstExpression,
  ISchemaExpressionCmpLessThan,
} from "../../../interfaces";
import { generateAst } from "../generateAst";
import { IAstGeneratorNodeHandler } from "../interfaces/IAstGeneratorNodeHandler";

export const AstGeneratorCmpLtHandler: IAstGeneratorNodeHandler<
  ISchemaExpressionCmpLessThan,
  IAstCmpLt
> = {
  path: "#/$defs/cmp_lt",

  handle(ltStructure) {
    const data = ltStructure.data;

    const items = data["<"]
      .map((item) => generateAst(item) as IAstExpression)
      .slice(0, 2) as [IAstExpression, IAstExpression];

    const astExpression: IAstCmpLt = {
      type: AST_TOKEN_CMP_LT,
      items,
    };

    return astExpression;
  },
};
