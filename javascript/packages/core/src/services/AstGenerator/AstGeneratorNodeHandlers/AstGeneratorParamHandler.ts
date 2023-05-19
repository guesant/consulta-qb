import {
  AST_TOKEN_OP_PARAM,
  IAstParam,
  ISchemaExpressionParam,
} from "../../../interfaces";
import { IAstGeneratorNodeHandler } from "../interfaces/IAstGeneratorNodeHandler";

export const AstGeneratorParamHandler: IAstGeneratorNodeHandler<
  ISchemaExpressionParam,
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
