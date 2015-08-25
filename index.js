"use strict";

var path = require("path"),
  basepath = path.dirname(module.parent.filename),
  CONFIG_FILE_NAME = "package.json",
  auxpath,
  i,
  config;

//Searching for config file
for (i = 0; i < 200 && !config; i += 1) {
  try {
    config = require(path.resolve(basepath, CONFIG_FILE_NAME));
  } catch (e) {
    if (e.code !== "MODULE_NOT_FOUND") {
      throw e;
    }
    auxpath = path.resolve(basepath, "..");
    // filesystem root path
    if (auxpath === basepath) {
      break;
    }
    basepath = auxpath;
  }
}

if (!config) {
  throw new Error(CONFIG_FILE_NAME + " not found in the path");
}

function resolver(base) {
  var proxy = null;
  return function resolve(file, asPath) {
    if (typeof file === "string") {
      file = (proxy && proxy(file)) || path.resolve(base, file);
      return asPath ? file : require(file);
    }

    if (typeof file === "function" || file === null) {
      proxy = file;
    } else {
      throw new TypeError("file param must be string, function or null");
    }
  };
}

// Process configuration file
function build(base, config) {
  var result = resolver(base);
  Object.keys(config).forEach(function (key) {
    var value = config[key];
    if (typeof value === "string") {
      result[key] = resolver(result(value, true));
    } else if (Array.isArray(value) && value.length === 2 &&
        typeof value[0] === "string" &&  typeof value[1] === "object") {
      result[key] = build(result(value[0], true), value[1]);
    } else {
      throw new TypeError("Invalid value at: " + key);
    }
  });
  return result;
}

module.exports = build(basepath, config.xreq || {});