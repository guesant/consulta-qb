import { IAstNode } from "../../../interfaces";
import { IDetectedNodeStructure } from "../../DetectNodeStructures";

export type IAstGeneratorNodeHandler<T, Ast = IAstNode> = {
  path: string;

  handle: (nodeStructure: IDetectedNodeStructure<T>) => Ast;
};
