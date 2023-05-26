import {
  AST_TOKEN_OP_OR,
  IAstExpression,
  IAstOpOr,
  ISchemaOpOr,
} from "../../../interfaces";
import { generateAst } from "../generateAst";
import { IAstGeneratorNodeHandler } from "../interfaces/IAstGeneratorNodeHandler";

export const AstGeneratorOpOrHandler: IAstGeneratorNodeHandler<
  ISchemaOpOr,
  IAstOpOr
> = {
  path: "#/$defs/op_or",

  handle(opOrStructure) {
    const data = opOrStructure.data;

    const items = data.OR.map(
      (item) => generateAst(item) as IAstExpression
    ).slice(0, 2) as [IAstExpression, IAstExpression];

    const astExpression: IAstOpOr = {
      type: AST_TOKEN_OP_OR,
      items,
    };

    return astExpression;
  },
};
