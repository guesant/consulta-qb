import constraintsSchema from "../../../../../schemas/0.0.0/constraints.schema.json";
import expressionSchema from "../../../../../schemas/0.0.0/expression.schema.json";
import querySchema from "../../../../../schemas/0.0.0/query.schema.json";

export {
  querySchema,
  expressionSchema,
  constraintsSchema,
}

export const SCHEMA_QUERY = querySchema.$id;

export const SCHEMA_EXPRESSION = expressionSchema.$id;

export const SCHEMA_CONSTRAINTS = constraintsSchema.$id;

export const SCHEMAS = [
  querySchema,
  expressionSchema,
  constraintsSchema,
]