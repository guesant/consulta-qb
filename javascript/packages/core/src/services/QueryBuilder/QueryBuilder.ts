import { ISchemaNode } from "../../interfaces";
import { validateQuery } from "../../services/ValidateQuery/validateQuery";
import { generateAst } from "../AstGenerator/generateAst";
import { NodeCompilerStandard } from "../NodeCompiler/NodeCompilerStandard";
import { INodeCompiler } from "../NodeCompiler/interfaces/INodeCompiler";

export class QueryBuilder {
  private node: ISchemaNode | null = null;

  private nodeCompiler: INodeCompiler;

  constructor(nodeCompiler: INodeCompiler = new NodeCompilerStandard()) {
    this.nodeCompiler = nodeCompiler;
  }

  setNode(query: ISchemaNode | null = null) {
    const { valid, data } = validateQuery(query);

    if (!valid) {
      throw new Error("Invalid schema node.");
    }

    this.node = data;
  }

  getAst() {
    const node = this.node;

    if (node !== null) {
      const ast = generateAst(this.node);
      return ast;
    }

    return null;
  }

  static withNode(node: ISchemaNode) {
    const queryBuilder = new QueryBuilder();

    queryBuilder.setNode(node);

    return queryBuilder;
  }

  getSql() {
    const ast = this.getAst();

    if (ast !== null) {
      return this.nodeCompiler.compileNode(ast);
    }

    return null;
  }
}
