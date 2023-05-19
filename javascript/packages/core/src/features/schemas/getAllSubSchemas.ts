import { ALL_SCHEMAS } from "./ALL_SCHEMAS";

export const getAllSubSchemas = () => {
  const getAllSubSchemasGenerator = function* () {
    for (const schema of ALL_SCHEMAS) {
      const schemaId = schema.$id;

      for (const defId in schema.$defs) {
        const path = `#/$defs/${defId}`;

        const uri = `${schemaId}${path}`;

        yield {
          uri,
          path,
          schema,
        };
      }
    }
  };

  return getAllSubSchemasGenerator();
};
