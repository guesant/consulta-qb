# consulta-qb

The consulta-qb is a specification for write SQL queries using JSON.

The goal is to allow write queries, like the following, using an declarative language.

```sql
SELECT
  "post"."id",
  "user"."id" AS "Id of the author"
INNER JOIN "user" "user" ON "post"."id_author" = "user"."id"
WHERE
  (
    "post"."published_at" > "2023-01-01"
  )
;
```

One of the possible definitions for the above query can be:

```json
{
  "select": {
    "from": "post",

    "columns": [
      {
        "table_column": {
          "table": "post",
          "column": "id"
        }
      },
      {
        "value": {
          "table_column": {
            "table": "post",
            "column": "id"
          }
        },
        "alias": "Id of the author"
      }
    ],

    "joins": [
      {
        "mode": "inner",
        "table": "user",
        "on": {
          "=": [
            {
              "table_column": {
                "table": "user",
                "column": "id"
              }
            },
            {
              "table_column": {
                "table": "post",
                "column": "id_author"
              }
            }
          ]
        }
      }
    ],
    "where": {
      ">": [
        {
          "table_column": {
            "table": "post",
            "column": "published_at"
          },
          "literal": {
            "value": "2023-01-01"
          }
        }
      ]
    }
  }
}
```

## License

MIT
