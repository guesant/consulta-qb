export type ICompiledNodeStatement = string | { type: "param"; name: string };

export type ICompiledNode = {
  statement: ICompiledNodeStatement[];
};
