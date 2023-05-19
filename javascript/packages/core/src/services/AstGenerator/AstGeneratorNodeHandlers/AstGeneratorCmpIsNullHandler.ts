import {
  AST_TOKEN_CMP_IS_NULL,
  IAstCmpIsNull,
  IAstExpression,
  ISchemaExpressionCmpIsNull,
} from "../../../interfaces";
import { generateAst } from "../generateAst";
import { IAstGeneratorNodeHandler } from "../interfaces/IAstGeneratorNodeHandler";

export const AstGeneratorCmpIsNullHandler: IAstGeneratorNodeHandler<
  ISchemaExpressionCmpIsNull,
  IAstCmpIsNull
> = {
  path: "#/$defs/cmp_is_null",

  handle(isNullStructure) {
    const data = isNullStructure.data;

    const value = generateAst(data["IS NULL"]) as IAstExpression;

    const astExpression: IAstCmpIsNull = {
      type: AST_TOKEN_CMP_IS_NULL,

      value,
    };

    return astExpression;
  },
};
