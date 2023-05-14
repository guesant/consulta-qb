# consulta-qb

The goal of consulta-qb is allow to write relational database queries using a declarative language.

## Examples

```json
{
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
}
```

### Why?

It's true that the declarative ways adds an overhead (larger size, too verbose etc).

On other hand, in the cases of when is needed to allow queries from user input in some way, it's trustworthy to specify what the query can do and not. This could prevent malicious and unintentional injections.

## License

MIT
