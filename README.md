eXtended REQuest
=================

[![Build Status](https://travis-ci.org/victorherraiz/xreq.svg?branch=master)](https://travis-ci.org/victorherraiz/xreq)

It requires files from the base path of your app and let you configure alias to other paths for faster refactoring. No more `../..`!!

## Features

* No bootstrap required
* No dependencies 
* Multiple alias support
* Local path file resolution
* Proxy support (mocks)

## Installation

```bash
$ npm install xreq --save
```

## Basic usage:

Use it in your modules:

```js
//Current js file at foo/bar/a.js
var xreq = require('xreq');
//Require a file at other/folder/b.js, only searh from the base path
var b = xreq('other/folder/b');
```

## How it works

It search the `package.json` of your project, and build routes from that point.

## Custom paths

Add some custom paths at `package.json`

```json
"xreq": {
	"server": "src/server",
	"services": "src/server/services",
	"models": "src/server/models",
	"test": "test"
}
```

Use it in your modules:

```js
//Current js file at foo/bar/a.js
var xreq = require('xreq');
//Require a file at "src/server/services". Use "service" alias as in the xreq
var AService = xreq.services('AService'); 
// That is better than require('../../src/server/services/AService');
```

## Path resolution

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




