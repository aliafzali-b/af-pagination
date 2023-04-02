import typescript from "rollup-plugin-typescript2";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import json from "@rollup/plugin-json";

export default {
  input: "src/index.tsx",
  output: [
    { file: "./dist/main.mjs", format: "es" },
    {
      file: "dist/index.cjs.js",
      format: "cjs",
      exports: "named",
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
    },
    {
      file: "dist/bundle.js",
      format: "esm",
    },
  ],
  plugins: [resolve(), commonjs(), typescript(), postcss(), json()],
  external: ["react", "react-dom"],
  // allow circular dependencies
  onwarn: function (warning, warn) {
    if (warning.code === "CIRCULAR_DEPENDENCY") return;
    warn(warning);
  },
};
