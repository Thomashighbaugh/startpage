/*!
 * rethrow <https://github.com/jonschlinkert/rethrow>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var fs = require('fs');

/**
 * Re-throw the given `err` in context to the offending
 * template expression in `filename` at the given `lineno`.
 *
 * @param {Error} `err` Error object
 * @param {String} `filename` The file path of the template
 * @param {String} `lineno` The line number of the expression causing the error.
 * @param {String} `str` Template string
 * @api public
 */

function rethrow(err, filename, lineno, str) {
  if (!(err instanceof Error)) throw err;
  try {
    str = str || fs.readFileSync(filename, 'utf8');
  } catch (e) {
    rethrow(err, null, lineno);
  }

  lineno += 0;
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);

  // Error context
  var context = lines.slice(start, end).map(function (line, i) {
    var curr = i + start;
    return (curr == lineno ? '  > ' : '    ')
      + curr + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'source') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;
  throw err;
}

module.exports = rethrow;
