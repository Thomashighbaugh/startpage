/*!
 * template-bind-helpers <https://github.com/jonschlinkert/template-bind-helpers>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

/**
 * Bind helper functions to `app` so that, when the helper is called,
 * the `this` keyword is set to the provided instance of `app`.
 *
 * ```js
 * var bindHelpers = require('{%= name %}');
 * var str = '<%= replace("foo", "bar") %>';
 * opts = bindHelpers(this.app, opts, true);
 *
 * // pass opts to a render method as context
 * app.render(str, opts, function(err, result) {
 *   console.log(result);
 * });
 * ```
 *
 * @param  {Object} `app` Instance of any [Template]-based application, such as [verb], [assemble] or [generate]
 * @param  {Object} `context` Context object with helpers to bind. This is usually the `options` object.
 * @param  {Boolean} `isAsync`
 * @return {Object}
 * @api public
 */

module.exports = function bindHelpers(app, context, isAsync) {
  if (!('bindHelpers' in app)) {
    throw new Error('template-bind-helpers expects app to have a bindHelpers method');
  }

  if (typeof context !== 'object') {
    throw new Error('template-bind-helpers expects a context object.');
  }

  app.bindHelpers.call(app, context, app.context, isAsync);
  context.imports = context.helpers;
  return context;
};
