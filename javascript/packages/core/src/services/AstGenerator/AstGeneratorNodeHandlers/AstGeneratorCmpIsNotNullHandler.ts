import {
  AST_TOKEN_CMP_IS_NOT_NULL,
  IAstCmpIsNotNull,
  IAstExpression,
  ISchemaCmpIsNotNull,
} from "../../../interfaces";
import { generateAst } from "../generateAst";
import { IAstGeneratorNodeHandler } from "../interfaces/IAstGeneratorNodeHandler";

export const AstGeneratorCmpIsNotNullHandler: IAstGeneratorNodeHandler<
  ISchemaCmpIsNotNull,
  IAstCmpIsNotNull
> = {
  path: "#/$defs/cmp_is_not_null",

  handle(isNotNullStructure) {
    const data = isNotNullStructure.data;

    const value = generateAst(data["IS NOT NULL"]) as IAstExpression;

    const astExpression: IAstCmpIsNotNull = {
      type: AST_TOKEN_CMP_IS_NOT_NULL,

      value,
    };

    return astExpression;
  },
};
