/*!
 * lint-templates <https://github.com/jonschlinkert/lint-templates>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var chalk = require('chalk');
var symbol = require('log-symbols');
var error = require('rethrow');
var get = require('get-value');
var set = require('set-value');
var has = require('has-value');

module.exports = function lint(regex) {
  regex = regex || /<%[=-]?(.*)?%>/gm;

  return function (app, file) {
    var str = file.content || file.contents.toString();
    var m, copy = str;

    while (m = regex.exec(copy)) {
      copy = copy.split(m[0]).join('');
      var key = m[1].trim();
      var isHelper = key.indexOf('(') !== -1;
      key = key.split('(')[0];

      if (isHelper) {
        helper(app, file, key);
      } else {
        data(app, file, key);
      }
    }
  };
};

/**
 * Find missing data.
 *
 * @param  {Object} `app`
 * @param  {Object} `file`
 * @param  {String} `key`
 * @return {Object}
 */

function data(app, file, key) {
  var o = has(app.options, key);
  var c = has(app.cache.data, key);
  var d = has(file.data, key);
  if (!c && !d && !o) {
    set(file.data, key, comment(key, 'property'));
    console.log(warning(' missing variable:'));
  }
}

/**
 * Find missing helpers.
 *
 * @param  {Object} `app`
 * @param  {Object} `file`
 * @param  {String} `key`
 * @return {Object}
 */

function helper(app, file, key, re) {
  var h = get(app._.asyncHelpers, key);
  var a = get(app._.helpers, key);

  if (!h && !a) {
    set(file.data, key, function () {
      return comment(key, 'helper');
    });

    if (re.test(file.content)) {
      var message = 'MISSING helper: "' + key + '".\n';
      // rethrow (or actually throw) the error
      var err = new SyntaxError(message);
      if (app.disabled('silent')) {
        rethrow(err, file.path, file.content, re);
      }
    }
  }
}

/**
 * Create a code comment to inject into templates where variables
 * are missing, to help with debugging.
 *
 * @param  {String} `key`
 * @param  {String} `type`
 * @return {String}
 */

function comment(key, type) {
  return '<!-- MISSING ' + type + ': `' + key + '` is undefined! -->';
}

function warning(message) {
  return symbol.warning + chalk.yellow(message);
}

/**
 * Re-throw an error to get the line number and
 * postion to help with debuging.
 *
 * @param  {Error} `err` Pass an `Error` object
 * @param  {Object} `fp` Pass `file.path`
 * @param  {Object} `str` The content string
 * @param  {Object} `re` RegExp to use for matching the template delimiters
 * @return {Object}
 */

function rethrow(err, fp, str, re) {
  var lines = str.split('\n');
  var len = lines.length, i = 0;
  var res = '';

  while (len--) {
    var line = lines[i++];
    if (re.test(line)) {
      error(err, fp, i, str);
      break;
    }
  }
}
