import Ajv, { Options } from "ajv/dist/2020";
import {
  constraintsSchema,
  expressionSchema,
  querySchema,
  SCHEMA_CONSTRAINTS,
  SCHEMA_EXPRESSION,
  SCHEMA_QUERY,
} from "../schemas";

export const getAjv = (ajvOptions?: Options) => {
  const ajv = new Ajv({
    removeAdditional: true,
    strict: true,
    verbose: true,
    ...ajvOptions,
  });

  ajv.addSchema(querySchema, SCHEMA_QUERY);
  ajv.addSchema(expressionSchema, SCHEMA_EXPRESSION);
  ajv.addSchema(constraintsSchema, SCHEMA_CONSTRAINTS);

  return ajv;
};
