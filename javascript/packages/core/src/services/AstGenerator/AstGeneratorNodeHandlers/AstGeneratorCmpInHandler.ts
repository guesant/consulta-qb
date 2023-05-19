import {
  AST_TOKEN_CMP_IN,
  IAstCmpIn,
  IAstExpression,
  ISchemaExpressionCmpIn,
} from "../../../interfaces";
import { generateAst } from "../generateAst";
import { IAstGeneratorNodeHandler } from "../interfaces/IAstGeneratorNodeHandler";

export const AstGeneratorCmpInHandler: IAstGeneratorNodeHandler<
  ISchemaExpressionCmpIn,
  IAstCmpIn
> = {
  path: "#/$defs/cmp_in",

  handle(inStructure) {
    const data = inStructure.data;

    const value = generateAst(data["IN"].value) as IAstExpression;

    const items = data["IN"].items.map(
      (item) => generateAst(item) as IAstExpression
    );

    const astExpression: IAstCmpIn = {
      type: AST_TOKEN_CMP_IN,
      value,
      items,
    };

    return astExpression;
  },
};
