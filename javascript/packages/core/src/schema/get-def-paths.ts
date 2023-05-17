import {SCHEMAS} from "../helpers/raw-schemas";

export const getDefPaths = () => {
  const getDefPaths = function* () {
    for (const schema of SCHEMAS) {
      const schemaId = schema.$id;

      for (const defId in schema.$defs) {
        const defPath = `${schemaId}#/$defs/${defId}`;
        yield defPath;
      }
    }
  }

  return getDefPaths();
}

