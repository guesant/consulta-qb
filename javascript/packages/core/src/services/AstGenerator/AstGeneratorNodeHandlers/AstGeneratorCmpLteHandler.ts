import {
  AST_TOKEN_CMP_LTE,
  IAstCmpLte,
  IAstExpression,
  ISchemaCmpLessThanOrEqual,
} from "../../../interfaces";
import { generateAst } from "../generateAst";
import { IAstGeneratorNodeHandler } from "../interfaces/IAstGeneratorNodeHandler";

export const AstGeneratorCmpLteHandler: IAstGeneratorNodeHandler<
  ISchemaCmpLessThanOrEqual,
  IAstCmpLte
> = {
  path: "#/$defs/cmp_lte",

  handle(lteStructure) {
    const data = lteStructure.data;

    const items = data["<="]
      .map((item) => generateAst(item) as IAstExpression)
      .slice(0, 2) as [IAstExpression, IAstExpression];

    const astExpression: IAstCmpLte = {
      type: AST_TOKEN_CMP_LTE,
      items,
    };

    return astExpression;
  },
};
