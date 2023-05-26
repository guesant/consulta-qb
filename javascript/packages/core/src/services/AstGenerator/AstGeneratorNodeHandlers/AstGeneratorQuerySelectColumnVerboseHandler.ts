import {
  AST_TOKEN_SELECT_COLUMN,
  IAstQuerySelectColumn,
  ISchemaQuerySelectColumnVerbose,
} from "../../../interfaces";
import { IAstQuerySelectTarget } from "../../../interfaces/Ast/IAstQuerySelectTarget";
import { generateAst } from "../generateAst";
import { IAstGeneratorNodeHandler } from "../interfaces/IAstGeneratorNodeHandler";

export const AstGeneratorQuerySelectColumnVerboseHandler: IAstGeneratorNodeHandler<
  ISchemaQuerySelectColumnVerbose,
  IAstQuerySelectColumn
> = {
  path: "#/$defs/select_column_verbose",

  handle(selectColumnVerbose) {
    const data = selectColumnVerbose.data;

    const astSelectColumnValue = generateAst(
      data.value
    ) as IAstQuerySelectTarget;

    const astSelectColumn: IAstQuerySelectColumn = {
      type: AST_TOKEN_SELECT_COLUMN,
      as: data.as ?? null,
      value: astSelectColumnValue,
    };

    return astSelectColumn;
  },
};
