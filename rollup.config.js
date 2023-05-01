import typescript from "rollup-plugin-typescript2";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import json from "@rollup/plugin-json";
import del from "rollup-plugin-delete";
import package_json from "./package.json" assert { type: "json" };
var package_name = package_json.name;
//var package_version = package_json.version;
//var package_file = `${package_name}-${package_version}.tgz`;
var package_file_regex = `${package_name}-*.tgz`;
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
  plugins: [
    resolve(),
    commonjs(),
    typescript(),
    postcss(),
    json(),
    del({ targets: ["dist/*", package_file_regex] }),
  ],
  external: ["react", "react-dom"],
  // allow circular dependencies
  onwarn: function (warning, warn) {
    if (warning.code === "CIRCULAR_DEPENDENCY") return;
    warn(warning);
  },
};
