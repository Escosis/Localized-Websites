/*! hg-web-sdk@2.19.0 Copyright (C) 2017 - 2026 Hypergryph Co.,Ltd. All Rights Reserved. Published at 2026-06-10 16:34:08 */ !(function () {
  "use strict";
  var e,
    t,
    n,
    r,
    o = {
      7384: function (e) {
        e.exports = void 0;
      },
    },
    f = {};
  function c(e) {
    var t = f[e];
    if (void 0 !== t) return t.exports;
    var n = (f[e] = { id: e, exports: {} });
    return o[e].call(n.exports, n, n.exports, c), n.exports;
  }
  (c.m = o),
    (c.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return c.d(t, { a: t }), t;
    }),
    (t = Object.getPrototypeOf
      ? function (e) {
          return Object.getPrototypeOf(e);
        }
      : function (e) {
          return e.__proto__;
        }),
    (c.t = function (n, r) {
      if ((1 & r && (n = this(n)), 8 & r)) return n;
      if ("object" == typeof n && n) {
        if (4 & r && n.__esModule) return n;
        if (16 & r && "function" == typeof n.then) return n;
      }
      var o = Object.create(null);
      c.r(o);
      var f = {};
      e = e || [null, t({}), t([]), t(t)];
      for (var u = 2 & r && n; "object" == typeof u && !~e.indexOf(u); u = t(u))
        Object.getOwnPropertyNames(u).forEach(function (e) {
          f[e] = function () {
            return n[e];
          };
        });
      return (
        (f.default = function () {
          return n;
        }),
        c.d(o, f),
        o
      );
    }),
    (c.d = function (e, t) {
      for (var n in t)
        c.o(t, n) &&
          !c.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (c.f = {}),
    (c.e = function (e) {
      return Promise.all(
        Object.keys(c.f).reduce(function (t, n) {
          return c.f[n](e, t), t;
        }, [])
      );
    }),
    (c.u = function (e) {
      return (
        e +
        "." +
        {
          121: "724ee3b3ef031797698c",
          180: "4e8e7b056adcaeecdf54",
          306: "316082ae181cc42a4121",
          374: "23608efda3e740c80256",
          592: "15eadafb9b3a01986d90",
          616: "8ffaac49c65952e38a97",
          623: "ad543e2ef8811e803768",
          694: "fdfdf83d80c712c256af",
          754: "0ac01fa566056c3b0371",
          852: "17d3acb84bdb4385db67",
          881: "0ec8964d9a12076161db",
          901: "37c8bcadc56e6da93d88",
          946: "594eb3acf87044a40011",
          979: "d0b70651cceda10e5df9",
          987: "bef0dfbacd38361f0c72",
        }[e] +
        ".js"
      );
    }),
    (c.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (c.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n = {}),
    (r = "@hg/hg-web-sdk:"),
    (c.l = function (e, t, o, f) {
      if (n[e]) n[e].push(t);
      else {
        var u, i;
        if (void 0 !== o)
          for (
            var a = document.getElementsByTagName("script"), d = 0;
            d < a.length;
            d++
          ) {
            var b = a[d];
            if (
              b.getAttribute("src") == e ||
              b.getAttribute("data-webpack") == r + o
            ) {
              u = b;
              break;
            }
          }
        u ||
          ((i = !0),
          ((u = document.createElement("script")).charset = "utf-8"),
          (u.timeout = 120),
          c.nc && u.setAttribute("nonce", c.nc),
          u.setAttribute("data-webpack", r + o),
          (u.src = e)),
          (n[e] = [t]);
        var l = function (t, r) {
            (u.onerror = u.onload = null), clearTimeout(s);
            var o = n[e];
            if (
              (delete n[e],
              u.parentNode && u.parentNode.removeChild(u),
              o &&
                o.forEach(function (e) {
                  return e(r);
                }),
              t)
            )
              return t(r);
          },
          s = setTimeout(
            l.bind(null, void 0, { type: "timeout", target: u }),
            12e4
          );
        (u.onerror = l.bind(null, u.onerror)),
          (u.onload = l.bind(null, u.onload)),
          i && document.head.appendChild(u);
      }
    }),
    (c.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (c.p = "./lib/"),
    (function () {
      c.b = document.baseURI || self.location.href;
      var e = { 650: 0 };
      c.f.j = function (t, n) {
        var r = c.o(e, t) ? e[t] : void 0;
        if (0 !== r)
          if (r) n.push(r[2]);
          else {
            var o = new Promise(function (n, o) {
              r = e[t] = [n, o];
            });
            n.push((r[2] = o));
            var f = c.p + c.u(t),
              u = new Error();
            c.l(
              f,
              function (n) {
                if (c.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
                  var o = n && ("load" === n.type ? "missing" : n.type),
                    f = n && n.target && n.target.src;
                  (u.message =
                    "Loading chunk " + t + " failed.\n(" + o + ": " + f + ")"),
                    (u.name = "ChunkLoadError"),
                    (u.type = o),
                    (u.request = f),
                    r[1](u);
                }
              },
              "chunk-" + t,
              t
            );
          }
      };
      var t = function (t, n) {
          var r,
            o,
            f = n[0],
            u = n[1],
            i = n[2],
            a = 0;
          if (
            f.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (r in u) c.o(u, r) && (c.m[r] = u[r]);
            if (i) i(c);
          }
          for (t && t(n); a < f.length; a++)
            (o = f[a]), c.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
        },
        n = (self.webpackChunk_hg_hg_web_sdk =
          self.webpackChunk_hg_hg_web_sdk || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })(),
    (c.nc = void 0),
    c.e(180).then(c.bind(c, 4180));
})();
