import { ISchemaExpression } from "./ISchemaExpression";

export type ISchemaCmpIn = {
  IN: {
    value: ISchemaExpression;
    items: ISchemaExpression[];
  };
};
