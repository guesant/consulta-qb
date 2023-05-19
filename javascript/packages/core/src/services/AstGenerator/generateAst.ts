import { IAstNode, ISchemaNode } from "../../interfaces";
import { detectNodeStructures } from "../DetectNodeStructures/detectNodeStructures";
import { getDefaultHandlers } from "./getDefaultHandlers";

const findStructureByPath = <T extends { path: string }>(
  structures: T[],
  path: string
): T | null => {
  return structures.find((structure) => structure.path.endsWith(path)) ?? null;
};

export const generateAst = <Ast = IAstNode, Schema = ISchemaNode>(
  schemaNode: Schema,
  handlers = getDefaultHandlers()
): Ast | null => {
  const nodeStructures = detectNodeStructures(schemaNode);

  for (const handler of handlers) {
    const handlerStructure = findStructureByPath(nodeStructures, handler.path);

    if (handlerStructure !== null) {
      const astNode = handler.handle(handlerStructure);

      return astNode as Ast;
    }
  }

  return null;
};
