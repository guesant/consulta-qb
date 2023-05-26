import {
  AST_TOKEN_QUERY,
  AST_TOKEN_SELECT,
  AST_TOKEN_SELECT_COLUMN,
  AST_TOKEN_SELECT_FROM,
  AST_TOKEN_SELECT_JOIN,
  IAstExpression,
  IAstQuery,
  IAstQuerySelect,
  IAstQuerySelectColumn,
  IAstQuerySelectFrom,
  IAstQuerySelectJoin,
  IAstQuerySelectTarget,
  ISchemaQuerySelect,
} from "../../../interfaces";
import { generateAst } from "../generateAst";
import { IAstGeneratorNodeHandler } from "../interfaces/IAstGeneratorNodeHandler";

export const AstGeneratorQuerySelectHandler: IAstGeneratorNodeHandler<
  ISchemaQuerySelect,
  IAstQuery
> = {
  path: "#/$defs/select",

  handle(selectStructure) {
    const data = selectStructure.data;

    const from = data.select.from;

    const astSelectFrom: IAstQuerySelectFrom =
      typeof from === "string"
        ? {
            type: AST_TOKEN_SELECT_FROM,
            table: from,
            as: null,
          }
        : {
            type: AST_TOKEN_SELECT_FROM,
            table: from.table,
            as: from.as ?? null,
          };

    const columns = [...(data.select.columns ?? [])];

    const astSelectColumns: IAstQuerySelect["columns"] = columns.map(
      (column): IAstQuerySelectColumn => {
        const astColumn = generateAst(column) as
          | IAstQuerySelectColumn
          | IAstQuerySelectTarget;

        if (astColumn.type === AST_TOKEN_SELECT_COLUMN) {
          return astColumn as IAstQuerySelectColumn;
        }

        const astSelectColumn: IAstQuerySelectColumn = {
          type: AST_TOKEN_SELECT_COLUMN,
          as: null,
          value: astColumn,
        };

        return astSelectColumn;
      }
    );

    const joins = [...(data.select.joins ?? [])];

    const astSelectJoins: IAstQuerySelect["joins"] = joins.map((join) => {
      const astSelectJoin: IAstQuerySelectJoin = {
        type: AST_TOKEN_SELECT_JOIN,
        table: join.table,
        as: join.as ?? join.table,
        on: generateAst(join.on) as IAstExpression,
      };

      return astSelectJoin;
    });

    const astSelectWhere: IAstQuerySelect["where"] = data.select.where
      ? (generateAst(data.select.where) as IAstExpression)
      : null;

    const astSelect: IAstQuerySelect = {
      type: AST_TOKEN_SELECT,
      from: astSelectFrom,
      columns: astSelectColumns,
      joins: astSelectJoins,
      where: astSelectWhere,
    };

    const astQuerySelect: IAstQuery = {
      type: AST_TOKEN_QUERY,

      query: astSelect,
    };

    return astQuerySelect;
  },
};
