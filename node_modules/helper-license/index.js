'use strict';

var mdu = require('markdown-utils');
var pluck = require('arr-pluck');
var merge = require('mixin-deep');

module.exports = function license_(locals) {
  var o = typeof locals === 'object' ? locals : {};

  // support Template, verb and assemble.
  if (this && this.app && this.context) {
    this.app.union('reflinks', ['verb', 'template', 'assemble']);
    o = merge({}, this.options, this.app.cache.data, this.context, o);
  }

  if (!o.license && !o.licenses) {
    throw new Error('helper-license expects a "license" or "licenses" property');
  }

  if (typeof o.license === 'string') {
    o.license = {type: o.license};
  }

  var licenses = Array.isArray(o.licenses) ? o.licenses : [o.license];
  var res = 'Released under the ';
  var len = licenses.length;
  var urls = [];

  if (o.linkify === true) {
    licenses.forEach(function (license) {
      if (license.type && license.url) {
        urls.push(mdu.link(license.type, license.url));
      }
    });
  }

  var s = len <= 1 ? '.' : 's.';
  if (urls.length > 0) {
    res += urls.join(', ') + ' license' + s;
  } else {
    res += pluck(licenses, 'type').join(', ') + ' license' + s;
  }
  return res;
};
