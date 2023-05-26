import {
  AST_TOKEN_OP_PARAM,
  IAstParam,
  ISchemaParam,
} from "../../../interfaces";
import { IAstGeneratorNodeHandler } from "../interfaces/IAstGeneratorNodeHandler";

export const AstGeneratorParamHandler: IAstGeneratorNodeHandler<
  ISchemaParam,
  IAstParam
> = {
  path: "#/$defs/param",

  handle(paramStructure) {
    const data = paramStructure.data;

    const astExpression: IAstParam = {
      type: AST_TOKEN_OP_PARAM,
      name: data.param.name,
    };

    return astExpression;
  },
};
