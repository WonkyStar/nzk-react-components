/* eslint-disable import/no-extraneous-dependencies */

import { createRequire } from 'node:module';

import commonjs from "@rollup/plugin-commonjs";
import babel from '@rollup/plugin-babel';
import resolve from "@rollup/plugin-node-resolve";
import terser from '@rollup/plugin-terser';
import typescript from "rollup-plugin-typescript2";
/// import externals from "rollup-plugin-node-externals";

const require = createRequire(import.meta.url);
const pkg = require('./package.json');

const makeExternalPredicate = (externalArr) => {
  if (externalArr.length === 0) {
    return () => false;
  }
  const pattern = new RegExp(`^(${externalArr.join('|')})($|/)`);
  return (id) => pattern.test(id);
};

const outputOptions = {
  exports: 'auto',
  preserveModules: true,
  preserveModulesRoot: "src",
  interop: 'compat',
}

const babelRuntimeVersion = pkg.dependencies['@babel/runtime'].replace(/^[^0-9]*/, '');

export default {
  input: "src/index.ts",
  output: [
    {
      ...outputOptions,
      dir: "dist/cjs",
      format: "cjs",
    },
    {
      ...outputOptions,
      dir: "dist/esm",
      format: "esm",
    },
  ],
  external: makeExternalPredicate([
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ]),
  plugins: [
    commonjs({
      include: [
        "node_modules/**",
      ]
    }),
    resolve({
      browser: true,
    }),
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfigOverride: {
        exclude: ["**/*.stories.*"]
      }
    }),
    babel({
      babelHelpers: 'runtime',
      babelrc: false,
      extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.ts', '.tsx'],
      exclude: /node_modules/,
      plugins: [
        ["module-resolver", {
          "alias": {
            "lib": "./src/lib",
          }
        }],
        "babel-plugin-styled-components",
        ['@babel/plugin-transform-runtime', { version: babelRuntimeVersion }]
      ],
      presets: [
        ['@babel/preset-env', { targets: 'defaults' }],
        ['@babel/preset-react', { runtime: 'automatic' }],
        ['@babel/preset-typescript'],
      ]
    }),
    terser(),
  ],
};
