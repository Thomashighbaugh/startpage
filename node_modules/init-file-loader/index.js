/*!
 * init-file-loader <https://github.com/jonschlinkert/init-file-loader>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var path = require('path');

module.exports = function fileLoader(file, renameKey) {
  if (!file || typeof file !== 'object') {
    throw new TypeError('init-file-loader expects file to be an object.');
  }

  if (typeof file.path !== 'string') {
    throw new TypeError('init-file-loader expects `file` to have a `path` property.');
  }

  if (Buffer.isBuffer(file.contents) !== true && typeof file.contents !== 'string') {
    throw new TypeError('init-file-loader expects `file` to have a `contents` property.');
  }

  var name = typeof renameKey !== 'function'
    ? path.basename(file.path, path.extname(file.path))
    : renameKey(file.path);

  file.content = file.contents.toString();
  file.id = name;
  var template = {};
  template[name] = file;
  return template;
};
