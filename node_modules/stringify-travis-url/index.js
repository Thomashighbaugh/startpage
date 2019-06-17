/*!
 * stringify-travis-url <https://travis.com/jonschlinkert/stringify-travis-url>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var util = require('util');

module.exports = function travis(user, repo) {
  if (typeof user !== 'string') {
    throw new TypeError('stringify-travis-url expects `user` to be a string.');
  }

  if (typeof repo !== 'string') {
    throw new TypeError('stringify-travis-url expects `repo` to be a string.');
  }

  return util.format('https://travis-ci.org/%s/%s', user, repo);
};
