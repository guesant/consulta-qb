import {
  AST_TOKEN_CMP_EQ,
  IAstCmpEq,
  IAstExpression,
  ISchemaCmpEqual,
} from "../../../interfaces";
import { generateAst } from "../generateAst";
import { IAstGeneratorNodeHandler } from "../interfaces/IAstGeneratorNodeHandler";

export const AstGeneratorCmpEqHandler: IAstGeneratorNodeHandler<
  ISchemaCmpEqual,
  IAstCmpEq
> = {
  path: "#/$defs/cmp_eq",

  handle(eqStructure) {
    const data = eqStructure.data;

    const items = data["=="]
      .map((item) => generateAst(item) as IAstExpression)
      .slice(0, 2) as [IAstExpression, IAstExpression];

    const astExpression: IAstCmpEq = {
      type: AST_TOKEN_CMP_EQ,
      items,
    };

    return astExpression;
  },
};
