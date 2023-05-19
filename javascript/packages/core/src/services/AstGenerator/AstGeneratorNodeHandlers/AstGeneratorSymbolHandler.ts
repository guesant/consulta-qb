import {
  AST_TOKEN_SYMBOL,
  IAstSymbol,
  ISchemaExpressionSymbol,
} from "../../../interfaces";
import { IAstGeneratorNodeHandler } from "../interfaces/IAstGeneratorNodeHandler";

export const AstGeneratorSymbolHandler: IAstGeneratorNodeHandler<
  ISchemaExpressionSymbol,
  IAstSymbol
> = {
  path: "#/$defs/symbol",

  handle(symbolStructure) {
    const data = symbolStructure.data;

    const astExpression: IAstSymbol = {
      type: AST_TOKEN_SYMBOL,

      data: data.symbol,
    };

    return astExpression;
  },
};
