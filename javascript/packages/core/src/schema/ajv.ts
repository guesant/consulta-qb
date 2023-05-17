import Ajv, {Options} from "ajv/dist/2020";
import constraintsSchema from "../../../../../schemas/0.0.0/constraints.schema.json";
import expressionSchema from "../../../../../schemas/0.0.0/expression.schema.json";
import querySchema from "../../../../../schemas/0.0.0/query.schema.json";
import {SCHEMA_CONSTRAINTS, SCHEMA_EXPRESSION, SCHEMA_QUERY} from "../helpers/raw-schemas";

export const getAjv = (options?: Options) => {
  const ajv = new Ajv({
    ...options,
  });

  ajv.addSchema(querySchema, SCHEMA_QUERY);
  ajv.addSchema(expressionSchema, SCHEMA_EXPRESSION);
  ajv.addSchema(constraintsSchema, SCHEMA_CONSTRAINTS);

  return ajv;
}

