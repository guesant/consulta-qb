import { describe, expect, it } from "vitest";
import {
  ISchemaCmpBetween,
  ISchemaCmpEqual,
  ISchemaCmpGreaterThan,
  ISchemaCmpGreaterThanOrEqual,
  ISchemaCmpIn,
  ISchemaCmpIsNotNull,
  ISchemaCmpIsNull,
  ISchemaCmpLessThan,
  ISchemaCmpLessThanOrEqual,
  ISchemaCmpLike,
  ISchemaCmpNotEqual,
  ISchemaColumn,
  ISchemaLiteral,
  ISchemaOpAnd,
  ISchemaOpNot,
  ISchemaOpOr,
  ISchemaParam,
  ISchemaQuerySelect,
  ISchemaSymbol,
} from "../..";
import { generateAst } from "./generateAst";

describe("generateAst()", () => {
  it("should return valid ast", () => {
    const cmpBetween: ISchemaCmpBetween = {
      BETWEEN: {
        value: {
          column: {
            table: "post",
            name: "created_at",
          },
        },

        start: {
          literal: "2023-01-01",
        },

        end: {
          literal: "2023-12-31",
        },
      },
    };

    expect(generateAst(cmpBetween)).toMatchInlineSnapshot(`
      {
        "end": {
          "type": "literal",
          "value": "2023-12-31",
        },
        "start": {
          "type": "literal",
          "value": "2023-01-01",
        },
        "type": "cmp_between",
        "value": {
          "name": "created_at",
          "table": "post",
          "type": "column",
        },
      }
    `);

    const cmpEq: ISchemaCmpEqual = {
      "==": [
        {
          column: {
            table: "post",
            name: "id",
          },
        },
        {
          literal: 10_000,
        },
      ],
    };

    expect(generateAst(cmpEq)).toMatchInlineSnapshot(`
      {
        "items": [
          {
            "name": "id",
            "table": "post",
            "type": "column",
          },
          {
            "type": "literal",
            "value": 10000,
          },
        ],
        "type": "cmp_eq",
      }
    `);

    const cmpGte: ISchemaCmpGreaterThanOrEqual = {
      ">=": [
        {
          column: {
            table: "post",
            name: "created_at",
          },
        },
        {
          literal: "2023-01-01",
        },
      ],
    };

    expect(generateAst(cmpGte)).toMatchInlineSnapshot(`
      {
        "items": [
          {
            "name": "created_at",
            "table": "post",
            "type": "column",
          },
          {
            "type": "literal",
            "value": "2023-01-01",
          },
        ],
        "type": "cmp_gte",
      }
    `);

    const cmpGt: ISchemaCmpGreaterThan = {
      ">": [
        {
          column: {
            table: "post",
            name: "access_count",
          },
        },
        {
          literal: 20_000,
        },
      ],
    };

    expect(generateAst(cmpGt)).toMatchInlineSnapshot(`
      {
        "items": [
          {
            "name": "access_count",
            "table": "post",
            "type": "column",
          },
          {
            "type": "literal",
            "value": 20000,
          },
        ],
        "type": "cmp_gt",
      }
    `);

    const cmpIn: ISchemaCmpIn = {
      IN: {
        value: {
          column: {
            table: "post",
            name: "visibility",
          },
        },
        items: [
          {
            literal: "public",
          },
          {
            literal: "private",
          },
        ],
      },
    };

    expect(generateAst(cmpIn)).toMatchInlineSnapshot(`
      {
        "items": [
          {
            "type": "literal",
            "value": "public",
          },
          {
            "type": "literal",
            "value": "private",
          },
        ],
        "type": "cmp_in",
        "value": {
          "name": "visibility",
          "table": "post",
          "type": "column",
        },
      }
    `);

    const cmpIsNotNull: ISchemaCmpIsNotNull = {
      "IS NOT NULL": {
        column: {
          table: "post",
          name: "published_at",
        },
      },
    };

    expect(generateAst(cmpIsNotNull)).toMatchInlineSnapshot(`
      {
        "type": "cmp_is_not_null",
        "value": {
          "name": "published_at",
          "table": "post",
          "type": "column",
        },
      }
    `);

    const cmpIsNull: ISchemaCmpIsNull = {
      "IS NULL": {
        column: {
          table: "post",
          name: "published_at",
        },
      },
    };

    expect(generateAst(cmpIsNull)).toMatchInlineSnapshot(`
      {
        "type": "cmp_is_null",
        "value": {
          "name": "published_at",
          "table": "post",
          "type": "column",
        },
      }
    `);

    const cmpLike: ISchemaCmpLike = {
      LIKE: {
        value: {
          column: {
            table: "post",
            name: "title",
          },
        },
        pattern: {
          literal: "%foo%",
        },
      },
    };

    expect(generateAst(cmpLike)).toMatchInlineSnapshot(`
      {
        "pattern": {
          "type": "literal",
          "value": "%foo%",
        },
        "type": "cmp_like",
        "value": {
          "name": "title",
          "table": "post",
          "type": "column",
        },
      }
    `);

    const cmpLte: ISchemaCmpLessThanOrEqual = {
      "<=": [
        {
          column: {
            table: "post",
            name: "created_at",
          },
        },
        {
          literal: "2023-12-31",
        },
      ],
    };

    expect(generateAst(cmpLte)).toMatchInlineSnapshot(`
      {
        "items": [
          {
            "name": "created_at",
            "table": "post",
            "type": "column",
          },
          {
            "type": "literal",
            "value": "2023-12-31",
          },
        ],
        "type": "cmp_lte",
      }
    `);

    const cmpLt: ISchemaCmpLessThan = {
      "<": [
        {
          column: {
            table: "post",
            name: "stars",
          },
        },
        {
          literal: 20,
        },
      ],
    };

    expect(generateAst(cmpLt)).toMatchInlineSnapshot(`
      {
        "items": [
          {
            "name": "stars",
            "table": "post",
            "type": "column",
          },
          {
            "type": "literal",
            "value": 20,
          },
        ],
        "type": "cmp_lt",
      }
    `);

    const cmpNotEqual: ISchemaCmpNotEqual = {
      "!=": [
        {
          column: {
            table: "post",
            name: "stars",
          },
        },
        {
          literal: 20,
        },
      ],
    };

    expect(generateAst(cmpNotEqual)).toMatchInlineSnapshot(`
      {
        "items": [
          {
            "name": "stars",
            "table": "post",
            "type": "column",
          },
          {
            "type": "literal",
            "value": 20,
          },
        ],
        "type": "cmp_neq",
      }
    `);

    const cmpColumn: ISchemaColumn = {
      column: {
        name: "slug",
      },
    };

    expect(generateAst(cmpColumn)).toMatchInlineSnapshot(`
      {
        "name": "slug",
        "table": null,
        "type": "column",
      }
    `);

    const cmpLiteral: ISchemaLiteral = {
      literal: 123,
    };

    expect(generateAst(cmpLiteral)).toMatchInlineSnapshot(`
      {
        "type": "literal",
        "value": 123,
      }
    `);

    const cmpOpAnd: ISchemaOpAnd = {
      AND: [
        {
          "==": [
            {
              column: {
                table: "post",
                name: "id",
              },
            },
            {
              literal: 10_000,
            },
          ],
        },
        {
          "==": [
            {
              column: {
                table: "post",
                name: "visibility",
              },
            },
            {
              literal: "public",
            },
          ],
        },
      ],
    };

    expect(generateAst(cmpOpAnd)).toMatchInlineSnapshot(`
      {
        "items": [
          {
            "items": [
              {
                "name": "id",
                "table": "post",
                "type": "column",
              },
              {
                "type": "literal",
                "value": 10000,
              },
            ],
            "type": "cmp_eq",
          },
          {
            "items": [
              {
                "name": "visibility",
                "table": "post",
                "type": "column",
              },
              {
                "type": "literal",
                "value": "public",
              },
            ],
            "type": "cmp_eq",
          },
        ],
        "type": "op_and",
      }
    `);

    const cmpOpNot: ISchemaOpNot = {
      NOT: {
        "==": [
          {
            column: {
              table: "post",
              name: "id",
            },
          },
          {
            literal: 10_000,
          },
        ],
      },
    };

    expect(generateAst(cmpOpNot)).toMatchInlineSnapshot(`
      {
        "type": "op_not",
        "value": {
          "items": [
            {
              "name": "id",
              "table": "post",
              "type": "column",
            },
            {
              "type": "literal",
              "value": 10000,
            },
          ],
          "type": "cmp_eq",
        },
      }
    `);

    const cmpOpOr: ISchemaOpOr = {
      OR: [
        {
          "==": [
            {
              column: {
                table: "post",
                name: "id",
              },
            },
            {
              literal: 10_000,
            },
          ],
        },
        {
          "==": [
            {
              column: {
                table: "post",
                name: "visibility",
              },
            },
            {
              literal: "public",
            },
          ],
        },
      ],
    };

    expect(generateAst(cmpOpOr)).toMatchInlineSnapshot(`
      {
        "items": [
          {
            "items": [
              {
                "name": "id",
                "table": "post",
                "type": "column",
              },
              {
                "type": "literal",
                "value": 10000,
              },
            ],
            "type": "cmp_eq",
          },
          {
            "items": [
              {
                "name": "visibility",
                "table": "post",
                "type": "column",
              },
              {
                "type": "literal",
                "value": "public",
              },
            ],
            "type": "cmp_eq",
          },
        ],
        "type": "op_or",
      }
    `);

    const param: ISchemaParam = {
      param: {
        name: "foo",
      },
    };

    expect(generateAst(param)).toMatchInlineSnapshot(`
      {
        "name": "foo",
        "type": "param",
      }
    `);

    const selectQuery: ISchemaQuerySelect = {
      select: {
        from: "post",

        columns: [
          {
            column: {
              table: "post",
              name: "id",
            },
          },
          {
            value: {
              column: {
                table: '"user"',
                name: "id",
              },
            },
            as: "Id of the author",
          },
        ],
        joins: [
          {
            mode: "inner",
            table: '"user"',
            on: {
              "==": [
                {
                  column: {
                    table: '"user"',
                    name: "id",
                  },
                },
                {
                  column: {
                    table: "post",
                    name: "id_author",
                  },
                },
              ],
            },
          },
        ],
        where: {
          ">": [
            {
              column: {
                table: "post",
                name: "created_at",
              },
            },
            {
              literal: "2023-01-01",
            },
          ],
        },
      },
    };

    expect(generateAst(selectQuery)).toMatchInlineSnapshot(`
      {
        "query": {
          "columns": [
            {
              "as": null,
              "type": "select_column",
              "value": {
                "name": "id",
                "table": "post",
                "type": "column",
              },
            },
            {
              "as": "Id of the author",
              "type": "select_column",
              "value": {
                "name": "id",
                "table": "\\"user\\"",
                "type": "column",
              },
            },
          ],
          "from": {
            "as": null,
            "table": "post",
            "type": "select_from",
          },
          "joins": [
            {
              "as": "\\"user\\"",
              "mode": "inner",
              "on": {
                "items": [
                  {
                    "name": "id",
                    "table": "\\"user\\"",
                    "type": "column",
                  },
                  {
                    "name": "id_author",
                    "table": "post",
                    "type": "column",
                  },
                ],
                "type": "cmp_eq",
              },
              "table": "\\"user\\"",
              "type": "select_join",
            },
          ],
          "type": "select",
          "where": {
            "items": [
              {
                "name": "created_at",
                "table": "post",
                "type": "column",
              },
              {
                "type": "literal",
                "value": "2023-01-01",
              },
            ],
            "type": "cmp_gt",
          },
        },
        "type": "query",
      }
    `);

    const symbol: ISchemaSymbol = {
      symbol: "*",
    };

    expect(generateAst(symbol)).toMatchInlineSnapshot(`
      {
        "data": "*",
        "type": "symbol",
      }
    `);
  });
});
