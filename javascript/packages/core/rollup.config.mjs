import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import { defineConfig } from "rollup";
import dts from "rollup-plugin-dts";
import pkg from "./package.json" assert { type: "json" };

const PLUGINS = [json(), commonjs(), nodeResolve(), typescript()];

const EXTERNAL = [...Object.entries(pkg.dependencies)];

export default defineConfig([
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
        sourcemap: true,
      },
      {
        file: "dist/index.mjs",
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [...PLUGINS],
    external: [...EXTERNAL],
  },
  {
    input: "./src/index.ts",
    output: [
      {
        file: "dist/index.d.ts",
        format: "es",
      },
    ],
    plugins: [...PLUGINS, dts()],
  },
]);
