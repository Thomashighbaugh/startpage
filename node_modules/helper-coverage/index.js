/*!
 * helper-coverage <https://github.com/jonschlinkert/helper-coverage>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var fs = require('fs');
var tryOpen = require('try-open');
var stripColor = require('strip-color');

module.exports = function coverage(fp) {
  if (typeof fp !== 'string') return '';
  if (typeof tryOpen(fp, 'r') !== 'number') {
    throw new Error('helper-coverage cannot find: ' + fp);
  }
  var str = fs.readFileSync(fp, 'utf8');
  str = stripColor(str).replace(/^=.*/gm, '');
  return str.trim();
};
