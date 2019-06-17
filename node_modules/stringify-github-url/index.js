/*!
 * stringify-github-url <https://github.com/jonschlinkert/stringify-github-url>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var util = require('util');

module.exports = github;

/**
 * Stringify a GitHub project URL.
 *
 * **Example**
 *
 * ```js
 * github('assemble', 'verb');
 * //=> 'https://github.com/assemble/verb'
 *
 * github('assemble', 'verb', 'v0.6.0');
 * //=> 'https://github.com/assemble/verb/tree/v0.6.0'
 * ```
 *
 * @param  {String} `user` Github user or org.
 * @param  {String} `repo` Project name
 * @param  {String} `branch` Optionally specify a branch.
 * @return {String}
 * @api public
 */

function github(user, repo, branch) {
  if (user && typeof user === 'object') {
    var params = user;
    user = params.user;
    repo = params.repo;
    branch = params.branch;
  }

  if (typeof user !== 'string') {
    throw new TypeError('stringify-github-url expects `user` to be a string.');
  }

  if (typeof repo !== 'string') {
    throw new TypeError('stringify-github-url expects `repo` to be a string.');
  }

  var url = 'https://github.com/%s/%s';
  if (typeof branch === 'undefined' || branch === 'master') {
    return util.format(url, user, repo);
  } else {
    url += '/tree/%s';
    return util.format(url, user, repo, branch);
  }
  branch = typeof branch === 'undefined' ? '' : branch;
  return util.format(url, user, repo, branch);
}

/**
 * Stringify a github tarball URL.
 *
 * **Example**
 *
 * ```js
 * github.tarball('assemble', 'verb');
 * //=> 'https://api.github.com/repos/assemble/verb/tarball'
 * ```
 *
 * @param  {String} `user` The github user or org.
 * @param  {String} `repo` The repository
 * @param  {String} `branch` Branch, defaults to `master`.
 * @return {String}
 * @api public
 */

github.tarball = function (user, repo, ref) {
  return format('tarball', user, repo, ref);
};

/**
 * Stringify a github zipball URL.
 *
 * **Example**
 *
 * ```js
 * github.zipball('assemble', 'verb');
 * //=> 'https://api.github.com/repos/assemble/verb/zipball'
 * ```
 *
 * @param  {String} `user` The github user or org.
 * @param  {String} `repo` The repository
 * @param  {String} `branch` Branch, defaults to `master`.
 * @return {String}
 * @api public
 */

github.zipball = function (user, repo, ref) {
  return format('zipball', user, repo, ref);
};


/**
 * Utility for generating URLs.
 */

function format(type, user, repo, ref) {
  if (user && typeof user === 'object') {
    var params = user;
    user = params.user;
    repo = params.repo;
    branch = params.branch;
  }

  var url = 'https://api.github.com/repos/%s/%s/' + type;
  if (ref) url += '/%s';
  return trim(util.format(url, user, repo, ref || ''));
}

/**
 * Trim trailing whitespace from a string.
 */

function trim(str) {
  return str.replace(/\s+$/, '');
}
