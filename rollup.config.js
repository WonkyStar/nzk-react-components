import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import svgr from "@svgr/rollup";
import copy from "rollup-plugin-copy-assets";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import externals from "rollup-plugin-node-externals";

export default {
  input: "src/index.ts",
  output: [
    {
      dir: "dist",
      exports: "auto",
      format: "cjs",
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: "src",
      // entryFileNames: "[name].js",
    },
  ],
  plugins: [
    externals(),
    peerDepsExternal(),
    resolve({
      browser: true,
    }),
    commonjs(),
    typescript({
      useTsconfigDeclarationDir: true,
    }),
    svgr({
      svgoConfig: {
        plugins: {
          removeViewBox: false,
        },
      },
    }),
    copy({
      assets: ["src/assets"],
    }),
    // https://github.com/gregberge/svgr/issues/484
    replace({
      include: ["src/components/Icon/icons.tsx"],
      preventAssignment: true,
      ReactComponent: "default",
    }),
    replace({
      ASSETS_PATH: JSON.stringify("./assets/"),
      preventAssignment: true,
    }),
  ],
};
