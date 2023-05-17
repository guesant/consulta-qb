import {IExpressionLiteralRef} from "./IExpressionLiteral";
import {IExpressionParamRef} from "./IExpressionParam";
import {IExpressionSelectColumnRef} from "./IExpressionSelectColumn";
import {IExpressionSymbolRef} from "./IExpressionSymbol";

export type IExpressionValue =
  | IExpressionSymbolRef
  | IExpressionLiteralRef
  | IExpressionParamRef
  | IExpressionSelectColumnRef;

export type IExpressionValueRef = IExpressionValue;
