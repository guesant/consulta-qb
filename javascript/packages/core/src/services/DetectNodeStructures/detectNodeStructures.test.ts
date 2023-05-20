import pick from "lodash/pick";
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
  ISchemaSymbol,
} from "../..";
import { detectNodeStructures } from "./detectNodeStructures";

// [x] cmp_between
// [x] cmp_eq
// [x] cmp_gt
// [x] cmp_gte
// [x] cmp_in
// [x] cmp_is_not_null
// [x] cmp_is_null
// [x] cmp_like
// [x] cmp_lt
// [x] cmp_lte
// [x] cmp_neq
// [x] literal
// [x] op_and
// [x] op_not
// [x] op_or
// [x] param
// [x] symbol
// [x] column

// value
// expression

const detectNodeStructuresSlim = (node: any) =>
  detectNodeStructures(node).map((nodeStructure) =>
    pick(nodeStructure, ["path"])
  );

describe("detectNodeStructures()", () => {
  it("should detect node structures", () => {
    const columnPostVisibility: ISchemaColumn = {
      column: {
        table: "post",
        name: "visibility",
      },
    };

    expect(detectNodeStructuresSlim(columnPostVisibility))
      .toMatchInlineSnapshot(`
    [
      {
        "path": "#/$defs/select_column_target",
      },
      {
        "path": "#/$defs/select_column_simple",
      },
      {
        "path": "#/$defs/select_column",
      },
      {
        "path": "#/$defs/value",
      },
      {
        "path": "#/$defs/column",
      },
      {
        "path": "#/$defs/expression",
      },
    ]
  `);

    const columnPostAccessCount: ISchemaColumn = {
      column: {
        table: "post",
        name: "access_count",
      },
    };

    expect(detectNodeStructuresSlim(columnPostAccessCount))
      .toMatchInlineSnapshot(`
      [
        {
          "path": "#/$defs/select_column_target",
        },
        {
          "path": "#/$defs/select_column_simple",
        },
        {
          "path": "#/$defs/select_column",
        },
        {
          "path": "#/$defs/value",
        },
        {
          "path": "#/$defs/column",
        },
        {
          "path": "#/$defs/expression",
        },
      ]
    `);

    const symbolStar: ISchemaSymbol = {
      symbol: "*",
    };

    expect(detectNodeStructuresSlim(symbolStar)).toMatchInlineSnapshot(`
    [
      {
        "path": "#/$defs/select_column_target",
      },
      {
        "path": "#/$defs/select_column_simple",
      },
      {
        "path": "#/$defs/select_column",
      },
      {
        "path": "#/$defs/symbol",
      },
      {
        "path": "#/$defs/value",
      },
      {
        "path": "#/$defs/expression",
      },
    ]
  `);

    const paramQuery: ISchemaParam = {
      param: {
        name: "query",
      },
    };

    expect(detectNodeStructuresSlim(paramQuery)).toMatchInlineSnapshot(`
    [
      {
        "path": "#/$defs/param",
      },
      {
        "path": "#/$defs/value",
      },
      {
        "path": "#/$defs/expression",
      },
    ]
  `);

    const literalDate2023: ISchemaLiteral = {
      literal: "2023-01-01",
    };

    expect(detectNodeStructuresSlim(literalDate2023)).toMatchInlineSnapshot(`
    [
      {
        "path": "#/$defs/literal",
      },
      {
        "path": "#/$defs/value",
      },
      {
        "path": "#/$defs/expression",
      },
    ]
  `);

    const isNullSchema: ISchemaCmpIsNull = {
      "IS NULL": columnPostVisibility,
    };

    expect(detectNodeStructuresSlim(isNullSchema)).toMatchInlineSnapshot(`
    [
      {
        "path": "#/$defs/cmp_is_null",
      },
      {
        "path": "#/$defs/expression",
      },
    ]
  `);

    const isNotNullSchema: ISchemaCmpIsNotNull = {
      "IS NOT NULL": columnPostVisibility,
    };

    expect(detectNodeStructuresSlim(isNotNullSchema)).toMatchInlineSnapshot(`
    [
      {
        "path": "#/$defs/cmp_is_not_null",
      },
      {
        "path": "#/$defs/expression",
      },
    ]
  `);

    const eqSchema: ISchemaCmpEqual = {
      "==": [
        columnPostVisibility,
        {
          literal: "public",
        },
      ],
    };

    expect(detectNodeStructuresSlim(eqSchema)).toMatchInlineSnapshot(`
    [
      {
        "path": "#/$defs/cmp_eq",
      },
      {
        "path": "#/$defs/expression",
      },
    ]
  `);

    const gtSchema: ISchemaCmpGreaterThan = {
      ">": [
        columnPostAccessCount,
        {
          literal: 100,
        },
      ],
    };

    expect(detectNodeStructuresSlim(gtSchema)).toMatchInlineSnapshot(`
      [
        {
          "path": "#/$defs/cmp_gt",
        },
        {
          "path": "#/$defs/expression",
        },
      ]
    `);

    const gteSchema: ISchemaCmpGreaterThanOrEqual = {
      ">=": [
        columnPostAccessCount,
        {
          literal: 123,
        },
      ],
    };

    expect(detectNodeStructuresSlim(gteSchema)).toMatchInlineSnapshot(`
      [
        {
          "path": "#/$defs/cmp_gte",
        },
        {
          "path": "#/$defs/expression",
        },
      ]
    `);

    const neqSchema: ISchemaCmpNotEqual = {
      "!=": [
        columnPostVisibility,
        {
          literal: "public",
        },
      ],
    };

    expect(detectNodeStructuresSlim(neqSchema)).toMatchInlineSnapshot(`
      [
        {
          "path": "#/$defs/cmp_neq",
        },
        {
          "path": "#/$defs/expression",
        },
      ]
    `);

    const betweenSchema: ISchemaCmpBetween = {
      BETWEEN: {
        value: columnPostAccessCount,

        start: {
          literal: 1_000,
        },

        end: {
          literal: 10_000,
        },
      },
    };

    expect(detectNodeStructuresSlim(betweenSchema)).toMatchInlineSnapshot(`
      [
        {
          "path": "#/$defs/cmp_between",
        },
        {
          "path": "#/$defs/expression",
        },
      ]
    `);

    const inSchema: ISchemaCmpIn = {
      IN: {
        value: {
          column: {
            name: "id",
          },
        },

        items: [
          {
            literal: 1,
          },
          {
            literal: 2,
          },
        ],
      },
    };

    expect(detectNodeStructuresSlim(inSchema)).toMatchInlineSnapshot(`
      [
        {
          "path": "#/$defs/cmp_in",
        },
        {
          "path": "#/$defs/expression",
        },
      ]
    `);

    const likeSchema: ISchemaCmpLike = {
      LIKE: {
        value: {
          column: {
            table: "employee",
            name: "name",
          },
        },

        pattern: {
          literal: "Jon%",
        },
      },
    };

    expect(detectNodeStructuresSlim(likeSchema)).toMatchInlineSnapshot(`
      [
        {
          "path": "#/$defs/cmp_like",
        },
        {
          "path": "#/$defs/expression",
        },
      ]
    `);

    const ltSchema: ISchemaCmpLessThan = {
      "<": [
        columnPostAccessCount,
        {
          literal: 50_000_000,
        },
      ],
    };

    expect(detectNodeStructuresSlim(ltSchema)).toMatchInlineSnapshot(`
      [
        {
          "path": "#/$defs/cmp_lt",
        },
        {
          "path": "#/$defs/expression",
        },
      ]
    `);

    const lteSchema: ISchemaCmpLessThanOrEqual = {
      "<=": [
        columnPostAccessCount,
        {
          literal: 11_000,
        },
      ],
    };

    expect(detectNodeStructuresSlim(lteSchema)).toMatchInlineSnapshot(`
      [
        {
          "path": "#/$defs/cmp_lte",
        },
        {
          "path": "#/$defs/expression",
        },
      ]
    `);

    const andSchema: ISchemaOpAnd = {
      AND: [gtSchema, eqSchema],
    };

    expect(detectNodeStructuresSlim(andSchema)).toMatchInlineSnapshot(`
      [
        {
          "path": "#/$defs/op_and",
        },
        {
          "path": "#/$defs/expression",
        },
      ]
    `);

    const notSchema: ISchemaOpNot = {
      NOT: inSchema,
    };

    expect(detectNodeStructuresSlim(notSchema)).toMatchInlineSnapshot(`
      [
        {
          "path": "#/$defs/op_not",
        },
        {
          "path": "#/$defs/expression",
        },
      ]
    `);

    const orSchema: ISchemaOpOr = {
      OR: [betweenSchema, neqSchema],
    };

    expect(detectNodeStructuresSlim(orSchema)).toMatchInlineSnapshot(`
      [
        {
          "path": "#/$defs/op_or",
        },
        {
          "path": "#/$defs/expression",
        },
      ]
    `);
  });

  it("should return empty array for invalid node structures", () => {
    const invalidStructureNever = {
      NEVER: 1,
    };

    expect(
      detectNodeStructuresSlim(invalidStructureNever)
    ).toMatchInlineSnapshot("[]");

    const invalidStructureAnd = {
      AND: [],
    };

    expect(detectNodeStructuresSlim(invalidStructureAnd)).toMatchInlineSnapshot(
      "[]"
    );

    const invalidStructureColumn = {
      column: {
        table: true,
        column: 3,
      },
    };

    expect(
      detectNodeStructuresSlim(invalidStructureColumn)
    ).toMatchInlineSnapshot("[]");
  });
});
