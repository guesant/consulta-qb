import {
  AST_TOKEN_SYMBOL,
  IAstSymbol,
  ISchemaSymbol,
} from "../../../interfaces";
import { IAstGeneratorNodeHandler } from "../interfaces/IAstGeneratorNodeHandler";

export const AstGeneratorSymbolHandler: IAstGeneratorNodeHandler<
  ISchemaSymbol,
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
