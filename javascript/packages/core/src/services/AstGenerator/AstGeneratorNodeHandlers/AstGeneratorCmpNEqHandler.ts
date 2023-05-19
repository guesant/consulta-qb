import {
  AST_TOKEN_CMP_NEQ,
  IAstCmpNEq,
  IAstExpression,
  ISchemaExpressionCmpNotEqual,
} from "../../../interfaces";
import { generateAst } from "../generateAst";
import { IAstGeneratorNodeHandler } from "../interfaces/IAstGeneratorNodeHandler";

export const AstGeneratorCmpNEqHandler: IAstGeneratorNodeHandler<
  ISchemaExpressionCmpNotEqual,
  IAstCmpNEq
> = {
  path: "#/$defs/cmp_neq",

  handle(neqStructure) {
    const data = neqStructure.data;

    const items = data["!="]
      .map((item) => generateAst(item) as IAstExpression)
      .slice(0, 2) as [IAstExpression, IAstExpression];

    const astExpression: IAstCmpNEq = {
      type: AST_TOKEN_CMP_NEQ,
      items,
    };

    return astExpression;
  },
};
