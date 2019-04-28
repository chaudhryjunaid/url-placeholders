# url-placeholders

Replace placeholder values in a url path.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm i 'git+https://github.com/chaudhryjunaid/url-placeholders'
```

## Usage

```js
var placeholders = require('url-placeholders')(options);

placeholders('/users/:userId/books/:bookId', {userId: 1, bookId: 2});
//=> '/users/1/books/2'
```

## Options

Options may be passed to the main function.

```js
var placeholders = require('placeholders')(options);
```

### options.defaults

Pass a `defaults` object on the main function to use for resolving values in all invocations.

**Type**: `{Object}`

**Default**: `undefined`

**Example**

```js
var placeholders = require('placeholders')({
  defaults: {foo: 'one', bar: 'two'}
});

placeholders(':foo/:bar/:baz', {baz: 'three'})
//=> 'one/two/three'
```

### returns a function when no data is passed

This allows you to reuse the same pattern with different data,
like a compiled template.

```js
var placeholders = require('placeholders')({
  prefix: '%',
  postfix: '%'
});

var fn = placeholders('foo/%bar%/%baz%');
fn({bar: 'one', baz: 'two'})
//=> 'foo/one/two'
fn({bar: 'a', baz: 'b'})
//=> 'foo/a/b'
```

## About

### Related projects

This project aims to provide a useful replacement for [placeholders](https://www.npmjs.com/package/placeholders) 
with minimal dependencies.
