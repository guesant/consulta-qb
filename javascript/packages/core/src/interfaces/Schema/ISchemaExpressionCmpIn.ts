import { ISchemaExpression } from "./ISchemaExpression";

export type ISchemaExpressionCmpIn = {
  IN: {
    value: ISchemaExpression;
    items: ISchemaExpression[];
  };
};
