/* eslint-env node */
"use strict";

let path = require("path");

// `entryPoint` is the path to the manifest module (typically `"./src/index.js"`)
// `target` is the path to the compiled bundle (typically `"./dist/bundle.js"`)
// `options.extensions` is a list of additional file extensions for loading
// modules (e.g. `[".jsx"]`)
// `options.externals` determines which modules to exclude from the bundle
// (e.g. `{ jquery: "jQuery" }` - the key represents the respective module
// name, the value refers to a global variable)
//
// TODO: support for exposing library APIs (via `library` and `libraryTarget`)
module.exports = function generateConfig(entryPoint, target, options = {}) {
	let { extensions, externals } = options;

	let cfg = {
		entry: path.resolve(entryPoint),
		output: {
			path: path.resolve(path.dirname(target)),
			filename: path.basename(target)
		},
		resolve: {
			root: path.resolve("./node_modules")
		},
		module: {
			loaders: [{
				loader: "babel-loader",
				query: { // complements Babel configuration in `package.json`
					cacheDirectory: true
				}
			}]
		}
	};

	if(extensions) {
		cfg.resolve.extensions = ["", ".js"].concat(extensions);
	}

	if(externals) { // excluded from bundle
		cfg.externals = externals;
	}

	return cfg;
};
