/*! Copyright (C) 2017 - 2026 HYPERGRYPH. All rights reserved. */
!(function () {
  try {
    var t =
      "u" > typeof window
        ? window
        : "u" > typeof global
        ? global
        : "u" > typeof globalThis
        ? globalThis
        : "u" > typeof self
        ? self
        : {};
    t.SENTRY_RELEASE = { id: "v1d5-synthesize-tuantuan-web@1.1.2" };
    var e = new t.Error().stack;
    e &&
      ((t._sentryDebugIds = t._sentryDebugIds || {}),
      (t._sentryDebugIds[e] = "82031dc0-77f0-4a36-bcba-a30a8155cb51"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-82031dc0-77f0-4a36-bcba-a30a8155cb51"));
  } catch (t) {}
})(),
  (function () {
    var t,
      e,
      r,
      n,
      i,
      o,
      a,
      s = {
        61402: function (t) {
          !(function () {
            "use strict";
            let e, r;
            var n,
              i,
              o,
              a,
              s,
              c,
              u,
              f = {
                d: function (t, e) {
                  for (var r in e)
                    f.o(e, r) &&
                      !f.o(t, r) &&
                      Object.defineProperty(t, r, {
                        enumerable: !0,
                        get: e[r],
                      });
                },
                o: function (t, e) {
                  return Object.prototype.hasOwnProperty.call(t, e);
                },
                r: function (t) {
                  "u" > typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(t, Symbol.toStringTag, {
                      value: "Module",
                    }),
                    Object.defineProperty(t, "__esModule", { value: !0 });
                },
              },
              l = {};
            f.r(l),
              f.d(l, {
                Bridge: function () {
                  return tp;
                },
                Console: function () {
                  return d;
                },
                DeviceType: function () {
                  return ta;
                },
                EChannel: function () {
                  return k;
                },
                EGame: function () {
                  return j;
                },
                ELanguage: function () {
                  return R;
                },
                EShareChannel: function () {
                  return L;
                },
                LOG_LEVEL: function () {
                  return h;
                },
                Platform: function () {
                  return tu;
                },
                Style: function () {
                  return tm;
                },
                WebView: function () {
                  return B;
                },
                default: function () {
                  return ty;
                },
              });
            let h =
                (((n = {}).ERROR = "error"),
                (n.WARN = "warn"),
                (n.INFO = "info"),
                (n.DEBUG = "debug"),
                n),
              p = [],
              d = {
                info: function () {
                  for (
                    var t = arguments.length, e = Array(t), r = 0;
                    r < t;
                    r++
                  )
                    e[r] = arguments[r];
                  p.forEach((t) => t(h.INFO, ...e));
                },
                debug: function () {
                  for (
                    var t = arguments.length, e = Array(t), r = 0;
                    r < t;
                    r++
                  )
                    e[r] = arguments[r];
                  p.forEach((t) => t(h.DEBUG, ...e));
                },
                warn: function () {
                  for (
                    var t = arguments.length, e = Array(t), r = 0;
                    r < t;
                    r++
                  )
                    e[r] = arguments[r];
                  p.forEach((t) => t(h.WARN, ...e));
                },
                error: function () {
                  for (
                    var t = arguments.length, e = Array(t), r = 0;
                    r < t;
                    r++
                  )
                    e[r] = arguments[r];
                  p.forEach((t) => t(h.ERROR, ...e));
                },
                setErrorHandler: (t) => {
                  "function" == typeof t &&
                    (e && p.includes(e) && p.splice(p.indexOf(e), 1),
                    (e = function (e) {
                      if (e === h.ERROR) {
                        for (
                          var r = arguments.length,
                            n = Array(r > 1 ? r - 1 : 0),
                            i = 1;
                          i < r;
                          i++
                        )
                          n[i - 1] = arguments[i];
                        t(n[0]), console.error(...n);
                      }
                    }),
                    p.push(e));
                },
                addLogHandler: (t) => (
                  p.includes(t) || p.push(t),
                  () => {
                    let e;
                    -1 !== (e = p.indexOf(t)) && p.splice(e, 1);
                  }
                ),
              };
            class v {
              constructor() {
                !(function (t, e, r) {
                  var n;
                  (e =
                    "symbol" ==
                    typeof (n = (function (t, e) {
                      if ("object" != typeof t || !t) return t;
                      var r = t[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(e, "string"))
                      ? n
                      : n + "") in t
                    ? Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[e] = r);
                })(this, "events", {});
              }
              static getInstance() {
                return v.instance || (v.instance = new v()), v.instance;
              }
              on(t, e) {
                this.events[t] || (this.events[t] = []), this.events[t].push(e);
              }
              off(t, e) {
                if (!this.events[t]) return;
                let r = this.events[t].indexOf(e);
                r > -1 && this.events[t].splice(r, 1);
              }
              emit(t, e) {
                this.events[t] && 0 !== this.events[t].length
                  ? this.events[t].forEach((t) => {
                      try {
                        t.apply(this, e);
                      } catch (t) {
                        d.error("[WVSDK][API] emit error", t);
                      }
                    })
                  : d.warn(
                      "[WVSDK][API] api with no listener was called",
                      t,
                      e
                    );
              }
            }
            let g = v.getInstance(),
              m = [
                "appWillEnterForeground",
                "appDidEnterBackground",
                "pageFocus",
                "pageBlur",
              ],
              y = -3e3,
              b = {};
            function w(t, e) {
              var r = Object.keys(t);
              if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e &&
                  (n = n.filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                  })),
                  r.push.apply(r, n);
              }
              return r;
            }
            function S(t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2
                  ? w(Object(r), !0).forEach(function (e) {
                      !(function (t, e, r) {
                        var n;
                        (e =
                          "symbol" ==
                          typeof (n = (function (t, e) {
                            if ("object" != typeof t || !t) return t;
                            var r = t[Symbol.toPrimitive];
                            if (void 0 !== r) {
                              var n = r.call(t, e || "default");
                              if ("object" != typeof n) return n;
                              throw TypeError(
                                "@@toPrimitive must return a primitive value."
                              );
                            }
                            return ("string" === e ? String : Number)(t);
                          })(e, "string"))
                            ? n
                            : n + "") in t
                          ? Object.defineProperty(t, e, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                            })
                          : (t[e] = r);
                      })(t, e, r[e]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      t,
                      Object.getOwnPropertyDescriptors(r)
                    )
                  : w(Object(r)).forEach(function (e) {
                      Object.defineProperty(
                        t,
                        e,
                        Object.getOwnPropertyDescriptor(r, e)
                      );
                    });
              }
              return t;
            }
            let O = null,
              E = {
                cn: {
                  staging: "dgjc09ilgqqn910o4et0fn6p",
                  prod: "twnx1lgk3fjxov78n6n74ju3",
                },
                os: {
                  staging: "0xj5r08dlj6uc1u4uxdp8ah4",
                  prod: "hqn36nl4ecgino0z4y42bqb7",
                },
              },
              _ = !1,
              x = [],
              P = null,
              A = [
                "#channel1",
                "#channel2",
                "#device_id",
                "#is_first_launched",
                "#language",
                "#mac_c",
                "#mac_s",
                "#os",
                "#sdid_s",
              ],
              T = null,
              I = null,
              R =
                (((i = {})["zh-cn"] = "zh-cn"),
                (i["en-us"] = "en-us"),
                (i["ja-jp"] = "ja-jp"),
                (i["ko-kr"] = "ko-kr"),
                (i["zh-tw"] = "zh-tw"),
                (i["es-mx"] = "es-mx"),
                (i["pt-br"] = "pt-br"),
                (i["fr-fr"] = "fr-fr"),
                (i["de-de"] = "de-de"),
                (i["ru-ru"] = "ru-ru"),
                (i["it-it"] = "it-it"),
                (i["id-id"] = "id-id"),
                (i["th-th"] = "th-th"),
                (i["vi-vn"] = "vi-vn"),
                i),
              j =
                (((o = {}).ARKNIGHTS = "arknights"),
                (o.ENDFIELD = "endfield"),
                o),
              k =
                (((a = {})[(a.OFFICIAL = 0)] = "OFFICIAL"),
                (a[(a.BILIBILI = 1)] = "BILIBILI"),
                (a[(a.OVERSEA = 6)] = "OVERSEA"),
                a),
              L =
                (((s = {})[(s.SAVE_TO_ALBUM = 0)] = "SAVE_TO_ALBUM"),
                (s[(s.WECHAT_FRIEND = 1)] = "WECHAT_FRIEND"),
                (s[(s.WECHAT_TIMELINE = 2)] = "WECHAT_TIMELINE"),
                (s[(s.QQ_FRIEND = 3)] = "QQ_FRIEND"),
                (s[(s.QQ_ZONE = 4)] = "QQ_ZONE"),
                (s[(s.WEIBO = 5)] = "WEIBO"),
                (s[(s.DOUYIN_SESSION = 6)] = "DOUYIN_SESSION"),
                (s[(s.TAPTAP = 7)] = "TAPTAP"),
                (s[(s.BILIBILI = 8)] = "BILIBILI"),
                (s[(s.SKLAND = 9)] = "SKLAND"),
                (s[(s.X = 10)] = "X"),
                (s[(s.FACEBOOK = 11)] = "FACEBOOK"),
                (s[(s.INSTAGRAM = 12)] = "INSTAGRAM"),
                (s[(s.LINE = 13)] = "LINE"),
                (s[(s.XIAOHONGSHU = 14)] = "XIAOHONGSHU"),
                (s[(s.KUAISHOU = 15)] = "KUAISHOU"),
                (s[(s.DOUYIN_POST = 16)] = "DOUYIN_POST"),
                (s[(s.TIKTOK_POST = 17)] = "TIKTOK_POST"),
                (s[(s.NAVER_GAME = 18)] = "NAVER_GAME"),
                s);
            function D(t, e) {
              var r = Object.keys(t);
              if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e &&
                  (n = n.filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                  })),
                  r.push.apply(r, n);
              }
              return r;
            }
            function N(t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2
                  ? D(Object(r), !0).forEach(function (e) {
                      !(function (t, e, r) {
                        var n;
                        (e =
                          "symbol" ==
                          typeof (n = (function (t, e) {
                            if ("object" != typeof t || !t) return t;
                            var r = t[Symbol.toPrimitive];
                            if (void 0 !== r) {
                              var n = r.call(t, e || "default");
                              if ("object" != typeof n) return n;
                              throw TypeError(
                                "@@toPrimitive must return a primitive value."
                              );
                            }
                            return ("string" === e ? String : Number)(t);
                          })(e, "string"))
                            ? n
                            : n + "") in t
                          ? Object.defineProperty(t, e, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                            })
                          : (t[e] = r);
                      })(t, e, r[e]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      t,
                      Object.getOwnPropertyDescriptors(r)
                    )
                  : D(Object(r)).forEach(function (e) {
                      Object.defineProperty(
                        t,
                        e,
                        Object.getOwnPropertyDescriptor(r, e)
                      );
                    });
              }
              return t;
            }
            let C = {
                [L.SAVE_TO_ALBUM]: 0,
                [L.WECHAT_FRIEND]: 7,
                [L.WECHAT_TIMELINE]: 8,
                [L.QQ_FRIEND]: 9,
                [L.QQ_ZONE]: 10,
                [L.WEIBO]: 6,
                [L.DOUYIN_SESSION]: 999,
                [L.TAPTAP]: 3,
                [L.BILIBILI]: 2,
                [L.SKLAND]: 1,
                [L.X]: 1,
                [L.FACEBOOK]: 2,
                [L.INSTAGRAM]: 3,
                [L.LINE]: 999,
                [L.XIAOHONGSHU]: 5,
                [L.KUAISHOU]: 11,
                [L.DOUYIN_POST]: 4,
                [L.TIKTOK_POST]: 4,
                [L.NAVER_GAME]: 5,
              },
              M = {
                [j.ENDFIELD]: {
                  channelLimit: {
                    cn: {
                      channel: {
                        [k.OFFICIAL]: [0, 1, 2, 3, 4, 5, 7, 8, 9, 14, 15, 16],
                        [k.BILIBILI]: [0, 1, 2, 3, 4, 5, 8, 9, 14, 15, 16],
                      },
                    },
                    os: {
                      language: {
                        [R["en-us"]]: [0, 10, 11, 12, 17],
                        [R["ja-jp"]]: [0, 10, 11, 17],
                        [R["ko-kr"]]: [0, 10, 11, 17, 18],
                        [R["zh-tw"]]: [0, 10, 11],
                        [R["de-de"]]: [0, 10],
                        [R["fr-fr"]]: [0, 10],
                        [R["es-mx"]]: [0, 10, 17],
                        [R["pt-br"]]: [0, 10],
                        [R["id-id"]]: [0, 10, 17],
                        [R["zh-cn"]]: [0, 10, 11, 12, 17],
                        [R["it-it"]]: [0, 10, 11, 12, 17],
                        [R["ru-ru"]]: [0],
                        [R["th-th"]]: [10, 11, 12, 17],
                        [R["vi-vn"]]: [10, 11, 12, 17],
                      },
                    },
                  },
                },
              },
              U = ["ready", "close", "event"],
              B = {
                ready: () => th("ready"),
                close: () => {
                  let t = window.performance.now();
                  return t - y < 2e3
                    ? Promise.resolve()
                    : ((y = t), th("close"));
                },
                event: async (t, e) => {
                  if (tp.getPlatform() === tu.PlayStation) {
                    if (_)
                      return (
                        (e = S(S({}, I ? await I : {}), e)),
                        P
                          ? P.event(t, e)
                          : void x.push({ eventName: t, property: e })
                      );
                    throw Error(
                      "[WVSDK][WebView] ETL client not initialized, etl instance should be initialized on PlayStation platform"
                    );
                  }
                  return th("event", { eventName: t, property: e });
                },
                initETL: async (t) => {
                  let { oversea: e, serverId: r, env: n } = t;
                  if (_ || tp.getPlatform() !== tu.PlayStation) return;
                  (_ = !0),
                    (I = (T = new Promise((t, e) => {
                      var r;
                      if ("u" < typeof window || "u" < typeof document)
                        return void e(
                          Error("读取失败：仅可在浏览器环境中使用")
                        );
                      let n = ""
                          .concat(window.location.origin)
                          .concat(
                            "/".startsWith("/") ? "/" : "/".concat("/"),
                            "?_="
                          )
                          .concat(Date.now()),
                        i = document.createElement("iframe");
                      i.style.cssText =
                        "position:absolute;width:0;height:0;opacity:0;pointer-events:none;border:0;";
                      let o,
                        a = !1,
                        s = () => {
                          (i.onload = null),
                            (i.onerror = null),
                            o && window.clearTimeout(o);
                          try {
                            i.remove();
                          } catch (t) {}
                        },
                        c = (t) => {
                          a || ((a = !0), d.warn("fail:", t), s(), e(Error(t)));
                        };
                      (i.onload = () => {
                        var e, r, n, o;
                        if (!a)
                          try {
                            let u = i.contentWindow,
                              f =
                                i.contentDocument ||
                                (null == u ? void 0 : u.document);
                            if (
                              "about:blank" ===
                              (null !=
                              (r =
                                null == u || null == (n = u.location)
                                  ? void 0
                                  : n.href)
                                ? r
                                : "")
                            )
                              return void console.log(
                                "ignore initial about:blank load"
                              );
                            if (!u || !f)
                              return void c(
                                "读取失败：可能由于同源策略或其他限制"
                              );
                            let l = null != (o = f.cookie) ? o : "";
                            (e = (function (t) {
                              let e = t.trim();
                              if (!e) return {};
                              let r = {};
                              for (let t of e.split(";")) {
                                let e = t.trim();
                                if (!e) continue;
                                let n = e.indexOf("=");
                                if (-1 === n) continue;
                                let i = e.slice(0, n).trim(),
                                  o = e.slice(n + 1).trim();
                                r[i] = o;
                              }
                              return r;
                            })(l)),
                              a || ((a = !0), s(), t(e));
                          } catch (t) {
                            d.warn("onload error:", t),
                              c("读取失败：可能由于同源策略或其他限制");
                          }
                      }),
                        (i.onerror = () => {
                          c("读取失败：页面加载错误");
                        }),
                        (o = window.setTimeout(() => {
                          c("读取失败：iframe 加载超时");
                        }, 1e4));
                      let u =
                        null != (r = document.body)
                          ? r
                          : document.documentElement;
                      u
                        ? ((i.src = n), u.appendChild(i))
                        : e(Error("读取失败：文档未就绪"));
                    }))
                      .then((t) => {
                        try {
                          var e;
                          let r = JSON.parse(
                            null !=
                              (e =
                                null == t ? void 0 : t.staticPresetProperties)
                              ? e
                              : "{}"
                          );
                          return A.filter((t) => r[t]).reduce(
                            (t, e) => ((t[e] = r[e]), t),
                            {}
                          );
                        } catch (t) {
                          return (
                            d.error("ETL_EXTRA_PARAMS_PROMISE", t.message), {}
                          );
                        }
                      })
                      .catch(
                        (t) => (
                          d.error("ETL_EXTRA_PARAMS_PROMISE", t.message), {}
                        )
                      ));
                  let i = "";
                  if (n) {
                    if (!(i = E[e ? "os" : "cn"][n])) return;
                  } else {
                    let t = await T;
                    if ((d.debug(t), (i = t.eventLogAppId), d.debug(i), !i))
                      return;
                  }
                  if (!O) {
                    let t = e
                      ? "https://web-static.hg-cdn.com/webview/static/scripts/eventLog_4_2_0.js"
                      : "./web.hycdn.cn/webview/static/scripts/eventLog_4_2_0.js";
                    d.debug("load ETL package", t),
                      (O = await new Promise((e, r) => {
                        let n = document.createElement("script");
                        (n.src = t),
                          (n.async = !0),
                          (n.crossOrigin = "anonymous"),
                          (n.onload = () => e(window.eventLog)),
                          (n.onerror = r),
                          document.head.appendChild(n);
                      })),
                      d.debug("ETL package loaded");
                  }
                  d.debug("init ETL", {
                    env: "prod",
                    regionTag: e ? "sg" : "cn",
                    enableRealTimeSend: !0,
                  });
                  let {
                    initNativeWithConfig: o,
                    getInstance: a,
                    SDK_TYPE: s,
                  } = O;
                  o({
                    env: "prod",
                    regionTag: e ? "sg" : "cn",
                    enableRealTimeSend: !0,
                  }),
                    (P = a(i, s.JS)),
                    await T.then((t) => {
                      var e, n;
                      null != t &&
                        t.uid &&
                        (null == (e = P) ||
                          e.setUser(null == t ? void 0 : t.uid)),
                        null != t &&
                          t.roleID &&
                          (null == (n = P) ||
                            n.setCharacter(null == t ? void 0 : t.roleID, r));
                    }).catch((t) => {
                      d.error(
                        "ETL_CLIENT setUser or setCharacter error",
                        null == t ? void 0 : t.message
                      );
                    }),
                    d.debug("ETL client initialized", P),
                    x.length > 0 &&
                      (x.forEach((t) => {
                        var e;
                        let { eventName: r, property: n } = t;
                        null == (e = P) || e.event(r, n);
                      }),
                      x.splice(0, x.length),
                      d.debug("ETL event cache cleared"));
                },
                ETL_CLIENT: P,
                openGameScheme: function (t) {
                  tp.getPlatform() !== tu.PlayStation &&
                    tp.invoke("openGameScheme", { url: t });
                },
                openExternalBrowser: function (t) {
                  tp.getPlatform() !== tu.PlayStation &&
                    tp.invoke("openExternalBrowser", { url: t });
                },
                openMiniWebView: function (t) {
                  if (tp.getPlatform() !== tu.PlayStation)
                    tp.invoke("openMiniWebView", { url: t });
                  else {
                    let e = new URLSearchParams();
                    e.set("url", t);
                    let r = "webview://miniwebview?" + e.toString();
                    window.location.href = r;
                  }
                },
                share: (t, e) => {
                  if (tp.getPlatform() === tu.Web) {
                    if (e.image && t === L.SAVE_TO_ALBUM) {
                      let t = document.createElement("a");
                      return (
                        (t.href = e.image),
                        (t.download = e.fileName || "share.png"),
                        document.body.appendChild(t),
                        t.click(),
                        document.body.removeChild(t),
                        Promise.resolve({ status: 0, errorCode: 0 })
                      );
                    }
                    return Promise.resolve({
                      status: 1,
                      errorCode: 0,
                      msg: "Invalid image or channel for cloud game",
                    });
                  }
                  return tp.invokeWithReturnValue(
                    "share",
                    N(
                      N({}, e),
                      {},
                      { channel: t, customData: JSON.stringify(e.customData) }
                    ),
                    { noTimeout: !0 }
                  );
                },
                getShareChannels: (t) => {
                  let {
                      game: e = j.ENDFIELD,
                      channel: r,
                      language: n,
                      oversea: i,
                      platform: o = tp.getPlatform(),
                    } = t,
                    a = M[e];
                  if (!a) return [];
                  let s = a.channelLimit[i ? "os" : "cn"];
                  if (!s || o === tu.PlayStation || o === tu.Unknown) return [];
                  if (o === tu.Qt || o === tu.Web) return [L.SAVE_TO_ALBUM];
                  let c = Object.values(L);
                  if (s.channel) {
                    let t = s.channel[r];
                    c = c.filter((e) => (null == t ? void 0 : t.includes(e)));
                  }
                  return (
                    s.language &&
                      (c = c.filter((t) => {
                        var e;
                        return (
                          s.language &&
                          (null == (e = s.language[n]) ? void 0 : e.includes(t))
                        );
                      })),
                    c.sort((t, e) => C[t] - C[e])
                  );
                },
                setCursorVisible: function (t) {
                  tp.getPlatform() === tu.Qt &&
                    tp.invoke("setCursorVisible", { value: t });
                },
              },
              W = new URL(window.location.href);
            function V(t) {
              let e = W.searchParams.get(t);
              return (null == e ? void 0 : e.trim()) || null;
            }
            let F =
                "1" === (r = W.searchParams.get("hg_iframe")) ||
                ("string" == typeof r && "true" === r.toLowerCase()),
              K = V("hg_parent_origin"),
              H = V("hg_params"),
              G = null,
              z = null,
              q = !1,
              J = null,
              Q = new Map(),
              Y = 1;
            function X(t) {
              var e;
              null != (e = window.WVSDK.callback) &&
                e[t] &&
                delete window.WVSDK.callback[t];
            }
            function $(t) {
              return (
                !!F &&
                (K
                  ? (q ||
                      ((G = K),
                      (z = null != t ? t : window.parent),
                      (J = (t) => {
                        !(function (t) {
                          var e, r, n, i;
                          if (!G || !z || t.source !== z || t.origin !== G)
                            return;
                          let o = (function (t) {
                            if ("string" == typeof t)
                              try {
                                return JSON.parse(t);
                              } catch (t) {
                                return null;
                              }
                            return t;
                          })(t.data);
                          if (
                            "object" != typeof o ||
                            null === o ||
                            Array.isArray(o)
                          )
                            return;
                          let a = o.callbackId;
                          if ("string" == typeof a && a) {
                            let t =
                              null == (n = window.WVSDK.callback)
                                ? void 0
                                : n[a];
                            if (t) {
                              X(a);
                              let e =
                                "payload" in o && null != (i = o.payload)
                                  ? i
                                  : null;
                              try {
                                t(JSON.stringify(e));
                              } catch (t) {
                                d.error("[WVSDK][iframe] callback error", t);
                              }
                              return;
                            }
                          }
                          let s = o.type;
                          if ("string" != typeof s || !s) return;
                          null == (e = (r = window.WVSDK.API)[s]) ||
                            e.call(r, o.payload);
                          let c = Q.get(s);
                          if (null == c || !c.size) return;
                          let u = "payload" in o ? o.payload : void 0;
                          c.forEach((t) => {
                            try {
                              t(u);
                            } catch (t) {
                              d.error("[WVSDK][iframe] handler error", s, t);
                            }
                          });
                        })(t);
                      }),
                      window.addEventListener("message", J),
                      (q = !0)),
                    !0)
                  : (d.warn(
                      "[WVSDK][iframe] hg_iframe / hg_web_app_bridge is set but hg_parent_origin is missing"
                    ),
                    !1))
              );
            }
            async function Z(t, e, r, n) {
              if (!((q && G && z) || $()))
                throw Error(
                  "[WVSDK][iframe] postMessageThroughIframe: init failed (check hg_parent_origin)"
                );
              let i = G,
                o = z;
              if (!i || !o)
                throw Error(
                  "[WVSDK][iframe] postMessageThroughIframe: parent not configured"
                );
              return new Promise((a, s) => {
                let c = r
                  ? "ifr_"
                      .concat(t, "_")
                      .concat(Y++, "_")
                      .concat(Date.now())
                  : "";
                r &&
                  c &&
                  (window.WVSDK.callback || (window.WVSDK.callback = {}),
                  (window.WVSDK.callback[c] = (e) => {
                    try {
                      let r = JSON.parse(e);
                      d.debug(
                        "[WVSDK][iframe] callback ".concat(t, " ").concat(c),
                        r
                      ),
                        a(r);
                    } catch (t) {
                      d.error("[WVSDK][iframe] callback parse error", t), s(t);
                    }
                  }));
                let u = JSON.stringify({
                  type: t,
                  callbackId: c,
                  payload: null != e ? e : {},
                });
                d.debug("[WVSDK][iframe] postMessage → parent", i, u);
                try {
                  o.postMessage(u, i);
                } catch (t) {
                  return r && c && X(c), void s(t);
                }
                r && c
                  ? (null != n && n.noTimeout) ||
                    window.setTimeout(() => {
                      var e;
                      if (null != (e = window.WVSDK.callback) && e[c]) {
                        X(c);
                        let e = "[WVSDK][iframe] callback timeout, type: "
                          .concat(t, ", callbackId: ")
                          .concat(c);
                        d.error(e), s(Error(e));
                      }
                    }, 5e3)
                  : a();
              });
            }
            let tt = !1,
              te = null,
              tr = null,
              tn = async () => {
                let t;
                if (
                  !(await ((t = "qrc:///qtwebchannel/qwebchannel.js"),
                  d.debug(
                    "[HgGameJsBridge] start loading script ".concat(t),
                    new Date().toISOString()
                  ),
                  b[t] ||
                    (b[t] = new Promise((e) => {
                      let r = document.createElement("script");
                      (r.src = t),
                        (r.onload = () => {
                          d.debug(
                            "[HgGameJsBridge] load script succeed ".concat(t),
                            new Date().toISOString()
                          ),
                            e(!0);
                        }),
                        (r.onerror = () => {
                          d.error(
                            "[HgGameJsBridge] load script failed ".concat(t),
                            new Date().toISOString()
                          ),
                            e(!1);
                        }),
                        document.body.appendChild(r);
                    })),
                  b[t]))
                )
                  return (tt = !0), null;
                let { qt: e, QWebChannel: r } = window;
                return e && r
                  ? (d.debug("[HgGameJsBridge] initialize QWebChannel"),
                    (te = await new Promise((t) => {
                      new r(e.webChannelTransport, (e) => {
                        let { __JSBridge__: r } = e.objects;
                        t(r);
                      });
                    })))
                  : ((tt = !0),
                    d.error(
                      "[HgGameJsBridge] get Qt object failed, qt: "
                        .concat(!!e, ", QWebChannel: ")
                        .concat(!!r)
                    ),
                    null);
              },
              ti = async () => te || (tt ? null : (tr || (tr = tn()), tr)),
              to = {
                Android: /hgwebandroid/i,
                iOS: /hgwebios/i,
                Qt: /hgwebpc/i,
                PlayStation: /playstation/i,
              },
              ta =
                (((c = {}).iPhone = "iphone"),
                (c.iPad = "ipad"),
                (c.Mac = "mac"),
                (c.Unknown = "unknown"),
                c),
              ts = () => window.navigator.userAgent.toLowerCase(),
              tc = (t) => to[t].test(ts()),
              tu =
                (((u = {}).iOS = "iOS"),
                (u.Android = "Android"),
                (u.HarmonyOS = "HarmonyOS"),
                (u.Qt = "Qt"),
                (u.PlayStation = "PlayStation"),
                (u.Unknown = "Unknown"),
                (u.Web = "Web"),
                u),
              tf = () =>
                //tc("Android")
                  //? tu.Android
                  //: tc("iOS")
                  //? tu.iOS
                  //: tc("Qt")
                  //? tu.Qt
                  //: tc("PlayStation")
                  //? tu.PlayStation
                  //: F
                  //? tu.Web
                  //: tu.Unknown;
                  tu.Web; // 平台识别恒为 Web
            if (
              (window.WVSDK ||
                (window.WVSDK = {
                  ENV: {},
                  callback: {},
                  API: {},
                  platform: tf(),
                }),
              window.WVSDK.callback || (window.WVSDK.callback = {}),
              window.WVSDK.API || (window.WVSDK.API = {}),
              window.WVSDK.platform || (window.WVSDK.platform = tf()),
              tf() === tu.Web)
            )
              try {
                let t = window.navigator.userAgent.toLowerCase();
                (t.includes("android") || t.includes("harmony")) &&
                  document.body.setAttribute("data-mock-scroll", "1");
                let e = H ? JSON.parse(H) : {};
                window.WVSDK.ENV = e;
              } catch (t) {
                d.error("[WVSDK][Bridge] iframe env parse error", t),
                  (window.WVSDK.ENV = {});
              }
            m.forEach((t) => {
              window.WVSDK.API[t] = (e) => {
                d.debug("[WVSDK] API called", t, e), g.emit(t, e);
              };
            });
            let tl = 1;
            async function th(t, e, r, n) {
              if (F) {
                if (!$())
                  throw Error(
                    "[WVSDK][Bridge] iframe messaging enabled but init failed (missing hg_parent_origin?)"
                  );
                return Z(t, e, r, n);
              }
              return new Promise(async (i, o) => {
                var a, s, c;
                let u = "",
                  f = ""
                    .concat(t, "_")
                    .concat(tl++, "_")
                    .concat(Date.now());
                r &&
                  ((c = (e) => {
                    window.WVSDK.callback &&
                      window.WVSDK.callback[f] &&
                      delete window.WVSDK.callback[f];
                    try {
                      let r = JSON.parse(e);
                      d.debug(
                        "[WVSDK][Bridge] callback ".concat(t, " ").concat(f),
                        r
                      ),
                        i(r);
                    } catch (t) {
                      d.error("[WVSDK][Bridge] callback error", t), o(t);
                    }
                  }),
                  window.WVSDK.callback
                    ? (window.WVSDK.callback[f] = c)
                    : (window.WVSDK.callback = { [f]: c }),
                  (u = "window.WVSDK.callback.".concat(f)));
                let l = JSON.stringify({ type: t, data: e || {}, callback: u });
                d.debug("[WVSDK][Bridge] postMessage", l);
                let h = !1,
                  p = window.WVSDK.platform;
                if (
                  p === tu.iOS &&
                  null != (a = window.webkit) &&
                  null != (a = a.messageHandlers) &&
                  null != (a = a.__JSBridge__) &&
                  a.postMessage
                )
                  (h = !0),
                    window.webkit.messageHandlers.__JSBridge__.postMessage(l);
                else if (
                  p === tu.Android &&
                  null != (s = window.__JSBridge__) &&
                  s.postMessage
                )
                  (h = !0), window.__JSBridge__.postMessage(l);
                else if (p === tu.PlayStation)
                  window.WVSDK.platform = tu.PlayStation;
                else if (p === tu.Qt) {
                  let t = await ti();
                  t && ((h = !0), t.postMessage(l));
                }
                if (!h) {
                  let e = "[WVSDK][Bridge] postMessage failed, type: "
                    .concat(t, ", platform: ")
                    .concat(p);
                  d.error(e), o(Error(e));
                }
                r
                  ? (null != n && n.noTimeout) ||
                    window.setTimeout(() => {
                      var e;
                      if (h && null != (e = window.WVSDK.callback) && e[f]) {
                        let e = "[WVSDK][Bridge] callback timeout, type: "
                          .concat(t, ", callbackId: ")
                          .concat(f);
                        d.error(e), o(Error(e));
                      }
                    }, 5e3)
                  : i();
              });
            }
            let tp = {
              invoke: async (t, e) => {
                if (U.includes(t)) {
                  let e =
                    "[WVSDK][WebView] preset event not allowed, type: ".concat(
                      t
                    );
                  throw (d.error(e), Error(e));
                }
                return th(t, e);
              },
              invokeWithReturnValue: async (t, e, r) => {
                if (U.includes(t)) {
                  let e =
                    "[WVSDK][WebView] preset event not allowed, type: ".concat(
                      t
                    );
                  throw (d.error(e), Error(e));
                }
                return th(t, e, !0, r);
              },
              registerAPI: (t, e) => {
                m.includes(t)
                  ? d.error(
                      "[WVSDK][API] preset event not allowed, type: ".concat(t)
                    )
                  : (window.WVSDK.API[t] = (r) => (
                      d.debug("[WVSDK] API called", t, r), e(r)
                    ));
              },
              addEventListener: (t, e) => (
                g.on(t, e),
                () => {
                  g.off(t, e);
                }
              ),
              removeEventListener: (t, e) => {
                g.off(t, e);
              },
              getENV: () => window.WVSDK.ENV,
              getPlatform: () => window.WVSDK.platform,
              getIsCloud: () => ts().includes("is_cloud"),
              getDeviceType: () => {
                if (!tc("iOS")) return ta.Unknown;
                let t = /device_type\/([^\s;,)]+)/i.exec(ts());
                switch (null == t ? void 0 : t[1]) {
                  case ta.iPhone:
                    return ta.iPhone;
                  case ta.iPad:
                    return ta.iPad;
                  case ta.Mac:
                    return ta.Mac;
                  default:
                    return ta.Unknown;
                }
              },
            };
            "u" > typeof window && F && $();
            let td = {
                [j.ARKNIGHTS]: {
                  default: ["Oswald-Regular", "SourceHanSerifCN-Medium"],
                  fontMap: {
                    "zh-cn": [
                      "SourceHanSansCN-Medium",
                      "SourceHanSerifCN-Medium",
                    ],
                    "zh-tw": [
                      "SourceHanSansTW-Medium",
                      "SourceHanSerifTW-Medium",
                    ],
                    "ja-jp": ["SourceHanSansJP-Bold", "SourceHanSerifJP-Bold"],
                    "ko-kr": ["aKoreanWorld-B", "NotoSansCJKkr-Medium"],
                  },
                  ignoreLanguageCss: !0,
                },
                [j.ENDFIELD]: {
                  default: "HarmonyOS_Sans",
                  fontMap: {
                    "zh-cn": "HarmonyOS_Sans_SC",
                    "zh-tw": "HarmonyOS_Sans_TC",
                    "ja-jp": "NotoSansJP",
                    "ko-kr": "NotoSansKR",
                    "th-th": "NotoSansThaiLooped",
                  },
                  weightsMap: { Medium: "normal", Bold: "bold" },
                },
              },
              tv = !1,
              tg = (t, e, r) => {
                if (tv) return;
                document.documentElement.setAttribute("lang", r);
                let n = td[t];
                if (
                  !n ||
                  document.getElementById("WEBVIEW_GAME_FONT_FACE_STYLE")
                )
                  return;
                let i = "";
                if (tp.getPlatform() === tu.PlayStation)
                  i = "font-family: sans-serif;";
                else {
                  let t = [n.default, ...Object.values(n.fontMap)].flat(),
                    r = tp.getENV().assetsPort,
                    o = e
                      ? "https://web-static.hg-cdn.com/webview/static/fonts/"
                      : "./web.hycdn.cn/webview/static/fonts/",
                    a = (t, e, n) => {
                      let i = ""
                          .concat(
                            tp.getPlatform() === tu.iOS
                              ? "https://"
                              : "http://",
                            "localhost:"
                          )
                          .concat(r, "/font/")
                          .concat(t)
                          .concat(e ? "_".concat(e) : "", ".woff2"),
                        a = ""
                          .concat(o)
                          .concat(t)
                          .concat(e ? "_".concat(e) : "", ".woff2"),
                        s = ""
                          .concat(o)
                          .concat(t)
                          .concat(e ? "_".concat(e) : "", ".woff"),
                        c = ""
                          .concat(o)
                          .concat(t)
                          .concat(e ? "_".concat(e) : "", ".ttf");
                      return "\n            @font-face {\n                font-family: '"
                        .concat(t, "';\n                src: ")
                        .concat(
                          r ? "url('".concat(i, "') format('woff2'),") : "",
                          " url('"
                        )
                        .concat(a, "') format('woff2'), url('")
                        .concat(s, "') format('woff'), url('")
                        .concat(
                          c,
                          "') format('truetype');\n                font-weight: "
                        )
                        .concat(
                          n,
                          ";\n                font-display: swap;\n            }"
                        );
                    },
                    s = n.weightsMap;
                  s
                    ? t.filter(Boolean).forEach((t) => {
                        Object.entries(s).forEach((e) => {
                          let [r, n] = e;
                          i += a(t, r, n);
                        });
                      })
                    : t.filter(Boolean).forEach((t) => {
                        i += a(t, "", "normal");
                      }),
                    n.ignoreLanguageCss ||
                      Object.values(R).forEach((t) => {
                        var e;
                        let r = null != (e = n.fontMap[t]) ? e : n.default,
                          o = Array.isArray(r) ? r[0] : r;
                        i += '\n[lang="'
                          .concat(t, '"] {font-family: "')
                          .concat(o, '";}');
                      });
                }
                let o = document.createElement("style");
                (o.id = "HG_GAME_FONT_FACE_STYLE"),
                  (o.innerHTML = i),
                  document.head.appendChild(o),
                  (tv = !0);
              },
              tm = {
                getSafeAreaStyle: function () {
                  var t;
                  let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "padding",
                    r = arguments.length > 1 ? arguments[1] : void 0,
                    {
                      top: n = 0,
                      right: i = 0,
                      bottom: o = 0,
                      left: a = 0,
                    } = null != (t = window.WVSDK.ENV.safearea) ? t : {},
                    s = "";
                  return (
                    r
                      ? ((s += "".concat(r.includes("top") ? n : 0, "px ")),
                        (s += "".concat(r.includes("right") ? i : 0, "px ")),
                        (s += "".concat(r.includes("bottom") ? o : 0, "px ")),
                        (s += "".concat(r.includes("left") ? a : 0, "px ")))
                      : (s = ""
                          .concat(n, "px ")
                          .concat(i, "px ")
                          .concat(o, "px ")
                          .concat(a, "px")),
                    { [e]: s }
                  );
                },
                loadFont: async (t, e) => {
                  var r;
                  let { game: n = j.ENDFIELD, language: i, oversea: o } = t,
                    { weights: a = ["Medium"], fonts: s = [] } =
                      null != e ? e : {};
                  if ((tg(n, o, i), tp.getPlatform() === tu.PlayStation))
                    return;
                  let c = td[n],
                    u =
                      s.length > 0
                        ? s
                        : null != (r = c.fontMap[i])
                        ? r
                        : td[n].default,
                    f = Promise.all(
                      (Array.isArray(u)
                        ? u
                            .map((t) =>
                              a.map((e) => {
                                var r, n;
                                return ""
                                  .concat(
                                    null !=
                                      (r =
                                        null == (n = c.weightsMap)
                                          ? void 0
                                          : n[e])
                                      ? r
                                      : "normal",
                                    " 1rem "
                                  )
                                  .concat(t);
                              })
                            )
                            .flat()
                        : a.map((t) => {
                            var e, r;
                            return ""
                              .concat(
                                null !=
                                  (e =
                                    null == (r = c.weightsMap) ? void 0 : r[t])
                                  ? e
                                  : "normal",
                                " 1rem "
                              )
                              .concat(u);
                          })
                      ).map(
                        async (t) => (
                          await document.fonts.load(t, "a"),
                          document.fonts.check(t)
                        )
                      )
                    );
                  return new Promise((t) => {
                    f.then(() => {
                      t();
                    }),
                      setTimeout(() => {
                        t();
                      }, 3e3);
                  });
                },
                initFont: tg,
              };
            var ty = { WebView: B, Style: tm, Console: d, Bridge: tp };
            t.exports = l;
          })();
        },
        18683: function (t, e, r) {
          "use strict";
          r(84179), r(47391), r(68661);
          var n = (function () {
              if ("u" > typeof Map) return Map;
              function t(t, e) {
                var r = -1;
                return (
                  t.some(function (t, n) {
                    return t[0] === e && ((r = n), !0);
                  }),
                  r
                );
              }
              function e() {
                this.__entries__ = [];
              }
              return (
                Object.defineProperty(e.prototype, "size", {
                  get: function () {
                    return this.__entries__.length;
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                (e.prototype.get = function (e) {
                  var r = t(this.__entries__, e),
                    n = this.__entries__[r];
                  return n && n[1];
                }),
                (e.prototype.set = function (e, r) {
                  var n = t(this.__entries__, e);
                  ~n
                    ? (this.__entries__[n][1] = r)
                    : this.__entries__.push([e, r]);
                }),
                (e.prototype.delete = function (e) {
                  var r = this.__entries__,
                    n = t(r, e);
                  ~n && r.splice(n, 1);
                }),
                (e.prototype.has = function (e) {
                  return !!~t(this.__entries__, e);
                }),
                (e.prototype.clear = function () {
                  this.__entries__.splice(0);
                }),
                (e.prototype.forEach = function (t, e) {
                  void 0 === e && (e = null);
                  for (var r = 0, n = this.__entries__; r < n.length; r++) {
                    var i = n[r];
                    t.call(e, i[1], i[0]);
                  }
                }),
                e
              );
            })(),
            i =
              "u" > typeof window &&
              "u" > typeof document &&
              window.document === document,
            o =
              void 0 !== r.g && r.g.Math === Math
                ? r.g
                : "u" > typeof self && self.Math === Math
                ? self
                : "u" > typeof window && window.Math === Math
                ? window
                : Function("return this")(),
            a =
              "function" == typeof requestAnimationFrame
                ? requestAnimationFrame.bind(o)
                : function (t) {
                    return setTimeout(function () {
                      return t(Date.now());
                    }, 1e3 / 60);
                  },
            s = [
              "top",
              "right",
              "bottom",
              "left",
              "width",
              "height",
              "size",
              "weight",
            ],
            c = "u" > typeof MutationObserver,
            u = (function () {
              function t() {
                (this.connected_ = !1),
                  (this.mutationEventsAdded_ = !1),
                  (this.mutationsObserver_ = null),
                  (this.observers_ = []),
                  (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
                  (this.refresh = (function (t) {
                    var e = !1,
                      r = !1,
                      n = 0;
                    function i() {
                      e && ((e = !1), t()), r && s();
                    }
                    function o() {
                      a(i);
                    }
                    function s() {
                      var t = Date.now();
                      if (e) {
                        if (t - n < 2) return;
                        r = !0;
                      } else (e = !0), (r = !1), setTimeout(o, 20);
                      n = t;
                    }
                    return s;
                  })(this.refresh.bind(this)));
              }
              return (
                (t.prototype.addObserver = function (t) {
                  ~this.observers_.indexOf(t) || this.observers_.push(t),
                    this.connected_ || this.connect_();
                }),
                (t.prototype.removeObserver = function (t) {
                  var e = this.observers_,
                    r = e.indexOf(t);
                  ~r && e.splice(r, 1),
                    !e.length && this.connected_ && this.disconnect_();
                }),
                (t.prototype.refresh = function () {
                  this.updateObservers_() && this.refresh();
                }),
                (t.prototype.updateObservers_ = function () {
                  var t = this.observers_.filter(function (t) {
                    return t.gatherActive(), t.hasActive();
                  });
                  return (
                    t.forEach(function (t) {
                      return t.broadcastActive();
                    }),
                    t.length > 0
                  );
                }),
                (t.prototype.connect_ = function () {
                  i &&
                    !this.connected_ &&
                    (document.addEventListener(
                      "transitionend",
                      this.onTransitionEnd_
                    ),
                    window.addEventListener("resize", this.refresh),
                    c
                      ? ((this.mutationsObserver_ = new MutationObserver(
                          this.refresh
                        )),
                        this.mutationsObserver_.observe(document, {
                          attributes: !0,
                          childList: !0,
                          characterData: !0,
                          subtree: !0,
                        }))
                      : (document.addEventListener(
                          "DOMSubtreeModified",
                          this.refresh
                        ),
                        (this.mutationEventsAdded_ = !0)),
                    (this.connected_ = !0));
                }),
                (t.prototype.disconnect_ = function () {
                  i &&
                    this.connected_ &&
                    (document.removeEventListener(
                      "transitionend",
                      this.onTransitionEnd_
                    ),
                    window.removeEventListener("resize", this.refresh),
                    this.mutationsObserver_ &&
                      this.mutationsObserver_.disconnect(),
                    this.mutationEventsAdded_ &&
                      document.removeEventListener(
                        "DOMSubtreeModified",
                        this.refresh
                      ),
                    (this.mutationsObserver_ = null),
                    (this.mutationEventsAdded_ = !1),
                    (this.connected_ = !1));
                }),
                (t.prototype.onTransitionEnd_ = function (t) {
                  var e = t.propertyName,
                    r = void 0 === e ? "" : e;
                  s.some(function (t) {
                    return !!~r.indexOf(t);
                  }) && this.refresh();
                }),
                (t.getInstance = function () {
                  return (
                    this.instance_ || (this.instance_ = new t()), this.instance_
                  );
                }),
                (t.instance_ = null),
                t
              );
            })(),
            f = function (t, e) {
              for (var r = 0, n = Object.keys(e); r < n.length; r++) {
                var i = n[r];
                Object.defineProperty(t, i, {
                  value: e[i],
                  enumerable: !1,
                  writable: !1,
                  configurable: !0,
                });
              }
              return t;
            },
            l = function (t) {
              return (t && t.ownerDocument && t.ownerDocument.defaultView) || o;
            },
            h = g(0, 0, 0, 0);
          function p(t) {
            return parseFloat(t) || 0;
          }
          function d(t) {
            for (var e = [], r = 1; r < arguments.length; r++)
              e[r - 1] = arguments[r];
            return e.reduce(function (e, r) {
              return e + p(t["border-" + r + "-width"]);
            }, 0);
          }
          var v =
            "u" > typeof SVGGraphicsElement
              ? function (t) {
                  return t instanceof l(t).SVGGraphicsElement;
                }
              : function (t) {
                  return (
                    t instanceof l(t).SVGElement &&
                    "function" == typeof t.getBBox
                  );
                };
          function g(t, e, r, n) {
            return { x: t, y: e, width: r, height: n };
          }
          var m = (function () {
              function t(t) {
                (this.broadcastWidth = 0),
                  (this.broadcastHeight = 0),
                  (this.contentRect_ = g(0, 0, 0, 0)),
                  (this.target = t);
              }
              return (
                (t.prototype.isActive = function () {
                  var t = (function (t) {
                    if (!i) return h;
                    if (v(t)) {
                      var e;
                      return g(0, 0, (e = t.getBBox()).width, e.height);
                    }
                    return (function (t) {
                      var e,
                        r = t.clientWidth,
                        n = t.clientHeight;
                      if (!r && !n) return h;
                      var i = l(t).getComputedStyle(t),
                        o = (function (t) {
                          for (
                            var e = {},
                              r = 0,
                              n = ["top", "right", "bottom", "left"];
                            r < n.length;
                            r++
                          ) {
                            var i = n[r],
                              o = t["padding-" + i];
                            e[i] = p(o);
                          }
                          return e;
                        })(i),
                        a = o.left + o.right,
                        s = o.top + o.bottom,
                        c = p(i.width),
                        u = p(i.height);
                      if (
                        ("border-box" === i.boxSizing &&
                          (Math.round(c + a) !== r &&
                            (c -= d(i, "left", "right") + a),
                          Math.round(u + s) !== n &&
                            (u -= d(i, "top", "bottom") + s)),
                        (e = t) !== l(e).document.documentElement)
                      ) {
                        var f = Math.round(c + a) - r,
                          v = Math.round(u + s) - n;
                        1 !== Math.abs(f) && (c -= f),
                          1 !== Math.abs(v) && (u -= v);
                      }
                      return g(o.left, o.top, c, u);
                    })(t);
                  })(this.target);
                  return (
                    (this.contentRect_ = t),
                    t.width !== this.broadcastWidth ||
                      t.height !== this.broadcastHeight
                  );
                }),
                (t.prototype.broadcastRect = function () {
                  var t = this.contentRect_;
                  return (
                    (this.broadcastWidth = t.width),
                    (this.broadcastHeight = t.height),
                    t
                  );
                }),
                t
              );
            })(),
            y = function (t, e) {
              var r,
                n,
                i,
                o,
                a,
                s =
                  ((r = e.x),
                  (n = e.y),
                  (i = e.width),
                  (o = e.height),
                  f(
                    (a = Object.create(
                      ("u" > typeof DOMRectReadOnly ? DOMRectReadOnly : Object)
                        .prototype
                    )),
                    {
                      x: r,
                      y: n,
                      width: i,
                      height: o,
                      top: n,
                      right: r + i,
                      bottom: o + n,
                      left: r,
                    }
                  ),
                  a);
              f(this, { target: t, contentRect: s });
            },
            b = (function () {
              function t(t, e, r) {
                if (
                  ((this.activeObservations_ = []),
                  (this.observations_ = new n()),
                  "function" != typeof t)
                )
                  throw TypeError(
                    "The callback provided as parameter 1 is not a function."
                  );
                (this.callback_ = t),
                  (this.controller_ = e),
                  (this.callbackCtx_ = r);
              }
              return (
                (t.prototype.observe = function (t) {
                  if (!arguments.length)
                    throw TypeError("1 argument required, but only 0 present.");
                  if (!("u" < typeof Element) && Element instanceof Object) {
                    if (!(t instanceof l(t).Element))
                      throw TypeError('parameter 1 is not of type "Element".');
                    var e = this.observations_;
                    e.has(t) ||
                      (e.set(t, new m(t)),
                      this.controller_.addObserver(this),
                      this.controller_.refresh());
                  }
                }),
                (t.prototype.unobserve = function (t) {
                  if (!arguments.length)
                    throw TypeError("1 argument required, but only 0 present.");
                  if (!("u" < typeof Element) && Element instanceof Object) {
                    if (!(t instanceof l(t).Element))
                      throw TypeError('parameter 1 is not of type "Element".');
                    var e = this.observations_;
                    e.has(t) &&
                      (e.delete(t),
                      e.size || this.controller_.removeObserver(this));
                  }
                }),
                (t.prototype.disconnect = function () {
                  this.clearActive(),
                    this.observations_.clear(),
                    this.controller_.removeObserver(this);
                }),
                (t.prototype.gatherActive = function () {
                  var t = this;
                  this.clearActive(),
                    this.observations_.forEach(function (e) {
                      e.isActive() && t.activeObservations_.push(e);
                    });
                }),
                (t.prototype.broadcastActive = function () {
                  if (this.hasActive()) {
                    var t = this.callbackCtx_,
                      e = this.activeObservations_.map(function (t) {
                        return new y(t.target, t.broadcastRect());
                      });
                    this.callback_.call(t, e, t), this.clearActive();
                  }
                }),
                (t.prototype.clearActive = function () {
                  this.activeObservations_.splice(0);
                }),
                (t.prototype.hasActive = function () {
                  return this.activeObservations_.length > 0;
                }),
                t
              );
            })(),
            w = "u" > typeof WeakMap ? new WeakMap() : new n(),
            S = function t(e) {
              if (!(this instanceof t))
                throw TypeError("Cannot call a class as a function.");
              if (!arguments.length)
                throw TypeError("1 argument required, but only 0 present.");
              var r = new b(e, u.getInstance(), this);
              w.set(this, r);
            };
          ["observe", "unobserve", "disconnect"].forEach(function (t) {
            S.prototype[t] = function () {
              var e;
              return (e = w.get(this))[t].apply(e, arguments);
            };
          });
          var O = void 0 !== o.ResizeObserver ? o.ResizeObserver : S;
          void 0 === globalThis.ResizeObserver &&
            Object.defineProperty(globalThis, "ResizeObserver", {
              configurable: !0,
              writable: !0,
              value: O,
            });
        },
        90983: function (t, e, r) {
          "use strict";
          function n(t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = null != arguments[e] ? arguments[e] : {},
                n = Object.keys(r);
              "function" == typeof Object.getOwnPropertySymbols &&
                (n = n.concat(
                  Object.getOwnPropertySymbols(r).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(r, t).enumerable;
                  })
                )),
                n.forEach(function (e) {
                  var n;
                  (n = r[e]),
                    e in t
                      ? Object.defineProperty(t, e, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (t[e] = n);
                });
            }
            return t;
          }
          function i(t, e) {
            return (
              (e = null != e ? e : {}),
              Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(e)
                  )
                : (function (t) {
                    var e = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(t);
                      e.push.apply(e, r);
                    }
                    return e;
                  })(Object(e)).forEach(function (r) {
                    Object.defineProperty(
                      t,
                      r,
                      Object.getOwnPropertyDescriptor(e, r)
                    );
                  }),
              t
            );
          }
          r.d(e, {
            BW: function () {
              return g;
            },
            GB: function () {
              return v;
            },
            Lk: function () {
              return h;
            },
            VG: function () {
              return p;
            },
            cO: function () {
              return f;
            },
            tN: function () {
              return d;
            },
          }),
            r(35665),
            r(74558),
            r(8101),
            r(21245),
            r(61526),
            r(46587);
          var o = {
              webp: {
                "720p": "webp_720p",
                "1080p": "webp_1080p",
                native: "webp_2k",
              },
              png: { "720p": "base_720p", "1080p": "base_1080p", native: null },
            },
            a = /\.(?:png|jpe?g)(?:[?#]|$)/i,
            s = "x-oss-process",
            c = () => (
              window.__IMAGE_ASSET_REGISTRY__ ||
                (window.__IMAGE_ASSET_REGISTRY__ = {}),
              window.__IMAGE_ASSET_REGISTRY__
            ),
            u = (t) => {
              var e = t.indexOf("#x-oss-process=style/");
              if (e >= 0) return t.slice(0, e);
              var r = t.indexOf("#"),
                n = r >= 0 ? t.slice(r) : "",
                i = r >= 0 ? t.slice(0, r) : t,
                o = i.indexOf("?");
              if (o < 0) return t;
              var a = i.slice(0, o),
                c = i
                  .slice(o + 1)
                  .split("&")
                  .filter((t) => t.split("=", 1)[0] !== s)
                  .join("&");
              return ""
                .concat(a)
                .concat(c ? "?".concat(c) : "")
                .concat(n);
            },
            f = (t, e, r) => {
              var n = u(t),
                i = o[e][r];
              if (!i) return n;
              var a = n.indexOf("#"),
                c = a >= 0 ? n.slice(a) : "",
                f = a >= 0 ? n.slice(0, a) : n,
                l = f.includes("?") ? "&" : "?";
              return ""
                .concat(f)
                .concat(l)
                .concat(s, "=style/")
                .concat(i)
                .concat(c);
            },
            l = (t, e) => {
              var r,
                n,
                i = u(t),
                a = f(i, e.format, e.tier),
                s = c();
              return (
                (s[a] = {
                  source: i,
                  tier: e.tier,
                  format: e.format,
                  ossStyle: o[e.format][e.tier],
                  pngFallback: f(i, "png", e.tier),
                  fallbackCount:
                    null != (r = null == (n = s[a]) ? void 0 : n.fallbackCount)
                      ? r
                      : 0,
                }),
                a
              );
            },
            h = (t) => {
              c()[t.pngFallback] = i(n({}, t), {
                format: "png",
                ossStyle: o.png[t.tier],
              });
            },
            p = (t) => {
              if ("u" < typeof window) return t;
              var e = window.__IMAGE_PROFILE__;
              if (!e) throw Error("图片 profile 尚未初始化：".concat(t));
              return l(t, e);
            },
            d = () => {
              var t,
                e =
                  null == (t = window.__resource)
                    ? void 0
                    : t.find((t) => a.test(t.href));
              return e ? u(e.href) : null;
            },
            v = (t) => {
              if (window.__resource) {
                var e = new Map();
                for (var r of window.__resource) {
                  if (!a.test(r.href)) {
                    e.set(r.href, r);
                    continue;
                  }
                  var o = l(r.href, t);
                  e.set(o, i(n({}, r), { href: o }));
                }
                window.__resource = Array.from(e.values());
              }
            },
            g = () => {
              var t;
              return n(
                {},
                null != (t = window.__IMAGE_ASSET_REGISTRY__) ? t : {}
              );
            };
        },
        66078: function (t, e, r) {
          "use strict";
          r.d(e, {
            Lh: function () {
              return f;
            },
            rN: function () {
              return l;
            },
          }),
            r(18344),
            r(61526),
            r(46587),
            r(47416),
            r(61230),
            r(34094),
            r(51506),
            r(35665),
            r(74558);
          var n = r(61402),
            i = r(68750),
            o = r(90983);
          r(86957);
          var a = { "720p": 0, "1080p": 1, native: 2 },
            s = (t) => {
              if (!t) return null;
              var e = Number.parseInt(t, 10);
              return Number.isFinite(e) ? e : null;
            },
            c = (t, e) =>
              !("HarmonyOS" === t || /HarmonyOS|OpenHarmony|ArkWeb/i.test(e)) &&
              ("Android" === t || /Android/i.test(e));
          function u(t, e, r, n, i, o, a) {
            try {
              var s = t[o](a),
                c = s.value;
            } catch (t) {
              r(t);
              return;
            }
            s.done ? e(c) : Promise.resolve(c).then(n, i);
          }
          var f = () => {
              var t;
              return ((t = function* () {
                let t, e, r, u, f;
                if (window.__IMAGE_PROFILE__) return window.__IMAGE_PROFILE__;
                var l,
                  h,
                  p,
                  d,
                  v,
                  g,
                  m,
                  y,
                  b,
                  w,
                  S,
                  O,
                  E,
                  _,
                  x,
                  P,
                  A,
                  T,
                  I,
                  R,
                  j,
                  k,
                  L,
                  D,
                  N =
                    ((m = (0, i.y7)()),
                    (y = navigator),
                    (b = n.Bridge.getENV()),
                    (_ = ((t) => {
                      var {
                          screenWidth: e,
                          screenHeight: r,
                          devicePixelRatio: n,
                        } = t,
                        i =
                          Math.min(e, r) *
                          (Number.isFinite(n) && n > 0 ? n : 1);
                      return Number.isFinite(i) && i > 0 ? i : 1080;
                    })(
                      (w = {
                        platform: m.platform,
                        deviceType: m.deviceType,
                        userAgent: navigator.userAgent,
                        navigatorPlatform: navigator.platform,
                        maxTouchPoints: navigator.maxTouchPoints,
                        screenWidth: window.screen.width,
                        screenHeight: window.screen.height,
                        devicePixelRatio: window.devicePixelRatio,
                        deviceMemory: y.deviceMemory,
                        saveData:
                          null == (g = y.connection) ? void 0 : g.saveData,
                        remoteMaxTier:
                          "720p" ===
                            (t =
                              null != (v = b.imageMaxTier)
                                ? v
                                : b.image_max_tier) ||
                          "1080p" === t ||
                          "native" === t
                            ? t
                            : void 0,
                      })
                    )),
                    (x = null != (S = w.remoteMaxTier) ? S : "native"),
                    (l = w),
                    (P = (d =
                      null ==
                      (h = /(?:CPU(?: iPhone)? OS|iPhone OS)\s+(\d+)[._]/i.exec(
                        l.userAgent
                      ))
                        ? void 0
                        : h[1])
                      ? s(d)
                      : /Macintosh|Mac OS X/i.test(l.userAgent) &&
                        ((r = l.deviceType),
                        (u = l.navigatorPlatform),
                        (f = l.maxTouchPoints),
                        "iphone" === r ||
                          "ipad" === r ||
                          ("MacIntel" === u && f > 1))
                      ? s(
                          null == (p = /Version\/(\d+)/i.exec(l.userAgent))
                            ? void 0
                            : p[1]
                        )
                      : null),
                    (I = c(w.platform, (A = w.userAgent))
                      ? s(
                          null == (T = /Android\s+(\d+)/i.exec(A))
                            ? void 0
                            : T[1]
                        )
                      : null),
                    (R = c(w.platform, w.userAgent)),
                    (j =
                      "iphone" === w.deviceType || /iPhone/i.test(w.userAgent)),
                    (k =
                      "PlayStation" === w.platform
                        ? "fixed-1080p"
                        : R || j
                        ? "capped-1080p"
                        : "adaptive"),
                    "PlayStation" === w.platform
                      ? ((O = "1080p"), (E = "playstation"))
                      : !0 === w.saveData
                      ? ((O = "720p"), (E = "save-data"))
                      : void 0 !== w.deviceMemory && w.deviceMemory <= 2
                      ? ((O = "720p"), (E = "low-memory"))
                      : null !== P && P < 15
                      ? ((O = "720p"), (E = "old-ios"))
                      : null !== I && I < 11
                      ? ((O = "720p"), (E = "old-android"))
                      : ((E = "physical-height"),
                        (O =
                          _ <= 720
                            ? "720p"
                            : "capped-1080p" === k || _ <= 1080
                            ? "1080p"
                            : "native")),
                    {
                      tier: a[(e = O)] <= a[x] ? e : x,
                      uncappedTier: O,
                      policy: k,
                      reason: E,
                      physicalHeight: _,
                      iosMajor: P,
                      androidMajor: I,
                      remoteMaxTier: x,
                    }),
                  C = yield new Promise((t) => {
                    var e = new Image(),
                      r = !1,
                      n = (n) => {
                        r ||
                          ((r = !0),
                          window.clearTimeout(i),
                          (e.onload = null),
                          (e.onerror = null),
                          t(n));
                      },
                      i = window.setTimeout(() => n(!1), 1500);
                    (e.onload = () => n(1 === e.width && 1 === e.height)),
                      (e.onerror = () => n(!1)),
                      (e.src =
                        "data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==");
                  }),
                  M =
                    !!C &&
                    (yield ((L = N.tier),
                    !(D = (0, o.tN)())
                      ? Promise.resolve(!0)
                      : new Promise((t) => {
                          var e = new Image(),
                            r = !1,
                            n = (n) => {
                              r ||
                                ((r = !0),
                                window.clearTimeout(i),
                                (e.onload = null),
                                (e.onerror = null),
                                t(n));
                            },
                            i = window.setTimeout(() => n(!1), 1500);
                          (e.onload = () => n(!0)),
                            (e.onerror = () => n(!1)),
                            (e.src = (0, o.cO)(D, "webp", L));
                        }))),
                  U = {
                    tier: N.tier,
                    format: M ? "webp" : "png",
                    decision: N,
                    webpSupported: C,
                  };
                return (
                  (window.__IMAGE_PROFILE__ = U),
                  (document.documentElement.dataset.imageTier = U.tier),
                  (document.documentElement.dataset.imageFormat = U.format),
                  (0, o.GB)(U),
                  document.addEventListener(
                    "error",
                    (t) => {
                      var e,
                        r,
                        n,
                        i = t.target;
                      if (i instanceof HTMLImageElement) {
                        var a = window.__IMAGE_ASSET_REGISTRY__,
                          s =
                            null != (e = null == a ? void 0 : a[i.src])
                              ? e
                              : null == a
                              ? void 0
                              : a[null != (r = i.getAttribute("src")) ? r : ""];
                        s &&
                          "webp" === s.format &&
                          !i.dataset.pngFallbackTried &&
                          ((i.dataset.pngFallbackTried = "1"),
                          (s.fallbackCount =
                            (null != (n = s.fallbackCount) ? n : 0) + 1),
                          (0, o.Lk)(s),
                          (i.src = s.pngFallback));
                      }
                    },
                    !0
                  ),
                  U
                );
              }),
              function () {
                var e = this,
                  r = arguments;
                return new Promise(function (n, i) {
                  var o = t.apply(e, r);
                  function a(t) {
                    u(o, n, i, a, s, "next", t);
                  }
                  function s(t) {
                    u(o, n, i, a, s, "throw", t);
                  }
                  a(void 0);
                });
              })();
            },
            l = () => {
              var t;
              return null != (t = window.__IMAGE_PROFILE__) ? t : null;
            };
        },
        68750: function (t, e, r) {
          "use strict";
          r.d(e, {
            E4: function () {
              return v;
            },
            Fs: function () {
              return d;
            },
            Lb: function () {
              return h;
            },
            ND: function () {
              return u;
            },
            Ut: function () {
              return s;
            },
            rY: function () {
              return a;
            },
            tI: function () {
              return f;
            },
            t_: function () {
              return l;
            },
            y7: function () {
              return o;
            },
          }),
            r(61526),
            r(46587),
            r(51506),
            r(35665),
            r(21116);
          var n,
            i = r(61402),
            o = () => {
              var t = i.Bridge.getPlatform(),
                e = i.Bridge.getIsCloud(),
                r = i.Bridge.getDeviceType();
              return {
                platform: t,
                isCloud: e,
                deviceType: r,
                isCloudMac: e && r === i.DeviceType.Mac,
              };
            },
            a = () => i.Bridge.getPlatform() !== i.Platform.Unknown,
            s = () => o().isCloudMac,
            c = new URLSearchParams(window.location.search),
            u = (t) => c.get(t),
            f = (t) => new URLSearchParams(window.location.search).get(t),
            l = !1,
            h = !1,
            p = !!(
              (null == (n = navigator) ? void 0 : n.userAgent) &&
              /(skland|skport)/i.test(navigator.userAgent)
            ),
            d = () => p,
            v = () => "ontouchstart" in window || navigator.maxTouchPoints > 0;
        },
        41594: function (t) {
          "use strict";
          t.exports = React;
        },
        75206: function (t) {
          "use strict";
          t.exports = ReactDOM;
        },
        66748: function (t, e, r) {
          "use strict";
          var n = r(67895),
            i = r(21437),
            o = TypeError;
          t.exports = function (t) {
            if (n(t)) return t;
            throw new o(i(t) + " is not a function");
          };
        },
        82226: function (t, e, r) {
          "use strict";
          var n = r(96019),
            i = r(21437),
            o = TypeError;
          t.exports = function (t) {
            if (n(t)) return t;
            throw new o(i(t) + " is not a constructor");
          };
        },
        8728: function (t, e, r) {
          "use strict";
          var n = r(67171),
            i = String,
            o = TypeError;
          t.exports = function (t) {
            if (n(t)) return t;
            throw new o("Can't set " + i(t) + " as a prototype");
          };
        },
        36571: function (t, e, r) {
          "use strict";
          var n = r(22381),
            i = r(84342),
            o = r(41039).f,
            a = n("unscopables"),
            s = Array.prototype;
          void 0 === s[a] && o(s, a, { configurable: !0, value: i(null) }),
            (t.exports = function (t) {
              s[a][t] = !0;
            });
        },
        79007: function (t, e, r) {
          "use strict";
          var n = r(59277).charAt;
          t.exports = function (t, e, r) {
            return e + ((r && n(t, e).length) || 1);
          };
        },
        63001: function (t, e, r) {
          "use strict";
          var n = r(60003),
            i = TypeError;
          t.exports = function (t, e) {
            if (n(e, t)) return t;
            throw new i("Incorrect invocation");
          };
        },
        21489: function (t, e, r) {
          "use strict";
          var n = r(74252),
            i = String,
            o = TypeError;
          t.exports = function (t) {
            if (n(t)) return t;
            throw new o(i(t) + " is not an object");
          };
        },
        49850: function (t, e, r) {
          "use strict";
          var n = r(56046),
            i = r(62635),
            o = r(7759),
            a = r(63993),
            s = r(84575),
            c = r(96019),
            u = r(36076),
            f = r(65226),
            l = r(65501),
            h = r(50029),
            p = r(855),
            d = r(75101),
            v = r(62391),
            g = Array;
          t.exports = function (t) {
            var e,
              r,
              m,
              y,
              b,
              w,
              S = c(this),
              O = arguments.length,
              E = O > 1 ? arguments[1] : void 0,
              _ = void 0 !== E;
            _ && (E = n(E, O > 2 ? arguments[2] : void 0));
            var x = o(t),
              P = p(x),
              A = 0;
            if (P && !(this === g && s(P)))
              for (
                r = S ? new this() : [], b = (y = h(x, P)).next;
                !(m = i(b, y)).done;
                A++
              ) {
                try {
                  v(A);
                } catch (t) {
                  d(y, "throw", t);
                }
                w = _ ? a(y, E, [m.value, A], !0) : m.value;
                try {
                  f(r, A, w);
                } catch (t) {
                  d(y, "throw", t);
                }
              }
            else
              for (e = u(x), r = S ? new this(e) : g(e); e > A; A++)
                (w = _ ? E(x[A], A) : x[A]), f(r, A, w);
            return l(r, A), r;
          };
        },
        3831: function (t, e, r) {
          "use strict";
          var n = r(2083),
            i = r(28660),
            o = r(36076),
            a = function (t) {
              return function (e, r, a) {
                var s,
                  c = n(e),
                  u = o(c);
                if (0 === u) return !t && -1;
                var f = i(a, u);
                if (t && r != r) {
                  for (; u > f; ) if ((s = c[f++]) != s) return !0;
                } else
                  for (; u > f; f++)
                    if ((t || f in c) && c[f] === r) return t || f || 0;
                return !t && -1;
              };
            };
          t.exports = { includes: a(!0), indexOf: a(!1) };
        },
        65501: function (t, e, r) {
          "use strict";
          var n = r(34498),
            i = r(11798),
            o = TypeError,
            a = Object.getOwnPropertyDescriptor;
          t.exports =
            n &&
            !(function () {
              if (void 0 !== this) return !0;
              try {
                Object.defineProperty([], "length", {
                  writable: !1,
                }).length = 1;
              } catch (t) {
                return t instanceof TypeError;
              }
            })()
              ? function (t, e) {
                  if (i(t) && !a(t, "length").writable)
                    throw new o("Cannot set read only .length");
                  return (t.length = e);
                }
              : function (t, e) {
                  return (t.length = e);
                };
        },
        23198: function (t, e, r) {
          "use strict";
          t.exports = r(43038)([].slice);
        },
        62398: function (t, e, r) {
          "use strict";
          var n = r(23198),
            i = Math.floor,
            o = function (t, e) {
              var r = t.length;
              if (r < 8)
                for (var a, s, c = 1; c < r; ) {
                  for (s = c, a = t[c]; s && e(t[s - 1], a) > 0; )
                    t[s] = t[--s];
                  s !== c++ && (t[s] = a);
                }
              else
                for (
                  var u = i(r / 2),
                    f = o(n(t, 0, u), e),
                    l = o(n(t, u), e),
                    h = f.length,
                    p = l.length,
                    d = 0,
                    v = 0;
                  d < h || v < p;

                )
                  t[d + v] =
                    d < h && v < p
                      ? 0 >= e(f[d], l[v])
                        ? f[d++]
                        : l[v++]
                      : d < h
                      ? f[d++]
                      : l[v++];
              return t;
            };
          t.exports = o;
        },
        38379: function (t, e, r) {
          "use strict";
          var n = r(11798),
            i = r(96019),
            o = r(74252),
            a = r(22381)("species"),
            s = Array;
          t.exports = function (t) {
            var e;
            return (
              n(t) &&
                (i((e = t.constructor)) && (e === s || n(e.prototype))
                  ? (e = void 0)
                  : o(e) && null === (e = e[a]) && (e = void 0)),
              void 0 === e ? s : e
            );
          };
        },
        30299: function (t, e, r) {
          "use strict";
          var n = r(38379);
          t.exports = function (t, e) {
            return new (n(t))(0 === e ? 0 : e);
          };
        },
        63993: function (t, e, r) {
          "use strict";
          var n = r(21489),
            i = r(75101);
          t.exports = function (t, e, r, o) {
            try {
              return o ? e(n(r)[0], r[1]) : e(r);
            } catch (e) {
              i(t, "throw", e);
            }
          };
        },
        38862: function (t, e, r) {
          "use strict";
          var n = r(22381)("iterator"),
            i = !1;
          try {
            var o = 0,
              a = {
                next: function () {
                  return { done: !!o++ };
                },
                return: function () {
                  i = !0;
                },
              };
            (a[n] = function () {
              return this;
            }),
              Array.from(a, function () {
                throw 2;
              });
          } catch (t) {}
          t.exports = function (t, e) {
            try {
              if (!e && !i) return !1;
            } catch (t) {
              return !1;
            }
            var r = !1;
            try {
              var o = {};
              (o[n] = function () {
                return {
                  next: function () {
                    return { done: (r = !0) };
                  },
                };
              }),
                t(o);
            } catch (t) {}
            return r;
          };
        },
        59802: function (t, e, r) {
          "use strict";
          var n = r(43038),
            i = n({}.toString),
            o = n("".slice);
          t.exports = function (t) {
            return o(i(t), 8, -1);
          };
        },
        58333: function (t, e, r) {
          "use strict";
          var n = r(96414),
            i = r(67895),
            o = r(59802),
            a = r(22381)("toStringTag"),
            s = Object,
            c =
              "Arguments" ===
              o(
                (function () {
                  return arguments;
                })()
              ),
            u = function (t, e) {
              try {
                return t[e];
              } catch (t) {}
            };
          t.exports = n
            ? o
            : function (t) {
                var e, r, n;
                return void 0 === t
                  ? "Undefined"
                  : null === t
                  ? "Null"
                  : "string" == typeof (r = u((e = s(t)), a))
                  ? r
                  : c
                  ? o(e)
                  : "Object" === (n = o(e)) && i(e.callee)
                  ? "Arguments"
                  : n;
              };
        },
        87010: function (t, e, r) {
          "use strict";
          var n = r(74823),
            i = r(41853),
            o = r(93325),
            a = r(41039);
          t.exports = function (t, e, r) {
            for (var s = i(e), c = a.f, u = o.f, f = 0; f < s.length; f++) {
              var l = s[f];
              n(t, l) || (r && n(r, l)) || c(t, l, u(e, l));
            }
          };
        },
        39246: function (t, e, r) {
          "use strict";
          var n = r(22381)("match");
          t.exports = function (t) {
            var e = /./;
            try {
              "/./"[t](e);
            } catch (r) {
              try {
                return (e[n] = !1), "/./"[t](e);
              } catch (t) {}
            }
            return !1;
          };
        },
        24869: function (t, e, r) {
          "use strict";
          t.exports = !r(63501)(function () {
            function t() {}
            return (
              (t.prototype.constructor = null),
              Object.getPrototypeOf(new t()) !== t.prototype
            );
          });
        },
        73595: function (t) {
          "use strict";
          t.exports = function (t, e) {
            return { value: t, done: e };
          };
        },
        49953: function (t, e, r) {
          "use strict";
          var n = r(34498),
            i = r(41039),
            o = r(25334);
          t.exports = n
            ? function (t, e, r) {
                return i.f(t, e, o(1, r));
              }
            : function (t, e, r) {
                return (t[e] = r), t;
              };
        },
        25334: function (t) {
          "use strict";
          t.exports = function (t, e) {
            return {
              enumerable: !(1 & t),
              configurable: !(2 & t),
              writable: !(4 & t),
              value: e,
            };
          };
        },
        65226: function (t, e, r) {
          "use strict";
          var n = r(34498),
            i = r(41039),
            o = r(25334);
          t.exports = function (t, e, r) {
            n ? i.f(t, e, o(0, r)) : (t[e] = r);
          };
        },
        38548: function (t, e, r) {
          "use strict";
          var n = r(24349),
            i = r(41039);
          t.exports = function (t, e, r) {
            return (
              r.get && n(r.get, e, { getter: !0 }),
              r.set && n(r.set, e, { setter: !0 }),
              i.f(t, e, r)
            );
          };
        },
        10262: function (t, e, r) {
          "use strict";
          var n = r(67895),
            i = r(41039),
            o = r(24349),
            a = r(5739);
          t.exports = function (t, e, r, s) {
            s || (s = {});
            var c = s.enumerable,
              u = void 0 !== s.name ? s.name : e;
            if ((n(r) && o(r, u, s), s.global)) c ? (t[e] = r) : a(e, r);
            else {
              try {
                s.unsafe ? t[e] && (c = !0) : delete t[e];
              } catch (t) {}
              c
                ? (t[e] = r)
                : i.f(t, e, {
                    value: r,
                    enumerable: !1,
                    configurable: !s.nonConfigurable,
                    writable: !s.nonWritable,
                  });
            }
            return t;
          };
        },
        20989: function (t, e, r) {
          "use strict";
          var n = r(10262);
          t.exports = function (t, e, r) {
            for (var i in e) n(t, i, e[i], r);
            return t;
          };
        },
        5739: function (t, e, r) {
          "use strict";
          var n = r(29902),
            i = Object.defineProperty;
          t.exports = function (t, e) {
            try {
              i(n, t, { value: e, configurable: !0, writable: !0 });
            } catch (r) {
              n[t] = e;
            }
            return e;
          };
        },
        34498: function (t, e, r) {
          "use strict";
          t.exports = !r(63501)(function () {
            return (
              7 !==
              Object.defineProperty({}, 1, {
                get: function () {
                  return 7;
                },
              })[1]
            );
          });
        },
        96613: function (t, e, r) {
          "use strict";
          var n = r(29902),
            i = r(74252),
            o = n.document,
            a = i(o) && i(o.createElement);
          t.exports = function (t) {
            return a ? o.createElement(t) : {};
          };
        },
        62391: function (t) {
          "use strict";
          var e = TypeError;
          t.exports = function (t) {
            if (t > 0x1fffffffffffff)
              throw new e("Maximum allowed index exceeded");
            return t;
          };
        },
        16622: function (t) {
          "use strict";
          t.exports = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0,
          };
        },
        46194: function (t, e, r) {
          "use strict";
          var n = r(96613)("span").classList,
            i = n && n.constructor && n.constructor.prototype;
          t.exports = i === Object.prototype ? void 0 : i;
        },
        57585: function (t) {
          "use strict";
          t.exports = [
            "constructor",
            "hasOwnProperty",
            "isPrototypeOf",
            "propertyIsEnumerable",
            "toLocaleString",
            "toString",
            "valueOf",
          ];
        },
        4259: function (t, e, r) {
          "use strict";
          var n = r(34169);
          t.exports = /ipad|iphone|ipod/i.test(n) && "u" > typeof Pebble;
        },
        68110: function (t, e, r) {
          "use strict";
          var n = r(34169);
          t.exports = /ipad|iphone|ipod/i.test(n) && /applewebkit/i.test(n);
        },
        32307: function (t, e, r) {
          "use strict";
          t.exports = "NODE" === r(8581);
        },
        46978: function (t, e, r) {
          "use strict";
          var n = r(34169);
          t.exports = /web0s(?!.*chrome)/i.test(n);
        },
        34169: function (t, e, r) {
          "use strict";
          var n = r(29902).navigator,
            i = n && n.userAgent;
          t.exports = i ? String(i) : "";
        },
        28041: function (t, e, r) {
          "use strict";
          var n,
            i,
            o = r(29902),
            a = r(34169),
            s = o.process,
            c = o.Deno,
            u = (s && s.versions) || (c && c.version),
            f = u && u.v8;
          f && (i = (n = f.split("."))[0] > 0 && n[0] < 4 ? 1 : +(n[0] + n[1])),
            !i &&
              a &&
              (!(n = a.match(/Edge\/(\d+)/)) || n[1] >= 74) &&
              (n = a.match(/Chrome\/(\d+)/)) &&
              (i = +n[1]),
            (t.exports = i);
        },
        8581: function (t, e, r) {
          "use strict";
          var n = r(29902),
            i = r(34169),
            o = r(59802),
            a = function (t) {
              return i.slice(0, t.length) === t;
            };
          t.exports = a("Bun/")
            ? "BUN"
            : a("Cloudflare-Workers")
            ? "CLOUDFLARE"
            : a("Deno/")
            ? "DENO"
            : a("Node.js/")
            ? "NODE"
            : n.Bun && "string" == typeof Bun.version
            ? "BUN"
            : n.Deno && "object" == typeof Deno.version
            ? "DENO"
            : "process" === o(n.process)
            ? "NODE"
            : n.window && n.document
            ? "BROWSER"
            : "REST";
        },
        70872: function (t, e, r) {
          "use strict";
          var n = r(29902),
            i = r(93325).f,
            o = r(49953),
            a = r(10262),
            s = r(5739),
            c = r(87010),
            u = r(35350);
          t.exports = function (t, e) {
            var r,
              f,
              l,
              h,
              p,
              d = t.target,
              v = t.global,
              g = t.stat;
            if ((r = v ? n : g ? n[d] || s(d, {}) : n[d] && n[d].prototype))
              for (f in e) {
                if (
                  ((h = e[f]),
                  (l = t.dontCallGetSet ? (p = i(r, f)) && p.value : r[f]),
                  !u(v ? f : d + (g ? "." : "#") + f, t.forced) && void 0 !== l)
                ) {
                  if (typeof h == typeof l) continue;
                  c(h, l);
                }
                (t.sham || (l && l.sham)) && o(h, "sham", !0), a(r, f, h, t);
              }
          };
        },
        63501: function (t) {
          "use strict";
          t.exports = function (t) {
            try {
              return !!t();
            } catch (t) {
              return !0;
            }
          };
        },
        64130: function (t, e, r) {
          "use strict";
          r(35665);
          var n = r(62635),
            i = r(10262),
            o = r(27957),
            a = r(63501),
            s = r(22381),
            c = r(49953),
            u = s("species"),
            f = RegExp.prototype;
          t.exports = function (t, e, r, l) {
            var h = s(t),
              p = !a(function () {
                var e = {};
                return (
                  (e[h] = function () {
                    return 7;
                  }),
                  7 !== ""[t](e)
                );
              }),
              d =
                p &&
                !a(function () {
                  var e = !1,
                    r = /a/;
                  if ("split" === t) {
                    var n = {};
                    (n[u] = function () {
                      return r;
                    }),
                      ((r = { constructor: n, flags: "" })[h] = /./[h]);
                  }
                  return (
                    (r.exec = function () {
                      return (e = !0), null;
                    }),
                    r[h](""),
                    !e
                  );
                });
            if (!p || !d || r) {
              var v = /./[h],
                g = e(h, ""[t], function (t, e, r, i, a) {
                  var s = e.exec;
                  return s === o || s === f.exec
                    ? p && !a
                      ? { done: !0, value: n(v, e, r, i) }
                      : { done: !0, value: n(t, r, e, i) }
                    : { done: !1 };
                });
              i(String.prototype, t, g[0]), i(f, h, g[1]);
            }
            l && c(f[h], "sham", !0);
          };
        },
        18741: function (t, e, r) {
          "use strict";
          var n = r(11798),
            i = r(36076),
            o = r(62391),
            a = r(56046),
            s = r(65226),
            c = function (t, e, r, u, f, l, h, p) {
              for (var d, v, g = f, m = 0, y = !!h && a(h, p); m < u; )
                m in r &&
                  ((d = y ? y(r[m], m, e) : r[m]),
                  l > 0 && n(d)
                    ? ((v = i(d)), (g = c(t, e, d, v, g, l - 1) - 1))
                    : (o(g + 1), s(t, g, d)),
                  g++),
                  m++;
              return g;
            };
          t.exports = c;
        },
        24279: function (t, e, r) {
          "use strict";
          var n = r(84222),
            i = Function.prototype,
            o = i.apply,
            a = i.call;
          t.exports =
            ("object" == typeof Reflect && Reflect.apply) ||
            (n
              ? a.bind(o)
              : function () {
                  return a.apply(o, arguments);
                });
        },
        56046: function (t, e, r) {
          "use strict";
          var n = r(81062),
            i = r(66748),
            o = r(84222),
            a = n(n.bind);
          t.exports = function (t, e) {
            return (
              i(t),
              void 0 === e
                ? t
                : o
                ? a(t, e)
                : function () {
                    return t.apply(e, arguments);
                  }
            );
          };
        },
        84222: function (t, e, r) {
          "use strict";
          t.exports = !r(63501)(function () {
            var t = function () {}.bind();
            return "function" != typeof t || t.hasOwnProperty("prototype");
          });
        },
        62635: function (t, e, r) {
          "use strict";
          var n = r(84222),
            i = Function.prototype.call;
          t.exports = n
            ? i.bind(i)
            : function () {
                return i.apply(i, arguments);
              };
        },
        49332: function (t, e, r) {
          "use strict";
          var n = r(34498),
            i = r(74823),
            o = Function.prototype,
            a = n && Object.getOwnPropertyDescriptor,
            s = i(o, "name"),
            c = s && (!n || (n && a(o, "name").configurable));
          t.exports = {
            EXISTS: s,
            PROPER: s && "something" === function () {}.name,
            CONFIGURABLE: c,
          };
        },
        65068: function (t, e, r) {
          "use strict";
          var n = r(43038),
            i = r(66748);
          t.exports = function (t, e, r) {
            try {
              return n(i(Object.getOwnPropertyDescriptor(t, e)[r]));
            } catch (t) {}
          };
        },
        81062: function (t, e, r) {
          "use strict";
          var n = r(59802),
            i = r(43038);
          t.exports = function (t) {
            if ("Function" === n(t)) return i(t);
          };
        },
        43038: function (t, e, r) {
          "use strict";
          var n = r(84222),
            i = Function.prototype,
            o = i.call,
            a = n && i.bind.bind(o, o);
          t.exports = n
            ? a
            : function (t) {
                return function () {
                  return o.apply(t, arguments);
                };
              };
        },
        39014: function (t, e, r) {
          "use strict";
          var n = r(29902);
          t.exports = function (t, e) {
            var r = n[t],
              i = r && r.prototype;
            return i && i[e];
          };
        },
        59285: function (t, e, r) {
          "use strict";
          var n = r(29902),
            i = r(67895);
          t.exports = function (t, e) {
            var r;
            return arguments.length < 2
              ? i((r = n[t]))
                ? r
                : void 0
              : n[t] && n[t][e];
          };
        },
        50029: function (t, e, r) {
          "use strict";
          var n = r(62635),
            i = r(67895),
            o = r(21489),
            a = r(21437),
            s = r(855),
            c = TypeError;
          t.exports = function (t, e) {
            var r = arguments.length < 2 ? s(t) : e;
            if (i(r)) return o(n(r, t));
            throw new c(a(t) + " is not iterable");
          };
        },
        855: function (t, e, r) {
          "use strict";
          var n = r(59802),
            i = r(35803),
            o = r(32072),
            a = r(22381)("iterator"),
            s = Array.prototype;
          t.exports = function (t) {
            if (!i(t))
              return (
                o(t, a) ||
                o(t, "@@iterator") ||
                ("Arguments" === n(t) ? s[a] : void 0)
              );
          };
        },
        32072: function (t, e, r) {
          "use strict";
          var n = r(66748),
            i = r(35803);
          t.exports = function (t, e) {
            var r = t[e];
            return i(r) ? void 0 : n(r);
          };
        },
        29902: function (t, e, r) {
          "use strict";
          var n = function (t) {
            return t && t.Math === Math && t;
          };
          t.exports =
            n("object" == typeof globalThis && globalThis) ||
            n("object" == typeof window && window) ||
            n("object" == typeof self && self) ||
            n("object" == typeof r.g && r.g) ||
            n("object" == typeof this && this) ||
            (function () {
              return this;
            })() ||
            Function("return this")();
        },
        74823: function (t, e, r) {
          "use strict";
          var n = r(43038),
            i = r(7759),
            o = n({}.hasOwnProperty);
          t.exports =
            Object.hasOwn ||
            function (t, e) {
              return o(i(t), e);
            };
        },
        43815: function (t) {
          "use strict";
          t.exports = {};
        },
        8559: function (t) {
          "use strict";
          t.exports = function (t, e) {
            try {
              1 == arguments.length ? console.error(t) : console.error(t, e);
            } catch (t) {}
          };
        },
        54879: function (t, e, r) {
          "use strict";
          t.exports = r(59285)("document", "documentElement");
        },
        12347: function (t, e, r) {
          "use strict";
          var n = r(34498),
            i = r(63501),
            o = r(96613);
          t.exports =
            !n &&
            !i(function () {
              return (
                7 !==
                Object.defineProperty(o("div"), "a", {
                  get: function () {
                    return 7;
                  },
                }).a
              );
            });
        },
        81453: function (t, e, r) {
          "use strict";
          var n = r(43038),
            i = r(63501),
            o = r(59802),
            a = Object,
            s = n("".split);
          t.exports = i(function () {
            return !a("z").propertyIsEnumerable(0);
          })
            ? function (t) {
                return "String" === o(t) ? s(t, "") : a(t);
              }
            : a;
        },
        5368: function (t, e, r) {
          "use strict";
          var n = r(43038),
            i = r(67895),
            o = r(48339),
            a = n(Function.toString);
          i(o.inspectSource) ||
            (o.inspectSource = function (t) {
              return a(t);
            }),
            (t.exports = o.inspectSource);
        },
        83751: function (t, e, r) {
          "use strict";
          var n,
            i,
            o,
            a = r(31384),
            s = r(29902),
            c = r(74252),
            u = r(49953),
            f = r(74823),
            l = r(48339),
            h = r(9213),
            p = r(43815),
            d = "Object already initialized",
            v = s.TypeError,
            g = s.WeakMap;
          if (a || l.state) {
            var m = l.state || (l.state = new g());
            (m.get = m.get),
              (m.has = m.has),
              (m.set = m.set),
              (n = function (t, e) {
                if (m.has(t)) throw new v(d);
                return (e.facade = t), m.set(t, e), e;
              }),
              (i = function (t) {
                return m.get(t) || {};
              }),
              (o = function (t) {
                return m.has(t);
              });
          } else {
            var y = h("state");
            (p[y] = !0),
              (n = function (t, e) {
                if (f(t, y)) throw new v(d);
                return (e.facade = t), u(t, y, e), e;
              }),
              (i = function (t) {
                return f(t, y) ? t[y] : {};
              }),
              (o = function (t) {
                return f(t, y);
              });
          }
          t.exports = {
            set: n,
            get: i,
            has: o,
            enforce: function (t) {
              return o(t) ? i(t) : n(t, {});
            },
            getterFor: function (t) {
              return function (e) {
                var r;
                if (!c(e) || (r = i(e)).type !== t)
                  throw new v("Incompatible receiver, " + t + " required");
                return r;
              };
            },
          };
        },
        84575: function (t, e, r) {
          "use strict";
          var n = r(22381),
            i = r(4027),
            o = n("iterator"),
            a = Array.prototype;
          t.exports = function (t) {
            return void 0 !== t && (i.Array === t || a[o] === t);
          };
        },
        11798: function (t, e, r) {
          "use strict";
          var n = r(59802);
          t.exports =
            Array.isArray ||
            function (t) {
              return "Array" === n(t);
            };
        },
        67895: function (t) {
          "use strict";
          var e = "object" == typeof document && document.all;
          t.exports =
            void 0 === e && void 0 !== e
              ? function (t) {
                  return "function" == typeof t || t === e;
                }
              : function (t) {
                  return "function" == typeof t;
                };
        },
        96019: function (t, e, r) {
          "use strict";
          var n = r(43038),
            i = r(63501),
            o = r(67895),
            a = r(58333),
            s = r(59285),
            c = r(5368),
            u = function () {},
            f = s("Reflect", "construct"),
            l = /^\s*(?:class|function)\b/,
            h = n(l.exec),
            p = !l.test(u),
            d = function (t) {
              if (!o(t)) return !1;
              try {
                return f(u, [], t), !0;
              } catch (t) {
                return !1;
              }
            },
            v = function (t) {
              if (!o(t)) return !1;
              switch (a(t)) {
                case "AsyncFunction":
                case "GeneratorFunction":
                case "AsyncGeneratorFunction":
                  return !1;
              }
              try {
                return p || !!h(l, c(t));
              } catch (t) {
                return !0;
              }
            };
          (v.sham = !0),
            (t.exports =
              !f ||
              i(function () {
                var t;
                return (
                  d(d.call) ||
                  !d(Object) ||
                  !d(function () {
                    t = !0;
                  }) ||
                  t
                );
              })
                ? v
                : d);
        },
        35350: function (t, e, r) {
          "use strict";
          var n = r(63501),
            i = r(67895),
            o = /#|\.prototype\./,
            a = function (t, e) {
              var r = c[s(t)];
              return r === f || (r !== u && (i(e) ? n(e) : !!e));
            },
            s = (a.normalize = function (t) {
              return String(t).replace(o, ".").toLowerCase();
            }),
            c = (a.data = {}),
            u = (a.NATIVE = "N"),
            f = (a.POLYFILL = "P");
          t.exports = a;
        },
        35803: function (t) {
          "use strict";
          t.exports = function (t) {
            return null == t;
          };
        },
        74252: function (t, e, r) {
          "use strict";
          var n = r(67895);
          t.exports = function (t) {
            return "object" == typeof t ? null !== t : n(t);
          };
        },
        67171: function (t, e, r) {
          "use strict";
          var n = r(74252);
          t.exports = function (t) {
            return n(t) || null === t;
          };
        },
        13601: function (t) {
          "use strict";
          t.exports = !1;
        },
        18758: function (t, e, r) {
          "use strict";
          var n = r(74252),
            i = r(59802),
            o = r(22381)("match");
          t.exports = function (t) {
            var e;
            return n(t) && (void 0 !== (e = t[o]) ? !!e : "RegExp" === i(t));
          };
        },
        51475: function (t, e, r) {
          "use strict";
          var n = r(59285),
            i = r(67895),
            o = r(60003),
            a = r(96994),
            s = Object;
          t.exports = a
            ? function (t) {
                return "symbol" == typeof t;
              }
            : function (t) {
                var e = n("Symbol");
                return i(e) && o(e.prototype, s(t));
              };
        },
        78774: function (t, e, r) {
          "use strict";
          var n = r(56046),
            i = r(62635),
            o = r(21489),
            a = r(21437),
            s = r(84575),
            c = r(36076),
            u = r(60003),
            f = r(50029),
            l = r(855),
            h = r(75101),
            p = TypeError,
            d = function (t, e) {
              (this.stopped = t), (this.result = e);
            },
            v = d.prototype;
          t.exports = function (t, e, r) {
            var g,
              m,
              y,
              b,
              w,
              S,
              O,
              E = r && r.that,
              _ = !!(r && r.AS_ENTRIES),
              x = !!(r && r.IS_RECORD),
              P = !!(r && r.IS_ITERATOR),
              A = !!(r && r.INTERRUPTED),
              T = n(e, E),
              I = function (t) {
                var e = g;
                return (g = void 0), e && h(e, "normal"), new d(!0, t);
              },
              R = function (t) {
                return _
                  ? (o(t), A ? T(t[0], t[1], I) : T(t[0], t[1]))
                  : A
                  ? T(t, I)
                  : T(t);
              };
            if (x) g = t.iterator;
            else if (P) g = t;
            else {
              if (!(m = l(t))) throw new p(a(t) + " is not iterable");
              if (s(m)) {
                for (y = 0, b = c(t); b > y; y++)
                  if ((w = R(t[y])) && u(v, w)) return w;
                return new d(!1);
              }
              g = f(t, m);
            }
            for (S = x ? t.next : g.next; !(O = i(S, g)).done; ) {
              var j = O.value;
              try {
                w = R(j);
              } catch (t) {
                if (g) h(g, "throw", t);
                else throw t;
              }
              if ("object" == typeof w && w && u(v, w)) return w;
            }
            return new d(!1);
          };
        },
        75101: function (t, e, r) {
          "use strict";
          var n = r(62635),
            i = r(21489),
            o = r(32072);
          t.exports = function (t, e, r) {
            var a, s;
            i(t);
            try {
              if (!(a = o(t, "return"))) {
                if ("throw" === e) throw r;
                return r;
              }
              a = n(a, t);
            } catch (t) {
              (s = !0), (a = t);
            }
            if ("throw" === e) throw r;
            if (s) throw a;
            return i(a), r;
          };
        },
        70364: function (t, e, r) {
          "use strict";
          var n = r(84223).IteratorPrototype,
            i = r(84342),
            o = r(25334),
            a = r(48649),
            s = r(4027),
            c = function () {
              return this;
            };
          t.exports = function (t, e, r, u) {
            var f = e + " Iterator";
            return (
              (t.prototype = i(n, { next: o(+!u, r) })),
              a(t, f, !1, !0),
              (s[f] = c),
              t
            );
          };
        },
        27362: function (t, e, r) {
          "use strict";
          var n = r(70872),
            i = r(62635),
            o = r(13601),
            a = r(49332),
            s = r(67895),
            c = r(70364),
            u = r(15041),
            f = r(70029),
            l = r(48649),
            h = r(49953),
            p = r(10262),
            d = r(22381),
            v = r(4027),
            g = r(84223),
            m = a.PROPER,
            y = a.CONFIGURABLE,
            b = g.IteratorPrototype,
            w = g.BUGGY_SAFARI_ITERATORS,
            S = d("iterator"),
            O = "keys",
            E = "values",
            _ = "entries",
            x = function () {
              return this;
            };
          t.exports = function (t, e, r, a, d, g, P) {
            c(r, e, a);
            var A,
              T,
              I,
              R = function (t) {
                if (t === d && N) return N;
                if (!w && t && t in L) return L[t];
                switch (t) {
                  case O:
                  case E:
                  case _:
                    return function () {
                      return new r(this, t);
                    };
                }
                return function () {
                  return new r(this);
                };
              },
              j = e + " Iterator",
              k = !1,
              L = t.prototype,
              D = L[S] || L["@@iterator"] || (d && L[d]),
              N = (!w && D) || R(d),
              C = ("Array" === e && L.entries) || D;
            if (
              (C &&
                (A = u(C.call(new t()))) !== Object.prototype &&
                A.next &&
                (!o && u(A) !== b && (f ? f(A, b) : s(A[S]) || p(A, S, x)),
                l(A, j, !0, !0),
                o && (v[j] = x)),
              m &&
                d === E &&
                D &&
                D.name !== E &&
                (!o && y
                  ? h(L, "name", E)
                  : ((k = !0),
                    (N = function () {
                      return i(D, this);
                    }))),
              d)
            )
              if (
                ((T = { values: R(E), keys: g ? N : R(O), entries: R(_) }), P)
              )
                for (I in T) (!w && !k && I in L) || p(L, I, T[I]);
              else n({ target: e, proto: !0, forced: w || k }, T);
            return (
              (!o || P) && L[S] !== N && p(L, S, N, { name: d }), (v[e] = N), T
            );
          };
        },
        84223: function (t, e, r) {
          "use strict";
          var n,
            i,
            o,
            a = r(63501),
            s = r(67895),
            c = r(74252),
            u = r(84342),
            f = r(15041),
            l = r(10262),
            h = r(22381),
            p = r(13601),
            d = h("iterator"),
            v = !1;
          [].keys &&
            ("next" in (o = [].keys())
              ? (i = f(f(o))) !== Object.prototype && (n = i)
              : (v = !0)),
            !c(n) ||
            a(function () {
              var t = {};
              return n[d].call(t) !== t;
            })
              ? (n = {})
              : p && (n = u(n)),
            s(n[d]) ||
              l(n, d, function () {
                return this;
              }),
            (t.exports = { IteratorPrototype: n, BUGGY_SAFARI_ITERATORS: v });
        },
        4027: function (t) {
          "use strict";
          t.exports = Object.create ? Object.create(null) : {};
        },
        36076: function (t, e, r) {
          "use strict";
          var n = r(11480);
          t.exports = function (t) {
            return n(t.length);
          };
        },
        24349: function (t, e, r) {
          "use strict";
          var n = r(43038),
            i = r(63501),
            o = r(67895),
            a = r(74823),
            s = r(34498),
            c = r(49332).CONFIGURABLE,
            u = r(5368),
            f = r(83751),
            l = f.enforce,
            h = f.get,
            p = String,
            d = Object.defineProperty,
            v = n("".slice),
            g = n("".replace),
            m = n([].join),
            y =
              s &&
              !i(function () {
                return 8 !== d(function () {}, "length", { value: 8 }).length;
              }),
            b = String(String).split("String"),
            w = (t.exports = function (t, e, r) {
              "Symbol(" === v(p(e), 0, 7) &&
                (e = "[" + g(p(e), /^Symbol\(([^)]*)\).*$/, "$1") + "]"),
                r && r.getter && (e = "get " + e),
                r && r.setter && (e = "set " + e),
                (!a(t, "name") || (c && t.name !== e)) &&
                  (s
                    ? d(t, "name", { value: e, configurable: !0 })
                    : (t.name = e)),
                y &&
                  r &&
                  a(r, "arity") &&
                  t.length !== r.arity &&
                  d(t, "length", { value: r.arity });
              try {
                r && a(r, "constructor") && r.constructor
                  ? s && d(t, "prototype", { writable: !1 })
                  : t.prototype && (t.prototype = void 0);
              } catch (t) {}
              var n = l(t);
              return (
                a(n, "source") ||
                  (n.source = m(b, "string" == typeof e ? e : "")),
                t
              );
            });
          Function.prototype.toString = w(function () {
            return (o(this) && h(this).source) || u(this);
          }, "toString");
        },
        66547: function (t) {
          "use strict";
          var e = Math.ceil,
            r = Math.floor;
          t.exports =
            Math.trunc ||
            function (t) {
              var n = +t;
              return (n > 0 ? r : e)(n);
            };
        },
        82133: function (t, e, r) {
          "use strict";
          var n,
            i,
            o,
            a,
            s,
            c = r(29902),
            u = r(35871),
            f = r(56046),
            l = r(95123).set,
            h = r(66599),
            p = r(68110),
            d = r(4259),
            v = r(46978),
            g = r(32307),
            m = c.MutationObserver || c.WebKitMutationObserver,
            y = c.document,
            b = c.process,
            w = c.Promise,
            S = u("queueMicrotask");
          if (!S) {
            var O = new h(),
              E = function () {
                var t, e;
                for (g && (t = b.domain) && t.exit(); (e = O.get()); )
                  try {
                    e();
                  } catch (t) {
                    throw (O.head && n(), t);
                  }
                t && t.enter();
              };
            p || g || v || !m || !y
              ? !d && w && w.resolve
                ? (((a = w.resolve(void 0)).constructor = w),
                  (s = f(a.then, a)),
                  (n = function () {
                    s(E);
                  }))
                : g
                ? (n = function () {
                    b.nextTick(E);
                  })
                : ((l = f(l, c)),
                  (n = function () {
                    l(E);
                  }))
              : ((i = !0),
                (o = y.createTextNode("")),
                new m(E).observe(o, { characterData: !0 }),
                (n = function () {
                  o.data = i = !i;
                })),
              (S = function (t) {
                O.head || n(), O.add(t);
              });
          }
          t.exports = S;
        },
        76865: function (t, e, r) {
          "use strict";
          var n = r(66748),
            i = TypeError,
            o = function (t) {
              var e, r;
              (this.promise = new t(function (t, n) {
                if (void 0 !== e || void 0 !== r)
                  throw new i("Bad Promise constructor");
                (e = t), (r = n);
              })),
                (this.resolve = n(e)),
                (this.reject = n(r));
            };
          t.exports.f = function (t) {
            return new o(t);
          };
        },
        68345: function (t, e, r) {
          "use strict";
          var n = r(18758),
            i = TypeError;
          t.exports = function (t) {
            if (n(t))
              throw new i("The method doesn't accept regular expressions");
            return t;
          };
        },
        37241: function (t, e, r) {
          "use strict";
          var n = r(29902),
            i = r(63501),
            o = r(43038),
            a = r(63353),
            s = r(74564).trim,
            c = r(37442),
            u = n.parseInt,
            f = n.Symbol,
            l = f && f.iterator,
            h = /^[+-]?0x/i,
            p = o(h.exec);
          t.exports =
            8 !== u(c + "08") ||
            22 !== u(c + "0x16") ||
            (l &&
              !i(function () {
                u(Object(l));
              }))
              ? function (t, e) {
                  var r = s(a(t));
                  return u(r, e >>> 0 || (p(h, r) ? 16 : 10));
                }
              : u;
        },
        2931: function (t, e, r) {
          "use strict";
          var n = r(34498),
            i = r(43038),
            o = r(62635),
            a = r(63501),
            s = r(98598),
            c = r(1527),
            u = r(19071),
            f = r(7759),
            l = r(81453),
            h = Object.assign,
            p = Object.defineProperty,
            d = i([].concat);
          t.exports =
            !h ||
            a(function () {
              if (
                n &&
                1 !==
                  h(
                    { b: 1 },
                    h(
                      p({}, "a", {
                        enumerable: !0,
                        get: function () {
                          p(this, "b", { value: 3, enumerable: !1 });
                        },
                      }),
                      { b: 2 }
                    )
                  ).b
              )
                return !0;
              var t = {},
                e = {},
                r = Symbol("assign detection"),
                i = "abcdefghijklmnopqrst";
              return (
                (t[r] = 7),
                i.split("").forEach(function (t) {
                  e[t] = t;
                }),
                7 !== h({}, t)[r] || s(h({}, e)).join("") !== i
              );
            })
              ? function (t, e) {
                  for (
                    var r = f(t), i = arguments.length, a = 1, h = c.f, p = u.f;
                    i > a;

                  )
                    for (
                      var v,
                        g = l(arguments[a++]),
                        m = h ? d(s(g), h(g)) : s(g),
                        y = m.length,
                        b = 0;
                      y > b;

                    )
                      (v = m[b++]), (!n || o(p, g, v)) && (r[v] = g[v]);
                  return r;
                }
              : h;
        },
        84342: function (t, e, r) {
          "use strict";
          var n,
            i = r(21489),
            o = r(65859),
            a = r(57585),
            s = r(43815),
            c = r(54879),
            u = r(96613),
            f = r(9213),
            l = "prototype",
            h = "script",
            p = f("IE_PROTO"),
            d = function () {},
            v = function (t) {
              return "<" + h + ">" + t + "</" + h + ">";
            },
            g = function (t) {
              t.write(v("")), t.close();
              var e = t.parentWindow.Object;
              return (t = null), e;
            },
            m = function () {
              var t,
                e = u("iframe");
              return (
                (e.style.display = "none"),
                c.appendChild(e),
                (e.src = String("java" + h + ":")),
                (t = e.contentWindow.document).open(),
                t.write(v("document.F=Object")),
                t.close(),
                t.F
              );
            },
            y = function () {
              try {
                n = new ActiveXObject("htmlfile");
              } catch (t) {}
              y =
                "u" > typeof document
                  ? document.domain && n
                    ? g(n)
                    : m()
                  : g(n);
              for (var t = a.length; t--; ) delete y[l][a[t]];
              return y();
            };
          (s[p] = !0),
            (t.exports =
              Object.create ||
              function (t, e) {
                var r;
                return (
                  null !== t
                    ? ((d[l] = i(t)), (r = new d()), (d[l] = null), (r[p] = t))
                    : (r = y()),
                  void 0 === e ? r : o.f(r, e)
                );
              });
        },
        65859: function (t, e, r) {
          "use strict";
          var n = r(34498),
            i = r(98876),
            o = r(41039),
            a = r(21489),
            s = r(2083),
            c = r(98598);
          e.f =
            n && !i
              ? Object.defineProperties
              : function (t, e) {
                  a(t);
                  for (var r, n = s(e), i = c(e), u = i.length, f = 0; u > f; )
                    o.f(t, (r = i[f++]), n[r]);
                  return t;
                };
        },
        41039: function (t, e, r) {
          "use strict";
          var n = r(34498),
            i = r(12347),
            o = r(98876),
            a = r(21489),
            s = r(51627),
            c = TypeError,
            u = Object.defineProperty,
            f = Object.getOwnPropertyDescriptor,
            l = "enumerable",
            h = "configurable",
            p = "writable";
          e.f = n
            ? o
              ? function (t, e, r) {
                  if (
                    (a(t),
                    (e = s(e)),
                    a(r),
                    "function" == typeof t &&
                      "prototype" === e &&
                      "value" in r &&
                      p in r &&
                      !r[p])
                  ) {
                    var n = f(t, e);
                    n &&
                      n[p] &&
                      ((t[e] = r.value),
                      (r = {
                        configurable: h in r ? r[h] : n[h],
                        enumerable: l in r ? r[l] : n[l],
                        writable: !1,
                      }));
                  }
                  return u(t, e, r);
                }
              : u
            : function (t, e, r) {
                if ((a(t), (e = s(e)), a(r), i))
                  try {
                    return u(t, e, r);
                  } catch (t) {}
                if ("get" in r || "set" in r)
                  throw new c("Accessors not supported");
                return "value" in r && (t[e] = r.value), t;
              };
        },
        93325: function (t, e, r) {
          "use strict";
          var n = r(34498),
            i = r(62635),
            o = r(19071),
            a = r(25334),
            s = r(2083),
            c = r(51627),
            u = r(74823),
            f = r(12347),
            l = Object.getOwnPropertyDescriptor;
          e.f = n
            ? l
            : function (t, e) {
                if (((t = s(t)), (e = c(e)), f))
                  try {
                    return l(t, e);
                  } catch (t) {}
                if (u(t, e)) return a(!i(o.f, t, e), t[e]);
              };
        },
        82658: function (t, e, r) {
          "use strict";
          var n = r(99386),
            i = r(57585).concat("length", "prototype");
          e.f =
            Object.getOwnPropertyNames ||
            function (t) {
              return n(t, i);
            };
        },
        1527: function (t, e) {
          "use strict";
          e.f = Object.getOwnPropertySymbols;
        },
        15041: function (t, e, r) {
          "use strict";
          var n = r(74823),
            i = r(67895),
            o = r(7759),
            a = r(9213),
            s = r(24869),
            c = a("IE_PROTO"),
            u = Object,
            f = u.prototype;
          t.exports = s
            ? u.getPrototypeOf
            : function (t) {
                var e = o(t);
                if (n(e, c)) return e[c];
                var r = e.constructor;
                return i(r) && e instanceof r
                  ? r.prototype
                  : e instanceof u
                  ? f
                  : null;
              };
        },
        60003: function (t, e, r) {
          "use strict";
          t.exports = r(43038)({}.isPrototypeOf);
        },
        99386: function (t, e, r) {
          "use strict";
          var n = r(43038),
            i = r(74823),
            o = r(2083),
            a = r(3831).indexOf,
            s = r(43815),
            c = n([].push);
          t.exports = function (t, e) {
            var r,
              n = o(t),
              u = 0,
              f = [];
            for (r in n) !i(s, r) && i(n, r) && c(f, r);
            for (; e.length > u; ) i(n, (r = e[u++])) && (~a(f, r) || c(f, r));
            return f;
          };
        },
        98598: function (t, e, r) {
          "use strict";
          var n = r(99386),
            i = r(57585);
          t.exports =
            Object.keys ||
            function (t) {
              return n(t, i);
            };
        },
        19071: function (t, e) {
          "use strict";
          var r = {}.propertyIsEnumerable,
            n = Object.getOwnPropertyDescriptor;
          e.f =
            n && !r.call({ 1: 2 }, 1)
              ? function (t) {
                  var e = n(this, t);
                  return !!e && e.enumerable;
                }
              : r;
        },
        70029: function (t, e, r) {
          "use strict";
          var n = r(65068),
            i = r(74252),
            o = r(47660),
            a = r(8728);
          t.exports =
            Object.setPrototypeOf ||
            ("__proto__" in {}
              ? (function () {
                  var t,
                    e = !1,
                    r = {};
                  try {
                    (t = n(Object.prototype, "__proto__", "set"))(r, []),
                      (e = r instanceof Array);
                  } catch (t) {}
                  return function (r, n) {
                    return (
                      o(r), a(n), i(r) && (e ? t(r, n) : (r.__proto__ = n)), r
                    );
                  };
                })()
              : void 0);
        },
        26471: function (t, e, r) {
          "use strict";
          var n = r(34498),
            i = r(63501),
            o = r(43038),
            a = r(15041),
            s = r(98598),
            c = r(2083),
            u = o(r(19071).f),
            f = o([].push),
            l =
              n &&
              i(function () {
                var t = Object.create(null);
                return (t[2] = 2), !u(t, 2);
              }),
            h = function (t) {
              return function (e) {
                for (
                  var r,
                    i = c(e),
                    o = s(i),
                    h = l && null === a(i),
                    p = o.length,
                    d = 0,
                    v = [];
                  p > d;

                )
                  (r = o[d++]),
                    (!n || (h ? r in i : u(i, r))) &&
                      f(v, t ? [r, i[r]] : i[r]);
                return v;
              };
            };
          t.exports = { entries: h(!0), values: h(!1) };
        },
        12008: function (t, e, r) {
          "use strict";
          var n = r(62635),
            i = r(67895),
            o = r(74252),
            a = TypeError;
          t.exports = function (t, e) {
            var r, s;
            if (
              ("string" === e && i((r = t.toString)) && !o((s = n(r, t)))) ||
              (i((r = t.valueOf)) && !o((s = n(r, t)))) ||
              ("string" !== e && i((r = t.toString)) && !o((s = n(r, t))))
            )
              return s;
            throw new a("Can't convert object to primitive value");
          };
        },
        41853: function (t, e, r) {
          "use strict";
          var n = r(59285),
            i = r(43038),
            o = r(82658),
            a = r(1527),
            s = r(21489),
            c = i([].concat);
          t.exports =
            n("Reflect", "ownKeys") ||
            function (t) {
              var e = o.f(s(t)),
                r = a.f;
              return r ? c(e, r(t)) : e;
            };
        },
        63345: function (t, e, r) {
          "use strict";
          t.exports = r(29902);
        },
        31429: function (t) {
          "use strict";
          t.exports = function (t) {
            try {
              return { error: !1, value: t() };
            } catch (t) {
              return { error: !0, value: t };
            }
          };
        },
        40834: function (t, e, r) {
          "use strict";
          var n = r(29902),
            i = r(96244),
            o = r(67895),
            a = r(35350),
            s = r(5368),
            c = r(22381),
            u = r(8581),
            f = r(13601),
            l = r(28041),
            h = i && i.prototype,
            p = c("species"),
            d = !1,
            v = o(n.PromiseRejectionEvent);
          t.exports = {
            CONSTRUCTOR: a("Promise", function () {
              var t = s(i),
                e = t !== String(i);
              if ((!e && 66 === l) || (f && !(h.catch && h.finally))) return !0;
              if (!l || l < 51 || !/native code/.test(t)) {
                var r = new i(function (t) {
                    t(1);
                  }),
                  n = function (t) {
                    t(
                      function () {},
                      function () {}
                    );
                  };
                if (
                  (((r.constructor = {})[p] = n),
                  !(d = r.then(function () {}) instanceof n))
                )
                  return !0;
              }
              return !e && ("BROWSER" === u || "DENO" === u) && !v;
            }),
            REJECTION_EVENT: v,
            SUBCLASSING: d,
          };
        },
        96244: function (t, e, r) {
          "use strict";
          t.exports = r(29902).Promise;
        },
        9016: function (t, e, r) {
          "use strict";
          var n = r(21489),
            i = r(74252),
            o = r(76865);
          t.exports = function (t, e) {
            if ((n(t), i(e) && e.constructor === t)) return e;
            var r = o.f(t);
            return (0, r.resolve)(e), r.promise;
          };
        },
        82811: function (t, e, r) {
          "use strict";
          var n = r(96244),
            i = r(38862);
          t.exports =
            r(40834).CONSTRUCTOR ||
            !i(function (t) {
              n.all(t).then(void 0, function () {});
            });
        },
        66599: function (t) {
          "use strict";
          var e = function () {
            (this.head = null), (this.tail = null);
          };
          (e.prototype = {
            add: function (t) {
              var e = { item: t, next: null },
                r = this.tail;
              r ? (r.next = e) : (this.head = e), (this.tail = e);
            },
            get: function () {
              var t = this.head;
              if (t)
                return (
                  null === (this.head = t.next) && (this.tail = null), t.item
                );
            },
          }),
            (t.exports = e);
        },
        27520: function (t, e, r) {
          "use strict";
          var n = r(62635),
            i = r(21489),
            o = r(67895),
            a = r(59802),
            s = r(27957),
            c = TypeError;
          t.exports = function (t, e) {
            var r = t.exec;
            if (o(r)) {
              var u = n(r, t, e);
              return null !== u && i(u), u;
            }
            if ("RegExp" === a(t)) return n(s, t, e);
            throw new c("RegExp#exec called on incompatible receiver");
          };
        },
        27957: function (t, e, r) {
          "use strict";
          var n,
            i,
            o = r(62635),
            a = r(43038),
            s = r(63353),
            c = r(46161),
            u = r(64903),
            f = r(37955),
            l = r(84342),
            h = r(83751).get,
            p = r(39369),
            d = r(83516),
            v = f("native-string-replace", String.prototype.replace),
            g = RegExp.prototype.exec,
            m = g,
            y = a("".charAt),
            b = a("".indexOf),
            w = a("".replace),
            S = a("".slice),
            O =
              ((i = /b*/g),
              o(g, (n = /a/), "a"),
              o(g, i, "a"),
              0 !== n.lastIndex || 0 !== i.lastIndex),
            E = u.BROKEN_CARET,
            _ = void 0 !== /()??/.exec("")[1],
            x = function (t, e) {
              for (var r = (t.groups = l(null)), n = 0; n < e.length; n++) {
                var i = e[n];
                r[i[0]] = t[i[1]];
              }
            };
          (O || _ || E || p || d) &&
            (m = function (t) {
              var e,
                r,
                n,
                i = h(this),
                a = s(t),
                u = i.raw;
              if (u)
                return (
                  (u.lastIndex = this.lastIndex),
                  (e = o(m, u, a)),
                  (this.lastIndex = u.lastIndex),
                  e && i.groups && x(e, i.groups),
                  e
                );
              var f = i.groups,
                l = E && this.sticky,
                p = o(c, this),
                d = this.source,
                P = 0,
                A = a;
              if (l) {
                -1 === b((p = w(p, "y", "")), "g") && (p += "g"),
                  (A = S(a, this.lastIndex));
                var T = this.lastIndex > 0 && y(a, this.lastIndex - 1);
                this.lastIndex > 0 &&
                  (!this.multiline ||
                    (this.multiline &&
                      "\n" !== T &&
                      "\r" !== T &&
                      "\u2028" !== T &&
                      "\u2029" !== T)) &&
                  ((d = "(?: (?:" + d + "))"), (A = " " + A), P++),
                  (r = RegExp("^(?:" + d + ")", p));
              }
              _ && (r = RegExp("^" + d + "$(?!\\s)", p)),
                O && (n = this.lastIndex);
              var I = o(g, l ? r : this, A);
              return (
                l
                  ? I
                    ? ((I.input = a),
                      (I[0] = S(I[0], P)),
                      (I.index = this.lastIndex),
                      (this.lastIndex += I[0].length))
                    : (this.lastIndex = 0)
                  : O &&
                    I &&
                    (this.lastIndex = this.global ? I.index + I[0].length : n),
                _ &&
                  I &&
                  I.length > 1 &&
                  o(v, I[0], r, function () {
                    for (var t = 1; t < arguments.length - 2; t++)
                      void 0 === arguments[t] && (I[t] = void 0);
                  }),
                I && f && x(I, f),
                I
              );
            }),
            (t.exports = m);
        },
        66487: function (t, e, r) {
          "use strict";
          var n = r(29902),
            i = r(63501),
            o = n.RegExp;
          t.exports = {
            correct: !i(function () {
              var t = !0;
              try {
                o(".", "d");
              } catch (e) {
                t = !1;
              }
              var e = {},
                r = "",
                n = t ? "dgimsy" : "gimsy",
                i = function (t, n) {
                  Object.defineProperty(e, t, {
                    get: function () {
                      return (r += n), !0;
                    },
                  });
                },
                a = {
                  dotAll: "s",
                  global: "g",
                  ignoreCase: "i",
                  multiline: "m",
                  sticky: "y",
                };
              for (var s in (t && (a.hasIndices = "d"), a)) i(s, a[s]);
              return (
                Object.getOwnPropertyDescriptor(o.prototype, "flags").get.call(
                  e
                ) !== n || r !== n
              );
            }),
          };
        },
        46161: function (t, e, r) {
          "use strict";
          var n = r(21489);
          t.exports = function () {
            var t = n(this),
              e = "";
            return (
              t.hasIndices && (e += "d"),
              t.global && (e += "g"),
              t.ignoreCase && (e += "i"),
              t.multiline && (e += "m"),
              t.dotAll && (e += "s"),
              t.unicode && (e += "u"),
              t.unicodeSets && (e += "v"),
              t.sticky && (e += "y"),
              e
            );
          };
        },
        56524: function (t, e, r) {
          "use strict";
          var n = r(62635),
            i = r(74823),
            o = r(60003),
            a = r(66487),
            s = r(46161),
            c = RegExp.prototype;
          t.exports = a.correct
            ? function (t) {
                return t.flags;
              }
            : function (t) {
                return !a.correct && o(c, t) && !i(t, "flags")
                  ? n(s, t)
                  : t.flags;
              };
        },
        64903: function (t, e, r) {
          "use strict";
          var n = r(63501),
            i = r(29902).RegExp,
            o = n(function () {
              var t = i("a", "y");
              return (t.lastIndex = 2), null !== t.exec("abcd");
            }),
            a =
              o ||
              n(function () {
                return !i("a", "y").sticky;
              });
          t.exports = {
            BROKEN_CARET:
              o ||
              n(function () {
                var t = i("^r", "gy");
                return (t.lastIndex = 2), null !== t.exec("str");
              }),
            MISSED_STICKY: a,
            UNSUPPORTED_Y: o,
          };
        },
        39369: function (t, e, r) {
          "use strict";
          var n = r(63501),
            i = r(29902).RegExp;
          t.exports = n(function () {
            var t = i(".", "s");
            return !(t.dotAll && t.test("\n") && "s" === t.flags);
          });
        },
        83516: function (t, e, r) {
          "use strict";
          var n = r(63501),
            i = r(29902).RegExp;
          t.exports = n(function () {
            var t = i("(?<a>b)", "g");
            return (
              "b" !== t.exec("b").groups.a || "bc" !== "b".replace(t, "$<a>c")
            );
          });
        },
        47660: function (t, e, r) {
          "use strict";
          var n = r(35803),
            i = TypeError;
          t.exports = function (t) {
            if (n(t)) throw new i("Can't call method on " + t);
            return t;
          };
        },
        35871: function (t, e, r) {
          "use strict";
          var n = r(29902),
            i = r(34498),
            o = Object.getOwnPropertyDescriptor;
          t.exports = function (t) {
            if (!i) return n[t];
            var e = o(n, t);
            return e && e.value;
          };
        },
        87232: function (t) {
          "use strict";
          t.exports =
            Object.is ||
            function (t, e) {
              return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e;
            };
        },
        18031: function (t, e, r) {
          "use strict";
          var n = r(59285),
            i = r(38548),
            o = r(22381),
            a = r(34498),
            s = o("species");
          t.exports = function (t) {
            var e = n(t);
            a &&
              e &&
              !e[s] &&
              i(e, s, {
                configurable: !0,
                get: function () {
                  return this;
                },
              });
          };
        },
        48649: function (t, e, r) {
          "use strict";
          var n = r(41039).f,
            i = r(74823),
            o = r(22381)("toStringTag");
          t.exports = function (t, e, r) {
            t && !r && (t = t.prototype),
              t && !i(t, o) && n(t, o, { configurable: !0, value: e });
          };
        },
        9213: function (t, e, r) {
          "use strict";
          var n = r(37955),
            i = r(66414),
            o = n("keys");
          t.exports = function (t) {
            return o[t] || (o[t] = i(t));
          };
        },
        48339: function (t, e, r) {
          "use strict";
          var n = r(13601),
            i = r(29902),
            o = r(5739),
            a = "__core-js_shared__",
            s = (t.exports = i[a] || o(a, {}));
          (s.versions || (s.versions = [])).push({
            version: "3.50.0",
            mode: n ? "pure" : "global",
            copyright:
              "\xa9 2013–2025 Denis Pushkarev (zloirock.ru), 2025–2026 CoreJS Company (core-js.io). All rights reserved.",
            license: "https://github.com/zloirock/core-js/blob/v3.50.0/LICENSE",
            source: "https://github.com/zloirock/core-js",
          });
        },
        37955: function (t, e, r) {
          "use strict";
          var n = r(48339),
            i = Object.create || Object;
          t.exports = function (t, e) {
            return n[t] || (n[t] = e || i(null));
          };
        },
        55631: function (t, e, r) {
          "use strict";
          var n = r(21489),
            i = r(82226),
            o = r(35803),
            a = r(22381)("species");
          t.exports = function (t, e) {
            var r,
              s = n(t).constructor;
            return void 0 === s || o((r = n(s)[a])) ? e : i(r);
          };
        },
        59277: function (t, e, r) {
          "use strict";
          var n = r(43038),
            i = r(56337),
            o = r(63353),
            a = r(47660),
            s = n("".charAt),
            c = n("".charCodeAt),
            u = n("".slice),
            f = function (t) {
              return function (e, r) {
                var n,
                  f,
                  l = o(a(e)),
                  h = i(r),
                  p = l.length;
                return h < 0 || h >= p
                  ? t
                    ? ""
                    : void 0
                  : (n = c(l, h)) < 55296 ||
                    n > 56319 ||
                    h + 1 === p ||
                    (f = c(l, h + 1)) < 56320 ||
                    f > 57343
                  ? t
                    ? s(l, h)
                    : n
                  : t
                  ? u(l, h, h + 2)
                  : ((n - 55296) << 10) + (f - 56320) + 65536;
              };
            };
          t.exports = { codeAt: f(!1), charAt: f(!0) };
        },
        82783: function (t, e, r) {
          "use strict";
          var n = r(43038),
            i = /[^\0-\u007E]/,
            o = /[.\u3002\uFF0E\uFF61]/g,
            a = "Overflow: input needs wider integers to process",
            s = RangeError,
            c = n(o.exec),
            u = Math.floor,
            f = String.fromCharCode,
            l = n("".charCodeAt),
            h = n([].join),
            p = n([].push),
            d = n("".replace),
            v = n("".split),
            g = n("".toLowerCase),
            m = function (t) {
              for (var e = [], r = 0, n = t.length; r < n; ) {
                var i = l(t, r++);
                if (i >= 55296 && i <= 56319 && r < n) {
                  var o = l(t, r++);
                  (64512 & o) == 56320
                    ? p(e, ((1023 & i) << 10) + (1023 & o) + 65536)
                    : (p(e, i), r--);
                } else p(e, i);
              }
              return e;
            },
            y = function (t) {
              return t + 22 + 75 * (t < 26);
            },
            b = function (t, e, r) {
              var n = 0;
              for (t = r ? u(t / 700) : t >> 1, t += u(t / e); t > 455; )
                (t = u(t / 35)), (n += 36);
              return u(n + (36 * t) / (t + 38));
            },
            w = function (t) {
              var e,
                r,
                n = [],
                i = (t = m(t)).length,
                o = 128,
                c = 0,
                l = 72;
              for (e = 0; e < t.length; e++) (r = t[e]) < 128 && p(n, f(r));
              var d = n.length,
                v = d;
              for (d && p(n, "-"); v < i; ) {
                var g = 0x7fffffff;
                for (e = 0; e < t.length; e++)
                  (r = t[e]) >= o && r < g && (g = r);
                var w = v + 1;
                if (g - o > u((0x7fffffff - c) / w)) throw new s(a);
                for (c += (g - o) * w, o = g, e = 0; e < t.length; e++) {
                  if ((r = t[e]) < o && ++c > 0x7fffffff) throw new s(a);
                  if (r === o) {
                    for (var S = c, O = 36; ; ) {
                      var E = O <= l ? 1 : O >= l + 26 ? 26 : O - l;
                      if (S < E) break;
                      var _ = S - E,
                        x = 36 - E;
                      p(n, f(y(E + (_ % x)))), (S = u(_ / x)), (O += 36);
                    }
                    p(n, f(y(S))), (l = b(c, w, v === d)), (c = 0), v++;
                  }
                }
                c++, o++;
              }
              return h(n, "");
            };
          t.exports = function (t) {
            var e,
              r,
              n = [],
              a = v(d(g(t), o, "."), ".");
            for (e = 0; e < a.length; e++)
              p(n, c(i, (r = a[e])) ? "xn--" + w(r) : r);
            return h(n, ".");
          };
        },
        74564: function (t, e, r) {
          "use strict";
          var n = r(43038),
            i = r(47660),
            o = r(63353),
            a = r(37442),
            s = n("".replace),
            c = RegExp("^[" + a + "]+"),
            u = RegExp("(^|[^" + a + "])[" + a + "]+$"),
            f = function (t) {
              return function (e) {
                var r = o(i(e));
                return (
                  1 & t && (r = s(r, c, "")), 2 & t && (r = s(r, u, "$1")), r
                );
              };
            };
          t.exports = { start: f(1), end: f(2), trim: f(3) };
        },
        42377: function (t, e, r) {
          "use strict";
          var n = r(28041),
            i = r(63501),
            o = r(29902).String;
          t.exports =
            !!Object.getOwnPropertySymbols &&
            !i(function () {
              var t = Symbol("symbol detection");
              return (
                !o(t) ||
                !(Object(t) instanceof Symbol) ||
                (!Symbol.sham && n && n < 41)
              );
            });
        },
        95123: function (t, e, r) {
          "use strict";
          var n,
            i,
            o,
            a,
            s = r(29902),
            c = r(24279),
            u = r(56046),
            f = r(67895),
            l = r(74823),
            h = r(63501),
            p = r(54879),
            d = r(23198),
            v = r(96613),
            g = r(73494),
            m = r(68110),
            y = r(32307),
            b = s.setImmediate,
            w = s.clearImmediate,
            S = s.process,
            O = s.Dispatch,
            E = s.Function,
            _ = s.MessageChannel,
            x = s.String,
            P = 0,
            A = {},
            T = "onreadystatechange";
          h(function () {
            n = s.location;
          });
          var I = function (t) {
              if (l(A, t)) {
                var e = A[t];
                delete A[t], e();
              }
            },
            R = function (t) {
              return function () {
                I(t);
              };
            },
            j = function (t) {
              I(t.data);
            },
            k = function (t) {
              s.postMessage(x(t), n.protocol + "//" + n.host);
            };
          (b && w) ||
            ((b = function (t) {
              g(arguments.length, 1);
              var e = f(t) ? t : E(t),
                r = d(arguments, 1);
              return (
                (A[++P] = function () {
                  c(e, void 0, r);
                }),
                i(P),
                P
              );
            }),
            (w = function (t) {
              delete A[t];
            }),
            y
              ? (i = function (t) {
                  S.nextTick(R(t));
                })
              : O && O.now
              ? (i = function (t) {
                  O.now(R(t));
                })
              : _ && !m
              ? ((a = (o = new _()).port2),
                (o.port1.onmessage = j),
                (i = u(a.postMessage, a)))
              : s.addEventListener &&
                f(s.postMessage) &&
                !s.importScripts &&
                n &&
                "file:" !== n.protocol &&
                !h(k)
              ? ((i = k), s.addEventListener("message", j, !1))
              : (i =
                  T in v("script")
                    ? function (t) {
                        p.appendChild(v("script"))[T] = function () {
                          p.removeChild(this), I(t);
                        };
                      }
                    : function (t) {
                        setTimeout(R(t), 0);
                      })),
            (t.exports = { set: b, clear: w });
        },
        28660: function (t, e, r) {
          "use strict";
          var n = r(56337),
            i = Math.max,
            o = Math.min;
          t.exports = function (t, e) {
            var r = n(t);
            return r < 0 ? i(r + e, 0) : o(r, e);
          };
        },
        2083: function (t, e, r) {
          "use strict";
          var n = r(81453),
            i = r(47660);
          t.exports = function (t) {
            return n(i(t));
          };
        },
        56337: function (t, e, r) {
          "use strict";
          var n = r(66547);
          t.exports = function (t) {
            var e = +t;
            return e != e || 0 === e ? 0 : n(e);
          };
        },
        11480: function (t, e, r) {
          "use strict";
          var n = r(56337),
            i = Math.min;
          t.exports = function (t) {
            var e = n(t);
            return e > 0 ? i(e, 0x1fffffffffffff) : 0;
          };
        },
        7759: function (t, e, r) {
          "use strict";
          var n = r(47660),
            i = Object;
          t.exports = function (t) {
            return i(n(t));
          };
        },
        92263: function (t, e, r) {
          "use strict";
          var n = r(62635),
            i = r(74252),
            o = r(51475),
            a = r(32072),
            s = r(12008),
            c = r(22381),
            u = TypeError,
            f = c("toPrimitive");
          t.exports = function (t, e) {
            if (!i(t) || o(t)) return t;
            var r,
              c = a(t, f);
            if (c) {
              if (
                (void 0 === e && (e = "default"), !i((r = n(c, t, e))) || o(r))
              )
                return r;
              throw new u("Can't convert object to primitive value");
            }
            return void 0 === e && (e = "number"), s(t, e);
          };
        },
        51627: function (t, e, r) {
          "use strict";
          var n = r(92263),
            i = r(51475);
          t.exports = function (t) {
            var e = n(t, "string");
            return i(e) ? e : e + "";
          };
        },
        96414: function (t, e, r) {
          "use strict";
          var n = r(22381)("toStringTag"),
            i = {};
          (i[n] = "z"), (t.exports = "[object z]" === String(i));
        },
        63353: function (t, e, r) {
          "use strict";
          var n = r(58333),
            i = String;
          t.exports = function (t) {
            if ("Symbol" === n(t))
              throw TypeError("Cannot convert a Symbol value to a string");
            return i(t);
          };
        },
        21437: function (t) {
          "use strict";
          var e = String;
          t.exports = function (t) {
            try {
              return e(t);
            } catch (t) {
              return "Object";
            }
          };
        },
        66414: function (t, e, r) {
          "use strict";
          var n = r(43038),
            i = 0,
            o = Math.random(),
            a = n((1.1).toString);
          t.exports = function (t) {
            return "Symbol(" + (void 0 === t ? "" : t) + ")_" + a(++i + o, 36);
          };
        },
        2118: function (t, e, r) {
          "use strict";
          var n = r(63501),
            i = r(22381),
            o = r(34498),
            a = r(13601),
            s = i("iterator");
          t.exports = !n(function () {
            var t = new URL("b?a=1&b=2&c=3", "https://a"),
              e = t.searchParams,
              r = new URLSearchParams("a=1&a=2&b=3"),
              n = "";
            return (
              (t.pathname = "c%20d"),
              e.forEach(function (t, r) {
                e.delete("b"), (n += r + t);
              }),
              r.delete("a", 2),
              r.delete("b", void 0),
              (a &&
                (!t.toJSON ||
                  !r.has("a", 1) ||
                  r.has("a", 2) ||
                  !r.has("a", void 0) ||
                  r.has("b"))) ||
                (!e.size && (a || !o)) ||
                !e.sort ||
                "https://a/c%20d?a=1&c=3" !== t.href ||
                "3" !== e.get("c") ||
                "a=1" !== String(new URLSearchParams("?a=1")) ||
                !e[s] ||
                "a" !== new URL("https://a@b").username ||
                "b" !==
                  new URLSearchParams(new URLSearchParams("a=b")).get("a") ||
                "xn--e1aybc" !== new URL("https://тест").host ||
                "#%D0%B1" !== new URL("https://a#б").hash ||
                "a1c3" !== n ||
                "x" !== new URL("https://x", void 0).host
            );
          });
        },
        78080: function (t, e, r) {
          "use strict";
          r(38391);
          var n = r(59285),
            i = r(43038),
            o = String.fromCharCode,
            a = n("String", "fromCodePoint"),
            s = encodeURIComponent,
            c = parseInt,
            u = i("".charAt),
            f = i([].push),
            l = i("".replace),
            h = i("".slice),
            p = i(/./.exec),
            d = /^[0-9a-f]+$/i,
            v = /[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDFFF]/g,
            g = function (t, e) {
              var r = h(t, e, e + 2);
              return p(d, r) ? c(r, 16) : NaN;
            },
            m = function (t) {
              for (var e = 0, r = 128; r > 0 && (t & r) != 0; r >>= 1) e++;
              return e;
            },
            y = function (t) {
              var e = null,
                r = t.length;
              switch (r) {
                case 1:
                  e = t[0];
                  break;
                case 2:
                  e = ((31 & t[0]) << 6) | (63 & t[1]);
                  break;
                case 3:
                  e = ((15 & t[0]) << 12) | ((63 & t[1]) << 6) | (63 & t[2]);
                  break;
                case 4:
                  e =
                    ((7 & t[0]) << 18) |
                    ((63 & t[1]) << 12) |
                    ((63 & t[2]) << 6) |
                    (63 & t[3]);
              }
              return null === e ||
                e > 1114111 ||
                (e >= 55296 && e <= 57343) ||
                e < (r > 3 ? 65536 : r > 2 ? 2048 : 128 * (r > 1))
                ? null
                : e;
            },
            b = function (t) {
              return 2 === t.length ? t : " ";
            };
          t.exports = {
            decode: function (t) {
              for (var e = t.length, r = "", n = 0; n < e; ) {
                var i = u(t, n);
                if ("%" === i) {
                  if ("%" === u(t, n + 1) || n + 3 > e) {
                    (r += "%"), n++;
                    continue;
                  }
                  var s = g(t, n + 1);
                  if (s != s) {
                    (r += i), n++;
                    continue;
                  }
                  n += 2;
                  var c = m(s);
                  if (0 === c) i = o(s);
                  else {
                    if (1 === c || c > 4) {
                      (r += " "), n++;
                      continue;
                    }
                    for (
                      var l = [s], h = 1;
                      h < c && !(++n + 3 > e) && "%" === u(t, n);

                    ) {
                      var p = g(t, n + 1);
                      if (
                        p != p ||
                        p > 191 ||
                        p < 128 ||
                        (1 === h &&
                          ((224 === s && p < 160) ||
                            (237 === s && p > 159) ||
                            (240 === s && p < 144) ||
                            (244 === s && p > 143)))
                      )
                        break;
                      f(l, p), (n += 2), h++;
                    }
                    if (l.length !== c) {
                      r += " ";
                      continue;
                    }
                    var d = y(l);
                    if (null === d) {
                      for (var v = 0; v < c; v++) r += " ";
                      n++;
                      continue;
                    }
                    i = a(d);
                  }
                }
                (r += i), n++;
              }
              return r;
            },
            encode: function (t) {
              try {
                return s(t);
              } catch (e) {
                return s(l(t, v, b));
              }
            },
          };
        },
        96994: function (t, e, r) {
          "use strict";
          t.exports =
            r(42377) && !Symbol.sham && "symbol" == typeof Symbol.iterator;
        },
        98876: function (t, e, r) {
          "use strict";
          var n = r(34498),
            i = r(63501);
          t.exports =
            n &&
            i(function () {
              return (
                42 !==
                Object.defineProperty(function () {}, "prototype", {
                  value: 42,
                  writable: !1,
                }).prototype
              );
            });
        },
        73494: function (t) {
          "use strict";
          var e = TypeError;
          t.exports = function (t, r) {
            if (t < r) throw new e("Not enough arguments");
            return t;
          };
        },
        31384: function (t, e, r) {
          "use strict";
          var n = r(29902),
            i = r(67895),
            o = n.WeakMap;
          t.exports = i(o) && /native code/.test(String(o));
        },
        22381: function (t, e, r) {
          "use strict";
          var n = r(29902),
            i = r(37955),
            o = r(74823),
            a = r(66414),
            s = r(42377),
            c = r(96994),
            u = n.Symbol,
            f = i("wks"),
            l = c ? u.for || u : (u && u.withoutSetter) || a;
          t.exports = function (t) {
            return (
              o(f, t) || (f[t] = s && o(u, t) ? u[t] : l("Symbol." + t)), f[t]
            );
          };
        },
        37442: function (t) {
          "use strict";
          t.exports = "	\n\v\f\r \xa0              　\u2028\u2029\uFEFF";
        },
        47391: function (t, e, r) {
          "use strict";
          var n = r(70872),
            i = r(18741),
            o = r(7759),
            a = r(36076),
            s = r(56337),
            c = r(30299);
          n(
            { target: "Array", proto: !0 },
            {
              flat: function () {
                var t = arguments.length ? arguments[0] : void 0,
                  e = o(this),
                  r = a(e),
                  n = void 0 === t ? 1 : s(t),
                  u = c(e, 0);
                return i(u, e, e, r, 0, n), u;
              },
            }
          );
        },
        8101: function (t, e, r) {
          "use strict";
          var n = r(70872),
            i = r(3831).includes,
            o = r(63501),
            a = r(36571),
            s = o(function () {
              return ![,].includes();
            }),
            c = o(function () {
              return [, 1].includes(void 0, 1);
            });
          n(
            { target: "Array", proto: !0, forced: s || c },
            {
              includes: function (t) {
                return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
              },
            }
          ),
            a("includes");
        },
        61526: function (t, e, r) {
          "use strict";
          var n = r(2083),
            i = r(36571),
            o = r(4027),
            a = r(83751),
            s = r(41039).f,
            c = r(27362),
            u = r(73595),
            f = r(13601),
            l = r(34498),
            h = "Array Iterator",
            p = a.set,
            d = a.getterFor(h);
          t.exports = c(
            Array,
            "Array",
            function (t, e) {
              p(this, { type: h, target: n(t), index: 0, kind: e });
            },
            function () {
              var t = d(this),
                e = t.target,
                r = t.index++;
              if (!e || r >= e.length) return (t.target = null), u(void 0, !0);
              switch (t.kind) {
                case "keys":
                  return u(r, !1);
                case "values":
                  return u(e[r], !1);
              }
              return u([r, e[r]], !1);
            },
            "values"
          );
          var v = (o.Arguments = o.Array);
          if (
            (i("keys"),
            i("values"),
            i("entries"),
            !f && l && "values" !== v.name)
          )
            try {
              s(v, "name", { value: "values" });
            } catch (t) {}
        },
        84179: function (t, e, r) {
          "use strict";
          var n = r(70872),
            i = r(29902);
          n({ global: !0, forced: i.globalThis !== i }, { globalThis: i });
        },
        86957: function (t, e, r) {
          "use strict";
          var n = r(70872),
            i = r(37241);
          n(
            { target: "Number", stat: !0, forced: Number.parseInt !== i },
            { parseInt: i }
          );
        },
        47416: function (t, e, r) {
          "use strict";
          var n = r(70872),
            i = r(26471).entries;
          n(
            { target: "Object", stat: !0 },
            {
              entries: function (t) {
                return i(t);
              },
            }
          );
        },
        20813: function (t, e, r) {
          "use strict";
          var n = r(70872),
            i = r(62635),
            o = r(66748),
            a = r(76865),
            s = r(31429),
            c = r(78774);
          n(
            { target: "Promise", stat: !0, forced: r(82811) },
            {
              all: function (t) {
                var e = this,
                  r = a.f(e),
                  n = r.resolve,
                  u = r.reject,
                  f = s(function () {
                    var r = o(e.resolve),
                      a = [],
                      s = 0,
                      f = 1;
                    c(t, function (t) {
                      var o = s++,
                        c = !1;
                      f++,
                        i(r, e, t).then(function (t) {
                          !c && ((c = !0), (a[o] = t), --f || n(a));
                        }, u);
                    }),
                      --f || n(a);
                  });
                return f.error && u(f.value), r.promise;
              },
            }
          );
        },
        70053: function (t, e, r) {
          "use strict";
          var n = r(70872),
            i = r(13601),
            o = r(40834).CONSTRUCTOR,
            a = r(96244),
            s = r(59285),
            c = r(67895),
            u = r(10262),
            f = a && a.prototype;
          if (
            (n(
              { target: "Promise", proto: !0, forced: o, real: !0 },
              {
                catch: function (t) {
                  return this.then(void 0, t);
                },
              }
            ),
            !i && c(a))
          ) {
            var l = s("Promise").prototype.catch;
            f.catch !== l && u(f, "catch", l, { unsafe: !0 });
          }
        },
        15766: function (t, e, r) {
          "use strict";
          var n,
            i,
            o,
            a,
            s = r(70872),
            c = r(13601),
            u = r(32307),
            f = r(29902),
            l = r(63345),
            h = r(62635),
            p = r(10262),
            d = r(70029),
            v = r(48649),
            g = r(18031),
            m = r(66748),
            y = r(67895),
            b = r(74252),
            w = r(63001),
            S = r(55631),
            O = r(95123).set,
            E = r(82133),
            _ = r(8559),
            x = r(31429),
            P = r(66599),
            A = r(83751),
            T = r(96244),
            I = r(40834),
            R = r(76865),
            j = "Promise",
            k = I.CONSTRUCTOR,
            L = I.REJECTION_EVENT,
            D = I.SUBCLASSING,
            N = A.getterFor(j),
            C = A.set,
            M = T && T.prototype,
            U = T,
            B = M,
            W = f.TypeError,
            V = f.document,
            F = f.process,
            K = R.f,
            H = K,
            G = !!(V && V.createEvent && f.dispatchEvent),
            z = "unhandledrejection",
            q = function (t) {
              var e;
              return !!(b(t) && y((e = t.then))) && e;
            },
            J = function (t, e) {
              var r,
                n,
                i,
                o = e.value,
                a = 1 === e.state,
                s = a ? t.ok : t.fail,
                c = t.resolve,
                u = t.reject,
                f = t.domain;
              try {
                s
                  ? (a || (2 === e.rejection && Z(e), (e.rejection = 1)),
                    !0 === s
                      ? (r = o)
                      : (f && f.enter(), (r = s(o)), f && (f.exit(), (i = !0))),
                    r === t.promise
                      ? u(new W("Promise-chain cycle"))
                      : (n = q(r))
                      ? h(n, r, c, u)
                      : c(r))
                  : u(o);
              } catch (t) {
                f && !i && f.exit(), u(t);
              }
            },
            Q = function (t, e) {
              t.notified ||
                ((t.notified = !0),
                E(function () {
                  for (var r, n = t.reactions; (r = n.get()); ) J(r, t);
                  (t.notified = !1), e && !t.rejection && X(t);
                }));
            },
            Y = function (t, e, r) {
              var n, i;
              G
                ? (((n = V.createEvent("Event")).promise = e),
                  (n.reason = r),
                  n.initEvent(t, !1, !0),
                  f.dispatchEvent(n))
                : (n = { promise: e, reason: r }),
                !L && (i = f["on" + t])
                  ? i(n)
                  : t === z && _("Unhandled promise rejection", r);
            },
            X = function (t) {
              h(O, f, function () {
                var e,
                  r = t.facade,
                  n = t.value;
                if (
                  $(t) &&
                  ((e = x(function () {
                    u ? F.emit("unhandledRejection", n, r) : Y(z, r, n);
                  })),
                  (t.rejection = u || $(t) ? 2 : 1),
                  e.error)
                )
                  throw e.value;
              });
            },
            $ = function (t) {
              return 1 !== t.rejection && !t.parent;
            },
            Z = function (t) {
              h(O, f, function () {
                var e = t.facade;
                u
                  ? F.emit("rejectionHandled", e)
                  : Y("rejectionhandled", e, t.value);
              });
            },
            tt = function (t, e, r) {
              return function (n) {
                t(e, n, r);
              };
            },
            te = function (t, e, r) {
              t.done ||
                ((t.done = !0),
                r && (t = r),
                (t.value = e),
                (t.state = 2),
                Q(t, !0));
            },
            tr = function (t, e, r) {
              if (!t.done) {
                (t.done = !0), r && (t = r);
                try {
                  if (t.facade === e)
                    throw new W("Promise can't be resolved itself");
                  var n = q(e);
                  n
                    ? E(function () {
                        var r = { done: !1 };
                        try {
                          h(n, e, tt(tr, r, t), tt(te, r, t));
                        } catch (e) {
                          te(r, e, t);
                        }
                      })
                    : ((t.value = e), (t.state = 1), Q(t, !1));
                } catch (e) {
                  te({ done: !1 }, e, t);
                }
              }
            };
          if (
            k &&
            ((B = (U = function (t) {
              w(this, B), m(t), h(n, this);
              var e = N(this);
              try {
                t(tt(tr, e), tt(te, e));
              } catch (t) {
                te(e, t);
              }
            }).prototype),
            ((n = function (t) {
              C(this, {
                type: j,
                done: !1,
                notified: !1,
                parent: !1,
                reactions: new P(),
                rejection: !1,
                state: 0,
                value: null,
              });
            }).prototype = p(B, "then", function (t, e) {
              var r = N(this),
                n = K(S(this, U));
              return (
                (r.parent = !0),
                (n.ok = !y(t) || t),
                (n.fail = y(e) && e),
                (n.domain = u ? F.domain : void 0),
                0 === r.state
                  ? r.reactions.add(n)
                  : E(function () {
                      J(n, r);
                    }),
                n.promise
              );
            })),
            (i = function () {
              var t = new n(),
                e = N(t);
              (this.promise = t),
                (this.resolve = tt(tr, e)),
                (this.reject = tt(te, e));
            }),
            (R.f = K =
              function (t) {
                return t === U || t === o ? new i(t) : H(t);
              }),
            !c && y(T) && M !== Object.prototype)
          ) {
            (a = M.then),
              D ||
                p(
                  M,
                  "then",
                  function (t, e) {
                    var r = this;
                    return new U(function (t, e) {
                      h(a, r, t, e);
                    }).then(t, e);
                  },
                  { unsafe: !0 }
                );
            try {
              delete M.constructor;
            } catch (t) {}
            d && d(M, B);
          }
          s(
            { global: !0, constructor: !0, wrap: !0, forced: k },
            { Promise: U }
          ),
            (o = l.Promise),
            v(U, j, !1, !0),
            g(j);
        },
        18344: function (t, e, r) {
          "use strict";
          r(15766), r(20813), r(70053), r(70181), r(13043), r(78362);
        },
        70181: function (t, e, r) {
          "use strict";
          var n = r(70872),
            i = r(62635),
            o = r(66748),
            a = r(76865),
            s = r(31429),
            c = r(78774);
          n(
            { target: "Promise", stat: !0, forced: r(82811) },
            {
              race: function (t) {
                var e = this,
                  r = a.f(e),
                  n = r.reject,
                  u = s(function () {
                    var a = o(e.resolve);
                    c(t, function (t) {
                      i(a, e, t).then(r.resolve, n);
                    });
                  });
                return u.error && n(u.value), r.promise;
              },
            }
          );
        },
        13043: function (t, e, r) {
          "use strict";
          var n = r(70872),
            i = r(76865);
          n(
            { target: "Promise", stat: !0, forced: r(40834).CONSTRUCTOR },
            {
              reject: function (t) {
                var e = i.f(this);
                return (0, e.reject)(t), e.promise;
              },
            }
          );
        },
        78362: function (t, e, r) {
          "use strict";
          var n = r(70872),
            i = r(59285),
            o = r(13601),
            a = r(96244),
            s = r(40834).CONSTRUCTOR,
            c = r(9016),
            u = i("Promise"),
            f = o && !s;
          n(
            { target: "Promise", stat: !0, forced: o || s },
            {
              resolve: function (t) {
                return c(f && this === u ? a : this, t);
              },
            }
          );
        },
        35665: function (t, e, r) {
          "use strict";
          var n = r(70872),
            i = r(27957);
          n(
            { target: "RegExp", proto: !0, forced: /./.exec !== i },
            { exec: i }
          );
        },
        38391: function (t, e, r) {
          "use strict";
          var n = r(70872),
            i = r(43038),
            o = r(28660),
            a = RangeError,
            s = String.fromCharCode,
            c = String.fromCodePoint,
            u = i([].join);
          n(
            {
              target: "String",
              stat: !0,
              arity: 1,
              forced: !!c && 1 !== c.length,
            },
            {
              fromCodePoint: function (t) {
                for (var e, r = [], n = arguments.length, i = 0; n > i; ) {
                  if (((e = +arguments[i]), o(e, 1114111) !== e))
                    throw new a(e + " is not a valid code point");
                  r[i++] =
                    e < 65536
                      ? s(e)
                      : s(((e -= 65536) >> 10) + 55296, (e % 1024) + 56320);
                }
                return u(r, "");
              },
            }
          );
        },
        21245: function (t, e, r) {
          "use strict";
          var n = r(70872),
            i = r(43038),
            o = r(68345),
            a = r(47660),
            s = r(63353),
            c = r(39246),
            u = i("".indexOf);
          n(
            { target: "String", proto: !0, forced: !c("includes") },
            {
              includes: function (t) {
                return !!~u(
                  s(a(this)),
                  s(o(t)),
                  arguments.length > 1 ? arguments[1] : void 0
                );
              },
            }
          );
        },
        47486: function (t, e, r) {
          "use strict";
          var n = r(59277).charAt,
            i = r(63353),
            o = r(83751),
            a = r(27362),
            s = r(73595),
            c = "String Iterator",
            u = o.set,
            f = o.getterFor(c);
          a(
            String,
            "String",
            function (t) {
              u(this, { type: c, string: i(t), index: 0 });
            },
            function () {
              var t,
                e = f(this),
                r = e.string,
                i = e.index;
              return i >= r.length
                ? s(void 0, !0)
                : ((t = n(r, i)), (e.index += t.length), s(t, !1));
            }
          );
        },
        68661: function (t, e, r) {
          "use strict";
          var n = r(70872),
            i = r(62635),
            o = r(81062),
            a = r(70364),
            s = r(73595),
            c = r(47660),
            u = r(11480),
            f = r(63353),
            l = r(21489),
            h = r(74252),
            p = r(59802),
            d = r(18758),
            v = r(56524),
            g = r(32072),
            m = r(10262),
            y = r(63501),
            b = r(22381),
            w = r(55631),
            S = r(79007),
            O = r(27520),
            E = r(83751),
            _ = r(13601),
            x = b("matchAll"),
            P = "RegExp String",
            A = P + " Iterator",
            T = E.set,
            I = E.getterFor(A),
            R = RegExp.prototype,
            j = TypeError,
            k = o("".indexOf),
            L = o("".matchAll),
            D =
              !!L &&
              !y(function () {
                L("a", /./);
              }),
            N = a(
              function (t, e, r, n) {
                T(this, {
                  type: A,
                  regexp: t,
                  string: e,
                  global: r,
                  unicode: n,
                  done: !1,
                });
              },
              P,
              function () {
                var t = I(this);
                if (t.done) return s(void 0, !0);
                var e = t.regexp,
                  r = t.string,
                  n = O(e, r);
                return null === n
                  ? ((t.done = !0), s(void 0, !0))
                  : (t.global
                      ? "" === f(n[0]) &&
                        (e.lastIndex = S(r, u(e.lastIndex), t.unicode))
                      : (t.done = !0),
                    s(n, !1));
              }
            ),
            C = function (t) {
              var e,
                r,
                n,
                i = l(this),
                o = f(t),
                a = w(i, RegExp),
                s = f(v(i));
              return (
                (e = new a(a === RegExp ? i.source : i, s)),
                (r = !!~k(s, "g")),
                (n = !!~k(s, "u") || !!~k(s, "v")),
                (e.lastIndex = u(i.lastIndex)),
                new N(e, o, r, n)
              );
            };
          n(
            { target: "String", proto: !0, forced: D },
            {
              matchAll: function (t) {
                var e,
                  r,
                  n,
                  o = c(this);
                if (h(t)) {
                  if (d(t) && !~k(f(c(v(t))), "g"))
                    throw new j(
                      "`.matchAll` does not allow non-global regexes"
                    );
                  if (D) return L(o, t);
                  if (
                    (void 0 === (r = g(t, x)) &&
                      _ &&
                      "RegExp" === p(t) &&
                      (r = C),
                    r)
                  )
                    return i(r, t, o);
                } else if (D) return L(o, t);
                return (
                  (e = f(o)), (n = RegExp(t, "g")), _ ? i(C, n, e) : n[x](e)
                );
              },
            }
          ),
            _ || x in R || m(R, x, C);
        },
        21116: function (t, e, r) {
          "use strict";
          var n = r(62635),
            i = r(64130),
            o = r(21489),
            a = r(74252),
            s = r(47660),
            c = r(87232),
            u = r(63353),
            f = r(32072),
            l = r(27520);
          i("search", function (t, e, r) {
            return [
              function (e) {
                var r = s(this),
                  i = a(e) ? f(e, t) : void 0;
                if (i) return n(i, e, r);
                var o = u(r);
                return new RegExp(e)[t](o);
              },
              function (t) {
                var n = o(this),
                  i = u(t),
                  a = r(e, n, i);
                if (a.done) return a.value;
                var s = n.lastIndex;
                c(s, 0) || (n.lastIndex = 0);
                var f = l(n, i);
                return (
                  c(n.lastIndex, s) || (n.lastIndex = s),
                  null === f ? -1 : f.index
                );
              },
            ];
          });
        },
        74558: function (t, e, r) {
          "use strict";
          var n = r(62635),
            i = r(43038),
            o = r(64130),
            a = r(21489),
            s = r(74252),
            c = r(47660),
            u = r(55631),
            f = r(79007),
            l = r(11480),
            h = r(63353),
            p = r(32072),
            d = r(56524),
            v = r(27520),
            g = r(64903),
            m = r(63501),
            y = g.UNSUPPORTED_Y,
            b = Math.min,
            w = i([].push),
            S = i("".slice),
            O = i("".indexOf),
            E = !m(function () {
              var t = /(?:)/,
                e = t.exec;
              t.exec = function () {
                return e.apply(this, arguments);
              };
              var r = "ab".split(t);
              return 2 !== r.length || "a" !== r[0] || "b" !== r[1];
            }),
            _ =
              "c" === "abbc".split(/(b)*/)[1] ||
              4 !== "test".split(/(?:)/, -1).length ||
              2 !== "ab".split(/(?:ab)*/).length ||
              4 !== ".".split(/(.?)(.?)/).length ||
              ".".split(/()()/).length > 1 ||
              "".split(/.?/).length;
          o(
            "split",
            function (t, e, r) {
              var i = "0".split(void 0, 0).length
                ? function (t, r) {
                    return void 0 === t && 0 === r ? [] : n(e, this, t, r);
                  }
                : e;
              return [
                function (e, r) {
                  var o = c(this),
                    a = s(e) ? p(e, t) : void 0;
                  return a ? n(a, e, o, r) : n(i, h(o), e, r);
                },
                function (t, n) {
                  var o = a(this),
                    s = h(t);
                  if (!_) {
                    var c = r(i, o, s, n, i !== e);
                    if (c.done) return c.value;
                  }
                  var p = u(o, RegExp),
                    g = h(d(o)),
                    m = !!~O(g, "u") || !!~O(g, "v");
                  y ? ~O(g, "g") || (g += "g") : ~O(g, "y") || (g += "y");
                  var E = new p(y ? "^(?:" + o.source + ")" : o, g),
                    x = void 0 === n ? 0xffffffff : n >>> 0;
                  if (0 === x) return [];
                  if (0 === s.length) return null === v(E, s) ? [s] : [];
                  for (var P = 0, A = 0, T = []; A < s.length; ) {
                    E.lastIndex = y ? 0 : A;
                    var I,
                      R = v(E, y ? S(s, A) : s);
                    if (
                      null === R ||
                      (I = b(l(E.lastIndex + (y ? A : 0)), s.length)) === P
                    )
                      A = f(s, A, m);
                    else {
                      if ((w(T, S(s, P, A)), T.length === x)) return T;
                      for (var j = 1; j <= R.length - 1; j++)
                        if ((w(T, R[j]), T.length === x)) return T;
                      A = P = I;
                    }
                  }
                  return w(T, S(s, P)), T;
                },
              ];
            },
            _ || !E,
            y
          );
        },
        46587: function (t, e, r) {
          "use strict";
          var n = r(29902),
            i = r(16622),
            o = r(46194),
            a = r(61526),
            s = r(49953),
            c = r(48649),
            u = r(22381)("iterator"),
            f = a.values,
            l = function (t, e) {
              if (t) {
                if (t[u] !== f)
                  try {
                    s(t, u, f);
                  } catch (e) {
                    t[u] = f;
                  }
                if ((c(t, e, !0), i[e])) {
                  for (var r in a)
                    if (t[r] !== a[r])
                      try {
                        s(t, r, a[r]);
                      } catch (e) {
                        t[r] = a[r];
                      }
                }
              }
            };
          for (var h in i) l(n[h] && n[h].prototype, h);
          l(o, "DOMTokenList");
        },
        30708: function (t, e, r) {
          "use strict";
          r(61526);
          var n = r(70872),
            i = r(29902),
            o = r(35871),
            a = r(62635),
            s = r(43038),
            c = r(34498),
            u = r(2118),
            f = r(78080),
            l = r(10262),
            h = r(38548),
            p = r(20989),
            d = r(48649),
            v = r(70364),
            g = r(83751),
            m = r(63001),
            y = r(67895),
            b = r(74823),
            w = r(56046),
            S = r(58333),
            O = r(21489),
            E = r(74252),
            _ = r(63353),
            x = r(84342),
            P = r(25334),
            A = r(50029),
            T = r(855),
            I = r(73595),
            R = r(73494),
            j = r(22381),
            k = r(62398),
            L = j("iterator"),
            D = "URLSearchParams",
            N = D + "Iterator",
            C = g.set,
            M = g.getterFor(D),
            U = g.getterFor(N),
            B = f.decode,
            W = f.encode,
            V = o("fetch"),
            F = o("Request"),
            K = o("Headers"),
            H = F && F.prototype,
            G = K && K.prototype,
            z = i.TypeError,
            q = s("".charAt),
            J = s([].join),
            Q = s([].push),
            Y = s("".replace),
            X = s([].shift),
            $ = s([].splice),
            Z = s("".split),
            tt = s("".slice),
            te = /\+/g,
            tr = function (t) {
              return B(Y(t, te, " "));
            },
            tn = /[!'()~]|%20/g,
            ti = {
              "!": "%21",
              "'": "%27",
              "(": "%28",
              ")": "%29",
              "~": "%7E",
              "%20": "+",
            },
            to = function (t) {
              return ti[t];
            },
            ta = function (t) {
              return Y(W(t), tn, to);
            },
            ts = v(
              function (t, e) {
                C(this, { type: N, target: M(t).entries, index: 0, kind: e });
              },
              D,
              function () {
                var t = U(this),
                  e = t.target,
                  r = t.index++;
                if (!e || r >= e.length)
                  return (t.target = null), I(void 0, !0);
                var n = e[r];
                switch (t.kind) {
                  case "keys":
                    return I(n.key, !1);
                  case "values":
                    return I(n.value, !1);
                }
                return I([n.key, n.value], !1);
              },
              !0
            ),
            tc = function (t) {
              (this.entries = []),
                (this.url = null),
                void 0 !== t &&
                  (E(t)
                    ? this.parseObject(t)
                    : this.parseQuery(
                        "string" == typeof t
                          ? "?" === q(t, 0)
                            ? tt(t, 1)
                            : t
                          : _(t)
                      ));
            };
          tc.prototype = {
            type: D,
            bindURL: function (t) {
              (this.url = t), this.update();
            },
            parseObject: function (t) {
              var e,
                r,
                n,
                i,
                o,
                s,
                c,
                u = this.entries,
                f = T(t);
              if (f)
                for (r = (e = A(t, f)).next; !(n = a(r, e)).done; ) {
                  if (
                    (s = a((o = (i = A(O(n.value))).next), i)).done ||
                    (c = a(o, i)).done ||
                    !a(o, i).done
                  )
                    throw new z("Expected sequence with length 2");
                  Q(u, { key: _(s.value), value: _(c.value) });
                }
              else for (var l in t) b(t, l) && Q(u, { key: l, value: _(t[l]) });
            },
            parseQuery: function (t) {
              if (t)
                for (
                  var e, r, n = this.entries, i = Z(t, "&"), o = 0;
                  o < i.length;

                )
                  (e = i[o++]).length &&
                    Q(n, { key: tr(X((r = Z(e, "=")))), value: tr(J(r, "=")) });
            },
            serialize: function () {
              for (var t, e = this.entries, r = [], n = 0; n < e.length; )
                Q(r, ta((t = e[n++]).key) + "=" + ta(t.value));
              return J(r, "&");
            },
            update: function () {
              (this.entries.length = 0), this.parseQuery(this.url.query);
            },
            updateURL: function () {
              this.url && this.url.update();
            },
          };
          var tu = function () {
              m(this, tf);
              var t = arguments.length > 0 ? arguments[0] : void 0,
                e = C(this, new tc(t));
              c || (this.size = e.entries.length);
            },
            tf = tu.prototype;
          if (
            (p(
              tf,
              {
                append: function (t, e) {
                  var r = M(this);
                  R(arguments.length, 2),
                    Q(r.entries, { key: _(t), value: _(e) }),
                    !c && this.size++,
                    r.updateURL();
                },
                delete: function (t) {
                  for (
                    var e = M(this),
                      r = R(arguments.length, 1),
                      n = e.entries,
                      i = _(t),
                      o = r < 2 ? void 0 : arguments[1],
                      a = void 0 === o ? o : _(o),
                      s = 0;
                    s < n.length;

                  ) {
                    var u = n[s];
                    u.key === i && (void 0 === a || u.value === a)
                      ? $(n, s, 1)
                      : s++;
                  }
                  c || (this.size = n.length), e.updateURL();
                },
                get: function (t) {
                  var e = M(this).entries;
                  R(arguments.length, 1);
                  for (var r = _(t), n = 0; n < e.length; n++)
                    if (e[n].key === r) return e[n].value;
                  return null;
                },
                getAll: function (t) {
                  var e = M(this).entries;
                  R(arguments.length, 1);
                  for (var r = _(t), n = [], i = 0; i < e.length; i++)
                    e[i].key === r && Q(n, e[i].value);
                  return n;
                },
                has: function (t) {
                  for (
                    var e = M(this).entries,
                      r = R(arguments.length, 1),
                      n = _(t),
                      i = r < 2 ? void 0 : arguments[1],
                      o = void 0 === i ? i : _(i),
                      a = 0;
                    a < e.length;

                  ) {
                    var s = e[a++];
                    if (s.key === n && (void 0 === o || s.value === o))
                      return !0;
                  }
                  return !1;
                },
                set: function (t, e) {
                  var r,
                    n = M(this);
                  R(arguments.length, 2);
                  for (
                    var i = n.entries, o = !1, a = _(t), s = _(e), u = 0;
                    u < i.length;
                    u++
                  )
                    (r = i[u]).key === a &&
                      (o ? $(i, u--, 1) : ((o = !0), (r.value = s)));
                  o || Q(i, { key: a, value: s }),
                    c || (this.size = i.length),
                    n.updateURL();
                },
                sort: function () {
                  var t = M(this);
                  k(t.entries, function (t, e) {
                    return t.key > e.key ? 1 : -1;
                  }),
                    t.updateURL();
                },
                forEach: function (t) {
                  for (
                    var e,
                      r = M(this).entries,
                      n = w(t, arguments.length > 1 ? arguments[1] : void 0),
                      i = 0;
                    i < r.length;

                  )
                    n((e = r[i++]).value, e.key, this);
                },
                keys: function () {
                  return new ts(this, "keys");
                },
                values: function () {
                  return new ts(this, "values");
                },
                entries: function () {
                  return new ts(this, "entries");
                },
              },
              { enumerable: !0 }
            ),
            l(tf, L, tf.entries, { name: "entries" }),
            l(
              tf,
              "toString",
              function () {
                return M(this).serialize();
              },
              { enumerable: !0 }
            ),
            c &&
              h(tf, "size", {
                get: function () {
                  return M(this).entries.length;
                },
                configurable: !0,
                enumerable: !0,
              }),
            d(tu, D),
            n(
              { global: !0, constructor: !0, forced: !u },
              { URLSearchParams: tu }
            ),
            !u && y(K))
          ) {
            var tl = s(G.has),
              th = s(G.set),
              tp = function (t) {
                if (E(t)) {
                  var e,
                    r = t.body;
                  if (S(r) === D)
                    return (
                      tl(
                        (e = t.headers ? new K(t.headers) : new K()),
                        "content-type"
                      ) ||
                        th(
                          e,
                          "content-type",
                          "application/x-www-form-urlencoded;charset=UTF-8"
                        ),
                      x(t, { body: P(0, _(r)), headers: P(0, e) })
                    );
                }
                return t;
              };
            if (
              (y(V) &&
                n(
                  {
                    global: !0,
                    enumerable: !0,
                    dontCallGetSet: !0,
                    forced: !0,
                  },
                  {
                    fetch: function (t) {
                      return V(t, arguments.length > 1 ? tp(arguments[1]) : {});
                    },
                  }
                ),
              y(F))
            ) {
              var td = function (t) {
                return (
                  m(this, H),
                  new F(t, arguments.length > 1 ? tp(arguments[1]) : {})
                );
              };
              (H.constructor = td),
                (td.prototype = H),
                n(
                  {
                    global: !0,
                    constructor: !0,
                    dontCallGetSet: !0,
                    forced: !0,
                  },
                  { Request: td }
                );
            }
          }
          t.exports = { URLSearchParams: tu, getState: M };
        },
        51506: function (t, e, r) {
          "use strict";
          r(30708);
        },
        14488: function (t, e, r) {
          "use strict";
          r(47486);
          var n,
            i = r(70872),
            o = r(34498),
            a = r(2118),
            s = r(29902),
            c = r(56046),
            u = r(43038),
            f = r(10262),
            l = r(38548),
            h = r(63001),
            p = r(74823),
            d = r(2931),
            v = r(49850),
            g = r(23198),
            m = r(59277).codeAt,
            y = r(82783),
            b = r(78080),
            w = r(63353),
            S = r(48649),
            O = r(73494),
            E = r(30708),
            _ = r(83751),
            x = _.set,
            P = _.getterFor("URL"),
            A = E.URLSearchParams,
            T = E.getState,
            I = b.decode,
            R = b.encode,
            j = s.URL,
            k = s.TypeError,
            L = s.parseInt,
            D = Math.floor,
            N = Math.pow,
            C = String.fromCharCode,
            M = u("".charAt),
            U = u(/./.exec),
            B = u([].join),
            W = u((1.1).toString),
            V = u([].pop),
            F = u([].push),
            K = u("".replace),
            H = u([].shift),
            G = u("".split),
            z = u("".indexOf),
            q = u("".slice),
            J = u("".toLowerCase),
            Q = u([].unshift),
            Y = "Invalid scheme",
            X = "Invalid host",
            $ = "Invalid port",
            Z = /[a-z]/i,
            tt = /[\d+\-.a-z]/i,
            te = /\d/,
            tr = /^0x/i,
            tn = /^[0-7]+$/,
            ti = /^\d+$/,
            to = /^[\da-f]+$/i,
            ta = /[\u0000-\u0020#%/:<>?@[\\\]^|\u007F]/,
            ts = /[\0\t\n\r #/:<>?@[\\\]^|]/,
            tc = /^[\u0000-\u0020]+/,
            tu = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/,
            tf = /[\t\n\r]/g,
            tl = /[^\u0000-\u007F]/,
            th = function (t) {
              if (!U(tl, t)) return "" === t ? null : y(t);
              var e,
                r,
                n,
                i,
                o = v(t),
                a = "";
              for (r = 0; r < o.length; r++) {
                if (
                  65533 === (e = n = m(o[r], 0)) ||
                  (e >= 55296 && e <= 57343) ||
                  (e >= 128 && e <= 159) ||
                  (e >= 8206 && e <= 8207) ||
                  (e >= 8232 && e <= 8233) ||
                  (e >= 8234 && e <= 8238) ||
                  (e >= 8293 && e <= 8297) ||
                  (e >= 64976 && e <= 65007) ||
                  (65534 & e) == 65534 ||
                  (e >= 57344 && e <= 63743) ||
                  (e >= 983040 && e <= 1114109)
                )
                  return null;
                173 === n ||
                  847 === n ||
                  8203 === n ||
                  12644 === n ||
                  65279 === n ||
                  65440 === n ||
                  (n >= 4447 && n <= 4448) ||
                  (n >= 6068 && n <= 6069) ||
                  (n >= 6155 && n <= 6159) ||
                  (n >= 8288 && n <= 8292) ||
                  (n >= 8298 && n <= 8303) ||
                  (n >= 65024 && n <= 65039) ||
                  (n >= 917760 && n <= 917999) ||
                  (a +=
                    (i =
                      n >= 65281 && n <= 65374
                        ? n - 65248
                        : 160 === n ||
                          5760 === n ||
                          8239 === n ||
                          8287 === n ||
                          12288 === n ||
                          (n >= 8192 && n <= 8202) ||
                          (n <= 65535 &&
                            z(
                              "\xa8\xaf\xb4\xb8˘˙˚˛˜˝ͺ΄΅᾽᾿῀῁῍῎῏῝῞῟῭΅´῾‗‾⁇⁈⁉℀℁℅℆⩴゛゜ﱞﱟﱠﱡﱢﱣﷺﷻ︓︖﹇﹈﹉﹊﹋﹌﹕﹖﹟﹤﹥﹨﹪﹫ﹰﹲﹴﹶﹸﹺﹼﹾ￣",
                              C(n)
                            ) > -1)
                        ? 32
                        : n) === n
                      ? o[r]
                      : C(i));
              }
              return "" === a ? null : y(a);
            },
            tp = function (t) {
              var e,
                r,
                n = G(t, ".");
              if ("" === n[n.length - 1]) {
                if (1 === n.length) return !1;
                n.length--;
              }
              return (
                !!U(ti, (e = n[n.length - 1])) ||
                (!!U(tr, e) && ("" === (r = q(e, 2)) || !!U(to, r)))
              );
            },
            td = function (t) {
              var e,
                r,
                n,
                i,
                o,
                a,
                s,
                c = G(t, ".");
              if (
                (c.length && "" === c[c.length - 1] && c.length--,
                (e = c.length) > 4)
              )
                return null;
              for (n = 0, r = []; n < e; n++) {
                if ("" === (i = c[n])) return null;
                if (
                  ((o = 10),
                  i.length > 1 &&
                    "0" === M(i, 0) &&
                    ((o = U(tr, i) ? 16 : 8), (i = q(i, 8 === o ? 1 : 2))),
                  "" === i)
                )
                  a = 0;
                else {
                  if (!U(10 === o ? ti : 8 === o ? tn : to, i)) return null;
                  a = L(i, o);
                }
                F(r, a);
              }
              for (n = 0; n < e; n++)
                if (((a = r[n]), n === e - 1)) {
                  if (a >= N(256, 5 - e)) return null;
                } else if (a > 255) return null;
              for (n = 0, s = V(r); n < r.length; n++)
                s += r[n] * N(256, 3 - n);
              return s;
            },
            tv = function (t) {
              var e,
                r,
                n,
                i,
                o,
                a,
                s,
                c = [0, 0, 0, 0, 0, 0, 0, 0],
                u = 0,
                f = null,
                l = 0,
                h = function () {
                  return M(t, l);
                };
              if (":" === h()) {
                if (":" !== M(t, 1)) return;
                (l += 2), (f = ++u);
              }
              for (; h(); ) {
                if (8 === u) return;
                if (":" === h()) {
                  if (null !== f) return;
                  l++, (f = ++u);
                  continue;
                }
                for (e = r = 0; r < 4 && U(to, h()); )
                  (e = 16 * e + L(h(), 16)), l++, r++;
                if ("." === h()) {
                  if (0 === r || ((l -= r), u > 6)) return;
                  for (n = 0; h(); ) {
                    if (((i = null), n > 0))
                      if ("." !== h() || !(n < 4)) return;
                      else l++;
                    if (!U(te, h())) return;
                    for (; U(te, h()); ) {
                      if (((o = L(h(), 10)), null === i)) i = o;
                      else {
                        if (0 === i) return;
                        i = 10 * i + o;
                      }
                      if (i > 255) return;
                      l++;
                    }
                    (c[u] = 256 * c[u] + i), (2 == ++n || 4 === n) && u++;
                  }
                  if (4 !== n) return;
                  break;
                }
                if (":" === h()) {
                  if ((l++, !h())) return;
                } else if (h()) return;
                c[u++] = e;
              }
              if (null !== f)
                for (a = u - f, u = 7; 0 !== u && a > 0; )
                  (s = c[u]), (c[u--] = c[f + a - 1]), (c[f + --a] = s);
              else if (8 !== u) return;
              return c;
            },
            tg = function (t) {
              for (var e = null, r = 1, n = null, i = 0, o = 0; o < 8; o++)
                0 !== t[o]
                  ? (i > r && ((e = n), (r = i)), (n = null), (i = 0))
                  : (null === n && (n = o), ++i);
              return i > r ? n : e;
            },
            tm = function (t) {
              var e, r, n, i;
              if ("number" == typeof t) {
                for (r = 0, e = []; r < 4; r++) Q(e, t % 256), (t = D(t / 256));
                return B(e, ".");
              }
              if ("object" == typeof t) {
                for (r = 0, e = "", n = tg(t); r < 8; r++)
                  (!i || 0 !== t[r]) &&
                    (i && (i = !1),
                    n === r
                      ? ((e += r ? ":" : "::"), (i = !0))
                      : ((e += W(t[r], 16)), r < 7 && (e += ":")));
                return "[" + e + "]";
              }
              return t;
            },
            ty = {},
            tb = d({}, ty, { " ": 1, '"': 1, "#": 1, "<": 1, ">": 1 }),
            tw = d({}, tb, { "'": 1 }),
            tS = d({}, ty, { " ": 1, '"': 1, "<": 1, ">": 1, "`": 1 }),
            tO = d({}, tS, { "#": 1, "?": 1, "{": 1, "}": 1, "^": 1 }),
            tE = d({}, tO, {
              "/": 1,
              ":": 1,
              ";": 1,
              "=": 1,
              "@": 1,
              "[": 1,
              "\\": 1,
              "]": 1,
              "^": 1,
              "|": 1,
            }),
            t_ = function (t, e) {
              var r = m(t, 0);
              return r >= 32 && r < 127 && !p(e, t)
                ? t
                : "'" === t && p(e, t)
                ? "%27"
                : R(t);
            },
            tx = {
              ftp: 21,
              file: null,
              http: 80,
              https: 443,
              ws: 80,
              wss: 443,
            },
            tP = function (t, e) {
              var r;
              return (
                2 === t.length &&
                U(Z, M(t, 0)) &&
                (":" === (r = M(t, 1)) || (!e && "|" === r))
              );
            },
            tA = function (t) {
              var e;
              return (
                t.length > 1 &&
                tP(q(t, 0, 2)) &&
                (2 === t.length ||
                  "/" === (e = M(t, 2)) ||
                  "\\" === e ||
                  "?" === e ||
                  "#" === e)
              );
            },
            tT = {},
            tI = {},
            tR = {},
            tj = {},
            tk = {},
            tL = {},
            tD = {},
            tN = {},
            tC = {},
            tM = {},
            tU = {},
            tB = {},
            tW = {},
            tV = {},
            tF = {},
            tK = {},
            tH = {},
            tG = {},
            tz = {},
            tq = {},
            tJ = {},
            tQ = function (t, e, r) {
              var n,
                i,
                o,
                a = w(t);
              if (e) {
                if ((i = this.parse(a))) throw new k(i);
                this.searchParams = null;
              } else {
                if (
                  (void 0 !== r && (n = new tQ(r, !0)),
                  (i = this.parse(a, null, n)))
                )
                  throw new k(i);
                (o = T(new A())).bindURL(this), (this.searchParams = o);
              }
            };
          tQ.prototype = {
            type: "URL",
            parse: function (t, e, r) {
              var i = e || tT,
                o = 0,
                a = "",
                s = !1,
                c = !1,
                u = !1;
              for (
                t = w(t),
                  e ||
                    ((this.scheme = ""),
                    (this.username = ""),
                    (this.password = ""),
                    (this.host = null),
                    (this.port = null),
                    (this.path = []),
                    (this.query = null),
                    (this.fragment = null),
                    (this.cannotBeABaseURL = !1),
                    (t = K(t, tc, "")),
                    (t = K(t, tu, "$1"))),
                  f = v((t = K(t, tf, "")));
                o <= f.length;

              ) {
                switch (((l = f[o]), i)) {
                  case tT:
                    if (l && U(Z, l)) (a += J(l)), (i = tI);
                    else {
                      if (e) return Y;
                      i = tR;
                      continue;
                    }
                    break;
                  case tI:
                    if (l && U(tt, l)) a += J(l);
                    else if (":" === l) {
                      if (
                        e &&
                        (this.isSpecial() !== p(tx, a) ||
                          ("file" === a &&
                            (this.includesCredentials() ||
                              null !== this.port)) ||
                          ("file" === this.scheme && "" === this.host))
                      )
                        return;
                      if (((this.scheme = a), e)) {
                        this.isSpecial() &&
                          tx[this.scheme] === this.port &&
                          (this.port = null);
                        return;
                      }
                      (a = ""),
                        "file" === this.scheme
                          ? (i = tV)
                          : this.isSpecial() && r && r.scheme === this.scheme
                          ? (i = tj)
                          : this.isSpecial()
                          ? (i = tN)
                          : "/" === f[o + 1]
                          ? ((i = tk), o++)
                          : ((this.cannotBeABaseURL = !0),
                            F(this.path, ""),
                            (i = tz));
                    } else {
                      if (e) return Y;
                      (a = ""), (i = tR), (o = 0);
                      continue;
                    }
                    break;
                  case tR:
                    if (!r || (r.cannotBeABaseURL && "#" !== l)) return Y;
                    if (r.cannotBeABaseURL && "#" === l) {
                      (this.scheme = r.scheme),
                        (this.path = g(r.path)),
                        (this.query = r.query),
                        (this.fragment = ""),
                        (this.cannotBeABaseURL = !0),
                        (i = tJ);
                      break;
                    }
                    i = "file" === r.scheme ? tV : tL;
                    continue;
                  case tj:
                    if ("/" === l && "/" === f[o + 1]) (i = tC), o++;
                    else {
                      i = tL;
                      continue;
                    }
                    break;
                  case tk:
                    if ("/" === l) {
                      i = tM;
                      break;
                    }
                    i = tG;
                    continue;
                  case tL:
                    if (((this.scheme = r.scheme), l === n))
                      (this.username = r.username),
                        (this.password = r.password),
                        (this.host = r.host),
                        (this.port = r.port),
                        (this.path = g(r.path)),
                        (this.query = r.query);
                    else if ("/" === l || ("\\" === l && this.isSpecial()))
                      i = tD;
                    else if ("?" === l)
                      (this.username = r.username),
                        (this.password = r.password),
                        (this.host = r.host),
                        (this.port = r.port),
                        (this.path = g(r.path)),
                        (this.query = ""),
                        (i = tq);
                    else if ("#" === l)
                      (this.username = r.username),
                        (this.password = r.password),
                        (this.host = r.host),
                        (this.port = r.port),
                        (this.path = g(r.path)),
                        (this.query = r.query),
                        (this.fragment = ""),
                        (i = tJ);
                    else {
                      (this.username = r.username),
                        (this.password = r.password),
                        (this.host = r.host),
                        (this.port = r.port),
                        (this.path = g(r.path)),
                        this.path.length && this.path.length--,
                        (i = tG);
                      continue;
                    }
                    break;
                  case tD:
                    if (this.isSpecial() && ("/" === l || "\\" === l)) i = tC;
                    else if ("/" === l) i = tM;
                    else {
                      (this.username = r.username),
                        (this.password = r.password),
                        (this.host = r.host),
                        (this.port = r.port),
                        (i = tG);
                      continue;
                    }
                    break;
                  case tN:
                    if (((i = tC), "/" !== l || "/" !== f[o + 1])) continue;
                    o++;
                    break;
                  case tC:
                    if ("/" !== l && "\\" !== l) {
                      i = tM;
                      continue;
                    }
                    break;
                  case tM:
                    if ("@" === l) {
                      s && (a = "%40" + a), (s = !0), (h = v(a));
                      for (var f, l, h, d, m, y, b = 0; b < h.length; b++) {
                        var S = h[b];
                        if (":" === S && !u) {
                          u = !0;
                          continue;
                        }
                        var O = t_(S, tE);
                        u ? (this.password += O) : (this.username += O);
                      }
                      a = "";
                    } else if (
                      l === n ||
                      "/" === l ||
                      "?" === l ||
                      "#" === l ||
                      ("\\" === l && this.isSpecial())
                    ) {
                      if (s && "" === a) return "Invalid authority";
                      (o -= v(a).length + 1), (a = ""), (i = tU);
                    } else a += l;
                    break;
                  case tU:
                  case tB:
                    if (e && "file" === this.scheme) {
                      i = tK;
                      continue;
                    }
                    if (":" !== l || c)
                      if (
                        l === n ||
                        "/" === l ||
                        "?" === l ||
                        "#" === l ||
                        ("\\" === l && this.isSpecial())
                      ) {
                        if (this.isSpecial() && "" === a) return X;
                        if (
                          e &&
                          "" === a &&
                          (this.includesCredentials() || null !== this.port)
                        )
                          return;
                        if ((d = this.parseHost(a))) return d;
                        if (((a = ""), (i = tH), e)) return;
                        continue;
                      } else
                        "[" === l ? (c = !0) : "]" === l && (c = !1), (a += l);
                    else {
                      if ("" === a) return X;
                      if (e === tB) return;
                      if ((d = this.parseHost(a))) return d;
                      (a = ""), (i = tW);
                    }
                    break;
                  case tW:
                    if (U(te, l)) a += l;
                    else {
                      if (
                        !(
                          l === n ||
                          "/" === l ||
                          "?" === l ||
                          "#" === l ||
                          ("\\" === l && this.isSpecial())
                        ) &&
                        !e
                      )
                        return $;
                      if ("" !== a) {
                        var E = L(a, 10);
                        if (E > 65535) return $;
                        (this.port =
                          this.isSpecial() && E === tx[this.scheme] ? null : E),
                          (a = "");
                      }
                      if (e) return;
                      i = tH;
                      continue;
                    }
                    break;
                  case tV:
                    if (
                      ((this.scheme = "file"),
                      (this.host = ""),
                      "/" === l || "\\" === l)
                    )
                      i = tF;
                    else if (r && "file" === r.scheme)
                      switch (l) {
                        case n:
                          (this.host = r.host),
                            (this.path = g(r.path)),
                            (this.query = r.query);
                          break;
                        case "?":
                          (this.host = r.host),
                            (this.path = g(r.path)),
                            (this.query = ""),
                            (i = tq);
                          break;
                        case "#":
                          (this.host = r.host),
                            (this.path = g(r.path)),
                            (this.query = r.query),
                            (this.fragment = ""),
                            (i = tJ);
                          break;
                        default:
                          (this.host = r.host),
                            tA(B(g(f, o), "")) ||
                              ((this.path = g(r.path)), this.shortenPath()),
                            (i = tG);
                          continue;
                      }
                    else {
                      i = tG;
                      continue;
                    }
                    break;
                  case tF:
                    if ("/" === l || "\\" === l) {
                      i = tK;
                      break;
                    }
                    r &&
                      "file" === r.scheme &&
                      ((this.host = r.host),
                      !tA(B(g(f, o), "")) &&
                        tP(r.path[0], !0) &&
                        F(this.path, r.path[0])),
                      (i = tG);
                    continue;
                  case tK:
                    if (
                      l === n ||
                      "/" === l ||
                      "\\" === l ||
                      "?" === l ||
                      "#" === l
                    ) {
                      if (!e && tP(a)) i = tG;
                      else if ("" === a) {
                        if (((this.host = ""), e)) return;
                        i = tH;
                      } else {
                        if ((d = this.parseHost(a))) return d;
                        if (("localhost" === this.host && (this.host = ""), e))
                          return;
                        (a = ""), (i = tH);
                      }
                      continue;
                    }
                    a += l;
                    break;
                  case tH:
                    if (this.isSpecial()) {
                      if (((i = tG), "/" !== l && "\\" !== l)) continue;
                    } else if (e || "?" !== l)
                      if (e || "#" !== l) {
                        if (l !== n && ((i = tG), "/" !== l)) continue;
                      } else (this.fragment = ""), (i = tJ);
                    else (this.query = ""), (i = tq);
                    break;
                  case tG:
                    if (
                      l === n ||
                      "/" === l ||
                      ("\\" === l && this.isSpecial()) ||
                      (!e && ("?" === l || "#" === l))
                    ) {
                      if (
                        (".." === (m = J((m = a))) ||
                        "%2e." === m ||
                        ".%2e" === m ||
                        "%2e%2e" === m
                          ? (this.shortenPath(),
                            "/" === l ||
                              ("\\" === l && this.isSpecial()) ||
                              F(this.path, ""))
                          : "." === (y = a) || "%2e" === J(y)
                          ? "/" === l ||
                            ("\\" === l && this.isSpecial()) ||
                            F(this.path, "")
                          : ("file" === this.scheme &&
                              !this.path.length &&
                              tP(a) &&
                              (null !== this.host &&
                                "" !== this.host &&
                                (this.host = ""),
                              (a = M(a, 0) + ":")),
                            F(this.path, a)),
                        (a = ""),
                        "file" === this.scheme &&
                          (l === n || "?" === l || "#" === l))
                      )
                        for (; this.path.length > 1 && "" === this.path[0]; )
                          H(this.path);
                      "?" === l
                        ? ((this.query = ""), (i = tq))
                        : "#" === l && ((this.fragment = ""), (i = tJ));
                    } else a += t_(l, tO);
                    break;
                  case tz:
                    "?" === l
                      ? ((this.query = ""), (i = tq))
                      : "#" === l
                      ? ((this.fragment = ""), (i = tJ))
                      : l !== n &&
                        (" " === l
                          ? (this.path[0] +=
                              "?" === f[o + 1] || "#" === f[o + 1]
                                ? "%20"
                                : " ")
                          : (this.path[0] += t_(l, ty)));
                    break;
                  case tq:
                    e || "#" !== l
                      ? l !== n &&
                        (this.query += t_(l, this.isSpecial() ? tw : tb))
                      : ((this.fragment = ""), (i = tJ));
                    break;
                  case tJ:
                    l !== n && (this.fragment += t_(l, tS));
                }
                o++;
              }
            },
            parseHost: function (t) {
              var e, r, n;
              if ("[" === M(t, 0)) {
                if ("]" !== M(t, t.length - 1) || !(e = tv(q(t, 1, -1))))
                  return X;
                this.host = e;
              } else if (this.isSpecial()) {
                if (null === (t = th(I(t))) || U(ta, t)) return X;
                if (tp(t)) {
                  if (null === (e = td(t))) return X;
                  this.host = e;
                } else this.host = t;
              } else {
                if (U(ts, t)) return X;
                for (n = 0, e = "", r = v(t); n < r.length; n++)
                  e += t_(r[n], ty);
                this.host = e;
              }
            },
            cannotHaveUsernamePasswordPort: function () {
              return (
                null === this.host ||
                "" === this.host ||
                this.cannotBeABaseURL ||
                "file" === this.scheme
              );
            },
            includesCredentials: function () {
              return "" !== this.username || "" !== this.password;
            },
            isSpecial: function () {
              return p(tx, this.scheme);
            },
            shortenPath: function () {
              var t = this.path,
                e = t.length;
              e &&
                ("file" !== this.scheme || 1 !== e || !tP(t[0], !0)) &&
                t.length--;
            },
            serialize: function () {
              var t = this.scheme,
                e = this.username,
                r = this.password,
                n = this.host,
                i = this.port,
                o = this.path,
                a = this.query,
                s = this.fragment,
                c = t + ":";
              return (
                null !== n
                  ? ((c += "//"),
                    this.includesCredentials() &&
                      (c += e + (r ? ":" + r : "") + "@"),
                    (c += tm(n)),
                    null !== i && (c += ":" + i))
                  : "file" === t && (c += "//"),
                null === n &&
                  !this.cannotBeABaseURL &&
                  o.length > 1 &&
                  "" === o[0] &&
                  (c += "/."),
                (c += this.cannotBeABaseURL
                  ? o[0]
                  : o.length
                  ? "/" + B(o, "/")
                  : ""),
                null !== a && (c += "?" + a),
                null !== s && (c += "#" + s),
                c
              );
            },
            setHref: function (t) {
              var e = this.parse(t);
              if (e) throw new k(e);
              this.searchParams.update();
            },
            getOrigin: function () {
              var t = this.scheme,
                e = this.port;
              if ("blob" === t)
                try {
                  return new tY(this.path[0]).origin;
                } catch (t) {
                  return "null";
                }
              return "file" !== t && this.isSpecial()
                ? t + "://" + tm(this.host) + (null !== e ? ":" + e : "")
                : "null";
            },
            getProtocol: function () {
              return this.scheme + ":";
            },
            setProtocol: function (t) {
              this.parse(w(t) + ":", tT);
            },
            getUsername: function () {
              return this.username;
            },
            setUsername: function (t) {
              var e = v(w(t));
              if (!this.cannotHaveUsernamePasswordPort()) {
                this.username = "";
                for (var r = 0; r < e.length; r++)
                  this.username += t_(e[r], tE);
              }
            },
            getPassword: function () {
              return this.password;
            },
            setPassword: function (t) {
              var e = v(w(t));
              if (!this.cannotHaveUsernamePasswordPort()) {
                this.password = "";
                for (var r = 0; r < e.length; r++)
                  this.password += t_(e[r], tE);
              }
            },
            getHost: function () {
              var t = this.host,
                e = this.port;
              return null === t ? "" : null === e ? tm(t) : tm(t) + ":" + e;
            },
            setHost: function (t) {
              this.cannotBeABaseURL || this.parse(t, tU);
            },
            getHostname: function () {
              var t = this.host;
              return null === t ? "" : tm(t);
            },
            setHostname: function (t) {
              this.cannotBeABaseURL || this.parse(t, tB);
            },
            getPort: function () {
              var t = this.port;
              return null === t ? "" : w(t);
            },
            setPort: function (t) {
              this.cannotHaveUsernamePasswordPort() ||
                ("" === (t = w(t)) ? (this.port = null) : this.parse(t, tW));
            },
            getPathname: function () {
              var t = this.path;
              return this.cannotBeABaseURL
                ? t[0]
                : t.length
                ? "/" + B(t, "/")
                : "";
            },
            setPathname: function (t) {
              this.cannotBeABaseURL || ((this.path = []), this.parse(t, tH));
            },
            getSearch: function () {
              var t = this.query;
              return t ? "?" + t : "";
            },
            setSearch: function (t) {
              "" === (t = w(t))
                ? (this.query = null)
                : ("?" === M(t, 0) && (t = q(t, 1)),
                  (this.query = ""),
                  this.parse(t, tq)),
                this.searchParams.update();
            },
            getSearchParams: function () {
              return this.searchParams.facade;
            },
            getHash: function () {
              var t = this.fragment;
              return t ? "#" + t : "";
            },
            setHash: function (t) {
              if ("" === (t = w(t))) {
                this.fragment = null;
                return;
              }
              "#" === M(t, 0) && (t = q(t, 1)),
                (this.fragment = ""),
                this.parse(t, tJ);
            },
            update: function () {
              this.query = this.searchParams.serialize() || null;
            },
          };
          var tY = function (t) {
              var e = h(this, tX),
                r = O(arguments.length, 1) > 1 ? arguments[1] : void 0,
                n = x(e, new tQ(t, !1, r));
              o ||
                ((e.href = n.serialize()),
                (e.origin = n.getOrigin()),
                (e.protocol = n.getProtocol()),
                (e.username = n.getUsername()),
                (e.password = n.getPassword()),
                (e.host = n.getHost()),
                (e.hostname = n.getHostname()),
                (e.port = n.getPort()),
                (e.pathname = n.getPathname()),
                (e.search = n.getSearch()),
                (e.searchParams = n.getSearchParams()),
                (e.hash = n.getHash()));
            },
            tX = tY.prototype,
            t$ = function (t, e) {
              return {
                get: function () {
                  return P(this)[t]();
                },
                set:
                  e &&
                  function (t) {
                    return P(this)[e](t);
                  },
                configurable: !0,
                enumerable: !0,
              };
            };
          if (
            (o &&
              (l(tX, "href", t$("serialize", "setHref")),
              l(tX, "origin", t$("getOrigin")),
              l(tX, "protocol", t$("getProtocol", "setProtocol")),
              l(tX, "username", t$("getUsername", "setUsername")),
              l(tX, "password", t$("getPassword", "setPassword")),
              l(tX, "host", t$("getHost", "setHost")),
              l(tX, "hostname", t$("getHostname", "setHostname")),
              l(tX, "port", t$("getPort", "setPort")),
              l(tX, "pathname", t$("getPathname", "setPathname")),
              l(tX, "search", t$("getSearch", "setSearch")),
              l(tX, "searchParams", t$("getSearchParams")),
              l(tX, "hash", t$("getHash", "setHash"))),
            f(
              tX,
              "toJSON",
              function () {
                return P(this).serialize();
              },
              { enumerable: !0 }
            ),
            f(
              tX,
              "toString",
              function () {
                return P(this).serialize();
              },
              { enumerable: !0 }
            ),
            j)
          ) {
            var tZ = j.createObjectURL,
              t0 = j.revokeObjectURL;
            tZ && f(tY, "createObjectURL", c(tZ, j)),
              t0 && f(tY, "revokeObjectURL", c(t0, j));
          }
          S(tY, "URL"),
            i(
              { global: !0, constructor: !0, forced: !a, sham: !o },
              { URL: tY }
            );
        },
        61230: function (t, e, r) {
          "use strict";
          r(14488);
        },
        34094: function (t, e, r) {
          "use strict";
          var n = r(70872),
            i = r(62635),
            o = r(39014)("URL", "toString");
          n(
            { target: "URL", proto: !0, enumerable: !0 },
            {
              toJSON: function () {
                return i(o, this);
              },
            }
          );
        },
      },
      c = {};
    function u(t) {
      var e = c[t];
      if (void 0 !== e) return e.exports;
      var r = (c[t] = { id: t, loaded: !1, exports: {} });
      return s[t].call(r.exports, r, r.exports, u), (r.loaded = !0), r.exports;
    }
    if (
      ((u.m = s),
      (u.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return u.d(e, { a: e }), e;
      }),
      (e = Object.getPrototypeOf
        ? function (t) {
            return Object.getPrototypeOf(t);
          }
        : function (t) {
            return t.__proto__;
          }),
      (u.t = function (r, n) {
        if (
          (1 & n && (r = this(r)),
          8 & n ||
            ("object" == typeof r &&
              r &&
              ((4 & n && r.__esModule) ||
                (16 & n && "function" == typeof r.then))))
        )
          return r;
        var i = Object.create(null);
        u.r(i);
        var o = {};
        t = t || [null, e({}), e([]), e(e)];
        for (
          var a = 2 & n && r;
          ("object" == typeof a || "function" == typeof a) && !~t.indexOf(a);
          a = e(a)
        )
          Object.getOwnPropertyNames(a).forEach(function (t) {
            o[t] = function () {
              return r[t];
            };
          });
        return (
          (o.default = function () {
            return r;
          }),
          u.d(i, o),
          i
        );
      }),
      (u.d = function (t, e) {
        for (var r in e)
          u.o(e, r) &&
            !u.o(t, r) &&
            Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
      }),
      (u.f = {}),
      (u.e = function (t) {
        return Promise.all(
          Object.keys(u.f).reduce(function (e, r) {
            return u.f[r](t, e), e;
          }, [])
        );
      }),
      (u.u = function (t) {
        return (
          "" +
          t +
          "." +
          {
            146: "dec021",
            162: "c2d254",
            180: "b634eb",
            22: "87916e",
            246: "adcfa0",
            257: "02f4ce",
            307: "71d4c5",
            325: "33831a",
            398: "05c9fd",
            421: "5fc137",
            442: "e458c0",
            476: "7c2765",
            501: "e5ec0e",
            66: "330956",
            675: "d23493",
            690: "6a7afc",
            740: "a3ea73",
            821: "67c1cf",
            939: "fca171",
            965: "fc780b",
          }[t] +
          ".js"
        );
      }),
      (u.miniCssF = function (t) {
        return "" + t + ".436dde.css";
      }),
      (u.g = (function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
          return this || Function("return this")();
        } catch (t) {
          if ("object" == typeof window) return window;
        }
      })()),
      (u.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (r = {}),
      (n = "v1d5-synthesize-tuantuan-web:"),
      (u.l = function (t, e, i, o) {
        if (r[t]) return void r[t].push(e);
        if (void 0 !== i)
          for (
            var a, s, c = document.getElementsByTagName("script"), f = 0;
            f < c.length;
            f++
          ) {
            var l = c[f];
            if (
              l.getAttribute("src") == t ||
              l.getAttribute("data-rspack") == n + i
            ) {
              a = l;
              break;
            }
          }
        a ||
          ((s = !0),
          ((a = document.createElement("script")).timeout = 120),
          u.nc && a.setAttribute("nonce", u.nc),
          a.setAttribute("data-rspack", n + i),
          (a.src = t)),
          (r[t] = [e]);
        var h = function (e, n) {
            (a.onerror = a.onload = null), clearTimeout(p);
            var i = r[t];
            if (
              (delete r[t],
              a.parentNode && a.parentNode.removeChild(a),
              i &&
                i.forEach(function (t) {
                  return t(n);
                }),
              e)
            )
              return e(n);
          },
          p = setTimeout(
            h.bind(null, void 0, { type: "timeout", target: a }),
            12e4
          );
        (a.onerror = h.bind(null, a.onerror)),
          (a.onload = h.bind(null, a.onload)),
          s && document.head.appendChild(a);
      }),
      (u.r = function (t) {
        "u" > typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (u.nmd = function (t) {
        return (t.paths = []), t.children || (t.children = []), t;
      }),
      (u.p =
        //"./web.hycdn.cn/endfield/webview/unn3irGqmsvyaKnFbTug/act/orbipom-merge-XaVa5Tz/"),
        ""), // 重定向为根目录
      (u.rv = function () {
        return "1.7.12";
      }),
      "u" > typeof document)
    ) {
      var f = function (t, e, r, n, i) {
          var o = document.createElement("link");
          return (
            (o.rel = "stylesheet"),
            (o.type = "text/css"),
            u.nc && (o.nonce = u.nc),
            (o.href = e),
            (o.onerror = o.onload =
              function (r) {
                if (((o.onerror = o.onload = null), "load" === r.type)) n();
                else {
                  var a = r && ("load" === r.type ? "missing" : r.type),
                    s = (r && r.target && r.target.href) || e,
                    c = Error(
                      "Loading CSS chunk " + t + " failed.\\n(" + s + ")"
                    );
                  (c.code = "CSS_CHUNK_LOAD_FAILED"),
                    (c.type = a),
                    (c.request = s),
                    o.parentNode && o.parentNode.removeChild(o),
                    i(c);
                }
              }),
            r
              ? r.parentNode.insertBefore(o, r.nextSibling)
              : document.head.appendChild(o),
            o
          );
        },
        l = function (t, e) {
          for (
            var r = document.getElementsByTagName("link"), n = 0;
            n < r.length;
            n++
          ) {
            var i = r[n],
              o = i.getAttribute("data-href") || i.getAttribute("href");
            if (
              (o && (o = o.split("?")[0]),
              "stylesheet" === i.rel && (o === t || o === e))
            )
              return i;
          }
          for (
            var a = document.getElementsByTagName("style"), n = 0;
            n < a.length;
            n++
          ) {
            var i = a[n],
              o = i.getAttribute("data-href");
            if (o === t || o === e) return i;
          }
        },
        h = { 410: 0 };
      u.f.miniCss = function (t, e) {
        if (h[t]) e.push(h[t]);
        else
          0 !== h[t] &&
            { 821: 1 }[t] &&
            e.push(
              (h[t] = new Promise(function (e, r) {
                var n = u.miniCssF(t),
                  i = u.p + n;
                if (l(n, i)) return e();
                f(t, i, null, e, r);
              }).then(
                function () {
                  h[t] = 0;
                },
                function (e) {
                  throw (delete h[t], e);
                }
              ))
            );
      };
    }
    (i = { 410: 0 }),
      (u.f.j = function (t, e) {
        var r = u.o(i, t) ? i[t] : void 0;
        if (0 !== r)
          if (r) e.push(r[2]);
          else {
            var n = new Promise(function (e, n) {
              r = i[t] = [e, n];
            });
            e.push((r[2] = n));
            var o = u.p + u.u(t),
              a = Error();
            u.l(
              o,
              function (e) {
                if (u.o(i, t) && (0 !== (r = i[t]) && (i[t] = void 0), r)) {
                  var n = e && ("load" === e.type ? "missing" : e.type),
                    o = e && e.target && e.target.src;
                  (a.message =
                    "Loading chunk " + t + " failed.\n(" + n + ": " + o + ")"),
                    (a.name = "ChunkLoadError"),
                    (a.type = n),
                    (a.request = o),
                    r[1](a);
                }
              },
              "chunk-" + t,
              t
            );
          }
      }),
      (o = function (t, e) {
        var r,
          n,
          o = e[0],
          a = e[1],
          s = e[2],
          c = 0;
        if (
          o.some(function (t) {
            return 0 !== i[t];
          })
        ) {
          for (r in a) u.o(a, r) && (u.m[r] = a[r]);
          s && s(u);
        }
        for (t && t(e); c < o.length; c++)
          (n = o[c]), u.o(i, n) && i[n] && i[n][0](), (i[n] = 0);
      }),
      (a = self.webpackChunkv1d5_synthesize_tuantuan_web =
        self.webpackChunkv1d5_synthesize_tuantuan_web || []).forEach(
        o.bind(null, 0)
      ),
      (a.push = o.bind(null, a.push.bind(a))),
      (u.ruid = "bundler=rspack@1.7.12"),
      (function () {
        "use strict";
        u(18344),
          u(18683),
          (0, u(66078).Lh)()
            .catch((t) => {
              console.error("[image-profile]", t);
            })
            .then(() =>
              Promise.all([u.e("939"), u.e("821")]).then(u.bind(u, 48251))
            );
      })();
  })();
