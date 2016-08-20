simple utility for transpiling ES6 and beyond

While under the hood, [webpack](https://webpack.github.io) and
[Babel](https://babeljs.io) are used, the goal here is to provide a simplified
subset so most users don't have to worry about the underlying toolchain.


Getting Started
---------------

* install this package:

        $ npm install --save-dev es6-transpiler-config

* configure Babel in `package.json`¹:

    ```json
    "babel": {
      "presets": ["es2015"]
    }
    ```

    (cf. `samples/webpack/package.json`)

* create a `webpack.config.js`:

    ```javascript
    let generateConfig = require("es6-transpiler-config").webpack;

    module.exports = generateConfig("./src/index.js", "./dist/bundle.js");
    ```

    (cf. `samples/webpack/webpack.config.js`)

* start transpiling:

        $ webpack --progress --colors --watch

    (cf. script commands in `samples/webpack/package.json`)


¹ While this might also be added to webpack's configuration, that would make it
  difficult to use the same Babel configuration across different contexts (e.g.
  by calling `require("babel-register")` in tests to transpile on demand).
