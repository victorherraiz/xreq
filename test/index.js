var assert = require("assert"),
  path = require("path"),
  xreq = require("../index.js");

//root test
assert.equal(xreq("file"), "base");
assert.equal(xreq("file", false), "base");
assert.equal(xreq(".", true), __dirname);
assert.equal(xreq("a.json", true), path.resolve(__dirname, "a.json"));

//folder test
assert.equal(xreq.x("file"), "foo");
assert.equal(xreq.x(".", true), path.resolve(__dirname, "foo"));
assert.equal(xreq.x("a.json", true), path.resolve(__dirname, "foo", "a.json"));

//another folder test
assert.equal(xreq.y("file"), "bar");
assert.equal(xreq.y(".", true), path.resolve(__dirname, "bar"));
assert.equal(xreq.y("a.json", true), path.resolve(__dirname, "bar", "a.json"));

//deep folder test
assert.equal(xreq.z("file"), "foo/bar");
assert.equal(xreq.z(".", true), path.resolve(__dirname, "foo/bar"));
assert.equal(xreq.z("a.json", true),
  path.resolve(__dirname, "foo/bar", "a.json"));

//sub folder test
assert.equal(xreq.a("file"), "foo");
assert.equal(xreq.a(".", true), path.resolve(__dirname, "foo"));
assert.equal(xreq.a("a.json", true), path.resolve(__dirname, "foo", "a.json"));
assert.equal(xreq.a.b("file"), "foo/bar");
assert.equal(xreq.a.b(".", true), path.resolve(__dirname, "foo/bar"));
assert.equal(xreq.a.b("a.json", true),
  path.resolve(__dirname, "foo/bar", "a.json"));

//proxy test
xreq.x(function (file) {
  return xreq.y(file, true);
});
assert.equal(xreq.x("file"), "bar");
xreq.x(null);
assert.equal(xreq.x("file"), "foo");

console.log("success!");


