import { ISchemaExpression } from "./ISchemaExpression";

export type ISchemaOpOr = {
  OR: [ISchemaExpression, ISchemaExpression];
};
