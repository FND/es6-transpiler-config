/* eslint-env node */
"use strict";

// `entryPoint` is the path to the manifest module (typically `"./src/index.js"`)
// `target` is the path to the compiled bundle (typically `"./dist/bundle.js"`)
// `options.extensions` is a list of additional file extensions for loading
// modules (e.g. `[".jsx"]`)
// `options.externals` determines which modules to exclude from the bundle
// (e.g. `{ jquery: "jQuery" }` - the key represents the respective module
// name, the value refers to a global variable)
//
// TODO: support for minification
module.exports = { // getters ensure we only import what's actually being used
	get rollup() {
		return require("./src/rollup");
	},
	get webpack() {
		return require("./src/webpack");
	}
};
