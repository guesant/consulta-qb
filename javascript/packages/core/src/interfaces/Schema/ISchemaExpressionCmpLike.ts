import { ISchemaExpression } from "./ISchemaExpression";

export type ISchemaExpressionCmpLike = {
  LIKE: {
    value: ISchemaExpression;
    pattern: ISchemaExpression;
  };
};
