
var path = require("path"),
    parent = module.parent.filename,
    basepath = path.dirname(parent),
    CONFIG_FILE_NAME = "xreq.json",
    auxpath,
    config;

while (!config) {
    try {
        config = require(path.resolve(basepath, CONFIG_FILE_NAME));
    } catch (e) {
        if (e.code !== "MODULE_NOT_FOUND") {
            throw e;
        }
        auxpath = path.resolve(basepath, "..");
        if (auxpath === basepath) { // filesystem root path
            throw new Error("xreq config file (e.i. " +
                CONFIG_FILE_NAME + ") not found in the path");
        }
        basepath = auxpath;
    }
}

function resolver(base) {
    var resolve = function (module) {
        return require(path.resolve(base, module));
    };
    resolve.path = base;
    return resolve;
}

function build(parent, config) {
    Object.keys(config).forEach(function (key) {
        var value = config[key];
        if (typeof value === "string") {
            parent[key] = resolver(path.resolve(parent.path, value));
        } else {
            throw new TypeError("Invalid value at:" + key);
        }
    });
    return parent;
}

module.exports = build(resolver(basepath), config);