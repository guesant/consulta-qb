import { ISchemaExpression } from "./ISchemaExpression";

export type ISchemaCmpLike = {
  LIKE: {
    value: ISchemaExpression;
    pattern: ISchemaExpression;
  };
};
