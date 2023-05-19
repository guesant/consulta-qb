import { ISchemaExpression } from "./ISchemaExpression";
import { ISchemaQuerySelectColumn } from "./ISchemaQuerySelectColumn";
import { ISchemaQuerySelectFrom } from "./ISchemaQuerySelectFrom";
import { ISchemaQuerySelectJoin } from "./ISchemaQuerySelectJoin";

export type ISchemaQuerySelect = {
  select: {
    from: ISchemaQuerySelectFrom;

    columns: [ISchemaQuerySelectColumn, ...ISchemaQuerySelectColumn[]];

    joins: ISchemaQuerySelectJoin[];

    where?: ISchemaExpression;
  };
};
