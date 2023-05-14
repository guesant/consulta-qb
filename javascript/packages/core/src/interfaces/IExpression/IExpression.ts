//

import {IExpressionValueRef} from "./IExpressionValue";
import {IExpressionOperatorAndRef} from "./IExpressionOperatorAnd";
import {IExpressionOperatorOrRef} from "./IExpressionOperatorOr";
import {IExpressionOperatorNotRef} from "./IExpressionOperatorNot";
import {IExpressionComparisonEqualRef} from "./IExpressionComparisonEqual";
import {IExpressionComparisonNotEqualRef} from "./IExpressionComparisonNotEqual";
import {IExpressionComparisonLessThanRef} from "./IExpressionComparisonLessThan";
import {IExpressionComparisonLessThanOrEqualRef} from "./IExpressionComparisonLessThanOrEqual";
import {IExpressionComparisonGreaterThanRef} from "./IExpressionComparisonGreaterThan";
import {IExpressionComparisonGreaterThanOrEqualRef} from "./IExpressionComparisonGreaterThanOrEqual";
import {IExpressionComparisonBetweenRef} from "./IExpressionComparisonBetween";
import {IExpressionComparisonLikeRef} from "./IExpressionComparisonLike";
import {IExpressionComparisonInRef} from "./IExpressionComparisonIn";
import {IExpressionComparisonIsNullRef} from "./IExpressionComparisonIsNull";
import {IExpressionComparisonIsNotNullRef} from "./IExpressionComparisonIsNotNull";

export type IExpression =
  IExpressionValueRef
  | IExpressionOperatorAndRef
  | IExpressionOperatorOrRef
  | IExpressionOperatorNotRef
  | IExpressionComparisonEqualRef
  | IExpressionComparisonNotEqualRef
  | IExpressionComparisonLessThanRef
  | IExpressionComparisonLessThanOrEqualRef
  | IExpressionComparisonGreaterThanRef
  | IExpressionComparisonGreaterThanOrEqualRef
  | IExpressionComparisonBetweenRef
  | IExpressionComparisonLikeRef
  | IExpressionComparisonInRef
  | IExpressionComparisonIsNullRef
  | IExpressionComparisonIsNotNullRef;