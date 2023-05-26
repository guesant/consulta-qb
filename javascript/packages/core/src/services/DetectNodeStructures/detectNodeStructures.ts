import { cloneDeep } from "lodash";
import { getAjv, getAllSubSchemas } from "../../features";
import { IDetectedNodeStructure } from "./interfaces";

export const detectNodeStructures = (node: unknown) => {
  const ajv = getAjv({});

  const detectNodeStructuresGenerator = function* () {
    for (const { uri, path } of getAllSubSchemas()) {
      const validate = ajv.getSchema(uri);

      if (!validate) {
        throw new Error(`Could not find schema for ${path}.`);
      }

      const data = cloneDeep(node);

      try {
        const isValid = validate(node);

        if (isValid) {
          const detectedNodeStructure: IDetectedNodeStructure = {
            uri,
            path,
            data,
          };

          yield detectedNodeStructure;
        }
      } catch (e) {}
    }
  };

  const detectedNodeStructures = Array.from(detectNodeStructuresGenerator());

  return detectedNodeStructures;
};
