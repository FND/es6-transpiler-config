/* eslint-env node */
"use strict";

let path = require("path");

// TODO: support for exposing library APIs (via `library` and `libraryTarget`)?
//       (though using global within the actual code might be preferable; more
//       explicit and tooling-agnostic)
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
