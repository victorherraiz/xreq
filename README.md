eXtended REQuest
=================

[![Build Status](https://travis-ci.org/victorherraiz/xreq.svg?branch=master)](https://travis-ci.org/victorherraiz/xreq)

It requires files from the base path of your app and let you configure alias to other paths for faster refactoring. No more `../..`!!

## Features

* No bootstrap required: it does not require to configure the paths at entry points.
* Module support: It works for dependencies.
* Multiple alias support.
* Namespaces.
* Local path resolution.

## Installation

```bash
$ npm install xreq --save
```

## Basic usage:

Add configuration file req.json` in the same folder as `package.json`.

```json
{}
```
Creating this file it is mandatory.

Use it in your modules:

```js
//Current js file at foo/bar/a.js
var xreq = require('xreq');
//Require a file at other/folder/b.js, only searh from the base path
var b = xreq('other/folder/b');
```

## Custom paths

Add some custom paths at `xreq.json`

```json
{
	"services": "src/server/services",
	"models": "src/server/models",
	"test": "test"
}
```

Use it in your modules:

```js
//Current js file at foo/bar/a.js
var xreq = require('xreq');
//Require a file at "src/server/services". Use "service" alias as in the xreq.json
var AService = xreq.services('AService'); 
// That is better than require('../../src/server/services/AService');
```

There are some restrictions for the entry names. Please, do not use the follow ones:

* `path`: contains the absolute path.
* `name`, `length`: `xreq` is a function with static members.

## Path resolution

Every alias, including base path, has the method `path([subpath])`.

```js
var xreq = require('xreq');

// Print the base location, the folder where the xreq file resides.
console.log(xreq.path()); 

// Print the complete path to file a.hbs
console.log(xreq.path('a.hts')); 

// It works the same way for aliases
console.log(xreq.templates.path('products.hts')); 

```

This method is quite useful for resolve template location or other static files in the local application.




