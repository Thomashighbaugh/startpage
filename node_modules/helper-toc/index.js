/*!
 * helper-toc <https://github.com/jonschlinkert/helper-toc>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var fs = require('fs');
var path = require('path');
var glob = require('globby');
var merge = require('mixin-deep');
var globToc = require('glob-toc');
var relative = require('relative');
var mdu = require('markdown-utils');
var toc = require('markdown-toc');

/**
 * Generate a Table of Contents for a glob of files.
 */

module.exports = function (config) {
  config = config || {};

  return function tocHelper(patterns, opts) {
    if (typeof patterns !== 'string' && !Array.isArray(patterns)) {
      throw new TypeError('helper-toc expects patterns to be a string or array.');
    }

    opts = merge({}, config, opts);
    if (this && this.app && this.options) {
      opts = merge({}, this.options, opts);
    }

    if (opts.toc === false) return '';

    opts.filter = filter(opts.ignore);
    var files = glob.sync(patterns, opts);

    if (!files.length) return '';
    if (opts.read === false) {
      return globToc(files, opts);
    }

    return files.map(function (fp) {
      return generate(fp, opts);
    }).join('\n');
  };
};

function generate(fp, opts) {
  opts = opts || {};
  var res = '';

  fp = path.join(opts.cwd || process.cwd(), fp);
  var str = fs.readFileSync(fp, 'utf8');
  var first = str.split('\n')[0].trim().slice(2).trim();
  var isTemplate = templateRe().test(first);

  // don't generate a TOC for a heading that's actually a template
  if (isTemplate) return '';

  // skip section headings
  if (opts.section !== false) {
    res += mdu.strong(mdu.link(first, relative(fp)));
  }

  // temporary heuristic
  res += '__AFTER__';
  res += '\n';

  var table = toc(str, merge({
    linkify: function(ele, text) {
      if (templateRe().test(text)) {
        isTemplate = true;
        return ele;
      }
      var url = relative(fp);
      url += '/#';
      url += toc.slugify(text);
      ele.content = mdu.link(ele.content, url);
      return ele;
    }
  }, opts));

  if (isTemplate) return '';

  res += table.content;
  res += '\n';
  res = res.split('__AFTER__').join('\n');
  return res.trim() + '\n';
}

/**
 * Template regex
 */

function templateRe() {
  return /([<{]%=|\{\{.+\}\})/;
}

/**
 * Default filter function for ignoring specified headings
 * or heading patterns in the generated TOC. Ignore patterns
 * may be passed on the options:
 *
 * ```js
 * app.option('toc.ignore', ['foo', 'bar']);
 * ```
 */

function filter(patterns) {
  if (typeof patterns === 'function') {
    return patterns;
  }
  var regex;
  return function (str) {
    var arr = ['\\[\\!\\[', '\\{%', '<%', '\\{\\{.+}}'].concat(patterns || []);
    if (typeof regex === 'undefined') {
      regex = new RegExp(arr.join('|'));
    }
    return !regex.test(str);
  };
}
