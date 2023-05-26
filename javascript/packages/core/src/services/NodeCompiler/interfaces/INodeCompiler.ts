import {
  IAstCmpBetween,
  IAstCmpEq,
  IAstCmpGt,
  IAstCmpGte,
  IAstCmpIn,
  IAstCmpIsNotNull,
  IAstCmpIsNull,
  IAstCmpLike,
  IAstCmpLt,
  IAstCmpLte,
  IAstCmpNEq,
  IAstColumn,
  IAstLiteral,
  IAstNode,
  IAstOpAnd,
  IAstOpNot,
  IAstOpOr,
  IAstParam,
  IAstQuery,
  IAstQuerySelect,
  IAstSymbol,
} from "../../../interfaces";
import { ICompiledNode } from "./ICompiledNode";

export interface INodeCompiler {
  compileNode(astNode: IAstNode): ICompiledNode | null;

  compileCmpBetween(astNode: IAstCmpBetween): ICompiledNode;

  compileCmpEq(astNode: IAstCmpEq): ICompiledNode;

  compileCmpGt(astNode: IAstCmpGt): ICompiledNode;
  compileCmpGte(astNode: IAstCmpGte): ICompiledNode;

  compileCmpIn(astNode: IAstCmpIn): ICompiledNode;

  compileCmpIsNotNull(astNode: IAstCmpIsNotNull): ICompiledNode;
  compileCmpIsNull(astNode: IAstCmpIsNull): ICompiledNode;

  compileCmpLike(astNode: IAstCmpLike): ICompiledNode;

  compileCmpLt(astNode: IAstCmpLt): ICompiledNode;
  compileCmpLte(astNode: IAstCmpLte): ICompiledNode;

  compileCmpNEq(astNode: IAstCmpNEq): ICompiledNode;

  compileLiteral(astNode: IAstLiteral): ICompiledNode;

  compileOpAnd(astNode: IAstOpAnd): ICompiledNode;
  compileOpNot(astNode: IAstOpNot): ICompiledNode;
  compileOpOr(astNode: IAstOpOr): ICompiledNode;

  compileParam(astNode: IAstParam): ICompiledNode;

  compileQuery(astNode: IAstQuery): ICompiledNode;

  compileQuerySelect(astNode: IAstQuerySelect): ICompiledNode;

  compileColumn(astNode: IAstColumn): ICompiledNode;

  compileSymbol(astNode: IAstSymbol): ICompiledNode;
}
