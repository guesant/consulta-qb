# consulta-qb

The consulta-qb is a specification for write SQL queries using JSON.

### Goals

The goal is to allow write queries, like the following, using an declarative language.

```sql
SELECT
  "post"."id",
  "user"."id" AS "Id of the author"
FROM
  "post" AS "post"
INNER JOIN "user" AS "user" ON "post"."id_author" = "user"."id"
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
            "table": "\"user\"",
            "column": "id"
          }
        },
        "alias": "Id of the author"
      }
    ],

    "joins": [
      {
        "mode": "inner",
        "table": "\"user\"",
        "on": {
          "=": [
            {
              "table_column": {
                "table": "\"user\"",
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

### Why?

It's true that the declarative ways adds an overhead (larger size, too verbose etc).

On other hand, in the cases of when is needed to allow queries from user input in some way, it's trustworthy to specify what the query can do and not. This could prevent malicious and unintentional injections.

## License

MIT
