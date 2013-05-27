

var addSchemaForConfig = function (config) {
    var schema = process.argv[2];
    var schemaConfig = {};

    if (schema == "debug") {
        schemaConfig.buildExtension = ".js";
    } else if (schema == "release") {
        schemaConfig.buildExtension = ".min.js";
    } else if (schema == "package") {
        schemaConfig.buildExtension = ".min.js";
    } else {
        schemaConfig.buildExtension = ".min.js";
    }

    config.schema = schemaConfig;
}

var formatFilePath = function (buildPath, fileName, fileExtension) {
    return buildPath + fileName + fileExtension;
};

var formatConfigBuildList = function (config) {
    config.buildList.forEach(function (fileName, index, list) {
        list[index] = formatFilePath(config.buildPath, fileName, config.schema.buildExtension);
    });
};

exports.initConfig = function (config) {
    addSchemaForConfig(config);
    formatConfigBuildList(config);
};