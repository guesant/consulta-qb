import {
  AST_TOKEN_COLUMN,
  IAstColumn,
  ISchemaColumn,
} from "../../../interfaces";
import { IAstGeneratorNodeHandler } from "../interfaces/IAstGeneratorNodeHandler";

export const AstGeneratorColumnHandler: IAstGeneratorNodeHandler<
  ISchemaColumn,
  IAstColumn
> = {
  path: "#/$defs/column",

  handle(columnStructure) {
    const data = columnStructure.data as ISchemaColumn;

    const astExpression: IAstColumn = {
      type: AST_TOKEN_COLUMN,

      name: data.column.name,
      table: data.column.table ?? null,
    };

    return astExpression;
  },
};
