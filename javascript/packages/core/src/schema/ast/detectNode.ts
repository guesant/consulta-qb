import { getDefPaths } from "../get-def-paths";
import { getAjv } from "../ajv";

export const detectNode = (payload: any) => {
  const ajv = getAjv({

  });

  const detectStructureGenerator = function* () {
    for (const path of getDefPaths()) {
      const validate = ajv.getSchema(path);

      if (!validate) {
        throw new Error(`Could not find schema for ${path}.`);
      }

      const payloadClone = structuredClone(payload);

      try {
        const isValid = validate(payload);

        if (isValid) {
          yield {
            path,
            payload: payloadClone,
          }
        }
      } catch (e) {
      }
    }
  }

  const structures = Array.from(detectStructureGenerator());

  return structures;
}
