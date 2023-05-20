import {
  AST_TOKEN_CMP_BETWEEN,
  IAstCmpBetween,
  IAstExpression,
  ISchemaCmpBetween,
} from "../../../interfaces";
import { generateAst } from "../generateAst";
import { IAstGeneratorNodeHandler } from "../interfaces/IAstGeneratorNodeHandler";

export const AstGeneratorCmpBetweenHandler: IAstGeneratorNodeHandler<
  ISchemaCmpBetween,
  IAstCmpBetween
> = {
  path: "#/$defs/cmp_between",

  handle(betweenStructure) {
    const data = betweenStructure.data;

    const astExpression: IAstCmpBetween = {
      type: AST_TOKEN_CMP_BETWEEN,

      value: generateAst(data.BETWEEN.value) as IAstExpression,
      start: generateAst(data.BETWEEN.start) as IAstExpression,
      end: generateAst(data.BETWEEN.end) as IAstExpression,
    };

    return astExpression;
  },
};
