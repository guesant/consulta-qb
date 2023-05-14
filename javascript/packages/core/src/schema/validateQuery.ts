import {ajv} from "../helpers/ajv";
import {IQuery, IQueryRef} from "../interfaces";
import {SCHEMA_QUERY} from "../helpers/tokens";

export const validateQuery = (data: any) => {
  const validate = ajv.getSchema(SCHEMA_QUERY)!;

  const dt = structuredClone(data);

  if(validate(dt)) {
    return {
      valid: true,
      data: dt as IQueryRef,
      errors: null
    }

  }

  return {
    valid: false,
    data: null,
    errors: validate.errors
  };
}
