import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
/// import externals from "rollup-plugin-node-externals";

export default {
  input: "src/index.ts",
  output: [
    {
      dir: "dist/cjs",
      exports: "auto",
      format: "cjs",
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: "src",
      // entryFileNames: "[name].js",
    },
    {
      dir: "dist/esm",
      exports: "auto",
      format: "esm",
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: "src",
      // entryFileNames: "[name].js",
    },
  ],
  external: [
    "add",
    "polished",
    "canvas-confetti",
    "resize-observer-polyfill",
    "shortid",
    "styled-components",
    "unstated-next",
    "tslib",
    "lodash.after",
    "react-datepicker"
  ],
  plugins: [
    // externals(),
    peerDepsExternal(),
    resolve({
      browser: true,
    }),
    commonjs({
      include: "node_modules",
    }),
    typescript({
      useTsconfigDeclarationDir: true,
    }),
  ],
};
