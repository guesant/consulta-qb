import { IExpressionValue } from "../../IExpression";
import { IQuerySelectColumn } from "./IQuerySelectColumn";
import { IQuerySelectFrom } from "./IQuerySelectFrom";
import { IQuerySelectJoin } from "./IQuerySelectJoin";

export type IQuerySelect = {
  type: "select";

  from: IQuerySelectFrom;

  columns: [IQuerySelectColumn, ...IQuerySelectColumn[]];

  joins: IQuerySelectJoin[];

  where?: IExpressionValue;
};

export type IQuerySelectRef = {
  select: IQuerySelect;
};
