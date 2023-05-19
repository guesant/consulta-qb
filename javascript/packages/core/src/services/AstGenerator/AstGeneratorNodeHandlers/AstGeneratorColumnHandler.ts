import {
  AST_TOKEN_COLUMN,
  IAstColumn,
  ISchemaExpressionColumn,
} from "../../../interfaces";
import { IAstGeneratorNodeHandler } from "../interfaces/IAstGeneratorNodeHandler";

export const AstGeneratorColumnHandler: IAstGeneratorNodeHandler<
  ISchemaExpressionColumn,
  IAstColumn
> = {
  path: "#/$defs/column",

  handle(columnStructure) {
    const data = columnStructure.data as ISchemaExpressionColumn;

    const astExpression: IAstColumn = {
      type: AST_TOKEN_COLUMN,

      name: data.column.name,
      table: data.column.table ?? null,
    };

    return astExpression;
  },
};
