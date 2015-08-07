var assert = require("assert"),
    path = require("path"),
    xreq = require("../index.js");

assert.equal(xreq("file"), "base");
assert.equal(xreq.path(), __dirname);
assert.equal(xreq.path("a.json"), path.resolve(__dirname, "a.json"));

assert.equal(xreq.x("file"), "foo");
assert.equal(xreq.x.path(), path.resolve(__dirname, "foo"));
assert.equal(xreq.x.path("a.json"), path.resolve(__dirname, "foo", "a.json"));

assert.equal(xreq.y("file"), "bar");
assert.equal(xreq.y.path(), path.resolve(__dirname, "bar"));
assert.equal(xreq.y.path("a.json"), path.resolve(__dirname, "bar", "a.json"));


assert.equal(xreq.z("file"), "foo/bar");
assert.equal(xreq.z.path(), path.resolve(__dirname, "foo/bar"));
assert.equal(xreq.z.path("a.json"), path.resolve(__dirname, "foo/bar", "a.json"));

console.log("success!");


