import * as consultaQb from "../dist/index.mjs";

const SCHEMA = {
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

const ast = consultaQb.generateAst(SCHEMA);

console.log(JSON.stringify(ast, null, 2));
