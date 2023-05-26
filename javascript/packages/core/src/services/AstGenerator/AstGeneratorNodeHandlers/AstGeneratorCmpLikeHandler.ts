import {
  AST_TOKEN_CMP_LIKE,
  IAstCmpLike,
  IAstExpression,
  ISchemaCmpLike,
} from "../../../interfaces";
import { generateAst } from "../generateAst";
import { IAstGeneratorNodeHandler } from "../interfaces/IAstGeneratorNodeHandler";

export const AstGeneratorCmpLikeHandler: IAstGeneratorNodeHandler<
  ISchemaCmpLike,
  IAstCmpLike
> = {
  path: "#/$defs/cmp_like",

  handle(likeStructure) {
    const data = likeStructure.data;

    const value = generateAst(data["LIKE"].value) as IAstExpression;
    const pattern = generateAst(data["LIKE"].pattern) as IAstExpression;

    const astExpression: IAstCmpLike = {
      type: AST_TOKEN_CMP_LIKE,
      value,
      pattern,
    };

    return astExpression;
  },
};
