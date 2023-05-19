import {
  AST_TOKEN_LITERAL,
  IAstLiteral,
  ISchemaExpressionLiteral,
} from "../../../interfaces";
import { IAstGeneratorNodeHandler } from "../interfaces/IAstGeneratorNodeHandler";

export const AstGeneratorLiteralHandler: IAstGeneratorNodeHandler<
  ISchemaExpressionLiteral,
  IAstLiteral
> = {
  path: "#/$defs/literal",

  handle(literalStructure) {
    const data = literalStructure.data;

    const astExpression: IAstLiteral = {
      type: AST_TOKEN_LITERAL,

      value: data.literal,
    };

    return astExpression;
  },
};
