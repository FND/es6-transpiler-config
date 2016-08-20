/* eslint-env node */
"use strict";

let path = require("path");
let babel = require("rollup-plugin-babel");
let commonjs = require("rollup-plugin-commonjs");
let nodeResolve = require("rollup-plugin-node-resolve");

const PKG = "node_modules/**";

module.exports = function generateConfig(entryPoint, target, options = {}) {
	let { extensions, externals } = options;

	let resolve = {
		jsnext: true
	};
	if(extensions) {
		resolve.extensions = [".js"].concat(extensions);
	}

	let cfg = {
		entry: path.resolve(entryPoint),
		dest: path.resolve(target),
		format: "iife",
		plugins: [ // XXX: tricky to modify afterwards
			babel({ exclude: PKG }),
			nodeResolve(resolve),
			commonjs({ include: PKG })
		]
	};

	if(externals) { // excluded from bundle
		cfg.external = Object.keys(externals);
		cfg.globals = externals;
	}

	return cfg;
};
