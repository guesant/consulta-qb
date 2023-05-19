import { ISchemaExpression } from "./ISchemaExpression";

export type ISchemaExpressionCmpBetween = {
  BETWEEN: {
    value: ISchemaExpression;
    start: ISchemaExpression;
    end: ISchemaExpression;
  };
};
