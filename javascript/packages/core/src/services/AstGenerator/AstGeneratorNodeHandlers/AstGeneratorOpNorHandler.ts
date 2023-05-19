import {
  AST_TOKEN_OP_NOT,
  IAstExpression,
  ISchemaExpressionOpNot,
} from "../../../interfaces";
import { IAstOpNot } from "../../../interfaces/Ast/IAstOpNot";
import { generateAst } from "../generateAst";
import { IAstGeneratorNodeHandler } from "../interfaces/IAstGeneratorNodeHandler";

export const AstGeneratorOpNotHandler: IAstGeneratorNodeHandler<
  ISchemaExpressionOpNot,
  IAstOpNot
> = {
  path: "#/$defs/op_not",

  handle(opNotStructure) {
    const data = opNotStructure.data;

    const item = generateAst(data.NOT) as IAstExpression;

    const astExpression: IAstOpNot = {
      type: AST_TOKEN_OP_NOT,
      item,
    };

    return astExpression;
  },
};
