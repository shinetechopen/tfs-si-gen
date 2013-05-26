var fs = require('fs');

var config = {};

config.buildPath = "build/";
config.buildPluginPath = config.buildPath + "plugin/";
config.buildServerPath = config.buildPath + "server/";

console.log(config);

var buildList = [
    "./src/server/widget/entity.min.js",
    "./src/server/widget/dependence.min.js",
    "./src/server/widget/core.min.js"
    ],
  
    copyFileList = [
    "./src/server/app.min.js",
    "./src/server/start.bat",
    "./src/server/start.sh"
    ],
    
    copyDirectoryList = [
    "./src/server/Content",
    "./src/server/Scripts",
    "./src/server/node_modules",
    "./src/server/interop/"
    ];

// 0. run unit test.(optional)

// 1. build each typescript script.

// 1.1 run jsLint
// 1.2 run jsHint

// 2. compile client plugin scripts to single file.

// 3. optimize/minify js script.

// 4. Copy start script.
