import { validateQuery } from "./validateQuery";

export const parseQuery = (data: any) => {
  const result = validateQuery(data);

  if (result.valid) {
    return result.data;
  }

  throw result.errors;
};
