import * as consultaQb from "../dist/index.mjs"

const x = consultaQb.detectNode({
  "select": {
    "from": "post",
    "columns": [
      {
        "select_column": {
          "table": "post",
          "name": "id"
        }
      },
      {
        "value": {
          "select_column": {
            "table": "\"user\"",
            "name": "id"
          }
        },
        "as": "Id of the author"
      }
    ],
    "joins": [
      {
        "mode": "inner",
        "table": "\"user\"",
        "on": {
          "==": [
            {
              "select_column": {
                "table": "\"user\"",
                "name": "id"
              }
            },
            {
              "select_column": {
                "table": "post",
                "name": "id_author"
              }
            }
          ]
        }
      }
    ],
    "where": {
      ">": [
        {
          "select_column": {
            "table": "post",
            "name": "published_at"
          }
        },
        {
          "literal": "2023-01-01"
        }
      ]
    }
  }
})

console.log(x)