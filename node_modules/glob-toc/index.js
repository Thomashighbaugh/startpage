/*!
 * glob-toc <https://github.com/jonschlinkert/glob-toc>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var glob = require('globby');
var pad = require('pad-left');
var mdu = require('markdown-utils');
var natural = require('./natural-sort');

module.exports = toc;

function toc(patterns, options) {
  if (typeof patterns !== 'string' && !Array.isArray(patterns)) {
    throw new TypeError('glob-toc expects patterns to be an array or a string.');
  }
  return generate(glob.sync(patterns, options), options);
}

function generate(files, opts) {
  opts = opts || {};
  files = sortFiles(files, opts);
  var len = files.length, i = 0;
  var obj = {};
  var res = '';
  var low = null;

  while (len--) {
    var file = files[i++];
    var segs = file.segs;
    var lvl = file.lvl;

    if (low === null) {
      low = lvl;
    }

    var n = segs.length;
    var seg = segs.slice(n >= 2 ? - 2 : - 1);
    var link = mdu.link(seg.join('/'), file.path);
    opts.highest = low;

    var lead = format(link, lvl, opts);
    var line = pad(lead, lvl - 2);
    if (!obj[line]) {
      res += line;
      res += '\n';
    }
    obj[line] = true;
  }
  return res;
}

function toObject(fp) {
  var segs = fp.split('/');
  return {
    lvl: (segs.length / 2) >> 0,
    segs: segs,
    path: fp
  };
}

function sortFiles(files, options) {
  var opts = options && options.sort;
  files = files.sort(natural(opts));
  var len = files.length, i = 0;
  var res = [];
  while (len--) {
    var fp = unixify(files[i++]);
    res.push(toObject(fp));
  }
  return res;
}

function format(link, lvl, opts) {
  return mdu.li(link, +lvl, opts);
}

function unixify(fp) {
  return fp.split('\\').join('/');
}
