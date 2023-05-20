import { ISchemaExpression } from "./ISchemaExpression";

export type ISchemaCmpBetween = {
  BETWEEN: {
    value: ISchemaExpression;
    start: ISchemaExpression;
    end: ISchemaExpression;
  };
};
