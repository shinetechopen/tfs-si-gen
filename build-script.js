var fs = require("fs");
var config = require("./build-config");
var buildUtil = require("./build-util");

buildUtil.initConfig(config);

console.log(config);

// 0. run unit test.(optional)

// 1. build each typescript script.

// 1.1 run jsLint
// 1.2 run jsHint

// 2. compile client plugin scripts to single file.

// 3. optimize/minify js script.

// 4. Copy start script.
