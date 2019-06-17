/*!
 * to-vinyl <https://github.com/jonschlinkert/to-vinyl>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var isObject = require('isobject');

module.exports = function toVinyl(template, Vinyl) {
  Vinyl = Vinyl || require('vinyl');

  if (!isObject(template)) {
    throw new TypeError('to-vinyl expects an object.');
  }

  if (typeof template.content !== 'string') {
    throw new Error('to-vinyl expects `template.content` to be a string.');
  }

  var file = new Vinyl({path: template.path});

  for (var key in template) {
    if (template.hasOwnProperty(key)) {
      file[key] = template[key];
    }
  }

  file.contents = new Buffer(template.content);
  return file;
};
