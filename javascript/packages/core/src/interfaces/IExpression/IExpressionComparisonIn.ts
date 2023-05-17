import {IExpression} from "./IExpression";

export type IExpressionComparisonIn = {
  type: "cmp_in";

  value: IExpression;
  items: IExpression[];
};

export type IExpressionComparisonInRef = {
  ref: "cmp_in";
  IN: IExpressionComparisonIn;
};
