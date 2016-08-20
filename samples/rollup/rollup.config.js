/* eslint-env node */
"use strict";

let generateConfig = require("es6-transpiler-config").rollup;

module.exports = generateConfig("./src/index.js", "./dist/bundle.js", {
	extensions: [".jsx", ".coffee"],
	externals: {
		jquery: "jQuery"
	}
});
