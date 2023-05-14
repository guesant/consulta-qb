import { defineConfig } from 'rollup'
import json from '@rollup/plugin-json';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import pkg from "./package.json" assert { type: "json" }
import dts from "rollup-plugin-dts";

const PLUGINS = [
  json(),
  commonjs(),
  nodeResolve(),
  typescript(),
];

const EXTERNAL = [
  ...Object.entries(pkg.dependencies)
]

export default defineConfig([
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
      },
       {
         file: 'dist/index.mjs',
         format: 'esm'
       }
    ],
    plugins: [
      ...PLUGINS
    ],
    external: [
      ...EXTERNAL
    ]
  },
  {
    input: "./src/index.ts",
    output: [
      {
        file: "dist/index.d.ts",
        format: "es"
      }
    ],
    plugins: [
      ...PLUGINS,
      dts()
    ],
  },
])