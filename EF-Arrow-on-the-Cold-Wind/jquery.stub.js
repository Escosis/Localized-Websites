/*!
 * Minimal inert stand-in for the page's jQuery <script>.
 *
 * The captured `o.alicdn.com/frontend-lib/common-lib/jquery.min.js` is not
 * real jQuery: it is an obfuscated Alibaba loader whose string-array decoder
 * throws `SyntaxError: Unexpected token ':'` when executed standalone in a
 * plain browser, which aborts page script evaluation.
 *
 * No Frostwind Arrow bundle actually depends on jQuery.  A search across every
 * `activity-common` chunk finds only two references, both inside a bundled
 * user-agent parser:
 *
 *     var nt = c(i) !== a && (i.jQuery || i.Zepto);
 *     if (nt && !nt.ua) { ... }
 *
 * That is a feature *probe*, not a call: with `window.jQuery` undefined the
 * block is simply skipped.  So an empty namespace is sufficient and keeps the
 * page free of third-party code.
 *
 * If a future page genuinely needs jQuery, replace this file with a real
 * build rather than the captured artifact.
 */
(function (global) {
  'use strict';

  function JQueryStub() {
    // Deliberately does not throw: callers that probe for jQuery must be able
    // to treat it as "present but unsupported" and fall back.
    return JQueryStub;
  }

  JQueryStub.fn = JQueryStub.prototype = {};
  JQueryStub.ready = function (fn) {
    if (typeof fn === 'function') {
      if (document.readyState === 'complete' || document.readyState === 'interactive') {
        setTimeout(fn, 0);
      } else {
        document.addEventListener('DOMContentLoaded', fn, { once: true });
      }
    }
    return JQueryStub;
  };
  JQueryStub.each = function () { return JQueryStub; };
  JQueryStub.extend = function () { return JQueryStub; };
  JQueryStub.ajax = function () {
    return { done: function () { return this; }, fail: function () { return this; } };
  };
  JQueryStub.noop = function () {};
  JQueryStub.support = {};
  JQueryStub.fn.jquery = 'offline-stub';

  // Expose under both names so feature probes find something harmless.
  global.jQuery = global.$ = JQueryStub;
})(typeof window !== 'undefined' ? window : this);
