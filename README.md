eXtended REQuest
=================

It allow you to request modules (e.g. js, json...) from the base path of the current one and define other paths.


## Installation

```bash
$ npm install xreq --save
```

## Basic usage:

Add configuration file (e.i. `xreq.json`) in the same folder as `package.json`.

```json
{}
```

Use it in your modules

```js
//Current js file at foo/bar/a.js
var xreq = require('xreq');
//Require a file at other/folder/b.js
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
//Require a file at "src/server/services"
var AService = xreq.services('AService');
```

There are some restrictions for the entry names. Please, do not use the follow ones:

* `path`: contains the absolute path.
* `name`, `length`: `xreq` is a function with static members.
