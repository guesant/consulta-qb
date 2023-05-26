import {
  AST_TOKEN_OP_AND,
  IAstExpression,
  IAstOpAnd,
  ISchemaOpAnd,
} from "../../../interfaces";
import { generateAst } from "../generateAst";
import { IAstGeneratorNodeHandler } from "../interfaces/IAstGeneratorNodeHandler";

export const AstGeneratorOpAndHandler: IAstGeneratorNodeHandler<
  ISchemaOpAnd,
  IAstOpAnd
> = {
  path: "#/$defs/op_and",

  handle(opAndStructure) {
    const data = opAndStructure.data;

    const items = data.AND.map(
      (item) => generateAst(item) as IAstExpression
    ).slice(0, 2) as [IAstExpression, IAstExpression];

    const astExpression: IAstOpAnd = {
      type: AST_TOKEN_OP_AND,
      items,
    };

    return astExpression;
  },
};
