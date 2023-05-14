export type IExpressionLiteral = string | number | boolean | null;

export type IExpressionLiteralRef = {
  ref: "literal";
  literal: IExpressionLiteral;
};
