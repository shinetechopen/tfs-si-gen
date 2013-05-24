@echo off

set node_packages_dir = "./src/server/node_modules"

set mocha_execution_path = %node_packages_dir%/mocha/bin/mocha

// 0. run unit test.(optional)

// 1. build each typescript script.

// 1.1 run jsLint
// 1.2 run jsHint

// 2. compile client plugin scripts to single file.

// 3. optimize/minify js script.

// 4. Copy start script.

node build-script.js