eXtended REQuest
=================

It requires files from the base path of your app and let you configure alias to other paths for faster refactorings. No more `../..`!!

## Installation

```bash
$ npm install xreq --save
```

## Basic usage:

Add configuration file (e.i. `xreq.json`) in the same folder as `package.json`.

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
// That is better than require('../../src/server/AService');
```

There are some restrictions for the entry names. Please, do not use the follow ones:

* `path`: contains the absolute path.
* `name`, `length`: `xreq` is a function with static members.
