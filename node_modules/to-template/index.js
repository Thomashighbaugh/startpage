/*!
 * to-template <https://github.com/jonschlinkert/to-template>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var isObject = require('is-plain-object');
var vinylProps = require('./props');

/**
 * Convert a Vinyl file object to a non-vinyl template object.
 *
 * ```js
 * var template = utils.toTemplate(file);
 * ```
 *
 * @name toTemplate
 * @param  {Object} `file` Vinyl file object
 * @return {Object} Object with properties expected by Template or Template apps
 * @api public
 */

module.exports = function toTemplate(file) {
  if (!file) {
    throw new Error('to-template expects `file` to be an object');
  }

  var template = {};
  if (Buffer.isBuffer(file.contents) || typeof file.contents === 'string') {
    template.content = file.contents.toString();
  } else if (typeof file.content === 'string') {
    template.content = file.content.toString();
  } else {
    throw new Error('to-template expects `file.contents` to be a buffer or string.');
  }

  for (var key in file) {
    if (vinylProps.ignore.indexOf(key) === -1) {
      template[key] = file[key];
    }
  }

  template.relative = file.relative;
  template.path = file.path;
  template.data = template.data || {};

  if (isObject(file.stat)) {
    template.stat = file.stat;
  }
  return template;
};
