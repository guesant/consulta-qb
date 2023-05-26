import {
  IAstCmpBetween,
  IAstCmpEq,
  IAstCmpGt,
  IAstCmpGte,
  IAstCmpIn,
  IAstCmpIsNotNull,
  IAstCmpIsNull,
  IAstCmpLike,
  IAstCmpLt,
  IAstCmpLte,
  IAstCmpNEq,
  IAstColumn,
  IAstLiteral,
  IAstNode,
  IAstOpAnd,
  IAstOpNot,
  IAstOpOr,
  IAstParam,
  IAstQuery,
  IAstQuerySelect,
  IAstSymbol,
} from "../../interfaces";

import {
  ICompiledNode,
  ICompiledNodeStatement,
} from "./interfaces/ICompiledNode";
import { INodeCompiler } from "./interfaces/INodeCompiler";

const JOIN_MODE_MAPPING = {
  inner: "INNER JOIN",
  left: "LEFT JOIN",
  right: "RIGHT JOIN",
  full: "FULL JOIN",
};
export class NodeCompilerStandard implements INodeCompiler {
  compileNode(astNode: IAstNode): ICompiledNode | null {
    switch (astNode.type) {
      case "cmp_between": {
        return this.compileCmpBetween(astNode);
      }

      case "cmp_eq": {
        return this.compileCmpEq(astNode);
      }

      case "cmp_gt": {
        return this.compileCmpGt(astNode);
      }

      case "cmp_gte": {
        return this.compileCmpGte(astNode);
      }

      case "cmp_in": {
        return this.compileCmpIn(astNode);
      }

      case "cmp_is_not_null": {
        return this.compileCmpIsNotNull(astNode);
      }

      case "cmp_is_null": {
        return this.compileCmpIsNull(astNode);
      }

      case "cmp_like": {
        return this.compileCmpLike(astNode);
      }

      case "cmp_lt": {
        return this.compileCmpLt(astNode);
      }

      case "cmp_lte": {
        return this.compileCmpLte(astNode);
      }

      case "cmp_neq": {
        return this.compileCmpNEq(astNode);
      }

      case "literal": {
        return this.compileLiteral(astNode);
      }

      case "op_and": {
        return this.compileOpAnd(astNode);
      }

      case "op_not": {
        return this.compileOpNot(astNode);
      }

      case "op_or": {
        return this.compileOpOr(astNode);
      }

      case "param": {
        return this.compileParam(astNode);
      }

      case "query": {
        return this.compileQuery(astNode);
      }

      case "select": {
        return this.compileQuerySelect(astNode);
      }

      case "column": {
        return this.compileColumn(astNode);
      }

      case "symbol": {
        return this.compileSymbol(astNode);
      }

      default: {
        return null;
      }
    }
  }

  compileCmpBetween(astNode: IAstCmpBetween): ICompiledNode {
    const start = this.compileNode(astNode.start)!;
    const end = this.compileNode(astNode.end)!;
    const value = this.compileNode(astNode.value)!;

    return {
      statement: [
        ...value.statement,
        ` BETWEEN `,
        ...start.statement,
        " AND ",
        ...end.statement,
      ],
    };
  }

  compileCmpEq(astNode: IAstCmpEq): ICompiledNode {
    const left = this.compileNode(astNode.items[0])!;
    const right = this.compileNode(astNode.items[1])!;

    return {
      statement: [...left.statement, " == ", ...right.statement],
    };
  }

  compileCmpGt(astNode: IAstCmpGt): ICompiledNode {
    const left = this.compileNode(astNode.items[0])!;
    const right = this.compileNode(astNode.items[1])!;

    return {
      statement: [...left.statement, " > ", ...right.statement],
    };
  }

  compileCmpGte(astNode: IAstCmpGte): ICompiledNode {
    const left = this.compileNode(astNode.items[0])!;
    const right = this.compileNode(astNode.items[1])!;

    return {
      statement: [...left.statement, " >= ", ...right.statement],
    };
  }

  compileCmpIn(astNode: IAstCmpIn): ICompiledNode {
    const value = this.compileNode(astNode.value)!;

    const items = astNode.items.map((item) => this.compileNode(item)!).flat(1);

    const itemsStatements = items.map((item) => item.statement).flat(1);

    return {
      statement: [...value.statement, " IN ", "[", ...itemsStatements, "]"],
    };
  }

  compileCmpIsNotNull(astNode: IAstCmpIsNotNull): ICompiledNode {
    const value = this.compileNode(astNode.value)!;

    return {
      statement: [
        // ...
        ...value.statement,
        " IS NOT NULL",
      ],
    };
  }

  compileCmpIsNull(astNode: IAstCmpIsNull): ICompiledNode {
    const value = this.compileNode(astNode.value)!;

    return {
      statement: [
        // ...
        ...value.statement,
        " IS NULL",
      ],
    };
  }

  compileCmpLike(astNode: IAstCmpLike): ICompiledNode {
    const value = this.compileNode(astNode.value)!;
    const pattern = this.compileNode(astNode.pattern)!;

    return {
      statement: [
        // ...
        ...value.statement,
        " LIKE ",
        ...pattern.statement,
      ],
    };
  }

  compileCmpLt(astNode: IAstCmpLt): ICompiledNode {
    const left = this.compileNode(astNode.items[0])!;
    const right = this.compileNode(astNode.items[1])!;

    return {
      statement: [...left.statement, " < ", ...right.statement],
    };
  }

  compileCmpLte(astNode: IAstCmpLte): ICompiledNode {
    const left = this.compileNode(astNode.items[0])!;
    const right = this.compileNode(astNode.items[1])!;

    return {
      statement: [...left.statement, " <= ", ...right.statement],
    };
  }

  compileCmpNEq(astNode: IAstCmpNEq): ICompiledNode {
    const left = this.compileNode(astNode.items[0])!;
    const right = this.compileNode(astNode.items[1])!;

    return {
      statement: [...left.statement, " <> ", ...right.statement],
    };
  }

  compileLiteral(astNode: IAstLiteral): ICompiledNode {
    return {
      statement: [JSON.stringify(astNode.value)],
    };
  }

  compileOpAnd(astNode: IAstOpAnd): ICompiledNode {
    const items = astNode.items.map((item) => this.compileNode(item)!);

    return {
      statement: [
        ...items.reduce<ICompiledNodeStatement[]>((acc, item, index) => {
          return [
            // ...
            ...acc,
            ...(index > 0 ? [" AND "] : []),
            ...item.statement,
          ];
        }, []),
      ],
    };
  }

  compileOpNot(astNode: IAstOpNot): ICompiledNode {
    const value = this.compileNode(astNode.value)!;

    return {
      statement: ["NOT ", ...value.statement],
    };
  }

  compileOpOr(astNode: IAstOpOr): ICompiledNode {
    const items = astNode.items.map((item) => this.compileNode(item)!);

    return {
      statement: [
        ...items.reduce<ICompiledNodeStatement[]>(
          (acc, item, index) => [
            // ...
            ...acc,
            ...(index > 0 ? [" OR "] : []),
            ...item.statement,
          ],
          []
        ),
      ],
    };
  }

  compileParam(astNode: IAstParam): ICompiledNode {
    return {
      statement: [{ type: "param", name: astNode.name }],
    };
  }

  compileQuery(astNode: IAstQuery): ICompiledNode {
    const query = this.compileNode(astNode.query)!;

    return {
      statement: [...query.statement],
    };
  }

  compileQuerySelect(astNode: IAstQuerySelect): ICompiledNode {
    const where = astNode.where && this.compileNode(astNode.where);

    return {
      statement: [
        // ...
        "SELECT ",

        ...astNode.columns.reduce<ICompiledNodeStatement[]>((acc, column) => {
          const compiled = this.compileNode(column.value)!;

          return [
            // ...
            ...acc,

            ...(acc.length > 0 ? [", "] : []),

            ...compiled.statement,

            ...(column.as ? [" as ", JSON.stringify(column.as)] : []),
          ];
        }, []),

        " FROM ",

        astNode.from.table,
        ...(astNode.from.as ? [" as ", JSON.stringify(astNode.from.as)] : []),

        ...astNode.joins
          .map((join): ICompiledNodeStatement[] => {
            const on = this.compileNode(join.on)!;

            const mode = JOIN_MODE_MAPPING[join.mode];

            return [
              ` ${mode} `,

              join.table,

              ...(join.as ? [" as ", JSON.stringify(join.as)] : []),

              " ON ",

              ...on.statement,
            ];
          })
          .flat(1),

        ...(where ? [" WHERE ", ...where.statement] : []),

        ";",
      ],
    };
  }

  compileColumn(astNode: IAstColumn): ICompiledNode {
    return {
      statement: [
        ...(astNode.table ? [astNode.table, "."] : []),
        JSON.stringify(astNode.name),
      ],
    };
  }

  compileSymbol(astNode: IAstSymbol): ICompiledNode {
    return {
      statement: [`${astNode.data}`],
    };
  }
}
