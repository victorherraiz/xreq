var assert = require("assert"),
    path = require("path"),
    xreq = require("../index.js");

assert.equal(xreq("file"), "base");
assert.equal(xreq.path, __dirname);

assert.equal(xreq.x("file"), "foo");
assert.equal(xreq.x.path, path.resolve(__dirname, "foo"));

assert.equal(xreq.y("file"), "bar");
assert.equal(xreq.y.path, path.resolve(__dirname, "bar"));

assert.equal(xreq.z("file"), "foo/bar");
assert.equal(xreq.z.path, path.resolve(__dirname, "foo/bar"));

console.log("success!");


