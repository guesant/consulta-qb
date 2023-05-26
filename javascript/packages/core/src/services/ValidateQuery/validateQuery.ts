import { getAjv } from "../../features/ajv/ajv";
import { ISchemaQuery } from "../../interfaces/Schema";
import { SCHEMA_QUERY } from "../../features/schemas/schemas-ids";

export const validateQuery = (data: any) => {
  const ajv = getAjv();

  const validate = ajv.getSchema(SCHEMA_QUERY)!;

  const dt = structuredClone(data);

  if (validate(dt)) {
    return {
      valid: true,
      data: dt as ISchemaQuery,
      errors: null,
    };
  }

  return {
    valid: false,
    data: null,
    errors: validate.errors,
  };
};
