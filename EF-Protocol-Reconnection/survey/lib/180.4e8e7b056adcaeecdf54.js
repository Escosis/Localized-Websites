/*! hg-web-sdk@2.19.0 Copyright (C) 2017 - 2026 Hypergryph Co.,Ltd. All Rights Reserved. Published at 2026-06-10 16:34:08 */
(self.webpackChunk_hg_hg_web_sdk = self.webpackChunk_hg_hg_web_sdk || []).push([
  [180],
  {
    9412: function (t, e, n) {
      !(function (t) {
        "use strict";
        let e = null,
          r = null;
        function i() {
          try {
            if ("undefined" == typeof localStorage) return !1;
            const t = "__localStorage_test__";
            return localStorage.setItem(t, t), localStorage.removeItem(t), !0;
          } catch (t) {
            return !1;
          }
        }
        function o() {
          let t = "";
          if (crypto && crypto.randomUUID)
            return (t = crypto.randomUUID().replace(/-/g, "")), t;
          const e =
            crypto && crypto.getRandomValues
              ? () => crypto.getRandomValues(new Uint8Array(1))[0]
              : () => 16 * Math.random();
          return (
            (t = ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, (t) =>
              (t ^ ((15 & e()) >> (t / 4))).toString(16)
            )),
            t
          );
        }
        function a() {
          var t;
          return i()
            ? null !== (t = localStorage.getItem("#eventLogDeviceId")) &&
              void 0 !== t
              ? t
              : ""
            : null != e
            ? e
            : "";
        }
        function s(t) {
          i() ? localStorage.setItem("#eventLogDeviceId", t) : (e = t);
        }
        function c(t) {
          return t && t.length >= 6 && t.length <= 128 && !/^[0fF_-]+$/.test(t);
        }
        function u() {
          if (r) return r;
          const t = localStorage.getItem("#trackingCode");
          return t && (r = t), t;
        }
        function l() {
          let t = u();
          return (
            t ||
            ((t = (function () {
              const t = "abcdefghijklmnopqrstuvwxyz0123456789";
              let e = "";
              if (crypto && crypto.getRandomValues) {
                const n = new Uint32Array(12);
                crypto.getRandomValues(n);
                for (let r = 0; r < 12; r++) e += t[n[r] % 36];
              } else
                for (let n = 0; n < 12; n++)
                  e += t[Math.floor(36 * Math.random())];
              return e;
            })()),
            (r = e = t),
            localStorage.setItem("#trackingCode", e),
            t)
          );
          var e;
        }
        function d(t) {
          return (
            (d =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            d(t)
          );
        }
        var h =
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof window
            ? window
            : void 0 !== n.g
            ? n.g
            : "undefined" != typeof self
            ? self
            : {};
        function f(t) {
          return t &&
            t.__esModule &&
            Object.prototype.hasOwnProperty.call(t, "default")
            ? t.default
            : t;
        }
        var _ = { exports: {} };
        !(function (t, e) {
          !(function (n, r) {
            var i = "function",
              o = "undefined",
              a = "object",
              s = "string",
              c = "major",
              u = "model",
              l = "name",
              h = "type",
              f = "vendor",
              _ = "version",
              p = "architecture",
              v = "console",
              g = "mobile",
              m = "tablet",
              b = "smarttv",
              y = "wearable",
              w = "embedded",
              k = "Amazon",
              C = "Apple",
              x = "ASUS",
              E = "BlackBerry",
              L = "Browser",
              S = "Chrome",
              T = "Firefox",
              A = "Google",
              I = "Honor",
              O = "Huawei",
              D = "LG",
              N = "Microsoft",
              R = "Motorola",
              z = "Nvidia",
              P = "OnePlus",
              j = "Opera",
              F = "OPPO",
              H = "Samsung",
              M = "Sharp",
              U = "Sony",
              G = "Xiaomi",
              B = "Zebra",
              Z = "Facebook",
              J = "Chromium OS",
              V = "Mac OS",
              K = " Browser",
              W = function (t) {
                for (var e = {}, n = 0; n < t.length; n++)
                  e[t[n].toUpperCase()] = t[n];
                return e;
              },
              Y = function (t, e) {
                return d(t) === s && -1 !== X(e).indexOf(X(t));
              },
              X = function (t) {
                return t.toLowerCase();
              },
              q = function (t, e) {
                if (d(t) === s)
                  return (
                    (t = t.replace(/^\s\s*/, "")),
                    d(e) === o ? t : t.substring(0, 500)
                  );
              },
              $ = function (t, e) {
                for (var n, o, s, c, u, l, h = 0; h < e.length && !u; ) {
                  var f = e[h],
                    _ = e[h + 1];
                  for (n = o = 0; n < f.length && !u && f[n]; )
                    if ((u = f[n++].exec(t)))
                      for (s = 0; s < _.length; s++)
                        (l = u[++o]),
                          d((c = _[s])) === a && c.length > 0
                            ? 2 === c.length
                              ? d(c[1]) == i
                                ? (this[c[0]] = c[1].call(this, l))
                                : (this[c[0]] = c[1])
                              : 3 === c.length
                              ? d(c[1]) !== i || (c[1].exec && c[1].test)
                                ? (this[c[0]] = l ? l.replace(c[1], c[2]) : r)
                                : (this[c[0]] = l
                                    ? c[1].call(this, l, c[2])
                                    : r)
                              : 4 === c.length &&
                                (this[c[0]] = l
                                  ? c[3].call(this, l.replace(c[1], c[2]))
                                  : r)
                            : (this[c] = l || r);
                  h += 2;
                }
              },
              Q = function (t, e) {
                for (var n in e)
                  if (d(e[n]) === a && e[n].length > 0) {
                    for (var i = 0; i < e[n].length; i++)
                      if (Y(e[n][i], t)) return "?" === n ? r : n;
                  } else if (Y(e[n], t)) return "?" === n ? r : n;
                return e.hasOwnProperty("*") ? e["*"] : t;
              },
              tt = {
                ME: "4.90",
                "NT 3.11": "NT3.51",
                "NT 4.0": "NT4.0",
                2e3: "NT 5.0",
                XP: ["NT 5.1", "NT 5.2"],
                Vista: "NT 6.0",
                7: "NT 6.1",
                8: "NT 6.2",
                8.1: "NT 6.3",
                10: ["NT 6.4", "NT 10.0"],
                RT: "ARM",
              },
              et = {
                browser: [
                  [/\b(?:crmo|crios)\/([\w\.]+)/i],
                  [_, [l, "Chrome"]],
                  [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                  [_, [l, "Edge"]],
                  [
                    /(opera mini)\/([-\w\.]+)/i,
                    /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                    /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
                  ],
                  [l, _],
                  [/opios[\/ ]+([\w\.]+)/i],
                  [_, [l, j + " Mini"]],
                  [/\bop(?:rg)?x\/([\w\.]+)/i],
                  [_, [l, j + " GX"]],
                  [/\bopr\/([\w\.]+)/i],
                  [_, [l, j]],
                  [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
                  [_, [l, "Baidu"]],
                  [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
                  [_, [l, "Maxthon"]],
                  [
                    /(kindle)\/([\w\.]+)/i,
                    /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,
                    /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,
                    /(?:ms|\()(ie) ([\w\.]+)/i,
                    /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i,
                    /(heytap|ovi|115)browser\/([\d\.]+)/i,
                    /(weibo)__([\d\.]+)/i,
                  ],
                  [l, _],
                  [/quark(?:pc)?\/([-\w\.]+)/i],
                  [_, [l, "Quark"]],
                  [/\bddg\/([\w\.]+)/i],
                  [_, [l, "DuckDuckGo"]],
                  [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                  [_, [l, "UC" + L]],
                  [
                    /microm.+\bqbcore\/([\w\.]+)/i,
                    /\bqbcore\/([\w\.]+).+microm/i,
                    /micromessenger\/([\w\.]+)/i,
                  ],
                  [_, [l, "WeChat"]],
                  [/konqueror\/([\w\.]+)/i],
                  [_, [l, "Konqueror"]],
                  [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                  [_, [l, "IE"]],
                  [/ya(?:search)?browser\/([\w\.]+)/i],
                  [_, [l, "Yandex"]],
                  [/slbrowser\/([\w\.]+)/i],
                  [_, [l, "Smart Lenovo " + L]],
                  [/(avast|avg)\/([\w\.]+)/i],
                  [[l, /(.+)/, "$1 Secure " + L], _],
                  [/\bfocus\/([\w\.]+)/i],
                  [_, [l, T + " Focus"]],
                  [/\bopt\/([\w\.]+)/i],
                  [_, [l, j + " Touch"]],
                  [/coc_coc\w+\/([\w\.]+)/i],
                  [_, [l, "Coc Coc"]],
                  [/dolfin\/([\w\.]+)/i],
                  [_, [l, "Dolphin"]],
                  [/coast\/([\w\.]+)/i],
                  [_, [l, j + " Coast"]],
                  [/miuibrowser\/([\w\.]+)/i],
                  [_, [l, "MIUI" + K]],
                  [/fxios\/([\w\.-]+)/i],
                  [_, [l, T]],
                  [/\bqihoobrowser\/?([\w\.]*)/i],
                  [_, [l, "360"]],
                  [/\b(qq)\/([\w\.]+)/i],
                  [[l, /(.+)/, "$1Browser"], _],
                  [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
                  [[l, /(.+)/, "$1" + K], _],
                  [/samsungbrowser\/([\w\.]+)/i],
                  [_, [l, H + " Internet"]],
                  [/metasr[\/ ]?([\d\.]+)/i],
                  [_, [l, "Sogou Explorer"]],
                  [/(sogou)mo\w+\/([\d\.]+)/i],
                  [[l, "Sogou Mobile"], _],
                  [
                    /(electron)\/([\w\.]+) safari/i,
                    /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                    /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i,
                  ],
                  [l, _],
                  [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
                  [l],
                  [
                    /ome\/([\w\.]+) \w* ?(iron) saf/i,
                    /ome\/([\w\.]+).+qihu (360)[es]e/i,
                  ],
                  [_, l],
                  [
                    /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i,
                  ],
                  [[l, Z], _],
                  [
                    /(Klarna)\/([\w\.]+)/i,
                    /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
                    /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
                    /(daum)apps[\/ ]([\w\.]+)/i,
                    /safari (line)\/([\w\.]+)/i,
                    /\b(line)\/([\w\.]+)\/iab/i,
                    /(alipay)client\/([\w\.]+)/i,
                    /(twitter)(?:and| f.+e\/([\w\.]+))/i,
                    /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i,
                  ],
                  [l, _],
                  [/\bgsa\/([\w\.]+) .*safari\//i],
                  [_, [l, "GSA"]],
                  [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
                  [_, [l, "TikTok"]],
                  [/headlesschrome(?:\/([\w\.]+)| )/i],
                  [_, [l, S + " Headless"]],
                  [/ wv\).+(chrome)\/([\w\.]+)/i],
                  [[l, S + " WebView"], _],
                  [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                  [_, [l, "Android " + L]],
                  [
                    /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i,
                  ],
                  [l, _],
                  [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                  [_, [l, "Mobile Safari"]],
                  [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                  [_, l],
                  [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                  [
                    l,
                    [
                      _,
                      Q,
                      {
                        "1.0": "/8",
                        1.2: "/1",
                        1.3: "/3",
                        "2.0": "/412",
                        "2.0.2": "/416",
                        "2.0.3": "/417",
                        "2.0.4": "/419",
                        "?": "/",
                      },
                    ],
                  ],
                  [/(webkit|khtml)\/([\w\.]+)/i],
                  [l, _],
                  [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                  [[l, "Netscape"], _],
                  [/(wolvic|librewolf)\/([\w\.]+)/i],
                  [l, _],
                  [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                  [_, [l, T + " Reality"]],
                  [
                    /ekiohf.+(flow)\/([\w\.]+)/i,
                    /(swiftfox)/i,
                    /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,
                    /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                    /(firefox)\/([\w\.]+)/i,
                    /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                    /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                    /\b(links) \(([\w\.]+)/i,
                  ],
                  [l, [_, /_/g, "."]],
                  [/(cobalt)\/([\w\.]+)/i],
                  [l, [_, /master.|lts./, ""]],
                ],
                cpu: [
                  [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
                  [[p, "amd64"]],
                  [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
                  [[p, "ia32"]],
                  [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
                  [[p, "arm64"]],
                  [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
                  [[p, "armhf"]],
                  [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
                  [[p, "arm"]],
                  [/((ppc|powerpc)(64)?)( mac|;|\))/i],
                  [[p, /ower/, "", X]],
                  [/ sun4\w[;\)]/i],
                  [[p, "sparc"]],
                  [
                    /\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i,
                  ],
                  [[p, X]],
                ],
                device: [
                  [
                    /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
                  ],
                  [u, [f, H], [h, m]],
                  [
                    /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
                    /samsung[- ]((?!sm-[lr])[-\w]+)/i,
                    /sec-(sgh\w+)/i,
                  ],
                  [u, [f, H], [h, g]],
                  [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
                  [u, [f, C], [h, g]],
                  [
                    /\((ipad);[-\w\),; ]+apple/i,
                    /applecoremedia\/[\w\.]+ \((ipad)/i,
                    /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
                  ],
                  [u, [f, C], [h, m]],
                  [/(macintosh);/i],
                  [u, [f, C]],
                  [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                  [u, [f, M], [h, g]],
                  [
                    /\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i,
                  ],
                  [u, [f, I], [h, m]],
                  [/honor([-\w ]+)[;\)]/i],
                  [u, [f, I], [h, g]],
                  [
                    /\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i,
                  ],
                  [u, [f, O], [h, m]],
                  [
                    /(?:huawei)([-\w ]+)[;\)]/i,
                    /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i,
                  ],
                  [u, [f, O], [h, g]],
                  [
                    /oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,
                    /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i,
                  ],
                  [
                    [u, /_/g, " "],
                    [f, G],
                    [h, m],
                  ],
                  [
                    /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
                    /\b; (\w+) build\/hm\1/i,
                    /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                    /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                    /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
                    /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i,
                    / ([\w ]+) miui\/v?\d/i,
                  ],
                  [
                    [u, /_/g, " "],
                    [f, G],
                    [h, g],
                  ],
                  [
                    /; (\w+) bui.+ oppo/i,
                    /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
                  ],
                  [u, [f, F], [h, g]],
                  [/\b(opd2(\d{3}a?))(?: bui|\))/i],
                  [
                    u,
                    [f, Q, { OnePlus: ["304", "403", "203"], "*": F }],
                    [h, m],
                  ],
                  [
                    /vivo (\w+)(?: bui|\))/i,
                    /\b(v[12]\d{3}\w?[at])(?: bui|;)/i,
                  ],
                  [u, [f, "Vivo"], [h, g]],
                  [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
                  [u, [f, "Realme"], [h, g]],
                  [
                    /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                    /\bmot(?:orola)?[- ](\w*)/i,
                    /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
                  ],
                  [u, [f, R], [h, g]],
                  [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                  [u, [f, R], [h, m]],
                  [
                    /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i,
                  ],
                  [u, [f, D], [h, m]],
                  [
                    /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                    /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i,
                    /\blg-?([\d\w]+) bui/i,
                  ],
                  [u, [f, D], [h, g]],
                  [
                    /(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,
                    /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i,
                  ],
                  [u, [f, "Lenovo"], [h, m]],
                  [/(nokia) (t[12][01])/i],
                  [f, u, [h, m]],
                  [
                    /(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,
                    /nokia[-_ ]?(([-\w\. ]*))/i,
                  ],
                  [
                    [u, /_/g, " "],
                    [h, g],
                    [f, "Nokia"],
                  ],
                  [/(pixel (c|tablet))\b/i],
                  [u, [f, A], [h, m]],
                  [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                  [u, [f, A], [h, g]],
                  [
                    /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
                  ],
                  [u, [f, U], [h, g]],
                  [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                  [
                    [u, "Xperia Tablet"],
                    [f, U],
                    [h, m],
                  ],
                  [
                    / (kb2005|in20[12]5|be20[12][59])\b/i,
                    /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
                  ],
                  [u, [f, P], [h, g]],
                  [
                    /(alexa)webm/i,
                    /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
                    /(kf[a-z]+)( bui|\)).+silk\//i,
                  ],
                  [u, [f, k], [h, m]],
                  [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                  [
                    [u, /(.+)/g, "Fire Phone $1"],
                    [f, k],
                    [h, g],
                  ],
                  [/(playbook);[-\w\),; ]+(rim)/i],
                  [u, f, [h, m]],
                  [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                  [u, [f, E], [h, g]],
                  [
                    /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
                  ],
                  [u, [f, x], [h, m]],
                  [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                  [u, [f, x], [h, g]],
                  [/(nexus 9)/i],
                  [u, [f, "HTC"], [h, m]],
                  [
                    /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                    /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                    /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i,
                  ],
                  [f, [u, /_/g, " "], [h, g]],
                  [
                    /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i,
                  ],
                  [u, [f, "TCL"], [h, m]],
                  [/(itel) ((\w+))/i],
                  [
                    [f, X],
                    u,
                    [h, Q, { tablet: ["p10001l", "w7001"], "*": "mobile" }],
                  ],
                  [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                  [u, [f, "Acer"], [h, m]],
                  [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                  [u, [f, "Meizu"], [h, g]],
                  [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
                  [u, [f, "Ulefone"], [h, g]],
                  [
                    /; (energy ?\w+)(?: bui|\))/i,
                    /; energizer ([\w ]+)(?: bui|\))/i,
                  ],
                  [u, [f, "Energizer"], [h, g]],
                  [
                    /; cat (b35);/i,
                    /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i,
                  ],
                  [u, [f, "Cat"], [h, g]],
                  [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
                  [u, [f, "Smartfren"], [h, g]],
                  [/droid.+; (a(?:015|06[35]|142p?))/i],
                  [u, [f, "Nothing"], [h, g]],
                  [
                    /; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,
                    /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i,
                  ],
                  [u, [f, "Archos"], [h, m]],
                  [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
                  [u, [f, "Archos"], [h, g]],
                  [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
                  [f, u, [h, m]],
                  [
                    /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i,
                    /; (hmd|imo) ([\w ]+?)(?: bui|\))/i,
                    /(hp) ([\w ]+\w)/i,
                    /(microsoft); (lumia[\w ]+)/i,
                    /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i,
                    /(oppo) ?([\w ]+) bui/i,
                  ],
                  [f, u, [h, g]],
                  [
                    /(kobo)\s(ereader|touch)/i,
                    /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                    /(kindle)\/([\w\.]+)/i,
                    /(nook)[\w ]+build\/(\w+)/i,
                    /(dell) (strea[kpr\d ]*[\dko])/i,
                    /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                    /(trinity)[- ]*(t\d{3}) bui/i,
                    /(gigaset)[- ]+(q\w{1,9}) bui/i,
                    /(vodafone) ([\w ]+)(?:\)| bui)/i,
                  ],
                  [f, u, [h, m]],
                  [/(surface duo)/i],
                  [u, [f, N], [h, m]],
                  [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                  [u, [f, "Fairphone"], [h, g]],
                  [/(u304aa)/i],
                  [u, [f, "AT&T"], [h, g]],
                  [/\bsie-(\w*)/i],
                  [u, [f, "Siemens"], [h, g]],
                  [/\b(rct\w+) b/i],
                  [u, [f, "RCA"], [h, m]],
                  [/\b(venue[\d ]{2,7}) b/i],
                  [u, [f, "Dell"], [h, m]],
                  [/\b(q(?:mv|ta)\w+) b/i],
                  [u, [f, "Verizon"], [h, m]],
                  [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                  [u, [f, "Barnes & Noble"], [h, m]],
                  [/\b(tm\d{3}\w+) b/i],
                  [u, [f, "NuVision"], [h, m]],
                  [/\b(k88) b/i],
                  [u, [f, "ZTE"], [h, m]],
                  [/\b(nx\d{3}j) b/i],
                  [u, [f, "ZTE"], [h, g]],
                  [/\b(gen\d{3}) b.+49h/i],
                  [u, [f, "Swiss"], [h, g]],
                  [/\b(zur\d{3}) b/i],
                  [u, [f, "Swiss"], [h, m]],
                  [/\b((zeki)?tb.*\b) b/i],
                  [u, [f, "Zeki"], [h, m]],
                  [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                  [[f, "Dragon Touch"], u, [h, m]],
                  [/\b(ns-?\w{0,9}) b/i],
                  [u, [f, "Insignia"], [h, m]],
                  [/\b((nxa|next)-?\w{0,9}) b/i],
                  [u, [f, "NextBook"], [h, m]],
                  [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                  [[f, "Voice"], u, [h, g]],
                  [/\b(lvtel\-)?(v1[12]) b/i],
                  [[f, "LvTel"], u, [h, g]],
                  [/\b(ph-1) /i],
                  [u, [f, "Essential"], [h, g]],
                  [/\b(v(100md|700na|7011|917g).*\b) b/i],
                  [u, [f, "Envizen"], [h, m]],
                  [/\b(trio[-\w\. ]+) b/i],
                  [u, [f, "MachSpeed"], [h, m]],
                  [/\btu_(1491) b/i],
                  [u, [f, "Rotor"], [h, m]],
                  [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
                  [u, [f, z], [h, m]],
                  [/(sprint) (\w+)/i],
                  [f, u, [h, g]],
                  [/(kin\.[onetw]{3})/i],
                  [
                    [u, /\./g, " "],
                    [f, N],
                    [h, g],
                  ],
                  [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                  [u, [f, B], [h, m]],
                  [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                  [u, [f, B], [h, g]],
                  [/smart-tv.+(samsung)/i],
                  [f, [h, b]],
                  [/hbbtv.+maple;(\d+)/i],
                  [
                    [u, /^/, "SmartTV"],
                    [f, H],
                    [h, b],
                  ],
                  [
                    /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i,
                  ],
                  [
                    [f, D],
                    [h, b],
                  ],
                  [/(apple) ?tv/i],
                  [f, [u, C + " TV"], [h, b]],
                  [/crkey/i],
                  [
                    [u, S + "cast"],
                    [f, A],
                    [h, b],
                  ],
                  [/droid.+aft(\w+)( bui|\))/i],
                  [u, [f, k], [h, b]],
                  [/(shield \w+ tv)/i],
                  [u, [f, z], [h, b]],
                  [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                  [u, [f, M], [h, b]],
                  [/(bravia[\w ]+)( bui|\))/i],
                  [u, [f, U], [h, b]],
                  [/(mi(tv|box)-?\w+) bui/i],
                  [u, [f, G], [h, b]],
                  [/Hbbtv.*(technisat) (.*);/i],
                  [f, u, [h, b]],
                  [
                    /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                    /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i,
                  ],
                  [
                    [f, q],
                    [u, q],
                    [h, b],
                  ],
                  [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
                  [u, [h, b]],
                  [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                  [[h, b]],
                  [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                  [f, u, [h, v]],
                  [/droid.+; (shield)( bui|\))/i],
                  [u, [f, z], [h, v]],
                  [/(playstation \w+)/i],
                  [u, [f, U], [h, v]],
                  [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                  [u, [f, N], [h, v]],
                  [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
                  [u, [f, H], [h, y]],
                  [
                    /((pebble))app/i,
                    /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i,
                  ],
                  [f, u, [h, y]],
                  [/(ow(?:19|20)?we?[1-3]{1,3})/i],
                  [u, [f, F], [h, y]],
                  [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
                  [u, [f, C], [h, y]],
                  [/(opwwe\d{3})/i],
                  [u, [f, P], [h, y]],
                  [/(moto 360)/i],
                  [u, [f, R], [h, y]],
                  [/(smartwatch 3)/i],
                  [u, [f, U], [h, y]],
                  [/(g watch r)/i],
                  [u, [f, D], [h, y]],
                  [/droid.+; (wt63?0{2,3})\)/i],
                  [u, [f, B], [h, y]],
                  [/droid.+; (glass) \d/i],
                  [u, [f, A], [h, y]],
                  [/(pico) (4|neo3(?: link|pro)?)/i],
                  [f, u, [h, y]],
                  [/; (quest( \d| pro)?)/i],
                  [u, [f, Z], [h, y]],
                  [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                  [f, [h, w]],
                  [/(aeobc)\b/i],
                  [u, [f, k], [h, w]],
                  [/(homepod).+mac os/i],
                  [u, [f, C], [h, w]],
                  [/windows iot/i],
                  [[h, w]],
                  [
                    /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i,
                  ],
                  [u, [h, g]],
                  [
                    /droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i,
                  ],
                  [u, [h, m]],
                  [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                  [[h, m]],
                  [
                    /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i,
                  ],
                  [[h, g]],
                  [/droid .+?; ([\w\. -]+)( bui|\))/i],
                  [u, [f, "Generic"]],
                ],
                engine: [
                  [/windows.+ edge\/([\w\.]+)/i],
                  [_, [l, "EdgeHTML"]],
                  [/(arkweb)\/([\w\.]+)/i],
                  [l, _],
                  [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                  [_, [l, "Blink"]],
                  [
                    /(presto)\/([\w\.]+)/i,
                    /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,
                    /ekioh(flow)\/([\w\.]+)/i,
                    /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                    /(icab)[\/ ]([23]\.[\d\.]+)/i,
                    /\b(libweb)/i,
                  ],
                  [l, _],
                  [/ladybird\//i],
                  [[l, "LibWeb"]],
                  [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                  [_, l],
                ],
                os: [
                  [/microsoft (windows) (vista|xp)/i],
                  [l, _],
                  [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
                  [l, [_, Q, tt]],
                  [
                    /windows nt 6\.2; (arm)/i,
                    /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i,
                    /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i,
                  ],
                  [
                    [_, Q, tt],
                    [l, "Windows"],
                  ],
                  [
                    /[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,
                    /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
                    /cfnetwork\/.+darwin/i,
                  ],
                  [
                    [_, /_/g, "."],
                    [l, "iOS"],
                  ],
                  [
                    /(mac os x) ?([\w\. ]*)/i,
                    /(macintosh|mac_powerpc\b)(?!.+haiku)/i,
                  ],
                  [
                    [l, V],
                    [_, /_/g, "."],
                  ],
                  [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                  [_, l],
                  [/(ubuntu) ([\w\.]+) like android/i],
                  [[l, /(.+)/, "$1 Touch"], _],
                  [
                    /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i,
                  ],
                  [l, _],
                  [/\(bb(10);/i],
                  [_, [l, E]],
                  [
                    /(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i,
                  ],
                  [_, [l, "Symbian"]],
                  [
                    /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
                  ],
                  [_, [l, T + " OS"]],
                  [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                  [_, [l, "webOS"]],
                  [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
                  [_, [l, "watchOS"]],
                  [/crkey\/([\d\.]+)/i],
                  [_, [l, S + "cast"]],
                  [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
                  [[l, J], _],
                  [
                    /panasonic;(viera)/i,
                    /(netrange)mmh/i,
                    /(nettv)\/(\d+\.[\w\.]+)/i,
                    /(nintendo|playstation) ([wids345portablevuch]+)/i,
                    /(xbox); +xbox ([^\);]+)/i,
                    /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                    /(mint)[\/\(\) ]?(\w*)/i,
                    /(mageia|vectorlinux)[; ]/i,
                    /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                    /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i,
                    /(gnu) ?([\w\.]*)/i,
                    /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                    /(haiku) (\w+)/i,
                  ],
                  [l, _],
                  [/(sunos) ?([\w\.\d]*)/i],
                  [[l, "Solaris"], _],
                  [
                    /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                    /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                    /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
                    /(unix) ?([\w\.]*)/i,
                  ],
                  [l, _],
                ],
              },
              nt = function (t, e) {
                if ((d(t) === a && ((e = t), (t = r)), !(this instanceof nt)))
                  return new nt(t, e).getResult();
                var v = d(n) !== o && n.navigator ? n.navigator : r,
                  b = t || (v && v.userAgent ? v.userAgent : ""),
                  y = v && v.userAgentData ? v.userAgentData : r,
                  w = e
                    ? (function (t, e) {
                        var n = {};
                        for (var r in t)
                          e[r] && e[r].length % 2 == 0
                            ? (n[r] = e[r].concat(t[r]))
                            : (n[r] = t[r]);
                        return n;
                      })(et, e)
                    : et,
                  k = v && v.userAgent == b;
                return (
                  (this.getBrowser = function () {
                    var t,
                      e = {};
                    return (
                      (e[l] = r),
                      (e[_] = r),
                      $.call(e, b, w.browser),
                      (e[c] =
                        d((t = e[_])) === s
                          ? t.replace(/[^\d\.]/g, "").split(".")[0]
                          : r),
                      k &&
                        v &&
                        v.brave &&
                        d(v.brave.isBrave) == i &&
                        (e[l] = "Brave"),
                      e
                    );
                  }),
                  (this.getCPU = function () {
                    var t = {};
                    return (t[p] = r), $.call(t, b, w.cpu), t;
                  }),
                  (this.getDevice = function () {
                    var t = {};
                    return (
                      (t[f] = r),
                      (t[u] = r),
                      (t[h] = r),
                      $.call(t, b, w.device),
                      k && !t[h] && y && y.mobile && (t[h] = g),
                      k &&
                        "Macintosh" == t[u] &&
                        v &&
                        d(v.standalone) !== o &&
                        v.maxTouchPoints &&
                        v.maxTouchPoints > 2 &&
                        ((t[u] = "iPad"), (t[h] = m)),
                      t
                    );
                  }),
                  (this.getEngine = function () {
                    var t = {};
                    return (t[l] = r), (t[_] = r), $.call(t, b, w.engine), t;
                  }),
                  (this.getOS = function () {
                    var t = {};
                    return (
                      (t[l] = r),
                      (t[_] = r),
                      $.call(t, b, w.os),
                      k &&
                        !t[l] &&
                        y &&
                        y.platform &&
                        "Unknown" != y.platform &&
                        (t[l] = y.platform
                          .replace(/chrome os/i, J)
                          .replace(/macos/i, V)),
                      t
                    );
                  }),
                  (this.getResult = function () {
                    return {
                      ua: this.getUA(),
                      browser: this.getBrowser(),
                      engine: this.getEngine(),
                      os: this.getOS(),
                      device: this.getDevice(),
                      cpu: this.getCPU(),
                    };
                  }),
                  (this.getUA = function () {
                    return b;
                  }),
                  (this.setUA = function (t) {
                    return (
                      (b = d(t) === s && t.length > 500 ? q(t, 500) : t), this
                    );
                  }),
                  this.setUA(b),
                  this
                );
              };
            (nt.VERSION = "1.0.41"),
              (nt.BROWSER = W([l, _, c])),
              (nt.CPU = W([p])),
              (nt.DEVICE = W([u, f, h, v, g, b, m, y, w])),
              (nt.ENGINE = nt.OS = W([l, _])),
              t.exports && (e = t.exports = nt),
              (e.UAParser = nt);
            var rt = d(n) !== o && (n.jQuery || n.Zepto);
            if (rt && !rt.ua) {
              var it = new nt();
              (rt.ua = it.getResult()),
                (rt.ua.get = function () {
                  return it.getUA();
                }),
                (rt.ua.set = function (t) {
                  it.setUA(t);
                  var e = it.getResult();
                  for (var n in e) rt.ua[n] = e[n];
                });
            }
          })(
            "object" ===
              ("undefined" == typeof window ? "undefined" : d(window))
              ? window
              : h
          );
        })(_, _.exports);
        var p = f(_.exports);
        const v = function (t) {
            return (
              (t = null != t ? t : navigator.userAgent), new p(t).getResult()
            );
          },
          g = function (t) {
            var e;
            (t && "" !== t) || (t = location.href);
            try {
              const n = new URL(t),
                {
                  hash: r,
                  host: i,
                  hostname: o,
                  href: a,
                  origin: s,
                  pathname: c,
                  port: u,
                  protocol: l,
                  search: d,
                  searchParams: h,
                } = n;
              return {
                hashname: (null !== (e = n.hash.match(/#([^?]+)/)) &&
                void 0 !== e
                  ? e
                  : [])[1],
                hash: r,
                host: i,
                hostname: o,
                href: a,
                origin: s,
                pathname: c,
                port: u,
                protocol: l,
                search: d,
                searchParams: h,
              };
            } catch (e) {
              return console.log("非法的URL路径", t), {};
            }
          },
          m = function (t, e = !1) {
            const { search: n, hash: r } = g(t),
              i = e ? r : n,
              o = {};
            return (
              null == i ||
                i.replace(/[?&]+([^=&]+)=([^&#]*)/gi, function (t, e, n) {
                  try {
                    o[e] = decodeURIComponent(n);
                  } catch (t) {
                    (o[e] = n), console.warn(`URL参数解码失败: ${n}`);
                  }
                  return t;
                }),
              o
            );
          };
        var b;
        (t.SDK_TYPE = void 0),
          ((b = t.SDK_TYPE || (t.SDK_TYPE = {})).WEB = "webjs"),
          (b.JS = "native");
        const y = "HGInsight";
        function w(t) {
          return t && t.Math == Math ? t : void 0;
        }
        function k() {
          return (
            ("object" == typeof globalThis && w(globalThis)) ||
            ("object" == typeof window && w(window)) ||
            ("object" == typeof self && w(self)) ||
            ("object" == typeof n.g && w(n.g)) ||
            (function () {
              return this;
            })() ||
            {}
          );
        }
        function C(t) {
          const e = (function (t) {
            var e, n, r;
            const i = k();
            return (
              (null !== (e = i[y]) && void 0 !== e) || (i[y] = {}),
              (null !== (n = (r = i[y])[t]) && void 0 !== n) || (r[t] = {}),
              i[y][t]
            );
          })("_instance");
          return e[t];
        }
        function x(e = t.SDK_TYPE.WEB) {
          return e === t.SDK_TYPE.WEB;
        }
        class E {
          static keyName(t) {
            return !(
              !E.isString(t) ||
              (!t &&
                (console.warn(
                  "[EventLog] properties 中存在空字符串 key，事件将被拦截不上报"
                ),
                1))
            );
          }
          static blackName(e, n) {
            if (!E.isString(e)) return !1;
            const r = (
              n === t.SDK_TYPE.WEB
                ? [
                    "#sdid_s",
                    "#sdid_c",
                    "#device_id",
                    "#tracking_code",
                    "#ga_client_id",
                    "#is_first_launched",
                    "#is_first_page_view",
                    "#sdk_type",
                    "#sdk_vn",
                    "#sdk_vc",
                    "#ts_c",
                    "#ts_s",
                    "#seq",
                    "#ts",
                    "#ipv4",
                    "#continent_code",
                    "#country_iso_code",
                    "#subdivision_1_iso_code",
                    "#geoname_id",
                    "#latitude",
                    "#longitude",
                    "#time_zone",
                    "#app_id",
                    "#name",
                    "#user_id",
                    "#character_id",
                    "#server_id",
                    "#channel1",
                    "#channel2",
                  ]
                : [
                    "#user_id",
                    "#character_id",
                    "#server_id",
                    "#sdid_c",
                    "#sdk_type",
                    "#sdk_vn",
                    "#sdk_vc",
                    "#ts_c",
                    "#ts_s",
                    "#seq",
                    "#ipv4",
                    "#continent_code",
                    "#country_iso_code",
                    "#subdivision_1_iso_code",
                    "#geoname_id",
                    "#latitude",
                    "#longitude",
                    "#time_zone",
                    "#app_id",
                    "#name",
                    "#ts",
                  ]
            ).includes(e.toLowerCase());
            return !!e && !r;
          }
          static presetKeyName(t) {
            if (!E.isString(t)) return !1;
            const e = [
              "#sdid_c",
              "#sdk_type",
              "#sdk_vn",
              "#sdk_vc",
              "#app_id",
              "#ts_c",
              "#seq",
              "#ts_s",
              "#ts",
              "#name",
              "#user_id",
              "#character_id",
              "#server_id",
              "#ipv4",
              "#continent_code",
              "#country_iso_code",
              "#subdivision_1_iso_code",
              "#geoname_id",
              "#latitude",
              "#longitude",
              "#time_zone",
              "#is_first_launched",
              "#is_first_page_view",
            ].includes(t.toLowerCase());
            return !!t && E.presetKeyNameRegex.test(t) && !e;
          }
          static presetName(e, n) {
            const r = (
              n === t.SDK_TYPE.WEB
                ? ["#user_login", "#character_login", "#page_view"]
                : ["#user_login", "#character_login"]
            ).includes(e.toLowerCase());
            return E.isString(e) && !!e && !r;
          }
          static keySize(t, e) {
            return !e && (e = 128), E.isString(t) && !!t && t.length <= e;
          }
          static params(t, e) {
            if ("object" != typeof t) return !1;
            if (Array.isArray(t)) return !1;
            for (const n in t)
              if (!E.keyName(n) || !E.blackName(n, e)) return !1;
            return E.dataSize(t);
          }
          static presetParams(t) {
            if ("object" != typeof t) return !1;
            if (Array.isArray(t)) return !1;
            for (const e in t) if (!E.presetKeyName(e)) return !1;
            return !0;
          }
          static initOptions(t) {
            const {
              env: e,
              regionTag: n,
              enableRealTimeSend: r,
              routeChange: i,
              sdkType: o,
              enableAdTrack: a,
              enableGA4: s,
              ga4: c,
            } = null != t ? t : {};
            if (
              !(
                void 0 === e ||
                (E.isString(e) && /^(dev|staging|prod)$/.test(e))
              )
            )
              return (
                console.error(
                  '初始化失败: env 必须是 "dev"、"staging" 或 "prod"'
                ),
                !1
              );
            if (!E.isString(n) || !/^(cn|sg)$/.test(n))
              return (
                console.error('初始化失败: regionTag 必须是 "cn" 或 "sg"'), !1
              );
            if (!E.isUndefined(r) && !E.isBoolean(r))
              return (
                console.error("初始化失败: enableRealTimeSend 必须是布尔值"), !1
              );
            if (x(o)) {
              if (
                !(
                  void 0 === i ||
                  (E.isString(i) && ["default", "history", "hash"].includes(i))
                )
              )
                return (
                  console.error(
                    '初始化失败: routeChange 必须是 "default"、"history" 或 "hash"'
                  ),
                  !1
                );
              if (!E.isUndefined(a) && !E.isBoolean(a))
                return (
                  console.error("初始化失败: enableAdTrack 必须是布尔值"), !1
                );
              if (!E.isUndefined(s) && !E.isBoolean(s))
                return console.error("初始化失败: enableGA4 必须是布尔值"), !1;
              if (!E.isUndefined(c)) {
                if ("object" != typeof c || null === c || Array.isArray(c))
                  return console.error("初始化失败: ga4 必须是对象"), !1;
                if (
                  !c.measurementId ||
                  !E.isString(c.measurementId) ||
                  !/^G-[A-Z0-9]+$/.test(c.measurementId)
                )
                  return (
                    console.error(
                      '初始化失败: ga4.measurementId 必须是字符串且符合格式 "G-XXXXXXXXXX"'
                    ),
                    !1
                  );
                if (!E.isUndefined(c.autoInject) && !E.isBoolean(c.autoInject))
                  return (
                    console.error("初始化失败: ga4.autoInject 必须是布尔值"), !1
                  );
                if (
                  !E.isUndefined(c.timeout) &&
                  ("number" != typeof c.timeout ||
                    isNaN(c.timeout) ||
                    c.timeout <= 0)
                )
                  return (
                    console.error("初始化失败: ga4.timeout 必须是大于0的数字"),
                    !1
                  );
              }
            }
            return !0;
          }
          static strictValidateOptions(t, e) {
            if (!t || "object" != typeof t)
              return console.warn("初始化失败: 选项必须是对象"), !1;
            const n = Object.keys(t).filter((t) => !e.includes(t));
            return !(
              n.length > 0 &&
              (console.warn(`初始化失败: 存在无效的配置项: ${n.join(", ")}`), 1)
            );
          }
          static isString(t) {
            return "string" == typeof t;
          }
          static isBoolean(t) {
            return "boolean" == typeof t;
          }
          static isUndefined(t) {
            return void 0 === t;
          }
          static isNull(t) {
            return null === t;
          }
          static dataSize(t, e) {
            e || (e = 128);
            try {
              const n = JSON.stringify(t);
              return new Blob([n]).size <= 1024 * e;
            } catch (t) {
              return !1;
            }
          }
        }
        function L(t, e, n, r) {
          if ("a" === n && !r)
            throw new TypeError(
              "Private accessor was defined without a getter"
            );
          if ("function" == typeof e ? t !== e || !r : !e.has(t))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === n ? r : "a" === n ? r.call(t) : r ? r.value : e.get(t);
        }
        function S(t, e, n, r, i) {
          if ("m" === r) throw new TypeError("Private method is not writable");
          if ("a" === r && !i)
            throw new TypeError(
              "Private accessor was defined without a setter"
            );
          if ("function" == typeof e ? t !== e || !i : !e.has(t))
            throw new TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return "a" === r ? i.call(t, n) : i ? (i.value = n) : e.set(t, n), n;
        }
        (E.keyNameRegex = /^(?!#)/),
          (E.presetKeyNameRegex = /^#/),
          "function" == typeof SuppressedError && SuppressedError;
        var T =
            void 0 !== n.g
              ? n.g
              : "undefined" != typeof self
              ? self
              : "undefined" != typeof window
              ? window
              : {},
          A =
            ("undefined" != typeof globalThis && globalThis) ||
            ("undefined" != typeof self && self) ||
            (void 0 !== T && T) ||
            {},
          I = "URLSearchParams" in A,
          O = "Symbol" in A && "iterator" in Symbol,
          D =
            "FileReader" in A &&
            "Blob" in A &&
            (function () {
              try {
                return new Blob(), !0;
              } catch (t) {
                return !1;
              }
            })(),
          N = "FormData" in A,
          R = "ArrayBuffer" in A;
        if (R)
          var z = [
              "[object Int8Array]",
              "[object Uint8Array]",
              "[object Uint8ClampedArray]",
              "[object Int16Array]",
              "[object Uint16Array]",
              "[object Int32Array]",
              "[object Uint32Array]",
              "[object Float32Array]",
              "[object Float64Array]",
            ],
            P =
              ArrayBuffer.isView ||
              function (t) {
                return t && z.indexOf(Object.prototype.toString.call(t)) > -1;
              };
        function j(t) {
          if (
            ("string" != typeof t && (t = String(t)),
            /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t) || "" === t)
          )
            throw new TypeError(
              'Invalid character in header field name: "' + t + '"'
            );
          return t.toLowerCase();
        }
        function F(t) {
          return "string" != typeof t && (t = String(t)), t;
        }
        function H(t) {
          var e = {
            next: function () {
              var e = t.shift();
              return { done: void 0 === e, value: e };
            },
          };
          return (
            O &&
              (e[Symbol.iterator] = function () {
                return e;
              }),
            e
          );
        }
        function M(t) {
          (this.map = {}),
            t instanceof M
              ? t.forEach(function (t, e) {
                  this.append(e, t);
                }, this)
              : Array.isArray(t)
              ? t.forEach(function (t) {
                  if (2 != t.length)
                    throw new TypeError(
                      "Headers constructor: expected name/value pair to be length 2, found" +
                        t.length
                    );
                  this.append(t[0], t[1]);
                }, this)
              : t &&
                Object.getOwnPropertyNames(t).forEach(function (e) {
                  this.append(e, t[e]);
                }, this);
        }
        function U(t) {
          if (!t._noBody)
            return t.bodyUsed
              ? Promise.reject(new TypeError("Already read"))
              : void (t.bodyUsed = !0);
        }
        function G(t) {
          return new Promise(function (e, n) {
            (t.onload = function () {
              e(t.result);
            }),
              (t.onerror = function () {
                n(t.error);
              });
          });
        }
        function B(t) {
          var e = new FileReader(),
            n = G(e);
          return e.readAsArrayBuffer(t), n;
        }
        function Z(t) {
          if (t.slice) return t.slice(0);
          var e = new Uint8Array(t.byteLength);
          return e.set(new Uint8Array(t)), e.buffer;
        }
        function J() {
          return (
            (this.bodyUsed = !1),
            (this._initBody = function (t) {
              var e;
              (this.bodyUsed = this.bodyUsed),
                (this._bodyInit = t),
                t
                  ? "string" == typeof t
                    ? (this._bodyText = t)
                    : D && Blob.prototype.isPrototypeOf(t)
                    ? (this._bodyBlob = t)
                    : N && FormData.prototype.isPrototypeOf(t)
                    ? (this._bodyFormData = t)
                    : I && URLSearchParams.prototype.isPrototypeOf(t)
                    ? (this._bodyText = t.toString())
                    : R && D && (e = t) && DataView.prototype.isPrototypeOf(e)
                    ? ((this._bodyArrayBuffer = Z(t.buffer)),
                      (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                    : R && (ArrayBuffer.prototype.isPrototypeOf(t) || P(t))
                    ? (this._bodyArrayBuffer = Z(t))
                    : (this._bodyText = t = Object.prototype.toString.call(t))
                  : ((this._noBody = !0), (this._bodyText = "")),
                this.headers.get("content-type") ||
                  ("string" == typeof t
                    ? this.headers.set(
                        "content-type",
                        "text/plain;charset=UTF-8"
                      )
                    : this._bodyBlob && this._bodyBlob.type
                    ? this.headers.set("content-type", this._bodyBlob.type)
                    : I &&
                      URLSearchParams.prototype.isPrototypeOf(t) &&
                      this.headers.set(
                        "content-type",
                        "application/x-www-form-urlencoded;charset=UTF-8"
                      ));
            }),
            D &&
              (this.blob = function () {
                var t = U(this);
                if (t) return t;
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer)
                  return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                if (this._bodyFormData)
                  throw new Error("could not read FormData body as blob");
                return Promise.resolve(new Blob([this._bodyText]));
              }),
            (this.arrayBuffer = function () {
              if (this._bodyArrayBuffer)
                return (
                  U(this) ||
                  (ArrayBuffer.isView(this._bodyArrayBuffer)
                    ? Promise.resolve(
                        this._bodyArrayBuffer.buffer.slice(
                          this._bodyArrayBuffer.byteOffset,
                          this._bodyArrayBuffer.byteOffset +
                            this._bodyArrayBuffer.byteLength
                        )
                      )
                    : Promise.resolve(this._bodyArrayBuffer))
                );
              if (D) return this.blob().then(B);
              throw new Error("could not read as ArrayBuffer");
            }),
            (this.text = function () {
              var t,
                e,
                n,
                r,
                i,
                o = U(this);
              if (o) return o;
              if (this._bodyBlob)
                return (
                  (t = this._bodyBlob),
                  (n = G((e = new FileReader()))),
                  (i = (r = /charset=([A-Za-z0-9_-]+)/.exec(t.type))
                    ? r[1]
                    : "utf-8"),
                  e.readAsText(t, i),
                  n
                );
              if (this._bodyArrayBuffer)
                return Promise.resolve(
                  (function (t) {
                    for (
                      var e = new Uint8Array(t), n = new Array(e.length), r = 0;
                      r < e.length;
                      r++
                    )
                      n[r] = String.fromCharCode(e[r]);
                    return n.join("");
                  })(this._bodyArrayBuffer)
                );
              if (this._bodyFormData)
                throw new Error("could not read FormData body as text");
              return Promise.resolve(this._bodyText);
            }),
            N &&
              (this.formData = function () {
                return this.text().then(W);
              }),
            (this.json = function () {
              return this.text().then(JSON.parse);
            }),
            this
          );
        }
        (M.prototype.append = function (t, e) {
          (t = j(t)), (e = F(e));
          var n = this.map[t];
          this.map[t] = n ? n + ", " + e : e;
        }),
          (M.prototype.delete = function (t) {
            delete this.map[j(t)];
          }),
          (M.prototype.get = function (t) {
            return (t = j(t)), this.has(t) ? this.map[t] : null;
          }),
          (M.prototype.has = function (t) {
            return this.map.hasOwnProperty(j(t));
          }),
          (M.prototype.set = function (t, e) {
            this.map[j(t)] = F(e);
          }),
          (M.prototype.forEach = function (t, e) {
            for (var n in this.map)
              this.map.hasOwnProperty(n) && t.call(e, this.map[n], n, this);
          }),
          (M.prototype.keys = function () {
            var t = [];
            return (
              this.forEach(function (e, n) {
                t.push(n);
              }),
              H(t)
            );
          }),
          (M.prototype.values = function () {
            var t = [];
            return (
              this.forEach(function (e) {
                t.push(e);
              }),
              H(t)
            );
          }),
          (M.prototype.entries = function () {
            var t = [];
            return (
              this.forEach(function (e, n) {
                t.push([n, e]);
              }),
              H(t)
            );
          }),
          O && (M.prototype[Symbol.iterator] = M.prototype.entries);
        var V = [
          "CONNECT",
          "DELETE",
          "GET",
          "HEAD",
          "OPTIONS",
          "PATCH",
          "POST",
          "PUT",
          "TRACE",
        ];
        function K(t, e) {
          if (!(this instanceof K))
            throw new TypeError(
              'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
            );
          var n,
            r,
            i = (e = e || {}).body;
          if (t instanceof K) {
            if (t.bodyUsed) throw new TypeError("Already read");
            (this.url = t.url),
              (this.credentials = t.credentials),
              e.headers || (this.headers = new M(t.headers)),
              (this.method = t.method),
              (this.mode = t.mode),
              (this.signal = t.signal),
              i ||
                null == t._bodyInit ||
                ((i = t._bodyInit), (t.bodyUsed = !0));
          } else this.url = String(t);
          if (
            ((this.credentials =
              e.credentials || this.credentials || "same-origin"),
            (!e.headers && this.headers) || (this.headers = new M(e.headers)),
            (this.method =
              ((r = (n = e.method || this.method || "GET").toUpperCase()),
              V.indexOf(r) > -1 ? r : n)),
            (this.mode = e.mode || this.mode || null),
            (this.signal =
              e.signal ||
              this.signal ||
              (function () {
                if ("AbortController" in A) return new AbortController().signal;
              })()),
            (this.referrer = null),
            ("GET" === this.method || "HEAD" === this.method) && i)
          )
            throw new TypeError("Body not allowed for GET or HEAD requests");
          if (
            (this._initBody(i),
            !(
              ("GET" !== this.method && "HEAD" !== this.method) ||
              ("no-store" !== e.cache && "no-cache" !== e.cache)
            ))
          ) {
            var o = /([?&])_=[^&]*/;
            o.test(this.url)
              ? (this.url = this.url.replace(o, "$1_=" + new Date().getTime()))
              : (this.url +=
                  (/\?/.test(this.url) ? "&" : "?") +
                  "_=" +
                  new Date().getTime());
          }
        }
        function W(t) {
          var e = new FormData();
          return (
            t
              .trim()
              .split("&")
              .forEach(function (t) {
                if (t) {
                  var n = t.split("="),
                    r = n.shift().replace(/\+/g, " "),
                    i = n.join("=").replace(/\+/g, " ");
                  e.append(decodeURIComponent(r), decodeURIComponent(i));
                }
              }),
            e
          );
        }
        function Y(t, e) {
          if (!(this instanceof Y))
            throw new TypeError(
              'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
            );
          if (
            (e || (e = {}),
            (this.type = "default"),
            (this.status = void 0 === e.status ? 200 : e.status),
            this.status < 200 || this.status > 599)
          )
            throw new RangeError(
              "Failed to construct 'Response': The status provided (0) is outside the range [200, 599]."
            );
          (this.ok = this.status >= 200 && this.status < 300),
            (this.statusText =
              void 0 === e.statusText ? "" : "" + e.statusText),
            (this.headers = new M(e.headers)),
            (this.url = e.url || ""),
            this._initBody(t);
        }
        (K.prototype.clone = function () {
          return new K(this, { body: this._bodyInit });
        }),
          J.call(K.prototype),
          J.call(Y.prototype),
          (Y.prototype.clone = function () {
            return new Y(this._bodyInit, {
              status: this.status,
              statusText: this.statusText,
              headers: new M(this.headers),
              url: this.url,
            });
          }),
          (Y.error = function () {
            var t = new Y(null, { status: 200, statusText: "" });
            return (t.ok = !1), (t.status = 0), (t.type = "error"), t;
          });
        var X = [301, 302, 303, 307, 308];
        Y.redirect = function (t, e) {
          if (-1 === X.indexOf(e)) throw new RangeError("Invalid status code");
          return new Y(null, { status: e, headers: { location: t } });
        };
        var q = A.DOMException;
        try {
          new q();
        } catch (ge) {
          ((q = function (t, e) {
            (this.message = t), (this.name = e);
            var n = Error(t);
            this.stack = n.stack;
          }).prototype = Object.create(Error.prototype)),
            (q.prototype.constructor = q);
        }
        function $(t, e) {
          return new Promise(function (n, r) {
            var i = new K(t, e);
            if (i.signal && i.signal.aborted)
              return r(new q("Aborted", "AbortError"));
            var o = new XMLHttpRequest();
            function a() {
              o.abort();
            }
            if (
              ((o.onload = function () {
                var t,
                  e,
                  r = {
                    statusText: o.statusText,
                    headers:
                      ((t = o.getAllResponseHeaders() || ""),
                      (e = new M()),
                      t
                        .replace(/\r?\n[\t ]+/g, " ")
                        .split("\r")
                        .map(function (t) {
                          return 0 === t.indexOf("\n")
                            ? t.substr(1, t.length)
                            : t;
                        })
                        .forEach(function (t) {
                          var n = t.split(":"),
                            r = n.shift().trim();
                          if (r) {
                            var i = n.join(":").trim();
                            try {
                              e.append(r, i);
                            } catch (t) {
                              console.warn("Response " + t.message);
                            }
                          }
                        }),
                      e),
                  };
                0 === i.url.indexOf("file://") &&
                (o.status < 200 || o.status > 599)
                  ? (r.status = 200)
                  : (r.status = o.status),
                  (r.url =
                    "responseURL" in o
                      ? o.responseURL
                      : r.headers.get("X-Request-URL"));
                var a = "response" in o ? o.response : o.responseText;
                setTimeout(function () {
                  n(new Y(a, r));
                }, 0);
              }),
              (o.onerror = function () {
                setTimeout(function () {
                  r(new TypeError("Network request failed"));
                }, 0);
              }),
              (o.ontimeout = function () {
                setTimeout(function () {
                  r(new TypeError("Network request timed out"));
                }, 0);
              }),
              (o.onabort = function () {
                setTimeout(function () {
                  r(new q("Aborted", "AbortError"));
                }, 0);
              }),
              o.open(
                i.method,
                (function (t) {
                  try {
                    return "" === t && A.location.href ? A.location.href : t;
                  } catch (e) {
                    return t;
                  }
                })(i.url),
                !0
              ),
              "include" === i.credentials
                ? (o.withCredentials = !0)
                : "omit" === i.credentials && (o.withCredentials = !1),
              "responseType" in o &&
                (D
                  ? (o.responseType = "blob")
                  : R && (o.responseType = "arraybuffer")),
              e &&
                "object" === d(e.headers) &&
                !(
                  e.headers instanceof M ||
                  (A.Headers && e.headers instanceof A.Headers)
                ))
            ) {
              var s = [];
              Object.getOwnPropertyNames(e.headers).forEach(function (t) {
                s.push(j(t)), o.setRequestHeader(t, F(e.headers[t]));
              }),
                i.headers.forEach(function (t, e) {
                  -1 === s.indexOf(e) && o.setRequestHeader(e, t);
                });
            } else
              i.headers.forEach(function (t, e) {
                o.setRequestHeader(e, t);
              });
            i.signal &&
              (i.signal.addEventListener("abort", a),
              (o.onreadystatechange = function () {
                4 === o.readyState && i.signal.removeEventListener("abort", a);
              })),
              o.send(void 0 === i._bodyInit ? null : i._bodyInit);
          });
        }
        ($.polyfill = !0),
          A.fetch ||
            ((A.fetch = $), (A.Headers = M), (A.Request = K), (A.Response = Y));
        class Q {
          static get(t) {
            return this.store[t];
          }
          static set(t, e) {
            this.store[t] = e;
          }
        }
        function tt(t) {
          for (var e = t.length; --e >= 0; ) t[e] = 0;
        }
        Q.store = {};
        var et = 256,
          nt = 286,
          rt = 30,
          it = 15,
          ot = new Uint8Array([
            0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4,
            4, 5, 5, 5, 5, 0,
          ]),
          at = new Uint8Array([
            0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9,
            10, 10, 11, 11, 12, 12, 13, 13,
          ]),
          st = new Uint8Array([
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7,
          ]),
          ct = new Uint8Array([
            16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
          ]),
          ut = new Array(576);
        tt(ut);
        var lt = new Array(60);
        tt(lt);
        var dt = new Array(512);
        tt(dt);
        var ht = new Array(256);
        tt(ht);
        var ft = new Array(29);
        tt(ft);
        var _t,
          pt,
          vt,
          gt = new Array(rt);
        function mt(t, e, n, r, i) {
          (this.static_tree = t),
            (this.extra_bits = e),
            (this.extra_base = n),
            (this.elems = r),
            (this.max_length = i),
            (this.has_stree = t && t.length);
        }
        function bt(t, e) {
          (this.dyn_tree = t), (this.max_code = 0), (this.stat_desc = e);
        }
        tt(gt);
        var yt = function (t) {
            return t < 256 ? dt[t] : dt[256 + (t >>> 7)];
          },
          wt = function (t, e) {
            (t.pending_buf[t.pending++] = 255 & e),
              (t.pending_buf[t.pending++] = (e >>> 8) & 255);
          },
          kt = function (t, e, n) {
            t.bi_valid > 16 - n
              ? ((t.bi_buf |= (e << t.bi_valid) & 65535),
                wt(t, t.bi_buf),
                (t.bi_buf = e >> (16 - t.bi_valid)),
                (t.bi_valid += n - 16))
              : ((t.bi_buf |= (e << t.bi_valid) & 65535), (t.bi_valid += n));
          },
          Ct = function (t, e, n) {
            kt(t, n[2 * e], n[2 * e + 1]);
          },
          xt = function (t, e) {
            var n = 0;
            do {
              (n |= 1 & t), (t >>>= 1), (n <<= 1);
            } while (--e > 0);
            return n >>> 1;
          },
          Et = function (t, e, n) {
            var r,
              i,
              o = new Array(16),
              a = 0;
            for (r = 1; r <= it; r++) (a = (a + n[r - 1]) << 1), (o[r] = a);
            for (i = 0; i <= e; i++) {
              var s = t[2 * i + 1];
              0 !== s && (t[2 * i] = xt(o[s]++, s));
            }
          },
          Lt = function (t) {
            var e;
            for (e = 0; e < nt; e++) t.dyn_ltree[2 * e] = 0;
            for (e = 0; e < rt; e++) t.dyn_dtree[2 * e] = 0;
            for (e = 0; e < 19; e++) t.bl_tree[2 * e] = 0;
            (t.dyn_ltree[512] = 1),
              (t.opt_len = t.static_len = 0),
              (t.sym_next = t.matches = 0);
          },
          St = function (t) {
            t.bi_valid > 8
              ? wt(t, t.bi_buf)
              : t.bi_valid > 0 && (t.pending_buf[t.pending++] = t.bi_buf),
              (t.bi_buf = 0),
              (t.bi_valid = 0);
          },
          Tt = function (t, e, n, r) {
            var i = 2 * e,
              o = 2 * n;
            return t[i] < t[o] || (t[i] === t[o] && r[e] <= r[n]);
          },
          At = function (t, e, n) {
            for (
              var r = t.heap[n], i = n << 1;
              i <= t.heap_len &&
              (i < t.heap_len &&
                Tt(e, t.heap[i + 1], t.heap[i], t.depth) &&
                i++,
              !Tt(e, r, t.heap[i], t.depth));

            )
              (t.heap[n] = t.heap[i]), (n = i), (i <<= 1);
            t.heap[n] = r;
          },
          It = function (t, e, n) {
            var r,
              i,
              o,
              a,
              s = 0;
            if (0 !== t.sym_next)
              do {
                (r = 255 & t.pending_buf[t.sym_buf + s++]),
                  (r += (255 & t.pending_buf[t.sym_buf + s++]) << 8),
                  (i = t.pending_buf[t.sym_buf + s++]),
                  0 === r
                    ? Ct(t, i, e)
                    : ((o = ht[i]),
                      Ct(t, o + et + 1, e),
                      0 !== (a = ot[o]) && ((i -= ft[o]), kt(t, i, a)),
                      r--,
                      (o = yt(r)),
                      Ct(t, o, n),
                      0 !== (a = at[o]) && ((r -= gt[o]), kt(t, r, a)));
              } while (s < t.sym_next);
            Ct(t, 256, e);
          },
          Ot = function (t, e) {
            var n,
              r,
              i,
              o = e.dyn_tree,
              a = e.stat_desc.static_tree,
              s = e.stat_desc.has_stree,
              c = e.stat_desc.elems,
              u = -1;
            for (t.heap_len = 0, t.heap_max = 573, n = 0; n < c; n++)
              0 !== o[2 * n]
                ? ((t.heap[++t.heap_len] = u = n), (t.depth[n] = 0))
                : (o[2 * n + 1] = 0);
            for (; t.heap_len < 2; )
              (o[2 * (i = t.heap[++t.heap_len] = u < 2 ? ++u : 0)] = 1),
                (t.depth[i] = 0),
                t.opt_len--,
                s && (t.static_len -= a[2 * i + 1]);
            for (e.max_code = u, n = t.heap_len >> 1; n >= 1; n--) At(t, o, n);
            i = c;
            do {
              (n = t.heap[1]),
                (t.heap[1] = t.heap[t.heap_len--]),
                At(t, o, 1),
                (r = t.heap[1]),
                (t.heap[--t.heap_max] = n),
                (t.heap[--t.heap_max] = r),
                (o[2 * i] = o[2 * n] + o[2 * r]),
                (t.depth[i] =
                  (t.depth[n] >= t.depth[r] ? t.depth[n] : t.depth[r]) + 1),
                (o[2 * n + 1] = o[2 * r + 1] = i),
                (t.heap[1] = i++),
                At(t, o, 1);
            } while (t.heap_len >= 2);
            (t.heap[--t.heap_max] = t.heap[1]),
              (function (t, e) {
                var n,
                  r,
                  i,
                  o,
                  a,
                  s,
                  c = e.dyn_tree,
                  u = e.max_code,
                  l = e.stat_desc.static_tree,
                  d = e.stat_desc.has_stree,
                  h = e.stat_desc.extra_bits,
                  f = e.stat_desc.extra_base,
                  _ = e.stat_desc.max_length,
                  p = 0;
                for (o = 0; o <= it; o++) t.bl_count[o] = 0;
                for (
                  c[2 * t.heap[t.heap_max] + 1] = 0, n = t.heap_max + 1;
                  n < 573;
                  n++
                )
                  (o = c[2 * c[2 * (r = t.heap[n]) + 1] + 1] + 1) > _ &&
                    ((o = _), p++),
                    (c[2 * r + 1] = o),
                    r > u ||
                      (t.bl_count[o]++,
                      (a = 0),
                      r >= f && (a = h[r - f]),
                      (s = c[2 * r]),
                      (t.opt_len += s * (o + a)),
                      d && (t.static_len += s * (l[2 * r + 1] + a)));
                if (0 !== p) {
                  do {
                    for (o = _ - 1; 0 === t.bl_count[o]; ) o--;
                    t.bl_count[o]--,
                      (t.bl_count[o + 1] += 2),
                      t.bl_count[_]--,
                      (p -= 2);
                  } while (p > 0);
                  for (o = _; 0 !== o; o--)
                    for (r = t.bl_count[o]; 0 !== r; )
                      (i = t.heap[--n]) > u ||
                        (c[2 * i + 1] !== o &&
                          ((t.opt_len += (o - c[2 * i + 1]) * c[2 * i]),
                          (c[2 * i + 1] = o)),
                        r--);
                }
              })(t, e),
              Et(o, u, t.bl_count);
          },
          Dt = function (t, e, n) {
            var r,
              i,
              o = -1,
              a = e[1],
              s = 0,
              c = 7,
              u = 4;
            for (
              0 === a && ((c = 138), (u = 3)),
                e[2 * (n + 1) + 1] = 65535,
                r = 0;
              r <= n;
              r++
            )
              (i = a),
                (a = e[2 * (r + 1) + 1]),
                (++s < c && i === a) ||
                  (s < u
                    ? (t.bl_tree[2 * i] += s)
                    : 0 !== i
                    ? (i !== o && t.bl_tree[2 * i]++, t.bl_tree[32]++)
                    : s <= 10
                    ? t.bl_tree[34]++
                    : t.bl_tree[36]++,
                  (s = 0),
                  (o = i),
                  0 === a
                    ? ((c = 138), (u = 3))
                    : i === a
                    ? ((c = 6), (u = 3))
                    : ((c = 7), (u = 4)));
          },
          Nt = function (t, e, n) {
            var r,
              i,
              o = -1,
              a = e[1],
              s = 0,
              c = 7,
              u = 4;
            for (0 === a && ((c = 138), (u = 3)), r = 0; r <= n; r++)
              if (((i = a), (a = e[2 * (r + 1) + 1]), !(++s < c && i === a))) {
                if (s < u)
                  do {
                    Ct(t, i, t.bl_tree);
                  } while (0 != --s);
                else
                  0 !== i
                    ? (i !== o && (Ct(t, i, t.bl_tree), s--),
                      Ct(t, 16, t.bl_tree),
                      kt(t, s - 3, 2))
                    : s <= 10
                    ? (Ct(t, 17, t.bl_tree), kt(t, s - 3, 3))
                    : (Ct(t, 18, t.bl_tree), kt(t, s - 11, 7));
                (s = 0),
                  (o = i),
                  0 === a
                    ? ((c = 138), (u = 3))
                    : i === a
                    ? ((c = 6), (u = 3))
                    : ((c = 7), (u = 4));
              }
          },
          Rt = !1,
          zt = function (t, e, n, r) {
            kt(t, 0 + (r ? 1 : 0), 3),
              St(t),
              wt(t, n),
              wt(t, ~n),
              n && t.pending_buf.set(t.window.subarray(e, e + n), t.pending),
              (t.pending += n);
          },
          Pt = function (t, e, n, r) {
            var i,
              o,
              a = 0;
            t.level > 0
              ? (2 === t.strm.data_type &&
                  (t.strm.data_type = (function (t) {
                    var e,
                      n = 4093624447;
                    for (e = 0; e <= 31; e++, n >>>= 1)
                      if (1 & n && 0 !== t.dyn_ltree[2 * e]) return 0;
                    if (
                      0 !== t.dyn_ltree[18] ||
                      0 !== t.dyn_ltree[20] ||
                      0 !== t.dyn_ltree[26]
                    )
                      return 1;
                    for (e = 32; e < et; e++)
                      if (0 !== t.dyn_ltree[2 * e]) return 1;
                    return 0;
                  })(t)),
                Ot(t, t.l_desc),
                Ot(t, t.d_desc),
                (a = (function (t) {
                  var e;
                  for (
                    Dt(t, t.dyn_ltree, t.l_desc.max_code),
                      Dt(t, t.dyn_dtree, t.d_desc.max_code),
                      Ot(t, t.bl_desc),
                      e = 18;
                    e >= 3 && 0 === t.bl_tree[2 * ct[e] + 1];
                    e--
                  );
                  return (t.opt_len += 3 * (e + 1) + 5 + 5 + 4), e;
                })(t)),
                (i = (t.opt_len + 3 + 7) >>> 3),
                (o = (t.static_len + 3 + 7) >>> 3) <= i && (i = o))
              : (i = o = n + 5),
              n + 4 <= i && -1 !== e
                ? zt(t, e, n, r)
                : 4 === t.strategy || o === i
                ? (kt(t, 2 + (r ? 1 : 0), 3), It(t, ut, lt))
                : (kt(t, 4 + (r ? 1 : 0), 3),
                  (function (t, e, n, r) {
                    var i;
                    for (
                      kt(t, e - 257, 5),
                        kt(t, n - 1, 5),
                        kt(t, r - 4, 4),
                        i = 0;
                      i < r;
                      i++
                    )
                      kt(t, t.bl_tree[2 * ct[i] + 1], 3);
                    Nt(t, t.dyn_ltree, e - 1), Nt(t, t.dyn_dtree, n - 1);
                  })(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, a + 1),
                  It(t, t.dyn_ltree, t.dyn_dtree)),
              Lt(t),
              r && St(t);
          },
          jt = {
            _tr_init: function (t) {
              Rt ||
                ((function () {
                  var t,
                    e,
                    n,
                    r,
                    i,
                    o = new Array(16);
                  for (n = 0, r = 0; r < 28; r++)
                    for (ft[r] = n, t = 0; t < 1 << ot[r]; t++) ht[n++] = r;
                  for (ht[n - 1] = r, i = 0, r = 0; r < 16; r++)
                    for (gt[r] = i, t = 0; t < 1 << at[r]; t++) dt[i++] = r;
                  for (i >>= 7; r < rt; r++)
                    for (gt[r] = i << 7, t = 0; t < 1 << (at[r] - 7); t++)
                      dt[256 + i++] = r;
                  for (e = 0; e <= it; e++) o[e] = 0;
                  for (t = 0; t <= 143; ) (ut[2 * t + 1] = 8), t++, o[8]++;
                  for (; t <= 255; ) (ut[2 * t + 1] = 9), t++, o[9]++;
                  for (; t <= 279; ) (ut[2 * t + 1] = 7), t++, o[7]++;
                  for (; t <= 287; ) (ut[2 * t + 1] = 8), t++, o[8]++;
                  for (Et(ut, 287, o), t = 0; t < rt; t++)
                    (lt[2 * t + 1] = 5), (lt[2 * t] = xt(t, 5));
                  (_t = new mt(ut, ot, 257, nt, it)),
                    (pt = new mt(lt, at, 0, rt, it)),
                    (vt = new mt(new Array(0), st, 0, 19, 7));
                })(),
                (Rt = !0)),
                (t.l_desc = new bt(t.dyn_ltree, _t)),
                (t.d_desc = new bt(t.dyn_dtree, pt)),
                (t.bl_desc = new bt(t.bl_tree, vt)),
                (t.bi_buf = 0),
                (t.bi_valid = 0),
                Lt(t);
            },
            _tr_stored_block: zt,
            _tr_flush_block: Pt,
            _tr_tally: function (t, e, n) {
              return (
                (t.pending_buf[t.sym_buf + t.sym_next++] = e),
                (t.pending_buf[t.sym_buf + t.sym_next++] = e >> 8),
                (t.pending_buf[t.sym_buf + t.sym_next++] = n),
                0 === e
                  ? t.dyn_ltree[2 * n]++
                  : (t.matches++,
                    e--,
                    t.dyn_ltree[2 * (ht[n] + et + 1)]++,
                    t.dyn_dtree[2 * yt(e)]++),
                t.sym_next === t.sym_end
              );
            },
            _tr_align: function (t) {
              kt(t, 2, 3),
                Ct(t, 256, ut),
                (function (t) {
                  16 === t.bi_valid
                    ? (wt(t, t.bi_buf), (t.bi_buf = 0), (t.bi_valid = 0))
                    : t.bi_valid >= 8 &&
                      ((t.pending_buf[t.pending++] = 255 & t.bi_buf),
                      (t.bi_buf >>= 8),
                      (t.bi_valid -= 8));
                })(t);
            },
          },
          Ft = function (t, e, n, r) {
            for (var i = 65535 & t, o = (t >>> 16) & 65535, a = 0; 0 !== n; ) {
              n -= a = n > 2e3 ? 2e3 : n;
              do {
                o = (o + (i = (i + e[r++]) | 0)) | 0;
              } while (--a);
              (i %= 65521), (o %= 65521);
            }
            return i | (o << 16);
          },
          Ht = new Uint32Array(
            (function () {
              for (var t, e = [], n = 0; n < 256; n++) {
                t = n;
                for (var r = 0; r < 8; r++)
                  t = 1 & t ? 3988292384 ^ (t >>> 1) : t >>> 1;
                e[n] = t;
              }
              return e;
            })()
          ),
          Mt = function (t, e, n, r) {
            var i = Ht,
              o = r + n;
            t ^= -1;
            for (var a = r; a < o; a++) t = (t >>> 8) ^ i[255 & (t ^ e[a])];
            return -1 ^ t;
          },
          Ut = {
            2: "need dictionary",
            1: "stream end",
            0: "",
            "-1": "file error",
            "-2": "stream error",
            "-3": "data error",
            "-4": "insufficient memory",
            "-5": "buffer error",
            "-6": "incompatible version",
          },
          Gt = {
            Z_NO_FLUSH: 0,
            Z_PARTIAL_FLUSH: 1,
            Z_SYNC_FLUSH: 2,
            Z_FULL_FLUSH: 3,
            Z_FINISH: 4,
            Z_BLOCK: 5,
            Z_TREES: 6,
            Z_OK: 0,
            Z_STREAM_END: 1,
            Z_NEED_DICT: 2,
            Z_ERRNO: -1,
            Z_STREAM_ERROR: -2,
            Z_DATA_ERROR: -3,
            Z_MEM_ERROR: -4,
            Z_BUF_ERROR: -5,
            Z_NO_COMPRESSION: 0,
            Z_BEST_SPEED: 1,
            Z_BEST_COMPRESSION: 9,
            Z_DEFAULT_COMPRESSION: -1,
            Z_FILTERED: 1,
            Z_HUFFMAN_ONLY: 2,
            Z_RLE: 3,
            Z_FIXED: 4,
            Z_DEFAULT_STRATEGY: 0,
            Z_BINARY: 0,
            Z_TEXT: 1,
            Z_UNKNOWN: 2,
            Z_DEFLATED: 8,
          },
          Bt = jt._tr_init,
          Zt = jt._tr_stored_block,
          Jt = jt._tr_flush_block,
          Vt = jt._tr_tally,
          Kt = jt._tr_align,
          Wt = Gt.Z_NO_FLUSH,
          Yt = Gt.Z_PARTIAL_FLUSH,
          Xt = Gt.Z_FULL_FLUSH,
          qt = Gt.Z_FINISH,
          $t = Gt.Z_BLOCK,
          Qt = Gt.Z_OK,
          te = Gt.Z_STREAM_END,
          ee = Gt.Z_STREAM_ERROR,
          ne = Gt.Z_DATA_ERROR,
          re = Gt.Z_BUF_ERROR,
          ie = Gt.Z_DEFAULT_COMPRESSION,
          oe = Gt.Z_FILTERED,
          ae = Gt.Z_HUFFMAN_ONLY,
          se = Gt.Z_RLE,
          ce = Gt.Z_FIXED,
          ue = Gt.Z_DEFAULT_STRATEGY,
          le = Gt.Z_UNKNOWN,
          de = Gt.Z_DEFLATED,
          he = 258,
          fe = 262,
          _e = 42,
          pe = 113,
          ve = 666,
          ge = function (t, e) {
            return (t.msg = Ut[e]), e;
          },
          me = function (t) {
            return 2 * t - (t > 4 ? 9 : 0);
          },
          be = function (t) {
            for (var e = t.length; --e >= 0; ) t[e] = 0;
          },
          ye = function (t) {
            var e,
              n,
              r,
              i = t.w_size;
            r = e = t.hash_size;
            do {
              (n = t.head[--r]), (t.head[r] = n >= i ? n - i : 0);
            } while (--e);
            r = e = i;
            do {
              (n = t.prev[--r]), (t.prev[r] = n >= i ? n - i : 0);
            } while (--e);
          },
          we = function (t, e, n) {
            return ((e << t.hash_shift) ^ n) & t.hash_mask;
          },
          ke = function (t) {
            var e = t.state,
              n = e.pending;
            n > t.avail_out && (n = t.avail_out),
              0 !== n &&
                (t.output.set(
                  e.pending_buf.subarray(e.pending_out, e.pending_out + n),
                  t.next_out
                ),
                (t.next_out += n),
                (e.pending_out += n),
                (t.total_out += n),
                (t.avail_out -= n),
                (e.pending -= n),
                0 === e.pending && (e.pending_out = 0));
          },
          Ce = function (t, e) {
            Jt(
              t,
              t.block_start >= 0 ? t.block_start : -1,
              t.strstart - t.block_start,
              e
            ),
              (t.block_start = t.strstart),
              ke(t.strm);
          },
          xe = function (t, e) {
            t.pending_buf[t.pending++] = e;
          },
          Ee = function (t, e) {
            (t.pending_buf[t.pending++] = (e >>> 8) & 255),
              (t.pending_buf[t.pending++] = 255 & e);
          },
          Le = function (t, e, n, r) {
            var i = t.avail_in;
            return (
              i > r && (i = r),
              0 === i
                ? 0
                : ((t.avail_in -= i),
                  e.set(t.input.subarray(t.next_in, t.next_in + i), n),
                  1 === t.state.wrap
                    ? (t.adler = Ft(t.adler, e, i, n))
                    : 2 === t.state.wrap && (t.adler = Mt(t.adler, e, i, n)),
                  (t.next_in += i),
                  (t.total_in += i),
                  i)
            );
          },
          Se = function (t, e) {
            var n,
              r,
              i = t.max_chain_length,
              o = t.strstart,
              a = t.prev_length,
              s = t.nice_match,
              c = t.strstart > t.w_size - fe ? t.strstart - (t.w_size - fe) : 0,
              u = t.window,
              l = t.w_mask,
              d = t.prev,
              h = t.strstart + he,
              f = u[o + a - 1],
              _ = u[o + a];
            t.prev_length >= t.good_match && (i >>= 2),
              s > t.lookahead && (s = t.lookahead);
            do {
              if (
                u[(n = e) + a] === _ &&
                u[n + a - 1] === f &&
                u[n] === u[o] &&
                u[++n] === u[o + 1]
              ) {
                (o += 2), n++;
                do {} while (
                  u[++o] === u[++n] &&
                  u[++o] === u[++n] &&
                  u[++o] === u[++n] &&
                  u[++o] === u[++n] &&
                  u[++o] === u[++n] &&
                  u[++o] === u[++n] &&
                  u[++o] === u[++n] &&
                  u[++o] === u[++n] &&
                  o < h
                );
                if (((r = he - (h - o)), (o = h - he), r > a)) {
                  if (((t.match_start = e), (a = r), r >= s)) break;
                  (f = u[o + a - 1]), (_ = u[o + a]);
                }
              }
            } while ((e = d[e & l]) > c && 0 != --i);
            return a <= t.lookahead ? a : t.lookahead;
          },
          Te = function (t) {
            var e,
              n,
              r,
              i = t.w_size;
            do {
              if (
                ((n = t.window_size - t.lookahead - t.strstart),
                t.strstart >= i + (i - fe) &&
                  (t.window.set(t.window.subarray(i, i + i - n), 0),
                  (t.match_start -= i),
                  (t.strstart -= i),
                  (t.block_start -= i),
                  t.insert > t.strstart && (t.insert = t.strstart),
                  ye(t),
                  (n += i)),
                0 === t.strm.avail_in)
              )
                break;
              if (
                ((e = Le(t.strm, t.window, t.strstart + t.lookahead, n)),
                (t.lookahead += e),
                t.lookahead + t.insert >= 3)
              )
                for (
                  r = t.strstart - t.insert,
                    t.ins_h = t.window[r],
                    t.ins_h = we(t, t.ins_h, t.window[r + 1]);
                  t.insert &&
                  ((t.ins_h = we(t, t.ins_h, t.window[r + 3 - 1])),
                  (t.prev[r & t.w_mask] = t.head[t.ins_h]),
                  (t.head[t.ins_h] = r),
                  r++,
                  t.insert--,
                  !(t.lookahead + t.insert < 3));

                );
            } while (t.lookahead < fe && 0 !== t.strm.avail_in);
          },
          Ae = function (t, e) {
            var n,
              r,
              i,
              o =
                t.pending_buf_size - 5 > t.w_size
                  ? t.w_size
                  : t.pending_buf_size - 5,
              a = 0,
              s = t.strm.avail_in;
            do {
              if (
                ((n = 65535),
                (i = (t.bi_valid + 42) >> 3),
                t.strm.avail_out < i)
              )
                break;
              if (
                ((i = t.strm.avail_out - i),
                n > (r = t.strstart - t.block_start) + t.strm.avail_in &&
                  (n = r + t.strm.avail_in),
                n > i && (n = i),
                n < o &&
                  ((0 === n && e !== qt) ||
                    e === Wt ||
                    n !== r + t.strm.avail_in))
              )
                break;
              (a = e === qt && n === r + t.strm.avail_in ? 1 : 0),
                Zt(t, 0, 0, a),
                (t.pending_buf[t.pending - 4] = n),
                (t.pending_buf[t.pending - 3] = n >> 8),
                (t.pending_buf[t.pending - 2] = ~n),
                (t.pending_buf[t.pending - 1] = ~n >> 8),
                ke(t.strm),
                r &&
                  (r > n && (r = n),
                  t.strm.output.set(
                    t.window.subarray(t.block_start, t.block_start + r),
                    t.strm.next_out
                  ),
                  (t.strm.next_out += r),
                  (t.strm.avail_out -= r),
                  (t.strm.total_out += r),
                  (t.block_start += r),
                  (n -= r)),
                n &&
                  (Le(t.strm, t.strm.output, t.strm.next_out, n),
                  (t.strm.next_out += n),
                  (t.strm.avail_out -= n),
                  (t.strm.total_out += n));
            } while (0 === a);
            return (
              (s -= t.strm.avail_in) &&
                (s >= t.w_size
                  ? ((t.matches = 2),
                    t.window.set(
                      t.strm.input.subarray(
                        t.strm.next_in - t.w_size,
                        t.strm.next_in
                      ),
                      0
                    ),
                    (t.strstart = t.w_size),
                    (t.insert = t.strstart))
                  : (t.window_size - t.strstart <= s &&
                      ((t.strstart -= t.w_size),
                      t.window.set(
                        t.window.subarray(t.w_size, t.w_size + t.strstart),
                        0
                      ),
                      t.matches < 2 && t.matches++,
                      t.insert > t.strstart && (t.insert = t.strstart)),
                    t.window.set(
                      t.strm.input.subarray(t.strm.next_in - s, t.strm.next_in),
                      t.strstart
                    ),
                    (t.strstart += s),
                    (t.insert +=
                      s > t.w_size - t.insert ? t.w_size - t.insert : s)),
                (t.block_start = t.strstart)),
              t.high_water < t.strstart && (t.high_water = t.strstart),
              a
                ? 4
                : e !== Wt &&
                  e !== qt &&
                  0 === t.strm.avail_in &&
                  t.strstart === t.block_start
                ? 2
                : ((i = t.window_size - t.strstart),
                  t.strm.avail_in > i &&
                    t.block_start >= t.w_size &&
                    ((t.block_start -= t.w_size),
                    (t.strstart -= t.w_size),
                    t.window.set(
                      t.window.subarray(t.w_size, t.w_size + t.strstart),
                      0
                    ),
                    t.matches < 2 && t.matches++,
                    (i += t.w_size),
                    t.insert > t.strstart && (t.insert = t.strstart)),
                  i > t.strm.avail_in && (i = t.strm.avail_in),
                  i &&
                    (Le(t.strm, t.window, t.strstart, i),
                    (t.strstart += i),
                    (t.insert +=
                      i > t.w_size - t.insert ? t.w_size - t.insert : i)),
                  t.high_water < t.strstart && (t.high_water = t.strstart),
                  (i = (t.bi_valid + 42) >> 3),
                  (o =
                    (i =
                      t.pending_buf_size - i > 65535
                        ? 65535
                        : t.pending_buf_size - i) > t.w_size
                      ? t.w_size
                      : i),
                  ((r = t.strstart - t.block_start) >= o ||
                    ((r || e === qt) &&
                      e !== Wt &&
                      0 === t.strm.avail_in &&
                      r <= i)) &&
                    ((n = r > i ? i : r),
                    (a = e === qt && 0 === t.strm.avail_in && n === r ? 1 : 0),
                    Zt(t, t.block_start, n, a),
                    (t.block_start += n),
                    ke(t.strm)),
                  a ? 3 : 1)
            );
          },
          Ie = function (t, e) {
            for (var n, r; ; ) {
              if (t.lookahead < fe) {
                if ((Te(t), t.lookahead < fe && e === Wt)) return 1;
                if (0 === t.lookahead) break;
              }
              if (
                ((n = 0),
                t.lookahead >= 3 &&
                  ((t.ins_h = we(t, t.ins_h, t.window[t.strstart + 3 - 1])),
                  (n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
                  (t.head[t.ins_h] = t.strstart)),
                0 !== n &&
                  t.strstart - n <= t.w_size - fe &&
                  (t.match_length = Se(t, n)),
                t.match_length >= 3)
              )
                if (
                  ((r = Vt(t, t.strstart - t.match_start, t.match_length - 3)),
                  (t.lookahead -= t.match_length),
                  t.match_length <= t.max_lazy_match && t.lookahead >= 3)
                ) {
                  t.match_length--;
                  do {
                    t.strstart++,
                      (t.ins_h = we(t, t.ins_h, t.window[t.strstart + 3 - 1])),
                      (n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
                      (t.head[t.ins_h] = t.strstart);
                  } while (0 != --t.match_length);
                  t.strstart++;
                } else
                  (t.strstart += t.match_length),
                    (t.match_length = 0),
                    (t.ins_h = t.window[t.strstart]),
                    (t.ins_h = we(t, t.ins_h, t.window[t.strstart + 1]));
              else
                (r = Vt(t, 0, t.window[t.strstart])),
                  t.lookahead--,
                  t.strstart++;
              if (r && (Ce(t, !1), 0 === t.strm.avail_out)) return 1;
            }
            return (
              (t.insert = t.strstart < 2 ? t.strstart : 2),
              e === qt
                ? (Ce(t, !0), 0 === t.strm.avail_out ? 3 : 4)
                : t.sym_next && (Ce(t, !1), 0 === t.strm.avail_out)
                ? 1
                : 2
            );
          },
          Oe = function (t, e) {
            for (var n, r, i; ; ) {
              if (t.lookahead < fe) {
                if ((Te(t), t.lookahead < fe && e === Wt)) return 1;
                if (0 === t.lookahead) break;
              }
              if (
                ((n = 0),
                t.lookahead >= 3 &&
                  ((t.ins_h = we(t, t.ins_h, t.window[t.strstart + 3 - 1])),
                  (n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
                  (t.head[t.ins_h] = t.strstart)),
                (t.prev_length = t.match_length),
                (t.prev_match = t.match_start),
                (t.match_length = 2),
                0 !== n &&
                  t.prev_length < t.max_lazy_match &&
                  t.strstart - n <= t.w_size - fe &&
                  ((t.match_length = Se(t, n)),
                  t.match_length <= 5 &&
                    (t.strategy === oe ||
                      (3 === t.match_length &&
                        t.strstart - t.match_start > 4096)) &&
                    (t.match_length = 2)),
                t.prev_length >= 3 && t.match_length <= t.prev_length)
              ) {
                (i = t.strstart + t.lookahead - 3),
                  (r = Vt(t, t.strstart - 1 - t.prev_match, t.prev_length - 3)),
                  (t.lookahead -= t.prev_length - 1),
                  (t.prev_length -= 2);
                do {
                  ++t.strstart <= i &&
                    ((t.ins_h = we(t, t.ins_h, t.window[t.strstart + 3 - 1])),
                    (n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
                    (t.head[t.ins_h] = t.strstart));
                } while (0 != --t.prev_length);
                if (
                  ((t.match_available = 0),
                  (t.match_length = 2),
                  t.strstart++,
                  r && (Ce(t, !1), 0 === t.strm.avail_out))
                )
                  return 1;
              } else if (t.match_available) {
                if (
                  ((r = Vt(t, 0, t.window[t.strstart - 1])) && Ce(t, !1),
                  t.strstart++,
                  t.lookahead--,
                  0 === t.strm.avail_out)
                )
                  return 1;
              } else (t.match_available = 1), t.strstart++, t.lookahead--;
            }
            return (
              t.match_available &&
                ((r = Vt(t, 0, t.window[t.strstart - 1])),
                (t.match_available = 0)),
              (t.insert = t.strstart < 2 ? t.strstart : 2),
              e === qt
                ? (Ce(t, !0), 0 === t.strm.avail_out ? 3 : 4)
                : t.sym_next && (Ce(t, !1), 0 === t.strm.avail_out)
                ? 1
                : 2
            );
          };
        function De(t, e, n, r, i) {
          (this.good_length = t),
            (this.max_lazy = e),
            (this.nice_length = n),
            (this.max_chain = r),
            (this.func = i);
        }
        var Ne = [
          new De(0, 0, 0, 0, Ae),
          new De(4, 4, 8, 4, Ie),
          new De(4, 5, 16, 8, Ie),
          new De(4, 6, 32, 32, Ie),
          new De(4, 4, 16, 16, Oe),
          new De(8, 16, 32, 32, Oe),
          new De(8, 16, 128, 128, Oe),
          new De(8, 32, 128, 256, Oe),
          new De(32, 128, 258, 1024, Oe),
          new De(32, 258, 258, 4096, Oe),
        ];
        function Re() {
          (this.strm = null),
            (this.status = 0),
            (this.pending_buf = null),
            (this.pending_buf_size = 0),
            (this.pending_out = 0),
            (this.pending = 0),
            (this.wrap = 0),
            (this.gzhead = null),
            (this.gzindex = 0),
            (this.method = de),
            (this.last_flush = -1),
            (this.w_size = 0),
            (this.w_bits = 0),
            (this.w_mask = 0),
            (this.window = null),
            (this.window_size = 0),
            (this.prev = null),
            (this.head = null),
            (this.ins_h = 0),
            (this.hash_size = 0),
            (this.hash_bits = 0),
            (this.hash_mask = 0),
            (this.hash_shift = 0),
            (this.block_start = 0),
            (this.match_length = 0),
            (this.prev_match = 0),
            (this.match_available = 0),
            (this.strstart = 0),
            (this.match_start = 0),
            (this.lookahead = 0),
            (this.prev_length = 0),
            (this.max_chain_length = 0),
            (this.max_lazy_match = 0),
            (this.level = 0),
            (this.strategy = 0),
            (this.good_match = 0),
            (this.nice_match = 0),
            (this.dyn_ltree = new Uint16Array(1146)),
            (this.dyn_dtree = new Uint16Array(122)),
            (this.bl_tree = new Uint16Array(78)),
            be(this.dyn_ltree),
            be(this.dyn_dtree),
            be(this.bl_tree),
            (this.l_desc = null),
            (this.d_desc = null),
            (this.bl_desc = null),
            (this.bl_count = new Uint16Array(16)),
            (this.heap = new Uint16Array(573)),
            be(this.heap),
            (this.heap_len = 0),
            (this.heap_max = 0),
            (this.depth = new Uint16Array(573)),
            be(this.depth),
            (this.sym_buf = 0),
            (this.lit_bufsize = 0),
            (this.sym_next = 0),
            (this.sym_end = 0),
            (this.opt_len = 0),
            (this.static_len = 0),
            (this.matches = 0),
            (this.insert = 0),
            (this.bi_buf = 0),
            (this.bi_valid = 0);
        }
        var ze = function (t) {
            if (!t) return 1;
            var e = t.state;
            return !e ||
              e.strm !== t ||
              (e.status !== _e &&
                57 !== e.status &&
                69 !== e.status &&
                73 !== e.status &&
                91 !== e.status &&
                103 !== e.status &&
                e.status !== pe &&
                e.status !== ve)
              ? 1
              : 0;
          },
          Pe = function (t) {
            if (ze(t)) return ge(t, ee);
            (t.total_in = t.total_out = 0), (t.data_type = le);
            var e = t.state;
            return (
              (e.pending = 0),
              (e.pending_out = 0),
              e.wrap < 0 && (e.wrap = -e.wrap),
              (e.status = 2 === e.wrap ? 57 : e.wrap ? _e : pe),
              (t.adler = 2 === e.wrap ? 0 : 1),
              (e.last_flush = -2),
              Bt(e),
              Qt
            );
          },
          je = function (t) {
            var e,
              n = Pe(t);
            return (
              n === Qt &&
                (((e = t.state).window_size = 2 * e.w_size),
                be(e.head),
                (e.max_lazy_match = Ne[e.level].max_lazy),
                (e.good_match = Ne[e.level].good_length),
                (e.nice_match = Ne[e.level].nice_length),
                (e.max_chain_length = Ne[e.level].max_chain),
                (e.strstart = 0),
                (e.block_start = 0),
                (e.lookahead = 0),
                (e.insert = 0),
                (e.match_length = e.prev_length = 2),
                (e.match_available = 0),
                (e.ins_h = 0)),
              n
            );
          },
          Fe = function (t, e, n, r, i, o) {
            if (!t) return ee;
            var a = 1;
            if (
              (e === ie && (e = 6),
              r < 0 ? ((a = 0), (r = -r)) : r > 15 && ((a = 2), (r -= 16)),
              i < 1 ||
                i > 9 ||
                n !== de ||
                r < 8 ||
                r > 15 ||
                e < 0 ||
                e > 9 ||
                o < 0 ||
                o > ce ||
                (8 === r && 1 !== a))
            )
              return ge(t, ee);
            8 === r && (r = 9);
            var s = new Re();
            return (
              (t.state = s),
              (s.strm = t),
              (s.status = _e),
              (s.wrap = a),
              (s.gzhead = null),
              (s.w_bits = r),
              (s.w_size = 1 << s.w_bits),
              (s.w_mask = s.w_size - 1),
              (s.hash_bits = i + 7),
              (s.hash_size = 1 << s.hash_bits),
              (s.hash_mask = s.hash_size - 1),
              (s.hash_shift = ~~((s.hash_bits + 3 - 1) / 3)),
              (s.window = new Uint8Array(2 * s.w_size)),
              (s.head = new Uint16Array(s.hash_size)),
              (s.prev = new Uint16Array(s.w_size)),
              (s.lit_bufsize = 1 << (i + 6)),
              (s.pending_buf_size = 4 * s.lit_bufsize),
              (s.pending_buf = new Uint8Array(s.pending_buf_size)),
              (s.sym_buf = s.lit_bufsize),
              (s.sym_end = 3 * (s.lit_bufsize - 1)),
              (s.level = e),
              (s.strategy = o),
              (s.method = n),
              je(t)
            );
          },
          He = {
            deflateInit: function (t, e) {
              return Fe(t, e, de, 15, 8, ue);
            },
            deflateInit2: Fe,
            deflateReset: je,
            deflateResetKeep: Pe,
            deflateSetHeader: function (t, e) {
              return ze(t) || 2 !== t.state.wrap
                ? ee
                : ((t.state.gzhead = e), Qt);
            },
            deflate: function (t, e) {
              if (ze(t) || e > $t || e < 0) return t ? ge(t, ee) : ee;
              var n = t.state;
              if (
                !t.output ||
                (0 !== t.avail_in && !t.input) ||
                (n.status === ve && e !== qt)
              )
                return ge(t, 0 === t.avail_out ? re : ee);
              var r = n.last_flush;
              if (((n.last_flush = e), 0 !== n.pending)) {
                if ((ke(t), 0 === t.avail_out)) return (n.last_flush = -1), Qt;
              } else if (0 === t.avail_in && me(e) <= me(r) && e !== qt)
                return ge(t, re);
              if (n.status === ve && 0 !== t.avail_in) return ge(t, re);
              if (
                (n.status === _e && 0 === n.wrap && (n.status = pe),
                n.status === _e)
              ) {
                var i = (de + ((n.w_bits - 8) << 4)) << 8;
                if (
                  ((i |=
                    (n.strategy >= ae || n.level < 2
                      ? 0
                      : n.level < 6
                      ? 1
                      : 6 === n.level
                      ? 2
                      : 3) << 6),
                  0 !== n.strstart && (i |= 32),
                  Ee(n, (i += 31 - (i % 31))),
                  0 !== n.strstart &&
                    (Ee(n, t.adler >>> 16), Ee(n, 65535 & t.adler)),
                  (t.adler = 1),
                  (n.status = pe),
                  ke(t),
                  0 !== n.pending)
                )
                  return (n.last_flush = -1), Qt;
              }
              if (57 === n.status)
                if (((t.adler = 0), xe(n, 31), xe(n, 139), xe(n, 8), n.gzhead))
                  xe(
                    n,
                    (n.gzhead.text ? 1 : 0) +
                      (n.gzhead.hcrc ? 2 : 0) +
                      (n.gzhead.extra ? 4 : 0) +
                      (n.gzhead.name ? 8 : 0) +
                      (n.gzhead.comment ? 16 : 0)
                  ),
                    xe(n, 255 & n.gzhead.time),
                    xe(n, (n.gzhead.time >> 8) & 255),
                    xe(n, (n.gzhead.time >> 16) & 255),
                    xe(n, (n.gzhead.time >> 24) & 255),
                    xe(
                      n,
                      9 === n.level
                        ? 2
                        : n.strategy >= ae || n.level < 2
                        ? 4
                        : 0
                    ),
                    xe(n, 255 & n.gzhead.os),
                    n.gzhead.extra &&
                      n.gzhead.extra.length &&
                      (xe(n, 255 & n.gzhead.extra.length),
                      xe(n, (n.gzhead.extra.length >> 8) & 255)),
                    n.gzhead.hcrc &&
                      (t.adler = Mt(t.adler, n.pending_buf, n.pending, 0)),
                    (n.gzindex = 0),
                    (n.status = 69);
                else if (
                  (xe(n, 0),
                  xe(n, 0),
                  xe(n, 0),
                  xe(n, 0),
                  xe(n, 0),
                  xe(
                    n,
                    9 === n.level ? 2 : n.strategy >= ae || n.level < 2 ? 4 : 0
                  ),
                  xe(n, 3),
                  (n.status = pe),
                  ke(t),
                  0 !== n.pending)
                )
                  return (n.last_flush = -1), Qt;
              if (69 === n.status) {
                if (n.gzhead.extra) {
                  for (
                    var o = n.pending,
                      a = (65535 & n.gzhead.extra.length) - n.gzindex;
                    n.pending + a > n.pending_buf_size;

                  ) {
                    var s = n.pending_buf_size - n.pending;
                    if (
                      (n.pending_buf.set(
                        n.gzhead.extra.subarray(n.gzindex, n.gzindex + s),
                        n.pending
                      ),
                      (n.pending = n.pending_buf_size),
                      n.gzhead.hcrc &&
                        n.pending > o &&
                        (t.adler = Mt(
                          t.adler,
                          n.pending_buf,
                          n.pending - o,
                          o
                        )),
                      (n.gzindex += s),
                      ke(t),
                      0 !== n.pending)
                    )
                      return (n.last_flush = -1), Qt;
                    (o = 0), (a -= s);
                  }
                  var c = new Uint8Array(n.gzhead.extra);
                  n.pending_buf.set(
                    c.subarray(n.gzindex, n.gzindex + a),
                    n.pending
                  ),
                    (n.pending += a),
                    n.gzhead.hcrc &&
                      n.pending > o &&
                      (t.adler = Mt(t.adler, n.pending_buf, n.pending - o, o)),
                    (n.gzindex = 0);
                }
                n.status = 73;
              }
              if (73 === n.status) {
                if (n.gzhead.name) {
                  var u,
                    l = n.pending;
                  do {
                    if (n.pending === n.pending_buf_size) {
                      if (
                        (n.gzhead.hcrc &&
                          n.pending > l &&
                          (t.adler = Mt(
                            t.adler,
                            n.pending_buf,
                            n.pending - l,
                            l
                          )),
                        ke(t),
                        0 !== n.pending)
                      )
                        return (n.last_flush = -1), Qt;
                      l = 0;
                    }
                    (u =
                      n.gzindex < n.gzhead.name.length
                        ? 255 & n.gzhead.name.charCodeAt(n.gzindex++)
                        : 0),
                      xe(n, u);
                  } while (0 !== u);
                  n.gzhead.hcrc &&
                    n.pending > l &&
                    (t.adler = Mt(t.adler, n.pending_buf, n.pending - l, l)),
                    (n.gzindex = 0);
                }
                n.status = 91;
              }
              if (91 === n.status) {
                if (n.gzhead.comment) {
                  var d,
                    h = n.pending;
                  do {
                    if (n.pending === n.pending_buf_size) {
                      if (
                        (n.gzhead.hcrc &&
                          n.pending > h &&
                          (t.adler = Mt(
                            t.adler,
                            n.pending_buf,
                            n.pending - h,
                            h
                          )),
                        ke(t),
                        0 !== n.pending)
                      )
                        return (n.last_flush = -1), Qt;
                      h = 0;
                    }
                    (d =
                      n.gzindex < n.gzhead.comment.length
                        ? 255 & n.gzhead.comment.charCodeAt(n.gzindex++)
                        : 0),
                      xe(n, d);
                  } while (0 !== d);
                  n.gzhead.hcrc &&
                    n.pending > h &&
                    (t.adler = Mt(t.adler, n.pending_buf, n.pending - h, h));
                }
                n.status = 103;
              }
              if (103 === n.status) {
                if (n.gzhead.hcrc) {
                  if (
                    n.pending + 2 > n.pending_buf_size &&
                    (ke(t), 0 !== n.pending)
                  )
                    return (n.last_flush = -1), Qt;
                  xe(n, 255 & t.adler),
                    xe(n, (t.adler >> 8) & 255),
                    (t.adler = 0);
                }
                if (((n.status = pe), ke(t), 0 !== n.pending))
                  return (n.last_flush = -1), Qt;
              }
              if (
                0 !== t.avail_in ||
                0 !== n.lookahead ||
                (e !== Wt && n.status !== ve)
              ) {
                var f =
                  0 === n.level
                    ? Ae(n, e)
                    : n.strategy === ae
                    ? (function (t, e) {
                        for (var n; ; ) {
                          if (0 === t.lookahead && (Te(t), 0 === t.lookahead)) {
                            if (e === Wt) return 1;
                            break;
                          }
                          if (
                            ((t.match_length = 0),
                            (n = Vt(t, 0, t.window[t.strstart])),
                            t.lookahead--,
                            t.strstart++,
                            n && (Ce(t, !1), 0 === t.strm.avail_out))
                          )
                            return 1;
                        }
                        return (
                          (t.insert = 0),
                          e === qt
                            ? (Ce(t, !0), 0 === t.strm.avail_out ? 3 : 4)
                            : t.sym_next && (Ce(t, !1), 0 === t.strm.avail_out)
                            ? 1
                            : 2
                        );
                      })(n, e)
                    : n.strategy === se
                    ? (function (t, e) {
                        for (var n, r, i, o, a = t.window; ; ) {
                          if (t.lookahead <= he) {
                            if ((Te(t), t.lookahead <= he && e === Wt))
                              return 1;
                            if (0 === t.lookahead) break;
                          }
                          if (
                            ((t.match_length = 0),
                            t.lookahead >= 3 &&
                              t.strstart > 0 &&
                              (r = a[(i = t.strstart - 1)]) === a[++i] &&
                              r === a[++i] &&
                              r === a[++i])
                          ) {
                            o = t.strstart + he;
                            do {} while (
                              r === a[++i] &&
                              r === a[++i] &&
                              r === a[++i] &&
                              r === a[++i] &&
                              r === a[++i] &&
                              r === a[++i] &&
                              r === a[++i] &&
                              r === a[++i] &&
                              i < o
                            );
                            (t.match_length = he - (o - i)),
                              t.match_length > t.lookahead &&
                                (t.match_length = t.lookahead);
                          }
                          if (
                            (t.match_length >= 3
                              ? ((n = Vt(t, 1, t.match_length - 3)),
                                (t.lookahead -= t.match_length),
                                (t.strstart += t.match_length),
                                (t.match_length = 0))
                              : ((n = Vt(t, 0, t.window[t.strstart])),
                                t.lookahead--,
                                t.strstart++),
                            n && (Ce(t, !1), 0 === t.strm.avail_out))
                          )
                            return 1;
                        }
                        return (
                          (t.insert = 0),
                          e === qt
                            ? (Ce(t, !0), 0 === t.strm.avail_out ? 3 : 4)
                            : t.sym_next && (Ce(t, !1), 0 === t.strm.avail_out)
                            ? 1
                            : 2
                        );
                      })(n, e)
                    : Ne[n.level].func(n, e);
                if (
                  ((3 !== f && 4 !== f) || (n.status = ve), 1 === f || 3 === f)
                )
                  return 0 === t.avail_out && (n.last_flush = -1), Qt;
                if (
                  2 === f &&
                  (e === Yt
                    ? Kt(n)
                    : e !== $t &&
                      (Zt(n, 0, 0, !1),
                      e === Xt &&
                        (be(n.head),
                        0 === n.lookahead &&
                          ((n.strstart = 0),
                          (n.block_start = 0),
                          (n.insert = 0)))),
                  ke(t),
                  0 === t.avail_out)
                )
                  return (n.last_flush = -1), Qt;
              }
              return e !== qt
                ? Qt
                : n.wrap <= 0
                ? te
                : (2 === n.wrap
                    ? (xe(n, 255 & t.adler),
                      xe(n, (t.adler >> 8) & 255),
                      xe(n, (t.adler >> 16) & 255),
                      xe(n, (t.adler >> 24) & 255),
                      xe(n, 255 & t.total_in),
                      xe(n, (t.total_in >> 8) & 255),
                      xe(n, (t.total_in >> 16) & 255),
                      xe(n, (t.total_in >> 24) & 255))
                    : (Ee(n, t.adler >>> 16), Ee(n, 65535 & t.adler)),
                  ke(t),
                  n.wrap > 0 && (n.wrap = -n.wrap),
                  0 !== n.pending ? Qt : te);
            },
            deflateEnd: function (t) {
              if (ze(t)) return ee;
              var e = t.state.status;
              return (t.state = null), e === pe ? ge(t, ne) : Qt;
            },
            deflateSetDictionary: function (t, e) {
              var n = e.length;
              if (ze(t)) return ee;
              var r = t.state,
                i = r.wrap;
              if (2 === i || (1 === i && r.status !== _e) || r.lookahead)
                return ee;
              if (
                (1 === i && (t.adler = Ft(t.adler, e, n, 0)),
                (r.wrap = 0),
                n >= r.w_size)
              ) {
                0 === i &&
                  (be(r.head),
                  (r.strstart = 0),
                  (r.block_start = 0),
                  (r.insert = 0));
                var o = new Uint8Array(r.w_size);
                o.set(e.subarray(n - r.w_size, n), 0), (e = o), (n = r.w_size);
              }
              var a = t.avail_in,
                s = t.next_in,
                c = t.input;
              for (
                t.avail_in = n, t.next_in = 0, t.input = e, Te(r);
                r.lookahead >= 3;

              ) {
                var u = r.strstart,
                  l = r.lookahead - 2;
                do {
                  (r.ins_h = we(r, r.ins_h, r.window[u + 3 - 1])),
                    (r.prev[u & r.w_mask] = r.head[r.ins_h]),
                    (r.head[r.ins_h] = u),
                    u++;
                } while (--l);
                (r.strstart = u), (r.lookahead = 2), Te(r);
              }
              return (
                (r.strstart += r.lookahead),
                (r.block_start = r.strstart),
                (r.insert = r.lookahead),
                (r.lookahead = 0),
                (r.match_length = r.prev_length = 2),
                (r.match_available = 0),
                (t.next_in = s),
                (t.input = c),
                (t.avail_in = a),
                (r.wrap = i),
                Qt
              );
            },
            deflateInfo: "pako deflate (from Nodeca project)",
          },
          Me = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
          },
          Ue = function (t) {
            for (var e = Array.prototype.slice.call(arguments, 1); e.length; ) {
              var n = e.shift();
              if (n) {
                if ("object" !== d(n))
                  throw new TypeError(n + "must be non-object");
                for (var r in n) Me(n, r) && (t[r] = n[r]);
              }
            }
            return t;
          },
          Ge = function (t) {
            for (var e = 0, n = 0, r = t.length; n < r; n++) e += t[n].length;
            for (
              var i = new Uint8Array(e), o = 0, a = 0, s = t.length;
              o < s;
              o++
            ) {
              var c = t[o];
              i.set(c, a), (a += c.length);
            }
            return i;
          },
          Be = !0;
        try {
          String.fromCharCode.apply(null, new Uint8Array(1));
        } catch (t) {
          Be = !1;
        }
        for (var Ze = new Uint8Array(256), Je = 0; Je < 256; Je++)
          Ze[Je] =
            Je >= 252
              ? 6
              : Je >= 248
              ? 5
              : Je >= 240
              ? 4
              : Je >= 224
              ? 3
              : Je >= 192
              ? 2
              : 1;
        Ze[254] = Ze[254] = 1;
        var Ve = function (t) {
            if (
              "function" == typeof TextEncoder &&
              TextEncoder.prototype.encode
            )
              return new TextEncoder().encode(t);
            var e,
              n,
              r,
              i,
              o,
              a = t.length,
              s = 0;
            for (i = 0; i < a; i++)
              55296 == (64512 & (n = t.charCodeAt(i))) &&
                i + 1 < a &&
                56320 == (64512 & (r = t.charCodeAt(i + 1))) &&
                ((n = 65536 + ((n - 55296) << 10) + (r - 56320)), i++),
                (s += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4);
            for (e = new Uint8Array(s), o = 0, i = 0; o < s; i++)
              55296 == (64512 & (n = t.charCodeAt(i))) &&
                i + 1 < a &&
                56320 == (64512 & (r = t.charCodeAt(i + 1))) &&
                ((n = 65536 + ((n - 55296) << 10) + (r - 56320)), i++),
                n < 128
                  ? (e[o++] = n)
                  : n < 2048
                  ? ((e[o++] = 192 | (n >>> 6)), (e[o++] = 128 | (63 & n)))
                  : n < 65536
                  ? ((e[o++] = 224 | (n >>> 12)),
                    (e[o++] = 128 | ((n >>> 6) & 63)),
                    (e[o++] = 128 | (63 & n)))
                  : ((e[o++] = 240 | (n >>> 18)),
                    (e[o++] = 128 | ((n >>> 12) & 63)),
                    (e[o++] = 128 | ((n >>> 6) & 63)),
                    (e[o++] = 128 | (63 & n)));
            return e;
          },
          Ke = function (t, e) {
            var n,
              r,
              i = e || t.length;
            if (
              "function" == typeof TextDecoder &&
              TextDecoder.prototype.decode
            )
              return new TextDecoder().decode(t.subarray(0, e));
            var o = new Array(2 * i);
            for (r = 0, n = 0; n < i; ) {
              var a = t[n++];
              if (a < 128) o[r++] = a;
              else {
                var s = Ze[a];
                if (s > 4) (o[r++] = 65533), (n += s - 1);
                else {
                  for (a &= 2 === s ? 31 : 3 === s ? 15 : 7; s > 1 && n < i; )
                    (a = (a << 6) | (63 & t[n++])), s--;
                  s > 1
                    ? (o[r++] = 65533)
                    : a < 65536
                    ? (o[r++] = a)
                    : ((a -= 65536),
                      (o[r++] = 55296 | ((a >> 10) & 1023)),
                      (o[r++] = 56320 | (1023 & a)));
                }
              }
            }
            return (function (t, e) {
              if (e < 65534 && t.subarray && Be)
                return String.fromCharCode.apply(
                  null,
                  t.length === e ? t : t.subarray(0, e)
                );
              for (var n = "", r = 0; r < e; r++)
                n += String.fromCharCode(t[r]);
              return n;
            })(o, r);
          },
          We = function (t, e) {
            (e = e || t.length) > t.length && (e = t.length);
            for (var n = e - 1; n >= 0 && 128 == (192 & t[n]); ) n--;
            return n < 0 || 0 === n ? e : n + Ze[t[n]] > e ? n : e;
          },
          Ye = function () {
            (this.input = null),
              (this.next_in = 0),
              (this.avail_in = 0),
              (this.total_in = 0),
              (this.output = null),
              (this.next_out = 0),
              (this.avail_out = 0),
              (this.total_out = 0),
              (this.msg = ""),
              (this.state = null),
              (this.data_type = 2),
              (this.adler = 0);
          },
          Xe = Object.prototype.toString,
          qe = Gt.Z_NO_FLUSH,
          $e = Gt.Z_SYNC_FLUSH,
          Qe = Gt.Z_FULL_FLUSH,
          tn = Gt.Z_FINISH,
          en = Gt.Z_OK,
          nn = Gt.Z_STREAM_END,
          rn = Gt.Z_DEFAULT_COMPRESSION,
          on = Gt.Z_DEFAULT_STRATEGY,
          an = Gt.Z_DEFLATED;
        function sn(t) {
          this.options = Ue(
            {
              level: rn,
              method: an,
              chunkSize: 16384,
              windowBits: 15,
              memLevel: 8,
              strategy: on,
            },
            t || {}
          );
          var e = this.options;
          e.raw && e.windowBits > 0
            ? (e.windowBits = -e.windowBits)
            : e.gzip &&
              e.windowBits > 0 &&
              e.windowBits < 16 &&
              (e.windowBits += 16),
            (this.err = 0),
            (this.msg = ""),
            (this.ended = !1),
            (this.chunks = []),
            (this.strm = new Ye()),
            (this.strm.avail_out = 0);
          var n = He.deflateInit2(
            this.strm,
            e.level,
            e.method,
            e.windowBits,
            e.memLevel,
            e.strategy
          );
          if (n !== en) throw new Error(Ut[n]);
          if (
            (e.header && He.deflateSetHeader(this.strm, e.header), e.dictionary)
          ) {
            var r;
            if (
              ((r =
                "string" == typeof e.dictionary
                  ? Ve(e.dictionary)
                  : "[object ArrayBuffer]" === Xe.call(e.dictionary)
                  ? new Uint8Array(e.dictionary)
                  : e.dictionary),
              (n = He.deflateSetDictionary(this.strm, r)) !== en)
            )
              throw new Error(Ut[n]);
            this._dict_set = !0;
          }
        }
        function cn(t, e) {
          var n = new sn(e);
          if ((n.push(t, !0), n.err)) throw n.msg || Ut[n.err];
          return n.result;
        }
        (sn.prototype.push = function (t, e) {
          var n,
            r,
            i = this.strm,
            o = this.options.chunkSize;
          if (this.ended) return !1;
          for (
            r = e === ~~e ? e : !0 === e ? tn : qe,
              "string" == typeof t
                ? (i.input = Ve(t))
                : "[object ArrayBuffer]" === Xe.call(t)
                ? (i.input = new Uint8Array(t))
                : (i.input = t),
              i.next_in = 0,
              i.avail_in = i.input.length;
            ;

          )
            if (
              (0 === i.avail_out &&
                ((i.output = new Uint8Array(o)),
                (i.next_out = 0),
                (i.avail_out = o)),
              (r === $e || r === Qe) && i.avail_out <= 6)
            )
              this.onData(i.output.subarray(0, i.next_out)), (i.avail_out = 0);
            else {
              if ((n = He.deflate(i, r)) === nn)
                return (
                  i.next_out > 0 &&
                    this.onData(i.output.subarray(0, i.next_out)),
                  (n = He.deflateEnd(this.strm)),
                  this.onEnd(n),
                  (this.ended = !0),
                  n === en
                );
              if (0 !== i.avail_out) {
                if (r > 0 && i.next_out > 0)
                  this.onData(i.output.subarray(0, i.next_out)),
                    (i.avail_out = 0);
                else if (0 === i.avail_in) break;
              } else this.onData(i.output);
            }
          return !0;
        }),
          (sn.prototype.onData = function (t) {
            this.chunks.push(t);
          }),
          (sn.prototype.onEnd = function (t) {
            t === en && (this.result = Ge(this.chunks)),
              (this.chunks = []),
              (this.err = t),
              (this.msg = this.strm.msg);
          });
        var un = {
            Deflate: sn,
            deflate: cn,
            deflateRaw: function (t, e) {
              return ((e = e || {}).raw = !0), cn(t, e);
            },
            gzip: function (t, e) {
              return ((e = e || {}).gzip = !0), cn(t, e);
            },
            constants: Gt,
          },
          ln = 16209,
          dn = function (t, e) {
            var n,
              r,
              i,
              o,
              a,
              s,
              c,
              u,
              l,
              d,
              h,
              f,
              _,
              p,
              v,
              g,
              m,
              b,
              y,
              w,
              k,
              C,
              x,
              E,
              L = t.state;
            (n = t.next_in),
              (x = t.input),
              (r = n + (t.avail_in - 5)),
              (i = t.next_out),
              (E = t.output),
              (o = i - (e - t.avail_out)),
              (a = i + (t.avail_out - 257)),
              (s = L.dmax),
              (c = L.wsize),
              (u = L.whave),
              (l = L.wnext),
              (d = L.window),
              (h = L.hold),
              (f = L.bits),
              (_ = L.lencode),
              (p = L.distcode),
              (v = (1 << L.lenbits) - 1),
              (g = (1 << L.distbits) - 1);
            t: do {
              f < 15 &&
                ((h += x[n++] << f), (f += 8), (h += x[n++] << f), (f += 8)),
                (m = _[h & v]);
              e: for (;;) {
                if (
                  ((h >>>= b = m >>> 24), (f -= b), 0 == (b = (m >>> 16) & 255))
                )
                  E[i++] = 65535 & m;
                else {
                  if (!(16 & b)) {
                    if (64 & b) {
                      if (32 & b) {
                        L.mode = 16191;
                        break t;
                      }
                      (t.msg = "invalid literal/length code"), (L.mode = ln);
                      break t;
                    }
                    m = _[(65535 & m) + (h & ((1 << b) - 1))];
                    continue e;
                  }
                  for (
                    y = 65535 & m,
                      (b &= 15) &&
                        (f < b && ((h += x[n++] << f), (f += 8)),
                        (y += h & ((1 << b) - 1)),
                        (h >>>= b),
                        (f -= b)),
                      f < 15 &&
                        ((h += x[n++] << f),
                        (f += 8),
                        (h += x[n++] << f),
                        (f += 8)),
                      m = p[h & g];
                    ;

                  ) {
                    if (
                      ((h >>>= b = m >>> 24),
                      (f -= b),
                      16 & (b = (m >>> 16) & 255))
                    ) {
                      if (
                        ((w = 65535 & m),
                        f < (b &= 15) &&
                          ((h += x[n++] << f),
                          (f += 8) < b && ((h += x[n++] << f), (f += 8))),
                        (w += h & ((1 << b) - 1)) > s)
                      ) {
                        (t.msg = "invalid distance too far back"),
                          (L.mode = ln);
                        break t;
                      }
                      if (((h >>>= b), (f -= b), w > (b = i - o))) {
                        if ((b = w - b) > u && L.sane) {
                          (t.msg = "invalid distance too far back"),
                            (L.mode = ln);
                          break t;
                        }
                        if (((k = 0), (C = d), 0 === l)) {
                          if (((k += c - b), b < y)) {
                            y -= b;
                            do {
                              E[i++] = d[k++];
                            } while (--b);
                            (k = i - w), (C = E);
                          }
                        } else if (l < b) {
                          if (((k += c + l - b), (b -= l) < y)) {
                            y -= b;
                            do {
                              E[i++] = d[k++];
                            } while (--b);
                            if (((k = 0), l < y)) {
                              y -= b = l;
                              do {
                                E[i++] = d[k++];
                              } while (--b);
                              (k = i - w), (C = E);
                            }
                          }
                        } else if (((k += l - b), b < y)) {
                          y -= b;
                          do {
                            E[i++] = d[k++];
                          } while (--b);
                          (k = i - w), (C = E);
                        }
                        for (; y > 2; )
                          (E[i++] = C[k++]),
                            (E[i++] = C[k++]),
                            (E[i++] = C[k++]),
                            (y -= 3);
                        y && ((E[i++] = C[k++]), y > 1 && (E[i++] = C[k++]));
                      } else {
                        k = i - w;
                        do {
                          (E[i++] = E[k++]),
                            (E[i++] = E[k++]),
                            (E[i++] = E[k++]),
                            (y -= 3);
                        } while (y > 2);
                        y && ((E[i++] = E[k++]), y > 1 && (E[i++] = E[k++]));
                      }
                      break;
                    }
                    if (64 & b) {
                      (t.msg = "invalid distance code"), (L.mode = ln);
                      break t;
                    }
                    m = p[(65535 & m) + (h & ((1 << b) - 1))];
                  }
                }
                break;
              }
            } while (n < r && i < a);
            (n -= y = f >> 3),
              (h &= (1 << (f -= y << 3)) - 1),
              (t.next_in = n),
              (t.next_out = i),
              (t.avail_in = n < r ? r - n + 5 : 5 - (n - r)),
              (t.avail_out = i < a ? a - i + 257 : 257 - (i - a)),
              (L.hold = h),
              (L.bits = f);
          },
          hn = 15,
          fn = new Uint16Array([
            3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51,
            59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0,
          ]),
          _n = new Uint8Array([
            16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19,
            19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78,
          ]),
          pn = new Uint16Array([
            1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385,
            513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385,
            24577, 0, 0,
          ]),
          vn = new Uint8Array([
            16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23,
            23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64,
          ]),
          gn = function (t, e, n, r, i, o, a, s) {
            var c,
              u,
              l,
              d,
              h,
              f,
              _,
              p,
              v,
              g = s.bits,
              m = 0,
              b = 0,
              y = 0,
              w = 0,
              k = 0,
              C = 0,
              x = 0,
              E = 0,
              L = 0,
              S = 0,
              T = null,
              A = new Uint16Array(16),
              I = new Uint16Array(16),
              O = null;
            for (m = 0; m <= hn; m++) A[m] = 0;
            for (b = 0; b < r; b++) A[e[n + b]]++;
            for (k = g, w = hn; w >= 1 && 0 === A[w]; w--);
            if ((k > w && (k = w), 0 === w))
              return (i[o++] = 20971520), (i[o++] = 20971520), (s.bits = 1), 0;
            for (y = 1; y < w && 0 === A[y]; y++);
            for (k < y && (k = y), E = 1, m = 1; m <= hn; m++)
              if (((E <<= 1), (E -= A[m]) < 0)) return -1;
            if (E > 0 && (0 === t || 1 !== w)) return -1;
            for (I[1] = 0, m = 1; m < hn; m++) I[m + 1] = I[m] + A[m];
            for (b = 0; b < r; b++) 0 !== e[n + b] && (a[I[e[n + b]]++] = b);
            if (
              (0 === t
                ? ((T = O = a), (f = 20))
                : 1 === t
                ? ((T = fn), (O = _n), (f = 257))
                : ((T = pn), (O = vn), (f = 0)),
              (S = 0),
              (b = 0),
              (m = y),
              (h = o),
              (C = k),
              (x = 0),
              (l = -1),
              (d = (L = 1 << k) - 1),
              (1 === t && L > 852) || (2 === t && L > 592))
            )
              return 1;
            for (;;) {
              (_ = m - x),
                a[b] + 1 < f
                  ? ((p = 0), (v = a[b]))
                  : a[b] >= f
                  ? ((p = O[a[b] - f]), (v = T[a[b] - f]))
                  : ((p = 96), (v = 0)),
                (c = 1 << (m - x)),
                (y = u = 1 << C);
              do {
                i[h + (S >> x) + (u -= c)] = (_ << 24) | (p << 16) | v;
              } while (0 !== u);
              for (c = 1 << (m - 1); S & c; ) c >>= 1;
              if (
                (0 !== c ? ((S &= c - 1), (S += c)) : (S = 0), b++, 0 == --A[m])
              ) {
                if (m === w) break;
                m = e[n + a[b]];
              }
              if (m > k && (S & d) !== l) {
                for (
                  0 === x && (x = k), h += y, E = 1 << (C = m - x);
                  C + x < w && !((E -= A[C + x]) <= 0);

                )
                  C++, (E <<= 1);
                if (
                  ((L += 1 << C), (1 === t && L > 852) || (2 === t && L > 592))
                )
                  return 1;
                i[(l = S & d)] = (k << 24) | (C << 16) | (h - o);
              }
            }
            return (
              0 !== S && (i[h + S] = ((m - x) << 24) | (64 << 16)),
              (s.bits = k),
              0
            );
          },
          mn = Gt.Z_FINISH,
          bn = Gt.Z_BLOCK,
          yn = Gt.Z_TREES,
          wn = Gt.Z_OK,
          kn = Gt.Z_STREAM_END,
          Cn = Gt.Z_NEED_DICT,
          xn = Gt.Z_STREAM_ERROR,
          En = Gt.Z_DATA_ERROR,
          Ln = Gt.Z_MEM_ERROR,
          Sn = Gt.Z_BUF_ERROR,
          Tn = Gt.Z_DEFLATED,
          An = 16180,
          In = 16190,
          On = 16191,
          Dn = 16192,
          Nn = 16194,
          Rn = 16199,
          zn = 16200,
          Pn = 16206,
          jn = 16209,
          Fn = function (t) {
            return (
              ((t >>> 24) & 255) +
              ((t >>> 8) & 65280) +
              ((65280 & t) << 8) +
              ((255 & t) << 24)
            );
          };
        function Hn() {
          (this.strm = null),
            (this.mode = 0),
            (this.last = !1),
            (this.wrap = 0),
            (this.havedict = !1),
            (this.flags = 0),
            (this.dmax = 0),
            (this.check = 0),
            (this.total = 0),
            (this.head = null),
            (this.wbits = 0),
            (this.wsize = 0),
            (this.whave = 0),
            (this.wnext = 0),
            (this.window = null),
            (this.hold = 0),
            (this.bits = 0),
            (this.length = 0),
            (this.offset = 0),
            (this.extra = 0),
            (this.lencode = null),
            (this.distcode = null),
            (this.lenbits = 0),
            (this.distbits = 0),
            (this.ncode = 0),
            (this.nlen = 0),
            (this.ndist = 0),
            (this.have = 0),
            (this.next = null),
            (this.lens = new Uint16Array(320)),
            (this.work = new Uint16Array(288)),
            (this.lendyn = null),
            (this.distdyn = null),
            (this.sane = 0),
            (this.back = 0),
            (this.was = 0);
        }
        var Mn,
          Un,
          Gn = function (t) {
            if (!t) return 1;
            var e = t.state;
            return !e || e.strm !== t || e.mode < An || e.mode > 16211 ? 1 : 0;
          },
          Bn = function (t) {
            if (Gn(t)) return xn;
            var e = t.state;
            return (
              (t.total_in = t.total_out = e.total = 0),
              (t.msg = ""),
              e.wrap && (t.adler = 1 & e.wrap),
              (e.mode = An),
              (e.last = 0),
              (e.havedict = 0),
              (e.flags = -1),
              (e.dmax = 32768),
              (e.head = null),
              (e.hold = 0),
              (e.bits = 0),
              (e.lencode = e.lendyn = new Int32Array(852)),
              (e.distcode = e.distdyn = new Int32Array(592)),
              (e.sane = 1),
              (e.back = -1),
              wn
            );
          },
          Zn = function (t) {
            if (Gn(t)) return xn;
            var e = t.state;
            return (e.wsize = 0), (e.whave = 0), (e.wnext = 0), Bn(t);
          },
          Jn = function (t, e) {
            var n;
            if (Gn(t)) return xn;
            var r = t.state;
            return (
              e < 0
                ? ((n = 0), (e = -e))
                : ((n = 5 + (e >> 4)), e < 48 && (e &= 15)),
              e && (e < 8 || e > 15)
                ? xn
                : (null !== r.window && r.wbits !== e && (r.window = null),
                  (r.wrap = n),
                  (r.wbits = e),
                  Zn(t))
            );
          },
          Vn = function (t, e) {
            if (!t) return xn;
            var n = new Hn();
            (t.state = n), (n.strm = t), (n.window = null), (n.mode = An);
            var r = Jn(t, e);
            return r !== wn && (t.state = null), r;
          },
          Kn = !0,
          Wn = function (t) {
            if (Kn) {
              (Mn = new Int32Array(512)), (Un = new Int32Array(32));
              for (var e = 0; e < 144; ) t.lens[e++] = 8;
              for (; e < 256; ) t.lens[e++] = 9;
              for (; e < 280; ) t.lens[e++] = 7;
              for (; e < 288; ) t.lens[e++] = 8;
              for (
                gn(1, t.lens, 0, 288, Mn, 0, t.work, { bits: 9 }), e = 0;
                e < 32;

              )
                t.lens[e++] = 5;
              gn(2, t.lens, 0, 32, Un, 0, t.work, { bits: 5 }), (Kn = !1);
            }
            (t.lencode = Mn),
              (t.lenbits = 9),
              (t.distcode = Un),
              (t.distbits = 5);
          },
          Yn = function (t, e, n, r) {
            var i,
              o = t.state;
            return (
              null === o.window &&
                ((o.wsize = 1 << o.wbits),
                (o.wnext = 0),
                (o.whave = 0),
                (o.window = new Uint8Array(o.wsize))),
              r >= o.wsize
                ? (o.window.set(e.subarray(n - o.wsize, n), 0),
                  (o.wnext = 0),
                  (o.whave = o.wsize))
                : ((i = o.wsize - o.wnext) > r && (i = r),
                  o.window.set(e.subarray(n - r, n - r + i), o.wnext),
                  (r -= i)
                    ? (o.window.set(e.subarray(n - r, n), 0),
                      (o.wnext = r),
                      (o.whave = o.wsize))
                    : ((o.wnext += i),
                      o.wnext === o.wsize && (o.wnext = 0),
                      o.whave < o.wsize && (o.whave += i))),
              0
            );
          },
          Xn = {
            inflateReset: Zn,
            inflateReset2: Jn,
            inflateResetKeep: Bn,
            inflateInit: function (t) {
              return Vn(t, 15);
            },
            inflateInit2: Vn,
            inflate: function (t, e) {
              var n,
                r,
                i,
                o,
                a,
                s,
                c,
                u,
                l,
                d,
                h,
                f,
                _,
                p,
                v,
                g,
                m,
                b,
                y,
                w,
                k,
                C,
                x,
                E,
                L = 0,
                S = new Uint8Array(4),
                T = new Uint8Array([
                  16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1,
                  15,
                ]);
              if (Gn(t) || !t.output || (!t.input && 0 !== t.avail_in))
                return xn;
              (n = t.state).mode === On && (n.mode = Dn),
                (a = t.next_out),
                (i = t.output),
                (c = t.avail_out),
                (o = t.next_in),
                (r = t.input),
                (s = t.avail_in),
                (u = n.hold),
                (l = n.bits),
                (d = s),
                (h = c),
                (C = wn);
              t: for (;;)
                switch (n.mode) {
                  case An:
                    if (0 === n.wrap) {
                      n.mode = Dn;
                      break;
                    }
                    for (; l < 16; ) {
                      if (0 === s) break t;
                      s--, (u += r[o++] << l), (l += 8);
                    }
                    if (2 & n.wrap && 35615 === u) {
                      0 === n.wbits && (n.wbits = 15),
                        (n.check = 0),
                        (S[0] = 255 & u),
                        (S[1] = (u >>> 8) & 255),
                        (n.check = Mt(n.check, S, 2, 0)),
                        (u = 0),
                        (l = 0),
                        (n.mode = 16181);
                      break;
                    }
                    if (
                      (n.head && (n.head.done = !1),
                      !(1 & n.wrap) || (((255 & u) << 8) + (u >> 8)) % 31)
                    ) {
                      (t.msg = "incorrect header check"), (n.mode = jn);
                      break;
                    }
                    if ((15 & u) !== Tn) {
                      (t.msg = "unknown compression method"), (n.mode = jn);
                      break;
                    }
                    if (
                      ((l -= 4),
                      (k = 8 + (15 & (u >>>= 4))),
                      0 === n.wbits && (n.wbits = k),
                      k > 15 || k > n.wbits)
                    ) {
                      (t.msg = "invalid window size"), (n.mode = jn);
                      break;
                    }
                    (n.dmax = 1 << n.wbits),
                      (n.flags = 0),
                      (t.adler = n.check = 1),
                      (n.mode = 512 & u ? 16189 : On),
                      (u = 0),
                      (l = 0);
                    break;
                  case 16181:
                    for (; l < 16; ) {
                      if (0 === s) break t;
                      s--, (u += r[o++] << l), (l += 8);
                    }
                    if (((n.flags = u), (255 & n.flags) !== Tn)) {
                      (t.msg = "unknown compression method"), (n.mode = jn);
                      break;
                    }
                    if (57344 & n.flags) {
                      (t.msg = "unknown header flags set"), (n.mode = jn);
                      break;
                    }
                    n.head && (n.head.text = (u >> 8) & 1),
                      512 & n.flags &&
                        4 & n.wrap &&
                        ((S[0] = 255 & u),
                        (S[1] = (u >>> 8) & 255),
                        (n.check = Mt(n.check, S, 2, 0))),
                      (u = 0),
                      (l = 0),
                      (n.mode = 16182);
                  case 16182:
                    for (; l < 32; ) {
                      if (0 === s) break t;
                      s--, (u += r[o++] << l), (l += 8);
                    }
                    n.head && (n.head.time = u),
                      512 & n.flags &&
                        4 & n.wrap &&
                        ((S[0] = 255 & u),
                        (S[1] = (u >>> 8) & 255),
                        (S[2] = (u >>> 16) & 255),
                        (S[3] = (u >>> 24) & 255),
                        (n.check = Mt(n.check, S, 4, 0))),
                      (u = 0),
                      (l = 0),
                      (n.mode = 16183);
                  case 16183:
                    for (; l < 16; ) {
                      if (0 === s) break t;
                      s--, (u += r[o++] << l), (l += 8);
                    }
                    n.head && ((n.head.xflags = 255 & u), (n.head.os = u >> 8)),
                      512 & n.flags &&
                        4 & n.wrap &&
                        ((S[0] = 255 & u),
                        (S[1] = (u >>> 8) & 255),
                        (n.check = Mt(n.check, S, 2, 0))),
                      (u = 0),
                      (l = 0),
                      (n.mode = 16184);
                  case 16184:
                    if (1024 & n.flags) {
                      for (; l < 16; ) {
                        if (0 === s) break t;
                        s--, (u += r[o++] << l), (l += 8);
                      }
                      (n.length = u),
                        n.head && (n.head.extra_len = u),
                        512 & n.flags &&
                          4 & n.wrap &&
                          ((S[0] = 255 & u),
                          (S[1] = (u >>> 8) & 255),
                          (n.check = Mt(n.check, S, 2, 0))),
                        (u = 0),
                        (l = 0);
                    } else n.head && (n.head.extra = null);
                    n.mode = 16185;
                  case 16185:
                    if (
                      1024 & n.flags &&
                      ((f = n.length) > s && (f = s),
                      f &&
                        (n.head &&
                          ((k = n.head.extra_len - n.length),
                          n.head.extra ||
                            (n.head.extra = new Uint8Array(n.head.extra_len)),
                          n.head.extra.set(r.subarray(o, o + f), k)),
                        512 & n.flags &&
                          4 & n.wrap &&
                          (n.check = Mt(n.check, r, f, o)),
                        (s -= f),
                        (o += f),
                        (n.length -= f)),
                      n.length)
                    )
                      break t;
                    (n.length = 0), (n.mode = 16186);
                  case 16186:
                    if (2048 & n.flags) {
                      if (0 === s) break t;
                      f = 0;
                      do {
                        (k = r[o + f++]),
                          n.head &&
                            k &&
                            n.length < 65536 &&
                            (n.head.name += String.fromCharCode(k));
                      } while (k && f < s);
                      if (
                        (512 & n.flags &&
                          4 & n.wrap &&
                          (n.check = Mt(n.check, r, f, o)),
                        (s -= f),
                        (o += f),
                        k)
                      )
                        break t;
                    } else n.head && (n.head.name = null);
                    (n.length = 0), (n.mode = 16187);
                  case 16187:
                    if (4096 & n.flags) {
                      if (0 === s) break t;
                      f = 0;
                      do {
                        (k = r[o + f++]),
                          n.head &&
                            k &&
                            n.length < 65536 &&
                            (n.head.comment += String.fromCharCode(k));
                      } while (k && f < s);
                      if (
                        (512 & n.flags &&
                          4 & n.wrap &&
                          (n.check = Mt(n.check, r, f, o)),
                        (s -= f),
                        (o += f),
                        k)
                      )
                        break t;
                    } else n.head && (n.head.comment = null);
                    n.mode = 16188;
                  case 16188:
                    if (512 & n.flags) {
                      for (; l < 16; ) {
                        if (0 === s) break t;
                        s--, (u += r[o++] << l), (l += 8);
                      }
                      if (4 & n.wrap && u !== (65535 & n.check)) {
                        (t.msg = "header crc mismatch"), (n.mode = jn);
                        break;
                      }
                      (u = 0), (l = 0);
                    }
                    n.head &&
                      ((n.head.hcrc = (n.flags >> 9) & 1), (n.head.done = !0)),
                      (t.adler = n.check = 0),
                      (n.mode = On);
                    break;
                  case 16189:
                    for (; l < 32; ) {
                      if (0 === s) break t;
                      s--, (u += r[o++] << l), (l += 8);
                    }
                    (t.adler = n.check = Fn(u)),
                      (u = 0),
                      (l = 0),
                      (n.mode = In);
                  case In:
                    if (0 === n.havedict)
                      return (
                        (t.next_out = a),
                        (t.avail_out = c),
                        (t.next_in = o),
                        (t.avail_in = s),
                        (n.hold = u),
                        (n.bits = l),
                        Cn
                      );
                    (t.adler = n.check = 1), (n.mode = On);
                  case On:
                    if (e === bn || e === yn) break t;
                  case Dn:
                    if (n.last) {
                      (u >>>= 7 & l), (l -= 7 & l), (n.mode = Pn);
                      break;
                    }
                    for (; l < 3; ) {
                      if (0 === s) break t;
                      s--, (u += r[o++] << l), (l += 8);
                    }
                    switch (((n.last = 1 & u), (l -= 1), 3 & (u >>>= 1))) {
                      case 0:
                        n.mode = 16193;
                        break;
                      case 1:
                        if ((Wn(n), (n.mode = Rn), e === yn)) {
                          (u >>>= 2), (l -= 2);
                          break t;
                        }
                        break;
                      case 2:
                        n.mode = 16196;
                        break;
                      case 3:
                        (t.msg = "invalid block type"), (n.mode = jn);
                    }
                    (u >>>= 2), (l -= 2);
                    break;
                  case 16193:
                    for (u >>>= 7 & l, l -= 7 & l; l < 32; ) {
                      if (0 === s) break t;
                      s--, (u += r[o++] << l), (l += 8);
                    }
                    if ((65535 & u) != ((u >>> 16) ^ 65535)) {
                      (t.msg = "invalid stored block lengths"), (n.mode = jn);
                      break;
                    }
                    if (
                      ((n.length = 65535 & u),
                      (u = 0),
                      (l = 0),
                      (n.mode = Nn),
                      e === yn)
                    )
                      break t;
                  case Nn:
                    n.mode = 16195;
                  case 16195:
                    if ((f = n.length)) {
                      if ((f > s && (f = s), f > c && (f = c), 0 === f))
                        break t;
                      i.set(r.subarray(o, o + f), a),
                        (s -= f),
                        (o += f),
                        (c -= f),
                        (a += f),
                        (n.length -= f);
                      break;
                    }
                    n.mode = On;
                    break;
                  case 16196:
                    for (; l < 14; ) {
                      if (0 === s) break t;
                      s--, (u += r[o++] << l), (l += 8);
                    }
                    if (
                      ((n.nlen = 257 + (31 & u)),
                      (u >>>= 5),
                      (l -= 5),
                      (n.ndist = 1 + (31 & u)),
                      (u >>>= 5),
                      (l -= 5),
                      (n.ncode = 4 + (15 & u)),
                      (u >>>= 4),
                      (l -= 4),
                      n.nlen > 286 || n.ndist > 30)
                    ) {
                      (t.msg = "too many length or distance symbols"),
                        (n.mode = jn);
                      break;
                    }
                    (n.have = 0), (n.mode = 16197);
                  case 16197:
                    for (; n.have < n.ncode; ) {
                      for (; l < 3; ) {
                        if (0 === s) break t;
                        s--, (u += r[o++] << l), (l += 8);
                      }
                      (n.lens[T[n.have++]] = 7 & u), (u >>>= 3), (l -= 3);
                    }
                    for (; n.have < 19; ) n.lens[T[n.have++]] = 0;
                    if (
                      ((n.lencode = n.lendyn),
                      (n.lenbits = 7),
                      (x = { bits: n.lenbits }),
                      (C = gn(0, n.lens, 0, 19, n.lencode, 0, n.work, x)),
                      (n.lenbits = x.bits),
                      C)
                    ) {
                      (t.msg = "invalid code lengths set"), (n.mode = jn);
                      break;
                    }
                    (n.have = 0), (n.mode = 16198);
                  case 16198:
                    for (; n.have < n.nlen + n.ndist; ) {
                      for (
                        ;
                        (g =
                          ((L = n.lencode[u & ((1 << n.lenbits) - 1)]) >>> 16) &
                          255),
                          (m = 65535 & L),
                          !((v = L >>> 24) <= l);

                      ) {
                        if (0 === s) break t;
                        s--, (u += r[o++] << l), (l += 8);
                      }
                      if (m < 16) (u >>>= v), (l -= v), (n.lens[n.have++] = m);
                      else {
                        if (16 === m) {
                          for (E = v + 2; l < E; ) {
                            if (0 === s) break t;
                            s--, (u += r[o++] << l), (l += 8);
                          }
                          if (((u >>>= v), (l -= v), 0 === n.have)) {
                            (t.msg = "invalid bit length repeat"),
                              (n.mode = jn);
                            break;
                          }
                          (k = n.lens[n.have - 1]),
                            (f = 3 + (3 & u)),
                            (u >>>= 2),
                            (l -= 2);
                        } else if (17 === m) {
                          for (E = v + 3; l < E; ) {
                            if (0 === s) break t;
                            s--, (u += r[o++] << l), (l += 8);
                          }
                          (l -= v),
                            (k = 0),
                            (f = 3 + (7 & (u >>>= v))),
                            (u >>>= 3),
                            (l -= 3);
                        } else {
                          for (E = v + 7; l < E; ) {
                            if (0 === s) break t;
                            s--, (u += r[o++] << l), (l += 8);
                          }
                          (l -= v),
                            (k = 0),
                            (f = 11 + (127 & (u >>>= v))),
                            (u >>>= 7),
                            (l -= 7);
                        }
                        if (n.have + f > n.nlen + n.ndist) {
                          (t.msg = "invalid bit length repeat"), (n.mode = jn);
                          break;
                        }
                        for (; f--; ) n.lens[n.have++] = k;
                      }
                    }
                    if (n.mode === jn) break;
                    if (0 === n.lens[256]) {
                      (t.msg = "invalid code -- missing end-of-block"),
                        (n.mode = jn);
                      break;
                    }
                    if (
                      ((n.lenbits = 9),
                      (x = { bits: n.lenbits }),
                      (C = gn(1, n.lens, 0, n.nlen, n.lencode, 0, n.work, x)),
                      (n.lenbits = x.bits),
                      C)
                    ) {
                      (t.msg = "invalid literal/lengths set"), (n.mode = jn);
                      break;
                    }
                    if (
                      ((n.distbits = 6),
                      (n.distcode = n.distdyn),
                      (x = { bits: n.distbits }),
                      (C = gn(
                        2,
                        n.lens,
                        n.nlen,
                        n.ndist,
                        n.distcode,
                        0,
                        n.work,
                        x
                      )),
                      (n.distbits = x.bits),
                      C)
                    ) {
                      (t.msg = "invalid distances set"), (n.mode = jn);
                      break;
                    }
                    if (((n.mode = Rn), e === yn)) break t;
                  case Rn:
                    n.mode = zn;
                  case zn:
                    if (s >= 6 && c >= 258) {
                      (t.next_out = a),
                        (t.avail_out = c),
                        (t.next_in = o),
                        (t.avail_in = s),
                        (n.hold = u),
                        (n.bits = l),
                        dn(t, h),
                        (a = t.next_out),
                        (i = t.output),
                        (c = t.avail_out),
                        (o = t.next_in),
                        (r = t.input),
                        (s = t.avail_in),
                        (u = n.hold),
                        (l = n.bits),
                        n.mode === On && (n.back = -1);
                      break;
                    }
                    for (
                      n.back = 0;
                      (g =
                        ((L = n.lencode[u & ((1 << n.lenbits) - 1)]) >>> 16) &
                        255),
                        (m = 65535 & L),
                        !((v = L >>> 24) <= l);

                    ) {
                      if (0 === s) break t;
                      s--, (u += r[o++] << l), (l += 8);
                    }
                    if (g && !(240 & g)) {
                      for (
                        b = v, y = g, w = m;
                        (g =
                          ((L =
                            n.lencode[
                              w + ((u & ((1 << (b + y)) - 1)) >> b)
                            ]) >>>
                            16) &
                          255),
                          (m = 65535 & L),
                          !(b + (v = L >>> 24) <= l);

                      ) {
                        if (0 === s) break t;
                        s--, (u += r[o++] << l), (l += 8);
                      }
                      (u >>>= b), (l -= b), (n.back += b);
                    }
                    if (
                      ((u >>>= v),
                      (l -= v),
                      (n.back += v),
                      (n.length = m),
                      0 === g)
                    ) {
                      n.mode = 16205;
                      break;
                    }
                    if (32 & g) {
                      (n.back = -1), (n.mode = On);
                      break;
                    }
                    if (64 & g) {
                      (t.msg = "invalid literal/length code"), (n.mode = jn);
                      break;
                    }
                    (n.extra = 15 & g), (n.mode = 16201);
                  case 16201:
                    if (n.extra) {
                      for (E = n.extra; l < E; ) {
                        if (0 === s) break t;
                        s--, (u += r[o++] << l), (l += 8);
                      }
                      (n.length += u & ((1 << n.extra) - 1)),
                        (u >>>= n.extra),
                        (l -= n.extra),
                        (n.back += n.extra);
                    }
                    (n.was = n.length), (n.mode = 16202);
                  case 16202:
                    for (
                      ;
                      (g =
                        ((L = n.distcode[u & ((1 << n.distbits) - 1)]) >>> 16) &
                        255),
                        (m = 65535 & L),
                        !((v = L >>> 24) <= l);

                    ) {
                      if (0 === s) break t;
                      s--, (u += r[o++] << l), (l += 8);
                    }
                    if (!(240 & g)) {
                      for (
                        b = v, y = g, w = m;
                        (g =
                          ((L =
                            n.distcode[
                              w + ((u & ((1 << (b + y)) - 1)) >> b)
                            ]) >>>
                            16) &
                          255),
                          (m = 65535 & L),
                          !(b + (v = L >>> 24) <= l);

                      ) {
                        if (0 === s) break t;
                        s--, (u += r[o++] << l), (l += 8);
                      }
                      (u >>>= b), (l -= b), (n.back += b);
                    }
                    if (((u >>>= v), (l -= v), (n.back += v), 64 & g)) {
                      (t.msg = "invalid distance code"), (n.mode = jn);
                      break;
                    }
                    (n.offset = m), (n.extra = 15 & g), (n.mode = 16203);
                  case 16203:
                    if (n.extra) {
                      for (E = n.extra; l < E; ) {
                        if (0 === s) break t;
                        s--, (u += r[o++] << l), (l += 8);
                      }
                      (n.offset += u & ((1 << n.extra) - 1)),
                        (u >>>= n.extra),
                        (l -= n.extra),
                        (n.back += n.extra);
                    }
                    if (n.offset > n.dmax) {
                      (t.msg = "invalid distance too far back"), (n.mode = jn);
                      break;
                    }
                    n.mode = 16204;
                  case 16204:
                    if (0 === c) break t;
                    if (((f = h - c), n.offset > f)) {
                      if ((f = n.offset - f) > n.whave && n.sane) {
                        (t.msg = "invalid distance too far back"),
                          (n.mode = jn);
                        break;
                      }
                      f > n.wnext
                        ? ((f -= n.wnext), (_ = n.wsize - f))
                        : (_ = n.wnext - f),
                        f > n.length && (f = n.length),
                        (p = n.window);
                    } else (p = i), (_ = a - n.offset), (f = n.length);
                    f > c && (f = c), (c -= f), (n.length -= f);
                    do {
                      i[a++] = p[_++];
                    } while (--f);
                    0 === n.length && (n.mode = zn);
                    break;
                  case 16205:
                    if (0 === c) break t;
                    (i[a++] = n.length), c--, (n.mode = zn);
                    break;
                  case Pn:
                    if (n.wrap) {
                      for (; l < 32; ) {
                        if (0 === s) break t;
                        s--, (u |= r[o++] << l), (l += 8);
                      }
                      if (
                        ((h -= c),
                        (t.total_out += h),
                        (n.total += h),
                        4 & n.wrap &&
                          h &&
                          (t.adler = n.check =
                            n.flags
                              ? Mt(n.check, i, h, a - h)
                              : Ft(n.check, i, h, a - h)),
                        (h = c),
                        4 & n.wrap && (n.flags ? u : Fn(u)) !== n.check)
                      ) {
                        (t.msg = "incorrect data check"), (n.mode = jn);
                        break;
                      }
                      (u = 0), (l = 0);
                    }
                    n.mode = 16207;
                  case 16207:
                    if (n.wrap && n.flags) {
                      for (; l < 32; ) {
                        if (0 === s) break t;
                        s--, (u += r[o++] << l), (l += 8);
                      }
                      if (4 & n.wrap && u !== (4294967295 & n.total)) {
                        (t.msg = "incorrect length check"), (n.mode = jn);
                        break;
                      }
                      (u = 0), (l = 0);
                    }
                    n.mode = 16208;
                  case 16208:
                    C = kn;
                    break t;
                  case jn:
                    C = En;
                    break t;
                  case 16210:
                    return Ln;
                  default:
                    return xn;
                }
              return (
                (t.next_out = a),
                (t.avail_out = c),
                (t.next_in = o),
                (t.avail_in = s),
                (n.hold = u),
                (n.bits = l),
                (n.wsize ||
                  (h !== t.avail_out &&
                    n.mode < jn &&
                    (n.mode < Pn || e !== mn))) &&
                  Yn(t, t.output, t.next_out, h - t.avail_out),
                (d -= t.avail_in),
                (h -= t.avail_out),
                (t.total_in += d),
                (t.total_out += h),
                (n.total += h),
                4 & n.wrap &&
                  h &&
                  (t.adler = n.check =
                    n.flags
                      ? Mt(n.check, i, h, t.next_out - h)
                      : Ft(n.check, i, h, t.next_out - h)),
                (t.data_type =
                  n.bits +
                  (n.last ? 64 : 0) +
                  (n.mode === On ? 128 : 0) +
                  (n.mode === Rn || n.mode === Nn ? 256 : 0)),
                ((0 === d && 0 === h) || e === mn) && C === wn && (C = Sn),
                C
              );
            },
            inflateEnd: function (t) {
              if (Gn(t)) return xn;
              var e = t.state;
              return e.window && (e.window = null), (t.state = null), wn;
            },
            inflateGetHeader: function (t, e) {
              if (Gn(t)) return xn;
              var n = t.state;
              return 2 & n.wrap ? ((n.head = e), (e.done = !1), wn) : xn;
            },
            inflateSetDictionary: function (t, e) {
              var n,
                r = e.length;
              return Gn(t) || (0 !== (n = t.state).wrap && n.mode !== In)
                ? xn
                : n.mode === In && Ft(1, e, r, 0) !== n.check
                ? En
                : Yn(t, e, r, r)
                ? ((n.mode = 16210), Ln)
                : ((n.havedict = 1), wn);
            },
            inflateInfo: "pako inflate (from Nodeca project)",
          },
          qn = function () {
            (this.text = 0),
              (this.time = 0),
              (this.xflags = 0),
              (this.os = 0),
              (this.extra = null),
              (this.extra_len = 0),
              (this.name = ""),
              (this.comment = ""),
              (this.hcrc = 0),
              (this.done = !1);
          },
          $n = Object.prototype.toString,
          Qn = Gt.Z_NO_FLUSH,
          tr = Gt.Z_FINISH,
          er = Gt.Z_OK,
          nr = Gt.Z_STREAM_END,
          rr = Gt.Z_NEED_DICT,
          ir = Gt.Z_STREAM_ERROR,
          or = Gt.Z_DATA_ERROR,
          ar = Gt.Z_MEM_ERROR;
        function sr(t) {
          this.options = Ue(
            { chunkSize: 65536, windowBits: 15, to: "" },
            t || {}
          );
          var e = this.options;
          e.raw &&
            e.windowBits >= 0 &&
            e.windowBits < 16 &&
            ((e.windowBits = -e.windowBits),
            0 === e.windowBits && (e.windowBits = -15)),
            !(e.windowBits >= 0 && e.windowBits < 16) ||
              (t && t.windowBits) ||
              (e.windowBits += 32),
            e.windowBits > 15 &&
              e.windowBits < 48 &&
              (15 & e.windowBits || (e.windowBits |= 15)),
            (this.err = 0),
            (this.msg = ""),
            (this.ended = !1),
            (this.chunks = []),
            (this.strm = new Ye()),
            (this.strm.avail_out = 0);
          var n = Xn.inflateInit2(this.strm, e.windowBits);
          if (n !== er) throw new Error(Ut[n]);
          if (
            ((this.header = new qn()),
            Xn.inflateGetHeader(this.strm, this.header),
            e.dictionary &&
              ("string" == typeof e.dictionary
                ? (e.dictionary = Ve(e.dictionary))
                : "[object ArrayBuffer]" === $n.call(e.dictionary) &&
                  (e.dictionary = new Uint8Array(e.dictionary)),
              e.raw &&
                (n = Xn.inflateSetDictionary(this.strm, e.dictionary)) !== er))
          )
            throw new Error(Ut[n]);
        }
        function cr(t, e) {
          var n = new sr(e);
          if ((n.push(t), n.err)) throw n.msg || Ut[n.err];
          return n.result;
        }
        (sr.prototype.push = function (t, e) {
          var n,
            r,
            i,
            o = this.strm,
            a = this.options.chunkSize,
            s = this.options.dictionary;
          if (this.ended) return !1;
          for (
            r = e === ~~e ? e : !0 === e ? tr : Qn,
              "[object ArrayBuffer]" === $n.call(t)
                ? (o.input = new Uint8Array(t))
                : (o.input = t),
              o.next_in = 0,
              o.avail_in = o.input.length;
            ;

          ) {
            for (
              0 === o.avail_out &&
                ((o.output = new Uint8Array(a)),
                (o.next_out = 0),
                (o.avail_out = a)),
                (n = Xn.inflate(o, r)) === rr &&
                  s &&
                  ((n = Xn.inflateSetDictionary(o, s)) === er
                    ? (n = Xn.inflate(o, r))
                    : n === or && (n = rr));
              o.avail_in > 0 &&
              n === nr &&
              o.state.wrap > 0 &&
              0 !== t[o.next_in];

            )
              Xn.inflateReset(o), (n = Xn.inflate(o, r));
            switch (n) {
              case ir:
              case or:
              case rr:
              case ar:
                return this.onEnd(n), (this.ended = !0), !1;
            }
            if (
              ((i = o.avail_out), o.next_out && (0 === o.avail_out || n === nr))
            )
              if ("string" === this.options.to) {
                var c = We(o.output, o.next_out),
                  u = o.next_out - c,
                  l = Ke(o.output, c);
                (o.next_out = u),
                  (o.avail_out = a - u),
                  u && o.output.set(o.output.subarray(c, c + u), 0),
                  this.onData(l);
              } else
                this.onData(
                  o.output.length === o.next_out
                    ? o.output
                    : o.output.subarray(0, o.next_out)
                );
            if (n !== er || 0 !== i) {
              if (n === nr)
                return (
                  (n = Xn.inflateEnd(this.strm)),
                  this.onEnd(n),
                  (this.ended = !0),
                  !0
                );
              if (0 === o.avail_in) break;
            }
          }
          return !0;
        }),
          (sr.prototype.onData = function (t) {
            this.chunks.push(t);
          }),
          (sr.prototype.onEnd = function (t) {
            t === er &&
              ("string" === this.options.to
                ? (this.result = this.chunks.join(""))
                : (this.result = Ge(this.chunks))),
              (this.chunks = []),
              (this.err = t),
              (this.msg = this.strm.msg);
          });
        var ur,
          lr,
          dr,
          hr,
          fr,
          _r,
          pr,
          vr,
          gr,
          mr,
          br,
          yr,
          wr,
          kr,
          Cr,
          xr,
          Er,
          Lr,
          Sr,
          Tr,
          Ar,
          Ir,
          Or,
          Dr = {
            Inflate: sr,
            inflate: cr,
            inflateRaw: function (t, e) {
              return ((e = e || {}).raw = !0), cr(t, e);
            },
            ungzip: cr,
            constants: Gt,
          },
          Nr = {
            Deflate: un.Deflate,
            deflate: un.deflate,
            deflateRaw: un.deflateRaw,
            gzip: un.gzip,
            Inflate: Dr.Inflate,
            inflate: Dr.inflate,
            inflateRaw: Dr.inflateRaw,
            ungzip: Dr.ungzip,
            constants: Gt,
          };
        class Rr {
          constructor(e, n, r, i = t.SDK_TYPE.WEB) {
            ur.add(this),
              lr.set(this, void 0),
              dr.set(this, void 0),
              hr.set(this, void 0),
              fr.set(this, void 0),
              _r.set(this, void 0),
              pr.set(this, void 0),
              vr.set(this, void 0),
              gr.set(this, void 0),
              mr.set(this, void 0),
              br.set(this, 1e4),
              yr.set(this, void 0),
              wr.set(this, !1),
              kr.set(this, null),
              Cr.set(this, null),
              xr.set(this, 0),
              S(this, lr, [], "f"),
              S(this, hr, e, "f"),
              S(this, dr, n, "f"),
              S(this, fr, !1, "f"),
              S(this, _r, !1, "f"),
              S(this, vr, void 0, "f"),
              S(this, gr, !0, "f"),
              S(this, mr, !1, "f"),
              S(this, pr, !1, "f"),
              S(this, br, null != r ? r : 1e4, "f"),
              S(this, yr, i, "f");
          }
          send(t) {
            var e;
            const n = t;
            if (
              (Reflect.deleteProperty(n, "#sdk_type"),
              Reflect.deleteProperty(n, "#ts_s"),
              !E.dataSize(n, 128))
            )
              return !0;
            if ("#beat" === n["#name"])
              for (
                let t = L(this, lr, "f").length - 1;
                t >= L(this, xr, "f");
                t--
              )
                "#beat" ===
                  (null === (e = L(this, lr, "f")[t]) || void 0 === e
                    ? void 0
                    : e["#name"]) && L(this, lr, "f").splice(t, 1);
            return (
              L(this, lr, "f").push(n),
              L(this, dr, "f") && L(this, ur, "m", Ir).call(this),
              L(this, gr, "f") &&
                (S(this, gr, !1, "f"), L(this, ur, "m", Ir).call(this)),
              L(this, mr, "f") && L(this, ur, "m", Ir).call(this),
              L(this, lr, "f").length > Rr.maxCacheSize &&
                L(this, lr, "f").shift(),
              L(this, ur, "m", Sr).call(this),
              !(
                !L(this, _r, "f") &&
                !L(this, pr, "f") &&
                L(this, lr, "f").length >= Rr.maxDataSize &&
                (L(this, ur, "m", Ir).call(this), 0)
              )
            );
          }
          flush() {
            S(this, fr, !0, "f"),
              L(this, pr, "f") || L(this, ur, "m", Ir).call(this);
          }
          onceFirstResponse(t) {
            if (L(this, wr, "f"))
              try {
                t(L(this, kr, "f"));
              } catch (t) {
                console.warn(
                  "[EventLog] batch report first-response listener failed:",
                  t instanceof Error ? t.message : t
                );
              }
            else S(this, Cr, t, "f");
          }
        }
        (lr = new WeakMap()),
          (dr = new WeakMap()),
          (hr = new WeakMap()),
          (fr = new WeakMap()),
          (_r = new WeakMap()),
          (pr = new WeakMap()),
          (vr = new WeakMap()),
          (gr = new WeakMap()),
          (mr = new WeakMap()),
          (br = new WeakMap()),
          (yr = new WeakMap()),
          (wr = new WeakMap()),
          (kr = new WeakMap()),
          (Cr = new WeakMap()),
          (xr = new WeakMap()),
          (ur = new WeakSet()),
          (Er = function (t) {
            return Nr.gzip(t);
          }),
          (Lr = function () {
            clearTimeout(L(this, vr, "f")),
              S(this, mr, !1, "f"),
              S(this, vr, void 0, "f");
          }),
          (Sr = function () {
            L(this, vr, "f") ||
              S(
                this,
                vr,
                setTimeout(() => {
                  L(this, ur, "m", Lr).call(this),
                    S(this, mr, !0, "f"),
                    L(this, ur, "m", Ir).call(this);
                }, L(this, br, "f")),
                "f"
              );
          }),
          (Tr = async function () {
            const e = L(this, lr, "f").slice(0, Rr.maxReportNum),
              n = L(this, ur, "m", Ar).call(this, e);
            S(this, xr, e.length, "f");
            const r = {
              "#ts_s": Date.now(),
              "#sdk_type":
                L(this, yr, "f") === t.SDK_TYPE.WEB ? "Web JS" : "JavaScript",
              data: n,
            };
            return [
              await L(this, ur, "m", Er).call(this, JSON.stringify(r)),
              e.length,
            ];
          }),
          (Ar = function (t) {
            var e;
            let n = -1;
            for (let r = t.length - 1; r >= 0; r--)
              if (
                "#beat" ===
                (null === (e = t[r]) || void 0 === e ? void 0 : e["#name"])
              ) {
                n = r;
                break;
              }
            if (-1 === n) return t;
            const r = [];
            for (let e = 0; e < t.length; e++) {
              const i = t[e];
              ("#beat" === (null == i ? void 0 : i["#name"]) && e !== n) ||
                r.push(i);
            }
            return r;
          }),
          (Ir = async function t(e = 0) {
            var n, r;
            if (L(this, _r, "f")) return;
            if (
              !(null === (n = L(this, lr, "f")) || void 0 === n
                ? void 0
                : n.length)
            )
              return void S(this, fr, !1, "f");
            S(this, _r, !0, "f"), L(this, ur, "m", Lr).call(this);
            const i = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100],
              [o, a] = await L(this, ur, "m", Tr).call(this),
              s = null !== (r = i[e]) && void 0 !== r ? r : i.at(-1);
            return L(this, ur, "m", Or)
              .call(this, o)
              .then(async (e) => {
                var n;
                if (!L(this, wr, "f")) {
                  let t = null;
                  try {
                    t = await e.clone().json();
                  } catch (e) {
                    t = null;
                  }
                  if (
                    (S(this, wr, !0, "f"),
                    S(this, kr, t, "f"),
                    L(this, Cr, "f"))
                  ) {
                    const e = L(this, Cr, "f");
                    S(this, Cr, null, "f");
                    try {
                      e(t);
                    } catch (t) {
                      console.warn(
                        "[EventLog] batch report first-response listener failed:",
                        t instanceof Error ? t.message : t
                      );
                    }
                  }
                }
                L(this, lr, "f").splice(0, a),
                  S(this, xr, 0, "f"),
                  S(this, _r, !1, "f"),
                  S(this, pr, !1, "f"),
                  (L(this, fr, "f") ||
                    (null === (n = L(this, lr, "f")) || void 0 === n
                      ? void 0
                      : n.length) >= Rr.maxDataSize ||
                    L(this, dr, "f")) &&
                    L(this, ur, "m", t).call(this),
                  L(this, ur, "m", Lr).call(this),
                  L(this, ur, "m", Sr).call(this);
              })
              .catch(() => {
                L(this, ur, "m", Lr).call(this),
                  S(this, pr, !0, "f"),
                  S(this, xr, 0, "f"),
                  S(
                    this,
                    vr,
                    setTimeout(() => {
                      L(this, ur, "m", Lr).call(this),
                        L(this, ur, "m", t).call(this, e + 1);
                    }, 1e3 * s),
                    "f"
                  ),
                  S(this, _r, !1, "f");
              });
          }),
          (Or = async function (t) {
            return (
              E.dataSize(t, 63),
              fetch(`${L(this, hr, "f")}batch_event`, {
                method: "GET", // "POST"
                mode: "cors",
                cache: "no-cache",
                credentials: "omit",
                keepalive: !1,
                headers: {
                  "Content-Type": "application/json",
                  "Content-Encoding": "gzip",
                },
                redirect: "follow",
                referrerPolicy: "same-origin",
                body: t,
              })
            );
          }),
          (Rr.maxCacheSize = 1e3),
          (Rr.maxReportNum = 100),
          (Rr.maxDataSize = 50);
        let zr = null;
        const Pr = new Map();
        function jr() {
          return (
            "undefined" != typeof window &&
            "function" == typeof window.gtag &&
            Array.isArray(window.dataLayer)
          );
        }
        function Fr(t) {
          return (function (t) {
            if ("undefined" == typeof document) return !1;
            const e = document.getElementsByTagName("script"),
              n = `https://www.googletagmanager.com/gtag/js?id=${t}`;
            for (let t = 0; t < e.length; t++) if (e[t].src === n) return !0;
            return !1;
          })(t)
            ? Promise.resolve()
            : new Promise((e, n) => {
                let r = !1,
                  i = null,
                  o = null,
                  a = null;
                const s = () => {
                    i && (clearInterval(i), (i = null)),
                      o && (clearTimeout(o), (o = null)),
                      a && (clearTimeout(a), (a = null));
                  },
                  c = (t) => {
                    r || ((r = !0), s(), n(t));
                  };
                a = setTimeout(() => {
                  c(new Error("GA4 script injection timeout after 5s"));
                }, 5e3);
                try {
                  window.dataLayer || (window.dataLayer = []);
                  const n = document.createElement("script");
                  (n.async = !0),
                    (n.src = `https://www.googletagmanager.com/gtag/js?id=${t}`),
                    (n.onerror = () => {
                      c(new Error("Failed to load GA4 script"));
                    }),
                    (n.onload = () => {
                      const n = document.createElement("script");
                      (n.textContent = `\n                    window.dataLayer = window.dataLayer || [];\n                    function gtag(){dataLayer.push(arguments);}\n                    gtag('js', new Date());\n                    gtag('config', '${t}');\n                `),
                        document.head.appendChild(n),
                        (i = setInterval(() => {
                          jr() && (r || ((r = !0), s(), e()));
                        }, 50)),
                        (o = setTimeout(() => {
                          jr() ||
                            c(
                              new Error(
                                "GA4 script loaded but gtag function not available"
                              )
                            );
                        }, 5e3));
                    }),
                    document.head.appendChild(n);
                } catch (t) {
                  c(
                    t instanceof Error
                      ? t
                      : new Error("Unknown error in injectGA4Script")
                  );
                }
              });
        }
        function Hr() {
          if ("undefined" == typeof document) return null;
          try {
            const t = document.cookie.split(";");
            for (const e of t) {
              const [t, n] = e.trim().split("=");
              if (t.startsWith("_ga") && n) {
                const t = n.split(".");
                if (t.length >= 4) return `${t[2]}.${t[3]}`;
              }
            }
          } catch (t) {}
          return null;
        }
        async function Mr(t) {
          const { measurementId: e, autoInject: n = !0, timeout: r = 5e3 } = t;
          if ("undefined" == typeof window || "undefined" == typeof document)
            return {
              success: !1,
              clientId: null,
              error: "Not in browser environment",
            };
          try {
            if ((n && !jr() && (await Fr(e)), jr()))
              try {
                const t = await (function (t, e) {
                  return new Promise((n, r) => {
                    if (!jr()) return void r(new Error("GA4 is not loaded"));
                    let i = !1;
                    const o = setTimeout(() => {
                      i ||
                        ((i = !0),
                        r(new Error("Timeout while getting clientId")));
                    }, e);
                    try {
                      if (!window.gtag)
                        return void r(
                          new Error("gtag function is not available")
                        );
                      window.gtag("get", t, "client_id", (t) => {
                        i ||
                          ((i = !0),
                          clearTimeout(o),
                          t && "string" == typeof t && t.length > 0
                            ? n(t)
                            : r(
                                new Error(
                                  "Invalid clientId received: " + typeof t
                                )
                              ));
                      });
                    } catch (t) {
                      i ||
                        ((i = !0),
                        clearTimeout(o),
                        r(
                          t instanceof Error
                            ? t
                            : new Error("Unknown error in gtag call")
                        ));
                    }
                  });
                })(e, r);
                if (t) return Pr.set(e, t), { success: !0, clientId: t };
              } catch (t) {
                const n = Hr();
                return n
                  ? (Pr.set(e, n), { success: !0, clientId: n })
                  : {
                      success: !1,
                      clientId: null,
                      error:
                        t instanceof Error
                          ? t.message
                          : "Failed to get clientId",
                    };
              }
            const i = Hr();
            return i
              ? (Pr.set(e, i), { success: !0, clientId: i })
              : {
                  success: !1,
                  clientId: null,
                  error: "GA4 is not loaded and no clientId found in cookies",
                };
          } catch (t) {
            return {
              success: !1,
              clientId: null,
              error: t instanceof Error ? t.message : "Unknown error",
            };
          }
        }
        async function Ur(t) {
          const { measurementId: e } = t;
          if (!e || "string" != typeof e)
            return {
              success: !1,
              clientId: null,
              error: "Invalid measurementId",
            };
          const n = Pr.get(e);
          return n ? { success: !0, clientId: n } : Mr(t);
        }
        const Gr = {
          "dev-cn": "./event-log-api-data-lake-dev-cn.hypergryph.net",
          "staging-cn":
            "./event-log-api-data-lake-staging-cn.hypergryph.net",
          "prod-cn": "./",
          "dev-sg":
            "./event-log-api-data-platform-data-lake-dev.gryphline.net",
          "staging-sg":
            "./event-log-api-data-platform-data-lake-staging.gryphline.net",
          "prod-sg":
            "./event-log-api-data-platform-data-lake-prod.gryphline.com",
        };
        function Br(t) {
          var e;
          const n = `${null !== (e = t.env) && void 0 !== e ? e : "prod"}-${
            t.regionTag
          }`;
          return Gr[n];
        }
        class Zr {
          constructor() {
            (this._user = this.getUser()),
              (this._sdk = this.initSDK()),
              (this._log = {}),
              (this._global = {}),
              (this._preset = {});
          }
          getUser() {
            const t = (function () {
              let t = a();
              return (t && c(t)) || ((t = o()), s(t)), t;
            })();
            return { "#sdid_c": null != t ? t : "" };
          }
          initSDK() {
            return {
              "#sdk_type": "JavaScript",
              "#sdk_vn": "4.5.0",
              "#sdk_vc": "1",
            };
          }
          getInnerScope(t, ...e) {
            const n = this.getGlobal(t),
              r = this.getCommonScope(),
              i = this._preset;
            return Object.assign(Object.assign(Object.assign({}, i), r), n);
          }
          getCommonScope() {
            return Object.assign(
              Object.assign(Object.assign({}, this._user), this._sdk),
              this._log
            );
          }
          getCommonProperty(t) {
            var e;
            return null === (e = this.getCommonScope()) || void 0 === e
              ? void 0
              : e[t];
          }
          getGlobal(t) {
            return Q.get(t);
          }
          setGlobal(t, e) {
            const n = this.getGlobal(t),
              r = Object.assign({}, n, e);
            Q.set(t, r);
          }
          unsetGlobal(t, e) {
            const n = this.getGlobal(t),
              r = this._delProperty(n, e);
            return r && Q.set(t, n), r;
          }
          clearGlobal(t) {
            Q.set(t, {});
          }
          setUser(t) {
            return (
              (this._user["#user_id"] = t),
              this._delProperty(this._user, ["#character_id", "#server_id"])
            );
          }
          unsetUser() {
            return this._delProperty(this._user, [
              "#user_id",
              "#character_id",
              "#server_id",
            ]);
          }
          setCharacter(t, e) {
            return (
              (this._user["#character_id"] = t),
              (this._user["#server_id"] = e),
              !0
            );
          }
          unsetCharacter() {
            return this._delProperty(this._user, [
              "#character_id",
              "#server_id",
            ]);
          }
          setPreset(t) {
            return (this._preset = t), !0;
          }
          getPreset() {
            return this._preset;
          }
          static _clone(t) {
            const e = new Zr();
            return (
              t &&
                ((e._user = Object.assign({}, t._user)),
                (e._sdk = Object.assign({}, t._sdk)),
                (e._log = Object.assign({}, t._log)),
                (e._global = Object.assign({}, t._global))),
              e
            );
          }
          _delProperty(t, e) {
            try {
              const n = Array.isArray(e) ? e : [e];
              for (const e of n) Reflect.deleteProperty(t, e);
              return !0;
            } catch (t) {
              return console.log("属性删除失败，请提供正确的参数"), !1;
            }
          }
        }
        class Jr {
          constructor(t) {
            var e;
            (this._hookListener = {}),
              (this._argSize =
                null !== (e = null == t ? void 0 : t.length) && void 0 !== e
                  ? e
                  : 0);
          }
          call(t) {
            const e = Object.values(this._hookListener).flat();
            for (const t of e) t(null);
          }
          tap(t, e) {
            var n, r, i;
            (null === (n = this._hookListener) || void 0 === n ? void 0 : n[t])
              ? null ===
                  (i =
                    null === (r = this._hookListener) || void 0 === r
                      ? void 0
                      : r[t]) ||
                void 0 === i ||
                i.push(e)
              : (this._hookListener[t] = [e]);
          }
          size(t) {
            var e, n, r;
            return null !==
              (r =
                null ===
                  (n =
                    null === (e = this._hookListener) || void 0 === e
                      ? void 0
                      : e[t]) || void 0 === n
                  ? void 0
                  : n.length) && void 0 !== r
              ? r
              : 0;
          }
          tapWithInstanceId(t, e, n) {
            var r;
            const i = `${t}:${e}`;
            (null === (r = this._hookListener) || void 0 === r
              ? void 0
              : r[i]) && delete this._hookListener[i],
              (this._hookListener[i] = [n]);
          }
          sizeWithInstanceId(t, e) {
            var n, r, i;
            const o = `${t}:${e}`;
            return null !==
              (i =
                null ===
                  (r =
                    null === (n = this._hookListener) || void 0 === n
                      ? void 0
                      : n[o]) || void 0 === r
                  ? void 0
                  : r.length) && void 0 !== i
              ? i
              : 0;
          }
          removeInstanceHandler(t, e) {
            var n;
            const r = `${t}:${e}`;
            (null === (n = this._hookListener) || void 0 === n
              ? void 0
              : n[r]) && delete this._hookListener[r];
          }
        }
        class Vr {
          constructor() {
            (this.hook = {
              init: new Jr(["arg1"]),
              pageShow: new Jr(["arg1"]),
              hashChange: new Jr(["arg1"]),
              pushState: new Jr(["arg1"]),
              replaceState: new Jr(["arg1"]),
              changeState: new Jr(["arg1"]),
              pageHide: new Jr(["arg1"]),
              exception: new Jr(["arg1"]),
              scopeChange: new Jr(["arg1"]),
              beforeTrace: new Jr(["arg1"]),
            }),
              this._initHook();
          }
          static getInstance() {
            return Vr._instance || (Vr._instance = new Vr()), Vr._instance;
          }
          _initHook() {
            Vr._isInitialized ||
              ("undefined" != typeof window &&
                (this._pageShow(),
                this._hashChange(),
                this._pageHide(),
                this._changeState(),
                (Vr._isInitialized = !0)));
          }
          _pageShow() {
            addEventListener("pageshow", () => {
              this.hook.pageShow.call({});
            });
          }
          _changeState() {
            const t = () => {
              setTimeout(() => {
                this.hook.changeState.call({});
              }, 0);
            };
            if ((addEventListener("popstate", t), history.pushState.__wrapped))
              return;
            function e(t) {
              const e = history[t];
              return (...n) => {
                const r = new Event(t);
                return dispatchEvent(r), e.apply(history, n);
              };
            }
            const n = e("pushState"),
              r = e("replaceState");
            (n.__wrapped = !0),
              (r.__wrapped = !0),
              (history.pushState = n),
              (history.replaceState = r),
              addEventListener("pushState", t),
              addEventListener("replaceState", t);
          }
          _hashChange() {
            addEventListener("hashchange", () => {
              this.hook.hashChange.call({});
            });
          }
          _pageHide() {
            addEventListener("pagehide", () => {
              this.hook.pageHide.call({});
            });
          }
          exception() {
            this.hook.exception.call({});
          }
          scopeChange() {
            this.hook.scopeChange.call({});
          }
          beforeTrace() {
            this.hook.beforeTrace.call({});
          }
        }
        (Vr._instance = null), (Vr._isInitialized = !1);
        const Kr = "AD_TRACK",
          Wr = [
            "hg_media",
            "hg_partner",
            "hg_link_code",
            "hg_link_name",
            "hg_link_campaign",
            "hg_link_ad",
            "hg_link_adset",
            "hg_keyword_id",
            "hg_keyword",
            "hg_campaign_id",
            "hg_campaign",
            "hg_adset_id",
            "hg_adset",
            "hg_ad_id",
            "hg_ad",
            "hg_tracking_id",
            "hg_raw0",
          ],
          Yr = [
            "hg_tracking_id",
            "hg_raw0",
            "hg_campaign_id",
            "hg_campaign",
            "hg_adset_id",
            "hg_adset",
            "hg_ad_id",
            "hg_ad",
            "hg_keyword_id",
            "hg_keyword",
          ],
          Xr = "_hg_tracking_key",
          qr = "_hg_raw0_key",
          $r = "_hg_campaign_id_key",
          Qr = "_hg_campaign_key",
          ti = "_hg_adset_id_key",
          ei = "_hg_adset_key",
          ni = "_hg_ad_id_key",
          ri = "_hg_ad_key",
          ii = "_hg_keyword_id_key",
          oi = "_hg_keyword_key",
          ai = [Xr, qr, $r, Qr, ti, ei, ni, ri, ii, oi],
          si = {
            hg_tracking_id: Object.assign(
              {},
              {
                bilibili: "trackid",
                oceanengine: "clickid",
                weibo: "mark_id",
                qqad: ["qz_gdt", "gdt_vid"],
                tencentsogou: ["qz_gdt", "gdt_vid"],
                kuaishou: "callback",
                baidusearch: "bd_vid",
                "360displayad": "sourceid",
                google: "gclid",
                meta: "fbclid",
                pwn: "transaction_id",
                macan: "sid",
                se: "clickId",
                bing: "msclkid",
              }
            ),
            hg_raw0: Object.assign({}, { macan: "gid", se: "deploymentId" }),
            hg_campaign_id: { oceanengine: "projectid" },
            hg_campaign: {},
            hg_adset_id: {},
            hg_adset: {},
            hg_ad_id: { oceanengine: "promotionid" },
            hg_ad: {},
            hg_keyword_id: {},
            hg_keyword: {},
          },
          ci = {};
        for (const t of Yr) ci[t] = Object.assign({}, si[t]);
        function ui(t, e) {
          for (const e of Object.keys(t)) delete t[e];
          Object.assign(t, e);
        }
        function li(t) {
          if (!t || "object" != typeof t || Array.isArray(t)) return {};
          const e = {};
          for (const [n, r] of Object.entries(t))
            if ("string" == typeof r && r.length > 0) e[n] = r;
            else if (Array.isArray(r)) {
              const t = r.filter((t) => "string" == typeof t && t.length > 0);
              if (1 === t.length) {
                const [r] = t;
                r && (e[n] = r);
              } else t.length > 1 && (e[n] = t);
            }
          return e;
        }
        const di = [
          {
            targetField: "hg_tracking_id",
            mappingRules: ci.hg_tracking_id,
            internalKey: Xr,
            defaultFallbackKey: "tracking_id",
            useSameNameUrlParamFallback: !1,
          },
          {
            targetField: "hg_raw0",
            mappingRules: ci.hg_raw0,
            internalKey: qr,
            defaultFallbackKey: "deploymentId",
            useSameNameUrlParamFallback: !1,
          },
          {
            targetField: "hg_campaign_id",
            mappingRules: ci.hg_campaign_id,
            internalKey: $r,
            defaultFallbackKey: "hg_campaign_id",
          },
          {
            targetField: "hg_campaign",
            mappingRules: ci.hg_campaign,
            internalKey: Qr,
            defaultFallbackKey: "hg_campaign",
          },
          {
            targetField: "hg_adset_id",
            mappingRules: ci.hg_adset_id,
            internalKey: ti,
            defaultFallbackKey: "hg_adset_id",
          },
          {
            targetField: "hg_adset",
            mappingRules: ci.hg_adset,
            internalKey: ei,
            defaultFallbackKey: "hg_adset",
          },
          {
            targetField: "hg_ad_id",
            mappingRules: ci.hg_ad_id,
            internalKey: ni,
            defaultFallbackKey: "hg_ad_id",
          },
          {
            targetField: "hg_ad",
            mappingRules: ci.hg_ad,
            internalKey: ri,
            defaultFallbackKey: "hg_ad",
          },
          {
            targetField: "hg_keyword_id",
            mappingRules: ci.hg_keyword_id,
            internalKey: ii,
            defaultFallbackKey: "hg_keyword_id",
          },
          {
            targetField: "hg_keyword",
            mappingRules: ci.hg_keyword,
            internalKey: oi,
            defaultFallbackKey: "hg_keyword",
          },
        ];
        function hi(t) {
          return [...t].reduce((t, [e, n]) => ((t[e] = n), t), {});
        }
        function fi(t) {
          const e = Object.assign({}, t);
          for (const t of ai) delete e[t];
          return e;
        }
        function _i(t, e, n) {
          const r = n.mappingRules[e];
          if (!r) return { value: null, usedMappingKey: null };
          const i = Array.isArray(r) ? r : [r];
          for (const e of i) {
            const n = t[e];
            if (null != n && "" !== n) return { value: n, usedMappingKey: e };
          }
          return { value: null, usedMappingKey: null };
        }
        function pi(t, e, n) {
          const r = n.targetField,
            i = e[r];
          null != i && "" !== i
            ? ((t[n.targetField] = i), (t[n.internalKey] = r))
            : delete t[n.targetField];
        }
        function vi(t, e, n) {
          const r = t[n.internalKey];
          if (r) return r;
          const i = n.mappingRules[e];
          return i ? (Array.isArray(i) ? i[0] : i) : n.defaultFallbackKey;
        }
        function gi(t) {
          return hi(
            Object.entries(fi(t)).map(([t, e]) => [
              Wr.includes(t) ? t.replace("hg_", "#") : t,
              e,
            ])
          );
        }
        function mi() {
          const t = (function (t) {
              const e = g(t),
                n = m(t),
                r = m(t, !0);
              return Object.assign({ params: n, hashParams: r }, e);
            })(location.href),
            { params: e } = t,
            n = hi(
              Object.entries(
                ((r = e),
                (i = [...Wr]),
                r
                  ? i.reduce(function (t, e) {
                      return (
                        Object.prototype.hasOwnProperty.call(r, e) &&
                          (t[e] = r[e]),
                        t
                      );
                    }, {})
                  : {})
              ).filter(([, t]) => null != t && "" !== t)
            );
          var r, i;
          const o = n.hg_media;
          for (const t of di)
            if (
              Object.keys(t.mappingRules).length > 0 &&
              Boolean(o && t.mappingRules[o]) &&
              o
            ) {
              const { value: r, usedMappingKey: i } = _i(e, o, t);
              null != r && "" !== r
                ? ((n[t.targetField] = r), i && (n[t.internalKey] = i))
                : delete n[t.targetField];
            } else
              !1 === t.useSameNameUrlParamFallback
                ? delete n[t.targetField]
                : pi(n, e, t);
          return Object.assign({}, n);
        }
        var bi, yi, wi;
        class ki {
          constructor(t, e) {
            bi.add(this),
              (this._options = t),
              (this._trace = e),
              (this._scope = e.getScope()),
              (this._hook = Vr.getInstance().hook),
              (this._seq = 1),
              (this._instanceId = `${t.appId}_${Date.now()}_${Math.random()
                .toString(36)
                .slice(2, 9)}`);
            const n = new Rr(
              L(this, bi, "m", wi).call(this),
              !!(null == t ? void 0 : t.enableRealTimeSend),
              null == t ? void 0 : t.sendTime,
              null == t ? void 0 : t.sdkType
            );
            this._report = n;
          }
          setPresetProperties(t) {
            var e;
            return (
              !t ||
              (E.presetParams(t)
                ? (null === (e = this._scope) || void 0 === e || e.setPreset(t),
                  !0)
                : (console.warn(
                    "[EventLog] setPresetProperties: presetProperties 校验失败（key 必须以 # 开头且不在内置字段黑名单内），已忽略"
                  ),
                  !0))
            );
          }
          setGlobalProperties(t, e) {
            var n, r;
            return (
              !t ||
              (E.params(t, this._options.sdkType)
                ? (null ===
                    (r =
                      null === (n = this._scope) || void 0 === n
                        ? void 0
                        : n.setGlobal) ||
                    void 0 === r ||
                    r.call(n, null != e ? e : this._options.appId, t),
                  !0)
                : (console.warn(
                    "[EventLog] setGlobalProperties: globalProperties 校验失败（含黑名单 key、空 key 或超过数据大小限制），已忽略"
                  ),
                  !0))
            );
          }
          unsetGlobalProperties(t) {
            var e, n, r, i;
            if (!t || !Array.isArray(t))
              return (
                console.warn(
                  "[EventLog] unsetGlobalProperties: propertyKeys 必须是数组，已忽略"
                ),
                !0
              );
            for (const e of t)
              if (!E.blackName(e, this._options.sdkType))
                return (
                  console.warn(
                    `[EventLog] unsetGlobalProperties: 属性 ${e} 在黑名单内，无法销毁`
                  ),
                  !0
                );
            return (
              null ===
                (n =
                  null === (e = this._scope) || void 0 === e
                    ? void 0
                    : e.unsetGlobal) ||
                void 0 === n ||
                n.call(e, this._options.appId, t),
              null ===
                (i =
                  null === (r = this._scope) || void 0 === r
                    ? void 0
                    : r.unsetGlobal) ||
                void 0 === i ||
                i.call(r, Kr, t),
              !0
            );
          }
          clearGlobalProperties() {
            var t, e;
            null ===
              (e =
                null === (t = this._scope) || void 0 === t
                  ? void 0
                  : t.clearGlobal) ||
              void 0 === e ||
              e.call(t, this._options.appId);
          }
          event(t, e, n = !1) {
            return t && "string" == typeof t
              ? n || E.presetName(t, this._options.sdkType)
                ? L(this, bi, "m", yi).call(this, t, Object.assign({}, e))
                : (console.warn(
                    `[EventLog] event: 事件名 "${t}" 命中预置事件名黑名单，无法通过 event() 上报`
                  ),
                  !0)
              : (console.warn(
                  "[EventLog] event: 事件名 name 必须是非空字符串，已忽略"
                ),
                !0);
          }
          rmNull(t) {
            const e = {};
            for (const n in t) Object.is(t[n], null) || (e[n] = t[n]);
            return e;
          }
          setUser(t) {
            var e, n, r;
            return E.keySize(t)
              ? null ===
                  (r =
                    null ===
                      (n =
                        null === (e = this._scope) || void 0 === e
                          ? void 0
                          : e.setUser) || void 0 === n
                      ? void 0
                      : n.call(e, t)) ||
                  void 0 === r ||
                  r
              : (console.warn(
                  "[EventLog] setUser: userId 必须是非空字符串且长度 <= 128，已忽略"
                ),
                !0);
          }
          unsetUser() {
            var t, e;
            null ===
              (e =
                null === (t = this._scope) || void 0 === t
                  ? void 0
                  : t.unsetUser) ||
              void 0 === e ||
              e.call(t);
          }
          userLoginEvent(t, e) {
            var n, r, i;
            if (!E.keySize(t))
              return (
                console.warn(
                  "[EventLog] userLoginEvent: userId 必须是非空字符串且长度 <= 128，已忽略"
                ),
                !0
              );
            if (!E.params(null != e ? e : {}, this._options.sdkType))
              return (
                console.warn(
                  "[EventLog] userLoginEvent: properties 校验失败（含黑名单 key、空 key 或超过数据大小限制），已忽略"
                ),
                !0
              );
            const o =
              null ===
                (i =
                  null ===
                    (r =
                      null === (n = this._scope) || void 0 === n
                        ? void 0
                        : n.setUser) || void 0 === r
                    ? void 0
                    : r.call(n, t)) ||
              void 0 === i ||
              i;
            return o && this.event("#user_login", Object.assign({}, e), !0), o;
          }
          setCharacter(t, e) {
            var n, r, i;
            return E.keySize(t) && E.keySize(e)
              ? null ===
                  (i =
                    null ===
                      (r =
                        null === (n = this._scope) || void 0 === n
                          ? void 0
                          : n.setCharacter) || void 0 === r
                      ? void 0
                      : r.call(n, t, e)) ||
                  void 0 === i ||
                  i
              : (console.warn(
                  "[EventLog] setCharacter: characterId / serverId 必须是非空字符串且长度 <= 128，已忽略"
                ),
                !0);
          }
          unsetCharacter() {
            var t, e;
            null ===
              (e =
                null === (t = this._scope) || void 0 === t
                  ? void 0
                  : t.unsetCharacter) ||
              void 0 === e ||
              e.call(t);
          }
          characterLoginEvent(t, e, n) {
            var r, i, o;
            if (!E.keySize(t) || !E.keySize(e))
              return (
                console.warn(
                  "[EventLog] characterLoginEvent: characterId / serverId 必须是非空字符串且长度 <= 128，已忽略"
                ),
                !0
              );
            if (!E.params(null != n ? n : {}, this._options.sdkType))
              return (
                console.warn(
                  "[EventLog] characterLoginEvent: properties 校验失败（含黑名单 key、空 key 或超过数据大小限制），已忽略"
                ),
                !0
              );
            const a =
              null ===
                (o =
                  null ===
                    (i =
                      null === (r = this._scope) || void 0 === r
                        ? void 0
                        : r.setCharacter) || void 0 === i
                    ? void 0
                    : i.call(r, t, e)) ||
              void 0 === o ||
              o;
            return (
              a && this.event("#character_login", Object.assign({}, n), !0), a
            );
          }
          flush() {
            var t;
            null === (t = this._report) || void 0 === t || t.flush();
          }
        }
        (bi = new WeakSet()),
          (yi = function (t, e) {
            var n;
            if (!E.params(null != e ? e : {}, this._options.sdkType))
              return (
                console.warn(
                  `[EventLog] event "${t}": properties 校验失败（含黑名单 key、空 key 或超过数据大小限制），事件已被拦截`
                ),
                !0
              );
            let r =
              null === (n = this._scope) || void 0 === n
                ? void 0
                : n.getInnerScope(this._options.appId);
            return (
              (r = Object.assign({}, r, e, {
                "#name": t,
                "#app_id": this._options.appId,
                "#seq": this._seq++,
                "#ts_c": Date.now(),
              })),
              E.dataSize(r)
                ? ((r = this.rmNull(r)), this._report.send(r), !0)
                : (console.warn(
                    `[EventLog] event "${t}": 数据大小超过 128KB 限制，事件已被拦截`
                  ),
                  !0)
            );
          }),
          (wi = function () {
            return Br({
              env: this._options.env,
              regionTag: this._options.regionTag,
            });
          });
        let Ci = null;
        const xi = function () {
            if (!Ci) {
              const n = l(),
                r = o(),
                i = a(),
                u = !c(i);
              let d = i;
              u && r && ((d = r), s(r));
              let h =
                null !== (e = localStorage.getItem("#deviceIDS")) &&
                void 0 !== e
                  ? e
                  : "";
              c(h) || ((h = d), (t = h), localStorage.setItem("#deviceIDS", t)),
                (Ci = {
                  "#sdid_c": null != r ? r : "",
                  "#sdid_s": null != d ? d : "",
                  "#device_id": null != h ? h : "",
                  "#tracking_code": null != n ? n : "",
                  "#is_first_launched": u,
                });
            }
            var t, e;
          },
          Ei = "GA4_CLIENT_ID",
          Li = "G-V1KBM9EQ75";
        let Si = null;
        function Ti() {
          return Q.get(Ei) || {};
        }
        class Ai extends Zr {
          constructor() {
            super(),
              (this._page = {}),
              (this._pv = {}),
              (this._url = this.getURL()),
              (this._ua = this.getUA());
          }
          initSDK() {
            return {
              "#sdk_type": "Web JS",
              "#sdk_vn": "4.5.0",
              "#sdk_vc": "1",
            };
          }
          getUser() {
            const t = Ci;
            return t
              ? Object.assign({}, t)
              : (console.warn(
                  "[EventLog] User info not initialized, please call initWebJSWithConfig first"
                ),
                {
                  "#sdid_c": "",
                  "#sdid_s": "",
                  "#device_id": "",
                  "#tracking_code": "",
                  "#is_first_launched": !0,
                });
          }
          getUA() {
            var t, e, n, r, i;
            if (zr) return zr;
            const o =
                null !==
                  (t =
                    null === navigator || void 0 === navigator
                      ? void 0
                      : navigator.userAgent) && void 0 !== t
                  ? t
                  : "",
              a = v(o);
            return {
              "#ua": o,
              "#os": null !== (e = a.os.name) && void 0 !== e ? e : "",
              "#os_ver": null !== (n = a.os.version) && void 0 !== n ? n : "",
              "#browser":
                null !== (r = a.browser.name) && void 0 !== r ? r : "",
              "#browser_ver":
                null !== (i = a.browser.version) && void 0 !== i ? i : "",
            };
          }
          getURL() {
            var t;
            const e = location.href,
              n = document.referrer,
              { pathname: r, hash: i } = g(e),
              { host: o } = g(n);
            return {
              "#url": e,
              "#url_path":
                null !== (t = i ? r + i : r) && void 0 !== t ? t : "",
              "#referrer": n,
              "#referrer_host": null != o ? o : "",
              "#title": document.title,
            };
          }
          getGA4ClientId() {
            return Q.get(Ei) || {};
          }
          getInnerScope(t, e, n) {
            var r;
            const { enableAdTrack: i } = n,
              o = this.getGlobal(t, i, i),
              a = this.getAppProperties(t),
              s = i
                ? (() => {
                    const t = Q.get(Kr);
                    return t ? gi(t) : {};
                  })()
                : {},
              c = this.getGA4ClientId(),
              u = this.getCommonScope(),
              l = this._preset,
              d = Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(Object.assign(Object.assign({}, s), l), u),
                    o
                  ),
                  a
                ),
                c
              ),
              h = null !== (r = this._page[e]) && void 0 !== r ? r : {};
            return Object.assign(Object.assign({}, d), h);
          }
          getCommonScope() {
            const t = super.getCommonScope();
            return Object.assign(
              Object.assign(Object.assign({}, t), this.getURL()),
              this._ua
            );
          }
          setPage(t, e) {
            var n;
            const r = null !== (n = this._page[t]) && void 0 !== n ? n : {};
            this._page[t] = Object.assign({}, r, e);
          }
          clearPages() {
            this._page = {};
          }
          static _clone(t) {
            const e = new Ai();
            return (
              t &&
                ((e._user = Object.assign({}, t._user)),
                (e._ua = e.getUA()),
                (e._url = Object.assign({}, t._url)),
                (e._sdk = Object.assign({}, t._sdk)),
                (e._page = Object.assign({}, t._page)),
                (e._log = Object.assign({}, t._log)),
                (e._global = Object.assign({}, t._global))),
              e
            );
          }
          getGlobal(t, e = !1, n = !0) {
            var r, i;
            try {
              let o = Q.get(t);
              if (!o) {
                const e =
                  null !== (r = localStorage.getItem(t)) && void 0 !== r
                    ? r
                    : "{}";
                (o = JSON.parse(e)), Q.set(t, o);
              }
              return e
                ? n
                  ? gi(o)
                  : fi(o)
                : ((i = o),
                  hi(Object.entries(i).filter(([t]) => !Wr.includes(t))));
            } catch (t) {
              return {};
            }
          }
          setGlobal(t, e) {
            const n = this.getGlobal(t, !0, !1),
              r = Object.assign({}, n, e);
            localStorage.setItem(t, JSON.stringify(r)), Q.set(t, r);
          }
          unsetGlobal(t, e) {
            const n = this.getGlobal(t, !0, !1),
              r = this._delProperty(n, e);
            return (
              r && (localStorage.setItem(t, JSON.stringify(n)), Q.set(t, n)), r
            );
          }
          clearGlobal(t) {
            const e = this.getGlobal(t, !0, !1),
              n = Object.keys(e).reduce(
                (t, n) => (Wr.some((t) => n.startsWith(t)) && (t[n] = e[n]), t),
                {}
              );
            localStorage.setItem(t, JSON.stringify(n)), Q.set(t, n);
          }
          setAppProperties(t, e) {
            const n = `${t}_appProperties`,
              r = Q.get(n) || {},
              i = Object.assign({}, r, e);
            Q.set(n, i);
          }
          getAppProperties(t) {
            const e = `${t}_appProperties`;
            return Q.get(e) || {};
          }
          clearAppProperties(t) {
            const e = `${t}_appProperties`;
            Q.set(e, {});
          }
        }
        class Ii {
          constructor(e = t.SDK_TYPE.WEB, n) {
            this._stack = [{}];
            const r = (x(e) ? Ai : Zr)._clone();
            (this._sdkType = e),
              (this.getStackTop().scope = r),
              n && this.bindClient(n);
          }
          bindClient(t) {
            this.getStackTop().client = t;
          }
          withScope(t) {
            const e = this.pushScope();
            try {
              t(e);
            } finally {
              this.popScope();
            }
          }
          _withClient(t) {
            const { scope: e, client: n } = this.getStackTop();
            n && t(n, e);
          }
          popScope() {
            return !(this.getStack().length <= 1 || !this.getStack().pop());
          }
          pushScope() {
            const t = (x(this._sdkType) ? Ai : Zr)._clone(this.getScope());
            return (
              this.getStack().push({ client: this.getClient(), scope: t }), t
            );
          }
          getScope() {
            return this.getStackTop().scope;
          }
          getClient() {
            return this.getStackTop().client;
          }
          getStack() {
            return this._stack;
          }
          getStackTop() {
            return this._stack[this._stack.length - 1];
          }
        }
        let Oi = null,
          Di = !1;
        async function Ni(t, e) {
          const n = await fetch(`${t}/webjs/sdk_init`, {
            method: "GET",
            mode: "cors",
            cache: "no-cache",
            credentials: "omit",
            headers: { Accept: "application/json" },
            signal: e,
          });
          if (!n.ok) throw new Error(`HTTP ${n.status}`);
          return (function (t) {
            if (!t || "object" != typeof t || Array.isArray(t))
              throw new Error("invalid response body");
            const { code: e, msg: n, data: r } = t;
            if (0 !== e) {
              const t =
                "string" == typeof n && n.length > 0 ? n : `code=${String(e)}`;
              throw new Error(t);
            }
            if (!r || "object" != typeof r || Array.isArray(r))
              throw new Error("invalid response data");
            return r;
          })(await n.json());
        }
        function Ri(e) {
          !(function () {
            for (const t of Yr) ui(ci[t], {});
          })(),
            (Di = !1);
          const n = Br({ env: e.env, regionTag: e.regionTag }),
            r = new AbortController(),
            i = setTimeout(() => r.abort(), 5e3);
          Oi = (async () => {
            try {
              !(function (t) {
                if (!t || "object" != typeof t || Array.isArray(t)) return;
                const e = t;
                for (const t of Yr) {
                  const n = e[t],
                    r = void 0 !== n ? li(n) : {};
                  ui(ci[t], r);
                }
              })(await Ni(n, r.signal));
            } catch (t) {
              console.warn(
                "[EventLog] 广告追踪映射接口不可用，使用内置兜底规则:",
                t instanceof Error ? t.message : t
              ),
                (function () {
                  for (const t of Yr) ui(ci[t], Object.assign({}, si[t]));
                })();
            } finally {
              clearTimeout(i),
                (function () {
                  const e = mi();
                  if (E.params(e, t.SDK_TYPE.WEB) && Object.keys(e).length > 0)
                    try {
                      Q.set(Kr, e), localStorage.setItem(Kr, JSON.stringify(e));
                    } catch (t) {
                      console.warn(
                        "[EventLog] Failed to initialize ad track properties:",
                        t
                      );
                    }
                  else
                    try {
                      const t = localStorage.getItem(Kr);
                      if (t) {
                        const e = JSON.parse(t);
                        Q.set(Kr, e);
                      }
                    } catch (t) {
                      console.warn(
                        "[EventLog] Failed to sync ad track properties from localStorage:",
                        t
                      );
                    }
                })(),
                (Di = !0);
            }
          })();
        }
        const zi = new Map();
        let Pi = !1;
        function ji() {
          return Pi || "undefined" == typeof localStorage;
        }
        function Fi(t) {
          return `__eventlog_visited_pages__:${t}`;
        }
        function Hi(t) {
          if ("string" != typeof t || !t)
            return Object.assign((t) => !1, { invalidate: () => {} });
          let e = null,
            n = !1;
          return Object.assign(
            function (r) {
              if ("string" != typeof r || !r) return !1;
              if (r === e) return n;
              e = r;
              const i = (function (t) {
                var e, n;
                if (ji())
                  return null !== (e = zi.get(t)) && void 0 !== e ? e : [];
                let r;
                try {
                  r = localStorage.getItem(Fi(t));
                } catch (e) {
                  return (
                    (Pi = !0), null !== (n = zi.get(t)) && void 0 !== n ? n : []
                  );
                }
                if (!r) return [];
                try {
                  const t = JSON.parse(r);
                  return Array.isArray(t)
                    ? t.filter((t) => "string" == typeof t)
                    : [];
                } catch (t) {
                  return [];
                }
              })(t);
              return i.includes(r)
                ? ((n = !1), !1)
                : (i.push(r),
                  i.length > 100 && i.shift(),
                  (function (t, e) {
                    if (ji()) zi.set(t, e);
                    else
                      try {
                        localStorage.setItem(Fi(t), JSON.stringify(e));
                      } catch (n) {
                        (Pi = !0), zi.set(t, e);
                      }
                  })(t, i),
                  (n = !0),
                  !0);
            },
            {
              invalidate() {
                (e = null), (n = !1);
              },
            }
          );
        }
        const Mi = "pageView",
          Ui = "firstPageViewInvalidate";
        var Gi, Bi, Zi, Ji, Vi, Ki, Wi, Yi, Xi, qi, $i, Qi, to, eo, no, ro, io;
        class oo extends ki {
          constructor(t, e) {
            super(t, e),
              Gi.add(this),
              (this._appStartCalled = !1),
              (this._beatEnabled = !1),
              (this._beatPaused = !1),
              (this._beatAutoPaused = !1),
              (this._beatLoopStarted = !1),
              (this._beatNextSeconds = 0),
              (this._beatTimer = null),
              (this._beatTimerExpired = !1),
              (this._beatVisibilityHandler = null),
              (this._options = t),
              (this._scope = e.getScope()),
              (this._isFirstPageView = Hi(t.appId)),
              L(this, Gi, "m", Bi).call(this);
          }
          async getGA4ClientId(t) {
            const e = Ti();
            if (e["#ga_client_id"]) return e["#ga_client_id"];
            let n = t || this._options.ga4;
            n
              ? n.measurementId ||
                (n = Object.assign(Object.assign({}, n), { measurementId: Li }))
              : (n = { measurementId: Li });
            try {
              const t = await Ur(n);
              return t.success && t.clientId
                ? (Q.set(Ei, { "#ga_client_id": t.clientId }), t.clientId)
                : (console.warn(
                    `[EventLog] Failed to get GA4 clientId: ${
                      t.error || "Unknown error"
                    }`
                  ),
                  null);
            } catch (t) {
              return (
                console.warn(
                  "[EventLog] Error while getting GA4 clientId:",
                  t instanceof Error ? t.message : t
                ),
                null
              );
            }
          }
          setPresetProperties() {
            return (
              console.warn(
                "setPresetProperties is not supported in web client"
              ),
              !0
            );
          }
          setPageProperties(e) {
            var n, r;
            if (!e) return !0;
            const i = L(this, Gi, "m", Zi).call(this);
            return "string" != typeof i
              ? (console.warn(
                  "[EventLog] setPageProperties: 当前页面名解析失败，已忽略"
                ),
                !0)
              : E.params(e, t.SDK_TYPE.WEB)
              ? (null ===
                  (r =
                    null === (n = this._scope) || void 0 === n
                      ? void 0
                      : n.setPage) ||
                  void 0 === r ||
                  r.call(n, i, e),
                !0)
              : (console.warn(
                  "[EventLog] setPageProperties: pageProperties 校验失败（含黑名单 key、空 key 或超过数据大小限制），已忽略"
                ),
                !0);
          }
          setAppProperties(e, n) {
            var r, i;
            return (
              !e ||
              (E.params(e, t.SDK_TYPE.WEB)
                ? (null ===
                    (i =
                      null === (r = this._scope) || void 0 === r
                        ? void 0
                        : r.setAppProperties) ||
                    void 0 === i ||
                    i.call(r, null != n ? n : this._options.appId, e),
                  !0)
                : (console.warn(
                    "[EventLog] setAppProperties: appProperties 校验失败（含黑名单 key、空 key 或超过数据大小限制），已忽略"
                  ),
                  !0))
            );
          }
          getAdTrackParams(t = !0) {
            var e, n, r;
            const i =
                null !==
                  (n =
                    null === (e = this._scope) || void 0 === e
                      ? void 0
                      : e.getGlobal(this._options.appId, !0, !1)) &&
                void 0 !== n
                  ? n
                  : {},
              o = null !== (r = Q.get(Kr)) && void 0 !== r ? r : {},
              a = Object.assign({}, i, o),
              s = fi(
                Wr.reduce((t, e) => (e in a && (t[e] = String(a[e])), t), {})
              );
            return (
              t &&
                s.hg_media &&
                (function (t, e, n) {
                  for (const r of di) {
                    const i = t[r.targetField];
                    if (i) {
                      const o = vi(e, n, r);
                      (t[o] = i),
                        o !== r.targetField && delete t[r.targetField];
                    }
                  }
                })(s, o, s.hg_media),
              JSON.stringify(s)
            );
          }
          getAdTrackProperties() {
            return JSON.stringify(gi(JSON.parse(this.getAdTrackParams(!1))));
          }
          getTrackingCode() {
            return u();
          }
          cleanupHandlers() {
            var t, e, n, r, i, o;
            "history" === this._options.routeChange &&
              (null ===
                (n =
                  null ===
                    (e =
                      null === (t = this._hook) || void 0 === t
                        ? void 0
                        : t.changeState) || void 0 === e
                    ? void 0
                    : e.removeInstanceHandler) ||
                void 0 === n ||
                n.call(e, this._instanceId, Mi)),
              "hash" === this._options.routeChange &&
                (null ===
                  (o =
                    null ===
                      (i =
                        null === (r = this._hook) || void 0 === r
                          ? void 0
                          : r.hashChange) || void 0 === i
                      ? void 0
                      : i.removeInstanceHandler) ||
                  void 0 === o ||
                  o.call(i, this._instanceId, Mi));
          }
          appStartEvent(e, n, r, i = {}) {
            if (this._appStartCalled)
              return (
                console.error(
                  "[EventLog] appStartEvent 每个实例仅允许调用一次，重复调用已忽略"
                ),
                !1
              );
            if (!L(this, Gi, "m", Ki).call(this, e, "channel1")) return !1;
            if (!L(this, Gi, "m", Ki).call(this, n, "channel2")) return !1;
            if ("boolean" != typeof r)
              return (
                console.error(
                  "[EventLog] appStartEvent: beat 为必传参数，必须是布尔值"
                ),
                !1
              );
            const o = null != i ? i : {};
            if (!E.params(o, t.SDK_TYPE.WEB))
              return (
                console.error(
                  "[EventLog] appStartEvent: properties 参数无效，请检查字段名/类型/数据大小"
                ),
                !1
              );
            this._appStartCalled = !0;
            const a = {};
            return (
              void 0 !== e && (a["#channel1"] = e),
              void 0 !== n && (a["#channel2"] = n),
              Object.keys(a).length > 0 && L(this, Gi, "m", Vi).call(this, a),
              r && !this._beatEnabled && L(this, Gi, "m", Ji).call(this),
              L(this, Gi, "m", ro).call(
                this,
                "#app_start",
                Object.assign({}, o)
              ),
              !0
            );
          }
          beatStart() {
            return this._beatEnabled || L(this, Gi, "m", Ji).call(this), !0;
          }
          beatPause() {
            return this._beatEnabled
              ? (this._beatPaused || (this._beatPaused = !0), !0)
              : (console.warn(
                  "[EventLog] beatPause: 心跳未启用，请先调用 appStartEvent(beat=true)"
                ),
                !1);
          }
          beatResume() {
            return this._beatEnabled
              ? !this._beatPaused ||
                  ((this._beatPaused = !1), L(this, Gi, "m", $i).call(this), !0)
              : (console.warn(
                  "[EventLog] beatResume: 心跳未启用，请先调用 appStartEvent(beat=true)"
                ),
                !1);
          }
          appEnd() {
            var t, e, n, r, i, o, a, s, c, u, l;
            (this._appStartCalled = !1), L(this, Gi, "m", no).call(this);
            const d =
                null !==
                  (n =
                    null ===
                      (e =
                        null === (t = this._scope) || void 0 === t
                          ? void 0
                          : t.getPreset) || void 0 === e
                      ? void 0
                      : e.call(t)) && void 0 !== n
                  ? n
                  : {},
              h = Object.assign({}, d);
            return (
              Reflect.deleteProperty(h, "#channel1"),
              Reflect.deleteProperty(h, "#channel2"),
              null ===
                (i =
                  null === (r = this._scope) || void 0 === r
                    ? void 0
                    : r.setPreset) ||
                void 0 === i ||
                i.call(r, h),
              null ===
                (a =
                  null === (o = this._scope) || void 0 === o
                    ? void 0
                    : o.unsetUser) ||
                void 0 === a ||
                a.call(o),
              this.clearGlobalProperties(),
              null ===
                (c =
                  null === (s = this._scope) || void 0 === s
                    ? void 0
                    : s.clearAppProperties) ||
                void 0 === c ||
                c.call(s, this._options.appId),
              null ===
                (l =
                  null === (u = this._scope) || void 0 === u
                    ? void 0
                    : u.clearPages) ||
                void 0 === l ||
                l.call(u),
              !0
            );
          }
          pageViewEvent(e) {
            return E.params(null != e ? e : {}, t.SDK_TYPE.WEB)
              ? (this.event("#page_view", Object.assign({}, e), !0), !0)
              : (console.warn(
                  "[EventLog] pageViewEvent: properties 校验失败（含黑名单 key、空 key 或超过数据大小限制），事件未上报"
                ),
                !0);
          }
          autoPageViewEvent() {
            var t, e, n, r, i, o, a, s, c, u, l, d, h, f;
            const _ = () => {
                this.event("#page_view", {}, !0);
              },
              p = () => {
                this.event("#page_view", {}, !0);
              };
            return (
              "history" === this._options.routeChange &&
                (null ===
                  (r =
                    null ===
                      (n =
                        null ===
                          (e =
                            null === (t = this._hook) || void 0 === t
                              ? void 0
                              : t.changeState) || void 0 === e
                          ? void 0
                          : e.sizeWithInstanceId) || void 0 === n
                      ? void 0
                      : n.call(e, this._instanceId, Mi)) ||
                  void 0 === r ||
                  !r) &&
                (null ===
                  (a =
                    null ===
                      (o =
                        null === (i = this._hook) || void 0 === i
                          ? void 0
                          : i.changeState) || void 0 === o
                      ? void 0
                      : o.tapWithInstanceId) ||
                  void 0 === a ||
                  a.call(o, this._instanceId, Mi, _)),
              "hash" === this._options.routeChange &&
                (null ===
                  (l =
                    null ===
                      (u =
                        null ===
                          (c =
                            null === (s = this._hook) || void 0 === s
                              ? void 0
                              : s.hashChange) || void 0 === c
                          ? void 0
                          : c.sizeWithInstanceId) || void 0 === u
                      ? void 0
                      : u.call(c, this._instanceId, Mi)) ||
                  void 0 === l ||
                  !l) &&
                (null ===
                  (f =
                    null ===
                      (h =
                        null === (d = this._hook) || void 0 === d
                          ? void 0
                          : d.hashChange) || void 0 === h
                      ? void 0
                      : h.tapWithInstanceId) ||
                  void 0 === f ||
                  f.call(h, this._instanceId, Mi, p)),
              !0
            );
          }
          event(e, n, r = !1) {
            return e && "string" == typeof e
              ? r || E.presetName(e, t.SDK_TYPE.WEB)
                ? L(this, Gi, "m", ro).call(this, e, Object.assign({}, n))
                : (console.warn(
                    `[EventLog] event: 事件名 "${e}" 命中预置事件名黑名单，无法通过 event() 上报`
                  ),
                  !0)
              : (console.warn(
                  "[EventLog] event: 事件名 name 必须是非空字符串，已忽略"
                ),
                !0);
          }
        }
        (Gi = new WeakSet()),
          (Bi = function () {
            var t, e, n, r, i, o;
            let a = L(this, Gi, "m", Zi).call(this);
            const s = () => {
              const t = L(this, Gi, "m", Zi).call(this);
              t !== a && ((a = t), this._isFirstPageView.invalidate());
            };
            null ===
              (n =
                null ===
                  (e =
                    null === (t = this._hook) || void 0 === t
                      ? void 0
                      : t.changeState) || void 0 === e
                  ? void 0
                  : e.tapWithInstanceId) ||
              void 0 === n ||
              n.call(e, this._instanceId, Ui, s),
              null ===
                (o =
                  null ===
                    (i =
                      null === (r = this._hook) || void 0 === r
                        ? void 0
                        : r.hashChange) || void 0 === i
                    ? void 0
                    : i.tapWithInstanceId) ||
                void 0 === o ||
                o.call(i, this._instanceId, Ui, s);
          }),
          (Zi = function () {
            var t, e;
            const n = "hash" === this._options.routeChange,
              r = g(),
              i =
                null !== (t = null == r ? void 0 : r.pathname) && void 0 !== t
                  ? t
                  : "",
              o =
                null !== (e = null == r ? void 0 : r.hash) && void 0 !== e
                  ? e
                  : "";
            return n ? `${i}${o}` : `${i}`;
          }),
          (Ji = function () {
            var t, e;
            (this._beatEnabled = !0),
              null === (e = (t = this._report).onceFirstResponse) ||
                void 0 === e ||
                e.call(t, (t) => L(this, Gi, "m", Yi).call(this, t));
          }),
          (Vi = function (t) {
            var e, n, r, i, o;
            const a =
              null !==
                (r =
                  null ===
                    (n =
                      null === (e = this._scope) || void 0 === e
                        ? void 0
                        : e.getPreset) || void 0 === n
                    ? void 0
                    : n.call(e)) && void 0 !== r
                ? r
                : {};
            null ===
              (o =
                null === (i = this._scope) || void 0 === i
                  ? void 0
                  : i.setPreset) ||
              void 0 === o ||
              o.call(i, Object.assign(Object.assign({}, a), t));
          }),
          (Ki = function (t, e) {
            return (
              void 0 === t ||
              !("string" != typeof t || 0 === t.length || t.length > 128) ||
              (console.error(
                `[EventLog] appStartEvent: ${e} 必须是长度大于 0 且不超过 128 的字符串`
              ),
              !1)
            );
          }),
          (Wi = function (t) {
            const e = null == t ? void 0 : t.next;
            return "number" == typeof e && Number.isFinite(e) && e > 0
              ? e
              : null;
          }),
          (Yi = function (t) {
            if (!this._beatEnabled) return;
            const e = L(this, Gi, "m", Wi).call(this, t);
            if (null === e)
              return (
                console.warn(
                  "[EventLog] appStartEvent: SDK 首次 batch_event 响应未返回合法 next，#beat 心跳不会启动"
                ),
                void L(this, Gi, "m", no).call(this)
              );
            (this._beatNextSeconds = e),
              (this._beatLoopStarted = !0),
              L(this, Gi, "m", Qi).call(this),
              L(this, Gi, "m", Xi).call(this) ||
                L(this, Gi, "m", qi).call(this);
          }),
          (Xi = function () {
            return this._beatPaused || this._beatAutoPaused;
          }),
          (qi = function t() {
            if (!this._beatEnabled) return;
            const e = this._beatNextSeconds,
              n = 0.5 * e * 1e3,
              r = 1.5 * e * 1e3,
              i = n + Math.random() * (r - n);
            this._beatTimer = setTimeout(() => {
              (this._beatTimer = null),
                this._beatEnabled &&
                  (L(this, Gi, "m", Xi).call(this)
                    ? (this._beatTimerExpired = !0)
                    : (L(this, Gi, "m", ro).call(this, "#beat", {}),
                      L(this, Gi, "m", t).call(this)));
            }, i);
          }),
          ($i = function () {
            if (this._beatEnabled && !L(this, Gi, "m", Xi).call(this))
              return this._beatTimerExpired
                ? ((this._beatTimerExpired = !1),
                  L(this, Gi, "m", ro).call(this, "#beat", {}),
                  void L(this, Gi, "m", qi).call(this))
                : void (
                    this._beatTimer ||
                    (this._beatLoopStarted && L(this, Gi, "m", qi).call(this))
                  );
          }),
          (Qi = function () {
            if ("undefined" == typeof document) return;
            if (this._beatVisibilityHandler) return;
            const t = () => L(this, Gi, "m", eo).call(this);
            (this._beatVisibilityHandler = t),
              document.addEventListener("visibilitychange", t),
              L(this, Gi, "m", eo).call(this);
          }),
          (to = function () {
            "undefined" != typeof document &&
              this._beatVisibilityHandler &&
              (document.removeEventListener(
                "visibilitychange",
                this._beatVisibilityHandler
              ),
              (this._beatVisibilityHandler = null));
          }),
          (eo = function () {
            if (this._beatEnabled && "undefined" != typeof document)
              if ("hidden" === document.visibilityState) {
                if (this._beatAutoPaused) return;
                this._beatAutoPaused = !0;
              } else {
                if (!this._beatAutoPaused) return;
                (this._beatAutoPaused = !1), L(this, Gi, "m", $i).call(this);
              }
          }),
          (no = function () {
            (this._beatEnabled = !1),
              (this._beatPaused = !1),
              (this._beatAutoPaused = !1),
              (this._beatLoopStarted = !1),
              (this._beatTimerExpired = !1),
              this._beatTimer &&
                (clearTimeout(this._beatTimer), (this._beatTimer = null)),
              L(this, Gi, "m", to).call(this);
          }),
          (ro = function t(e, n, r) {
            const { skipGA4Wait: i = !1, skipAdTrackWait: o = !1 } =
              null != r ? r : {};
            return !i && this._options.enableGA4 && !Ti()["#ga_client_id"] && Si
              ? (Si.then(
                  () => {
                    L(this, Gi, "m", t).call(this, e, n, {
                      skipGA4Wait: !0,
                      skipAdTrackWait: o,
                    });
                  },
                  () => {
                    L(this, Gi, "m", t).call(this, e, n, {
                      skipGA4Wait: !0,
                      skipAdTrackWait: o,
                    });
                  }
                ),
                !0)
              : !o && this._options.enableAdTrack && !Di && Oi
              ? (Oi.then(
                  () => {
                    L(this, Gi, "m", t).call(this, e, n, {
                      skipGA4Wait: i,
                      skipAdTrackWait: !0,
                    });
                  },
                  () => {
                    L(this, Gi, "m", t).call(this, e, n, {
                      skipGA4Wait: i,
                      skipAdTrackWait: !0,
                    });
                  }
                ),
                !0)
              : L(this, Gi, "m", io).call(this, e, n);
          }),
          (io = function (e, n) {
            var r, i;
            const o = L(this, Gi, "m", Zi).call(this);
            if (!E.params(null != n ? n : {}, t.SDK_TYPE.WEB))
              return (
                console.warn(
                  `[EventLog] event "${e}": properties 校验失败（含黑名单 key、空 key 或超过数据大小限制），事件已被拦截`
                ),
                !0
              );
            let a =
              null !==
                (i =
                  null === (r = this._scope) || void 0 === r
                    ? void 0
                    : r.getInnerScope(this._options.appId, o, this._options)) &&
              void 0 !== i
                ? i
                : {};
            const s = {
              "#name": e,
              "#app_id": this._options.appId,
              "#ts_c": Date.now(),
              "#is_first_page_view": this._isFirstPageView(o),
            };
            return (
              "#beat" !== e && (s["#seq"] = this._seq++),
              (a = Object.assign({}, a, n, s)),
              E.dataSize(a)
                ? ((a = this.rmNull(a)), this._report.send(a), !0)
                : (console.warn(
                    `[EventLog] event "${e}": 数据大小超过 128KB 限制，事件已被拦截`
                  ),
                  !0)
            );
          });
        const ao = { [t.SDK_TYPE.WEB]: {}, [t.SDK_TYPE.JS]: {} },
          so = {};
        function co(t) {
          return "object" == typeof t && null !== t && !Array.isArray(t);
        }
        function uo(e) {
          return (
            !so[e] ||
            (console.warn(
              `[EventLog] ${
                e === t.SDK_TYPE.WEB ? "WEB" : "Native"
              } SDK 已经初始化过，不允许重复调用`
            ),
            !1)
          );
        }
        const lo = function (e) {
            if (!uo(t.SDK_TYPE.WEB)) return !1;
            if (
              (E.strictValidateOptions(e, [
                "env",
                "regionTag",
                "enableRealTimeSend",
                "routeChange",
                "enableAdTrack",
                "enableGA4",
                "sendTime",
                "ga4",
              ]),
              e.enableGA4 &&
                e.ga4 &&
                co(e.ga4) &&
                void 0 !== e.ga4.measurementId &&
                ("string" != typeof e.ga4.measurementId ||
                  "" === e.ga4.measurementId))
            )
              return (
                console.error(
                  "初始化失败: ga4.measurementId 必须是字符串类型且不能为空字符串"
                ),
                !1
              );
            const n =
                e.enableGA4 && e.ga4 && co(e.ga4) && !e.ga4.measurementId
                  ? Object.assign(Object.assign({}, e.ga4), {
                      measurementId: Li,
                    })
                  : e.ga4,
              r = Object.assign(Object.assign({ enableAdTrack: !0 }, e), {
                ga4: n,
                sdkType: t.SDK_TYPE.WEB,
                appId: "",
              });
            return (
              !!E.initOptions(r) &&
              ((function () {
                var t, e, n, r, i;
                if (!zr) {
                  const o =
                      null !==
                        (t =
                          null === navigator || void 0 === navigator
                            ? void 0
                            : navigator.userAgent) && void 0 !== t
                        ? t
                        : "",
                    a = v(o);
                  zr = {
                    "#ua": o,
                    "#os": null !== (e = a.os.name) && void 0 !== e ? e : "",
                    "#os_ver":
                      null !== (n = a.os.version) && void 0 !== n ? n : "",
                    "#browser":
                      null !== (r = a.browser.name) && void 0 !== r ? r : "",
                    "#browser_ver":
                      null !== (i = a.browser.version) && void 0 !== i ? i : "",
                  };
                }
              })(),
              xi(),
              r.enableAdTrack && Ri(r),
              r.enableGA4 &&
                (function (t) {
                  const e = (null == t ? void 0 : t.measurementId)
                    ? t
                    : Object.assign(Object.assign({}, t), {
                        measurementId: Li,
                      });
                  Si = Ur(e)
                    .then((t) => {
                      t.success && t.clientId
                        ? Q.set(Ei, { "#ga_client_id": t.clientId })
                        : console.warn(
                            `[EventLog] Failed to get GA4 clientId: ${
                              t.error || "Unknown error"
                            }`
                          );
                    })
                    .catch((t) => {
                      console.warn(
                        "[EventLog] Error while getting GA4 clientId:",
                        t instanceof Error ? t.message : t
                      );
                    })
                    .then(() => {});
                })(r.ga4),
              (so[t.SDK_TYPE.WEB] = r),
              !0)
            );
          },
          ho = function (e) {
            if (!uo(t.SDK_TYPE.JS)) return !1;
            E.strictValidateOptions(e, [
              "env",
              "regionTag",
              "enableRealTimeSend",
              "sendTime",
            ]);
            const n = Object.assign(Object.assign({}, e), {
              sdkType: t.SDK_TYPE.JS,
              appId: "",
            });
            return !!E.initOptions(n) && ((so[t.SDK_TYPE.JS] = n), !0);
          },
          fo = function (e, n) {
            if (!E.keySize(e))
              throw new Error(
                "初始化失败: appId 无效，必须是不超过128字符的字符串"
              );
            const { savedOptions: r, sdkType: i } = (function (e) {
                const n = so[t.SDK_TYPE.WEB],
                  r = so[t.SDK_TYPE.JS];
                let i, o;
                if (void 0 !== e)
                  if (e === t.SDK_TYPE.WEB) {
                    if (!n)
                      throw new Error(
                        "请先调用 initWebJSWithConfig 进行 WEB SDK 初始化"
                      );
                    (i = n), (o = t.SDK_TYPE.WEB);
                  } else {
                    if (e !== t.SDK_TYPE.JS)
                      throw new Error(`不支持的 SDK 类型: ${e}`);
                    if (!r)
                      throw new Error(
                        "请先调用 initNativeWithConfig 进行 Native SDK 初始化"
                      );
                    (i = r), (o = t.SDK_TYPE.JS);
                  }
                else if (n && r) (i = n), (o = t.SDK_TYPE.WEB);
                else if (n) (i = n), (o = t.SDK_TYPE.WEB);
                else {
                  if (!r)
                    throw new Error(
                      "请先调用 initWebJSWithConfig 或 initNativeWithConfig进行sdk初始化"
                    );
                  (i = r), (o = t.SDK_TYPE.JS);
                }
                return { savedOptions: i, sdkType: o };
              })(n),
              o = ao[i][e];
            if (o) return x(i), o;
            !(function (e, n) {
              const r = n === t.SDK_TYPE.WEB ? t.SDK_TYPE.JS : t.SDK_TYPE.WEB;
              if (ao[r][e]) {
                const i = r === t.SDK_TYPE.WEB ? "WEB" : "Native",
                  o = n === t.SDK_TYPE.WEB ? "WEB" : "Native";
                throw new Error(
                  `初始化失败: appId "${e}" 已经在 ${i} SDK 中初始化，不能同时在 ${o} SDK 中初始化`
                );
              }
            })(e, i);
            const a = Object.assign({}, r, { appId: e }),
              s = _o(e, i),
              c = x(i) ? new oo(a, s) : new ki(a, s);
            s.bindClient(c);
            const u = s.getClient();
            return (ao[i][e] = u), x(i), u;
          },
          _o = function (t, e) {
            return (function (t, e) {
              return C(t) || e();
            })(t, () => new Ii(e));
          };
        var po = {
          initWebJSWithConfig: lo,
          initNativeWithConfig: ho,
          getInstance: fo,
        };
        (t.default = po),
          (t.getInstance = fo),
          (t.getSavedOptions = function (t) {
            return so[t] || null;
          }),
          (t.initNativeWithConfig = ho),
          (t.initWebJSWithConfig = lo),
          Object.defineProperty(t, "__esModule", { value: !0 });
      })(e);
    },
    4184: function (t, e) {
      var n;
      /*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ !(function () {
        "use strict";
        var r = {}.hasOwnProperty;
        function i() {
          for (var t = [], e = 0; e < arguments.length; e++) {
            var n = arguments[e];
            if (n) {
              var o = typeof n;
              if ("string" === o || "number" === o) t.push(n);
              else if (Array.isArray(n)) {
                if (n.length) {
                  var a = i.apply(null, n);
                  a && t.push(a);
                }
              } else if ("object" === o) {
                if (
                  n.toString !== Object.prototype.toString &&
                  !n.toString.toString().includes("[native code]")
                ) {
                  t.push(n.toString());
                  continue;
                }
                for (var s in n) r.call(n, s) && n[s] && t.push(s);
              }
            }
          }
          return t.join(" ");
        }
        t.exports
          ? ((i.default = i), (t.exports = i))
          : void 0 ===
              (n = function () {
                return i;
              }.apply(e, [])) || (t.exports = n);
      })();
    },
    3345: function (t, e, n) {
      "use strict";
      var r = n(8081),
        i = n.n(r),
        o = n(3645),
        a = n.n(o)()(i());
      a.push([
        t.id,
        '.button__dsRTR2{cursor:pointer;user-select:none;position:relative;display:block;width:100%;height:calc(var(--base-em-size, 16px)*60/16);box-sizing:border-box;border:none;border-radius:calc(var(--base-em-size, 16px)*4/16);font-size:calc(var(--base-em-size, 16px)*22/16);font-weight:600;color:var(--Content-button-text-primary);transition:color .3s,background-color .3s,border-color .3s;background-color:var(--Content-button-bg-primary);white-space:nowrap}@media only screen and (max-width: 600px){body:not([data-rotate="1"]) .button__dsRTR2{height:calc(var(--base-em-size, 16px)*48/16);font-size:calc(var(--base-em-size, 16px)*16/16);border-radius:calc(var(--base-em-size, 16px)*2/16)}}.button__dsRTR2:hover{background-color:var(--Content-button-bg-primary-hover)}.button__dsRTR2.disabled__sYqpa5{cursor:not-allowed;background-color:var(--Content-button-bg-disabled)}.button__dsRTR2::after{content:"";position:absolute;right:calc(var(--base-em-size, 16px)*8/16);bottom:calc(var(--base-em-size, 16px)*8/16);border:calc(var(--base-em-size, 16px)*10/16) solid rgba(0,0,0,0);border-right-color:var(--Content-button-text-primary);border-bottom-color:var(--Content-button-text-primary)}@media only screen and (max-width: 600px){body:not([data-rotate="1"]) .button__dsRTR2::after{right:calc(var(--base-em-size, 16px)*8/16);bottom:calc(var(--base-em-size, 16px)*8/16);border-width:calc(var(--base-em-size, 16px)*7/16)}}.button__dsRTR2.secondary__w9PKF3{border:calc(var(--base-em-size, 16px)*1/16) solid var(--Content-button-bg-secondary);background-color:rgba(0,0,0,0);color:var(--Content-button-text-secondary)}@media only screen and (max-width: 600px){body:not([data-rotate="1"]) .button__dsRTR2.secondary__w9PKF3{border-width:calc(var(--base-em-size, 16px)*1/16)}}.button__dsRTR2.secondary__w9PKF3::after{display:none}.button__dsRTR2.secondary__w9PKF3:hover{border-color:var(--Content-button-bg-secondary-hover)}.button__dsRTR2.secondary__w9PKF3.disabled__sYqpa5{border-color:var(--Content-button-bg-disabled);opacity:.5}.hg-sdk-skin-ef .button__dsRTR2,.hg-sdk-skin-ak .button__dsRTR2{padding:calc(var(--base-em-size, 16px)*2/16);border-radius:calc(var(--base-em-size, 16px)*100/16);border:none}@media only screen and (max-width: 600px){body:not([data-rotate="1"]) .hg-sdk-skin-ef .button__dsRTR2,body:not([data-rotate="1"]) .hg-sdk-skin-ak .button__dsRTR2{border-radius:calc(var(--base-em-size, 16px)*100/16);padding:calc(var(--base-em-size, 16px)*2/16)}}.hg-sdk-skin-ef .button__dsRTR2::after,.hg-sdk-skin-ak .button__dsRTR2::after{display:none}.hg-sdk-skin-ef .button__dsRTR2::before,.hg-sdk-skin-ak .button__dsRTR2::before{content:"";position:absolute;inset:calc(var(--base-em-size, 16px)*3/16);box-shadow:inset 0 0 0 calc(var(--base-em-size, 16px)*1.5/16) var(--Content-line-btn);border-radius:calc(var(--base-em-size, 16px)*100/16);pointer-events:none}@media only screen and (max-width: 600px){body:not([data-rotate="1"]) .hg-sdk-skin-ef .button__dsRTR2::before,body:not([data-rotate="1"]) .hg-sdk-skin-ak .button__dsRTR2::before{inset:calc(var(--base-em-size, 16px)*2/16);box-shadow:inset 0 0 0 calc(var(--base-em-size, 16px)*1/16) var(--Content-line-btn)}}.hg-sdk-skin-ef .button__dsRTR2.secondary__w9PKF3,.hg-sdk-skin-ak .button__dsRTR2.secondary__w9PKF3{border:none;background-color:var(--Content-button-bg-secondary)}.hg-sdk-skin-ef .button__dsRTR2.secondary__w9PKF3:hover,.hg-sdk-skin-ak .button__dsRTR2.secondary__w9PKF3:hover{background-color:var(--Content-button-bg-secondary-hover)}.hg-sdk-skin-ef .button__dsRTR2.secondary__w9PKF3.disabled__sYqpa5,.hg-sdk-skin-ak .button__dsRTR2.secondary__w9PKF3.disabled__sYqpa5{background-color:var(--Content-button-bg-disabled);opacity:.7}.hg-sdk-skin-ak .button__dsRTR2{border-radius:calc(var(--base-em-size, 16px)*100/16);border:none}@media only screen and (max-width: 600px){body:not([data-rotate="1"]) .hg-sdk-skin-ak .button__dsRTR2{border-radius:calc(var(--base-em-size, 16px)*100/16)}}.hg-sdk-skin-ak .button__dsRTR2::after{display:none}.hg-sdk-skin-ak .button__dsRTR2.secondary__w9PKF3{border:none;background-color:var(--Content-button-bg-secondary)}.hg-sdk-skin-ak .button__dsRTR2.secondary__w9PKF3:hover{background-color:var(--Content-button-bg-secondary-hover)}.hg-sdk-skin-ak .button__dsRTR2.secondary__w9PKF3.disabled__sYqpa5{background-color:var(--Content-button-bg-disabled)}',
        "",
      ]),
        (a.locals = {
          button: "button__dsRTR2",
          disabled: "disabled__sYqpa5",
          secondary: "secondary__w9PKF3",
        }),
        (e.Z = a);
    },
    769: function (t, e, n) {
      "use strict";
      var r = n(8081),
        i = n.n(r),
        o = n(3645),
        a = n.n(o),
        s = n(1667),
        c = n.n(s),
        u = new URL(n(5387), n.b),
        l = new URL(n(8002), n.b),
        d = new URL(n(5708), n.b),
        h = a()(i()),
        f = c()(u),
        _ = c()(l),
        p = c()(d);
      h.push([
        t.id,
        '.dialog-header__GTXMY_{width:100%;display:flex;justify-content:center;align-items:center;position:relative;user-select:none;color:var(--Content-text-white);background-color:var(--Content-bg-card, #282828);height:calc(var(--base-em-size, 16px)*90/16);border-radius:var(--border-radius-card) var(--border-radius-card) 0 0}@media only screen and (max-width: 600px){body:not([data-rotate="1"]) .dialog-header__GTXMY_{flex:none;height:calc(var(--base-em-size, 16px)*64/16);max-width:100%;overflow:hidden}}.dialog-header__GTXMY_:not(.dialog-header--with-logo__eWMUod)::before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:url(' +
          f +
          ') #d3d3d3 -95.036px -234.388px/155.376% 582.659% no-repeat;background-size:cover;background-position:center;mix-blend-mode:difference;border-radius:var(--border-radius-card) var(--border-radius-card) 0 0;pointer-events:none}.hg-sdk-skin-ef .dialog-header__GTXMY_:not(.dialog-header--with-logo__eWMUod)::before,.hg-sdk-skin-ak .dialog-header__GTXMY_:not(.dialog-header--with-logo__eWMUod)::before{display:none}.dialog-header__GTXMY_:not(.dialog-header--with-logo__eWMUod)::after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(to top, #282828 0%, rgba(40, 40, 40, 0.7) 100%);border-radius:var(--border-radius-card) var(--border-radius-card) 0 0;pointer-events:none}.hg-sdk-skin-ef .dialog-header__GTXMY_:not(.dialog-header--with-logo__eWMUod)::after,.hg-sdk-skin-ak .dialog-header__GTXMY_:not(.dialog-header--with-logo__eWMUod)::after{display:none}.dialog-header--with-logo__eWMUod{background-color:var(--Content-bg-titlevbar)}@media only screen and (max-width: 600px){body:not([data-rotate="1"]) .dialog-header--with-logo__eWMUod{background-color:rgba(0,0,0,0)}}@media only screen and (max-width: 600px){body:not([data-rotate="1"]) .hg-sdk-skin-ak .dialog-header--with-logo__eWMUod,body:not([data-rotate="1"]) .hg-sdk-skin-ef .dialog-header--with-logo__eWMUod{background-color:var(--Content-bg-titlevbar)}}.hg-sdk-skin-ef .dialog-header__GTXMY_{background-color:var(--Content-bg-titlevbar);background-image:url(' +
          _ +
          ");background-size:cover;background-position:center}.hg-sdk-skin-ak .dialog-header__GTXMY_{background-color:var(--Content-bg-titlevbar);background-image:url(" +
          p +
          ');background-size:cover;background-position:center}.dialog-header__watermark__Ojm5Jt{position:absolute;left:50%;top:calc(50% + calc(var(--base-em-size, 16px) * 13 / 16));transform:translate(-50%, -50%);opacity:.05;color:var(--Content-text-white);pointer-events:none;height:calc(var(--base-em-size, 16px)*48/16);width:auto;z-index:1}@media only screen and (max-width: 600px){body:not([data-rotate="1"]) .dialog-header__watermark__Ojm5Jt{top:calc(50% + calc(var(--base-em-size, 16px) * 8 / 16));height:calc(var(--base-em-size, 16px)*29/16)}}.hg-sdk-skin-ef .dialog-header__watermark__Ojm5Jt{display:none}.hg-sdk-skin-ak .dialog-header__watermark__Ojm5Jt{height:calc(var(--base-em-size, 16px)*55/16);opacity:.08;top:calc(50% + calc(var(--base-em-size, 16px) * 0 / 16))}@media only screen and (max-width: 600px){body:not([data-rotate="1"]) .hg-sdk-skin-ak .dialog-header__watermark__Ojm5Jt{top:calc(50% + calc(var(--base-em-size, 16px) * 0 / 16))}}.dialog-header__border__F7BeIB{position:absolute;left:0;bottom:0;width:100%;background-color:var(--Brand-primary);display:none}.hg-sdk-skin-ef .dialog-header__border__F7BeIB,.hg-sdk-skin-ak .dialog-header__border__F7BeIB{display:block;height:calc(var(--base-em-size, 16px)*5/16)}@media only screen and (max-width: 600px){body:not([data-rotate="1"]) .hg-sdk-skin-ef .dialog-header__border__F7BeIB,body:not([data-rotate="1"]) .hg-sdk-skin-ak .dialog-header__border__F7BeIB{height:calc(var(--base-em-size, 16px)*3/16)}}.dialog-header__center__JaEXQl{top:calc(var(--base-em-size, 16px)*-2.5/16);position:relative;z-index:1;display:flex;align-items:center;justify-content:center;width:100%;box-sizing:border-box;pointer-events:none;padding-left:calc(var(--base-em-size, 16px)*24/16);padding-right:calc(var(--base-em-size, 16px)*24/16)}@media only screen and (max-width: 600px){body:not([data-rotate="1"]) .dialog-header__center__JaEXQl{top:calc(var(--base-em-size, 16px)*-1.5/16)}}@media only screen and (max-width: 600px){body:not([data-rotate="1"]) .dialog-header__center__JaEXQl{padding-left:calc(var(--base-em-size, 16px)*20/16);padding-right:calc(var(--base-em-size, 16px)*20/16)}}.dialog-header--has-back__SEndCH .dialog-header__center__JaEXQl,.dialog-header--has-close__YR0MUT .dialog-header__center__JaEXQl{padding-left:calc(var(--base-em-size, 16px)*80/16);padding-right:calc(var(--base-em-size, 16px)*80/16)}@media only screen and (max-width: 600px){body:not([data-rotate="1"]) .dialog-header--has-back__SEndCH .dialog-header__center__JaEXQl,body:not([data-rotate="1"]) .dialog-header--has-close__YR0MUT .dialog-header__center__JaEXQl{padding-left:calc(var(--base-em-size, 16px)*56/16);padding-right:calc(var(--base-em-size, 16px)*56/16)}}.hg-sdk-skin-ef .dialog-header--has-back__SEndCH .dialog-header__center__JaEXQl,.hg-sdk-skin-ef .dialog-header--has-close__YR0MUT .dialog-header__center__JaEXQl{padding-left:calc(var(--base-em-size, 16px)*72/16);padding-right:calc(var(--base-em-size, 16px)*72/16)}@media only screen and (max-width: 600px){body:not([data-rotate="1"]) .hg-sdk-skin-ef .dialog-header--has-back__SEndCH .dialog-header__center__JaEXQl,body:not([data-rotate="1"]) .hg-sdk-skin-ef .dialog-header--has-close__YR0MUT .dialog-header__center__JaEXQl{padding-left:calc(var(--base-em-size, 16px)*52/16);padding-right:calc(var(--base-em-size, 16px)*52/16)}}.dialog-header__GTXMY_:not(.dialog-header--with-logo__eWMUod) .dialog-header__center__JaEXQl{margin-top:calc(var(--base-em-size, 16px)*26/16)}@media only screen and (max-width: 600px){body:not([data-rotate="1"]) .dialog-header__GTXMY_:not(.dialog-header--with-logo__eWMUod) .dialog-header__center__JaEXQl{margin-top:calc(var(--base-em-size, 16px)*16/16)}}.hg-sdk-skin-ef .dialog-header__GTXMY_:not(.dialog-header--with-logo__eWMUod) .dialog-header__center__JaEXQl,.hg-sdk-skin-ak .dialog-header__GTXMY_:not(.dialog-header--with-logo__eWMUod) .dialog-header__center__JaEXQl{margin-top:0}@media only screen and (max-width: 600px){body:not([data-rotate="1"]) .hg-sdk-skin-ef .dialog-header__GTXMY_:not(.dialog-header--with-logo__eWMUod) .dialog-header__center__JaEXQl,body:not([data-rotate="1"]) .hg-sdk-skin-ak .dialog-header__GTXMY_:not(.dialog-header--with-logo__eWMUod) .dialog-header__center__JaEXQl{margin-top:0}}@media only screen and (max-width: 600px){body:not([data-rotate="1"]) .dialog-header--long-title__CVRUpY:not(.dialog-header--with-logo__eWMUod) .dialog-header__center__JaEXQl{margin-top:calc(var(--base-em-size, 16px)*18/16)}}@media only screen and (max-width: 600px){body:not([data-rotate="1"]) .hg-sdk-skin-ef .dialog-header--long-title__CVRUpY:not(.dialog-header--with-logo__eWMUod) .dialog-header__center__JaEXQl,body:not([data-rotate="1"]) .hg-sdk-skin-ak .dialog-header--long-title__CVRUpY:not(.dialog-header--with-logo__eWMUod) .dialog-header__center__JaEXQl{margin-top:0}}.dialog-header__logo__m_dFhv{display:block;height:calc(var(--base-em-size, 16px)*72/16);width:auto}@media only screen and (max-width: 600px){body:not([data-rotate="1"]) .dialog-header__logo__m_dFhv{height:calc(var(--base-em-size, 16px)*51.2/16)}}.dialog-header__title__loIx3T{margin:0;font-weight:700;color:var(--Content-text-white);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%;font-size:calc(var(--base-em-size, 16px)*24/16)}@media only screen and (max-width: 600px){body:not([data-rotate="1"]) .dialog-header__title__loIx3T{font-size:calc(var(--base-em-size, 16px)*18/16)}}@media only screen and (max-width: 600px){body:not([data-rotate="1"]) .dialog-header__title--long__Or2r1A{font-size:calc(var(--base-em-size, 16px)*16/16)}}.dialog-header__action__yfvOYX{position:absolute;top:50%;transform:translateY(-50%);display:flex;align-items:center;justify-content:center;cursor:pointer;z-index:1;background-color:var(--Content-button-icon-btn);border-radius:50%;transition:background-color .3s;width:calc(var(--base-em-size, 16px)*40/16);height:calc(var(--base-em-size, 16px)*40/16)}.hg-sdk-skin-ef .dialog-header__action__yfvOYX,.hg-sdk-skin-ak .dialog-header__action__yfvOYX{top:calc(50% - var(--base-em-size, 16px)*2.5/16)}@media only screen and (max-width: 600px){body:not([data-rotate="1"]) .hg-sdk-skin-ef .dialog-header__action__yfvOYX,body:not([data-rotate="1"]) .hg-sdk-skin-ak .dialog-header__action__yfvOYX{top:calc(50% - var(--base-em-size, 16px)*1.5/16)}}@media only screen and (max-width: 600px){body:not([data-rotate="1"]) .dialog-header__action__yfvOYX{width:calc(var(--base-em-size, 16px)*28/16);height:calc(var(--base-em-size, 16px)*28/16)}}.dialog-header__action__yfvOYX:hover{background-color:var(--Content-button-icon-btn-hover)}.hg-sdk-skin-ef .dialog-header__action__yfvOYX{background-color:rgba(0,0,0,0);width:calc(var(--base-em-size, 16px)*32/16);height:calc(var(--base-em-size, 16px)*32/16)}@media only screen and (max-width: 600px){body:not([data-rotate="1"]) .hg-sdk-skin-ef .dialog-header__action__yfvOYX{width:calc(var(--base-em-size, 16px)*24/16);height:calc(var(--base-em-size, 16px)*24/16)}}.hg-sdk-skin-ef .dialog-header__action__yfvOYX:hover{background-color:rgba(0,0,0,0)}.dialog-header__action--back__THarra{left:calc(var(--base-em-size, 16px)*24/16)}@media only screen and (max-width: 600px){body:not([data-rotate="1"]) .dialog-header__action--back__THarra{left:calc(var(--base-em-size, 16px)*20/16)}}.dialog-header__action--close__QPCrVx{right:calc(var(--base-em-size, 16px)*24/16)}@media only screen and (max-width: 600px){body:not([data-rotate="1"]) .dialog-header__action--close__QPCrVx{right:calc(var(--base-em-size, 16px)*20/16)}}.dialog-header__GTXMY_:not(.dialog-header--with-logo__eWMUod) .dialog-header__action__yfvOYX{top:calc(50% + calc(var(--base-em-size, 16px) * 13 / 16))}@media only screen and (max-width: 600px){body:not([data-rotate="1"]) .dialog-header__GTXMY_:not(.dialog-header--with-logo__eWMUod) .dialog-header__action__yfvOYX{top:calc(50% + calc(var(--base-em-size, 16px) * 8 / 16))}}.hg-sdk-skin-ef .dialog-header__GTXMY_:not(.dialog-header--with-logo__eWMUod) .dialog-header__action__yfvOYX,.hg-sdk-skin-ak .dialog-header__GTXMY_:not(.dialog-header--with-logo__eWMUod) .dialog-header__action__yfvOYX{top:calc(50% - var(--base-em-size, 16px)*2.5/16)}@media only screen and (max-width: 600px){body:not([data-rotate="1"]) .hg-sdk-skin-ef .dialog-header__GTXMY_:not(.dialog-header--with-logo__eWMUod) .dialog-header__action__yfvOYX,body:not([data-rotate="1"]) .hg-sdk-skin-ak .dialog-header__GTXMY_:not(.dialog-header--with-logo__eWMUod) .dialog-header__action__yfvOYX{top:calc(50% - var(--base-em-size, 16px)*1.5/16)}}.dialog-header__icon__h008oh{display:block;transition:color .3s}.dialog-header__icon--default__VM5yL_{color:var(--Content-icon-white, #FFF);width:calc(var(--base-em-size, 16px)*40/16);height:calc(var(--base-em-size, 16px)*40/16)}@media only screen and (max-width: 600px){body:not([data-rotate="1"]) .dialog-header__icon--default__VM5yL_{width:calc(var(--base-em-size, 16px)*28/16);height:calc(var(--base-em-size, 16px)*28/16)}}.hg-sdk-skin-ef .dialog-header__icon--default__VM5yL_{display:none}.dialog-header__icon--ef__HjfIey{display:none}.hg-sdk-skin-ef .dialog-header__icon--ef__HjfIey{display:block;color:var(--Content-button-icon-btn);width:calc(var(--base-em-size, 16px)*32/16);height:calc(var(--base-em-size, 16px)*32/16)}@media only screen and (max-width: 600px){body:not([data-rotate="1"]) .hg-sdk-skin-ef .dialog-header__icon--ef__HjfIey{width:calc(var(--base-em-size, 16px)*24/16);height:calc(var(--base-em-size, 16px)*24/16)}}.dialog-header__action__yfvOYX:hover .dialog-header__icon--ef__HjfIey{color:var(--Content-button-icon-btn-hover)}',
        "",
      ]),
        (h.locals = {
          "dialog-header": "dialog-header__GTXMY_",
          "dialog-header--with-logo": "dialog-header--with-logo__eWMUod",
          "dialog-header__watermark": "dialog-header__watermark__Ojm5Jt",
          "dialog-header__border": "dialog-header__border__F7BeIB",
          "dialog-header__center": "dialog-header__center__JaEXQl",
          "dialog-header--has-back": "dialog-header--has-back__SEndCH",
          "dialog-header--has-close": "dialog-header--has-close__YR0MUT",
          "dialog-header--long-title": "dialog-header--long-title__CVRUpY",
          "dialog-header__logo": "dialog-header__logo__m_dFhv",
          "dialog-header__title": "dialog-header__title__loIx3T",
          "dialog-header__title--long": "dialog-header__title--long__Or2r1A",
          "dialog-header__action": "dialog-header__action__yfvOYX",
          "dialog-header__action--back": "dialog-header__action--back__THarra",
          "dialog-header__action--close":
            "dialog-header__action--close__QPCrVx",
          "dialog-header__icon": "dialog-header__icon__h008oh",
          "dialog-header__icon--default":
            "dialog-header__icon--default__VM5yL_",
          "dialog-header__icon--ef": "dialog-header__icon--ef__HjfIey",
        }),
        (e.Z = h);
    },
    9511: function (t, e, n) {
      "use strict";
      var r = n(8081),
        i = n.n(r),
        o = n(3645),
        a = n.n(o),
        s = n(1667),
        c = n.n(s),
        u = new URL(n(2437), n.b),
        l = new URL(n(181), n.b),
        d = a()(i()),
        h = c()(u),
        f = c()(l);
      d.push([
        t.id,
        '.confirmLayer__nj_DgL{width:calc(var(--base-em-size, 16px)*800/16);max-width:90%;background-color:var(--Content-bg-card);border-radius:var(--border-radius-card)}.hg-sdk-skin-ef .confirmLayer__nj_DgL,.hg-sdk-skin-ak .confirmLayer__nj_DgL{background:var(--Content-bg-white)}@media only screen and (max-width: 600px){body:not([data-rotate="1"]) .confirmLayer__nj_DgL{border-radius:var(--border-radius-card) var(--border-radius-card) 0 0;display:flex;flex-direction:column}}.hg-sdk-skin-ef .confirmLayer__nj_DgL::before{content:"";position:absolute;inset:0;background-image:url(' +
          h +
          "),url(" +
          f +
          ');background-position:left calc(var(--base-em-size, 16px)*90/16),bottom right;background-size:calc(var(--base-em-size, 16px)*458/16) calc(var(--base-em-size, 16px)*84/16),calc(var(--base-em-size, 16px)*590/16) calc(var(--base-em-size, 16px)*158/16);background-repeat:no-repeat,no-repeat;pointer-events:none;z-index:0;border-radius:inherit}@media only screen and (max-width: 600px){body:not([data-rotate="1"]) .hg-sdk-skin-ef .confirmLayer__nj_DgL::before{background-position:left calc(var(--base-em-size, 16px)*64/16),bottom right;background-size:calc(var(--base-em-size, 16px)*344/16) calc(var(--base-em-size, 16px)*63/16),calc(var(--base-em-size, 16px)*443/16) calc(var(--base-em-size, 16px)*119/16)}}.confirmLayer__nj_DgL .scroller__KkOAH9{position:relative;z-index:1}@media only screen and (max-width: 600px){body:not([data-rotate="1"]) .confirmLayer__nj_DgL .scroller__KkOAH9{flex:auto;overflow:auto;display:flex;flex-direction:column}}.confirmLayer__nj_DgL .body__hwm8AA{padding:calc(var(--base-em-size, 16px)*24/16) calc(var(--base-em-size, 16px)*36/16) 0;font-size:calc(var(--base-em-size, 16px)*20/16);color:var(--Content-text-caption);line-height:1.5}@media only screen and (max-width: 600px){body:not([data-rotate="1"]) .confirmLayer__nj_DgL .body__hwm8AA{padding:calc(var(--base-em-size, 16px)*32/16) calc(var(--base-em-size, 16px)*24/16) 0;font-size:calc(var(--base-em-size, 16px)*14/16)}}.confirmLayer__nj_DgL .body__hwm8AA b{color:var(--Content-text-highlight);font-weight:500}.confirmLayer__nj_DgL .body__hwm8AA br{line-height:calc(var(--base-em-size, 16px)*8/16)}.confirmLayer__nj_DgL .body__hwm8AA .link__EEoIsV{color:var(--Content-text-highlight);text-decoration:none;word-break:break-all}.confirmLayer__nj_DgL .body__hwm8AA .link__EEoIsV:hover{text-decoration:underline}.confirmLayer__nj_DgL .body__hwm8AA .primaryText__l7BFhV{color:var(--Content-text-highlight)}.confirmLayer__nj_DgL .footer__phDPEs{padding:calc(var(--base-em-size, 16px)*32/16) calc(var(--base-em-size, 16px)*36/16) calc(var(--base-em-size, 16px)*36/16);display:flex;align-items:center;justify-content:center;gap:calc(var(--base-em-size, 16px)*16/16)}@media only screen and (max-width: 600px){body:not([data-rotate="1"]) .confirmLayer__nj_DgL .footer__phDPEs{flex:none;padding:calc(var(--base-em-size, 16px)*32/16) calc(var(--base-em-size, 16px)*24/16) calc(var(--base-em-size, 16px)*48/16);gap:calc(var(--base-em-size, 16px)*12/16)}}.confirmLayer__nj_DgL .footer__phDPEs .button__XaeItk{flex:1 1 0;min-width:0}.confirmLayer__nj_DgL.accountBanned__kS_mlT .footer__phDPEs,.confirmLayer__nj_DgL.accountDeleting__q5A8pR .footer__phDPEs,.confirmLayer__nj_DgL.curfewAlert__rt1lfi .footer__phDPEs{justify-content:center}.confirmLayer__nj_DgL.accountBanned__kS_mlT .footer__phDPEs .button__XaeItk,.confirmLayer__nj_DgL.accountDeleting__q5A8pR .footer__phDPEs .button__XaeItk,.confirmLayer__nj_DgL.curfewAlert__rt1lfi .footer__phDPEs .button__XaeItk{flex:0 0 auto;width:calc(var(--base-em-size, 16px)*280/16)}@media only screen and (max-width: 600px){body:not([data-rotate="1"]) .confirmLayer__nj_DgL.accountBanned__kS_mlT .footer__phDPEs .button__XaeItk,body:not([data-rotate="1"]) .confirmLayer__nj_DgL.accountDeleting__q5A8pR .footer__phDPEs .button__XaeItk,body:not([data-rotate="1"]) .confirmLayer__nj_DgL.curfewAlert__rt1lfi .footer__phDPEs .button__XaeItk{flex:1 1 0;width:auto}}.confirmLayer__nj_DgL.curfewAlert__rt1lfi .body__hwm8AA{display:flex;flex-direction:column;gap:calc(var(--base-em-size, 16px)*8/16)}.confirmLayer__nj_DgL.protocolLayer__fuxOyE .body__hwm8AA .protocols__Oi5zKw{margin-top:calc(var(--base-em-size, 16px)*16/16)}.confirmLayer__nj_DgL.protocolLayer__fuxOyE .body__hwm8AA .protocols__Oi5zKw .protocol__GLoeK3{text-decoration:none;display:flex;align-items:center;justify-content:space-between;padding:calc(var(--base-em-size, 16px)*8/16) 0;border-bottom:1px dashed var(--Content-line-divider)}.confirmLayer__nj_DgL.protocolLayer__fuxOyE .body__hwm8AA .protocols__Oi5zKw .protocol__GLoeK3 .protocolName__Oh9r_K{color:var(--Content-text-caption)}.confirmLayer__nj_DgL.protocolLayer__fuxOyE .body__hwm8AA .protocols__Oi5zKw .protocol__GLoeK3 .protocolTips__SBvFj6{font-size:calc(var(--base-em-size, 16px)*12/16);color:var(--Content-text-highlight)}.confirmLayer__nj_DgL.protocolLayer__fuxOyE .body__hwm8AA .protocols__Oi5zKw .protocol__GLoeK3:hover .protocolName__Oh9r_K{text-decoration:underline;color:var(--Content-text-highlight)}.confirmLayer__nj_DgL.authenticate__mJirlU{width:calc(var(--base-em-size, 16px)*600/16)}.confirmLayer__nj_DgL.authenticate__mJirlU .body__hwm8AA{padding:calc(var(--base-em-size, 16px)*32/16) calc(var(--base-em-size, 16px)*36/16) 0;font-size:calc(var(--base-em-size, 16px)*20/16);display:flex;flex-direction:column;gap:calc(var(--base-em-size, 16px)*24/16)}@media only screen and (max-width: 600px){body:not([data-rotate="1"]) .confirmLayer__nj_DgL.authenticate__mJirlU .body__hwm8AA{padding:calc(var(--base-em-size, 16px)*24/16) calc(var(--base-em-size, 16px)*24/16) 0;font-size:calc(var(--base-em-size, 16px)*14/16);gap:calc(var(--base-em-size, 16px)*16/16)}}.confirmLayer__nj_DgL.authenticate__mJirlU .body__hwm8AA .authDesc__lqfBkt{color:var(--Content-text-caption)}.confirmLayer__nj_DgL.authenticate__mJirlU .body__hwm8AA .authInputGroup__DkzyDX{display:flex;flex-direction:column;gap:calc(var(--base-em-size, 16px)*24/16)}@media only screen and (max-width: 600px){body:not([data-rotate="1"]) .confirmLayer__nj_DgL.authenticate__mJirlU .body__hwm8AA .authInputGroup__DkzyDX{gap:calc(var(--base-em-size, 16px)*16/16)}}.confirmLayer__nj_DgL.authenticate__mJirlU .body__hwm8AA .authInput__QliuU7{width:100%;height:calc(var(--base-em-size, 16px)*60/16);border:calc(var(--base-em-size, 16px)*1.5/16) solid var(--Content-line-border);border-radius:calc(var(--base-em-size, 16px)*100/16);padding:0 calc(var(--base-em-size, 16px)*32/16) 0 calc(var(--base-em-size, 16px)*24/16);font-size:calc(var(--base-em-size, 16px)*20/16);color:var(--Content-text-primary);outline:none;box-sizing:border-box;transition:border-color .3s;background-color:var(--Content-bg-filled)}@media only screen and (max-width: 600px){body:not([data-rotate="1"]) .confirmLayer__nj_DgL.authenticate__mJirlU .body__hwm8AA .authInput__QliuU7{height:calc(var(--base-em-size, 16px)*48/16);font-size:calc(var(--base-em-size, 16px)*14/16);padding:0 calc(var(--base-em-size, 16px)*24/16)}}.confirmLayer__nj_DgL.authenticate__mJirlU .body__hwm8AA .authInput__QliuU7:hover,.confirmLayer__nj_DgL.authenticate__mJirlU .body__hwm8AA .authInput__QliuU7:focus{border-color:var(--Content-line-focus)}.confirmLayer__nj_DgL.authenticate__mJirlU .body__hwm8AA .authInput__QliuU7.error___lVAxF{border-color:var(--Content-line-error)}.confirmLayer__nj_DgL.authenticate__mJirlU .body__hwm8AA .authInput__QliuU7::placeholder{color:var(--Content-text-placeholder)}.confirmLayer__nj_DgL.authenticate__mJirlU .footer__phDPEs{padding:calc(var(--base-em-size, 16px)*32/16) calc(var(--base-em-size, 16px)*36/16) calc(var(--base-em-size, 16px)*36/16);gap:calc(var(--base-em-size, 16px)*20/16)}@media only screen and (max-width: 600px){body:not([data-rotate="1"]) .confirmLayer__nj_DgL.authenticate__mJirlU .footer__phDPEs{padding:calc(var(--base-em-size, 16px)*24/16) calc(var(--base-em-size, 16px)*24/16) calc(var(--base-em-size, 16px)*48/16);gap:calc(var(--base-em-size, 16px)*16/16)}}.confirmLayer__nj_DgL.authRetention__w8HkMw .body__hwm8AA{padding:calc(var(--base-em-size, 16px)*56/16) calc(var(--base-em-size, 16px)*36/16) 0;text-align:center;display:flex;flex-direction:column;align-items:center;gap:calc(var(--base-em-size, 16px)*16/16)}@media only screen and (max-width: 600px){body:not([data-rotate="1"]) .confirmLayer__nj_DgL.authRetention__w8HkMw .body__hwm8AA{padding:calc(var(--base-em-size, 16px)*40/16) calc(var(--base-em-size, 16px)*24/16) 0}}.confirmLayer__nj_DgL.authRetention__w8HkMw .body__hwm8AA .retentionIcon__ZGMdJQ{width:calc(var(--base-em-size, 16px)*80/16);height:calc(var(--base-em-size, 16px)*80/16)}@media only screen and (max-width: 600px){body:not([data-rotate="1"]) .confirmLayer__nj_DgL.authRetention__w8HkMw .body__hwm8AA .retentionIcon__ZGMdJQ{width:calc(var(--base-em-size, 16px)*64/16);height:calc(var(--base-em-size, 16px)*64/16)}}.confirmLayer__nj_DgL.authRetention__w8HkMw .body__hwm8AA .retentionText__rJTaou{font-size:calc(var(--base-em-size, 16px)*20/16);color:var(--Content-text-caption)}@media only screen and (max-width: 600px){body:not([data-rotate="1"]) .confirmLayer__nj_DgL.authRetention__w8HkMw .body__hwm8AA .retentionText__rJTaou{font-size:calc(var(--base-em-size, 16px)*14/16)}}.confirmLayer__nj_DgL.authRetention__w8HkMw .footer__phDPEs{padding:calc(var(--base-em-size, 16px)*32/16) calc(var(--base-em-size, 16px)*36/16) calc(var(--base-em-size, 16px)*56/16);gap:calc(var(--base-em-size, 16px)*24/16)}@media only screen and (max-width: 600px){body:not([data-rotate="1"]) .confirmLayer__nj_DgL.authRetention__w8HkMw .footer__phDPEs{padding:calc(var(--base-em-size, 16px)*24/16) calc(var(--base-em-size, 16px)*24/16) calc(var(--base-em-size, 16px)*48/16);gap:calc(var(--base-em-size, 16px)*16/16)}}.confirmLayer__nj_DgL.minorInfo__aGMHXH .body__hwm8AA{display:flex;flex-direction:column;gap:calc(var(--base-em-size, 16px)*12/16);font-size:calc(var(--base-em-size, 16px)*18/16)}.confirmLayer__nj_DgL.minorInfo__aGMHXH .body__hwm8AA .minorTitle__TCVv3M{font-weight:500;color:var(--Content-text-primary)}.confirmLayer__nj_DgL.minorInfo__aGMHXH .body__hwm8AA .minorTitleSub__HMIn_k{font-weight:400;color:var(--Content-text-placeholder)}.confirmLayer__nj_DgL.deviceVerify__vZnsV8{width:calc(var(--base-em-size, 16px)*600/16)}.confirmLayer__nj_DgL.deviceVerify__vZnsV8 .body__hwm8AA{padding:calc(var(--base-em-size, 16px)*48/16) calc(var(--base-em-size, 16px)*36/16) 0;text-align:center;display:flex;flex-direction:column;gap:calc(var(--base-em-size, 16px)*32/16)}@media only screen and (max-width: 600px){body:not([data-rotate="1"]) .confirmLayer__nj_DgL.deviceVerify__vZnsV8 .body__hwm8AA{padding:calc(var(--base-em-size, 16px)*56/16) calc(var(--base-em-size, 16px)*24/16) 0;gap:calc(var(--base-em-size, 16px)*32/16)}}.confirmLayer__nj_DgL.deviceVerify__vZnsV8 .body__hwm8AA .devicePhoneBlock__j2iZy9{display:flex;flex-direction:column;gap:calc(var(--base-em-size, 16px)*12/16);padding:0 calc(var(--base-em-size, 16px)*36/16)}@media only screen and (max-width: 600px){body:not([data-rotate="1"]) .confirmLayer__nj_DgL.deviceVerify__vZnsV8 .body__hwm8AA .devicePhoneBlock__j2iZy9{padding:0;gap:calc(var(--base-em-size, 16px)*12/16)}}.confirmLayer__nj_DgL.deviceVerify__vZnsV8 .body__hwm8AA .devicePhone__jV46jK{font-size:calc(var(--base-em-size, 16px)*32/16);font-weight:500;color:var(--Content-text-primary);line-height:1.25}@media only screen and (max-width: 600px){body:not([data-rotate="1"]) .confirmLayer__nj_DgL.deviceVerify__vZnsV8 .body__hwm8AA .devicePhone__jV46jK{font-size:calc(var(--base-em-size, 16px)*20/16);line-height:1.5}}.confirmLayer__nj_DgL.deviceVerify__vZnsV8 .body__hwm8AA .deviceDesc__IDn4TH{font-size:calc(var(--base-em-size, 16px)*16/16);color:var(--Content-text-placeholder)}@media only screen and (max-width: 600px){body:not([data-rotate="1"]) .confirmLayer__nj_DgL.deviceVerify__vZnsV8 .body__hwm8AA .deviceDesc__IDn4TH{font-size:calc(var(--base-em-size, 16px)*14/16)}}.confirmLayer__nj_DgL.deviceVerify__vZnsV8 .body__hwm8AA .deviceCodeBoxes__c7v1CI{display:flex;justify-content:center;gap:calc(var(--base-em-size, 16px)*16/16);position:relative}@media only screen and (max-width: 600px){body:not([data-rotate="1"]) .confirmLayer__nj_DgL.deviceVerify__vZnsV8 .body__hwm8AA .deviceCodeBoxes__c7v1CI{gap:calc(var(--base-em-size, 16px)*11/16)}}.confirmLayer__nj_DgL.deviceVerify__vZnsV8 .body__hwm8AA .deviceCodeBox__Ut47Jx{font-size:calc(var(--base-em-size, 16px)*34/16);width:calc(var(--base-em-size, 16px)*48/16);height:calc(var(--base-em-size, 16px)*60/16);border-radius:calc(var(--base-em-size, 16px)*4.8/16);display:flex;align-items:center;justify-content:center;font-weight:500;color:var(--Content-text-primary);background:var(--Content-bg-white);line-height:1.4117647059;box-shadow:inset 0 0 0 calc(var(--base-em-size, 16px)*1/16) var(--Content-line-border);transition:box-shadow .2s}.confirmLayer__nj_DgL.deviceVerify__vZnsV8 .body__hwm8AA .deviceCodeBox__Ut47Jx:hover,.confirmLayer__nj_DgL.deviceVerify__vZnsV8 .body__hwm8AA .deviceCodeBox__Ut47Jx.active__rX35yA{box-shadow:inset 0 0 0 calc(var(--base-em-size, 16px)*1/16) var(--Content-line-focus)}.confirmLayer__nj_DgL.deviceVerify__vZnsV8 .body__hwm8AA .deviceCodeBox__Ut47Jx.error___lVAxF{box-shadow:inset 0 0 0 calc(var(--base-em-size, 16px)*1/16) var(--Functional-Error)}.confirmLayer__nj_DgL.deviceVerify__vZnsV8 .body__hwm8AA .cursor__RkbWmq{display:inline-block;width:1px;height:calc(var(--base-em-size, 16px)*24/16);background-color:var(--Content-text-caption);animation:deviceCursorBlink__AFu9rz 1s step-end infinite}.confirmLayer__nj_DgL.deviceVerify__vZnsV8 .body__hwm8AA .deviceCodeHiddenInput__xw4lEa{position:absolute;opacity:0;width:0;height:0;pointer-events:none}.confirmLayer__nj_DgL.deviceVerify__vZnsV8 .footer__phDPEs{padding:calc(var(--base-em-size, 16px)*32/16) calc(var(--base-em-size, 16px)*36/16) calc(var(--base-em-size, 16px)*64/16);flex-direction:column;gap:calc(var(--base-em-size, 16px)*12/16)}@media only screen and (max-width: 600px){body:not([data-rotate="1"]) .confirmLayer__nj_DgL.deviceVerify__vZnsV8 .footer__phDPEs{padding:calc(var(--base-em-size, 16px)*32/16) calc(var(--base-em-size, 16px)*24/16) calc(var(--base-em-size, 16px)*56/16)}}.confirmLayer__nj_DgL.deviceVerify__vZnsV8 .footer__phDPEs .button__XaeItk{flex:none;width:100%}.confirmLayer__nj_DgL.deviceVerify__vZnsV8 .footer__phDPEs .deviceResend__NyWIvV{cursor:pointer;font-size:calc(var(--base-em-size, 16px)*20/16);color:var(--Content-text-caption)}@media only screen and (max-width: 600px){body:not([data-rotate="1"]) .confirmLayer__nj_DgL.deviceVerify__vZnsV8 .footer__phDPEs .deviceResend__NyWIvV{font-size:calc(var(--base-em-size, 16px)*14/16)}}.confirmLayer__nj_DgL.deviceVerify__vZnsV8 .footer__phDPEs .deviceResend__NyWIvV .countdownNum__aMPQve{font-weight:500;color:var(--Content-text-primary);font-variant-numeric:tabular-nums}.confirmLayer__nj_DgL.deviceVerify__vZnsV8 .footer__phDPEs .deviceResend__NyWIvV.disabled__NShrfl{color:var(--Content-text-placeholder);cursor:default}@keyframes deviceCursorBlink__AFu9rz{0%,100%{opacity:1}50%{opacity:0}}',
        "",
      ]),
        (d.locals = {
          confirmLayer: "confirmLayer__nj_DgL",
          scroller: "scroller__KkOAH9",
          body: "body__hwm8AA",
          link: "link__EEoIsV",
          primaryText: "primaryText__l7BFhV",
          footer: "footer__phDPEs",
          button: "button__XaeItk",
          accountBanned: "accountBanned__kS_mlT",
          accountDeleting: "accountDeleting__q5A8pR",
          curfewAlert: "curfewAlert__rt1lfi",
          protocolLayer: "protocolLayer__fuxOyE",
          protocols: "protocols__Oi5zKw",
          protocol: "protocol__GLoeK3",
          protocolName: "protocolName__Oh9r_K",
          protocolTips: "protocolTips__SBvFj6",
          authenticate: "authenticate__mJirlU",
          authDesc: "authDesc__lqfBkt",
          authInputGroup: "authInputGroup__DkzyDX",
          authInput: "authInput__QliuU7",
          error: "error___lVAxF",
          authRetention: "authRetention__w8HkMw",
          retentionIcon: "retentionIcon__ZGMdJQ",
          retentionText: "retentionText__rJTaou",
          minorInfo: "minorInfo__aGMHXH",
          minorTitle: "minorTitle__TCVv3M",
          minorTitleSub: "minorTitleSub__HMIn_k",
          deviceVerify: "deviceVerify__vZnsV8",
          devicePhoneBlock: "devicePhoneBlock__j2iZy9",
          devicePhone: "devicePhone__jV46jK",
          deviceDesc: "deviceDesc__IDn4TH",
          deviceCodeBoxes: "deviceCodeBoxes__c7v1CI",
          deviceCodeBox: "deviceCodeBox__Ut47Jx",
          active: "active__rX35yA",
          cursor: "cursor__RkbWmq",
          deviceCursorBlink: "deviceCursorBlink__AFu9rz",
          deviceCodeHiddenInput: "deviceCodeHiddenInput__xw4lEa",
          deviceResend: "deviceResend__NyWIvV",
          countdownNum: "countdownNum__aMPQve",
          disabled: "disabled__NShrfl",
        }),
        (e.Z = d);
    },
    7512: function (t, e, n) {
      "use strict";
      var r = n(8081),
        i = n.n(r),
        o = n(3645),
        a = n.n(o)()(i());
      a.push([
        t.id,
        '.modal__M342hr{-webkit-tap-highlight-color:rgba(0,0,0,0);z-index:999;font-family:sans-serif;font-size:calc(var(--base-em-size, 16px)*16/16);position:fixed;left:0;top:0;width:100%;height:100%;background-color:rgba(0,0,0,.4);transform:translate3d(0, 0, 1px);transition:opacity .3s,visibility .3s;opacity:0;visibility:hidden}.modal__M342hr[data-lang=ko-kr]{word-break:keep-all}.modal__M342hr.visible__nVNF5v{opacity:1;visibility:visible}.modal__M342hr .wrapper__SQx6tz{position:absolute;left:0;top:0;width:100%;height:100%}.layerContainer___gLDsM{position:absolute;left:0;top:0;width:100%;height:100%;overflow:auto;display:flex;transition:opacity .3s,visibility .3s;opacity:0;visibility:hidden}.layerContainer___gLDsM.visible__nVNF5v{transition-delay:.3s;opacity:1;visibility:visible}@media only screen and (max-width: 600px){body:not([data-rotate="1"]) .layerContainer___gLDsM.visible__nVNF5v{transition-delay:.1s}body:not([data-rotate="1"]) .layerContainer___gLDsM.visible__nVNF5v .layer__l0ijba{transform:translateY(0%)}}.layerContainer___gLDsM .layer__l0ijba{flex:none;margin:auto;position:relative;max-width:90%;box-shadow:0 0 calc(var(--base-em-size, 16px)*24/16) 0 rgba(0,0,0,.5);border-radius:var(--border-radius-card)}.hg-sdk-skin-ef .layerContainer___gLDsM .layer__l0ijba,.hg-sdk-skin-ak .layerContainer___gLDsM .layer__l0ijba{box-shadow:0 calc(var(--base-em-size, 16px)*9.6/16) calc(var(--base-em-size, 16px)*19.2/16) 0 rgba(0,0,0,.25)}@media only screen and (max-width: 600px){body:not([data-rotate="1"]) .layerContainer___gLDsM .layer__l0ijba{margin-bottom:0;transition:transform .3s;transform:translateY(50%);width:100%;max-width:unset;max-height:90%;display:flex;flex-direction:column}}body[data-rotate="1"] .resetRotateInForcedLandscape__TlcEgu{transform:rotate(-90deg)}',
        "",
      ]),
        (a.locals = {
          modal: "modal__M342hr",
          visible: "visible__nVNF5v",
          wrapper: "wrapper__SQx6tz",
          layerContainer: "layerContainer___gLDsM",
          layer: "layer__l0ijba",
          resetRotateInForcedLandscape: "resetRotateInForcedLandscape__TlcEgu",
        }),
        (e.Z = a);
    },
    6599: function (t, e, n) {
      "use strict";
      var r = n(8081),
        i = n.n(r),
        o = n(3645),
        a = n.n(o)()(i());
      a.push([
        t.id,
        '.toast__WjuDw_{position:fixed;z-index:1000;top:0;left:0;height:100%;width:100%;display:flex;align-items:center;justify-content:center;transition:opacity .3s;opacity:0;pointer-events:none}.toast__WjuDw_.visible__zxNpfY{opacity:1}.toast__WjuDw_ .content__S3SIKY{text-align:center;font-size:calc(var(--base-em-size, 16px)*20/16);line-height:calc(var(--base-em-size, 16px)*30/16);max-width:calc(var(--base-em-size, 16px)*1088/16);padding:calc(var(--base-em-size, 16px)*16/16) calc(var(--base-em-size, 16px)*24/16);border-radius:calc(var(--base-em-size, 16px)*12/16);font-family:sans-serif;color:var(--Content-text-white, #FFFFFF);background-color:var(--Content-icon-primary, #262626);box-shadow:0 0 calc(var(--base-em-size, 16px)*24/16) rgba(0,0,0,.5);pointer-events:none}@media only screen and (max-width: 600px){body:not([data-rotate="1"]) .toast__WjuDw_ .content__S3SIKY{font-size:calc(var(--base-em-size, 16px)*14/16);padding:calc(var(--base-em-size, 16px)*12/16) calc(var(--base-em-size, 16px)*16/16);border-radius:calc(var(--base-em-size, 16px)*8/16)}}',
        "",
      ]),
        (a.locals = {
          toast: "toast__WjuDw_",
          visible: "visible__zxNpfY",
          content: "content__S3SIKY",
        }),
        (e.Z = a);
    },
    9950: function (t, e, n) {
      "use strict";
      var r = n(8081),
        i = n.n(r),
        o = n(3645),
        a = n.n(o)()(i());
      a.push([
        t.id,
        '.hg-sdk-dialog__OVv4i2{--Brand-primary: #CBFF40;--Functional-Error: #F96F68;--Functional-Warning: #F5A623;--Functional-Success: #48D2A0;--Functional-Info: #48D2A0;--Content-icon-primary: #262626;--Content-icon-caption: #4D4D4D;--Content-icon-secondary: #9B9B9B;--Content-icon-Tertiary: #CCCCCA;--Content-icon-Quaternary: #FFFFFF;--Content-icon-opacity: rgba(0, 0, 0, 0.1);--Content-icon-white: #FFFFFF;--Content-icon-hover: rgba(203, 255, 64, 0.8);--Content-bg-mask: rgba(0, 0, 0, 0.4);--Content-bg-mask-card: rgba(255, 255, 255, 0.95);--Content-bg-mask-card2: rgba(255, 255, 255, 0.1);--Content-bg-brand: #CBFF40;--Content-bg-titlevbar: #191919;--Content-bg-card: #282828;--Content-bg-card-hover: rgba(203, 255, 64, 0.1);--Content-bg-card-disabled: rgba(255, 255, 255, 0.05);--Content-bg-item: rgba(255, 255, 255, 0.05);--Content-bg-item-hover: #F2F1EF;--Content-bg-filled: rgba(255, 255, 255, 0.15);--Content-bg-hover: rgba(203, 255, 64, 0.1);--Content-bg-disabled: rgba(255, 255, 255, 0.05);--Content-bg-error: rgba(249, 111, 104, 0.1);--Content-button-icon-btn: rgba(255, 255, 255, 0.1);--Content-button-icon-btn-hover: rgba(255, 255, 255, 0.3);--Content-button-bg-primary: #CBFF40;--Content-button-bg-primary-hover: rgba(203, 255, 64, 0.8);--Content-button-bg-secondary: #9B9B9B;--Content-button-bg-secondary-hover: rgba(155, 155, 155, 0.6);--Content-button-bg-disabled: rgba(203, 255, 64, 0.5);--Content-button-text-primary: #000000;--Content-button-text-secondary: #FFFFFF;--Content-button-text-disabled: rgba(0, 0, 0, 0.8);--Content-line-btn: rgba(255, 255, 255, 0);--Content-line-border: rgba(255, 255, 255, 0.1);--Content-line-divider: rgba(255, 255, 255, 0.3);--Content-line-card: #EEEEEE;--Content-line-Scrollbar-focus: #4D4D4D;--Content-line-Scrollbar-default: #CCCCCA;--Content-line-default: #9B9B9B;--Content-line-hover: #CBFF40;--Content-line-selected: #191919;--Content-line-focus: rgba(203, 255, 64, 0.6);--Content-line-error: rgba(249, 111, 104, 0.6);--Content-line-disabled: #D2D2D2;--Content-text-highlight: #CBFF40;--Content-text-hover: rgba(203, 255, 64, 0.8);--Content-text-primary: #FFFFFF;--Content-text-caption: #D4D8DD;--Content-text-placeholder: #9B9B9B;--Content-text-Tertiary: #BBBBBB;--Content-text-disabled: #787878;--Content-text-disabled-btn: #CCCCCA;--Content-text-white: #FFFFFF}.hg-sdk-dialog__OVv4i2.hg-sdk-skin-ef{--Brand-primary: #FFD800;--Functional-Error: #F96F68;--Functional-Warning: #F5A623;--Functional-Success: #48D2A0;--Functional-Info: #48D2A0;--Content-icon-primary: #262626;--Content-icon-caption: #4D4D4D;--Content-icon-secondary: #9B9B9B;--Content-icon-Tertiary: #CCCCCA;--Content-icon-Quaternary: #D2D2D2;--Content-icon-opacity: rgba(0, 0, 0, 0.1);--Content-icon-white: #FFFFFF;--Content-icon-hover: #FFD800;--Content-bg-mask: rgba(0, 0, 0, 0.4);--Content-bg-mask-card: rgba(255, 255, 255, 0.95);--Content-bg-mask-card2: rgba(255, 255, 255, 0.1);--Content-bg-brand: #FFD800;--Content-bg-titlevbar: #262626;--Content-bg-card: #FFFFFF;--Content-bg-card-hover: #F9F9F9;--Content-bg-card-disabled: rgba(230, 232, 237, 0.6);--Content-bg-item: #F5F6FA;--Content-bg-item-hover: #F2F1EF;--Content-bg-filled: #FFFFFF;--Content-bg-hover: #FFFFFF;--Content-bg-disabled: #F8F8F8;--Content-bg-error: rgba(249, 111, 104, 0.1);--Content-button-icon-btn: #CCCCCA;--Content-button-icon-btn-hover: #FFFFFF;--Content-button-bg-primary: #262626;--Content-button-bg-primary-hover: #484848;--Content-button-bg-secondary: #F2F1EF;--Content-button-bg-secondary-hover: #FCFBF9;--Content-button-bg-disabled: #B4B4B4;--Content-button-text-primary: #FFFFFF;--Content-button-text-secondary: #4D4D4D;--Content-button-text-disabled: #EEEEEE;--Content-line-btn: #9F9EA0;--Content-line-border: #EEEEEE;--Content-line-divider: #EEEEEE;--Content-line-card: #EEEEEE;--Content-line-Scrollbar-focus: #4D4D4D;--Content-line-Scrollbar-default: #CCCCCA;--Content-line-default: #9B9B9B;--Content-line-hover: #262626;--Content-line-selected: #262626;--Content-line-focus: #262626;--Content-line-error: #F96F68;--Content-line-disabled: #D2D2D2;--Content-text-highlight: #E9BA15;--Content-text-hover: #FFD800;--Content-text-primary: #262626;--Content-text-caption: #4D4D4D;--Content-text-placeholder: #9B9B9B;--Content-text-Tertiary: #BBBBBB;--Content-text-disabled: #B5B5B5;--Content-text-disabled-btn: #EEEEEE;--Content-text-white: #FFFFFF}.hg-sdk-dialog__OVv4i2.hg-sdk-skin-ak{--Brand-primary: #0098DC;--Functional-Error: #F96F68;--Functional-Warning: #F5A623;--Functional-Success: #48D2A0;--Functional-Info: #48D2A0;--Content-icon-primary: #262626;--Content-icon-caption: #4D4D4D;--Content-icon-secondary: #9B9B9B;--Content-icon-Tertiary: #CCCCCA;--Content-icon-Quaternary: #D2D2D2;--Content-icon-opacity: rgba(0, 0, 0, 0.1);--Content-icon-white: #FFFFFF;--Content-icon-hover: #00B0FF;--Content-bg-mask: rgba(0, 0, 0, 0.4);--Content-bg-mask-card: rgba(255, 255, 255, 0.95);--Content-bg-mask-card2: rgba(255, 255, 255, 0.1);--Content-bg-brand: #0098DC;--Content-bg-titlevbar: #000000;--Content-bg-card: #FFFFFF;--Content-bg-card-hover: #F9F9F9;--Content-bg-card-disabled: rgba(230, 232, 237, 0.6);--Content-bg-item: #F5F6FA;--Content-bg-item-hover: #F2F1EF;--Content-bg-filled: #FFFFFF;--Content-bg-hover: #FFFFFF;--Content-bg-disabled: #F8F8F8;--Content-bg-error: rgba(249, 111, 104, 0.1);--Content-button-icon-btn: rgba(255, 255, 255, 0.1);--Content-button-icon-btn-hover: rgba(255, 255, 255, 0.3);--Content-button-bg-primary: #000000;--Content-button-bg-primary-hover: #232323;--Content-button-bg-secondary: #EEEEEE;--Content-button-bg-secondary-hover: #F3F3F3;--Content-button-bg-disabled: rgba(0, 0, 0, 0.35);--Content-button-text-primary: #FFFFFF;--Content-button-text-secondary: #4D4D4D;--Content-button-text-disabled: #CCCCCA;--Content-line-btn: rgba(255, 255, 255, 0);--Content-line-border: #EEEEEE;--Content-line-divider: #EEEEEE;--Content-line-card: #EEEEEE;--Content-line-Scrollbar-focus: #4D4D4D;--Content-line-Scrollbar-default: #CCCCCA;--Content-line-default: #9B9B9B;--Content-line-hover: #262626;--Content-line-selected: #262626;--Content-line-focus: #262626;--Content-line-error: #F96F68;--Content-line-disabled: #D2D2D2;--Content-text-highlight: #0098DC;--Content-text-hover: #00B0FF;--Content-text-primary: #262626;--Content-text-caption: #4D4D4D;--Content-text-placeholder: #9B9B9B;--Content-text-Tertiary: #BBBBBB;--Content-text-disabled: #B5B5B5;--Content-text-disabled-btn: #CCCCCA;--Content-text-white: #FFFFFF}.hg-sdk-dialog__OVv4i2.hg-sdk-skin-ef{--Content-icon-Quaternary-2: #4D4D4D;--Content-bg-primary: #262626;--Content-bg-white: #FFFFFF;--Content-bg-error: rgba(249, 111, 104, 0.1);--Content-bg-black: #000000;--Content-bg-card-bg: #F5F6FA;--Content-bg-item-selected: #F2F1EF;--Content-button-primary: #262626;--Content-button-primary-hover: #484848;--Content-button-secondary: #F2F1EF;--Content-button-secondary-hover: #FCFBF9;--Content-button-disabled: #B4B4B4;--Content-text-brand: #E9BA15}.hg-sdk-dialog__OVv4i2.hg-sdk-skin-ak{--Content-icon-Quaternary-2: #4D4D4D;--Content-bg-primary: #000000;--Content-bg-white: #FFFFFF;--Content-bg-error: rgba(249, 111, 104, 0.1);--Content-bg-black: #000000;--Content-bg-card-bg: #F5F6FA;--Content-bg-item-selected: #F2F1EF;--Content-button-primary: #000000;--Content-button-primary-hover: #232323;--Content-button-secondary: #EEEEEE;--Content-button-secondary-hover: #F3F3F3;--Content-button-disabled: rgba(0, 0, 0, 0.35);--Content-text-brand: #0098DC}.hg-sdk-base-vars{--border-radius-card: calc(var(--base-em-size, 16px) * 12 / 16);--border-radius-input: calc(var(--base-em-size, 16px) * 4 / 16)}@media only screen and (max-width: 600px){body:not([data-rotate="1"]) .hg-sdk-base-vars{--border-radius-card: calc(var(--base-em-size, 16px) * 8 / 16)}}.hg-sdk-skin-ef{--border-radius-card: calc(var(--base-em-size, 16px) * 20 / 16);--border-radius-input: 100em}@media only screen and (max-width: 600px){body:not([data-rotate="1"]) .hg-sdk-skin-ef{--border-radius-card: calc(var(--base-em-size, 16px) * 12 / 16)}}.hg-sdk-skin-ak{--border-radius-card: calc(var(--base-em-size, 16px) * 20 / 16);--border-radius-input: 100em}@media only screen and (max-width: 600px){body:not([data-rotate="1"]) .hg-sdk-skin-ak{--border-radius-card: calc(var(--base-em-size, 16px) * 12 / 16)}}.hg-sdk-dialog__OVv4i2{font-size:16px;--base-em-size: 16px;font-family:sans-serif;line-height:1.5}@media only screen and (min-width: 600px)and (max-width: 1917px)and (min-height: 431px){.hg-sdk-dialog__OVv4i2{font-size:12.8px;--base-em-size: 12.8px}[data-dev-force-size="1"] .hg-sdk-dialog__OVv4i2{font-size:16px;--base-em-size: 16px}}@media only screen and (min-width: 600px)and (min-width: 1918px)and (max-width: 2557px)and (min-height: 431px){.hg-sdk-dialog__OVv4i2{font-size:16px;--base-em-size: 16px}}@media only screen and (min-width: 600px)and (min-width: 2558px)and (max-width: 3837px)and (min-height: 431px){.hg-sdk-dialog__OVv4i2{font-size:19.2px;--base-em-size: 19.2px}}@media only screen and (min-width: 600px)and (min-width: 3838px)and (min-height: 431px){.hg-sdk-dialog__OVv4i2{font-size:21.6px;--base-em-size: 21.6px}}@media only screen and (min-width: 600px)and (max-height: 430px){.hg-sdk-dialog__OVv4i2{font-size:10px;--base-em-size: 10px}[data-dev-force-size="1"] .hg-sdk-dialog__OVv4i2{font-size:16px;--base-em-size: 16px}}@media only screen and (max-width: 460px){body[data-rotate="1"] .hg-sdk-dialog__OVv4i2{font-size:12px;--base-em-size: 12px}}@media only screen and (max-width: 380px){body[data-rotate="1"] .hg-sdk-dialog__OVv4i2{font-size:10px;--base-em-size: 10px}}@media only screen and (max-width: 300px){body[data-rotate="1"] .hg-sdk-dialog__OVv4i2{font-size:8px;--base-em-size: 8px}}body[data-rotate="1"] .hg-sdk-dialog_enter__CHMcyZ.hg-sdk-dialog__OVv4i2 .hg-sdk-dialog-content__ijcLSR{opacity:0;transform:scale(0.88);transition:opacity .3s,transform .3s}body[data-rotate="1"] .hg-sdk-dialog_enterActive__EN0YcY.hg-sdk-dialog__OVv4i2 .hg-sdk-dialog-content__ijcLSR,body[data-rotate="1"] .hg-sdk-dialog_enterDone__ELVkhY.hg-sdk-dialog__OVv4i2 .hg-sdk-dialog-content__ijcLSR{transform:scale(1);opacity:1}body[data-rotate="1"] .hg-sdk-dialog_exit__HLno1q.hg-sdk-dialog__OVv4i2 .hg-sdk-dialog-content__ijcLSR{opacity:1;transform:scale(1);transition:opacity .3s,transform .3s}body[data-rotate="1"] .hg-sdk-dialog_exitActive__ePWnSm.hg-sdk-dialog__OVv4i2 .hg-sdk-dialog-content__ijcLSR{opacity:0;transform:scale(0.88)}@media only screen and (min-width: 600px){.hg-sdk-dialog_enter__CHMcyZ.hg-sdk-dialog__OVv4i2 .hg-sdk-dialog-content__ijcLSR{opacity:0;transform:scale(0.88);transition:opacity .3s,transform .3s}.hg-sdk-dialog_enterActive__EN0YcY.hg-sdk-dialog__OVv4i2 .hg-sdk-dialog-content__ijcLSR,.hg-sdk-dialog_enterDone__ELVkhY.hg-sdk-dialog__OVv4i2 .hg-sdk-dialog-content__ijcLSR{transform:scale(1);opacity:1}.hg-sdk-dialog_exit__HLno1q.hg-sdk-dialog__OVv4i2 .hg-sdk-dialog-content__ijcLSR{opacity:1;transform:scale(1);transition:opacity .3s,transform .3s}.hg-sdk-dialog_exitActive__ePWnSm.hg-sdk-dialog__OVv4i2 .hg-sdk-dialog-content__ijcLSR{opacity:0;transform:scale(0.88)}}@media only screen and (max-width: 600px){body:not([data-rotate="1"]) .hg-sdk-dialog__OVv4i2{padding-bottom:env(safe-area-inset-bottom);font-size:16px;--base-em-size: 16px}body:not([data-rotate="1"]) .hg-sdk-dialog_enter__CHMcyZ.hg-sdk-dialog__OVv4i2 .hg-sdk-dialog-content__ijcLSR{transform:translate3d(0, 100%, 1px);transition:transform .3s}body:not([data-rotate="1"]) .hg-sdk-dialog_enterActive__EN0YcY.hg-sdk-dialog__OVv4i2 .hg-sdk-dialog-content__ijcLSR,body:not([data-rotate="1"]) .hg-sdk-dialog_enterDone__ELVkhY.hg-sdk-dialog__OVv4i2 .hg-sdk-dialog-content__ijcLSR{transform:translate3d(0, 0, 1px)}body:not([data-rotate="1"]) .hg-sdk-dialog_exit__HLno1q.hg-sdk-dialog__OVv4i2 .hg-sdk-dialog-content__ijcLSR{transform:translate3d(0, 0, 1px);transition:transform .3s}body:not([data-rotate="1"]) .hg-sdk-dialog_exitActive__ePWnSm.hg-sdk-dialog__OVv4i2 .hg-sdk-dialog-content__ijcLSR{transform:translate3d(0, 100%, 1px)}}@media only screen and (max-width: 600px){body:not([data-rotate="1"]) .hg-sdk-dialog-content__ijcLSR{align-self:flex-end}}',
        "",
      ]),
        (a.locals = {
          "hg-sdk-dialog": "hg-sdk-dialog__OVv4i2",
          "hg-sdk-dialog_enter": "hg-sdk-dialog_enter__CHMcyZ",
          "hg-sdk-dialog-content": "hg-sdk-dialog-content__ijcLSR",
          "hg-sdk-dialog_enterActive": "hg-sdk-dialog_enterActive__EN0YcY",
          "hg-sdk-dialog_enterDone": "hg-sdk-dialog_enterDone__ELVkhY",
          "hg-sdk-dialog_exit": "hg-sdk-dialog_exit__HLno1q",
          "hg-sdk-dialog_exitActive": "hg-sdk-dialog_exitActive__ePWnSm",
        }),
        (e.Z = a);
    },
    3645: function (t) {
      "use strict";
      t.exports = function (t) {
        var e = [];
        return (
          (e.toString = function () {
            return this.map(function (e) {
              var n = "",
                r = void 0 !== e[5];
              return (
                e[4] && (n += "@supports (".concat(e[4], ") {")),
                e[2] && (n += "@media ".concat(e[2], " {")),
                r &&
                  (n += "@layer".concat(
                    e[5].length > 0 ? " ".concat(e[5]) : "",
                    " {"
                  )),
                (n += t(e)),
                r && (n += "}"),
                e[2] && (n += "}"),
                e[4] && (n += "}"),
                n
              );
            }).join("");
          }),
          (e.i = function (t, n, r, i, o) {
            "string" == typeof t && (t = [[null, t, void 0]]);
            var a = {};
            if (r)
              for (var s = 0; s < this.length; s++) {
                var c = this[s][0];
                null != c && (a[c] = !0);
              }
            for (var u = 0; u < t.length; u++) {
              var l = [].concat(t[u]);
              (r && a[l[0]]) ||
                (void 0 !== o &&
                  (void 0 === l[5] ||
                    (l[1] = "@layer"
                      .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                      .concat(l[1], "}")),
                  (l[5] = o)),
                n &&
                  (l[2]
                    ? ((l[1] = "@media ".concat(l[2], " {").concat(l[1], "}")),
                      (l[2] = n))
                    : (l[2] = n)),
                i &&
                  (l[4]
                    ? ((l[1] = "@supports ("
                        .concat(l[4], ") {")
                        .concat(l[1], "}")),
                      (l[4] = i))
                    : (l[4] = "".concat(i))),
                e.push(l));
            }
          }),
          e
        );
      };
    },
    1667: function (t) {
      "use strict";
      t.exports = function (t, e) {
        return (
          e || (e = {}),
          t
            ? ((t = String(t.__esModule ? t.default : t)),
              /^['"].*['"]$/.test(t) && (t = t.slice(1, -1)),
              e.hash && (t += e.hash),
              /["'() \t\n]|(%20)/.test(t) || e.needQuotes
                ? '"'.concat(t.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"')
                : t)
            : t
        );
      };
    },
    8081: function (t) {
      "use strict";
      t.exports = function (t) {
        return t[1];
      };
    },
    7484: function (t) {
      t.exports = (function () {
        "use strict";
        var t = 1e3,
          e = 6e4,
          n = 36e5,
          r = "millisecond",
          i = "second",
          o = "minute",
          a = "hour",
          s = "day",
          c = "week",
          u = "month",
          l = "quarter",
          d = "year",
          h = "date",
          f = "Invalid Date",
          _ =
            /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
          p =
            /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
          v = {
            name: "en",
            weekdays:
              "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
                "_"
              ),
            months:
              "January_February_March_April_May_June_July_August_September_October_November_December".split(
                "_"
              ),
            ordinal: function (t) {
              var e = ["th", "st", "nd", "rd"],
                n = t % 100;
              return "[" + t + (e[(n - 20) % 10] || e[n] || e[0]) + "]";
            },
          },
          g = function (t, e, n) {
            var r = String(t);
            return !r || r.length >= e
              ? t
              : "" + Array(e + 1 - r.length).join(n) + t;
          },
          m = {
            s: g,
            z: function (t) {
              var e = -t.utcOffset(),
                n = Math.abs(e),
                r = Math.floor(n / 60),
                i = n % 60;
              return (e <= 0 ? "+" : "-") + g(r, 2, "0") + ":" + g(i, 2, "0");
            },
            m: function t(e, n) {
              if (e.date() < n.date()) return -t(n, e);
              var r = 12 * (n.year() - e.year()) + (n.month() - e.month()),
                i = e.clone().add(r, u),
                o = n - i < 0,
                a = e.clone().add(r + (o ? -1 : 1), u);
              return +(-(r + (n - i) / (o ? i - a : a - i)) || 0);
            },
            a: function (t) {
              return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
            },
            p: function (t) {
              return (
                { M: u, y: d, w: c, d: s, D: h, h: a, m: o, s: i, ms: r, Q: l }[
                  t
                ] ||
                String(t || "")
                  .toLowerCase()
                  .replace(/s$/, "")
              );
            },
            u: function (t) {
              return void 0 === t;
            },
          },
          b = "en",
          y = {};
        y[b] = v;
        var w = "$isDayjsObject",
          k = function (t) {
            return t instanceof L || !(!t || !t[w]);
          },
          C = function t(e, n, r) {
            var i;
            if (!e) return b;
            if ("string" == typeof e) {
              var o = e.toLowerCase();
              y[o] && (i = o), n && ((y[o] = n), (i = o));
              var a = e.split("-");
              if (!i && a.length > 1) return t(a[0]);
            } else {
              var s = e.name;
              (y[s] = e), (i = s);
            }
            return !r && i && (b = i), i || (!r && b);
          },
          x = function (t, e) {
            if (k(t)) return t.clone();
            var n = "object" == typeof e ? e : {};
            return (n.date = t), (n.args = arguments), new L(n);
          },
          E = m;
        (E.l = C),
          (E.i = k),
          (E.w = function (t, e) {
            return x(t, {
              locale: e.$L,
              utc: e.$u,
              x: e.$x,
              $offset: e.$offset,
            });
          });
        var L = (function () {
            function v(t) {
              (this.$L = C(t.locale, null, !0)),
                this.parse(t),
                (this.$x = this.$x || t.x || {}),
                (this[w] = !0);
            }
            var g = v.prototype;
            return (
              (g.parse = function (t) {
                (this.$d = (function (t) {
                  var e = t.date,
                    n = t.utc;
                  if (null === e) return new Date(NaN);
                  if (E.u(e)) return new Date();
                  if (e instanceof Date) return new Date(e);
                  if ("string" == typeof e && !/Z$/i.test(e)) {
                    var r = e.match(_);
                    if (r) {
                      var i = r[2] - 1 || 0,
                        o = (r[7] || "0").substring(0, 3);
                      return n
                        ? new Date(
                            Date.UTC(
                              r[1],
                              i,
                              r[3] || 1,
                              r[4] || 0,
                              r[5] || 0,
                              r[6] || 0,
                              o
                            )
                          )
                        : new Date(
                            r[1],
                            i,
                            r[3] || 1,
                            r[4] || 0,
                            r[5] || 0,
                            r[6] || 0,
                            o
                          );
                    }
                  }
                  return new Date(e);
                })(t)),
                  this.init();
              }),
              (g.init = function () {
                var t = this.$d;
                (this.$y = t.getFullYear()),
                  (this.$M = t.getMonth()),
                  (this.$D = t.getDate()),
                  (this.$W = t.getDay()),
                  (this.$H = t.getHours()),
                  (this.$m = t.getMinutes()),
                  (this.$s = t.getSeconds()),
                  (this.$ms = t.getMilliseconds());
              }),
              (g.$utils = function () {
                return E;
              }),
              (g.isValid = function () {
                return !(this.$d.toString() === f);
              }),
              (g.isSame = function (t, e) {
                var n = x(t);
                return this.startOf(e) <= n && n <= this.endOf(e);
              }),
              (g.isAfter = function (t, e) {
                return x(t) < this.startOf(e);
              }),
              (g.isBefore = function (t, e) {
                return this.endOf(e) < x(t);
              }),
              (g.$g = function (t, e, n) {
                return E.u(t) ? this[e] : this.set(n, t);
              }),
              (g.unix = function () {
                return Math.floor(this.valueOf() / 1e3);
              }),
              (g.valueOf = function () {
                return this.$d.getTime();
              }),
              (g.startOf = function (t, e) {
                var n = this,
                  r = !!E.u(e) || e,
                  l = E.p(t),
                  f = function (t, e) {
                    var i = E.w(
                      n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t),
                      n
                    );
                    return r ? i : i.endOf(s);
                  },
                  _ = function (t, e) {
                    return E.w(
                      n
                        .toDate()
                        [t].apply(
                          n.toDate("s"),
                          (r ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)
                        ),
                      n
                    );
                  },
                  p = this.$W,
                  v = this.$M,
                  g = this.$D,
                  m = "set" + (this.$u ? "UTC" : "");
                switch (l) {
                  case d:
                    return r ? f(1, 0) : f(31, 11);
                  case u:
                    return r ? f(1, v) : f(0, v + 1);
                  case c:
                    var b = this.$locale().weekStart || 0,
                      y = (p < b ? p + 7 : p) - b;
                    return f(r ? g - y : g + (6 - y), v);
                  case s:
                  case h:
                    return _(m + "Hours", 0);
                  case a:
                    return _(m + "Minutes", 1);
                  case o:
                    return _(m + "Seconds", 2);
                  case i:
                    return _(m + "Milliseconds", 3);
                  default:
                    return this.clone();
                }
              }),
              (g.endOf = function (t) {
                return this.startOf(t, !1);
              }),
              (g.$set = function (t, e) {
                var n,
                  c = E.p(t),
                  l = "set" + (this.$u ? "UTC" : ""),
                  f = ((n = {}),
                  (n[s] = l + "Date"),
                  (n[h] = l + "Date"),
                  (n[u] = l + "Month"),
                  (n[d] = l + "FullYear"),
                  (n[a] = l + "Hours"),
                  (n[o] = l + "Minutes"),
                  (n[i] = l + "Seconds"),
                  (n[r] = l + "Milliseconds"),
                  n)[c],
                  _ = c === s ? this.$D + (e - this.$W) : e;
                if (c === u || c === d) {
                  var p = this.clone().set(h, 1);
                  p.$d[f](_),
                    p.init(),
                    (this.$d = p.set(h, Math.min(this.$D, p.daysInMonth())).$d);
                } else f && this.$d[f](_);
                return this.init(), this;
              }),
              (g.set = function (t, e) {
                return this.clone().$set(t, e);
              }),
              (g.get = function (t) {
                return this[E.p(t)]();
              }),
              (g.add = function (r, l) {
                var h,
                  f = this;
                r = Number(r);
                var _ = E.p(l),
                  p = function (t) {
                    var e = x(f);
                    return E.w(e.date(e.date() + Math.round(t * r)), f);
                  };
                if (_ === u) return this.set(u, this.$M + r);
                if (_ === d) return this.set(d, this.$y + r);
                if (_ === s) return p(1);
                if (_ === c) return p(7);
                var v =
                    ((h = {}), (h[o] = e), (h[a] = n), (h[i] = t), h)[_] || 1,
                  g = this.$d.getTime() + r * v;
                return E.w(g, this);
              }),
              (g.subtract = function (t, e) {
                return this.add(-1 * t, e);
              }),
              (g.format = function (t) {
                var e = this,
                  n = this.$locale();
                if (!this.isValid()) return n.invalidDate || f;
                var r = t || "YYYY-MM-DDTHH:mm:ssZ",
                  i = E.z(this),
                  o = this.$H,
                  a = this.$m,
                  s = this.$M,
                  c = n.weekdays,
                  u = n.months,
                  l = n.meridiem,
                  d = function (t, n, i, o) {
                    return (t && (t[n] || t(e, r))) || i[n].slice(0, o);
                  },
                  h = function (t) {
                    return E.s(o % 12 || 12, t, "0");
                  },
                  _ =
                    l ||
                    function (t, e, n) {
                      var r = t < 12 ? "AM" : "PM";
                      return n ? r.toLowerCase() : r;
                    };
                return r.replace(p, function (t, r) {
                  return (
                    r ||
                    (function (t) {
                      switch (t) {
                        case "YY":
                          return String(e.$y).slice(-2);
                        case "YYYY":
                          return E.s(e.$y, 4, "0");
                        case "M":
                          return s + 1;
                        case "MM":
                          return E.s(s + 1, 2, "0");
                        case "MMM":
                          return d(n.monthsShort, s, u, 3);
                        case "MMMM":
                          return d(u, s);
                        case "D":
                          return e.$D;
                        case "DD":
                          return E.s(e.$D, 2, "0");
                        case "d":
                          return String(e.$W);
                        case "dd":
                          return d(n.weekdaysMin, e.$W, c, 2);
                        case "ddd":
                          return d(n.weekdaysShort, e.$W, c, 3);
                        case "dddd":
                          return c[e.$W];
                        case "H":
                          return String(o);
                        case "HH":
                          return E.s(o, 2, "0");
                        case "h":
                          return h(1);
                        case "hh":
                          return h(2);
                        case "a":
                          return _(o, a, !0);
                        case "A":
                          return _(o, a, !1);
                        case "m":
                          return String(a);
                        case "mm":
                          return E.s(a, 2, "0");
                        case "s":
                          return String(e.$s);
                        case "ss":
                          return E.s(e.$s, 2, "0");
                        case "SSS":
                          return E.s(e.$ms, 3, "0");
                        case "Z":
                          return i;
                      }
                      return null;
                    })(t) ||
                    i.replace(":", "")
                  );
                });
              }),
              (g.utcOffset = function () {
                return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
              }),
              (g.diff = function (r, h, f) {
                var _,
                  p = this,
                  v = E.p(h),
                  g = x(r),
                  m = (g.utcOffset() - this.utcOffset()) * e,
                  b = this - g,
                  y = function () {
                    return E.m(p, g);
                  };
                switch (v) {
                  case d:
                    _ = y() / 12;
                    break;
                  case u:
                    _ = y();
                    break;
                  case l:
                    _ = y() / 3;
                    break;
                  case c:
                    _ = (b - m) / 6048e5;
                    break;
                  case s:
                    _ = (b - m) / 864e5;
                    break;
                  case a:
                    _ = b / n;
                    break;
                  case o:
                    _ = b / e;
                    break;
                  case i:
                    _ = b / t;
                    break;
                  default:
                    _ = b;
                }
                return f ? _ : E.a(_);
              }),
              (g.daysInMonth = function () {
                return this.endOf(u).$D;
              }),
              (g.$locale = function () {
                return y[this.$L];
              }),
              (g.locale = function (t, e) {
                if (!t) return this.$L;
                var n = this.clone(),
                  r = C(t, e, !0);
                return r && (n.$L = r), n;
              }),
              (g.clone = function () {
                return E.w(this.$d, this);
              }),
              (g.toDate = function () {
                return new Date(this.valueOf());
              }),
              (g.toJSON = function () {
                return this.isValid() ? this.toISOString() : null;
              }),
              (g.toISOString = function () {
                return this.$d.toISOString();
              }),
              (g.toString = function () {
                return this.$d.toUTCString();
              }),
              v
            );
          })(),
          S = L.prototype;
        return (
          (x.prototype = S),
          [
            ["$ms", r],
            ["$s", i],
            ["$m", o],
            ["$H", a],
            ["$W", s],
            ["$M", u],
            ["$y", d],
            ["$D", h],
          ].forEach(function (t) {
            S[t[1]] = function (e) {
              return this.$g(e, t[0], t[1]);
            };
          }),
          (x.extend = function (t, e) {
            return t.$i || (t(e, L, x), (t.$i = !0)), x;
          }),
          (x.locale = C),
          (x.isDayjs = k),
          (x.unix = function (t) {
            return x(1e3 * t);
          }),
          (x.en = y[b]),
          (x.Ls = y),
          (x.p = {}),
          x
        );
      })();
    },
    4457: function (t) {
      var e;
      (e = function () {
        return (function (t) {
          var e = {};
          function n(r) {
            if (e[r]) return e[r].exports;
            var i = (e[r] = { i: r, l: !1, exports: {} });
            return t[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
          }
          return (
            (n.m = t),
            (n.c = e),
            (n.i = function (t) {
              return t;
            }),
            (n.d = function (t, e, r) {
              n.o(t, e) ||
                Object.defineProperty(t, e, {
                  configurable: !1,
                  enumerable: !0,
                  get: r,
                });
            }),
            (n.n = function (t) {
              var e =
                t && t.__esModule
                  ? function () {
                      return t.default;
                    }
                  : function () {
                      return t;
                    };
              return n.d(e, "a", e), e;
            }),
            (n.o = function (t, e) {
              return Object.prototype.hasOwnProperty.call(t, e);
            }),
            (n.p = ""),
            n((n.s = 2))
          );
        })([
          function (t, e, n) {
            "use strict";
            var r =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  };
            t.exports = {
              type: function (t) {
                return Object.prototype.toString
                  .call(t)
                  .slice(8, -1)
                  .toLowerCase();
              },
              isObject: function (t, e) {
                return e
                  ? "object" === this.type(t)
                  : t && "object" === (void 0 === t ? "undefined" : r(t));
              },
              isFormData: function (t) {
                return "undefined" != typeof FormData && t instanceof FormData;
              },
              trim: function (t) {
                return t.replace(/(^\s*)|(\s*$)/g, "");
              },
              encode: function (t) {
                return encodeURIComponent(t)
                  .replace(/%40/gi, "@")
                  .replace(/%3A/gi, ":")
                  .replace(/%24/g, "$")
                  .replace(/%2C/gi, ",")
                  .replace(/%20/g, "+")
                  .replace(/%5B/gi, "[")
                  .replace(/%5D/gi, "]");
              },
              formatParams: function (t) {
                var e = "",
                  n = !0,
                  r = this;
                return this.isObject(t)
                  ? ((function t(i, o) {
                      var a = r.encode,
                        s = r.type(i);
                      if ("array" == s)
                        i.forEach(function (e, n) {
                          r.isObject(e) || (n = ""),
                            t(e, o + "%5B" + n + "%5D");
                        });
                      else if ("object" == s)
                        for (var c in i)
                          t(i[c], o ? o + "%5B" + a(c) + "%5D" : a(c));
                      else n || (e += "&"), (n = !1), (e += o + "=" + a(i));
                    })(t, ""),
                    e)
                  : t;
              },
              merge: function (t, e) {
                for (var n in e)
                  t.hasOwnProperty(n)
                    ? this.isObject(e[n], 1) &&
                      this.isObject(t[n], 1) &&
                      this.merge(t[n], e[n])
                    : (t[n] = e[n]);
                return t;
              },
            };
          },
          ,
          function (t, e, n) {
            var r = (function () {
                function t(t, e) {
                  for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    (r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      "value" in r && (r.writable = !0),
                      Object.defineProperty(t, r.key, r);
                  }
                }
                return function (e, n, r) {
                  return n && t(e.prototype, n), r && t(e, r), e;
                };
              })(),
              i = n(0),
              o = "undefined" != typeof document,
              a = (function () {
                function t(e) {
                  function n(t) {
                    var e = void 0,
                      n = void 0;
                    function r() {
                      t.p = e = n = null;
                    }
                    i.merge(t, {
                      lock: function () {
                        e ||
                          (t.p = new Promise(function (t, r) {
                            (e = t), (n = r);
                          }));
                      },
                      unlock: function () {
                        e && (e(), r());
                      },
                      clear: function () {
                        n && (n("cancel"), r());
                      },
                    });
                  }
                  !(function (t, e) {
                    if (!(t instanceof e))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, t),
                    (this.engine = e || XMLHttpRequest),
                    (this.default = this);
                  var r = (this.interceptors = {
                      response: {
                        use: function (t, e) {
                          (this.handler = t), (this.onerror = e);
                        },
                      },
                      request: {
                        use: function (t) {
                          this.handler = t;
                        },
                      },
                    }),
                    o = r.request;
                  n(r.response),
                    n(o),
                    (this.config = {
                      method: "GET",
                      baseURL: "",
                      headers: {},
                      timeout: 0,
                      params: {},
                      parseJson: !0,
                      withCredentials: !1,
                    });
                }
                return (
                  r(t, [
                    {
                      key: "request",
                      value: function (t, e, n) {
                        var r = this,
                          a = new this.engine(),
                          s = "Content-Type",
                          c = s.toLowerCase(),
                          u = this.interceptors,
                          l = u.request,
                          d = u.response,
                          h = l.handler,
                          f = new Promise(function (u, f) {
                            function _(t) {
                              return t && t.then && t.catch;
                            }
                            function p(t, e) {
                              t
                                ? t.then(function () {
                                    e();
                                  })
                                : e();
                            }
                            i.isObject(t) && (t = (n = t).url),
                              ((n = n || {}).headers = n.headers || {}),
                              p(l.p, function () {
                                i.merge(
                                  n,
                                  JSON.parse(JSON.stringify(r.config))
                                );
                                var v = n.headers;
                                (v[s] = v[s] || v[c] || ""),
                                  delete v[c],
                                  (n.body = e || n.body),
                                  (t = i.trim(t || "")),
                                  (n.method = n.method.toUpperCase()),
                                  (n.url = t);
                                var g = n;
                                h && (g = h.call(l, n, Promise) || n),
                                  _(g) || (g = Promise.resolve(g)),
                                  g.then(
                                    function (r) {
                                      r === n
                                        ? (function (n) {
                                            (e = n.body), (t = i.trim(n.url));
                                            var r = i.trim(n.baseURL || "");
                                            if (
                                              (t ||
                                                !o ||
                                                r ||
                                                (t = location.href),
                                              0 !== t.indexOf("http"))
                                            ) {
                                              var l = "/" === t[0];
                                              if (!r && o) {
                                                var h =
                                                  location.pathname.split("/");
                                                h.pop(),
                                                  (r =
                                                    location.protocol +
                                                    "//" +
                                                    location.host +
                                                    (l ? "" : h.join("/")));
                                              }
                                              if (
                                                ("/" !== r[r.length - 1] &&
                                                  (r += "/"),
                                                (t = r + (l ? t.substr(1) : t)),
                                                o)
                                              ) {
                                                var v =
                                                  document.createElement("a");
                                                (v.href = t), (t = v.href);
                                              }
                                            }
                                            var g = i.trim(
                                                n.responseType || ""
                                              ),
                                              m =
                                                -1 !==
                                                [
                                                  "GET",
                                                  "HEAD",
                                                  "DELETE",
                                                  "OPTION",
                                                ].indexOf(n.method),
                                              b = i.type(e),
                                              y = n.params || {};
                                            m &&
                                              "object" === b &&
                                              (y = i.merge(e, y));
                                            var w = [];
                                            (y = i.formatParams(y)) &&
                                              w.push(y),
                                              m &&
                                                e &&
                                                "string" === b &&
                                                w.push(e),
                                              w.length > 0 &&
                                                (t +=
                                                  (-1 === t.indexOf("?")
                                                    ? "?"
                                                    : "&") + w.join("&")),
                                              a.open(n.method, t);
                                            try {
                                              (a.withCredentials =
                                                !!n.withCredentials),
                                                (a.timeout = n.timeout || 0),
                                                "stream" !== g &&
                                                  (a.responseType = g);
                                            } catch (t) {}
                                            var k =
                                                n.headers[s] || n.headers[c],
                                              C =
                                                "application/x-www-form-urlencoded";
                                            for (var x in (i.trim(
                                              (k || "").toLowerCase()
                                            ) === C
                                              ? (e = i.formatParams(e))
                                              : i.isFormData(e) ||
                                                -1 ===
                                                  ["object", "array"].indexOf(
                                                    i.type(e)
                                                  ) ||
                                                ((C =
                                                  "application/json;charset=utf-8"),
                                                (e = JSON.stringify(e))),
                                            k || m || (n.headers[s] = C),
                                            n.headers))
                                              if (x === s && i.isFormData(e))
                                                delete n.headers[x];
                                              else
                                                try {
                                                  a.setRequestHeader(
                                                    x,
                                                    n.headers[x]
                                                  );
                                                } catch (t) {}
                                            function E(t, e, r) {
                                              p(d.p, function () {
                                                if (t) {
                                                  r && (e.request = n);
                                                  var i = t.call(d, e, Promise);
                                                  e = void 0 === i ? e : i;
                                                }
                                                _(e) ||
                                                  (e =
                                                    Promise[
                                                      0 === r
                                                        ? "resolve"
                                                        : "reject"
                                                    ](e)),
                                                  e
                                                    .then(function (t) {
                                                      u(t);
                                                    })
                                                    .catch(function (t) {
                                                      f(t);
                                                    });
                                              });
                                            }
                                            function L(t) {
                                              (t.engine = a),
                                                E(d.onerror, t, -1);
                                            }
                                            function S(t, e) {
                                              (this.message = t),
                                                (this.status = e);
                                            }
                                            (a.onload = function () {
                                              try {
                                                var t =
                                                  a.response || a.responseText;
                                                t &&
                                                  n.parseJson &&
                                                  -1 !==
                                                    (
                                                      a.getResponseHeader(s) ||
                                                      ""
                                                    ).indexOf("json") &&
                                                  !i.isObject(t) &&
                                                  (t = JSON.parse(t));
                                                var e = a.responseHeaders;
                                                if (!e) {
                                                  e = {};
                                                  var r = (
                                                    a.getAllResponseHeaders() ||
                                                    ""
                                                  ).split("\r\n");
                                                  r.pop(),
                                                    r.forEach(function (t) {
                                                      if (t) {
                                                        var n = t.split(":")[0];
                                                        e[n] =
                                                          a.getResponseHeader(
                                                            n
                                                          );
                                                      }
                                                    });
                                                }
                                                var o = a.status,
                                                  c = a.statusText,
                                                  u = {
                                                    data: t,
                                                    headers: e,
                                                    status: o,
                                                    statusText: c,
                                                  };
                                                if (
                                                  (i.merge(u, a._response),
                                                  (o >= 200 && o < 300) ||
                                                    304 === o)
                                                )
                                                  (u.engine = a),
                                                    (u.request = n),
                                                    E(d.handler, u, 0);
                                                else {
                                                  var l = new S(c, o);
                                                  (l.response = u), L(l);
                                                }
                                              } catch (l) {
                                                L(new S(l.msg, a.status));
                                              }
                                            }),
                                              (a.onerror = function (t) {
                                                L(
                                                  new S(
                                                    t.msg || "Network Error",
                                                    0
                                                  )
                                                );
                                              }),
                                              (a.ontimeout = function () {
                                                L(
                                                  new S(
                                                    "timeout [ " +
                                                      a.timeout +
                                                      "ms ]",
                                                    1
                                                  )
                                                );
                                              }),
                                              (a._options = n),
                                              setTimeout(function () {
                                                a.send(m ? null : e);
                                              }, 0);
                                          })(r)
                                        : u(r);
                                    },
                                    function (t) {
                                      f(t);
                                    }
                                  );
                              });
                          });
                        return (f.engine = a), f;
                      },
                    },
                    {
                      key: "all",
                      value: function (t) {
                        return Promise.all(t);
                      },
                    },
                    {
                      key: "spread",
                      value: function (t) {
                        return function (e) {
                          return t.apply(null, e);
                        };
                      },
                    },
                  ]),
                  t
                );
              })();
            (a.default = a),
              ["get", "post", "put", "patch", "head", "delete"].forEach(
                function (t) {
                  a.prototype[t] = function (e, n, r) {
                    return this.request(e, n, i.merge({ method: t }, r));
                  };
                }
              ),
              ["lock", "unlock", "clear"].forEach(function (t) {
                a.prototype[t] = function () {
                  this.interceptors.request[t]();
                };
              }),
              (t.exports = a);
          },
        ]);
      }),
        (t.exports = e());
    },
    4954: function (t, e, n) {
      var r = new (n(4457))();
      t.exports = r;
    },
    7091: function (t) {
      "use strict";
      t.exports = function (t, e) {
        return (
          e || (e = {}),
          t
            ? ((t = String(t.__esModule ? t.default : t)),
              e.hash && (t += e.hash),
              e.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(t)
                ? '"'.concat(t, '"')
                : t)
            : t
        );
      };
    },
    76: function (t) {
      function e(t) {
        return (t = window.localStorage
          ? localStorage.getItem(t) || sessionStorage.getItem(t)
          : (t = document.cookie.match(
              new RegExp("(?:^|;\\s)" + t + "=(.*?)(?:;\\s|$)")
            ))
          ? t[1]
          : "");
      }
      function n(t, e, n) {
        if (window.localStorage)
          try {
            n ? localStorage.setItem(t, e) : sessionStorage.setItem(t, e);
          } catch (t) {}
        else
          document.cookie =
            t +
            "=" +
            e +
            ";path=/;domain=" +
            (function () {
              var t = window.location.host,
                e = {
                  "com.cn": 1,
                  "js.cn": 1,
                  "net.cn": 1,
                  "gov.cn": 1,
                  "com.hk": 1,
                  "co.nz": 1,
                },
                n = t.split(".");
              return (
                2 < n.length &&
                  (t = (
                    e[n.slice(-2).join(".")] ? n.slice(-3) : n.slice(-2)
                  ).join(".")),
                t
              );
            })() +
            (n ? ";expires=" + n : "");
      }
      function r(t, e) {
        var n,
          r = {};
        if (void 0 === e)
          var i = window.location,
            o = i.host,
            a = i.pathname,
            s = i.search.substr(1),
            c = i.hash;
        else
          (o = (i =
            e.match(
              /\w+:\/\/((?:[\w-]+\.)+\w+)(?::\d+)?(\/[^\?\\"'\|:<>]*)?(?:\?([^'"\\<>#]*))?(?:#(\w+))?/i
            ) || [])[1]),
            (a = i[2]),
            (s = i[3]),
            (c = i[4]);
        return (
          void 0 !== c && (c = c.replace(/"|'|<|>/gi, "M")),
          s &&
            (function () {
              for (var t = s.split("&"), e = 0, n = t.length; e < n; e++)
                if (-1 != t[e].indexOf("=")) {
                  var i = t[e].indexOf("="),
                    o = t[e].slice(0, i);
                  (i = t[e].slice(i + 1)), (r[o] = i);
                }
            })(),
          (s = (function () {
            if (void 0 === s) return s;
            for (var e = s.split("&"), n = [], r = 0, i = e.length; r < i; r++)
              if (-1 != e[r].indexOf("=")) {
                var o = e[r].indexOf("="),
                  a = e[r].slice(0, o);
                (o = e[r].slice(o + 1)),
                  (t.ignoreParams && -1 != t.ignoreParams.indexOf(a)) ||
                    n.push(a + "=" + o);
              }
            return n.join("&");
          })()),
          c &&
            (function () {
              for (
                var t =
                    0 == c.indexOf("#") ? c.substr(1).split("&") : c.split("&"),
                  e = 0,
                  r = t.length;
                e < r;
                e++
              )
                if (-1 != t[e].indexOf("=")) {
                  var i = t[e].indexOf("="),
                    o = t[e].slice(0, i);
                  if (((i = t[e].slice(i + 1)), "adtag" === o.toLowerCase())) {
                    n = i;
                    break;
                  }
                }
            })(),
          { host: o, path: a, search: s, hash: c, param: r, adtag: n }
        );
      }
      function i(t) {
        var i = r(t),
          a = {
            dm: i.host,
            pvi: "",
            si: "",
            url: i.path,
            arg: encodeURIComponent(i.search || "").substr(0, 512),
            ty: 0,
          };
        return (
          (a.pvi = (function () {
            if (t.userReport) {
              var r = e("pgv_uid");
              (r && r == t.user.user_id) ||
                ((a.ty = 1),
                n("pgv_uid", t.user.user_id, "Sun, 18 Jan 2038 00:00:00 GMT;")),
                (r = t.user.user_id);
            } else
              (r = e("pgv_pvi")) ||
                ((a.ty = 1),
                n("pgv_pvi", (r = o()), "Sun, 18 Jan 2038 00:00:00 GMT;"));
            return r;
          })()),
          (a.si = (function () {
            var t = e("pgv_si");
            return t || n("pgv_si", (t = o("s"))), t;
          })()),
          (a.url = (function () {
            var e = i.path;
            return (
              t.senseQuery &&
                (e += i.search
                  ? "?" + encodeURIComponent(i.search || "").substr(0, 512)
                  : ""),
              t.senseHash && (e += i.hash ? encodeURIComponent(i.hash) : ""),
              e
            );
          })()),
          a
        );
      }
      function o(t) {
        for (var e = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], n = 10; 1 < n; n--) {
          var r = Math.floor(10 * Math.random()),
            i = e[r];
          (e[r] = e[n - 1]), (e[n - 1] = i);
        }
        for (n = r = 0; 5 > n; n++) r = 10 * r + e[n];
        return (t || "") + (r + "") + +new Date();
      }
      function a(t) {
        return { r2: t.sid };
      }
      function s(t) {
        var e = {};
        if (t) {
          var n,
            r = [];
          for (n in t)
            t.hasOwnProperty(n) &&
              r.push(encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
          (t = r.join(";")), (e.ext = t);
        }
        return e;
      }
      function c(t) {
        var e = r(t, document.referrer);
        return (
          (t = r(t)),
          {
            rdm: e.host,
            rurl: e.path,
            rarg: encodeURIComponent(e.search || "").substr(0, 512),
            adt:
              t.param.ADTAG ||
              t.param.adtag ||
              t.param.CKTAG ||
              t.param.cktag ||
              t.param.PTAG ||
              t.param.ptag ||
              t.adtag,
          }
        );
      }
      function u() {
        try {
          var t = navigator,
            e = screen || { width: "", height: "", colorDepth: "" },
            n = {
              scr: e.width + "x" + e.height,
              scl: e.colorDepth + "-bit",
              lg: (t.language || t.userLanguage).toLowerCase(),
              tz: new Date().getTimezoneOffset() / 60,
            };
        } catch (t) {
          return {};
        }
        return n;
      }
      t.exports = {
        conf: {},
        version: "2.0.15",
        init: function (t) {
          var e = {
            sid: 0,
            cid: 0,
            autoReport: 0,
            senseHash: 0,
            senseQuery: 0,
            userReport: 0,
            performanceMonitor: 0,
            ignoreParams: [],
          };
          if (t)
            for (var n in t)
              t.hasOwnProperty(n) && e.hasOwnProperty(n) && (e[n] = t[n]);
          (this.conf = e), this.conf.autoReport && this.pgv();
        },
        pgv: function () {
          var t = this.conf,
            e = [],
            n = this.version;
          if (t.sid)
            if (
              !t.userReport ||
              (t.user &&
                t.user.user_id &&
                !parseInt(t.user.user_id, 10) !== conf.user.user_id)
            ) {
              for (
                var r = 0,
                  o = [
                    i(t),
                    c(t),
                    a(t),
                    u(),
                    s({ version: n }),
                    { random: +new Date() },
                  ],
                  l = o.length;
                r < l;
                r++
              )
                for (var d in o[r])
                  o[r].hasOwnProperty(d) &&
                    e.push(d + "=" + (void 0 === o[r][d] ? "" : o[r][d]));
              var h = function (t) {
                t =
                  ("https:" == document.location.protocol
                    ? "https://pingtas.qq.com/webview"
                    : "http://pingtcss.qq.com") +
                  "/pingd?" +
                  t.join("&").toLowerCase();
                var e = new Image();
                (e.onload =
                  e.onerror =
                  e.onabort =
                    function () {
                      e = e.onload = e.onerror = e.onabort = null;
                    }),
                  (e.src = t);
              };
              h(e),
                t.performanceMonitor &&
                  ((e = function () {
                    for (
                      var e = (function () {
                          if (window.performance) {
                            var t = window.performance.timing,
                              e = {
                                value: t.domainLookupEnd - t.domainLookupStart,
                              },
                              n = { value: t.connectEnd - t.connectStart },
                              r = {
                                value:
                                  t.responseStart -
                                  (t.requestStart || t.responseStart + 1),
                              },
                              i = t.responseEnd - t.responseStart;
                            t.domContentLoadedEventStart
                              ? 0 > i && (i = 0)
                              : (i = -1),
                              (t = {
                                domainLookupTime: e,
                                connectTime: n,
                                requestTime: r,
                                resourcesLoadedTime: { value: i },
                                domParsingTime: {
                                  value: t.domContentLoadedEventStart
                                    ? t.domInteractive - t.domLoading
                                    : -1,
                                },
                                domContentLoadedTime: {
                                  value: t.domContentLoadedEventStart
                                    ? t.domContentLoadedEventStart -
                                      t.fetchStart
                                    : -1,
                                },
                              });
                          } else t = "";
                          return t;
                        })(),
                        r = [],
                        o = [],
                        a = 0,
                        c = [i(t), { r2: t.cid }, u(), { random: +new Date() }],
                        l = c.length;
                      a < l;
                      a++
                    )
                      for (var d in c[a])
                        c[a].hasOwnProperty(d) &&
                          o.push(d + "=" + (void 0 === c[a][d] ? "" : c[a][d]));
                    for (d in e)
                      e.hasOwnProperty(d) &&
                        ("domContentLoadedTime" == d
                          ? o.push("r3=" + e[d].value)
                          : r.push(e[d].value));
                    (e = s({ pfm: r.join("_"), version: n })),
                      o.push("ext=" + e.ext),
                      h(o);
                  }),
                  void 0 !== window.performance &&
                  void 0 !== window.performance.timing &&
                  0 != window.performance.timing.loadEventEnd
                    ? e()
                    : window.attachEvent
                    ? window.attachEvent("onload", e)
                    : window.addEventListener &&
                      window.addEventListener("load", e, !1));
            } else
              console.log(
                "MTA H5分析错误提示：您选择了用户统计uv，请设置业务的user_id，需为int类型"
              );
          else console.log("MTA H5分析错误提示：您没有设置sid");
        },
        clickStat: function (t, e) {
          var n = this.conf,
            r = [],
            o = i(n),
            l = a(n);
          if (n.cid) {
            (o.dm = "taclick"),
              (o.url = t),
              (l.r2 = n.cid),
              (l.r5 = (function (t) {
                t = void 0 === t ? {} : t;
                var e,
                  n = [];
                for (e in t)
                  t.hasOwnProperty(e) &&
                    n.push(e + "=" + encodeURIComponent(t[e]));
                return n.join(";");
              })(e));
            var d = 0;
            for (
              o = (n = [
                o,
                c(n),
                l,
                u(),
                s({ version: this.version }),
                { random: +new Date() },
              ]).length;
              d < o;
              d++
            )
              for (var h in n[d])
                n[d].hasOwnProperty(h) &&
                  r.push(h + "=" + (void 0 === n[d][h] ? "" : n[d][h]));
            r =
              ("https:" == document.location.protocol
                ? "https://pingtas.qq.com/webview"
                : "http://pingtcss.qq.com") +
              "/pingd?" +
              r.join("&");
            var f = new Image();
            (f.onload =
              f.onerror =
              f.onabort =
                function () {
                  f = f.onload = f.onerror = f.onabort = null;
                }),
              (f.src = r);
          } else
            console.log(
              "MTA H5分析错误提示：您没有设置cid,请到管理台开通自定义事件并更新统计代码"
            );
        },
        clickShare: function (t) {
          var e = this.conf,
            n = r(e),
            o =
              void 0 === (n = n.param.CKTAG || n.param.ckatg)
                ? []
                : n.split(".");
          if (e.cid) {
            n = [];
            var l = i(e),
              d = a(e);
            for (
              l.dm = "taclick_share",
                l.url = "mtah5-share-" + t,
                d.r2 = e.cid,
                d.r5 = (function (t, e) {
                  var n = [];
                  return (
                    2 === t.length &&
                      "mtah5_share" == t[0] &&
                      n.push(t[0] + "=" + t[1]),
                    n.join(";")
                  );
                })(o),
                t = 0,
                l = (e = [
                  l,
                  c(e),
                  d,
                  u(),
                  s({ version: this.version }),
                  { random: +new Date() },
                ]).length;
              t < l;
              t++
            )
              for (var h in e[t])
                e[t].hasOwnProperty(h) &&
                  n.push(h + "=" + (void 0 === e[t][h] ? "" : e[t][h]));
            h =
              ("https:" == document.location.protocol
                ? "https://pingtas.qq.com/webview"
                : "http://pingtcss.qq.com") +
              "/pingd?" +
              n.join("&");
            var f = new Image();
            (f.onload =
              f.onerror =
              f.onabort =
                function () {
                  f = f.onload = f.onerror = f.onabort = null;
                }),
              (f.src = h);
          } else
            console.log(
              "MTA H5分析错误提示：您没有设置cid,请到管理台开通自定义事件并更新统计代码"
            );
        },
      };
    },
    8661: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          Children: function () {
            return f;
          },
          Component: function () {
            return r.wA;
          },
          Fragment: function () {
            return r.HY;
          },
          PureComponent: function () {
            return s;
          },
          StrictMode: function () {
            return tt;
          },
          Suspense: function () {
            return m;
          },
          SuspenseList: function () {
            return w;
          },
          __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: function () {
            return B;
          },
          cloneElement: function () {
            return Y;
          },
          createContext: function () {
            return r.kr;
          },
          createElement: function () {
            return r.az;
          },
          createFactory: function () {
            return J;
          },
          createPortal: function () {
            return E;
          },
          createRef: function () {
            return r.Vf;
          },
          default: function () {
            return ct;
          },
          findDOMNode: function () {
            return q;
          },
          flushSync: function () {
            return Q;
          },
          forwardRef: function () {
            return d;
          },
          hydrate: function () {
            return N;
          },
          isElement: function () {
            return ot;
          },
          isFragment: function () {
            return K;
          },
          isMemo: function () {
            return W;
          },
          isValidElement: function () {
            return V;
          },
          lazy: function () {
            return y;
          },
          memo: function () {
            return c;
          },
          render: function () {
            return D;
          },
          startTransition: function () {
            return et;
          },
          unmountComponentAtNode: function () {
            return X;
          },
          unstable_batchedUpdates: function () {
            return $;
          },
          useCallback: function () {
            return i.I4;
          },
          useContext: function () {
            return i.qp;
          },
          useDebugValue: function () {
            return i.Qb;
          },
          useDeferredValue: function () {
            return nt;
          },
          useEffect: function () {
            return i.d4;
          },
          useErrorBoundary: function () {
            return i.cO;
          },
          useId: function () {
            return i.Me;
          },
          useImperativeHandle: function () {
            return i.aP;
          },
          useInsertionEffect: function () {
            return it;
          },
          useLayoutEffect: function () {
            return i.bt;
          },
          useMemo: function () {
            return i.Ye;
          },
          useReducer: function () {
            return i._Y;
          },
          useRef: function () {
            return i.sO;
          },
          useState: function () {
            return i.eJ;
          },
          useSyncExternalStore: function () {
            return at;
          },
          useTransition: function () {
            return rt;
          },
          version: function () {
            return Z;
          },
        });
      var r = n(6400),
        i = n(396);
      function o(t, e) {
        for (var n in e) t[n] = e[n];
        return t;
      }
      function a(t, e) {
        for (var n in t) if ("__source" !== n && !(n in e)) return !0;
        for (var r in e) if ("__source" !== r && t[r] !== e[r]) return !0;
        return !1;
      }
      function s(t, e) {
        (this.props = t), (this.context = e);
      }
      function c(t, e) {
        function n(t) {
          var n = this.props.ref,
            r = n == t.ref;
          return (
            !r && n && (n.call ? n(null) : (n.current = null)),
            e ? !e(this.props, t) || !r : a(this.props, t)
          );
        }
        function i(e) {
          return (this.shouldComponentUpdate = n), (0, r.az)(t, e);
        }
        return (
          (i.displayName = "Memo(" + (t.displayName || t.name) + ")"),
          (i.prototype.isReactComponent = !0),
          (i.__f = !0),
          i
        );
      }
      ((s.prototype = new r.wA()).isPureReactComponent = !0),
        (s.prototype.shouldComponentUpdate = function (t, e) {
          return a(this.props, t) || a(this.state, e);
        });
      var u = r.YM.__b;
      r.YM.__b = function (t) {
        t.type &&
          t.type.__f &&
          t.ref &&
          ((t.props.ref = t.ref), (t.ref = null)),
          u && u(t);
      };
      var l =
        ("undefined" != typeof Symbol &&
          Symbol.for &&
          Symbol.for("react.forward_ref")) ||
        3911;
      function d(t) {
        function e(e) {
          var n = o({}, e);
          return delete n.ref, t(n, e.ref || null);
        }
        return (
          (e.$$typeof = l),
          (e.render = e),
          (e.prototype.isReactComponent = e.__f = !0),
          (e.displayName = "ForwardRef(" + (t.displayName || t.name) + ")"),
          e
        );
      }
      var h = function (t, e) {
          return null == t ? null : (0, r.bR)((0, r.bR)(t).map(e));
        },
        f = {
          map: h,
          forEach: h,
          count: function (t) {
            return t ? (0, r.bR)(t).length : 0;
          },
          only: function (t) {
            var e = (0, r.bR)(t);
            if (1 !== e.length) throw "Children.only";
            return e[0];
          },
          toArray: r.bR,
        },
        _ = r.YM.__e;
      r.YM.__e = function (t, e, n, r) {
        if (t.then)
          for (var i, o = e; (o = o.__); )
            if ((i = o.__c) && i.__c)
              return (
                null == e.__e && ((e.__e = n.__e), (e.__k = n.__k)), i.__c(t, e)
              );
        _(t, e, n, r);
      };
      var p = r.YM.unmount;
      function v(t, e, n) {
        return (
          t &&
            (t.__c &&
              t.__c.__H &&
              (t.__c.__H.__.forEach(function (t) {
                "function" == typeof t.__c && t.__c();
              }),
              (t.__c.__H = null)),
            null != (t = o({}, t)).__c &&
              (t.__c.__P === n && (t.__c.__P = e), (t.__c = null)),
            (t.__k =
              t.__k &&
              t.__k.map(function (t) {
                return v(t, e, n);
              }))),
          t
        );
      }
      function g(t, e, n) {
        return (
          t &&
            n &&
            ((t.__v = null),
            (t.__k =
              t.__k &&
              t.__k.map(function (t) {
                return g(t, e, n);
              })),
            t.__c &&
              t.__c.__P === e &&
              (t.__e && n.appendChild(t.__e),
              (t.__c.__e = !0),
              (t.__c.__P = n))),
          t
        );
      }
      function m() {
        (this.__u = 0), (this.t = null), (this.__b = null);
      }
      function b(t) {
        var e = t.__.__c;
        return e && e.__a && e.__a(t);
      }
      function y(t) {
        var e, n, i;
        function o(o) {
          if (
            (e ||
              (e = t()).then(
                function (t) {
                  n = t.default || t;
                },
                function (t) {
                  i = t;
                }
              ),
            i)
          )
            throw i;
          if (!n) throw e;
          return (0, r.az)(n, o);
        }
        return (o.displayName = "Lazy"), (o.__f = !0), o;
      }
      function w() {
        (this.u = null), (this.o = null);
      }
      (r.YM.unmount = function (t) {
        var e = t.__c;
        e && e.__R && e.__R(), e && 32 & t.__u && (t.type = null), p && p(t);
      }),
        ((m.prototype = new r.wA()).__c = function (t, e) {
          var n = e.__c,
            r = this;
          null == r.t && (r.t = []), r.t.push(n);
          var i = b(r.__v),
            o = !1,
            a = function () {
              o || ((o = !0), (n.__R = null), i ? i(s) : s());
            };
          n.__R = a;
          var s = function () {
            if (!--r.__u) {
              if (r.state.__a) {
                var t = r.state.__a;
                r.__v.__k[0] = g(t, t.__c.__P, t.__c.__O);
              }
              var e;
              for (r.setState({ __a: (r.__b = null) }); (e = r.t.pop()); )
                e.forceUpdate();
            }
          };
          r.__u++ || 32 & e.__u || r.setState({ __a: (r.__b = r.__v.__k[0]) }),
            t.then(a, a);
        }),
        (m.prototype.componentWillUnmount = function () {
          this.t = [];
        }),
        (m.prototype.render = function (t, e) {
          if (this.__b) {
            if (this.__v.__k) {
              var n = document.createElement("div"),
                i = this.__v.__k[0].__c;
              this.__v.__k[0] = v(this.__b, n, (i.__O = i.__P));
            }
            this.__b = null;
          }
          var o = e.__a && (0, r.az)(r.HY, null, t.fallback);
          return (
            o && (o.__u &= -33),
            [(0, r.az)(r.HY, null, e.__a ? null : t.children), o]
          );
        });
      var k = function (t, e, n) {
        if (
          (++n[1] === n[0] && t.o.delete(e),
          t.props.revealOrder && ("t" !== t.props.revealOrder[0] || !t.o.size))
        )
          for (n = t.u; n; ) {
            for (; n.length > 3; ) n.pop()();
            if (n[1] < n[0]) break;
            t.u = n = n[2];
          }
      };
      function C(t) {
        return (
          (this.getChildContext = function () {
            return t.context;
          }),
          t.children
        );
      }
      function x(t) {
        var e = this,
          n = t.i;
        (e.componentWillUnmount = function () {
          (0, r.sY)(null, e.l), (e.l = null), (e.i = null);
        }),
          e.i && e.i !== n && e.componentWillUnmount(),
          e.l ||
            ((e.i = n),
            (e.l = {
              nodeType: 1,
              parentNode: n,
              childNodes: [],
              appendChild: function (t) {
                this.childNodes.push(t), e.i.appendChild(t);
              },
              insertBefore: function (t, n) {
                this.childNodes.push(t), e.i.appendChild(t);
              },
              removeChild: function (t) {
                this.childNodes.splice(this.childNodes.indexOf(t) >>> 1, 1),
                  e.i.removeChild(t);
              },
            })),
          (0, r.sY)((0, r.az)(C, { context: e.context }, t.__v), e.l);
      }
      function E(t, e) {
        var n = (0, r.az)(x, { __v: t, i: e });
        return (n.containerInfo = e), n;
      }
      ((w.prototype = new r.wA()).__a = function (t) {
        var e = this,
          n = b(e.__v),
          r = e.o.get(t);
        return (
          r[0]++,
          function (i) {
            var o = function () {
              e.props.revealOrder ? (r.push(i), k(e, t, r)) : i();
            };
            n ? n(o) : o();
          }
        );
      }),
        (w.prototype.render = function (t) {
          (this.u = null), (this.o = new Map());
          var e = (0, r.bR)(t.children);
          t.revealOrder && "b" === t.revealOrder[0] && e.reverse();
          for (var n = e.length; n--; )
            this.o.set(e[n], (this.u = [1, 0, this.u]));
          return t.children;
        }),
        (w.prototype.componentDidUpdate = w.prototype.componentDidMount =
          function () {
            var t = this;
            this.o.forEach(function (e, n) {
              k(t, n, e);
            });
          });
      var L =
          ("undefined" != typeof Symbol &&
            Symbol.for &&
            Symbol.for("react.element")) ||
          60103,
        S =
          /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
        T = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
        A = /[A-Z0-9]/g,
        I = "undefined" != typeof document,
        O = function (t) {
          return (
            "undefined" != typeof Symbol && "symbol" == typeof Symbol()
              ? /fil|che|rad/
              : /fil|che|ra/
          ).test(t);
        };
      function D(t, e, n) {
        return (
          null == e.__k && (e.textContent = ""),
          (0, r.sY)(t, e),
          "function" == typeof n && n(),
          t ? t.__c : null
        );
      }
      function N(t, e, n) {
        return (0, r.ZB)(t, e), "function" == typeof n && n(), t ? t.__c : null;
      }
      (r.wA.prototype.isReactComponent = {}),
        [
          "componentWillMount",
          "componentWillReceiveProps",
          "componentWillUpdate",
        ].forEach(function (t) {
          Object.defineProperty(r.wA.prototype, t, {
            configurable: !0,
            get: function () {
              return this["UNSAFE_" + t];
            },
            set: function (e) {
              Object.defineProperty(this, t, {
                configurable: !0,
                writable: !0,
                value: e,
              });
            },
          });
        });
      var R = r.YM.event;
      function z() {}
      function P() {
        return this.cancelBubble;
      }
      function j() {
        return this.defaultPrevented;
      }
      r.YM.event = function (t) {
        return (
          R && (t = R(t)),
          (t.persist = z),
          (t.isPropagationStopped = P),
          (t.isDefaultPrevented = j),
          (t.nativeEvent = t)
        );
      };
      var F,
        H = {
          enumerable: !1,
          configurable: !0,
          get: function () {
            return this.class;
          },
        },
        M = r.YM.vnode;
      r.YM.vnode = function (t) {
        "string" == typeof t.type &&
          (function (t) {
            var e = t.props,
              n = t.type,
              i = {};
            for (var o in e) {
              var a = e[o];
              if (
                !(
                  ("value" === o && "defaultValue" in e && null == a) ||
                  (I && "children" === o && "noscript" === n) ||
                  "class" === o ||
                  "className" === o
                )
              ) {
                var s = o.toLowerCase();
                "defaultValue" === o && "value" in e && null == e.value
                  ? (o = "value")
                  : "download" === o && !0 === a
                  ? (a = "")
                  : "translate" === s && "no" === a
                  ? (a = !1)
                  : "ondoubleclick" === s
                  ? (o = "ondblclick")
                  : "onchange" !== s ||
                    ("input" !== n && "textarea" !== n) ||
                    O(e.type)
                  ? "onfocus" === s
                    ? (o = "onfocusin")
                    : "onblur" === s
                    ? (o = "onfocusout")
                    : T.test(o)
                    ? (o = s)
                    : -1 === n.indexOf("-") && S.test(o)
                    ? (o = o.replace(A, "-$&").toLowerCase())
                    : null === a && (a = void 0)
                  : (s = o = "oninput"),
                  "oninput" === s && i[(o = s)] && (o = "oninputCapture"),
                  (i[o] = a);
              }
            }
            "select" == n &&
              i.multiple &&
              Array.isArray(i.value) &&
              (i.value = (0, r.bR)(e.children).forEach(function (t) {
                t.props.selected = -1 != i.value.indexOf(t.props.value);
              })),
              "select" == n &&
                null != i.defaultValue &&
                (i.value = (0, r.bR)(e.children).forEach(function (t) {
                  t.props.selected = i.multiple
                    ? -1 != i.defaultValue.indexOf(t.props.value)
                    : i.defaultValue == t.props.value;
                })),
              e.class && !e.className
                ? ((i.class = e.class),
                  Object.defineProperty(i, "className", H))
                : ((e.className && !e.class) || (e.class && e.className)) &&
                  (i.class = i.className = e.className),
              (t.props = i);
          })(t),
          (t.$$typeof = L),
          M && M(t);
      };
      var U = r.YM.__r;
      r.YM.__r = function (t) {
        U && U(t), (F = t.__c);
      };
      var G = r.YM.diffed;
      r.YM.diffed = function (t) {
        G && G(t);
        var e = t.props,
          n = t.__e;
        null != n &&
          "textarea" === t.type &&
          "value" in e &&
          e.value !== n.value &&
          (n.value = null == e.value ? "" : e.value),
          (F = null);
      };
      var B = {
          ReactCurrentDispatcher: {
            current: {
              readContext: function (t) {
                return F.__n[t.__c].props.value;
              },
            },
          },
        },
        Z = "17.0.2";
      function J(t) {
        return r.az.bind(null, t);
      }
      function V(t) {
        return !!t && t.$$typeof === L;
      }
      function K(t) {
        return V(t) && t.type === r.HY;
      }
      function W(t) {
        return (
          !!t &&
          !!t.displayName &&
          ("string" == typeof t.displayName ||
            t.displayName instanceof String) &&
          t.displayName.startsWith("Memo(")
        );
      }
      function Y(t) {
        return V(t) ? r.Tm.apply(null, arguments) : t;
      }
      function X(t) {
        return !!t.__k && ((0, r.sY)(null, t), !0);
      }
      function q(t) {
        return (t && (t.base || (1 === t.nodeType && t))) || null;
      }
      var $ = function (t, e) {
          return t(e);
        },
        Q = function (t, e) {
          return t(e);
        },
        tt = r.HY;
      function et(t) {
        t();
      }
      function nt(t) {
        return t;
      }
      function rt() {
        return [!1, et];
      }
      var it = i.bt,
        ot = V;
      function at(t, e) {
        var n = e(),
          r = (0, i.eJ)({ h: { __: n, v: e } }),
          o = r[0].h,
          a = r[1];
        return (
          (0, i.bt)(
            function () {
              (o.__ = n), (o.v = e), st(o) && a({ h: o });
            },
            [t, n, e]
          ),
          (0, i.d4)(
            function () {
              return (
                st(o) && a({ h: o }),
                t(function () {
                  st(o) && a({ h: o });
                })
              );
            },
            [t]
          ),
          n
        );
      }
      function st(t) {
        var e,
          n,
          r = t.v,
          i = t.__;
        try {
          var o = r();
          return !(
            ((e = i) === (n = o) && (0 !== e || 1 / e == 1 / n)) ||
            (e != e && n != n)
          );
        } catch (t) {
          return !0;
        }
      }
      var ct = {
        useState: i.eJ,
        useId: i.Me,
        useReducer: i._Y,
        useEffect: i.d4,
        useLayoutEffect: i.bt,
        useInsertionEffect: it,
        useTransition: rt,
        useDeferredValue: nt,
        useSyncExternalStore: at,
        startTransition: et,
        useRef: i.sO,
        useImperativeHandle: i.aP,
        useMemo: i.Ye,
        useCallback: i.I4,
        useContext: i.qp,
        useDebugValue: i.Qb,
        version: "17.0.2",
        Children: f,
        render: D,
        hydrate: N,
        unmountComponentAtNode: X,
        createPortal: E,
        createElement: r.az,
        createContext: r.kr,
        createFactory: J,
        cloneElement: Y,
        createRef: r.Vf,
        Fragment: r.HY,
        isValidElement: V,
        isElement: ot,
        isFragment: K,
        isMemo: W,
        findDOMNode: q,
        Component: r.wA,
        PureComponent: s,
        memo: c,
        forwardRef: d,
        flushSync: Q,
        unstable_batchedUpdates: $,
        StrictMode: tt,
        Suspense: m,
        SuspenseList: w,
        lazy: y,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: B,
      };
    },
    6400: function (t, e, n) {
      "use strict";
      n.d(e, {
        HY: function () {
          return y;
        },
        Tm: function () {
          return B;
        },
        Vf: function () {
          return b;
        },
        YM: function () {
          return i;
        },
        ZB: function () {
          return G;
        },
        az: function () {
          return g;
        },
        bR: function () {
          return A;
        },
        h: function () {
          return g;
        },
        kr: function () {
          return Z;
        },
        sY: function () {
          return U;
        },
        wA: function () {
          return w;
        },
      });
      var r,
        i,
        o,
        a,
        s,
        c,
        u,
        l,
        d = {},
        h = [],
        f = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
        _ = Array.isArray;
      function p(t, e) {
        for (var n in e) t[n] = e[n];
        return t;
      }
      function v(t) {
        var e = t.parentNode;
        e && e.removeChild(t);
      }
      function g(t, e, n) {
        var i,
          o,
          a,
          s = {};
        for (a in e)
          "key" == a ? (i = e[a]) : "ref" == a ? (o = e[a]) : (s[a] = e[a]);
        if (
          (arguments.length > 2 &&
            (s.children = arguments.length > 3 ? r.call(arguments, 2) : n),
          "function" == typeof t && null != t.defaultProps)
        )
          for (a in t.defaultProps)
            void 0 === s[a] && (s[a] = t.defaultProps[a]);
        return m(t, s, i, o, null);
      }
      function m(t, e, n, r, a) {
        var s = {
          type: t,
          props: e,
          key: n,
          ref: r,
          __k: null,
          __: null,
          __b: 0,
          __e: null,
          __d: void 0,
          __c: null,
          constructor: void 0,
          __v: null == a ? ++o : a,
          __i: -1,
          __u: 0,
        };
        return null == a && null != i.vnode && i.vnode(s), s;
      }
      function b() {
        return { current: null };
      }
      function y(t) {
        return t.children;
      }
      function w(t, e) {
        (this.props = t), (this.context = e);
      }
      function k(t, e) {
        if (null == e) return t.__ ? k(t.__, t.__i + 1) : null;
        for (var n; e < t.__k.length; e++)
          if (null != (n = t.__k[e]) && null != n.__e) return n.__e;
        return "function" == typeof t.type ? k(t) : null;
      }
      function C(t) {
        var e, n;
        if (null != (t = t.__) && null != t.__c) {
          for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
            if (null != (n = t.__k[e]) && null != n.__e) {
              t.__e = t.__c.base = n.__e;
              break;
            }
          return C(t);
        }
      }
      function x(t) {
        ((!t.__d && (t.__d = !0) && a.push(t) && !E.__r++) ||
          s !== i.debounceRendering) &&
          ((s = i.debounceRendering) || c)(E);
      }
      function E() {
        var t, e, n, r, o, s, c, l, d;
        for (a.sort(u); (t = a.shift()); )
          t.__d &&
            ((e = a.length),
            (r = void 0),
            (s = (o = (n = t).__v).__e),
            (l = []),
            (d = []),
            (c = n.__P) &&
              (((r = p({}, o)).__v = o.__v + 1),
              i.vnode && i.vnode(r),
              z(
                c,
                r,
                o,
                n.__n,
                void 0 !== c.ownerSVGElement,
                32 & o.__u ? [s] : null,
                l,
                null == s ? k(o) : s,
                !!(32 & o.__u),
                d
              ),
              (r.__v = o.__v),
              (r.__.__k[r.__i] = r),
              P(l, r, d),
              r.__e != s && C(r)),
            a.length > e && a.sort(u));
        E.__r = 0;
      }
      function L(t, e, n, r, i, o, a, s, c, u, l) {
        var f,
          _,
          p,
          v,
          g,
          m = (r && r.__k) || h,
          b = e.length;
        for (n.__d = c, S(n, e, m), c = n.__d, f = 0; f < b; f++)
          null != (p = n.__k[f]) &&
            "boolean" != typeof p &&
            "function" != typeof p &&
            ((_ = -1 === p.__i ? d : m[p.__i] || d),
            (p.__i = f),
            z(t, p, _, i, o, a, s, c, u, l),
            (v = p.__e),
            p.ref &&
              _.ref != p.ref &&
              (_.ref && F(_.ref, null, p), l.push(p.ref, p.__c || v, p)),
            null == g && null != v && (g = v),
            65536 & p.__u || _.__k === p.__k
              ? (v || _.__e != c || (c = k(_)), (c = T(p, c, t)))
              : "function" == typeof p.type && void 0 !== p.__d
              ? (c = p.__d)
              : v && (c = v.nextSibling),
            (p.__d = void 0),
            (p.__u &= -196609));
        (n.__d = c), (n.__e = g);
      }
      function S(t, e, n) {
        var r,
          i,
          o,
          a,
          s,
          c = e.length,
          u = n.length,
          l = u,
          d = 0;
        for (t.__k = [], r = 0; r < c; r++)
          (a = r + d),
            null !=
            (i = t.__k[r] =
              null == (i = e[r]) ||
              "boolean" == typeof i ||
              "function" == typeof i
                ? null
                : "string" == typeof i ||
                  "number" == typeof i ||
                  "bigint" == typeof i ||
                  i.constructor == String
                ? m(null, i, null, null, null)
                : _(i)
                ? m(y, { children: i }, null, null, null)
                : void 0 === i.constructor && i.__b > 0
                ? m(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v)
                : i)
              ? ((i.__ = t),
                (i.__b = t.__b + 1),
                (s = I(i, n, a, l)),
                (i.__i = s),
                (o = null),
                -1 !== s && (l--, (o = n[s]) && (o.__u |= 131072)),
                null == o || null === o.__v
                  ? (-1 == s && d--,
                    "function" != typeof i.type && (i.__u |= 65536))
                  : s !== a &&
                    (s === a + 1
                      ? d++
                      : s > a
                      ? l > c - a
                        ? (d += s - a)
                        : d--
                      : s < a
                      ? s == a - 1 && (d = s - a)
                      : (d = 0),
                    s !== r + d && (i.__u |= 65536)))
              : (o = n[a]) &&
                null == o.key &&
                o.__e &&
                0 == (131072 & o.__u) &&
                (o.__e == t.__d && (t.__d = k(o)),
                H(o, o, !1),
                (n[a] = null),
                l--);
        if (l)
          for (r = 0; r < u; r++)
            null != (o = n[r]) &&
              0 == (131072 & o.__u) &&
              (o.__e == t.__d && (t.__d = k(o)), H(o, o));
      }
      function T(t, e, n) {
        var r, i;
        if ("function" == typeof t.type) {
          for (r = t.__k, i = 0; r && i < r.length; i++)
            r[i] && ((r[i].__ = t), (e = T(r[i], e, n)));
          return e;
        }
        t.__e != e && (n.insertBefore(t.__e, e || null), (e = t.__e));
        do {
          e = e && e.nextSibling;
        } while (null != e && 8 === e.nodeType);
        return e;
      }
      function A(t, e) {
        return (
          (e = e || []),
          null == t ||
            "boolean" == typeof t ||
            (_(t)
              ? t.some(function (t) {
                  A(t, e);
                })
              : e.push(t)),
          e
        );
      }
      function I(t, e, n, r) {
        var i = t.key,
          o = t.type,
          a = n - 1,
          s = n + 1,
          c = e[n];
        if (
          null === c ||
          (c && i == c.key && o === c.type && 0 == (131072 & c.__u))
        )
          return n;
        if (r > (null != c && 0 == (131072 & c.__u) ? 1 : 0))
          for (; a >= 0 || s < e.length; ) {
            if (a >= 0) {
              if (
                (c = e[a]) &&
                0 == (131072 & c.__u) &&
                i == c.key &&
                o === c.type
              )
                return a;
              a--;
            }
            if (s < e.length) {
              if (
                (c = e[s]) &&
                0 == (131072 & c.__u) &&
                i == c.key &&
                o === c.type
              )
                return s;
              s++;
            }
          }
        return -1;
      }
      function O(t, e, n) {
        "-" === e[0]
          ? t.setProperty(e, null == n ? "" : n)
          : (t[e] =
              null == n
                ? ""
                : "number" != typeof n || f.test(e)
                ? n
                : n + "px");
      }
      function D(t, e, n, r, i) {
        var o;
        t: if ("style" === e)
          if ("string" == typeof n) t.style.cssText = n;
          else {
            if (("string" == typeof r && (t.style.cssText = r = ""), r))
              for (e in r) (n && e in n) || O(t.style, e, "");
            if (n) for (e in n) (r && n[e] === r[e]) || O(t.style, e, n[e]);
          }
        else if ("o" === e[0] && "n" === e[1])
          (o = e !== (e = e.replace(/(PointerCapture)$|Capture$/i, "$1"))),
            (e =
              e.toLowerCase() in t || "onFocusOut" === e || "onFocusIn" === e
                ? e.toLowerCase().slice(2)
                : e.slice(2)),
            t.l || (t.l = {}),
            (t.l[e + o] = n),
            n
              ? r
                ? (n.u = r.u)
                : ((n.u = Date.now()), t.addEventListener(e, o ? R : N, o))
              : t.removeEventListener(e, o ? R : N, o);
        else {
          if (i) e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
          else if (
            "width" !== e &&
            "height" !== e &&
            "href" !== e &&
            "list" !== e &&
            "form" !== e &&
            "tabIndex" !== e &&
            "download" !== e &&
            "rowSpan" !== e &&
            "colSpan" !== e &&
            "role" !== e &&
            e in t
          )
            try {
              t[e] = null == n ? "" : n;
              break t;
            } catch (t) {}
          "function" == typeof n ||
            (null == n || (!1 === n && "-" !== e[4])
              ? t.removeAttribute(e)
              : t.setAttribute(e, n));
        }
      }
      function N(t) {
        if (this.l) {
          var e = this.l[t.type + !1];
          if (t.t) {
            if (t.t <= e.u) return;
          } else t.t = Date.now();
          return e(i.event ? i.event(t) : t);
        }
      }
      function R(t) {
        if (this.l) return this.l[t.type + !0](i.event ? i.event(t) : t);
      }
      function z(t, e, n, r, o, a, s, c, u, l) {
        var d,
          h,
          f,
          v,
          g,
          m,
          b,
          k,
          C,
          x,
          E,
          S,
          T,
          A,
          I,
          O = e.type;
        if (void 0 !== e.constructor) return null;
        128 & n.__u && ((u = !!(32 & n.__u)), (a = [(c = e.__e = n.__e)])),
          (d = i.__b) && d(e);
        t: if ("function" == typeof O)
          try {
            if (
              ((k = e.props),
              (C = (d = O.contextType) && r[d.__c]),
              (x = d ? (C ? C.props.value : d.__) : r),
              n.__c
                ? (b = (h = e.__c = n.__c).__ = h.__E)
                : ("prototype" in O && O.prototype.render
                    ? (e.__c = h = new O(k, x))
                    : ((e.__c = h = new w(k, x)),
                      (h.constructor = O),
                      (h.render = M)),
                  C && C.sub(h),
                  (h.props = k),
                  h.state || (h.state = {}),
                  (h.context = x),
                  (h.__n = r),
                  (f = h.__d = !0),
                  (h.__h = []),
                  (h._sb = [])),
              null == h.__s && (h.__s = h.state),
              null != O.getDerivedStateFromProps &&
                (h.__s == h.state && (h.__s = p({}, h.__s)),
                p(h.__s, O.getDerivedStateFromProps(k, h.__s))),
              (v = h.props),
              (g = h.state),
              (h.__v = e),
              f)
            )
              null == O.getDerivedStateFromProps &&
                null != h.componentWillMount &&
                h.componentWillMount(),
                null != h.componentDidMount && h.__h.push(h.componentDidMount);
            else {
              if (
                (null == O.getDerivedStateFromProps &&
                  k !== v &&
                  null != h.componentWillReceiveProps &&
                  h.componentWillReceiveProps(k, x),
                !h.__e &&
                  ((null != h.shouldComponentUpdate &&
                    !1 === h.shouldComponentUpdate(k, h.__s, x)) ||
                    e.__v === n.__v))
              ) {
                for (
                  e.__v !== n.__v &&
                    ((h.props = k), (h.state = h.__s), (h.__d = !1)),
                    e.__e = n.__e,
                    e.__k = n.__k,
                    e.__k.forEach(function (t) {
                      t && (t.__ = e);
                    }),
                    E = 0;
                  E < h._sb.length;
                  E++
                )
                  h.__h.push(h._sb[E]);
                (h._sb = []), h.__h.length && s.push(h);
                break t;
              }
              null != h.componentWillUpdate &&
                h.componentWillUpdate(k, h.__s, x),
                null != h.componentDidUpdate &&
                  h.__h.push(function () {
                    h.componentDidUpdate(v, g, m);
                  });
            }
            if (
              ((h.context = x),
              (h.props = k),
              (h.__P = t),
              (h.__e = !1),
              (S = i.__r),
              (T = 0),
              "prototype" in O && O.prototype.render)
            ) {
              for (
                h.state = h.__s,
                  h.__d = !1,
                  S && S(e),
                  d = h.render(h.props, h.state, h.context),
                  A = 0;
                A < h._sb.length;
                A++
              )
                h.__h.push(h._sb[A]);
              h._sb = [];
            } else
              do {
                (h.__d = !1),
                  S && S(e),
                  (d = h.render(h.props, h.state, h.context)),
                  (h.state = h.__s);
              } while (h.__d && ++T < 25);
            (h.state = h.__s),
              null != h.getChildContext &&
                (r = p(p({}, r), h.getChildContext())),
              f ||
                null == h.getSnapshotBeforeUpdate ||
                (m = h.getSnapshotBeforeUpdate(v, g)),
              L(
                t,
                _(
                  (I =
                    null != d && d.type === y && null == d.key
                      ? d.props.children
                      : d)
                )
                  ? I
                  : [I],
                e,
                n,
                r,
                o,
                a,
                s,
                c,
                u,
                l
              ),
              (h.base = e.__e),
              (e.__u &= -161),
              h.__h.length && s.push(h),
              b && (h.__E = h.__ = null);
          } catch (t) {
            (e.__v = null),
              u || null != a
                ? ((e.__e = c),
                  (e.__u |= u ? 160 : 32),
                  (a[a.indexOf(c)] = null))
                : ((e.__e = n.__e), (e.__k = n.__k)),
              i.__e(t, e, n);
          }
        else
          null == a && e.__v === n.__v
            ? ((e.__k = n.__k), (e.__e = n.__e))
            : (e.__e = j(n.__e, e, n, r, o, a, s, u, l));
        (d = i.diffed) && d(e);
      }
      function P(t, e, n) {
        e.__d = void 0;
        for (var r = 0; r < n.length; r++) F(n[r], n[++r], n[++r]);
        i.__c && i.__c(e, t),
          t.some(function (e) {
            try {
              (t = e.__h),
                (e.__h = []),
                t.some(function (t) {
                  t.call(e);
                });
            } catch (t) {
              i.__e(t, e.__v);
            }
          });
      }
      function j(t, e, n, i, o, a, s, c, u) {
        var l,
          h,
          f,
          p,
          g,
          m,
          b,
          y = n.props,
          w = e.props,
          C = e.type;
        if (("svg" === C && (o = !0), null != a))
          for (l = 0; l < a.length; l++)
            if (
              (g = a[l]) &&
              "setAttribute" in g == !!C &&
              (C ? g.localName === C : 3 === g.nodeType)
            ) {
              (t = g), (a[l] = null);
              break;
            }
        if (null == t) {
          if (null === C) return document.createTextNode(w);
          (t = o
            ? document.createElementNS("http://www.w3.org/2000/svg", C)
            : document.createElement(C, w.is && w)),
            (a = null),
            (c = !1);
        }
        if (null === C) y === w || (c && t.data === w) || (t.data = w);
        else {
          if (
            ((a = a && r.call(t.childNodes)),
            (y = n.props || d),
            !c && null != a)
          )
            for (y = {}, l = 0; l < t.attributes.length; l++)
              y[(g = t.attributes[l]).name] = g.value;
          for (l in y)
            (g = y[l]),
              "children" == l ||
                ("dangerouslySetInnerHTML" == l
                  ? (f = g)
                  : "key" === l || l in w || D(t, l, null, g, o));
          for (l in w)
            (g = w[l]),
              "children" == l
                ? (p = g)
                : "dangerouslySetInnerHTML" == l
                ? (h = g)
                : "value" == l
                ? (m = g)
                : "checked" == l
                ? (b = g)
                : "key" === l ||
                  (c && "function" != typeof g) ||
                  y[l] === g ||
                  D(t, l, g, y[l], o);
          if (h)
            c ||
              (f && (h.__html === f.__html || h.__html === t.innerHTML)) ||
              (t.innerHTML = h.__html),
              (e.__k = []);
          else if (
            (f && (t.innerHTML = ""),
            L(
              t,
              _(p) ? p : [p],
              e,
              n,
              i,
              o && "foreignObject" !== C,
              a,
              s,
              a ? a[0] : n.__k && k(n, 0),
              c,
              u
            ),
            null != a)
          )
            for (l = a.length; l--; ) null != a[l] && v(a[l]);
          c ||
            ((l = "value"),
            void 0 !== m &&
              (m !== t[l] ||
                ("progress" === C && !m) ||
                ("option" === C && m !== y[l])) &&
              D(t, l, m, y[l], !1),
            (l = "checked"),
            void 0 !== b && b !== t[l] && D(t, l, b, y[l], !1));
        }
        return t;
      }
      function F(t, e, n) {
        try {
          "function" == typeof t ? t(e) : (t.current = e);
        } catch (t) {
          i.__e(t, n);
        }
      }
      function H(t, e, n) {
        var r, o;
        if (
          (i.unmount && i.unmount(t),
          (r = t.ref) && ((r.current && r.current !== t.__e) || F(r, null, e)),
          null != (r = t.__c))
        ) {
          if (r.componentWillUnmount)
            try {
              r.componentWillUnmount();
            } catch (t) {
              i.__e(t, e);
            }
          (r.base = r.__P = null), (t.__c = void 0);
        }
        if ((r = t.__k))
          for (o = 0; o < r.length; o++)
            r[o] && H(r[o], e, n || "function" != typeof t.type);
        n || null == t.__e || v(t.__e), (t.__ = t.__e = t.__d = void 0);
      }
      function M(t, e, n) {
        return this.constructor(t, n);
      }
      function U(t, e, n) {
        var o, a, s, c;
        i.__ && i.__(t, e),
          (a = (o = "function" == typeof n) ? null : (n && n.__k) || e.__k),
          (s = []),
          (c = []),
          z(
            e,
            (t = ((!o && n) || e).__k = g(y, null, [t])),
            a || d,
            d,
            void 0 !== e.ownerSVGElement,
            !o && n
              ? [n]
              : a
              ? null
              : e.firstChild
              ? r.call(e.childNodes)
              : null,
            s,
            !o && n ? n : a ? a.__e : e.firstChild,
            o,
            c
          ),
          P(s, t, c);
      }
      function G(t, e) {
        U(t, e, G);
      }
      function B(t, e, n) {
        var i,
          o,
          a,
          s,
          c = p({}, t.props);
        for (a in (t.type && t.type.defaultProps && (s = t.type.defaultProps),
        e))
          "key" == a
            ? (i = e[a])
            : "ref" == a
            ? (o = e[a])
            : (c[a] = void 0 === e[a] && void 0 !== s ? s[a] : e[a]);
        return (
          arguments.length > 2 &&
            (c.children = arguments.length > 3 ? r.call(arguments, 2) : n),
          m(t.type, c, i || t.key, o || t.ref, null)
        );
      }
      function Z(t, e) {
        var n = {
          __c: (e = "__cC" + l++),
          __: t,
          Consumer: function (t, e) {
            return t.children(e);
          },
          Provider: function (t) {
            var n, r;
            return (
              this.getChildContext ||
                ((n = []),
                ((r = {})[e] = this),
                (this.getChildContext = function () {
                  return r;
                }),
                (this.shouldComponentUpdate = function (t) {
                  this.props.value !== t.value &&
                    n.some(function (t) {
                      (t.__e = !0), x(t);
                    });
                }),
                (this.sub = function (t) {
                  n.push(t);
                  var e = t.componentWillUnmount;
                  t.componentWillUnmount = function () {
                    n.splice(n.indexOf(t), 1), e && e.call(t);
                  };
                })),
              t.children
            );
          },
        };
        return (n.Provider.__ = n.Consumer.contextType = n);
      }
      (r = h.slice),
        (i = {
          __e: function (t, e, n, r) {
            for (var i, o, a; (e = e.__); )
              if ((i = e.__c) && !i.__)
                try {
                  if (
                    ((o = i.constructor) &&
                      null != o.getDerivedStateFromError &&
                      (i.setState(o.getDerivedStateFromError(t)), (a = i.__d)),
                    null != i.componentDidCatch &&
                      (i.componentDidCatch(t, r || {}), (a = i.__d)),
                    a)
                  )
                    return (i.__E = i);
                } catch (e) {
                  t = e;
                }
            throw t;
          },
        }),
        (o = 0),
        (w.prototype.setState = function (t, e) {
          var n;
          (n =
            null != this.__s && this.__s !== this.state
              ? this.__s
              : (this.__s = p({}, this.state))),
            "function" == typeof t && (t = t(p({}, n), this.props)),
            t && p(n, t),
            null != t && this.__v && (e && this._sb.push(e), x(this));
        }),
        (w.prototype.forceUpdate = function (t) {
          this.__v && ((this.__e = !0), t && this.__h.push(t), x(this));
        }),
        (w.prototype.render = y),
        (a = []),
        (c =
          "function" == typeof Promise
            ? Promise.prototype.then.bind(Promise.resolve())
            : setTimeout),
        (u = function (t, e) {
          return t.__v.__b - e.__v.__b;
        }),
        (E.__r = 0),
        (l = 0);
    },
    396: function (t, e, n) {
      "use strict";
      n.d(e, {
        I4: function () {
          return L;
        },
        Me: function () {
          return I;
        },
        Qb: function () {
          return T;
        },
        Ye: function () {
          return E;
        },
        _Y: function () {
          return y;
        },
        aP: function () {
          return x;
        },
        bt: function () {
          return k;
        },
        cO: function () {
          return A;
        },
        d4: function () {
          return w;
        },
        eJ: function () {
          return b;
        },
        qp: function () {
          return S;
        },
        sO: function () {
          return C;
        },
      });
      var r,
        i,
        o,
        a,
        s = n(6400),
        c = 0,
        u = [],
        l = [],
        d = s.YM,
        h = d.__b,
        f = d.__r,
        _ = d.diffed,
        p = d.__c,
        v = d.unmount,
        g = d.__;
      function m(t, e) {
        d.__h && d.__h(i, t, c || e), (c = 0);
        var n = i.__H || (i.__H = { __: [], __h: [] });
        return t >= n.__.length && n.__.push({ __V: l }), n.__[t];
      }
      function b(t) {
        return (c = 1), y(j, t);
      }
      function y(t, e, n) {
        var o = m(r++, 2);
        if (
          ((o.t = t),
          !o.__c &&
            ((o.__ = [
              n ? n(e) : j(void 0, e),
              function (t) {
                var e = o.__N ? o.__N[0] : o.__[0],
                  n = o.t(e, t);
                e !== n && ((o.__N = [n, o.__[1]]), o.__c.setState({}));
              },
            ]),
            (o.__c = i),
            !i.u))
        ) {
          var a = function (t, e, n) {
            if (!o.__c.__H) return !0;
            var r = o.__c.__H.__.filter(function (t) {
              return !!t.__c;
            });
            if (
              r.every(function (t) {
                return !t.__N;
              })
            )
              return !s || s.call(this, t, e, n);
            var i = !1;
            return (
              r.forEach(function (t) {
                if (t.__N) {
                  var e = t.__[0];
                  (t.__ = t.__N), (t.__N = void 0), e !== t.__[0] && (i = !0);
                }
              }),
              !(!i && o.__c.props === t) && (!s || s.call(this, t, e, n))
            );
          };
          i.u = !0;
          var s = i.shouldComponentUpdate,
            c = i.componentWillUpdate;
          (i.componentWillUpdate = function (t, e, n) {
            if (this.__e) {
              var r = s;
              (s = void 0), a(t, e, n), (s = r);
            }
            c && c.call(this, t, e, n);
          }),
            (i.shouldComponentUpdate = a);
        }
        return o.__N || o.__;
      }
      function w(t, e) {
        var n = m(r++, 3);
        !d.__s && P(n.__H, e) && ((n.__ = t), (n.i = e), i.__H.__h.push(n));
      }
      function k(t, e) {
        var n = m(r++, 4);
        !d.__s && P(n.__H, e) && ((n.__ = t), (n.i = e), i.__h.push(n));
      }
      function C(t) {
        return (
          (c = 5),
          E(function () {
            return { current: t };
          }, [])
        );
      }
      function x(t, e, n) {
        (c = 6),
          k(
            function () {
              return "function" == typeof t
                ? (t(e()),
                  function () {
                    return t(null);
                  })
                : t
                ? ((t.current = e()),
                  function () {
                    return (t.current = null);
                  })
                : void 0;
            },
            null == n ? n : n.concat(t)
          );
      }
      function E(t, e) {
        var n = m(r++, 7);
        return P(n.__H, e)
          ? ((n.__V = t()), (n.i = e), (n.__h = t), n.__V)
          : n.__;
      }
      function L(t, e) {
        return (
          (c = 8),
          E(function () {
            return t;
          }, e)
        );
      }
      function S(t) {
        var e = i.context[t.__c],
          n = m(r++, 9);
        return (
          (n.c = t),
          e ? (null == n.__ && ((n.__ = !0), e.sub(i)), e.props.value) : t.__
        );
      }
      function T(t, e) {
        d.useDebugValue && d.useDebugValue(e ? e(t) : t);
      }
      function A(t) {
        var e = m(r++, 10),
          n = b();
        return (
          (e.__ = t),
          i.componentDidCatch ||
            (i.componentDidCatch = function (t, r) {
              e.__ && e.__(t, r), n[1](t);
            }),
          [
            n[0],
            function () {
              n[1](void 0);
            },
          ]
        );
      }
      function I() {
        var t = m(r++, 11);
        if (!t.__) {
          for (var e = i.__v; null !== e && !e.__m && null !== e.__; ) e = e.__;
          var n = e.__m || (e.__m = [0, 0]);
          t.__ = "P" + n[0] + "-" + n[1]++;
        }
        return t.__;
      }
      function O() {
        for (var t; (t = u.shift()); )
          if (t.__P && t.__H)
            try {
              t.__H.__h.forEach(R), t.__H.__h.forEach(z), (t.__H.__h = []);
            } catch (e) {
              (t.__H.__h = []), d.__e(e, t.__v);
            }
      }
      (d.__b = function (t) {
        (i = null), h && h(t);
      }),
        (d.__ = function (t, e) {
          t && e.__k && e.__k.__m && (t.__m = e.__k.__m), g && g(t, e);
        }),
        (d.__r = function (t) {
          f && f(t), (r = 0);
          var e = (i = t.__c).__H;
          e &&
            (o === i
              ? ((e.__h = []),
                (i.__h = []),
                e.__.forEach(function (t) {
                  t.__N && (t.__ = t.__N), (t.__V = l), (t.__N = t.i = void 0);
                }))
              : (e.__h.forEach(R), e.__h.forEach(z), (e.__h = []), (r = 0))),
            (o = i);
        }),
        (d.diffed = function (t) {
          _ && _(t);
          var e = t.__c;
          e &&
            e.__H &&
            (e.__H.__h.length &&
              ((1 !== u.push(e) && a === d.requestAnimationFrame) ||
                ((a = d.requestAnimationFrame) || N)(O)),
            e.__H.__.forEach(function (t) {
              t.i && (t.__H = t.i),
                t.__V !== l && (t.__ = t.__V),
                (t.i = void 0),
                (t.__V = l);
            })),
            (o = i = null);
        }),
        (d.__c = function (t, e) {
          e.some(function (t) {
            try {
              t.__h.forEach(R),
                (t.__h = t.__h.filter(function (t) {
                  return !t.__ || z(t);
                }));
            } catch (n) {
              e.some(function (t) {
                t.__h && (t.__h = []);
              }),
                (e = []),
                d.__e(n, t.__v);
            }
          }),
            p && p(t, e);
        }),
        (d.unmount = function (t) {
          v && v(t);
          var e,
            n = t.__c;
          n &&
            n.__H &&
            (n.__H.__.forEach(function (t) {
              try {
                R(t);
              } catch (t) {
                e = t;
              }
            }),
            (n.__H = void 0),
            e && d.__e(e, n.__v));
        });
      var D = "function" == typeof requestAnimationFrame;
      function N(t) {
        var e,
          n = function () {
            clearTimeout(r), D && cancelAnimationFrame(e), setTimeout(t);
          },
          r = setTimeout(n, 100);
        D && (e = requestAnimationFrame(n));
      }
      function R(t) {
        var e = i,
          n = t.__c;
        "function" == typeof n && ((t.__c = void 0), n()), (i = e);
      }
      function z(t) {
        var e = i;
        (t.__c = t.__()), (i = e);
      }
      function P(t, e) {
        return (
          !t ||
          t.length !== e.length ||
          e.some(function (e, n) {
            return e !== t[n];
          })
        );
      }
      function j(t, e) {
        return "function" == typeof e ? e(t) : e;
      }
    },
    3379: function (t) {
      "use strict";
      var e = [];
      function n(t) {
        for (var n = -1, r = 0; r < e.length; r++)
          if (e[r].identifier === t) {
            n = r;
            break;
          }
        return n;
      }
      function r(t, r) {
        for (var o = {}, a = [], s = 0; s < t.length; s++) {
          var c = t[s],
            u = r.base ? c[0] + r.base : c[0],
            l = o[u] || 0,
            d = "".concat(u, " ").concat(l);
          o[u] = l + 1;
          var h = n(d),
            f = {
              css: c[1],
              media: c[2],
              sourceMap: c[3],
              supports: c[4],
              layer: c[5],
            };
          if (-1 !== h) e[h].references++, e[h].updater(f);
          else {
            var _ = i(f, r);
            (r.byIndex = s),
              e.splice(s, 0, { identifier: d, updater: _, references: 1 });
          }
          a.push(d);
        }
        return a;
      }
      function i(t, e) {
        var n = e.domAPI(e);
        n.update(t);
        return function (e) {
          if (e) {
            if (
              e.css === t.css &&
              e.media === t.media &&
              e.sourceMap === t.sourceMap &&
              e.supports === t.supports &&
              e.layer === t.layer
            )
              return;
            n.update((t = e));
          } else n.remove();
        };
      }
      t.exports = function (t, i) {
        var o = r((t = t || []), (i = i || {}));
        return function (t) {
          t = t || [];
          for (var a = 0; a < o.length; a++) {
            var s = n(o[a]);
            e[s].references--;
          }
          for (var c = r(t, i), u = 0; u < o.length; u++) {
            var l = n(o[u]);
            0 === e[l].references && (e[l].updater(), e.splice(l, 1));
          }
          o = c;
        };
      };
    },
    569: function (t) {
      "use strict";
      var e = {};
      t.exports = function (t, n) {
        var r = (function (t) {
          if (void 0 === e[t]) {
            var n = document.querySelector(t);
            if (
              window.HTMLIFrameElement &&
              n instanceof window.HTMLIFrameElement
            )
              try {
                n = n.contentDocument.head;
              } catch (t) {
                n = null;
              }
            e[t] = n;
          }
          return e[t];
        })(t);
        if (!r)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        r.appendChild(n);
      };
    },
    9216: function (t) {
      "use strict";
      t.exports = function (t) {
        var e = document.createElement("style");
        return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
      };
    },
    3565: function (t, e, n) {
      "use strict";
      t.exports = function (t) {
        var e = n.nc;
        e && t.setAttribute("nonce", e);
      };
    },
    7795: function (t) {
      "use strict";
      t.exports = function (t) {
        if ("undefined" == typeof document)
          return { update: function () {}, remove: function () {} };
        var e = t.insertStyleElement(t);
        return {
          update: function (n) {
            !(function (t, e, n) {
              var r = "";
              n.supports && (r += "@supports (".concat(n.supports, ") {")),
                n.media && (r += "@media ".concat(n.media, " {"));
              var i = void 0 !== n.layer;
              i &&
                (r += "@layer".concat(
                  n.layer.length > 0 ? " ".concat(n.layer) : "",
                  " {"
                )),
                (r += n.css),
                i && (r += "}"),
                n.media && (r += "}"),
                n.supports && (r += "}");
              var o = n.sourceMap;
              o &&
                "undefined" != typeof btoa &&
                (r +=
                  "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                    btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
                    " */"
                  )),
                e.styleTagTransform(r, t, e.options);
            })(e, t, n);
          },
          remove: function () {
            !(function (t) {
              if (null === t.parentNode) return !1;
              t.parentNode.removeChild(t);
            })(e);
          },
        };
      };
    },
    4589: function (t) {
      "use strict";
      t.exports = function (t, e) {
        if (e.styleSheet) e.styleSheet.cssText = t;
        else {
          for (; e.firstChild; ) e.removeChild(e.firstChild);
          e.appendChild(document.createTextNode(t));
        }
      };
    },
    3555: function (t, e, n) {
      "use strict";
      n.d(e, {
        LJ: function () {
          return o;
        },
        VK: function () {
          return s;
        },
        sB: function () {
          return a;
        },
      });
      var r = [],
        i = 0;
      function o(t) {
        var e, n;
        (e = t),
          (n = r[r.length - 1]) &&
            n.code !== e &&
            console.warn(
              '[HG-WEB-SDK] appCode scope concurrent conflict: existing "'
                .concat(n.code, '" vs incoming "')
                .concat(e, '". ') +
                "Account server requests during overlap may carry the wrong X-AppCode."
            );
        var o = ++i;
        return r.push({ id: o, code: t }), o;
      }
      function a(t) {
        var e = r.findIndex(function (e) {
          return e.id === t;
        });
        e >= 0 && r.splice(e, 1);
      }
      function s() {
        var t;
        return null === (t = r[r.length - 1]) || void 0 === t ? void 0 : t.code;
      }
    },
    7902: function (t, e, n) {
      "use strict";
      n.d(e, {
        h: function () {
          return s;
        },
      });
      var r = n(8491),
        i = n(3441),
        o = (function () {
          function t(t, e) {
            var n = this;
            void 0 === e && (e = ""),
              (this.host = t),
              (this.prefix = e),
              (this.getHost = function () {
                return n.host + n.prefix;
              });
          }
          return (
            (t.prototype.setHost = function (t) {
              return t && (this.host = t), this;
            }),
            t
          );
        })(),
        a = new o(r.Q6),
        s = {
          apiServer: new o(r.QQ),
          accountServer: a,
          hgServer: a,
          u8Server: new o(r.DX),
          roleServer: new o(r.Fl),
          userServer: new o(r.eT, "/api/sdk"),
          bindingServer: new o(i.n.host),
        };
    },
    1721: function (t, e, n) {
      "use strict";
      n.d(e, {
        P: function () {
          return o;
        },
        q: function () {
          return i;
        },
      });
      var r = n(655),
        i = (function (t) {
          function e(e, n, r) {
            var i = t.call(this, n) || this;
            return (
              (i.code = e), (i._type = "SDK_ERROR"), r && (i.stack = r.stack), i
            );
          }
          return (
            (0, r.ZT)(e, t),
            (e.is = function (t) {
              return t instanceof Error && "SDK_ERROR" === t._type;
            }),
            (e.isSafe = function (t) {
              return this.is(t) && !!t._safe;
            }),
            (e.prototype.toString = function () {
              return "[HG-WEB-SDK] Error ("
                .concat(this.module ? "(".concat(this.module, ")") : "", ")[")
                .concat(this.code, "]: ")
                .concat(this.message, " \n")
                .concat(this.stack);
            }),
            e
          );
        })(Error),
        o = (function (t) {
          function e(e, n, r) {
            void 0 === r && (r = "");
            var i = t.call(this, n, r) || this;
            return (i.module = e), i;
          }
          return (
            (0, r.ZT)(e, t),
            (e.create = function (t, n) {
              var r = new e(t, n.code, n.msg);
              return (r.data = n.data), (r.detail = n.detail), r;
            }),
            e
          );
        })(i);
    },
    536: function (t, e, n) {
      "use strict";
      n.d(e, {
        R: function () {
          return o;
        },
        o: function () {
          return i;
        },
      });
      var r = n(655),
        i = (function (t) {
          function e(e, n) {
            var r = t.call(this, n) || this;
            return (r.statusCode = e), (r._type = "SDK_HTTP_ERROR"), r;
          }
          return (
            (0, r.ZT)(e, t),
            (e.is = function (t) {
              return t instanceof Error && "SDK_HTTP_ERROR" === t._type;
            }),
            (e.prototype.toString = function () {
              return "[HG-WEB-SDK] Http Error ("
                .concat(this.statusCode, ") ")
                .concat(this.message, ": \n")
                .concat(this.stack);
            }),
            e
          );
        })(Error);
      function o(t, e) {
        return (
          void 0 === t && (t = 0),
          new i(
            t,
            e ||
              (function (t) {
                switch (t) {
                  case 0:
                    return "连接失败，请检查网络设置";
                  case 400:
                    return "请求失败，参数错误";
                  case 401:
                    return "请求失败，未授权";
                  case 403:
                    return "请求失败，禁止操作";
                  case 404:
                    return "请求失败，无效的请求地址";
                  case 408:
                    return "请求超时";
                  case 500:
                    return "请求失败，服务器错误";
                  case 503:
                    return "请求失败，服务当前不可用";
                  case 504:
                    return "请求失败，网关错误";
                  default:
                    return "请求错误";
                }
              })(t)
          )
        );
      }
    },
    8230: function (t, e, n) {
      "use strict";
      n.d(e, {
        KU: function () {
          return s;
        },
      });
      var r = n(655),
        i = n(4954),
        o = n.n(i),
        a = n(536),
        s = (function () {
          function t(t) {
            (this.onResponse = function (t) {
              return t;
            }),
              (this.host = t.host || ""),
              (this.timeout = t.timeout || 1e4),
              (this.headers = t.headers),
              (this.onResponse = t.onResponse || this.onResponse),
              (this.onError = t.onError || this.onError);
          }
          return (
            (t.prototype.request = function (t, e) {
              var n;
              return (0, r.mG)(this, void 0, void 0, function () {
                var i, s, c, u, l, d, h, f;
                return (0, r.Jh)(this, function (_) {
                  switch (_.label) {
                    case 0:
                      (s = (i = e || {}).data),
                        (c = (0, r._T)(i, ["data"])),
                        (_.label = 1);
                    case 1:
                      return (
                        _.trys.push([1, 3, , 4]),
                        (u =
                          "function" == typeof this.headers
                            ? this.headers()
                            : this.headers),
                        [
                          4,
                          o().request(t, null != s ? s : void 0, {
                            baseURL:
                              "string" == typeof this.host
                                ? this.host
                                : this.host(),
                            method: c.method || "GET",
                            headers: (0, r.pi)((0, r.pi)({}, u), c.headers),
                            timeout:
                              null !== (n = c.timeout) && void 0 !== n
                                ? n
                                : this.timeout,
                            withCredentials: !0,
                            responseType: "json",
                          }),
                        ]
                      );
                    case 2:
                      return (
                        (l = _.sent()),
                        [
                          2,
                          this.onResponse(l.data, {
                            client: this,
                            url: t,
                            option: e,
                          }),
                        ]
                      );
                    case 3:
                      if (((d = _.sent()), (h = d), d.engine))
                        switch ((f = d).status) {
                          case 0:
                            h = (0, a.R)(0);
                            break;
                          case 1:
                            h = (0, a.R)(408);
                            break;
                          default:
                            h = (0, a.R)(f.status);
                        }
                      if (this.onError) return [2, this.onError(h)];
                      throw h;
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            (t.prototype.get = function (t, e) {
              return (0, r.mG)(this, void 0, void 0, function () {
                return (0, r.Jh)(this, function (n) {
                  return [2, this.request(t, { method: "GET", data: e })];
                });
              });
            }),
            (t.prototype.post = function (t, e) {
              return (0, r.mG)(this, void 0, void 0, function () {
                return (0, r.Jh)(this, function (n) {
                  return [2, this.request(t, { method: "POST", data: e })];
                });
              });
            }),
            t
          );
        })();
    },
    3661: function (t, e, n) {
      "use strict";
      n.d(e, {
        U2: function () {
          return u;
        },
        kD: function () {
          return l;
        },
        o2: function () {
          return d;
        },
      });
      var r = n(655),
        i = n(8230),
        o = n(536),
        a = n(7902),
        s = n(8836),
        c = new i.KU({
          host: a.h.apiServer.getHost,
          timeout: 1e4,
          onError: function (t) {
            if (o.o.is(t) && 401 === t.statusCode)
              return { code: -1, msg: "", data: {} };
            throw t;
          },
        });
      function u(t) {
        return (0, r.mG)(this, void 0, void 0, function () {
          var e, n, i;
          return (0, r.Jh)(this, function (r) {
            switch (r.label) {
              case 0:
                return [4, c.post("/account/info/".concat(t || "", "/check"))];
              case 1:
                return (
                  (e = r.sent()),
                  (n = e.code),
                  (i = e.data),
                  e.msg,
                  0 !== n ? [2, null] : [2, i.content]
                );
            }
          });
        });
      }
      function l(t) {
        var e, n;
        return (0, r.mG)(this, void 0, void 0, function () {
          var i;
          return (0, r.Jh)(this, function (r) {
            switch (r.label) {
              case 0:
                return [4, s.ej.user.exchangeCodeByToken(t)];
              case 1:
                return (i = r.sent()).result
                  ? [
                      2,
                      null !==
                        (n =
                          null === (e = i.data) || void 0 === e
                            ? void 0
                            : e.code) && void 0 !== n
                        ? n
                        : null,
                    ]
                  : [2, null];
            }
          });
        });
      }
      function d(t) {
        var e, n;
        return (0, r.mG)(this, void 0, void 0, function () {
          var i;
          return (0, r.Jh)(this, function (r) {
            switch (r.label) {
              case 0:
                return [4, s.ej.auth.tokenByExchangeCode(t)];
              case 1:
                return (i = r.sent()).result
                  ? [
                      2,
                      null !==
                        (n =
                          null === (e = i.data) || void 0 === e
                            ? void 0
                            : e.token) && void 0 !== n
                        ? n
                        : null,
                    ]
                  : [2, null];
            }
          });
        });
      }
    },
    1157: function (t, e, n) {
      "use strict";
      n.d(e, {
        k0: function () {
          return a;
        },
        lJ: function () {
          return c;
        },
        K7: function () {
          return s;
        },
      });
      var r = n(655),
        i = function (t) {
          var e = 0;
          if (0 === t.length) return e;
          for (var n = 0; n < t.length; n++) {
            (e = (e << 5) - e + t.charCodeAt(n)), (e |= 0);
          }
          return e.toString(16);
        };
      function o(t) {
        return "session" === t ? sessionStorage : localStorage;
      }
      function a(t, e) {
        var n = o((null == e ? void 0 : e.persist) ? "local" : "session"),
          r = (null == e ? void 0 : e.identifier)
            ? "".concat(t, ":").concat(e.identifier)
            : t;
        n.removeItem(r);
      }
      function s(t, e, n) {
        var r = o((null == n ? void 0 : n.persist) ? "local" : "session"),
          a = (null == n ? void 0 : n.identifier)
            ? "".concat(t, ":").concat(n.identifier)
            : t,
          s = Math.floor(+new Date() / 1e3),
          c = [
            e,
            ((null == n ? void 0 : n.verifier) && i(n.verifier)) || "",
            (null == n ? void 0 : n.ttl) ? s + n.ttl : "",
          ].join(":");
        r.setItem(a, c);
      }
      function c(t, e) {
        return (0, r.mG)(this, void 0, void 0, function () {
          var n, a, s, c, u, l, d, h, f, _, p, v;
          return (0, r.Jh)(this, function (g) {
            switch (g.label) {
              case 0:
                if (
                  ((n = o(
                    (null == e ? void 0 : e.persist) ? "local" : "session"
                  )),
                  (a = (null == e ? void 0 : e.identifier)
                    ? "".concat(t, ":").concat(e.identifier)
                    : t),
                  (s = n.getItem(a)),
                  (c = Math.floor(+new Date() / 1e3)),
                  s)
                ) {
                  u = s.split(":");
                  try {
                    if (u.length > 0 && u.length <= 3) {
                      if (
                        ((l = (0, r.CR)(u, 3)),
                        (d = l[0]),
                        (h = l[1]),
                        (f = l[2]),
                        (null == e ? void 0 : e.ttl) && f)
                      ) {
                        if ((_ = Number.parseInt(f)) - c < 0)
                          throw new Error("stored value expired");
                        if (Math.abs(_ - c) > e.ttl)
                          throw new Error("stored ttl not valid");
                      }
                      if (
                        (null == e ? void 0 : e.verifier) &&
                        e.verifier !== h &&
                        i(e.verifier) !== h
                      )
                        throw new Error("stored verifier miss match");
                      return [2, d];
                    }
                  } catch (t) {
                    console.warn(
                      "[HG-WEB-SDK] Session cache failed, ",
                      t.message
                    );
                  }
                }
                return (null == e ? void 0 : e.fetch) ? [4, e.fetch()] : [3, 2];
              case 1:
                if ((p = g.sent()))
                  return (
                    (v = [
                      p,
                      e.verifier && i(e.verifier),
                      e.ttl ? c + e.ttl : "",
                    ].join(":")),
                    n.setItem(a, v),
                    [2, p]
                  );
                g.label = 2;
              case 2:
                return n.removeItem(a), [2, null];
            }
          });
        });
      }
    },
    6897: function (t, e, n) {
      "use strict";
      n.d(e, {
        B: function () {
          return i;
        },
      });
      var r = n(655);
      function i(t) {
        return (0, r.mG)(this, void 0, void 0, function () {
          return (0, r.Jh)(this, function (e) {
            switch (e.label) {
              case 0:
                return (
                  e.trys.push([0, 2, , 3]), [4, n.e(852).then(n.bind(n, 4754))]
                );
              case 1:
                return e.sent(), [3, 3];
              case 2:
                return e.sent(), [2, null];
              case 3:
                return (
                  n.e(121).then(n.bind(n, 9121)),
                  [
                    2,
                    new Promise(function (e) {
                      window.initGeetest(
                        {
                          gt: t.gt,
                          challenge: t.challenge,
                          offline: !t.success,
                          new_captcha: !!t.new_captcha,
                          product: "bind",
                        },
                        function (t) {
                          t.onReady(function () {
                            t.verify();
                          }),
                            t.onSuccess(function () {
                              var n = t.getValidate();
                              n && (e(n), t.destroy());
                            }),
                            t.onError(function (n) {
                              var r = n.error_code;
                              n.msg;
                              "error_01" !== r && (e(null), t.destroy());
                            }),
                            t.onClose(function () {
                              e(null), t.destroy();
                            });
                        }
                      );
                    }),
                  ]
                );
            }
          });
        });
      }
    },
    1995: function (t, e, n) {
      "use strict";
      n.d(e, {
        ZT: function () {
          return i;
        },
        s2: function () {
          return c;
        },
        tI: function () {
          return o;
        },
        z5: function () {
          return a;
        },
      });
      var r = n(655),
        i = function () {};
      function o(t) {
        return (
          !!t &&
          ("object" == typeof t || "function" == typeof t) &&
          "function" == typeof t.then
        );
      }
      function a(t, e) {
        return (0, r.mG)(this, void 0, void 0, function () {
          return (0, r.Jh)(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, Promise.all([t(), s(e)])];
              case 1:
                return [2, n.sent()[0]];
            }
          });
        });
      }
      var s = function (t) {
        return (0, r.mG)(void 0, void 0, void 0, function () {
          return (0, r.Jh)(this, function (e) {
            return [
              2,
              new Promise(function (e) {
                setTimeout(e, t);
              }),
            ];
          });
        });
      };
      function c(t) {
        return !t;
      }
    },
    8837: function (t, e, n) {
      "use strict";
      n.d(e, {
        bI: function () {
          return a;
        },
        tg: function () {
          return s;
        },
      });
      var r,
        i = n(2172),
        o = n(8491);
      !(function (t) {
        (t.GAME = "GAME"), (t.APP = "APP"), (t.SERVICE = "SERVICE");
      })(r || (r = {}));
      var a = {
        arknights: {
          key: "arknights",
          name: "明日方舟",
          type: r.GAME,
          hgAppCode: (0, i.Z)(o.SG.hgAppCodeMap, "arknights", ""),
        },
        endfield: {
          key: "endfield",
          name: "明日方舟：终末地",
          type: r.GAME,
          hgAppCode: (0, i.Z)(o.SG.hgAppCodeMap, "endfield", ""),
        },
        exastris: {
          key: "exastris",
          name: "来自星尘",
          type: r.GAME,
          hgAppCode: (0, i.Z)(o.SG.hgAppCodeMap, "exastris", ""),
        },
        popucom: {
          key: "popucom",
          name: "泡姆泡姆",
          type: r.GAME,
          hgAppCode: (0, i.Z)(o.SG.hgAppCodeMap, "popucom", ""),
        },
        skland: {
          key: "skland",
          name: "森空岛",
          type: r.APP,
          hgAppCode: (0, i.Z)(o.SG.hgAppCodeMap, "skland", ""),
        },
        binding: {
          key: "binding",
          name: "游戏角色",
          type: r.SERVICE,
          hgAppCode: "be36d44aa36bfb5b",
        },
      };
      function s(t) {
        var e;
        return (
          (null === (e = a[t]) || void 0 === e ? void 0 : e.hgAppCode) || ""
        );
      }
    },
    8491: function (t, e, n) {
      "use strict";
      n.d(e, {
        BJ: function () {
          return h;
        },
        D1: function () {
          return u;
        },
        DX: function () {
          return o;
        },
        Fl: function () {
          return s;
        },
        G2: function () {
          return _;
        },
        GV: function () {
          return v;
        },
        HX: function () {
          return f;
        },
        Q6: function () {
          return i;
        },
        QQ: function () {
          return a;
        },
        SG: function () {
          return r;
        },
        _H: function () {
          return d;
        },
        eT: function () {
          return c;
        },
        gn: function () {
          return l;
        },
        jX: function () {
          return p;
        },
      });
      var r = {
          hg: { HOST: "./as.hypergryph.com" },
          u8: { HOST: "./u8.hypergryph.com" },
          u8_ak: { appId: 1 },
          hgAppCodeMap: {
            arknights: "",
            endfield: "",
            exastris: "",
            popucom: "",
          },
          u8AppCodeMap: {
            arknights: "9aa9768a549ddaa186b7",
            endfield: "4df8f5a7c2ad711b497a",
            exastris: "",
            popucom: "",
          },
        },
        i = r.hg.HOST,
        o = r.u8.HOST,
        a = "./web-api.hypergryph.com",
        s = "./binding-api-account-prod.hypergryph.com",
        c = "./ak.hypergryph.com/user",
        u = "HG_OAUTH_TOKEN",
        l = "APP_CURRENT_ROLE",
        d = "APP_CURRENT_SERVER_ROLE",
        h = "APP_ROLE_TOKEN",
        f = "APP_ROLE_U8_TOKEN",
        _ = "hg-sdk-ui-container",
        p = "HG_SDK_INPUT_VIEW",
        v = { OFFICIAL: 1, BILIBILI: 2 };
    },
    9016: function (t, e, n) {
      "use strict";
      n.d(e, {
        J2: function () {
          return d;
        },
        NI: function () {
          return u;
        },
        r: function () {
          return l;
        },
      });
      var r = n(1721),
        i = n(4024),
        o = n(8837),
        a = n(8491),
        s = n(2172),
        c = {
          ak: {
            key: "ak",
            name: "明日方舟",
            app: "arknights",
            bindingAppCode: "arknights",
            u8AppCode: (0, s.Z)(a.SG, "u8AppCodeMap.arknights", void 0),
            downloadConfig: { url: "https://ak.hypergryph.com/download" },
          },
          exa: {
            key: "exa",
            name: "来自星尘",
            app: "exastris",
            bindingAppCode: "exa",
            u8AppCode: (0, s.Z)(a.SG, "u8AppCodeMap.exastris", void 0),
          },
          ef: {
            key: "ef",
            name: "明日方舟：终末地",
            app: "endfield",
            bindingAppCode: "endfield",
            u8AppCode: (0, s.Z)(a.SG, "u8AppCodeMap.endfield", void 0),
            isMultiServers: !0,
            downloadConfig: {
              url: "https://launcher.hypergryph.com/s/NofRPl?ua=&sub_channel=1",
            },
          },
          popucom: {
            key: "popucom",
            name: "泡姆泡姆",
            app: "popucom",
            bindingAppCode: "popucom",
            u8AppCode: (0, s.Z)(a.SG, "u8AppCodeMap.popucom", void 0),
          },
        };
      function u(t) {
        var e = c[t];
        if (!e) throw new r.q("GAME_NOT_FOUND", (0, i.Z)("未找到对应的游戏"));
        return e;
      }
      function l(t) {
        return u(t).app;
      }
      function d(t) {
        return o.bI[l(t)];
      }
    },
    8836: function (t, e, n) {
      "use strict";
      n.d(e, {
        k_: function () {
          return b;
        },
        ej: function () {
          return k;
        },
        VX: function () {
          return y;
        },
      });
      var r = n(655),
        i = n(4954),
        o = n.n(i),
        a = n(9054);
      function s(t) {
        return (0, r.mG)(this, void 0, void 0, function () {
          return (0, r.Jh)(this, function (e) {
            switch (e.label) {
              case 0:
                return (
                  e.trys.push([0, 2, , 3]), [4, n.e(623).then(n.bind(n, 8623))]
                );
              case 1:
                return e.sent(), [3, 3];
              case 2:
                return e.sent(), [2, null];
              case 3:
                return (
                  n.e(987).then(n.bind(n, 987)),
                  [
                    2,
                    new Promise(function (e) {
                      window.initGeetest(
                        {
                          gt: t.gt,
                          challenge: t.challenge,
                          offline: !t.success,
                          new_captcha: !!t.new_captcha,
                          product: "bind",
                        },
                        function (t) {
                          t.onReady(function () {
                            t.verify();
                          }),
                            t.onSuccess(function () {
                              var n = t.getValidate();
                              n && (e(n), t.destroy());
                            }),
                            t.onError(function (n) {
                              var r = n.error_code;
                              n.msg;
                              "error_01" !== r && (e(null), t.destroy());
                            }),
                            t.onClose(function () {
                              e(null), t.destroy();
                            });
                        }
                      );
                    }),
                  ]
                );
            }
          });
        });
      }
      var c = n(7348),
        u = n(1764),
        l = n(9923),
        d = n(7902),
        h = n(2005),
        f = n(1370),
        _ = n(4459);
      function p(t) {
        void 0 === t && (t = {});
        var e = (0, _.HX)();
        return null !== e && (t.login_type = e), t;
      }
      function v(t, e, n) {
        return (0, r.mG)(this, void 0, void 0, function () {
          var i, o;
          return (0, r.Jh)(this, function (a) {
            switch (a.label) {
              case 0:
                return (
                  (i = (0, f.H)("".concat(t, "_start"), (0, r.pi)({}, e))),
                  [4, n()]
                );
              case 1:
                return (
                  (o = a.sent()),
                  (0, f.Y)(
                    "".concat(t, "_end"),
                    (0, r.pi)(
                      (0, r.pi)({}, e),
                      (function (t) {
                        var e = {};
                        return (
                          t.result
                            ? (e.s_code = "200")
                            : t.statusCode
                            ? (e.s_code = String(t.statusCode))
                            : (e.c_err_code = "-1"),
                          "number" == typeof t.status &&
                            (e.s_status = String(t.status)),
                          e
                        );
                      })(o)
                    ),
                    i
                  ),
                  [2, o]
                );
            }
          });
        });
      }
      function g(t, e, n) {
        return (0, r.mG)(this, void 0, void 0, function () {
          return (0, r.Jh)(this, function (r) {
            return [2, v(t, p(e), n)];
          });
        });
      }
      function m(t) {
        return t === a.I.DEVICE_CHECK ? 5 : 1;
      }
      var b = {
          OK: 0,
          REQUIRE_CAPTCHA: 1,
          INVALID_TOKEN: 3,
          INVALID_CAPTCHA: 4,
          INVALID_SMS_CODE: 5,
          INVALID_REQUEST: 6,
          GUEST_ACCESS_DENIED: 8,
          ACCOUNT_DELETING: 9,
          ACCOUNT_BANNED: 10,
          OPEN_ID_NOT_EXIST: 101,
          OPEN_ID_DELETING: 102,
          NEED_DEVICE_VERIFY: 109,
        },
        y = { NOT_START: 100, NOT_CONFIRM: 101, EXPIRED: 102 };
      function w(t, e, n, i) {
        return (0, r.mG)(this, void 0, void 0, function () {
          var a, u, l, f, _;
          return (0, r.Jh)(this, function (p) {
            switch (p.label) {
              case 0:
                (a = "".concat(d.h.accountServer.getHost()).concat(t)),
                  (p.label = 1);
              case 1:
                return (
                  p.trys.push([1, 6, , 7]),
                  [
                    4,
                    o().request(a, n, {
                      timeout: 1e4,
                      method: e,
                      withCredentials: !0,
                      responseType: "json",
                      headers: (0, r.pi)(
                        (0, r.pi)({}, (0, h.XN)()),
                        null == i ? void 0 : i.headers
                      ),
                    }),
                  ]
                );
              case 2:
                return (u = p.sent()).data.status === b.OK
                  ? [2, u.data]
                  : u.data.status !== b.REQUIRE_CAPTCHA ||
                    !u.data.data.captcha ||
                    (null == i ? void 0 : i.skipCaptcha)
                  ? [3, 5]
                  : ((u.data.msg = ""), [4, s(u.data.data.captcha)]);
              case 3:
                return (l = p.sent())
                  ? [4, w(t, e, (0, r.pi)((0, r.pi)({}, n), { captcha: l }), i)]
                  : [3, 5];
              case 4:
                return [2, p.sent()];
              case 5:
                throw new c.w(u);
              case 6:
                if (((f = p.sent()), (_ = f).type === c.w.type)) throw _;
                if (_.status && _.response)
                  throw (
                    (_.status,
                    new c.w({ status: _.status, data: _.response.data }))
                  );
                throw _;
              case 7:
                return [2];
            }
          });
        });
      }
      var k = {
        general: {
          sendSMS: function (t, e) {
            return (0, r.mG)(this, void 0, void 0, function () {
              return (0, r.Jh)(this, function (n) {
                return [
                  2,
                  g("c_sendPhoneCode", { send_type: m(e) }, function () {
                    return (0, c.j)(function () {
                      return w("/general/v1/send_phone_code", "POST", {
                        phone: t,
                        type: e,
                      });
                    });
                  }),
                ];
              });
            });
          },
          sendEmailCode: function (t) {
            return (0, r.mG)(this, void 0, void 0, function () {
              return (0, r.Jh)(this, function (e) {
                return [
                  2,
                  (0, c.j)(function () {
                    return w("/general/v1/send_email_code", "POST", {
                      email: t,
                    });
                  }),
                ];
              });
            });
          },
          genLoginScanUrl: function (t) {
            return (0, r.mG)(this, void 0, void 0, function () {
              return (0, r.Jh)(this, function (e) {
                return [
                  2,
                  (0, c.j)(function () {
                    return w("/general/v1/gen_scan/login", "POST", {
                      appCode: t,
                    });
                  }),
                ];
              });
            });
          },
          getScanStatus: function (t) {
            return (0, r.mG)(this, void 0, void 0, function () {
              return (0, r.Jh)(this, function (e) {
                return [
                  2,
                  (0, c.j)(function () {
                    return w("/general/v1/scan_status", "GET", { scanId: t });
                  }),
                ];
              });
            });
          },
          getServerTime: function () {
            return (0, r.mG)(this, void 0, void 0, function () {
              return (0, r.Jh)(this, function (t) {
                return [
                  2,
                  (0, c.j)(function () {
                    return w("/general/v1/server_time", "GET");
                  }),
                ];
              });
            });
          },
        },
        auth: {
          register: function (t, e, n) {
            return (0, r.mG)(this, void 0, void 0, function () {
              return (0, r.Jh)(this, function (r) {
                return [
                  2,
                  v("c_getToken", { login_type: _.Ez.PHONE_SMS }, function () {
                    return (0, c.j)(function () {
                      return w("/user/auth/v1/register_by_phone_code", "POST", {
                        phone: t,
                        password: e,
                        code: n,
                      });
                    });
                  }),
                ];
              });
            });
          },
          loginByPhoneCode: function (t, e) {
            return (0, r.mG)(this, void 0, void 0, function () {
              return (0, r.Jh)(this, function (n) {
                return [
                  2,
                  v("c_getToken", { login_type: _.Ez.PHONE_SMS }, function () {
                    return (0, c.j)(function () {
                      return w("/user/auth/v1/token_by_phone_code", "POST", {
                        phone: t,
                        code: e,
                      });
                    });
                  }),
                ];
              });
            });
          },
          tokenByPhoneCode: function (t, e, n, i) {
            return (
              void 0 === i && (i = _.Ez.PHONE_SMS),
              (0, r.mG)(this, void 0, void 0, function () {
                return (0, r.Jh)(this, function (o) {
                  return [
                    2,
                    v("c_getToken", { login_type: i }, function () {
                      return (0, c.j)(function () {
                        return w(
                          "/user/auth/v2/token_by_phone_code",
                          "POST",
                          (0, r.pi)(
                            { phone: t, code: e },
                            n ? { appCode: n } : {}
                          )
                        );
                      });
                    }),
                  ];
                });
              })
            );
          },
          loginByPhonePassword: function (t, e) {
            return (0, r.mG)(this, void 0, void 0, function () {
              return (0, r.Jh)(this, function (n) {
                return [
                  2,
                  v("c_getToken", { login_type: _.Ez.PASSWORD }, function () {
                    return (0, c.j)(function () {
                      return w(
                        "/user/auth/v1/token_by_phone_password",
                        "POST",
                        { phone: t, password: e }
                      );
                    });
                  }),
                ];
              });
            });
          },
          loginByEmail: function (t, e) {
            return (0, r.mG)(this, void 0, void 0, function () {
              return (0, r.Jh)(this, function (t) {
                return [
                  2,
                  (0, c.j)(function () {
                    throw new c.w({
                      status: 400,
                      data: {
                        status: -1,
                        msg: "已不支持邮箱密码登录，请您切换其他方式登录",
                      },
                    });
                  }),
                ];
              });
            });
          },
          tokenByScanCode: function (t, e, n) {
            return (
              void 0 === n && (n = _.Ez.SCAN),
              (0, r.mG)(this, void 0, void 0, function () {
                return (0, r.Jh)(this, function (i) {
                  return [
                    2,
                    v("c_getToken", { login_type: n }, function () {
                      return (0, c.j)(function () {
                        return w(
                          "/user/auth/v1/token_by_scan_code",
                          "POST",
                          (0, r.pi)({ scanCode: t }, e ? { appCode: e } : {})
                        );
                      });
                    }),
                  ];
                });
              })
            );
          },
          tokenByExchangeCode: function (t) {
            return (0, r.mG)(this, void 0, void 0, function () {
              return (0, r.Jh)(this, function (e) {
                return [
                  2,
                  (0, c.j)(function () {
                    return w("/user/auth/v1/token_by_exchange_code", "POST", {
                      code: t,
                    });
                  }),
                ];
              });
            });
          },
        },
        user: {
          getToken: function () {
            return (0, r.mG)(this, void 0, void 0, function () {
              return (0, r.Jh)(this, function (t) {
                return [
                  2,
                  v("c_getToken", {}, function () {
                    return (0, c.j)(function () {
                      return w("/user/info/v1/token_by_cookie", "GET", {});
                    });
                  }),
                ];
              });
            });
          },
          logout: function (t) {
            return (0, r.mG)(this, void 0, void 0, function () {
              return (0, r.Jh)(this, function (t) {
                return (
                  u.x.clear(),
                  l.t.getInstanceAsync().then(function (t) {
                    return t.unsetUser();
                  }),
                  [2, { result: !0, status: 0, msg: "" }]
                );
              });
            });
          },
          sendSMS: function (t, e) {
            return (0, r.mG)(this, void 0, void 0, function () {
              return (0, r.Jh)(this, function (n) {
                return [
                  2,
                  g("c_sendPhoneCode", { send_type: m(t) }, function () {
                    return (0, c.j)(function () {
                      return w(
                        "/user/info/v1/send_phone_code",
                        "POST",
                        (0, r.pi)((0, r.pi)({}, e ? { token: e } : {}), {
                          type: t,
                        })
                      );
                    });
                  }),
                ];
              });
            });
          },
          getInfo: function (t) {
            var e, n, i;
            return (0, r.mG)(this, void 0, void 0, function () {
              var o;
              return (0, r.Jh)(this, function (a) {
                switch (a.label) {
                  case 0:
                    return [
                      4,
                      g("c_basic", {}, function () {
                        return (0, c.j)(function () {
                          return w(
                            "/user/info/v1/basic",
                            "GET",
                            (0, r.pi)({}, t ? { token: t } : {})
                          );
                        });
                      }),
                    ];
                  case 1:
                    return (
                      (o = a.sent()).result &&
                        (null === (e = o.data) || void 0 === e
                          ? void 0
                          : e.hgId) &&
                        u.x.getCache() !== o.data.hgId &&
                        (u.x.saveCache(o.data.hgId),
                        null === (n = l.t.instance) ||
                          void 0 === n ||
                          n.userLoginEvent(o.data.hgId, {})),
                      o.result &&
                        (null === (i = o.data) || void 0 === i
                          ? void 0
                          : i.hgId) &&
                        (0, _.Xb)({ hypergryphId: o.data.hgId }),
                      [2, o]
                    );
                }
              });
            });
          },
          grant: function (t, e, n, i, o) {
            var a;
            return (
              void 0 === e && (e = 1),
              (0, r.mG)(this, void 0, void 0, function () {
                var s;
                return (0, r.Jh)(this, function (u) {
                  switch (u.label) {
                    case 0:
                      return [
                        4,
                        g("c_grant", {}, function () {
                          return (0, c.j)(function () {
                            return w(
                              "/user/oauth2/v2/grant",
                              "POST",
                              (0, r.pi)(
                                (0, r.pi)(
                                  (0, r.pi)({}, n ? { token: n } : {}),
                                  { appCode: t, type: e }
                                ),
                                0 === e && i ? { deviceToken: i } : {}
                              ),
                              {
                                skipCaptcha: null == o ? void 0 : o.skipCaptcha,
                              }
                            );
                          });
                        }),
                      ];
                    case 1:
                      return (
                        (s = u.sent()).result &&
                          (null === (a = s.data) || void 0 === a
                            ? void 0
                            : a.uid) &&
                          (0, _.Xb)({ openId: s.data.uid }),
                        [2, s]
                      );
                  }
                });
              })
            );
          },
          grantInfo: function (t, e) {
            return (0, r.mG)(this, void 0, void 0, function () {
              return (0, r.Jh)(this, function (n) {
                return [
                  2,
                  (0, c.j)(function () {
                    return w(
                      "/user/oauth2/v1/grant_info",
                      "GET",
                      (0, r.pi)((0, r.pi)({}, e ? { token: e } : {}), {
                        appCode: t,
                      })
                    );
                  }),
                ];
              });
            });
          },
          cancelUnbindGrant: function (t, e) {
            return (0, r.mG)(this, void 0, void 0, function () {
              return (0, r.Jh)(this, function (n) {
                return [
                  2,
                  g("c_cancelUnbindGrant", {}, function () {
                    return (0, c.j)(function () {
                      return w(
                        "/user/oauth2/v1/cancel_unbind_grant",
                        "POST",
                        (0, r.pi)((0, r.pi)({}, e ? { token: e } : {}), {
                          appCode: t,
                        })
                      );
                    });
                  }),
                ];
              });
            });
          },
          cancelDeactivate: function (t) {
            return (0, r.mG)(this, void 0, void 0, function () {
              return (0, r.Jh)(this, function (e) {
                return [
                  2,
                  g("c_cancelUnbind", {}, function () {
                    return (0, c.j)(function () {
                      return w(
                        "/user/info/v1/cancel_deactivate",
                        "POST",
                        (0, r.pi)({}, t ? { token: t } : {})
                      );
                    });
                  }),
                ];
              });
            });
          },
          couldChangePhone: function (t) {
            return (0, r.mG)(this, void 0, void 0, function () {
              return (0, r.Jh)(this, function (e) {
                return [
                  2,
                  (0, c.j)(function () {
                    return w(
                      "/user/info/v1/can_change_phone",
                      "POST",
                      (0, r.pi)({}, t ? { token: t } : {})
                    );
                  }),
                ];
              });
            });
          },
          changePhone: function (t, e, n, i) {
            return (0, r.mG)(this, void 0, void 0, function () {
              return (0, r.Jh)(this, function (o) {
                return [
                  2,
                  (0, c.j)(function () {
                    return w(
                      "/user/info/v1/change_phone",
                      "POST",
                      (0, r.pi)((0, r.pi)({}, i ? { token: i } : {}), {
                        phoneCode: n,
                        newPhone: t,
                        newPhoneCode: e,
                      })
                    );
                  }),
                ];
              });
            });
          },
          changePassword: function (t, e, n) {
            return (0, r.mG)(this, void 0, void 0, function () {
              return (0, r.Jh)(this, function (i) {
                return [
                  2,
                  (0, c.j)(function () {
                    return w(
                      "/user/info/v1/change_password",
                      "POST",
                      (0, r.pi)((0, r.pi)({}, n ? { token: n } : {}), {
                        phoneCode: e,
                        newPassword: t,
                      })
                    );
                  }),
                ];
              });
            });
          },
          bindEmail: function (t, e, n, i) {
            return (0, r.mG)(this, void 0, void 0, function () {
              return (0, r.Jh)(this, function (o) {
                return [
                  2,
                  (0, c.j)(function () {
                    return w(
                      "/user/info/v1/bind_email",
                      "POST",
                      (0, r.pi)((0, r.pi)({}, i ? { token: i } : {}), {
                        phoneCode: n,
                        email: t,
                        emailCode: e,
                      })
                    );
                  }),
                ];
              });
            });
          },
          updateAgreement: function (t) {
            return (0, r.mG)(this, void 0, void 0, function () {
              return (0, r.Jh)(this, function (e) {
                return [
                  2,
                  g("c_updateAgreement", {}, function () {
                    return (0, c.j)(function () {
                      return w(
                        "/user/info/v1/update_agreement",
                        "POST",
                        (0, r.pi)({}, t ? { token: t } : {})
                      );
                    });
                  }),
                ];
              });
            });
          },
          resetOtherToken: function (t) {
            return (0, r.mG)(this, void 0, void 0, function () {
              return (0, r.Jh)(this, function (e) {
                return [
                  2,
                  (0, c.j)(function () {
                    return w(
                      "/user/info/v1/reset_other_token",
                      "POST",
                      (0, r.pi)({}, t ? { token: t } : {})
                    );
                  }),
                ];
              });
            });
          },
          queryOrder: function (t) {
            return (0, r.mG)(this, void 0, void 0, function () {
              return (0, r.Jh)(this, function (e) {
                return [
                  2,
                  (0, c.j)(function () {
                    return w(
                      "/user/pay/v1/query_order",
                      "GET",
                      (0, r.pi)({}, t ? { token: t } : {})
                    );
                  }),
                ];
              });
            });
          },
          authenticate: function (t, e, n) {
            return (0, r.mG)(this, void 0, void 0, function () {
              return (0, r.Jh)(this, function (i) {
                return [
                  2,
                  g("c_authenticate", {}, function () {
                    return (0, c.j)(function () {
                      return w(
                        "/user/info/v1/authenticate",
                        "POST",
                        (0, r.pi)((0, r.pi)({}, n ? { token: n } : {}), {
                          name: t,
                          idCardNum: e,
                        })
                      );
                    });
                  }),
                ];
              });
            });
          },
          deviceTokenByPhone: function (t, e, n) {
            return (0, r.mG)(this, void 0, void 0, function () {
              return (0, r.Jh)(this, function (i) {
                return [
                  2,
                  g("c_deviceVerify", {}, function () {
                    return (0, c.j)(function () {
                      return w(
                        "/user/info/v1/device_token_by_phone",
                        "POST",
                        (0, r.pi)((0, r.pi)({}, n ? { token: n } : {}), {
                          code: t,
                          appCode: e,
                        })
                      );
                    });
                  }),
                ];
              });
            });
          },
          exchangeCodeByToken: function (t, e) {
            return (
              void 0 === e && (e = "web"),
              (0, r.mG)(this, void 0, void 0, function () {
                return (0, r.Jh)(this, function (n) {
                  return [
                    2,
                    (0, c.j)(function () {
                      return w("/user/info/v1/exchange_code_by_token", "POST", {
                        token: t,
                        source: e,
                      });
                    }),
                  ];
                });
              })
            );
          },
        },
        app: {
          getConfig: function (t) {
            return (0, r.mG)(this, void 0, void 0, function () {
              return (0, r.Jh)(this, function (e) {
                return [
                  2,
                  v("c_config", {}, function () {
                    return (0, c.j)(function () {
                      return w("/app/v1/config", "GET", {
                        appCode: t,
                        platform: 7,
                      });
                    });
                  }),
                ];
              });
            });
          },
        },
        online: {
          loginout: function (t, e, n) {
            return (0, r.mG)(this, void 0, void 0, function () {
              return (0, r.Jh)(this, function (i) {
                switch (i.label) {
                  case 0:
                    return (
                      i.trys.push([0, 2, , 3]),
                      [
                        4,
                        w(
                          "/user/online/v1/loginout",
                          "POST",
                          (0, r.pi)((0, r.pi)({}, n ? { token: n } : {}), {
                            appCode: t,
                            type: e,
                          })
                        ),
                      ]
                    );
                  case 1:
                    return i.sent(), [3, 3];
                  case 2:
                    return i.sent(), [3, 3];
                  case 3:
                    return [2];
                }
              });
            });
          },
        },
      };
    },
    7348: function (t, e, n) {
      "use strict";
      n.d(e, {
        j: function () {
          return o;
        },
        w: function () {
          return i;
        },
      });
      var r = n(655),
        i = (function (t) {
          function e(n) {
            var r = n.status,
              i = void 0 === r ? 200 : r,
              o = n.data,
              a = t.call(this, o.msg || o.message) || this;
            return (a.type = e.type), (a.status = i), (a.data = o), a;
          }
          return (0, r.ZT)(e, t), (e.type = "accountError"), e;
        })(Error);
      function o(t) {
        var e, n, i, o, a;
        return (0, r.mG)(this, void 0, void 0, function () {
          var s, c, u;
          return (0, r.Jh)(this, function (l) {
            switch (l.label) {
              case 0:
                return l.trys.push([0, 2, , 3]), [4, t()];
              case 1:
                return (
                  (s = l.sent()),
                  [2, (0, r.pi)((0, r.pi)({}, s), { result: !0 })]
                );
              case 2:
                return (
                  (c = l.sent()),
                  (u = c),
                  [
                    2,
                    (0, r.pi)(
                      (0, r.pi)({}, (null == u ? void 0 : u.data) || {}),
                      {
                        statusCode: u.status,
                        msg:
                          null !==
                            (o =
                              null !==
                                (n =
                                  null === (e = null == u ? void 0 : u.data) ||
                                  void 0 === e
                                    ? void 0
                                    : e.msg) && void 0 !== n
                                ? n
                                : null === (i = null == u ? void 0 : u.data) ||
                                  void 0 === i
                                ? void 0
                                : i.message) && void 0 !== o
                            ? o
                            : "网络异常",
                        type: void 0,
                        msgType:
                          null === (a = null == u ? void 0 : u.data) ||
                          void 0 === a
                            ? void 0
                            : a.type,
                        result: !1,
                      }
                    ),
                  ]
                );
              case 3:
                return [2];
            }
          });
        });
      }
    },
    6433: function (t, e, n) {
      "use strict";
      n.d(e, {
        q: function () {
          return l;
        },
      });
      var r = n(655),
        i = n(4954),
        o = n.n(i),
        a = (function (t) {
          function e(n) {
            var r = n.status,
              i = void 0 === r ? 200 : r,
              o = n.data,
              a =
                t.call(
                  this,
                  (null == o ? void 0 : o.msg) ||
                    (null == o ? void 0 : o.message)
                ) || this;
            return (a.type = e.type), (a.status = i), (a.data = o), a;
          }
          return (0, r.ZT)(e, t), (e.type = "accountInfoError"), e;
        })(Error);
      function s(t) {
        var e, n;
        return (0, r.mG)(this, void 0, void 0, function () {
          var i, o, a;
          return (0, r.Jh)(this, function (s) {
            switch (s.label) {
              case 0:
                return s.trys.push([0, 2, , 3]), [4, t()];
              case 1:
                return (
                  (i = s.sent()),
                  [2, (0, r.pi)((0, r.pi)({}, i), { result: !0 })]
                );
              case 2:
                return (
                  (o = s.sent()),
                  (a = o),
                  [
                    2,
                    (0, r.pi)(
                      (0, r.pi)({}, (null == a ? void 0 : a.data) || {}),
                      {
                        statusCode: a.status,
                        msg:
                          (null === (e = null == a ? void 0 : a.data) ||
                          void 0 === e
                            ? void 0
                            : e.message) ||
                          (null === (n = null == a ? void 0 : a.data) ||
                          void 0 === n
                            ? void 0
                            : n.msg) ||
                          "网络异常",
                        result: !1,
                      }
                    ),
                  ]
                );
              case 3:
                return [2];
            }
          });
        });
      }
      var c = n(7902);
      function u(t, e, n) {
        return (
          void 0 === e && (e = void 0),
          void 0 === n && (n = "GET"),
          (0, r.mG)(this, void 0, void 0, function () {
            var i, s, u;
            return (0, r.Jh)(this, function (r) {
              switch (r.label) {
                case 0:
                  return (
                    r.trys.push([0, 2, , 3]),
                    [
                      4,
                      o().request(t, e, {
                        timeout: 1e4,
                        baseURL: c.h.apiServer.getHost(),
                        method: n,
                        withCredentials: !0,
                        responseType: "json",
                      }),
                    ]
                  );
                case 1:
                  if (0 === (i = r.sent()).data.code) return [2, i.data];
                  throw new a(i);
                case 2:
                  if (((s = r.sent()), (u = s).type === a.type)) throw u;
                  if (u.status && u.response)
                    throw new a({ status: u.status, data: u.response.data });
                  throw u;
                case 3:
                  return [2];
              }
            });
          })
        );
      }
      var l = {
        get: function (t) {
          return (0, r.mG)(void 0, void 0, void 0, function () {
            return (0, r.Jh)(this, function (e) {
              return [
                2,
                s(function () {
                  return u(
                    "/account/info/".concat(t || "", "/check"),
                    void 0,
                    "POST"
                  );
                }),
              ];
            });
          });
        },
        set: function (t, e) {
          return (0, r.mG)(void 0, void 0, void 0, function () {
            return (0, r.Jh)(this, function (n) {
              return [
                2,
                s(function () {
                  return u("/account/info/".concat(e || ""), t, "POST");
                }),
              ];
            });
          });
        },
        clear: function (t) {
          return (0, r.mG)(void 0, void 0, void 0, function () {
            return (0, r.Jh)(this, function (e) {
              return [
                2,
                s(function () {
                  return u("/account/info/".concat(t || ""), void 0, "DELETE");
                }),
              ];
            });
          });
        },
      };
    },
    1370: function (t, e, n) {
      "use strict";
      n.d(e, {
        H: function () {
          return o;
        },
        Y: function () {
          return a;
        },
      });
      var r = n(655),
        i = n(4459);
      function o(t, e) {
        void 0 === e && (e = {});
        var n = performance.now();
        return (0, i.LN)(t, e), n;
      }
      function a(t, e, n) {
        void 0 === e && (e = {});
        var o = (0, r.pi)({}, e);
        "number" == typeof n &&
          (o.request_time = Math.round(100 * (performance.now() - n)) / 100),
          (0, i.LN)(t, o);
      }
    },
    3930: function (t, e, n) {
      "use strict";
      n.d(e, {
        k: function () {
          return s;
        },
      });
      var r = n(655),
        i = n(9412),
        o = 1e3,
        a = !1;
      function s(t) {
        if (a) return !0;
        if ((0, i.getSavedOptions)(i.SDK_TYPE.WEB)) return (a = !0), !0;
        var e = (0, r.pi)({ sendTime: o }, t);
        return !!(0, i.initWebJSWithConfig)(e) && ((a = !0), !0);
      }
    },
    4459: function (t, e, n) {
      "use strict";
      n.d(e, {
        Ez: function () {
          return m;
        },
        Cy: function () {
          return k;
        },
        b7: function () {
          return v;
        },
        HX: function () {
          return E;
        },
        q8: function () {
          return w;
        },
        KD: function () {
          return _;
        },
        LN: function () {
          return g;
        },
        xf: function () {
          return y;
        },
        mQ: function () {
          return x;
        },
        Xb: function () {
          return p;
        },
      });
      var r = n(655),
        i = n(9412),
        o = n(3555),
        a = n(2005),
        s = n(6197),
        c = n(3930),
        u = "hg_sdk_track_id";
      var l = null;
      function d() {
        if (l) return l;
        var t = (function (t) {
          if ("undefined" == typeof document) return null;
          var e = document.cookie.match(
            new RegExp("(?:^|;\\s*)".concat(t, "=([^;]*)"))
          );
          return e ? decodeURIComponent(e[1]) : null;
        })(u);
        return (
          t ||
            ((t = (function () {
              if (
                "undefined" != typeof crypto &&
                "function" == typeof crypto.randomUUID
              )
                return crypto.randomUUID();
              for (var t = "", e = 0; e < 32; e++)
                t += Math.floor(36 * Math.random()).toString(36);
              return t;
            })()),
            (function (t, e) {
              if ("undefined" != typeof document) {
                var n =
                  "undefined" != typeof location &&
                  "https:" === location.protocol
                    ? "; Secure"
                    : "";
                document.cookie = ""
                  .concat(t, "=")
                  .concat(encodeURIComponent(e), "; Path=/; SameSite=Lax")
                  .concat(n);
              }
            })(u, t)),
          (l = t),
          t
        );
      }
      var h = "zh-cn",
        f = null;
      function _() {
        var t;
        if (f) return f.instance;
        var e = {
          appId: "neUOhxcw2rIx8pkUYdWUoRSC",
          regionTag: "cn",
          environment: "prod",
        };
        if (!(null == e ? void 0 : e.appId))
          return (
            console.warn("[HG-WEB-SDK] sdkAnalytics.appId not configured"), null
          );
        if (
          !(0, c.k)({
            regionTag: e.regionTag || "cn",
            enableAdTrack: !1,
            routeChange: "history",
          })
        )
          return console.warn("[HG-WEB-SDK] sdkAnalytics init failed"), null;
        var n = (0, i.getInstance)(e.appId);
        return (
          (f = { appId: e.appId, instance: n, hypergryphId: "", openId: "" }),
          null === (t = n.setPageProperties) ||
            void 0 === t ||
            t.call(n, {
              sdk_vn: "2.19.0",
              sdk_track_id: d(),
              environment: e.environment || "",
              language: h,
              device_id: (0, a.Zw)(),
            }),
          n
        );
      }
      function p(t) {
        f &&
          ("string" == typeof t.hypergryphId &&
            (f.hypergryphId = t.hypergryphId),
          "string" == typeof t.openId && (f.openId = t.openId));
      }
      function v() {
        f && ((f.hypergryphId = ""), (f.openId = ""));
      }
      function g(t, e) {
        if ((void 0 === e && (e = {}), f))
          try {
            var n = (0, r.pi)({ skin: s.T.skin }, e),
              i = (0, o.VK)();
            i && (n.appid = i),
              f.hypergryphId && (n.hypergryph_id = f.hypergryphId),
              f.openId && (n.open_id = f.openId),
              f.instance.event(t, n);
          } catch (t) {
            console.warn("[HG-WEB-SDK] sdkAnalytics event failed", t);
          }
      }
      var m = {
          PHONE_SMS: 1,
          PASSWORD: 2,
          QUICK: 3,
          URL_TOKEN: 4,
          URL_CODE: 5,
          SCAN: 6,
        },
        b = null;
      function y(t) {
        b = t;
      }
      function w() {
        return b;
      }
      function k() {
        b = null;
      }
      var C = null;
      function x(t) {
        C = t;
      }
      function E() {
        return null != C ? C : b;
      }
    },
    5318: function (t, e, n) {
      "use strict";
      n.d(e, {
        i: function () {
          return s;
        },
        lq: function () {
          return c;
        },
        pV: function () {
          return o;
        },
        rM: function () {
          return a;
        },
      });
      var r = n(4459),
        i = "";
      function o(t) {
        (0, r.LN)("page_open", { page: t, from_page: i }), (i = t);
      }
      function a(t) {
        (0, r.LN)("page_close", { page: t }), i === t && (i = "");
      }
      function s(t) {
        (0, r.LN)("page_submit", { page: t });
      }
      function c(t) {
        (0, r.LN)(t);
      }
    },
    1890: function (t, e, n) {
      "use strict";
      n.d(e, {
        nW: function () {
          return r;
        },
        Bs: function () {
          return g;
        },
        XN: function () {
          return v;
        },
      });
      var r,
        i = n(655),
        o = n(8836),
        a = n(4712),
        s = n(8287),
        c = n(635),
        u = n(4459),
        l = n(6400),
        d = n(3131),
        h = n(8633),
        f = new d.u();
      function _(t) {
        f.show(
          (0, l.h)(h.g$, {
            active: !0,
            onConfirm: function () {
              f.close(), t();
            },
          })
        );
      }
      function p(t) {
        var e = {},
          n = (0, u.q8)();
        null !== n && (e.login_type = n), (0, u.LN)(t, e);
      }
      !(function (t) {
        (t[(t.CLOSED = 0)] = "CLOSED"),
          (t[(t.OPENED = 1)] = "OPENED"),
          (t[(t.STARTED = 2)] = "STARTED"),
          (t[(t.PAUSED = 3)] = "PAUSED");
      })(r || (r = {}));
      var v = new ((function () {
          function t() {
            (this.state = r.CLOSED),
              (this.timer = null),
              (this.appConfig = null),
              (this.userInfo = null),
              (this.appCode = ""),
              (this.showCurfewUI = null),
              (this.checking = !1);
          }
          return (
            (t.prototype.open = function (t, e, n) {
              this.clearTimer(),
                (this.appConfig = t),
                (this.userInfo = e),
                (this.appCode = n),
                (this.state = r.OPENED);
            }),
            (t.prototype.close = function () {
              this.clearTimer(),
                (this.state = r.CLOSED),
                (this.appConfig = null),
                (this.userInfo = null),
                (this.appCode = "");
            }),
            (t.prototype.start = function () {
              (this.state !== r.OPENED && this.state !== r.PAUSED) ||
                ((this.state = r.STARTED),
                this.startTimer(),
                this.reportLoginout(1),
                p("c_antiAddiction_start"));
            }),
            (t.prototype.pause = function () {
              this.state === r.STARTED &&
                (this.clearTimer(),
                (this.state = r.PAUSED),
                this.reportLoginout(0),
                p("c_antiAddiction_pause"));
            }),
            (t.prototype.reportLoginout = function (t) {
              var e;
              return (0, i.mG)(this, void 0, void 0, function () {
                var n, r;
                return (0, i.Jh)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      return i.trys.push([0, 2, , 3]), [4, (0, c.LP)()];
                    case 1:
                      return (
                        (n = i.sent()),
                        (r = n.result
                          ? null === (e = n.data) || void 0 === e
                            ? void 0
                            : e.token
                          : void 0),
                        o.ej.online.loginout(this.appCode, t, r),
                        [3, 3]
                      );
                    case 2:
                      return i.sent(), [3, 3];
                    case 3:
                      return [2];
                  }
                });
              });
            }),
            (t.prototype.getState = function () {
              return this.state;
            }),
            (t.prototype.setShowCurfewUI = function (t) {
              this.showCurfewUI = t;
            }),
            (t.prototype.startTimer = function () {
              var t = this;
              this.clearTimer(),
                (this.timer = window.setInterval(function () {
                  return t.check();
                }, 5e3));
            }),
            (t.prototype.clearTimer = function () {
              null !== this.timer &&
                (window.clearInterval(this.timer), (this.timer = null));
            }),
            (t.prototype.check = function () {
              var t, e, n, o, c;
              return (0, i.mG)(this, void 0, void 0, function () {
                var u,
                  l = this;
                return (0, i.Jh)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      if (this.state !== r.STARTED || this.checking) return [2];
                      (this.checking = !0), (i.label = 1);
                    case 1:
                      return (
                        i.trys.push([1, , 5, 6]),
                        s.Y.hasFetched() ? [3, 3] : [4, s.Y.ensureAvailable()]
                      );
                    case 2:
                      return i.sent(), [3, 4];
                    case 3:
                      s.Y.tryRefresh(), (i.label = 4);
                    case 4:
                      return this.state !== r.STARTED
                        ? [2]
                        : (null ===
                            (e =
                              null === (t = this.appConfig) || void 0 === t
                                ? void 0
                                : t.app) || void 0 === e
                            ? void 0
                            : e.enableAntiAddiction) &&
                          (null === (n = this.userInfo) || void 0 === n
                            ? void 0
                            : n.isMinor) &&
                          (u = s.Y.now()) &&
                          (0, a.f)(
                            u,
                            s.Y.getIsHoliday(),
                            this.appConfig.antiAddiction
                          )
                        ? (this.clearTimer(),
                          (
                            null === (o = this.appConfig.app) || void 0 === o
                              ? void 0
                              : o.needAntiAddictionAlert
                          )
                            ? (null !== (c = this.showCurfewUI) && void 0 !== c
                                ? c
                                : _)(function () {
                                return l.executeCurfewLogout();
                              })
                            : this.executeCurfewLogout(),
                          [3, 6])
                        : [2];
                    case 5:
                      return (this.checking = !1), [7];
                    case 6:
                      return [2];
                  }
                });
              });
            }),
            (t.prototype.executeCurfewLogout = function () {
              return (0, i.mG)(this, void 0, void 0, function () {
                return (0, i.Jh)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (
                        t.trys.push([0, 2, , 3]),
                        [4, (0, c.kS)(void 0, c.HW.ANTI_ADDICTION_CURFEW)]
                      );
                    case 1:
                      return t.sent(), [3, 3];
                    case 2:
                      return t.sent(), [3, 3];
                    case 3:
                      return [2];
                  }
                });
              });
            }),
            t
          );
        })())(),
        g = {
          start: function () {
            return v.start();
          },
          pause: function () {
            return v.pause();
          },
          getState: function () {
            return v.getState();
          },
        };
    },
    5478: function (t, e, n) {
      "use strict";
      n.d(e, {
        L: function () {
          return r;
        },
      });
      var r = {
        arknights: { "age-tip": n(6592), title: n(2673) },
        endfield: { "age-tip": n(399) },
        common: { "anti-fraud": n(563), policy: n(5652), report: n(9609) },
        favicon: n(6418),
        hypergryph: {
          copyright: n(6048),
          favicon: n(6758),
          icon: n(7452),
          logo: n(3051),
        },
        MONTAGNE: { copyright: n(2558) },
        NOUS_WAVE: { copyrightC: n(8537), copyrightC_oversea: n(8391) },
        MOUNTEN: { copyright: n(4732) },
        MONSTER_SIREN: { copyright: n(3122) },
        TERRA_HISTORICUS: { copyright: n(3025) },
      };
    },
    2045: function (t, e, n) {
      "use strict";
      n.d(e, {
        v: function () {
          return r;
        },
      });
      var r = {
        cancellationLink: "https://user.hypergryph.com/cancellation",
        loginProtocols: ["register", "privacy", "childrenPrivacy"],
        protocolMap: {
          register: {
            name: "用户注册协议",
            href: "https://user.hypergryph.com/protocol/registration",
          },
          privacy: {
            name: "个人信息保护政策",
            href: "https://user.hypergryph.com/protocol/privacy",
          },
          childrenPrivacy: {
            name: "儿童个人信息保护政策",
            href: "https://user.hypergryph.com/protocol/children_privacy",
          },
          overview_of_changes: {
            name: "更新概要",
            href: "https://user.hypergryph.com/protocol/overview_of_changes",
          },
        },
      };
    },
    9054: function (t, e, n) {
      "use strict";
      n.d(e, {
        I: function () {
          return r;
        },
      });
      var r = {
        REGISTER: 0,
        LOGIN: 1,
        LOGIN_OR_REGISTER: 2,
        DELETE_ACCOUNT: 3,
        DELETE_GAME_ACCOUNT: 4,
        DELETE_BBS_ACCOUNT: 5,
        VALIDATE: 100,
        CHANGE_PHONE: 101,
        RESET_PASSWORD: 102,
        OLD_CHANGE_PHONE: 103,
        DEVICE_CHECK: 6,
      };
    },
    4180: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          HG_SDK: function () {
            return un;
          },
        });
      var r = {};
      n.r(r),
        n.d(r, {
          U8_RSP_STATUS: function () {
            return Ft;
          },
          getRoleInfo: function () {
            return Bt;
          },
          getServerRoleList: function () {
            return Zt;
          },
          getU8Token: function () {
            return Mt;
          },
          grant: function () {
            return Gt;
          },
          tokenByChannelToken: function () {
            return Ut;
          },
        });
      var i = {};
      n.r(i),
        n.d(i, {
          authByAccount: function () {
            return Jt;
          },
          authByChannelCode: function () {
            return Vt;
          },
          getRoleInfo: function () {
            return Kt;
          },
          getServerRoleList: function () {
            return Wt;
          },
          grant: function () {
            return Yt;
          },
          tokenByOauth2Code: function () {
            return Xt;
          },
        });
      var o = {};
      n.r(o),
        n.d(o, {
          getActiveRole: function () {
            return ee;
          },
          getActiveRoleV2: function () {
            return ne;
          },
        });
      var a = {};
      n.r(a),
        n.d(a, {
          getDefaultAddress: function () {
            return oe;
          },
        });
      var s = {};
      n.r(s),
        n.d(s, {
          getGameConfig: function () {
            return mt.NI;
          },
          isSDKError: function () {
            return se;
          },
          isSafeSDKError: function () {
            return ce;
          },
        });
      var c = n(655),
        u = n(5478),
        l = n(7902),
        d = n(4954),
        h = n.n(d),
        f = n(2914);
      var _ = (function () {
          function t() {
            this.channels = {
              qq: {
                initialized: !1,
                update: function (t) {
                  var e = [
                      {
                        id: "hg-web-sdk-share-title",
                        itemProp: "name",
                        property: "og:title",
                        content: t.title,
                      },
                      {
                        id: "hg-web-sdk-share-url",
                        itemProp: "link",
                        property: "og:url",
                        content: t.link,
                      },
                      {
                        id: "hg-web-sdk-share-img",
                        itemProp: "image",
                        property: "og:image",
                        content: t.image,
                      },
                      {
                        id: "hg-web-sdk-share-desc",
                        itemProp: "description",
                        property: "og:description",
                        content: t.description,
                        name: "description",
                      },
                    ],
                    n = (0, c.ev)(
                      [],
                      (0, c.CR)(document.head.querySelectorAll("meta")),
                      !1
                    ).pop();
                  e.forEach(function (t) {
                    var e = t.id,
                      r = t.itemProp,
                      i = t.property,
                      o = t.content,
                      a = t.name,
                      s = document.getElementById(e);
                    s ||
                      (((s = document.createElement("meta")).id = e),
                      n
                        ? n.after
                          ? n.after(s)
                          : document.head.appendChild(s)
                        : document.head.insertBefore(
                            s,
                            document.head.firstChild
                          )),
                      s.setAttribute("itemProp", r || ""),
                      s.setAttribute("property", i || ""),
                      s.setAttribute("content", o || ""),
                      s.setAttribute("name", a || ""),
                      (n = s);
                  });
                },
              },
              wx: {
                initialized: !1,
                init: function (t) {
                  var e = this;
                  if (/MicroMessenger/i.test(navigator.userAgent)) {
                    var n = window.location.href,
                      r = document.createElement("script");
                    (r.src = "//res2.wx.qq.com/open/js/jweixin-1.6.0.js"),
                      (r.onload = function () {
                        window.requestAnimationFrame(function () {
                          h()
                            .get(
                              "".concat(
                                l.h.apiServer.getHost(),
                                "/wechat/register"
                              ),
                              { url: n }
                            )
                            .then(function (n) {
                              var r = n.data,
                                i = r.data,
                                o = r.code,
                                a = t.title,
                                s = t.description,
                                u = t.link,
                                l = t.image;
                              0 === o &&
                                (wx.config(
                                  (0, c.pi)(
                                    {
                                      jsApiList: [
                                        "updateAppMessageShareData",
                                        "updateTimelineShareData",
                                      ],
                                    },
                                    i
                                  )
                                ),
                                wx.ready(function () {
                                  wx.updateAppMessageShareData({
                                    title: a,
                                    desc: s,
                                    link: u,
                                    imgUrl: l,
                                  }),
                                    wx.updateTimelineShareData({
                                      title: a,
                                      link: u,
                                      imgUrl: l,
                                    }),
                                    (e.initialized = !0);
                                }));
                            })
                            .catch(f.ZT);
                        });
                      }),
                      (0, f.GH)(r);
                  }
                },
                update: function (t) {
                  var e;
                  if (this.initialized) {
                    var n = t.title,
                      r = t.description,
                      i = t.link,
                      o = t.image;
                    wx.updateAppMessageShareData({
                      title: n,
                      desc: r,
                      link: i,
                      imgUrl: o,
                    }),
                      wx.updateTimelineShareData({
                        title: n,
                        link: i,
                        imgUrl: o,
                      });
                  } else
                    null === (e = this.init) || void 0 === e || e.call(this, t);
                },
              },
            };
          }
          return (
            Object.defineProperty(t, "instance", {
              get: function () {
                return (
                  this._instance || (this._instance = new t()), this._instance
                );
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.setShareInfo = function (t) {
              var e = this,
                n = t.title,
                r = t.description,
                i = t.image,
                o = void 0 === i ? "" : i,
                a = t.link,
                s =
                  void 0 === a
                    ? (function () {
                        var t = window.location,
                          e = t.origin,
                          n = t.pathname;
                        return "".concat(e).concat(n);
                      })()
                    : a,
                c = t.channels,
                u = void 0 === c ? ["wx", "qq"] : c;
              "string" == typeof u
                ? this.instance.channels[u].update({
                    title: n,
                    description: r,
                    image: o,
                    link: s,
                  })
                : u.forEach(function (t) {
                    e.instance.channels[t].update({
                      title: n,
                      description: r,
                      image: o,
                      link: s,
                    });
                  });
            }),
            t
          );
        })(),
        p = function () {},
        v = n(76),
        g = n.n(v),
        m = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return (
              (n.eventEnable = !1),
              g().init({
                sid: (null == e ? void 0 : e.sid) || "500671152",
                cid: null == e ? void 0 : e.cid,
              }),
              (n.eventEnable = !!(null == e ? void 0 : e.cid)),
              (null == e ? void 0 : e.auto) && g().pgv(),
              n
            );
          }
          return (
            (0, c.ZT)(e, t),
            (e.prototype.event = function (t, e) {
              this.eventEnable
                ? g().clickStat(t, e)
                : console.debug("MTA: 未设置cid，未启用自定义事件");
            }),
            (e.prototype.share = function (t) {
              this.eventEnable
                ? g().clickShare(t)
                : console.debug("MTA: 未设置cid，未启用自定义事件");
            }),
            e
          );
        })(p),
        b = (function (t) {
          function e(e) {
            var n = t.call(this) || this,
              r = (null == e ? void 0 : e.AppID) || "UA-104548031-3";
            (window.dataLayer = window.dataLayer || []),
              (n.dataLayer = window.dataLayer),
              (window.gtag = n.gtag.bind(n)),
              n.gtag("js", new Date()),
              n.gtag("config", r);
            var i = document.createElement("script");
            return (
              i.setAttribute("async", "true"),
              i.setAttribute(
                "src",
                "https://www.googletagmanager.com/gtag/js?id=".concat(r)
              ),
              (0, f.GH)(i),
              n
            );
          }
          return (
            (0, c.ZT)(e, t),
            (e.prototype.gtag = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              this.dataLayer.push(arguments);
            }),
            (e.prototype.event = function (t, e) {
              this.gtag("event", t, e);
            }),
            (e.prototype.share = function (t) {
              this.gtag("event", "share", t);
            }),
            e
          );
        })(p),
        y = b,
        w = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return (
              (n.analyticsInstances = []),
              e.mta &&
                n.analyticsInstances.push(
                  new m("boolean" == typeof e.mta ? void 0 : e.mta)
                ),
              e.gTag &&
                n.analyticsInstances.push(
                  new y("boolean" == typeof e.gTag ? void 0 : e.gTag)
                ),
              n
            );
          }
          return (
            (0, c.ZT)(e, t),
            (e.create = function (t) {
              return this._instance
                ? (console.warn(
                    "[HG-WEB-SDK] Analytics instance already created."
                  ),
                  this._instance)
                : ((this._instance = new e(t)), this._instance);
            }),
            Object.defineProperty(e, "instance", {
              get: function () {
                return this._instance;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.event = function (t, e) {
              this.analyticsInstances.forEach(function (n) {
                n.event(t, e);
              });
            }),
            (e.prototype.share = function (t) {
              this.analyticsInstances.forEach(function (e) {
                e.share(t);
              });
            }),
            e
          );
        })(p),
        k = function (t) {
          return w.create(t);
        };
      k.get = function () {
        return w.instance;
      };
      var C = k,
        x = n(635),
        E = n(8491),
        L = n(9923),
        S = n(8836),
        T = 0,
        A = 1,
        I = 2,
        O = 3,
        D = 4,
        N = function (t, e) {
          return (
            void 0 === e && (e = f.ZT),
            (0, c.mG)(void 0, void 0, void 0, function () {
              return (0, c.Jh)(this, function (r) {
                switch (r.label) {
                  case 0:
                    return [4, n.e(901).then(n.bind(n, 4901))];
                  case 1:
                    return (
                      (0, r.sent().showLoginDialog)({
                        oauth: t.oauth,
                        envApp: t.envApp,
                        onSuccess: function (t) {
                          e(T, { hgInfo: t.hgInfo, oauthInfo: t.oauthInfo }),
                            L.t.event("user_login");
                        },
                        onCancel: function () {
                          e(I);
                        },
                        onFail: function () {
                          e(A);
                        },
                      }),
                      [2]
                    );
                }
              });
            })
          );
        },
        R = "HYPERGRYPH_LOGIN_DIALOG",
        z = (function () {
          function t() {
            var t = this;
            (this.container = null),
              (this.initialized = !1),
              (this.loginCallbacks = []),
              (this.show = function () {
                N({}, function (e) {
                  0 === e && t.logged();
                });
              }),
              (this.logged = function () {
                var e, n;
                try {
                  for (
                    var r = (0, c.XA)(t.loginCallbacks), i = r.next();
                    !i.done;
                    i = r.next()
                  ) {
                    (0, i.value)();
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    i && !i.done && (n = r.return) && n.call(r);
                  } finally {
                    if (e) throw e.error;
                  }
                }
                t.hide();
              }),
              (this.hide = function () {});
          }
          return (
            (t.prototype.init = function (t) {
              var e;
              return (
                void 0 === t && (t = {}),
                this.initialized ||
                  (t.container
                    ? (this.container = t.container)
                    : ((this.container = document.createElement("div")),
                      (this.container.id = R),
                      this.container.classList.add(E.jX),
                      (this.container.style.position = "absolute"),
                      (this.container.style.zIndex =
                        (null === (e = t.zIndex) || void 0 === e
                          ? void 0
                          : e.toString()) || "999"))),
                this
              );
            }),
            (t.prototype.initAsync = function (t) {
              return (
                void 0 === t && (t = {}),
                (0, c.mG)(this, void 0, void 0, function () {
                  var e = this;
                  return (0, c.Jh)(this, function (n) {
                    return [
                      2,
                      new Promise(function (n) {
                        var r;
                        e.initialized ||
                          (t.container
                            ? (e.container = t.container)
                            : ((e.container = document.createElement("div")),
                              (e.container.id = R),
                              (e.container.style.position = "absolute"),
                              (e.container.style.zIndex =
                                (null === (r = t.zIndex) || void 0 === r
                                  ? void 0
                                  : r.toString()) || "999")),
                          (e.initialized = !0)),
                          n();
                      }),
                    ];
                  });
                })
              );
            }),
            (t.prototype.onLogin = function (t) {
              return (
                this.loginCallbacks.indexOf(t) < 0 &&
                  this.loginCallbacks.push(t),
                this
              );
            }),
            (t.prototype.offLogin = function (t) {
              var e = this.loginCallbacks.indexOf(t);
              return e >= 0 && this.loginCallbacks.splice(e, 1), this;
            }),
            t
          );
        })(),
        P = new z(),
        j = n(7091),
        F = n.n(j),
        H = new URL(n(7452), n.b),
        M =
          '<div class="hg-logout-dialog"> <div class="hg-logout-dialog-mask"></div> <div class="hg-logout-dialog-layer"> <div class="hg-logout-dialog-layer-title"> <img src="' +
          F()(H) +
          '" alt="HG_LOGO"/> <div class="title-content">HYPERGRYPH<br/>ACCOUNT.</div> </div> <div class="hg-logout-dialog-layer-body"> <div class="hg-logout-info"> 您确认要登出现在的账号吗？ </div> <div class="hg-logout-dialog-layer-footer"> <button class="hg-logout-dialog-btn size-lg submit" type="submit"> 确认 </button> <button class="hg-logout-dialog-btn size-lg cancel" type="button"> 取消 </button> </div> </div> </div> </div>',
        U = (function () {
          function t() {
            var t = this;
            (this.container = null),
              (this.initialized = !1),
              (this.onSubmit = function () {
                return (0, c.mG)(t, void 0, void 0, function () {
                  return (0, c.Jh)(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [4, ot.logout()];
                      case 1:
                        return t.sent(), this.hide(), [2];
                    }
                  });
                });
              }),
              (this.show = function () {
                var e, n;
                null ===
                  (n =
                    null === (e = t.container) || void 0 === e
                      ? void 0
                      : e.firstElementChild) ||
                  void 0 === n ||
                  n.setAttribute("active", "true");
              }),
              (this.logged = function (e) {
                void 0 === e && (e = x.HW.MANUAL), (0, x.NP)(e), t.hide();
              }),
              (this.hide = function () {
                var e, n;
                null ===
                  (n =
                    null === (e = t.container) || void 0 === e
                      ? void 0
                      : e.firstElementChild) ||
                  void 0 === n ||
                  n.setAttribute("active", "false");
              });
          }
          return (
            (t.prototype.init = function (t) {
              var e;
              return (
                void 0 === t && (t = {}),
                n.e(616).then(n.bind(n, 9616)),
                (this.container = document.createElement("div")),
                (this.container.id = "HYPERGRYPH_LOGOUT_DIALOG"),
                (this.container.style.position = "absolute"),
                (this.container.style.zIndex =
                  (null === (e = t.zIndex) || void 0 === e
                    ? void 0
                    : e.toString()) || "999"),
                (this.container.innerHTML = M),
                document.body.appendChild(this.container),
                this.initEvent(),
                (this.initialized = !0),
                this
              );
            }),
            (t.prototype.initEvent = function () {
              var t, e, n, r, i, o;
              this.initialized ||
                (null ===
                  (e =
                    null === (t = this.container) || void 0 === t
                      ? void 0
                      : t.querySelector(".submit")) ||
                  void 0 === e ||
                  e.addEventListener("click", this.onSubmit),
                null ===
                  (r =
                    null === (n = this.container) || void 0 === n
                      ? void 0
                      : n.querySelector(".cancel")) ||
                  void 0 === r ||
                  r.addEventListener("click", this.hide),
                null ===
                  (o =
                    null === (i = this.container) || void 0 === i
                      ? void 0
                      : i.querySelector(".hg-logout-dialog-mask")) ||
                  void 0 === o ||
                  o.addEventListener("click", this.hide));
            }),
            (t.prototype.onLogout = function (t) {
              (0, x.$4)(t);
            }),
            (t.prototype.offLogout = function (t) {
              (0, x.ou)(t);
            }),
            t
          );
        })(),
        G = new U(),
        B = n(3661),
        Z = n(1370),
        J = n(4459),
        V = n(132),
        K = "x_session_code",
        W = function () {
          return (0, c.mG)(void 0, void 0, void 0, function () {
            var t, e, n, r, i;
            return (0, c.Jh)(this, function (o) {
              switch (o.label) {
                case 0:
                  if (
                    ((t = new URL(window.location.href)),
                    !(e = t.searchParams.get(K)))
                  )
                    return [2];
                  t.searchParams.delete(K),
                    window.history.replaceState({}, "", t),
                    (n = (0, Z.H)("c_login_start", {
                      login_type: J.Ez.URL_CODE,
                    })),
                    (r = !1),
                    (o.label = 1);
                case 1:
                  return o.trys.push([1, 5, , 6]), [4, (0, B.o2)(e)];
                case 2:
                  return (i = o.sent()) ? [4, ot.saveToken(i)] : [3, 4];
                case 3:
                  o.sent(), (r = !0), (o.label = 4);
                case 4:
                  return [3, 6];
                case 5:
                  return o.sent(), [3, 6];
                case 6:
                  return (
                    (0, Z.Y)(
                      "c_login_end",
                      { c_code: r ? 0 : -1, login_type: J.Ez.URL_CODE },
                      n
                    ),
                    r && (0, J.xf)(J.Ez.URL_CODE),
                    [2]
                  );
              }
            });
          });
        },
        Y = function (t) {
          return (0, c.mG)(void 0, void 0, void 0, function () {
            var e, n, r, i, o;
            return (0, c.Jh)(this, function (a) {
              switch (a.label) {
                case 0:
                  if (
                    ((e = (0, Z.H)("c_getUrlWithCode_start")),
                    (n = new URL(t)),
                    ![
                      /(^|.+\.)hypergryph\.com$/,
                      /(^|.+\.)hypergryph\.net$/,
                      /(^|.+\.)skland\.com$/,
                    ].some(function (t) {
                      return t.test(n.host);
                    }))
                  )
                    return [3, 7];
                  (r = !1), (a.label = 1);
                case 1:
                  return a.trys.push([1, 5, , 6]), [4, V.Z.API.getToken()];
                case 2:
                  return (i = a.sent()) ? [4, (0, B.kD)(i)] : [3, 4];
                case 3:
                  (o = a.sent()) &&
                    (n.search
                      ? (n.search += "&"
                          .concat(K, "=")
                          .concat(encodeURIComponent(o)))
                      : (n.search = "?"
                          .concat(K, "=")
                          .concat(encodeURIComponent(o))),
                    (r = !0)),
                    (a.label = 4);
                case 4:
                  return [3, 6];
                case 5:
                  return a.sent(), [3, 6];
                case 6:
                  return (
                    (0, Z.Y)("c_getUrlWithCode_end", { c_code: r ? 0 : 1 }, e),
                    [2, n.href]
                  );
                case 7:
                  return (
                    (0, Z.Y)("c_getUrlWithCode_end", { c_code: 1 }, e), [2, t]
                  );
              }
            });
          });
        },
        X = {
          open: function (t, e) {
            return (
              void 0 === e && (e = "_blank"),
              (0, c.mG)(this, void 0, void 0, function () {
                var n, r, i, o, a;
                return (0, c.Jh)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      return (
                        (n = (0, Z.H)("c_newpageOpen_start")),
                        (r = new URL(t)),
                        [
                          /(^|.+\.)hypergryph\.com$/,
                          /(^|.+\.)hypergryph\.net$/,
                          /(^|.+\.)skland\.com$/,
                        ].some(function (t) {
                          return t.test(r.host);
                        })
                          ? ((i = null),
                            "_blank" !== e
                              ? [3, 2]
                              : [4, window.open("about:blank", e)])
                          : [3, 4]
                      );
                    case 1:
                      (i = s.sent()) &&
                        i !== window &&
                        i.document &&
                        (i.document.write(
                          '<div style="position: fixed; width: 100%; height: 100%; background-color: #000000; color: #fff; display: flex; justify-content: center; align-items: center;"><span class="loader" style="font-size: 24px;">LOADING...</span></div>'
                        ),
                        (i.document.body.style.margin = "0"),
                        ((o = i.document.createElement("style")).innerHTML =
                          "\n                                .loader {\n                                  font-weight: bold;\n                                  font-family: sans-serif;\n                                  animation: l1 0.2s linear infinite alternate;\n                                }\n                                @keyframes l1 {to{opacity: 0}}"),
                        i.document.head.append(o)),
                        (s.label = 2);
                    case 2:
                      return [4, Y(t)];
                    case 3:
                      return (
                        (a = s.sent()),
                        i && i !== window
                          ? i.location.replace(a)
                          : window.location.assign(a),
                        (0, Z.Y)("c_newpageOpen_end", { c_code: 0 }, n),
                        [3, 5]
                      );
                    case 4:
                      window.open(t, e),
                        (0, Z.Y)("c_newpageOpen_end", { c_code: 1 }, n),
                        (s.label = 5);
                    case 5:
                      return [2];
                  }
                });
              })
            );
          },
          utils: { getUrlWithSessionCode: Y },
        },
        q = n(2005),
        $ = n(1764),
        Q = n(3555);
      function tt(t) {
        void 0 === t && (t = {});
        var e = (0, J.q8)();
        return null !== e && (t.login_type = e), t;
      }
      var et = null,
        nt = null;
      var rt = "hg_token",
        it = function () {
          return (0, c.mG)(void 0, void 0, void 0, function () {
            var t, e, n, r;
            return (0, c.Jh)(this, function (i) {
              switch (i.label) {
                case 0:
                  if (
                    ((t = new URL(window.location.href)),
                    !(e = t.searchParams.get(rt)))
                  )
                    return [2];
                  t.searchParams.delete(rt),
                    window.history.replaceState({}, "", t),
                    (n = (0, Z.H)("c_login_start", {
                      login_type: J.Ez.URL_TOKEN,
                    })),
                    (r = !1),
                    (i.label = 1);
                case 1:
                  return i.trys.push([1, 3, , 4]), [4, (0, x.Fr)(e)];
                case 2:
                  return i.sent(), (r = !0), [3, 4];
                case 3:
                  return i.sent(), [3, 4];
                case 4:
                  return (
                    (0, Z.Y)(
                      "c_login_end",
                      { c_code: r ? 0 : -1, login_type: J.Ez.URL_TOKEN },
                      n
                    ),
                    r && (0, J.xf)(J.Ez.URL_TOKEN),
                    [2]
                  );
              }
            });
          });
        },
        ot = {
          register: x.z2,
          loginByPassword: x.D_,
          loginByCode: x.KA,
          tokenByCode: x.HD,
          tokenByScanCode: x.d4,
          logout: x.kS,
          getUserInfo: x.bG,
          grant: x.Bk,
          grantSilent: x.oN,
          GRANT_SILENT_CODE: x.g,
          grantInfo: x.Fw,
          cancelUnbindGrant: x.CS,
          saveToken: x.Fr,
          getToken: x.LP,
          checkRemoteToken: x.J9,
          clearToken: x.qz,
          sendSMS: x.X,
          couldChangePhone: x.BX,
          changePhone: x.OW,
          changePassword: x.Cp,
          bindEmail: x.I8,
          resetOtherToken: x.AW,
          queryOrder: x.fn,
          updateAgreement: x.xk,
          onLogout: x.$4,
          offLogout: x.ou,
          loginDialog: P,
          logoutDialog: G,
          UI: {
            login: N,
            checkSession: function (t, e) {
              return (
                void 0 === e && (e = f.ZT),
                (0, c.mG)(void 0, void 0, void 0, function () {
                  var r, i, o, a, s, u, l, d, h;
                  return (0, c.Jh)(this, function (f) {
                    switch (f.label) {
                      case 0:
                        return (
                          (r = function () {
                            return (0, c.mG)(
                              void 0,
                              void 0,
                              void 0,
                              function () {
                                var e, n, r, i, o, a;
                                return (0, c.Jh)(this, function (s) {
                                  switch (s.label) {
                                    case 0:
                                      return t.oauth
                                        ? [4, (0, x.Fw)(t.oauth.appCode)]
                                        : [2, { status: T }];
                                    case 1:
                                      return (
                                        (e = s.sent()),
                                        (n = e.result),
                                        (r = e.data),
                                        (i = e.status),
                                        (o = e.type),
                                        (a = e.statusCode),
                                        n && r
                                          ? [
                                              2,
                                              {
                                                status: T,
                                                info: { openId: r.uid },
                                              },
                                            ]
                                          : "apiServer" === o && 401 === a
                                          ? [2, { status: O }]
                                          : i === S.k_.INVALID_TOKEN ||
                                            i === S.k_.OPEN_ID_DELETING
                                          ? [2, { status: D }]
                                          : [2, { status: A }]
                                      );
                                  }
                                });
                              }
                            );
                          }),
                          [4, (0, x.bG)()]
                        );
                      case 1:
                        return (
                          (i = f.sent()),
                          (o = i.result),
                          (a = i.data),
                          (s = i.status),
                          (u = i.type),
                          (l = i.statusCode),
                          o && a
                            ? (
                                null === (h = a.updatedAgreement) ||
                                void 0 === h
                                  ? void 0
                                  : h.length
                              )
                              ? [4, n.e(694).then(n.bind(n, 4694))]
                              : [3, 3]
                            : [3, 6]
                        );
                      case 2:
                        return (
                          (0, f.sent().showProtocolsUpdateDialog)({
                            protocols: a.updatedAgreement,
                            onConfirm: function () {
                              return (0, c.mG)(
                                void 0,
                                void 0,
                                void 0,
                                function () {
                                  var t;
                                  return (0, c.Jh)(this, function (n) {
                                    switch (n.label) {
                                      case 0:
                                        return [4, r()];
                                      case 1:
                                        return (
                                          (t = n.sent()),
                                          e(t.status, {
                                            hgInfo: a,
                                            oauthInfo: t.info,
                                          }),
                                          [2]
                                        );
                                    }
                                  });
                                }
                              );
                            },
                            onCancel: function () {
                              return (0, c.mG)(
                                void 0,
                                void 0,
                                void 0,
                                function () {
                                  return (0, c.Jh)(this, function (t) {
                                    return e(I), [2];
                                  });
                                }
                              );
                            },
                          }),
                          [3, 5]
                        );
                      case 3:
                        return [4, r()];
                      case 4:
                        (d = f.sent()),
                          e(d.status, { hgInfo: a, oauthInfo: d.info }),
                          (f.label = 5);
                      case 5:
                        return [3, 7];
                      case 6:
                        "apiServer" === u && 401 === l
                          ? e(O)
                          : s === S.k_.INVALID_TOKEN ||
                            s === S.k_.GUEST_ACCESS_DENIED ||
                            s === S.k_.ACCOUNT_BANNED ||
                            s === S.k_.ACCOUNT_DELETING
                          ? e(D)
                          : e(A),
                          (f.label = 7);
                      case 7:
                        return [2];
                    }
                  });
                })
              );
            },
            inheritSession: function (t, e) {
              return (
                void 0 === e && (e = f.ZT),
                (0, c.mG)(void 0, void 0, void 0, function () {
                  return (0, c.Jh)(this, function (r) {
                    switch (r.label) {
                      case 0:
                        return [4, n.e(881).then(n.bind(n, 1881))];
                      case 1:
                        return (
                          (0, r.sent().doInheritSession)({
                            oauth: t.oauth,
                            onSuccess: function (t) {
                              e(T, {
                                hgInfo: t.hgInfo,
                                oauthInfo: t.oauthInfo,
                              });
                            },
                            onError: function () {
                              e(A);
                            },
                            onCancel: function () {
                              e(I);
                            },
                          }),
                          [2]
                        );
                    }
                  });
                })
              );
            },
            openUserCenterWindow: function (t) {
              var e = t.appCode,
                n = t.onLogout,
                r = t.onDeviceTokenUpdated,
                i = t.onUserInfoUpdated,
                o = t.onClose,
                a = !1,
                s = (0, Q.LJ)(e),
                c = (0, Z.H)("c_accountCenter_start", tt()),
                u = (0, q.XN)(),
                l = $.x.getCache(),
                d = (l ? (0, q.Ju)(l, e) : null) || "",
                h = new URLSearchParams({
                  appCode: e,
                  source: "webSdk",
                  origin: location.origin,
                  deviceModel: u["X-DeviceModel"],
                  deviceType: u["X-DeviceType"],
                  osVer: u["X-OSVer"],
                  deviceId: u["X-DeviceId"],
                  deviceToken: d,
                }),
                f = ""
                  .concat("./user.hypergryph.com", "/pcSdk/userInfo?")
                  .concat(h.toString());
              if (et && !et.closed)
                try {
                  et.location.href;
                } catch (t) {
                  var _ = et;
                  null == nt || nt();
                  try {
                    _.close();
                  } catch (t) {}
                  et = null;
                }
              if (et && !et.closed) {
                var p = et;
                null == nt || nt(),
                  (et = p),
                  X.utils.getUrlWithSessionCode(f).then(function (t) {
                    p.closed || p.location.replace(t);
                  }),
                  p.focus();
              } else {
                if (
                  !(et = window.open("about:blank", "_blank")) ||
                  et === window
                )
                  return (
                    console.warn(
                      "[HG_SDK] openUserCenterWindow: popup blocked by browser"
                    ),
                    (0, Z.Y)("c_accountCenter_end", tt(), c),
                    (0, Q.sB)(s),
                    { close: function () {} }
                  );
                X.utils.getUrlWithSessionCode(f).then(function (t) {
                  a || !et || et.closed || et.location.replace(t);
                });
              }
              var v,
                g = et,
                m = function () {
                  a ||
                    ((a = !0),
                    (et = null),
                    (nt = null),
                    clearInterval(w),
                    window.removeEventListener("message", y),
                    window.removeEventListener("beforeunload", b),
                    (0, J.LN)("accountCenter_close"),
                    (0, Q.sB)(s),
                    null == o || o());
                },
                b = function () {
                  try {
                    g.close();
                  } catch (t) {}
                };
              window.addEventListener("beforeunload", b);
              try {
                v = new URL("./user.hypergryph.com").origin;
              } catch (t) {
                try {
                  v = new URL("./".concat("./user.hypergryph.com"))
                    .origin;
                } catch (t) {
                  return (
                    console.error(
                      "[HG_SDK] openUserCenterWindow: invalid __USER_CENTER__.host URL"
                    ),
                    (0, Z.Y)("c_accountCenter_end", tt(), c),
                    m(),
                    { close: function () {} }
                  );
                }
              }
              var y = function (t) {
                var o;
                if (t.origin === v) {
                  var a = t.data;
                  if (a && "object" == typeof a && a.type)
                    switch (a.type) {
                      case "logout":
                        var s =
                          "logout_delete" ===
                          (null === (o = a.data) || void 0 === o
                            ? void 0
                            : o.type)
                            ? x.HW.ACCOUNT_DELETED
                            : x.HW.MANUAL;
                        (0, x.kS)(void 0, s), null == n || n(a.data);
                        break;
                      case "device_token_updated":
                        var c = a.data.deviceToken,
                          u = $.x.getCache();
                        u && c && (0, q.CE)(c, u, e), null == r || r(a.data);
                        break;
                      case "user_info_updated":
                        null == i || i(a.data);
                    }
                }
              };
              window.addEventListener("message", y);
              var w = setInterval(function () {
                try {
                  g.closed && m();
                } catch (t) {
                  m();
                }
              }, 300);
              return (
                (nt = m),
                (0, Z.Y)("c_accountCenter_end", tt(), c),
                {
                  close: function () {
                    try {
                      g.close();
                    } catch (t) {}
                    m();
                  },
                }
              );
            },
          },
        },
        at = n(9655);
      function st() {
        return (0, c.mG)(this, void 0, void 0, function () {
          return (0, c.Jh)(this, function (t) {
            return [
              2,
              {
                result: !0,
                data: {
                  product: "AK",
                  nameCN: "明日方舟",
                  nameEN: "Arknights",
                  version: "2.7.41",
                  updatedAt: "2026/06/01",
                  developer: "上海鹰角网络科技有限公司",
                },
              },
            ];
          });
        });
      }
      var ct = n(3737),
        ut = (function () {
          function t(t, e) {
            var n = e.html,
              r = e.slot,
              i = e.copyrightImage;
            (this.container = t),
              n && this.updateHtml(n),
              r && this.setSlot(r),
              i && this.setCopyrightImage(i);
          }
          return (
            (t.prototype.setSlot = function (t) {
              this.slot = t;
              var e = this.container.querySelector(".footer-slot");
              return (
                e &&
                  (void 0 === t
                    ? (e.innerHTML = "")
                    : "string" == typeof t
                    ? (e.innerHTML = t)
                    : e.appendChild(t)),
                this
              );
            }),
            (t.prototype.setCopyrightImage = function (t) {
              this.copyrightImage = t;
              var e = this.container.querySelector("img#copyright-image");
              return e && (e.src = t), this;
            }),
            (t.prototype.updateHtml = function (t) {
              return (
                (this.container.innerHTML = t),
                this.slot && this.setSlot(this.slot),
                this.copyrightImage &&
                  this.setCopyrightImage(this.copyrightImage),
                this
              );
            }),
            t
          );
        })(),
        lt = (function (t) {
          function e() {
            return t.call(this, document.body, {}) || this;
          }
          return (
            (0, c.ZT)(e, t),
            (e.prototype.setSlot = function () {
              return this;
            }),
            (e.prototype.setCopyrightImage = function () {
              return this;
            }),
            (e.prototype.updateHtml = function () {
              return this;
            }),
            e
          );
        })(ut),
        dt = function (t) {
          return (0, c.mG)(void 0, void 0, void 0, function () {
            var e, r;
            return (0, c.Jh)(this, function (i) {
              switch (i.label) {
                case 0:
                  return [4, n.e(946).then(n.bind(n, 946))];
                case 1:
                  return (e = i.sent().renderFooter), [4, st()];
                case 2:
                  return (
                    (r = i.sent()),
                    e(t, {
                      logo: "MONTAGNE",
                      links: [
                        {
                          url: "https://user.hypergryph.com/protocol/ak/privacy",
                          name: "个人信息保护政策",
                        },
                        {
                          url: "https://user.hypergryph.com/protocol/ak/children_privacy",
                          name: "儿童个人信息保护政策",
                        },
                        {
                          url: "https://user.hypergryph.com/protocol/ak/service",
                          name: "使用许可及服务协议",
                        },
                        {
                          url: "https://ak.hypergryph.com/protocol/authority",
                          name: "应用权限",
                        },
                        "custody",
                        {
                          url: "https://customer-service.hypergryph.com/ak",
                          name: "客服中心",
                        },
                      ],
                      siteInfos: [
                        "ICP",
                        "NCL",
                        { content: ct.arknights.approval },
                        { content: ct.arknights.ISBN },
                        "PSR",
                      ],
                      versionMeta: r.result ? r.data : void 0,
                      ageTips: {
                        icon: u.L.arknights["age-tip"],
                        content: ct.arknights.ageTips.join("；\n"),
                      },
                      externalLinks: [
                        "reportIllegalInfo",
                        "reportIllegalInfoShanghai",
                        "962110",
                      ],
                    }),
                    [2, new lt()]
                  );
              }
            });
          });
        },
        ht = n(7348),
        ft = n(2172),
        _t = {
          OK: 0,
          ACCOUNT_BANNED: 1,
          SERVER_MAINTENANCE: 2,
          INVALID_TOKEN: 3,
          INVALID_REQUEST: 4,
          ACCESS_DENIED: 5,
          REQUIRE_CAPTCHA: 6,
          CAPTCHA_FAILED: 7,
          INVALID_CODE: 8,
          PLAYER_DEACTIVATING: 10,
          PLAYER_NOT_EXIST: 101,
        };
      function pt(t, e, n) {
        return (0, c.mG)(this, void 0, void 0, function () {
          var r, i, o, a;
          return (0, c.Jh)(this, function (s) {
            switch (s.label) {
              case 0:
                (r = "".concat(l.h.u8Server.getHost()).concat(t)),
                  (s.label = 1);
              case 1:
                return (
                  s.trys.push([1, 3, , 4]),
                  [
                    4,
                    h().request(r, n, {
                      timeout: 1e4,
                      method: e,
                      withCredentials: !0,
                      responseType: "json",
                    }),
                  ]
                );
              case 2:
                if ((i = s.sent()).data.status === _t.OK) return [2, i.data];
                throw new ht.w(i);
              case 3:
                if (((o = s.sent()), (a = o) instanceof ht.w)) throw a;
                if (a.status && a.response)
                  throw (
                    (a.status,
                    new ht.w({ status: a.status, data: a.response.data }))
                  );
                throw a;
              case 4:
                return [2];
            }
          });
        });
      }
      var vt = (function (t) {
          var e = t.appCode;
          return {
            getToken: function (t, n) {
              return (0, c.mG)(this, void 0, void 0, function () {
                return (0, c.Jh)(this, function (r) {
                  return [
                    2,
                    (0, ht.j)(function () {
                      return pt(
                        "/u8/user/auth/v1/token_by_channel_token",
                        "POST",
                        { appCode: e, channelMasterId: t, channelToken: n }
                      );
                    }),
                  ];
                });
              });
            },
            getInfo: function (t) {
              var n = t.u8Token,
                r = t.channelMasterId,
                i = t.channelToken;
              return (0, c.mG)(this, void 0, void 0, function () {
                var t;
                return (0, c.Jh)(this, function (o) {
                  return (
                    (t = n
                      ? { token: n }
                      : { appCode: e, channelMasterId: r, channelToken: i }),
                    [
                      2,
                      (0, ht.j)(function () {
                        return pt("/u8/user/info/v1/basic", "POST", t);
                      }),
                    ]
                  );
                });
              });
            },
            queryOrder: function (t) {
              var n = t.u8Token,
                r = t.channelMasterId,
                i = t.channelToken;
              return (0, c.mG)(this, void 0, void 0, function () {
                var t;
                return (0, c.Jh)(this, function (o) {
                  return (
                    (t = n
                      ? { token: n }
                      : { appCode: e, channelMasterId: r, channelToken: i }),
                    [
                      2,
                      (0, ht.j)(function () {
                        return pt("/u8/pay/v1/recent", "POST", t);
                      }),
                    ]
                  );
                });
              });
            },
          };
        })({ appCode: (0, ft.Z)(E.SG, "u8AppCodeMap.arknights", "") }),
        gt = n(6433),
        mt = n(9016),
        bt = function (t) {
          var e,
            r,
            i = t.game,
            o = t.target,
            a = t.etlOptions,
            s = (0, mt.NI)(i),
            u = o
              ? { targetUrl: o.url, targetChannel: o.channel }
              : {
                  targetUrl:
                    null === (e = s.downloadConfig) || void 0 === e
                      ? void 0
                      : e.url,
                  targetChannel: "auto",
                },
            l = u.targetUrl,
            d = u.targetChannel;
          if (l) {
            try {
              var h = null == a ? void 0 : a.appId,
                f = (0, c.pi)(
                  (0, c.pi)({}, null == a ? void 0 : a.properties),
                  { download_channel: d }
                );
              h
                ? L.t.eventToAppId(h, "#download", f)
                : L.t.event("#download", f);
            } catch (t) {
              console.error("ETL event tracking failed:", t);
            }
            if (
              (null === (r = window.navigator) || void 0 === r
                ? void 0
                : r.userAgent) &&
              /skland/i.test(window.navigator.userAgent)
            )
              n.e(306)
                .then(n.bind(n, 2306))
                .then(function (t) {
                  (0, t.default.openURL)(l);
                });
            else
              try {
                window.open(l, "_blank") ||
                  (console.warn(
                    "Failed to open download URL. Popup may be blocked by browser.",
                    "URL: ".concat(l)
                  ),
                  (location.href = l));
              } catch (t) {
                console.error("Failed to open download URL:", t),
                  (location.href = l);
              }
          } else
            console.warn(
              "Download game [".concat(
                i,
                "] failed, targetUrl is not available."
              ),
              "Params: ".concat(JSON.stringify({ game: i, target: o }))
            );
        },
        yt = { official: 1, bilibili: 2 };
      function wt(t, e) {
        return (0, c.mG)(this, void 0, void 0, function () {
          return (0, c.Jh)(this, function (n) {
            return [2, vt.getToken(t, e)];
          });
        });
      }
      var kt = {
          CHANNEL_MAP: yt,
          getTokenByHgCode: function (t, e) {
            return (
              void 0 === e && (e = 2),
              (0, c.mG)(this, void 0, void 0, function () {
                return (0, c.Jh)(this, function (n) {
                  return [2, wt(yt.official, { type: e, code: t })];
                });
              })
            );
          },
          getTokenByBilibiliCode: function (t) {
            return (0, c.mG)(this, void 0, void 0, function () {
              return (0, c.Jh)(this, function (e) {
                return [2, wt(yt.bilibili, { type: 1, code: t })];
              });
            });
          },
          getPlayerInfo: function (t, e) {
            var n;
            return (
              void 0 === e && (e = yt.official),
              (0, c.mG)(this, void 0, void 0, function () {
                var r, i, o;
                return (0, c.Jh)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return t
                        ? [
                            2,
                            vt.getInfo({ channelMasterId: e, channelToken: t }),
                          ]
                        : [4, ot.getToken()];
                    case 1:
                      return (
                        (r = a.sent()),
                        (i =
                          null === (n = r.data) || void 0 === n
                            ? void 0
                            : n.token),
                        r.result && i
                          ? [
                              4,
                              vt.getInfo({
                                channelMasterId: yt.official,
                                channelToken: { token: i },
                              }),
                            ]
                          : [3, 3]
                      );
                    case 2:
                      return (
                        (o = a.sent()).result ||
                          o.status !== _t.INVALID_TOKEN ||
                          ot.clearToken(),
                        [2, o]
                      );
                    case 3:
                      return [2, (0, c.pi)((0, c.pi)({}, r), { data: void 0 })];
                  }
                });
              })
            );
          },
          getPlayerInfoByToken: function (t) {
            return (0, c.mG)(this, void 0, void 0, function () {
              return (0, c.Jh)(this, function (e) {
                return [2, vt.getInfo({ u8Token: t })];
              });
            });
          },
          insertFooter: dt,
          renderFooter: dt,
          getVersionMeta: st,
          queryOrder: function (t) {
            var e;
            return (0, c.mG)(this, void 0, void 0, function () {
              var n, r, i;
              return (0, c.Jh)(this, function (o) {
                switch (o.label) {
                  case 0:
                    return t
                      ? [
                          2,
                          vt.queryOrder({
                            channelMasterId: yt.official,
                            channelToken: t,
                          }),
                        ]
                      : [4, ot.getToken()];
                  case 1:
                    return (
                      (n = o.sent()),
                      (r =
                        null === (e = n.data) || void 0 === e
                          ? void 0
                          : e.token),
                      n.result && r
                        ? [
                            4,
                            vt.queryOrder({
                              channelMasterId: yt.official,
                              channelToken: { token: r },
                            }),
                          ]
                        : [3, 3]
                    );
                  case 2:
                    return (
                      (i = o.sent()).result ||
                        i.status !== _t.INVALID_TOKEN ||
                        ot.clearToken(),
                      [2, i]
                    );
                  case 3:
                    return [2, (0, c.pi)((0, c.pi)({}, n), { data: void 0 })];
                }
              });
            });
          },
          getAccountChannel: function () {
            return (0, c.mG)(void 0, void 0, void 0, function () {
              var t, e;
              return (0, c.Jh)(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [4, gt.q.get("ak")];
                  case 1:
                    return (t = n.sent()).result &&
                      (null === (e = t.data) || void 0 === e
                        ? void 0
                        : e.content)
                      ? [
                          2,
                          (0, c.pi)((0, c.pi)({}, t), {
                            data: { channelId: parseInt(t.data.content) },
                          }),
                        ]
                      : [2, (0, c.pi)((0, c.pi)({}, t), { data: void 0 })];
                }
              });
            });
          },
          saveAccountChannel: function (t) {
            return gt.q.set({ content: String(t) }, "ak");
          },
          clearAccountChannel: function () {
            return gt.q.clear("ak");
          },
          getBilibiliToken: function () {
            return (0, c.mG)(void 0, void 0, void 0, function () {
              var t, e;
              return (0, c.Jh)(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [4, gt.q.get("ak-b")];
                  case 1:
                    return (t = n.sent()).result &&
                      (null === (e = t.data) || void 0 === e
                        ? void 0
                        : e.content)
                      ? [
                          2,
                          (0, c.pi)((0, c.pi)({}, t), {
                            data: { token: t.data.content },
                          }),
                        ]
                      : [2, (0, c.pi)((0, c.pi)({}, t), { data: void 0 })];
                }
              });
            });
          },
          saveBilibiliToken: function (t) {
            return gt.q.set({ content: t }, "ak-b");
          },
          clearBilibiliToken: function () {
            return gt.q.clear("ak-b");
          },
          download: function (t) {
            void 0 === t && (t = {}),
              bt((0, c.pi)((0, c.pi)({}, t), { game: "ak" }));
          },
        },
        Ct = function (t, e) {
          return (0, c.mG)(void 0, void 0, void 0, function () {
            var r;
            return (0, c.Jh)(this, function (i) {
              switch (i.label) {
                case 0:
                  return [4, n.e(946).then(n.bind(n, 946))];
                case 1:
                  return (
                    (r = i.sent().renderFooter),
                    (null == e ? void 0 : e.copyrightImage) &&
                      (e.logo = { src: e.copyrightImage, height: 66 }),
                    r(t, e),
                    [2, new lt()]
                  );
              }
            });
          });
        },
        xt = { insertFooter: Ct, renderFooter: Ct },
        Et = function (t) {
          return (0, c.mG)(void 0, void 0, void 0, function () {
            return (0, c.Jh)(this, function (e) {
              switch (e.label) {
                case 0:
                  return [4, n.e(946).then(n.bind(n, 946))];
                case 1:
                  return (
                    (0, e.sent().renderFooter)(t, {
                      logo: "NOUS_WAVE",
                      links: [
                        {
                          url: "https://user.hypergryph.com/protocol/exa/privacy",
                          name: "个人信息保护政策",
                        },
                        {
                          url: "https://user.hypergryph.com/protocol/exa/children_privacy",
                          name: "儿童个人信息保护政策",
                        },
                        {
                          url: "https://user.hypergryph.com/protocol/exa/service",
                          name: "使用许可及服务协议",
                        },
                        "custody",
                        {
                          url: "https://customer-service.hypergryph.com/exa",
                          name: "客服中心",
                        },
                      ],
                      siteInfos: [
                        "ICP",
                        "NCL",
                        { content: ct.exa.approval },
                        { content: ct.exa.ISBN },
                        "PSR",
                      ],
                      externalLinks: [
                        "reportIllegalInfo",
                        "reportIllegalInfoShanghai",
                        "962110",
                      ],
                    }),
                    [2, new lt()]
                  );
              }
            });
          });
        },
        Lt = { insertFooter: Et, renderFooter: Et },
        St = function (t) {
          return (0, c.mG)(void 0, void 0, void 0, function () {
            return (0, c.Jh)(this, function (e) {
              switch (e.label) {
                case 0:
                  return [4, n.e(946).then(n.bind(n, 946))];
                case 1:
                  return (
                    (0, e.sent().renderFooter)(t, {
                      logo: "HG",
                      links: [
                        {
                          url: "https://user.hypergryph.com/protocol/plain/endfield/service",
                          name: "游戏使用许可及服务协议",
                        },
                        {
                          url: "https://user.hypergryph.com/protocol/plain/endfield/privacy",
                          name: "个人信息保护政策",
                        },
                        {
                          url: "https://user.hypergryph.com/protocol/plain/endfield/children_privacy",
                          name: "儿童个人信息保护政策",
                        },
                        "custody",
                        {
                          url: "https://customer-service.hypergryph.com/endfield",
                          name: "客服中心",
                        },
                      ],
                      siteInfos: [
                        "ICP",
                        { content: ct.endfield.NCL },
                        { content: ct.endfield.approval },
                        { content: ct.endfield.ISBN },
                        "PSR",
                      ],
                      versionMeta: {
                        developer: "上海鹰角网络科技有限公司",
                        version: "",
                        updatedAt: "",
                        product: "ENDFIELD",
                        nameCN: "明日方舟：终末地",
                        nameEN: "ARKNIGHTS: ENDFIELD",
                      },
                      ageTips: {
                        icon: u.L.arknights["age-tip"],
                        content: ct.arknights.ageTips.join("；\n"),
                      },
                      externalLinks: [
                        "reportIllegalInfo",
                        "reportIllegalInfoShanghai",
                        "962110",
                      ],
                    }),
                    [2, new lt()]
                  );
              }
            });
          });
        },
        Tt = {
          insertFooter: St,
          renderFooter: St,
          download: function (t) {
            void 0 === t && (t = {}),
              bt((0, c.pi)((0, c.pi)({}, t), { game: "ef" }));
          },
        };
      var At = {
          sendEmailCode: function (t) {
            return (0, c.mG)(this, void 0, void 0, function () {
              return (0, c.Jh)(this, function (e) {
                return [2, S.ej.general.sendEmailCode(t)];
              });
            });
          },
        },
        It = n(1721),
        Ot = n(4024),
        Dt = n(3837),
        Nt = n(8230),
        Rt = n(536),
        zt = n(6897);
      function Pt(t) {
        return It.P.create("u8", (0, c.pi)({ msg: t.msg || jt[t.code] }, t));
      }
      var jt = {
          TOKEN_EXPIRED: (0, Ot.Z)("登录状态已失效"),
          CAPTCHA_VALIDATE_FAILED: (0, Ot.Z)("人机验证失败"),
          INTERVENING: (0, Ot.Z)("账号暂时无法使用"),
          ROLE_CANCELLING: (0, Ot.Z)("您的游戏账号在注销冷静期中"),
          ROLE_BANNED: (0, Ot.Z)("游戏账号封禁中"),
          NO_ROLE: (0, Ot.Z)("游戏账号不存在"),
          DEFAULT: (0, Ot.Z)("未处理异常"),
        },
        Ft = {
          OK: 0,
          ROLE_BANNED: 1,
          MAINTAINING: 2,
          INVALID_TOKEN: 3,
          NO_AUTHORITY: 5,
          REQUIRE_CAPTCHA: 6,
          INVALID_CAPTCHA: 7,
          INVALID_CODE: 8,
          INTERVENING: 9,
          ROLE_DELETING: 10,
          NO_ROLE: 101,
        },
        Ht = new Nt.KU({
          host: l.h.u8Server.getHost,
          timeout: 1e4,
          onResponse: function (t, e) {
            return (0, c.mG)(void 0, void 0, void 0, function () {
              var n, r, i;
              return (0, c.Jh)(this, function (o) {
                switch (o.label) {
                  case 0:
                    return t.status === Ft.OK
                      ? [2, t.data]
                      : t.status !== Ft.REQUIRE_CAPTCHA
                      ? [3, 3]
                      : ((n = t.data.captcha), [4, (0, zt.B)(n)]);
                  case 1:
                    return (r = o.sent())
                      ? [
                          4,
                          e.client.request(
                            e.url,
                            (0, c.pi)((0, c.pi)({}, e.option), {
                              data: (0, c.pi)(
                                (0, c.pi)(
                                  {},
                                  null === (i = e.option) || void 0 === i
                                    ? void 0
                                    : i.data
                                ),
                                { captcha: r }
                              ),
                            })
                          ),
                        ]
                      : [3, 3];
                  case 2:
                    if ((t = o.sent()).status === Ft.OK) return [2, t.data];
                    o.label = 3;
                  case 3:
                    switch (t.status) {
                      case Ft.ROLE_BANNED:
                        throw Pt({
                          code: "ROLE_BANNED",
                          data: {
                            startTs: t.data.banStartTs,
                            endTs: t.data.banEndTs,
                          },
                          msg: t.msg,
                        });
                      case Ft.INVALID_CAPTCHA:
                        throw Pt({
                          code: "CAPTCHA_VALIDATE_FAILED",
                          msg: t.msg,
                        });
                      case Ft.INTERVENING:
                        throw Pt({ code: "INTERVENING", msg: t.msg });
                      case Ft.ROLE_DELETING:
                        throw Pt({
                          code: "ROLE_CANCELLING",
                          msg: t.msg,
                          data: {
                            requestTs: t.data.delete_request_ts,
                            commitTs: t.data.delete_commit_ts,
                          },
                        });
                      case Ft.NO_ROLE:
                        throw Pt({ code: "NO_ROLE", msg: t.msg });
                    }
                    throw Pt({
                      code: "DEFAULT",
                      msg: t.msg,
                      data: t.data,
                      detail: t,
                    });
                }
              });
            });
          },
          onError: function (t) {
            return (0, c.mG)(void 0, void 0, void 0, function () {
              return (0, c.Jh)(this, function (e) {
                if (Rt.o.is(t))
                  throw 401 === t.statusCode
                    ? Pt({ code: "TOKEN_EXPIRED" })
                    : new It.q("REQUEST_ERROR", t.message);
                throw t;
              });
            });
          },
        });
      function Mt(t, e, n) {
        return (0, c.mG)(this, void 0, void 0, function () {
          return (0, c.Jh)(this, function (r) {
            switch (r.label) {
              case 0:
                return [
                  4,
                  Ht.post("/u8/user/auth/v2/token_by_channel_token", {
                    appCode: t,
                    channelMasterId: e,
                    channelToken: n,
                  }),
                ];
              case 1:
                return [2, r.sent().token];
            }
          });
        });
      }
      function Ut(t) {
        return (0, c.mG)(this, void 0, void 0, function () {
          return (0, c.Jh)(this, function (e) {
            return [2, Ht.post("/u8/user/auth/v2/token_by_channel_token", t)];
          });
        });
      }
      function Gt(t) {
        return (0, c.mG)(this, void 0, void 0, function () {
          return (0, c.Jh)(this, function (e) {
            switch (e.label) {
              case 0:
                return [
                  4,
                  Ht.post("/u8/user/auth/v2/grant", { token: t, type: 1 }),
                ];
              case 1:
                return [2, e.sent()];
            }
          });
        });
      }
      function Bt(t) {
        return (0, c.mG)(this, void 0, void 0, function () {
          return (0, c.Jh)(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, Ht.get("/u8/user/info/v2/basic", { token: t })];
              case 1:
                return [2, e.sent()];
            }
          });
        });
      }
      function Zt(t, e) {
        var n = void 0 === e ? {} : e,
          r = n.appCode,
          i = n.serverId;
        return (0, c.mG)(this, void 0, void 0, function () {
          return (0, c.Jh)(this, function (e) {
            switch (e.label) {
              case 0:
                return [
                  4,
                  Ht.post("/game/role/v1/query_role_list", {
                    token: t,
                    appCode: r,
                    serverId: i,
                  }),
                ];
              case 1:
                return [2, e.sent()];
            }
          });
        });
      }
      function Jt(t) {
        return (0, c.mG)(this, void 0, void 0, function () {
          var e, n, r;
          return (0, c.Jh)(this, function (i) {
            switch (i.label) {
              case 0:
                if (((e = (0, mt.NI)(t)), !(n = e.u8AppCode)))
                  throw new It.q(
                    "GAME_CANT_BE_AUTH",
                    (0, Ot.Z)("当前游戏无法登录")
                  );
                return [4, Dt.TG()];
              case 1:
                return (
                  (r = i.sent()),
                  [4, Mt(n, E.GV.OFFICIAL, { type: 0, token: r })]
                );
              case 2:
                return [2, i.sent()];
            }
          });
        });
      }
      function Vt(t, e, n) {
        return (0, c.mG)(this, void 0, void 0, function () {
          var r, i;
          return (0, c.Jh)(this, function (o) {
            switch (o.label) {
              case 0:
                if (((r = (0, mt.NI)(t)), !(i = r.u8AppCode)))
                  throw new It.q(
                    "GAME_CANT_BE_AUTH",
                    (0, Ot.Z)("当前游戏无法登录")
                  );
                return [4, Mt(i, e, { type: 1, code: n })];
              case 1:
                return [2, o.sent()];
            }
          });
        });
      }
      function Kt(t) {
        return (0, c.mG)(this, void 0, void 0, function () {
          return (0, c.Jh)(this, function (e) {
            return [2, Bt(t)];
          });
        });
      }
      function Wt() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return (0, c.mG)(this, void 0, void 0, function () {
          return (0, c.Jh)(this, function (e) {
            return [2, Zt.apply(r, (0, c.ev)([], (0, c.CR)(t), !1))];
          });
        });
      }
      function Yt(t) {
        return (0, c.mG)(this, void 0, void 0, function () {
          return (0, c.Jh)(this, function (e) {
            return [2, Gt(t)];
          });
        });
      }
      function Xt(t) {
        return (0, c.mG)(this, void 0, void 0, function () {
          return (0, c.Jh)(this, function (e) {
            return [
              2,
              Ut({
                appCode: t.u8AppCode,
                channelMasterId: 1,
                channelToken: { type: 1, code: t.oauthCode },
                type: 0,
                platform: 7,
              }),
            ];
          });
        });
      }
      var qt = { API: i },
        $t = n(1995);
      function Qt(t, e) {
        return (0, c.mG)(this, void 0, void 0, function () {
          var n, r, i;
          return (0, c.Jh)(this, function (o) {
            switch (o.label) {
              case 0:
                return (
                  o.trys.push([0, 4, , 5]),
                  (r = t()),
                  (0, $t.tI)(r) ? [4, r] : [3, 2]
                );
              case 1:
                return (n = o.sent()), [3, 3];
              case 2:
                (n = r), (o.label = 3);
              case 3:
                return [3, 5];
              case 4:
                throw ((i = o.sent()), null == e || e(i, null), i);
              case 5:
                return null == e || e(null, n), [2, n];
            }
          });
        });
      }
      var te = n(3946);
      function ee(t, e) {
        var n = (0, mt.NI)(t);
        return Qt(function () {
          return te.Ke(n.bindingAppCode);
        }, e);
      }
      function ne(t, e, n) {
        var r = (0, mt.NI)(t);
        if ("function" == typeof e)
          return Qt(function () {
            return te.W0(r.bindingAppCode, {
              isMultiServers: r.isMultiServers,
            });
          }, e);
        var i = e || {};
        return (
          (i.isMultiServers = !!r.isMultiServers),
          Qt(function () {
            return te.W0(r.bindingAppCode, i);
          }, n)
        );
      }
      var re = {
          UI: {
            showSelectDialog: function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              n.e(374)
                .then(n.bind(n, 4367))
                .then(function (e) {
                  e.showSelectDialog.apply(e, (0, c.ev)([], (0, c.CR)(t), !1));
                });
            },
          },
          API: o,
        },
        ie = n(5956);
      function oe(t) {
        var e = void 0 === t ? {} : t,
          n = e.availableRegions;
        return Qt(function () {
          return ie.oX(n);
        }, e.callback);
      }
      var ae = {
          UI: {
            showSelectDialog: function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              n.e(979)
                .then(n.bind(n, 241))
                .then(function (e) {
                  e.showSelectDialog.apply(e, (0, c.ev)([], (0, c.CR)(t), !1));
                });
            },
          },
          API: a,
        },
        se = It.q.is.bind(It.q),
        ce = It.q.isSafe.bind(It.q),
        ue = n(7626);
      var le = function (t) {
        return this.__data__.set(t, "__lodash_hash_undefined__"), this;
      };
      var de = function (t) {
        return this.__data__.has(t);
      };
      function he(t) {
        var e = -1,
          n = null == t ? 0 : t.length;
        for (this.__data__ = new ue.Z(); ++e < n; ) this.add(t[e]);
      }
      (he.prototype.add = he.prototype.push = le), (he.prototype.has = de);
      var fe = he;
      var _e = function (t, e, n, r) {
        for (var i = t.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i; )
          if (e(t[o], o, t)) return o;
        return -1;
      };
      var pe = function (t) {
        return t != t;
      };
      var ve = function (t, e, n) {
        for (var r = n - 1, i = t.length; ++r < i; ) if (t[r] === e) return r;
        return -1;
      };
      var ge = function (t, e, n) {
        return e == e ? ve(t, e, n) : _e(t, pe, n);
      };
      var me = function (t, e) {
        return !!(null == t ? 0 : t.length) && ge(t, e, 0) > -1;
      };
      var be = function (t, e, n) {
        for (var r = -1, i = null == t ? 0 : t.length; ++r < i; )
          if (n(e, t[r])) return !0;
        return !1;
      };
      var ye = function (t, e) {
          return t.has(e);
        },
        we = n(5032),
        ke = n(8003),
        Ce = (0, we.Z)(ke.Z, "Set");
      var xe = function () {};
      var Ee = function (t) {
          var e = -1,
            n = Array(t.size);
          return (
            t.forEach(function (t) {
              n[++e] = t;
            }),
            n
          );
        },
        Le =
          Ce && 1 / Ee(new Ce([, -0]))[1] == 1 / 0
            ? function (t) {
                return new Ce(t);
              }
            : xe;
      var Se = function (t, e, n) {
        var r = -1,
          i = me,
          o = t.length,
          a = !0,
          s = [],
          c = s;
        if (n) (a = !1), (i = be);
        else if (o >= 200) {
          var u = e ? null : Le(t);
          if (u) return Ee(u);
          (a = !1), (i = ye), (c = new fe());
        } else c = e ? [] : s;
        t: for (; ++r < o; ) {
          var l = t[r],
            d = e ? e(l) : l;
          if (((l = n || 0 !== l ? l : 0), a && d == d)) {
            for (var h = c.length; h--; ) if (c[h] === d) continue t;
            e && c.push(d), s.push(l);
          } else i(c, d, n) || (c !== s && c.push(d), s.push(l));
        }
        return s;
      };
      var Te = function (t) {
          return t && t.length ? Se(t) : [];
        },
        Ae = n(3441),
        Ie = (function (t) {
          function e(n) {
            var r = n.status,
              i = void 0 === r ? 200 : r,
              o = n.data,
              a =
                t.call(
                  this,
                  (null == o ? void 0 : o.msg) ||
                    (null == o ? void 0 : o.message)
                ) || this;
            return (a.type = e.type), (a.status = i), (a.data = o), a;
          }
          return (0, c.ZT)(e, t), (e.type = "bindingServerError"), e;
        })(Error);
      function Oe(t) {
        var e, n;
        return (0, c.mG)(this, void 0, void 0, function () {
          var r, i, o;
          return (0, c.Jh)(this, function (a) {
            switch (a.label) {
              case 0:
                return a.trys.push([0, 2, , 3]), [4, t()];
              case 1:
                return (
                  (r = a.sent()),
                  [2, (0, c.pi)((0, c.pi)({}, r), { result: !0 })]
                );
              case 2:
                return (
                  (i = a.sent()),
                  (o = i),
                  [
                    2,
                    (0, c.pi)(
                      (0, c.pi)({}, (null == o ? void 0 : o.data) || {}),
                      {
                        statusCode: o.status,
                        msg:
                          (null === (e = null == o ? void 0 : o.data) ||
                          void 0 === e
                            ? void 0
                            : e.message) ||
                          (null === (n = null == o ? void 0 : o.data) ||
                          void 0 === n
                            ? void 0
                            : n.msg) ||
                          "网络异常",
                        result: !1,
                      }
                    ),
                  ]
                );
              case 3:
                return [2];
            }
          });
        });
      }
      var De = 0;
      function Ne(t, e, n) {
        return (0, c.mG)(this, void 0, void 0, function () {
          var r, i, o, a;
          return (0, c.Jh)(this, function (s) {
            switch (s.label) {
              case 0:
                (r = "".concat(l.h.bindingServer.getHost()).concat(t)),
                  (s.label = 1);
              case 1:
                return (
                  s.trys.push([1, 3, , 4]),
                  [
                    4,
                    h().request(r, n, {
                      timeout: 1e4,
                      method: e,
                      withCredentials: !0,
                      responseType: "json",
                    }),
                  ]
                );
              case 2:
                if ((i = s.sent()).data.status === De) return [2, i.data];
                throw new Ie(i);
              case 3:
                if (((o = s.sent()), (a = o).type === Ie.type)) throw a;
                if (a.status && a.response)
                  throw new Ie({ status: a.status, data: a.response.data });
                throw a;
              case 4:
                return [2];
            }
          });
        });
      }
      var Re = function (t) {
          var e = t.token,
            n = t.appCode;
          return Oe(function () {
            return Ne("/account/reservation/v1/query", "GET", {
              token: e,
              appCode: n,
            });
          });
        },
        ze = function (t) {
          var e = t.token,
            n = t.appCode,
            r = t.source,
            i = t.platform;
          return Oe(function () {
            return Ne("/account/reservation/v1/apply", "POST", {
              token: e,
              appCode: n,
              source: r,
              platform: i,
            });
          });
        },
        Pe = { HG: 1, SKLAND: 2 },
        je = function () {
          return (0, c.mG)(void 0, void 0, void 0, function () {
            var t, e, n, r;
            return (0, c.Jh)(this, function (i) {
              switch (i.label) {
                case 0:
                  return [4, ot.getToken()];
                case 1:
                  return (t = i.sent()).result &&
                    (null === (n = t.data) || void 0 === n ? void 0 : n.token)
                    ? [4, ot.grant(Ae.n.appCode)]
                    : [2, (0, c.pi)((0, c.pi)({}, t), { data: void 0 })];
                case 2:
                  return (e = i.sent()).result &&
                    (null === (r = e.data) || void 0 === r ? void 0 : r.token)
                    ? [2, e]
                    : [2, (0, c.pi)((0, c.pi)({}, e), { data: void 0 })];
              }
            });
          });
        },
        Fe = {
          doReservation: function (t, e) {
            return (0, c.mG)(void 0, void 0, void 0, function () {
              var n, r;
              return (0, c.Jh)(this, function (i) {
                switch (i.label) {
                  case 0:
                    return [4, je()];
                  case 1:
                    return (
                      (n = i.sent()),
                      (null === (r = n.data) || void 0 === r ? void 0 : r.token)
                        ? [
                            2,
                            ze({
                              token: n.data.token,
                              appCode: t,
                              platform: Te(e.platform),
                              source: Pe[e.source],
                            }),
                          ]
                        : [2, (0, c.pi)((0, c.pi)({}, n), { data: void 0 })]
                    );
                }
              });
            });
          },
          checkReservation: function (t) {
            return (0, c.mG)(void 0, void 0, void 0, function () {
              var e, n;
              return (0, c.Jh)(this, function (r) {
                switch (r.label) {
                  case 0:
                    return [4, je()];
                  case 1:
                    return (
                      (e = r.sent()),
                      (null === (n = e.data) || void 0 === n ? void 0 : n.token)
                        ? [2, Re({ token: e.data.token, appCode: t })]
                        : [2, (0, c.pi)((0, c.pi)({}, e), { data: void 0 })]
                    );
                }
              });
            });
          },
        };
      function He(t, e) {
        var n = new URL(t);
        return (
          Object.entries(e).forEach(function (t) {
            var e = (0, c.CR)(t, 2),
              r = e[0],
              i = e[1];
            n.searchParams.set(r, i);
          }),
          n.toString()
        );
      }
      var Me = !navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      function Ue(t) {
        var e = { title: t.title, text: t.title, url: t.url };
        return (
          "function" == typeof navigator.share &&
          "function" == typeof navigator.canShare &&
          navigator.canShare(e)
        );
      }
      var Ge = (function () {
          function t(t, e) {
            var r = this;
            (this.shareToWeibo = function () {
              return (0, c.mG)(r, void 0, void 0, function () {
                var t;
                return (0, c.Jh)(this, function (e) {
                  return (
                    (t = "https://service.weibo.com/share/share.php?url="
                      .concat(encodeURIComponent(this.url), "&title=")
                      .concat(encodeURIComponent(this.title), "&pic=")
                      .concat(
                        encodeURIComponent(this.image),
                        "&searchPic=false"
                      )),
                    this.openWindow(t),
                    [2, !0]
                  );
                });
              });
            }),
              (this.shareToQQ = function () {
                return (0, c.mG)(r, void 0, void 0, function () {
                  var t;
                  return (0, c.Jh)(this, function (e) {
                    return (
                      (t =
                        "https://connect.qq.com/widget/shareqq/index.html?url="
                          .concat(encodeURIComponent(this.url), "&title=")
                          .concat(encodeURIComponent(this.title), "&pics=")
                          .concat(encodeURIComponent(this.image), "&summary=")
                          .concat(encodeURIComponent(this.description))),
                      this.openWindow(t),
                      [2, !0]
                    );
                  });
                });
              }),
              (this.shareToQZone = function () {
                return (0, c.mG)(r, void 0, void 0, function () {
                  var t;
                  return (0, c.Jh)(this, function (e) {
                    return (
                      (t =
                        "https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url="
                          .concat(encodeURIComponent(this.url), "&title=")
                          .concat(encodeURIComponent(this.title), "&pics=")
                          .concat(encodeURIComponent(this.image), "&summary=")
                          .concat(encodeURIComponent(this.description))),
                      this.openWindow(t),
                      [2, !0]
                    );
                  });
                });
              }),
              (this.shareLinkInSkland = function () {
                return (0, c.mG)(r, void 0, void 0, function () {
                  var t;
                  return (0, c.Jh)(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return [4, n.e(306).then(n.bind(n, 2306))];
                      case 1:
                        return !1 === (t = e.sent()).checkInSklandApp()
                          ? [2, !1]
                          : [
                              4,
                              t.default.shareLink({
                                link: this.url,
                                title: this.title,
                                description: this.description,
                                thumbUrl: this.image,
                              }),
                            ];
                      case 2:
                        return e.sent(), [2, !0];
                    }
                  });
                });
              }),
              (this.copyLink = function () {
                return (0, c.mG)(r, void 0, void 0, function () {
                  var t, e;
                  return (0, c.Jh)(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return (
                          (t = this.url),
                          (null === (e = this.options) || void 0 === e
                            ? void 0
                            : e.copyTitle) &&
                            (t = "【"
                              .concat(this.title, "】 ")
                              .concat(this.url)),
                          [4, this.copyToClipboard(t)]
                        );
                      case 1:
                        return [2, n.sent()];
                    }
                  });
                });
              }),
              (this.shareWithSystem = function () {
                return (0, c.mG)(r, void 0, void 0, function () {
                  var t, e;
                  return (0, c.Jh)(this, function (n) {
                    switch (n.label) {
                      case 0:
                        if (
                          ((t = {
                            title: this.title,
                            text: this.title,
                            url: this.url,
                          }),
                          !Ue(this))
                        )
                          return [2, !1];
                        n.label = 1;
                      case 1:
                        return (
                          n.trys.push([1, 3, , 4]), [4, navigator.share(t)]
                        );
                      case 2:
                        return n.sent(), [2, !0];
                      case 3:
                        return (e = n.sent()), console.error(e), [2, !1];
                      case 4:
                        return [2];
                    }
                  });
                });
              }),
              (this.url = t.url || location.href),
              (this.title = t.title || document.title),
              (this.description = t.desc || ""),
              (this.image = t.imgUrl || ""),
              (this.options = e),
              (this.shareBy = t.shareBy);
            var i = { share_type: "link" };
            void 0 !== this.shareBy && (i.share_by = this.shareBy.toString()),
              (this.url = He(this.url, i));
          }
          return (
            (t.prototype.share = function (t) {
              return (0, c.mG)(this, void 0, void 0, function () {
                var e;
                return (0, c.Jh)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (e = {
                        weibo: this.shareToWeibo,
                        qq: this.shareToQQ,
                        qzone: this.shareToQZone,
                        copy: this.copyLink,
                        system: this.shareWithSystem,
                        "link-in-skland": this.shareLinkInSkland,
                      })[t]
                        ? [4, e[t].call(this)]
                        : [3, 2];
                    case 1:
                      return [2, n.sent()];
                    case 2:
                      return (
                        console.error("Unsupported platform: ".concat(t)),
                        [2, !1]
                      );
                  }
                });
              });
            }),
            (t.prototype.openWindow = function (t) {
              window.open(t, "newWindow", "width=600,height=400,left=0,top=0");
            }),
            (t.prototype.copyToClipboard = function (t) {
              return (0, c.mG)(this, void 0, void 0, function () {
                var e;
                return (0, c.Jh)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      if (!navigator.clipboard || !window.isSecureContext)
                        return [3, 5];
                      n.label = 1;
                    case 1:
                      return (
                        n.trys.push([1, 3, , 4]),
                        [4, navigator.clipboard.writeText(t)]
                      );
                    case 2:
                      return n.sent(), [2, !0];
                    case 3:
                      return (
                        (e = n.sent()),
                        console.error("Failed to copy: ", e),
                        [2, this.fallbackCopyToClipboard(t)]
                      );
                    case 4:
                      return [3, 6];
                    case 5:
                      return [2, this.fallbackCopyToClipboard(t)];
                    case 6:
                      return [2];
                  }
                });
              });
            }),
            (t.prototype.fallbackCopyToClipboard = function (t) {
              var e = document.createElement("textarea");
              (e.value = t),
                (e.style.position = "fixed"),
                document.body.appendChild(e),
                e.focus(),
                e.select();
              try {
                return (
                  document.execCommand("copy"), document.body.removeChild(e), !0
                );
              } catch (t) {
                return (
                  console.error("Failed to copy text: ", t),
                  document.body.removeChild(e),
                  !1
                );
              }
            }),
            t
          );
        })(),
        Be = {
          generateQRCode: function (t) {
            var e = t.url,
              r = t.shareBy,
              i = t.options;
            return (0, c.mG)(this, void 0, void 0, function () {
              var t, o, a, s, u, l;
              return (0, c.Jh)(this, function (d) {
                switch (d.label) {
                  case 0:
                    return (
                      d.trys.push([0, 3, , 4]),
                      [4, n.e(592).then(n.t.bind(n, 2592, 19))]
                    );
                  case 1:
                    return (
                      (t = d.sent()),
                      (o = { share_type: "qrcode" }),
                      void 0 !== r && (o.share_by = r.toString()),
                      (a = He(e, o)),
                      (s = {
                        width: 256,
                        margin: 1,
                        color: { dark: "#000000", light: "#ffffff" },
                      }),
                      (u = (0, c.pi)((0, c.pi)({}, s), i)),
                      [4, t.toDataURL(a, u)]
                    );
                  case 2:
                    return [2, d.sent()];
                  case 3:
                    return (
                      (l = d.sent()),
                      console.error("Failed to generate QR code", l),
                      [2, ""]
                    );
                  case 4:
                    return [2];
                }
              });
            });
          },
        },
        Ze = (function () {
          function t(t) {
            this.params = t;
          }
          return (
            (t.prototype.skland = function () {
              return (0, c.mG)(this, void 0, void 0, function () {
                return (0, c.Jh)(this, function (t) {
                  return [
                    2,
                    [{ key: "link-in-skland", icon: n(7317), title: "分享" }],
                  ];
                });
              });
            }),
            (t.prototype.pc = function () {
              return [
                { key: "weibo", icon: n(8185), title: "微博" },
                { key: "qq", icon: n(3491), title: "QQ" },
                { key: "qzone", icon: n(7376), title: "QQ空间" },
                { key: "copy", icon: n(6290), title: "复制链接" },
              ];
            }),
            (t.prototype.mobile = function () {
              return Ue(this.params)
                ? [
                    { key: "system", icon: n(7317), title: "系统分享" },
                    { key: "copy", icon: n(6290), title: "复制链接" },
                  ]
                : [{ key: "copy", icon: n(6290), title: "复制链接" }];
            }),
            (t.prototype.getChannels = function () {
              return (0, c.mG)(this, void 0, void 0, function () {
                var t;
                return (0, c.Jh)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [4, n.e(306).then(n.bind(n, 2306))];
                    case 1:
                      return (
                        (t = e.sent().checkInSklandApp),
                        t()
                          ? [2, this.skland()]
                          : Me
                          ? [2, this.pc()]
                          : [2, this.mobile()]
                      );
                  }
                });
              });
            }),
            t
          );
        })(),
        Je = (function () {
          function t() {
            this.utils = Be;
          }
          return (
            (t.prototype.setGlobalConfig = function (t, e) {
              (this.params = t),
                (this.options = (0, c.pi)((0, c.pi)({}, this.options), e));
            }),
            (t.prototype.shareSiteTo = function (t, e, n) {
              var r;
              return (0, c.mG)(this, void 0, void 0, function () {
                var i, o;
                return (0, c.Jh)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      if (
                        !(i = {
                          params: e || this.params,
                          options: n || this.options,
                        }).params
                      )
                        throw new Error(
                          "share params not set, you should set global config params by setGlobalConfig or provide params to function"
                        );
                      return [4, new Ge(i.params, i.options).share(t)];
                    case 1:
                      return (
                        (o = a.sent()) &&
                          L.t.event("social_media_share", {
                            channel: "copy" === t ? "copy_url" : t,
                            target:
                              (null === (r = i.options) || void 0 === r
                                ? void 0
                                : r.target) || "main_site",
                          }),
                        [2, o]
                      );
                  }
                });
              });
            }),
            (t.prototype.canShareSystem = function (t) {
              var e = t || this.params;
              if (!e)
                throw new Error(
                  "Share parameters are required. Please use setGlobalConfig to set default params or provide params to this function"
                );
              return Ue(e);
            }),
            (t.prototype.getAvailableChannels = function (t) {
              return (0, c.mG)(this, void 0, void 0, function () {
                var e;
                return (0, c.Jh)(this, function (n) {
                  if (!(e = (null == t ? void 0 : t.params) || this.params))
                    throw new Error(
                      "Share parameters are required. Please use setGlobalConfig to set default params or provide params to this function"
                    );
                  return [2, new Ze(e).getChannels()];
                });
              });
            }),
            t
          );
        })(),
        Ve = new Je(),
        Ke = n(6096),
        We = n(6197),
        Ye = function (t) {
          return (0, c.mG)(void 0, void 0, void 0, function () {
            return (0, c.Jh)(this, function (e) {
              switch (e.label) {
                case 0:
                  return [4, n.e(946).then(n.bind(n, 946))];
                case 1:
                  return (
                    (0, e.sent().renderFooter)(t, {
                      links: [
                        {
                          url: "https://user.hypergryph.com/protocol/popucom/privacy",
                          name: "个人信息保护政策",
                        },
                        {
                          url: "https://user.hypergryph.com/protocol/popucom/children_privacy",
                          name: "儿童个人信息保护政策",
                        },
                        {
                          url: "https://user.hypergryph.com/protocol/popucom/service",
                          name: "使用许可及服务协议",
                        },
                        "custody",
                        {
                          url: "https://customer-service.hypergryph.com/popucom",
                          name: "客服中心",
                        },
                      ],
                      siteInfos: [
                        "ICP",
                        "NCL",
                        { content: ct.popucom.approval },
                        { content: ct.popucom.ISBN },
                        "PSR",
                      ],
                      externalLinks: [
                        "reportIllegalInfo",
                        "reportIllegalInfoShanghai",
                        "962110",
                      ],
                    }),
                    [2, new lt()]
                  );
              }
            });
          });
        },
        Xe = { insertFooter: Ye, renderFooter: Ye },
        qe = {
          host: "./",
          appCode: "cf5fa52d9dd9511d",
        },
        $e = (function (t) {
          function e(n) {
            var r = n.statusCode,
              i = void 0 === r ? 200 : r,
              o = n.resBody,
              a = void 0 === o ? {} : o,
              s = t.call(this, a.msg || a.message || "network error") || this;
            return (s.type = e.type), (s.statusCode = i), (s.resBody = a), s;
          }
          return (0, c.ZT)(e, t), (e.type = "webSurveyServerError"), e;
        })(Error),
        Qe = function (t) {
          return (null == t ? void 0 : t.type) === $e.type;
        };
      function tn(t) {
        return (0, c.mG)(this, void 0, void 0, function () {
          var e, n, r;
          return (0, c.Jh)(this, function (i) {
            switch (i.label) {
              case 0:
                return i.trys.push([0, 2, , 3]), [4, t()];
              case 1:
                return (
                  (e = i.sent()),
                  [2, (0, c.pi)((0, c.pi)({}, e), { result: !0 })]
                );
              case 2:
                return (
                  (n = i.sent()),
                  Qe((r = n))
                    ? [
                        2,
                        (0, c.pi)(
                          (0, c.pi)({}, (null == r ? void 0 : r.resBody) || {}),
                          { statusCode: r.statusCode, result: !1 }
                        ),
                      ]
                    : (console.warn(r),
                      [
                        2,
                        {
                          result: !1,
                          msg:
                            (null == r ? void 0 : r.message) || "network error",
                        },
                      ])
                );
              case 3:
                return [2];
            }
          });
        });
      }
      var en,
        nn,
        rn = function (t) {
          var e = t.token,
            n = t.surveyId;
          return (0, c.mG)(void 0, void 0, void 0, function () {
            return (0, c.Jh)(this, function (t) {
              return [
                2,
                tn(function () {
                  return (function (t, e, n) {
                    return (
                      void 0 === e && (e = null),
                      void 0 === n && (n = "GET"),
                      (0, c.mG)(this, void 0, void 0, function () {
                        var r, i, o;
                        return (0, c.Jh)(this, function (a) {
                          switch (a.label) {
                            case 0:
                              return (
                                a.trys.push([0, 2, , 3]),
                                [
                                  4,
                                  h().request(t, e, {
                                    baseURL: qe.host,
                                    method: n,
                                    withCredentials: !1,
                                    responseType: "json",
                                    timeout: 1e4,
                                  }),
                                ]
                              );
                            case 1:
                              if (0 === (r = a.sent()).data.code)
                                return [2, r.data];
                              throw new $e({ resBody: r.data });
                            case 2:
                              if (((i = a.sent()), Qe((o = i)))) throw o;
                              if (o.status && o.response)
                                throw new $e({
                                  statusCode: o.status,
                                  resBody: o.response.data,
                                });
                              throw o;
                            case 3:
                              return [2];
                          }
                        });
                      })
                    );
                  })(
                    "/client/v1/survey/answer_status",
                    { token: e, hashId: n },
                    "GET"
                  );
                }),
              ];
            });
          });
        },
        on = {
          checkAnswerStatus: function (t) {
            return (0, c.mG)(void 0, void 0, void 0, function () {
              var e, n, r;
              return (0, c.Jh)(this, function (i) {
                switch (i.label) {
                  case 0:
                    return [
                      4,
                      (0, c.mG)(void 0, void 0, void 0, function () {
                        var t, e;
                        return (0, c.Jh)(this, function (n) {
                          switch (n.label) {
                            case 0:
                              return [4, ot.grant(qe.appCode, 1)];
                            case 1:
                              return (t = n.sent()).result &&
                                (null === (e = t.data) || void 0 === e
                                  ? void 0
                                  : e.token)
                                ? [2, t]
                                : [
                                    2,
                                    (0, c.pi)((0, c.pi)({}, t), {
                                      data: void 0,
                                    }),
                                  ];
                          }
                        });
                      }),
                    ];
                  case 1:
                    return (
                      (e = i.sent()),
                      (null === (r = e.data) || void 0 === r ? void 0 : r.token)
                        ? [4, rn({ token: e.data.token, surveyId: t })]
                        : [2, (0, c.pi)((0, c.pi)({}, e), { data: void 0 })]
                    );
                  case 2:
                    return (
                      (n = i.sent()),
                      [
                        2,
                        (0, c.pi)((0, c.pi)({}, n), {
                          result: n.result || 2 === n.code,
                          data: { answered: 2 === n.code },
                        }),
                      ]
                    );
                }
              });
            });
          },
        },
        an = { hypergryph: xt, ak: kt, exa: Lt, endfield: Tt, popucom: Xe },
        sn = n(1890),
        cn = n(8287);
      h().interceptors.request.use(function (t) {
        return (
          (void 0 === (null == t ? void 0 : t.body) ||
            null === (null == t ? void 0 : t.body)) &&
            t.headers &&
            (delete t.headers["Content-Type"],
            delete t.headers["content-type"]),
          t
        );
      });
      var un = {
        assets: u.L,
        Share: _,
        Analytics: C,
        User: ot,
        SMS: at.y,
        Email: At,
        AK: kt,
        HG: xt,
        EXA: Lt,
        POPUCOM: Xe,
        ENDFIELD: Tt,
        projects: an,
        Reservation: Fe,
        meta: ct,
        hostConfig: l.h,
        RES_STATUS: { HG: S.k_, U8: _t },
        SDK_TYPE: "HG",
        Host: l.h,
        host: l.h,
        Account: V.Z,
        account: V.Z,
        U8: qt,
        u8: qt,
        Role: re,
        role: re,
        Address: ae,
        address: ae,
        navigation: X,
        socialShare: Ve,
        survey: on,
        ETL: L.t,
        Utils: s,
        skin: We.T,
        AntiAddiction: sn.Bs,
        ANTI_ADDICTION_STATE: sn.nW,
        LOGOUT_REASON: x.HW,
      };
      location &&
        location.host &&
        /(^|\.)skland.com$/.test(location.host) &&
        l.h.apiServer.setHost("./web-api.skland.com");
      var ln = window._HG_WEB_SDK_INIT_OPTIONS;
      ln &&
        (ln.etl && (0, L.U)(ln.etl),
        ln.host &&
          ln.host.apiServer &&
          l.h.apiServer.setHost(ln.host.apiServer),
        ln.skin && We.T.set(ln.skin));
      for (
        (0, c.mG)(void 0, void 0, void 0, function () {
          var t, e, n, r, i, o, a;
          return (0, c.Jh)(this, function (s) {
            (t = [it, W]),
              (e = 0),
              (n = function () {
                ++e >= t.length && (0, Ke.F)();
              });
            try {
              for (r = (0, c.XA)(t), i = r.next(); !i.done; i = r.next())
                (0, i.value)().then(n, n);
            } catch (t) {
              o = { error: t };
            } finally {
              try {
                i && !i.done && (a = r.return) && a.call(r);
              } finally {
                if (o) throw o.error;
              }
            }
            return [2];
          });
        }),
          (0, J.KD)() && (0, J.LN)("c_init_end", { c_code: 0 }),
          window.HG_SDK = un,
          window.__SDK_DEBUG__ = {
            serverTimeService: cn.Y,
            antiAddictionTask: sn.XN,
            nowReadable: function () {
              var t = cn.Y.now();
              return {
                timestamp: t,
                beijing: t
                  ? new Date(1e3 * t).toLocaleString("zh-CN", {
                      timeZone: "Asia/Shanghai",
                    })
                  : null,
                isHoliday: cn.Y.getIsHoliday(),
                fetched: cn.Y.hasFetched(),
              };
            },
          };
        null === (en = window._HG_SDK_CALLBACK_QUEUE) || void 0 === en
          ? void 0
          : en.length;

      )
        null === (nn = window._HG_SDK_CALLBACK_QUEUE.shift()) ||
          void 0 === nn ||
          nn();
      delete window._HG_SDK_CALLBACK_QUEUE;
    },
    3441: function (t, e, n) {
      "use strict";
      n.d(e, {
        n: function () {
          return r;
        },
      });
      var r = {
        host: "./binding-api-account-prod.hypergryph.com",
        appCode: "be36d44aa36bfb5b",
      };
    },
    9655: function (t, e, n) {
      "use strict";
      n.d(e, {
        y: function () {
          return s;
        },
      });
      var r = n(655),
        i = n(9054),
        o = n(8836);
      function a(t, e) {
        return (0, r.mG)(this, void 0, void 0, function () {
          return (0, r.Jh)(this, function (n) {
            return [2, o.ej.general.sendSMS(t, e)];
          });
        });
      }
      var s = {
        types: i.I,
        sendSms: a,
        getLoginSms: function (t) {
          return (0, r.mG)(this, void 0, void 0, function () {
            return (0, r.Jh)(this, function (e) {
              return [2, a(t, i.I.LOGIN)];
            });
          });
        },
      };
    },
    635: function (t, e, n) {
      "use strict";
      n.d(e, {
        g: function () {
          return et;
        },
        HW: function () {
          return L;
        },
        YR: function () {
          return Q;
        },
        I8: function () {
          return W;
        },
        Nl: function () {
          return Z;
        },
        CS: function () {
          return B;
        },
        Cp: function () {
          return K;
        },
        OW: function () {
          return V;
        },
        J9: function () {
          return T;
        },
        qz: function () {
          return A;
        },
        BX: function () {
          return J;
        },
        bc: function () {
          return tt;
        },
        NP: function () {
          return N;
        },
        hq: function () {
          return $;
        },
        LP: function () {
          return S;
        },
        bG: function () {
          return F;
        },
        Bk: function () {
          return M;
        },
        Fw: function () {
          return G;
        },
        oN: function () {
          return rt;
        },
        KA: function () {
          return C;
        },
        D_: function () {
          return k;
        },
        kS: function () {
          return P;
        },
        ou: function () {
          return D;
        },
        $4: function () {
          return O;
        },
        fn: function () {
          return X;
        },
        z2: function () {
          return w;
        },
        AW: function () {
          return Y;
        },
        Fr: function () {
          return b;
        },
        X: function () {
          return j;
        },
        HD: function () {
          return x;
        },
        d4: function () {
          return E;
        },
        xk: function () {
          return q;
        },
      });
      var r,
        i = n(655),
        o = n(6433),
        a = n(8836),
        s = n(1764),
        c = function (t) {
          var e = [],
            n = { running: !1, toRun: null };
          return function () {
            for (var r = [], o = 0; o < arguments.length; o++)
              r[o] = arguments[o];
            return (0, i.mG)(void 0, void 0, void 0, function () {
              return (0, i.Jh)(this, function (o) {
                return [
                  2,
                  new Promise(function (o, a) {
                    var s, c;
                    (s = function () {
                      return t.apply(void 0, (0, i.ev)([], (0, i.CR)(r), !1));
                    }),
                      (c = function (t, e) {
                        t ? a(t) : o(e);
                      }),
                      (0, i.mG)(void 0, void 0, void 0, function () {
                        var t, r, o, a, u, l;
                        return (0, i.Jh)(this, function (d) {
                          switch (d.label) {
                            case 0:
                              if ((e.push([s, c]), n.running)) return [2];
                              (n.running = !0),
                                (n.toRun = e.shift() || null),
                                (d.label = 1);
                            case 1:
                              if (!n.toRun) return [3, 6];
                              (t = (0, i.CR)(n.toRun, 2)),
                                (r = t[0]),
                                (o = t[1]),
                                (d.label = 2);
                            case 2:
                              return (
                                d.trys.push([2, 4, , 5]),
                                (a = o),
                                (u = [null]),
                                [4, r()]
                              );
                            case 3:
                              return (
                                a.apply(void 0, u.concat([d.sent()])), [3, 5]
                              );
                            case 4:
                              return (l = d.sent()), o(l), [3, 5];
                            case 5:
                              return (n.toRun = e.shift() || null), [3, 1];
                            case 6:
                              return (n.running = !1), [2];
                          }
                        });
                      });
                  }),
                ];
              });
            });
          };
        },
        u = { isSKLand: /skland/i },
        l = n(2005),
        d = n(3837),
        h = n(1890),
        f = n(1370),
        _ = n(4459),
        p = n(3555),
        v = n(6096);
      function g(t) {
        void 0 === t && (t = {});
        var e = (0, _.q8)();
        return null !== e && (t.login_type = e), t;
      }
      var m = new s.C(-1),
        b = function (t) {
          return (0, i.mG)(this, void 0, void 0, function () {
            return (0, i.Jh)(this, function (e) {
              return d.ZH(), m.clear(), [2, o.q.set({ content: t }, "hg")];
            });
          });
        };
      function y(t, e) {
        return (0, i.mG)(this, void 0, void 0, function () {
          var n, r;
          return (0, i.Jh)(this, function (i) {
            switch (i.label) {
              case 0:
                return (
                  (n = (0, f.H)("c_login_start", { login_type: t })), [4, e()]
                );
              case 1:
                return (
                  (r = i.sent()),
                  (0, f.Y)(
                    "c_login_end",
                    { c_code: r.result ? 0 : -1, login_type: t },
                    n
                  ),
                  r.result && (0, _.xf)(t),
                  [2, r]
                );
            }
          });
        });
      }
      function w(t, e, n) {
        var r;
        return (0, i.mG)(this, void 0, void 0, function () {
          var o, s;
          return (0, i.Jh)(this, function (c) {
            switch (c.label) {
              case 0:
                return [4, a.ej.auth.register(t, e, n)];
              case 1:
                return (o = c.sent()).result &&
                  (null === (r = o.data) || void 0 === r ? void 0 : r.token)
                  ? [4, b(o.data.token)]
                  : [3, 3];
              case 2:
                return (
                  (s = c.sent()),
                  [2, (0, i.pi)((0, i.pi)({}, s), { data: o.data })]
                );
              case 3:
                return [2, o];
            }
          });
        });
      }
      function k(t, e) {
        return (0, i.mG)(this, void 0, void 0, function () {
          var n = this;
          return (0, i.Jh)(this, function (r) {
            return [
              2,
              y(_.Ez.PASSWORD, function () {
                return (0, i.mG)(n, void 0, void 0, function () {
                  var n, r, o;
                  return (0, i.Jh)(this, function (s) {
                    switch (s.label) {
                      case 0:
                        return [4, a.ej.auth.loginByPhonePassword(t, e)];
                      case 1:
                        return (n = s.sent()).result &&
                          (null === (o = n.data) || void 0 === o
                            ? void 0
                            : o.token)
                          ? [4, b(n.data.token)]
                          : [3, 3];
                      case 2:
                        return (
                          (r = s.sent()),
                          [2, (0, i.pi)((0, i.pi)({}, r), { data: n.data })]
                        );
                      case 3:
                        return [2, n];
                    }
                  });
                });
              }),
            ];
          });
        });
      }
      function C(t, e) {
        return (0, i.mG)(this, void 0, void 0, function () {
          var n = this;
          return (0, i.Jh)(this, function (r) {
            return [
              2,
              y(_.Ez.PHONE_SMS, function () {
                return (0, i.mG)(n, void 0, void 0, function () {
                  var n, r, o;
                  return (0, i.Jh)(this, function (s) {
                    switch (s.label) {
                      case 0:
                        return [4, a.ej.auth.loginByPhoneCode(t, e)];
                      case 1:
                        return (n = s.sent()).result &&
                          (null === (o = n.data) || void 0 === o
                            ? void 0
                            : o.token)
                          ? [4, b(n.data.token)]
                          : [3, 3];
                      case 2:
                        return (
                          (r = s.sent()),
                          [2, (0, i.pi)((0, i.pi)({}, r), { data: n.data })]
                        );
                      case 3:
                        return [2, n];
                    }
                  });
                });
              }),
            ];
          });
        });
      }
      function x(t, e, n, r) {
        return (
          void 0 === r && (r = _.Ez.PHONE_SMS),
          (0, i.mG)(this, void 0, void 0, function () {
            var o = this;
            return (0, i.Jh)(this, function (s) {
              return [
                2,
                y(r, function () {
                  return (0, i.mG)(o, void 0, void 0, function () {
                    var o, s, c;
                    return (0, i.Jh)(this, function (u) {
                      switch (u.label) {
                        case 0:
                          return [4, a.ej.auth.tokenByPhoneCode(t, e, n, r)];
                        case 1:
                          return (o = u.sent()).result &&
                            (null === (c = o.data) || void 0 === c
                              ? void 0
                              : c.token)
                            ? (o.data.deviceToken &&
                                (o.data.hgId && n
                                  ? (0, l.CE)(
                                      o.data.deviceToken,
                                      o.data.hgId,
                                      n
                                    )
                                  : (0, l._4)(o.data.deviceToken)),
                              [4, b(o.data.token)])
                            : [3, 3];
                        case 2:
                          return (
                            (s = u.sent()),
                            [2, (0, i.pi)((0, i.pi)({}, s), { data: o.data })]
                          );
                        case 3:
                          return [2, o];
                      }
                    });
                  });
                }),
              ];
            });
          })
        );
      }
      function E(t, e, n) {
        return (
          void 0 === n && (n = _.Ez.SCAN),
          (0, i.mG)(this, void 0, void 0, function () {
            var r = this;
            return (0, i.Jh)(this, function (o) {
              return [
                2,
                y(n, function () {
                  return (0, i.mG)(r, void 0, void 0, function () {
                    var r, o, s;
                    return (0, i.Jh)(this, function (c) {
                      switch (c.label) {
                        case 0:
                          return [4, a.ej.auth.tokenByScanCode(t, e, n)];
                        case 1:
                          return (r = c.sent()).result &&
                            (null === (s = r.data) || void 0 === s
                              ? void 0
                              : s.token)
                            ? (r.data.deviceToken &&
                                (r.data.hgId && e
                                  ? (0, l.CE)(
                                      r.data.deviceToken,
                                      r.data.hgId,
                                      e
                                    )
                                  : (0, l._4)(r.data.deviceToken)),
                              [4, b(r.data.token)])
                            : [3, 3];
                        case 2:
                          return (
                            (o = c.sent()),
                            [2, (0, i.pi)((0, i.pi)({}, o), { data: r.data })]
                          );
                        case 3:
                          return [2, r];
                      }
                    });
                  });
                }),
              ];
            });
          })
        );
      }
      var L,
        S = c(function () {
          var t;
          return (0, i.mG)(this, void 0, void 0, function () {
            var e, n;
            return (0, i.Jh)(this, function (r) {
              switch (r.label) {
                case 0:
                  return [4, (0, v.f)()];
                case 1:
                  return (
                    r.sent(),
                    (e = m.getCache())
                      ? [2, { result: !0, data: { token: e } }]
                      : [4, o.q.get("hg")]
                  );
                case 2:
                  return (n = r.sent()).result &&
                    (null === (t = n.data) || void 0 === t ? void 0 : t.content)
                    ? (m.saveCache(n.data.content),
                      [
                        2,
                        (0, i.pi)((0, i.pi)({}, n), {
                          data: { token: n.data.content },
                        }),
                      ])
                    : [
                        2,
                        (0, i.pi)((0, i.pi)({}, n), {
                          type: "apiServer",
                          data: void 0,
                        }),
                      ];
              }
            });
          });
        }),
        T = function () {
          return (0, i.mG)(void 0, void 0, void 0, function () {
            var t, e, n, r;
            return (0, i.Jh)(this, function (i) {
              switch (i.label) {
                case 0:
                  return (t = m.getCache())
                    ? [4, o.q.get("hg")]
                    : [2, { result: !0, data: { status: 1 } }];
                case 1:
                  return (
                    (e = i.sent()),
                    (n =
                      null === (r = e.data) || void 0 === r
                        ? void 0
                        : r.content),
                    e.result && n
                      ? t !== n
                        ? [2, { result: !0, data: { status: 3 } }]
                        : [2, { result: !0, data: { status: 0 } }]
                      : [2, { result: !0, data: { status: 2 } }]
                  );
              }
            });
          });
        };
      function A() {
        return (0, i.mG)(this, void 0, void 0, function () {
          return (0, i.Jh)(this, function (t) {
            return d.ZH(), m.clear(), [2, o.q.clear("hg")];
          });
        });
      }
      !(function (t) {
        (t[(t.MANUAL = 0)] = "MANUAL"),
          (t[(t.ANTI_ADDICTION_CURFEW = 1)] = "ANTI_ADDICTION_CURFEW"),
          (t[(t.ACCOUNT_DELETED = 2)] = "ACCOUNT_DELETED");
      })(L || (L = {}));
      var I = [];
      function O(t) {
        I.indexOf(t) < 0 && I.push(t);
      }
      function D(t) {
        var e = I.indexOf(t);
        e >= 0 && I.splice(e, 1);
      }
      function N(t) {
        var e, n;
        try {
          for (
            var r = (0, i.XA)(I.slice()), o = r.next();
            !o.done;
            o = r.next()
          ) {
            var a = o.value;
            try {
              a(t);
            } catch (t) {}
          }
        } catch (t) {
          e = { error: t };
        } finally {
          try {
            o && !o.done && (n = r.return) && n.call(r);
          } finally {
            if (e) throw e.error;
          }
        }
      }
      var R =
        (((r = {})[L.ANTI_ADDICTION_CURFEW] = 1),
        (r[L.MANUAL] = 2),
        (r[L.ACCOUNT_DELETED] = 3),
        r);
      function z(t) {
        var e = { logout_type: R[t] },
          n = (0, _.q8)();
        null !== n && (e.login_type = n),
          (0, f.Y)("c_logout_end", e),
          (0, _.Cy)(),
          (0, _.b7)();
      }
      function P(t, e) {
        var n, r;
        return (
          void 0 === e && (e = L.MANUAL),
          (0, i.mG)(this, void 0, void 0, function () {
            var o, s, c, l, d;
            return (0, i.Jh)(this, function (f) {
              switch (f.label) {
                case 0:
                  return (
                    h.XN.close(),
                    (o =
                      navigator &&
                      navigator.userAgent &&
                      u.isSKLand.test(navigator.userAgent)),
                    t
                      ? o
                        ? [2, { result: !0, status: 0, code: 0, data: null }]
                        : [2, a.ej.user.logout(t)]
                      : [4, S()]
                  );
                case 1:
                  return (s = f.sent()).result &&
                    (null === (n = s.data) || void 0 === n ? void 0 : n.token)
                    ? o
                      ? [4, A()]
                      : [3, 3]
                    : [3, 6];
                case 2:
                  return (c = f.sent()), N(e), z(e), [2, c];
                case 3:
                  return [
                    4,
                    a.ej.user.logout(
                      null === (r = s.data) || void 0 === r ? void 0 : r.token
                    ),
                  ];
                case 4:
                  return (l = f.sent()), [4, A()];
                case 5:
                  return (
                    (d = f.sent()),
                    N(e),
                    z(e),
                    [2, { result: l.result && d.result }]
                  );
                case 6:
                  return [2, (0, i.pi)((0, i.pi)({}, s), { data: void 0 })];
              }
            });
          })
        );
      }
      function j(t, e) {
        var n, r;
        return (0, i.mG)(this, void 0, void 0, function () {
          var o, s;
          return (0, i.Jh)(this, function (c) {
            switch (c.label) {
              case 0:
                return e ? [2, a.ej.user.sendSMS(t, e)] : [4, S()];
              case 1:
                return (o = c.sent()).result &&
                  (null === (n = o.data) || void 0 === n ? void 0 : n.token)
                  ? [
                      4,
                      a.ej.user.sendSMS(
                        t,
                        null === (r = o.data) || void 0 === r ? void 0 : r.token
                      ),
                    ]
                  : [3, 3];
              case 2:
                return (
                  (s = c.sent()).result ||
                    s.status !== a.k_.INVALID_TOKEN ||
                    A(),
                  [2, s]
                );
              case 3:
                return [2, (0, i.pi)((0, i.pi)({}, o), { data: void 0 })];
            }
          });
        });
      }
      function F(t) {
        var e, n;
        return (0, i.mG)(this, void 0, void 0, function () {
          var r, o;
          return (0, i.Jh)(this, function (s) {
            switch (s.label) {
              case 0:
                return t ? [2, a.ej.user.getInfo(t)] : [4, S()];
              case 1:
                return (r = s.sent()).result &&
                  (null === (e = r.data) || void 0 === e ? void 0 : e.token)
                  ? [
                      4,
                      a.ej.user.getInfo(
                        null === (n = r.data) || void 0 === n ? void 0 : n.token
                      ),
                    ]
                  : [3, 3];
              case 2:
                return (
                  (o = s.sent()).result ||
                    o.status !== a.k_.INVALID_TOKEN ||
                    A(),
                  [2, o]
                );
              case 3:
                return [2, (0, i.pi)((0, i.pi)({}, r), { data: void 0 })];
            }
          });
        });
      }
      var H = new s.C(),
        M = c(function (t, e, n, r) {
          return (
            void 0 === e && (e = 1),
            (0, i.mG)(this, void 0, void 0, function () {
              var o, a, s;
              return (0, i.Jh)(this, function (i) {
                switch (i.label) {
                  case 0:
                    (o = (0, p.LJ)(t)),
                      (a = (0, f.H)("c_getOauth2code_start", g())),
                      (i.label = 1);
                  case 1:
                    return i.trys.push([1, , 3, 4]), [4, U(t, e, n, r)];
                  case 2:
                    return (
                      (s = i.sent()),
                      (0, f.Y)(
                        "c_getOauth2code_end",
                        g({ c_code: s.result ? 0 : -1 }),
                        a
                      ),
                      [2, s]
                    );
                  case 3:
                    return (0, p.sB)(o), [7];
                  case 4:
                    return [2];
                }
              });
            })
          );
        });
      function U(t, e, n, r) {
        var o, c, u;
        return (0, i.mG)(this, void 0, void 0, function () {
          var d, h, f, _, p, v, g, m;
          return (0, i.Jh)(this, function (b) {
            switch (b.label) {
              case 0:
                return (
                  (d = s.x.getCache()) &&
                    (h = (0, l.w5)()) &&
                    (0, l.CE)(h, d, t),
                  (f =
                    0 === e &&
                    d &&
                    null !== (o = (0, l.Ju)(d, t)) &&
                    void 0 !== o
                      ? o
                      : void 0),
                  n ? [2, a.ej.user.grant(t, e, n, f, r)] : [4, S()]
                );
              case 1:
                return (
                  (_ = b.sent()),
                  (n =
                    null === (c = _.data) || void 0 === c ? void 0 : c.token),
                  _.result && n
                    ? ((p = "".concat(n, ":").concat(t, ":").concat(e)),
                      (v =
                        null === (u = null == H ? void 0 : H.getCache()) ||
                        void 0 === u
                          ? void 0
                          : u[p])
                        ? [2, v]
                        : [4, a.ej.user.grant(t, e, n, f, r)])
                    : [3, 3]
                );
              case 2:
                return (
                  (g = b.sent()).result ||
                    g.status !== a.k_.INVALID_TOKEN ||
                    A(),
                  g.result && H.saveCache((((m = {})[p] = g), m)),
                  [2, g]
                );
              case 3:
                return [2, (0, i.pi)((0, i.pi)({}, _), { data: void 0 })];
            }
          });
        });
      }
      function G(t, e) {
        var n, r;
        return (0, i.mG)(this, void 0, void 0, function () {
          var o, s;
          return (0, i.Jh)(this, function (c) {
            switch (c.label) {
              case 0:
                return e ? [2, a.ej.user.grantInfo(t, e)] : [4, S()];
              case 1:
                return (o = c.sent()).result &&
                  (null === (n = o.data) || void 0 === n ? void 0 : n.token)
                  ? [
                      4,
                      a.ej.user.grantInfo(
                        t,
                        null === (r = o.data) || void 0 === r ? void 0 : r.token
                      ),
                    ]
                  : [3, 3];
              case 2:
                return (
                  (s = c.sent()).result ||
                    s.status !== a.k_.INVALID_TOKEN ||
                    A(),
                  [2, s]
                );
              case 3:
                return [2, (0, i.pi)((0, i.pi)({}, o), { data: void 0 })];
            }
          });
        });
      }
      function B(t, e) {
        var n, r;
        return (0, i.mG)(this, void 0, void 0, function () {
          var o, s;
          return (0, i.Jh)(this, function (c) {
            switch (c.label) {
              case 0:
                return e ? [2, a.ej.user.cancelUnbindGrant(t, e)] : [4, S()];
              case 1:
                return (o = c.sent()).result &&
                  (null === (n = o.data) || void 0 === n ? void 0 : n.token)
                  ? [
                      4,
                      a.ej.user.cancelUnbindGrant(
                        t,
                        null === (r = o.data) || void 0 === r ? void 0 : r.token
                      ),
                    ]
                  : [3, 3];
              case 2:
                return (
                  (s = c.sent()).result ||
                    s.status !== a.k_.INVALID_TOKEN ||
                    A(),
                  [2, s]
                );
              case 3:
                return [2, (0, i.pi)((0, i.pi)({}, o), { data: void 0 })];
            }
          });
        });
      }
      function Z(t) {
        var e, n;
        return (0, i.mG)(this, void 0, void 0, function () {
          var r, o;
          return (0, i.Jh)(this, function (s) {
            switch (s.label) {
              case 0:
                return t ? [2, a.ej.user.cancelDeactivate(t)] : [4, S()];
              case 1:
                return (r = s.sent()).result &&
                  (null === (e = r.data) || void 0 === e ? void 0 : e.token)
                  ? [
                      4,
                      a.ej.user.cancelDeactivate(
                        null === (n = r.data) || void 0 === n ? void 0 : n.token
                      ),
                    ]
                  : [3, 3];
              case 2:
                return (
                  (o = s.sent()).result ||
                    o.status !== a.k_.INVALID_TOKEN ||
                    A(),
                  [2, o]
                );
              case 3:
                return [2, (0, i.pi)((0, i.pi)({}, r), { data: void 0 })];
            }
          });
        });
      }
      function J(t) {
        var e, n;
        return (0, i.mG)(this, void 0, void 0, function () {
          var r, o;
          return (0, i.Jh)(this, function (s) {
            switch (s.label) {
              case 0:
                return t ? [2, a.ej.user.couldChangePhone(t)] : [4, S()];
              case 1:
                return (r = s.sent()).result &&
                  (null === (e = r.data) || void 0 === e ? void 0 : e.token)
                  ? [
                      4,
                      a.ej.user.couldChangePhone(
                        null === (n = r.data) || void 0 === n ? void 0 : n.token
                      ),
                    ]
                  : [3, 3];
              case 2:
                return (
                  (o = s.sent()).result ||
                    o.status !== a.k_.INVALID_TOKEN ||
                    A(),
                  [2, o]
                );
              case 3:
                return [2, (0, i.pi)((0, i.pi)({}, r), { data: void 0 })];
            }
          });
        });
      }
      function V(t, e, n, r) {
        var o, s;
        return (0, i.mG)(this, void 0, void 0, function () {
          var c, u;
          return (0, i.Jh)(this, function (l) {
            switch (l.label) {
              case 0:
                return r ? [2, a.ej.user.changePhone(t, e, n, r)] : [4, S()];
              case 1:
                return (c = l.sent()).result &&
                  (null === (o = c.data) || void 0 === o ? void 0 : o.token)
                  ? [
                      4,
                      a.ej.user.changePhone(
                        t,
                        e,
                        n,
                        null === (s = c.data) || void 0 === s ? void 0 : s.token
                      ),
                    ]
                  : [3, 3];
              case 2:
                return (
                  (u = l.sent()).result ||
                    u.status !== a.k_.INVALID_TOKEN ||
                    A(),
                  [2, u]
                );
              case 3:
                return [2, (0, i.pi)((0, i.pi)({}, c), { data: void 0 })];
            }
          });
        });
      }
      function K(t, e, n) {
        var r, o;
        return (0, i.mG)(this, void 0, void 0, function () {
          var s, c;
          return (0, i.Jh)(this, function (u) {
            switch (u.label) {
              case 0:
                return n ? [2, a.ej.user.changePassword(t, e, n)] : [4, S()];
              case 1:
                return (s = u.sent()).result &&
                  (null === (r = s.data) || void 0 === r ? void 0 : r.token)
                  ? [
                      4,
                      a.ej.user.changePassword(
                        t,
                        e,
                        null === (o = s.data) || void 0 === o ? void 0 : o.token
                      ),
                    ]
                  : [3, 3];
              case 2:
                return (
                  (c = u.sent()).result ||
                    c.status !== a.k_.INVALID_TOKEN ||
                    A(),
                  [2, c]
                );
              case 3:
                return [2, (0, i.pi)((0, i.pi)({}, s), { data: void 0 })];
            }
          });
        });
      }
      function W(t, e, n, r) {
        var o, s;
        return (0, i.mG)(this, void 0, void 0, function () {
          var c, u;
          return (0, i.Jh)(this, function (l) {
            switch (l.label) {
              case 0:
                return r ? [2, a.ej.user.bindEmail(t, e, n, r)] : [4, S()];
              case 1:
                return (c = l.sent()).result &&
                  (null === (o = c.data) || void 0 === o ? void 0 : o.token)
                  ? [
                      4,
                      a.ej.user.bindEmail(
                        t,
                        e,
                        n,
                        null === (s = c.data) || void 0 === s ? void 0 : s.token
                      ),
                    ]
                  : [3, 3];
              case 2:
                return (
                  (u = l.sent()).result ||
                    u.status !== a.k_.INVALID_TOKEN ||
                    A(),
                  [2, u]
                );
              case 3:
                return [2, (0, i.pi)((0, i.pi)({}, c), { data: void 0 })];
            }
          });
        });
      }
      function Y(t) {
        var e, n;
        return (0, i.mG)(this, void 0, void 0, function () {
          var r, o;
          return (0, i.Jh)(this, function (s) {
            switch (s.label) {
              case 0:
                return t ? [2, a.ej.user.resetOtherToken(t)] : [4, S()];
              case 1:
                return (r = s.sent()).result &&
                  (null === (e = r.data) || void 0 === e ? void 0 : e.token)
                  ? [
                      4,
                      a.ej.user.resetOtherToken(
                        null === (n = r.data) || void 0 === n ? void 0 : n.token
                      ),
                    ]
                  : [3, 3];
              case 2:
                return (
                  (o = s.sent()).result ||
                    o.status !== a.k_.INVALID_TOKEN ||
                    A(),
                  [2, o]
                );
              case 3:
                return [2, (0, i.pi)((0, i.pi)({}, r), { data: void 0 })];
            }
          });
        });
      }
      function X(t) {
        var e, n;
        return (0, i.mG)(this, void 0, void 0, function () {
          var r, o;
          return (0, i.Jh)(this, function (s) {
            switch (s.label) {
              case 0:
                return t ? [2, a.ej.user.queryOrder(t)] : [4, S()];
              case 1:
                return (r = s.sent()).result &&
                  (null === (e = r.data) || void 0 === e ? void 0 : e.token)
                  ? [
                      4,
                      a.ej.user.queryOrder(
                        null === (n = r.data) || void 0 === n ? void 0 : n.token
                      ),
                    ]
                  : [3, 3];
              case 2:
                return (
                  (o = s.sent()).result ||
                    o.status !== a.k_.INVALID_TOKEN ||
                    A(),
                  [2, o]
                );
              case 3:
                return [2, (0, i.pi)((0, i.pi)({}, r), { data: void 0 })];
            }
          });
        });
      }
      function q(t) {
        var e, n;
        return (0, i.mG)(this, void 0, void 0, function () {
          var r, o;
          return (0, i.Jh)(this, function (s) {
            switch (s.label) {
              case 0:
                return t ? [2, a.ej.user.updateAgreement(t)] : [4, S()];
              case 1:
                return (r = s.sent()).result &&
                  (null === (e = r.data) || void 0 === e ? void 0 : e.token)
                  ? [
                      4,
                      a.ej.user.updateAgreement(
                        null === (n = r.data) || void 0 === n ? void 0 : n.token
                      ),
                    ]
                  : [3, 3];
              case 2:
                return (
                  (o = s.sent()).result ||
                    o.status !== a.k_.INVALID_TOKEN ||
                    A(),
                  [2, o]
                );
              case 3:
                return [2, (0, i.pi)((0, i.pi)({}, r), { data: void 0 })];
            }
          });
        });
      }
      function $(t) {
        return (0, i.mG)(this, void 0, void 0, function () {
          return (0, i.Jh)(this, function (e) {
            return [2, a.ej.app.getConfig(t)];
          });
        });
      }
      function Q(t, e, n) {
        var r;
        return (0, i.mG)(this, void 0, void 0, function () {
          var o, s;
          return (0, i.Jh)(this, function (c) {
            switch (c.label) {
              case 0:
                return n ? [2, a.ej.user.authenticate(t, e, n)] : [4, S()];
              case 1:
                return (o = c.sent()).result &&
                  (null === (r = o.data) || void 0 === r ? void 0 : r.token)
                  ? [4, a.ej.user.authenticate(t, e, o.data.token)]
                  : [3, 3];
              case 2:
                return (
                  (s = c.sent()).result ||
                    s.status !== a.k_.INVALID_TOKEN ||
                    A(),
                  [2, s]
                );
              case 3:
                return [2, (0, i.pi)((0, i.pi)({}, o), { data: void 0 })];
            }
          });
        });
      }
      function tt(t, e, n) {
        var r;
        return (0, i.mG)(this, void 0, void 0, function () {
          var o, s;
          return (0, i.Jh)(this, function (c) {
            switch (c.label) {
              case 0:
                return n
                  ? [2, a.ej.user.deviceTokenByPhone(t, e, n)]
                  : [4, S()];
              case 1:
                return (o = c.sent()).result &&
                  (null === (r = o.data) || void 0 === r ? void 0 : r.token)
                  ? [4, a.ej.user.deviceTokenByPhone(t, e, o.data.token)]
                  : [3, 3];
              case 2:
                return (
                  (s = c.sent()).result ||
                    s.status !== a.k_.INVALID_TOKEN ||
                    A(),
                  [2, s]
                );
              case 3:
                return [2, (0, i.pi)((0, i.pi)({}, o), { data: void 0 })];
            }
          });
        });
      }
      var et = {
        SUCCESS: 0,
        NETWORK_ERROR: 1,
        TOKEN_EXPIRED: 2,
        ACCOUNT_ABNORMAL: 3,
      };
      function nt(t) {
        return t.result && t.data
          ? { code: et.SUCCESS, data: t.data, message: "" }
          : "apiServer" === t.type ||
            t.status === a.k_.INVALID_TOKEN ||
            401 === t.statusCode
          ? {
              code: et.TOKEN_EXPIRED,
              data: void 0,
              message: t.msg || "登录已失效，请重新登录",
            }
          : t.status || t.statusCode
          ? {
              code: et.ACCOUNT_ABNORMAL,
              data: void 0,
              message: t.msg || "账号状态异常",
            }
          : {
              code: et.NETWORK_ERROR,
              data: void 0,
              message: t.msg || "网络异常",
            };
      }
      function rt(t, e, n) {
        return (
          void 0 === e && (e = 1),
          (0, i.mG)(this, void 0, void 0, function () {
            return (0, i.Jh)(this, function (r) {
              switch (r.label) {
                case 0:
                  return [4, M(t, e, n, { skipCaptcha: !0 })];
                case 1:
                  return [2, nt(r.sent())];
              }
            });
          })
        );
      }
    },
    2674: function (t, e, n) {
      "use strict";
      n.d(e, {
        K: function () {
          return k;
        },
        k: function () {
          return C;
        },
      });
      var r = n(655),
        i = n(8311),
        o = n(4184),
        a = n.n(o),
        s = n(3379),
        c = n.n(s),
        u = n(7795),
        l = n.n(u),
        d = n(569),
        h = n.n(d),
        f = n(3565),
        _ = n.n(f),
        p = n(9216),
        v = n.n(p),
        g = n(4589),
        m = n.n(g),
        b = n(3345),
        y = {};
      (y.styleTagTransform = m()),
        (y.setAttributes = _()),
        (y.insert = h().bind(null, "head")),
        (y.domAPI = l()),
        (y.insertStyleElement = v());
      c()(b.Z, y);
      var w = b.Z && b.Z.locals ? b.Z.locals : void 0,
        k = function (t) {
          var e = t.className,
            n = (0, r._T)(t, ["className"]);
          return (0, i.tZ)(
            "button",
            (0, r.pi)(
              { className: a()(w.button, e, n.disabled && w.disabled) },
              n
            )
          );
        },
        C = function (t) {
          var e = t.className,
            n = (0, r._T)(t, ["className"]);
          return (0, i.tZ)(
            "button",
            (0, r.pi)({ className: a()(w.button, w.secondary, e) }, n)
          );
        };
    },
    6864: function (t, e, n) {
      "use strict";
      n.d(e, {
        f: function () {
          return A;
        },
      });
      var r = n(655),
        i = n(8311),
        o = n(396),
        a = n(4184),
        s = n.n(a),
        c = n(3379),
        u = n.n(c),
        l = n(7795),
        d = n.n(l),
        h = n(569),
        f = n.n(h),
        _ = n(3565),
        p = n.n(_),
        v = n(9216),
        g = n.n(v),
        m = n(4589),
        b = n.n(m),
        y = n(769),
        w = {};
      (w.styleTagTransform = b()),
        (w.setAttributes = p()),
        (w.insert = f().bind(null, "head")),
        (w.domAPI = d()),
        (w.insertStyleElement = g());
      u()(y.Z, w);
      var k = y.Z && y.Z.locals ? y.Z.locals : void 0,
        C = function (t) {
          var e = t.className;
          return (0, i.BX)("svg", {
            className: e,
            xmlns: "http://www.w3.org/2000/svg",
            width: "136",
            height: "72",
            viewBox: "0 0 136 72",
            fill: "none",
            children: [
              (0, i.tZ)("path", {
                d: "M5.9954 38.0812L7.73927 43.1912L7.9826 41.5081L7.82713 34.3299L8.2462 31.9033L7.00927 27.7194C7.00927 27.7194 0.182498 22.4202 0 22.4202L4.94096 27.1246L5.08967 27.8208L6.27928 31.4099L5.23837 37.135L6.00216 38.0812H5.9954ZM9.6386 9.67915L9.58452 15.8232L9.40878 17.2427L9.95628 18.4728L10.8417 21.528L11.5176 22.2918L10.0306 9.74674L8.92888 6.98224L8.9424 7.54325L9.6386 9.67239V9.67915ZM35.114 18.5269L30.5718 27.1652L31.4099 26.4149L36.1549 22.3391L36.7429 21.7848L37.7365 20.406L38.9937 12.518L37.5743 9.84137L35.9859 5.90077L32.4846 0L35.3978 6.49558L37.0606 11.8015L35.6074 17.8713L35.1072 18.5269H35.114ZM39.6561 53.1677L34.2082 52.1944C34.2082 52.1944 32.3157 52.5864 32.1872 52.5932C32.0588 52.5932 30.9841 53.3976 30.9841 53.3976C30.9841 53.3976 28.9361 53.9653 28.8076 53.9721C28.6792 53.9721 21.9876 55.9525 22.2039 55.9458C22.4202 55.9458 25.8674 56.1215 25.8674 56.1215L29.4633 56.9596L29.4836 57.7032L31.633 62.0155L35.4587 56.8245L36.0602 55.8038L36.9863 55.9458L43.2791 57.8586L40.3185 55.4118L39.4263 54.9454L43.6914 53.9856L39.6359 53.1813L39.6561 53.1677ZM50.3492 2.021L46.3072 10.7877L44.8066 13.8225L36.9795 22.2715L30.6664 27.5977L24.6372 30.9773L22.9947 36.2833L23.9951 30.9571L22.0214 26.1378L21.0549 25.4145L15.8435 19.8585L20.1829 25.908L21.7578 30.4839L20.9535 34.242L20.5885 35.0058L17.3914 38.2908L14.4173 40.2374L13.6333 41.3527L13.0723 39.5885L13.3494 36.9389L13.5724 36.4793L12.2814 33.9176L11.5379 29.2537L11.227 23.015L10.6525 22.2783L9.63184 18.6148L7.27964 13.221L3.90005 7.08362L3.92033 7.92176L5.95484 11.9908L8.41518 19.9801L8.71935 22.481L8.93564 24.279L8.81398 30.3352L8.15158 34.5597L8.30704 42.2652L7.57704 48.9162L7.07011 50.8426L7.915 52.8636L7.04983 59.1969L7.12418 59.643L6.23197 60.7177L5.85345 64.4623L5.98188 71.8231L6.34011 71.6609L7.67167 69.1127L11.9976 62.9483L12.9168 62.3129L13.1263 62.1101L17.628 60.6502L18.0335 59.7579L22.5216 57.3449L23.211 56.7028L21.1157 56.0674L28.2872 53.6476L30.9097 52.9582L31.9845 52.1336L35.9859 51.3292L41.8191 52.3026L42.4274 52.235L37.9393 50.1734L37.3242 49.5448L28.7468 45.8137L28.0506 45.7597L27.0097 45.8813L27.8884 45.5028L35.5128 44.7255L36.8376 43.5765L35.8372 43.6035L26.8678 40.8931L25.1239 42.7518L25.5092 41.9272L28.1452 37.5337L28.7738 35.2086L38.9735 25.1239L44.2321 18.189L47.0372 12.1598L50.3559 2.8321L50.3356 2.02776L50.3492 2.021ZM16.9453 51.7416L14.9243 54.5601L14.539 54.7291L15.2217 52.4918L17.0534 48.7405L16.9385 51.7416H16.9453Z",
                fill: "white",
              }),
              (0, i.tZ)("path", {
                d: "M67.9501 57.8248H66.9497L67.5107 54.6548H65.5506L64.1311 62.6644H66.0913L66.6996 59.2307H67.7L67.0917 62.6644H69.0586L70.478 54.6548H68.5111L67.9501 57.8248ZM73.6008 54.6548L72.695 56.7974L72.4382 54.6548H70.5794L71.235 59.2578L70.6335 62.6644H72.5193L73.1208 59.2578L75.3784 54.6548H73.6008ZM80.0761 57.007C80.2112 56.2432 80.1301 55.6619 79.8395 55.2563C79.5488 54.8508 79.0487 54.6548 78.3322 54.6548H75.4257L74.0063 62.6644H75.9732L76.5613 59.3524H77.2237C77.5143 59.3524 77.7644 59.3389 77.9875 59.3051C78.2105 59.2713 78.4403 59.2037 78.6769 59.1091C78.9135 59.0077 79.1162 58.8725 79.2852 58.7103C79.4542 58.5413 79.6097 58.3182 79.7516 58.0276C79.8936 57.7437 79.9949 57.399 80.0625 57.007H80.0761ZM78.2443 56.9664C78.1767 57.3382 78.0956 57.6018 77.9875 57.764C77.8793 57.9262 77.6968 58.0006 77.4332 58.0006H76.8114L77.1628 56.0269H77.7712C77.8861 56.0269 77.9807 56.0472 78.0618 56.0877C78.1362 56.1283 78.1902 56.1756 78.2308 56.2297C78.2646 56.2837 78.2849 56.3581 78.2984 56.4527C78.3051 56.5406 78.3051 56.6284 78.2984 56.696C78.2984 56.7704 78.2781 56.8583 78.2578 56.9664H78.2443ZM81.5428 61.3531L81.9416 59.1158H83.2799L83.5232 57.7505H82.1849L82.5026 55.966H84.2938L84.5236 54.6548H80.7655L79.3461 62.6644H83.1245L83.3543 61.3531H81.5428ZM89.5322 55.8849C89.4848 55.6348 89.397 55.4321 89.2753 55.2766C89.1469 55.1211 88.9711 54.9927 88.7481 54.9049C88.525 54.8102 88.2817 54.7494 88.0248 54.7088C87.768 54.675 87.4706 54.6548 87.1259 54.6548H84.7264L83.3069 62.6644H85.2739L85.9025 59.1226H86.308L86.5176 62.6644H88.5791L88.16 58.8252C88.5791 58.6224 88.8833 58.3656 89.0793 58.0479C89.2685 57.7302 89.4172 57.2976 89.5119 56.7636C89.5727 56.4257 89.5795 56.1283 89.5322 55.8849ZM87.6531 56.9799C87.5923 57.3246 87.4841 57.5815 87.3287 57.7707C87.1732 57.9532 86.9299 58.0479 86.6054 58.0479H86.0917L86.4635 55.9525H87.0718C87.3422 55.9525 87.5247 56.0404 87.6058 56.2229C87.6937 56.3986 87.7072 56.6555 87.6463 56.9867L87.6531 56.9799ZM92.0533 58.4467L91.8573 59.5754H92.4994L92.3169 60.6164C92.2967 60.7515 92.2561 60.8732 92.2088 60.9881C92.1547 61.103 92.0804 61.2044 91.9722 61.2923C91.8641 61.3801 91.7424 61.4275 91.6005 61.4275C91.4923 61.4275 91.4044 61.4004 91.3369 61.3531C91.2693 61.3058 91.2219 61.2382 91.2017 61.1503C91.1814 61.0692 91.1679 60.9814 91.1679 60.8935C91.1679 60.8056 91.1746 60.7177 91.1949 60.6164L91.8911 56.6893C91.9114 56.5811 91.9317 56.4933 91.9519 56.4122C91.9722 56.331 92.0128 56.2499 92.0601 56.1621C92.1074 56.0742 92.1682 56.0066 92.2493 55.9593C92.3305 55.912 92.4251 55.8849 92.5265 55.8849C92.6143 55.8849 92.6819 55.9052 92.7428 55.939C92.7968 55.9728 92.8374 56.0134 92.8577 56.0607C92.878 56.108 92.8915 56.1688 92.8915 56.2567C92.8915 56.3378 92.8915 56.4054 92.8847 56.4662C92.8847 56.5203 92.8644 56.5946 92.8509 56.6893L92.7157 57.4598H94.6489L94.7502 56.8853C94.7976 56.6082 94.8178 56.3581 94.8111 56.1283C94.8043 55.8985 94.757 55.6822 94.6759 55.4861C94.5948 55.2834 94.4731 55.1144 94.3176 54.9792C94.1622 54.844 93.9527 54.7359 93.6823 54.6548C93.4187 54.5737 93.101 54.5331 92.736 54.5331C92.2764 54.5331 91.8708 54.6007 91.5261 54.7291C91.1746 54.8575 90.884 55.0468 90.6542 55.2969C90.4244 55.547 90.2351 55.8376 90.0864 56.1688C89.9445 56.5 89.8296 56.8785 89.7552 57.3179L89.2753 60.0148C89.201 60.4406 89.1739 60.8124 89.1874 61.1436C89.2077 61.468 89.2753 61.7587 89.397 62.0155C89.5186 62.2724 89.7147 62.4616 89.9918 62.5968C90.2621 62.732 90.6069 62.7996 91.0259 62.7996C91.6275 62.7996 92.0871 62.563 92.4048 62.0899V62.6712H93.7093L94.4528 58.4534H92.0398L92.0533 58.4467ZM100.178 55.2766C100.049 55.1211 99.8805 54.9927 99.6507 54.9049C99.4276 54.8102 99.1843 54.7494 98.9274 54.7088C98.6706 54.675 98.3732 54.6548 98.0285 54.6548H95.6289L94.2095 62.6644H96.1764L96.805 59.1226H97.2106L97.4201 62.6644H99.4817L99.0626 58.8252C99.4817 58.6224 99.7858 58.3656 99.9819 58.0479C100.171 57.7302 100.32 57.2976 100.414 56.7636C100.475 56.4257 100.482 56.1283 100.435 55.8849C100.387 55.6348 100.3 55.4321 100.178 55.2766ZM98.5624 56.9799C98.5016 57.3246 98.3934 57.5815 98.238 57.7707C98.0825 57.9532 97.8392 58.0479 97.5147 58.0479H97.0011L97.3728 55.9525H97.9811C98.2515 55.9525 98.434 56.0404 98.5151 56.2229C98.603 56.3986 98.6165 56.6555 98.5557 56.9867L98.5624 56.9799ZM103.726 54.6548L102.821 56.7974L102.564 54.6548H100.705L101.361 59.2578L100.759 62.6644H102.645L103.247 59.2578L105.504 54.6548H103.726ZM110.208 57.007C110.344 56.2432 110.263 55.6619 109.972 55.2563C109.681 54.8508 109.181 54.6548 108.465 54.6548H105.558L104.139 62.6644H106.106L106.694 59.3524H107.356C107.647 59.3524 107.897 59.3389 108.12 59.3051C108.343 59.2713 108.573 59.2037 108.809 59.1091C109.046 59.0077 109.249 58.8725 109.418 58.7103C109.587 58.5413 109.742 58.3182 109.884 58.0276C110.026 57.7437 110.127 57.399 110.195 57.007H110.208ZM108.377 56.9664C108.309 57.3382 108.228 57.6018 108.12 57.764C108.012 57.9262 107.829 58.0006 107.566 58.0006H106.944L107.295 56.0269H107.904C108.019 56.0269 108.113 56.0472 108.194 56.0877C108.269 56.1283 108.323 56.1756 108.363 56.2297C108.397 56.2837 108.417 56.3581 108.431 56.4527C108.438 56.5406 108.438 56.6284 108.431 56.696C108.431 56.7704 108.411 56.8583 108.39 56.9664H108.377ZM113.906 54.6548L113.345 57.8248H112.344L112.905 54.6548H110.945L109.526 62.6644H111.486L112.094 59.2307H113.095L112.486 62.6644H114.453L115.873 54.6548H113.906Z",
                fill: "white",
              }),
              (0, i.tZ)("path", {
                d: "M90.4514 35.1816H86.0579C86.3486 34.9179 86.5649 34.7017 86.8082 34.5124C87.2475 34.1677 87.5044 33.7486 87.5585 33.1673C87.6328 32.3697 87.7883 31.5789 87.9167 30.734H79.1027C79.265 30.4434 79.4069 30.2068 79.5624 29.9364C77.9064 29.9364 76.3112 29.9364 74.7228 29.9432C74.6146 29.9432 74.4659 30.0311 74.4051 30.1257C72.8573 32.3562 70.8498 34.1068 68.6192 35.6209C68.5584 35.6615 68.4841 35.6953 68.3691 35.7628C68.4435 35.2289 68.5179 34.7422 68.5922 34.2217H65.9426C65.9088 34.0325 65.8818 33.8703 65.8412 33.6743H68.8693C69.0113 32.7347 69.1532 31.8222 69.3019 30.8692H68.8355C66.4225 30.8692 64.0095 30.8692 61.5964 30.8692C61.3126 30.8692 61.1503 30.8151 61.1301 30.4974C61.1165 30.2879 61.0422 30.0851 60.9881 29.8553C59.4876 29.9161 58.0006 29.977 56.4865 30.0378C56.5271 30.3285 56.5609 30.5718 56.5947 30.8557H56.1553C53.7963 30.8557 51.4442 30.8557 49.0852 30.8489C48.7608 30.8489 48.6459 30.9435 48.6391 31.268C48.6323 31.5857 48.5715 31.9033 48.5174 32.2143C47.9902 35.5533 47.5103 38.8923 46.9223 42.2246C46.5573 44.2997 45.9963 46.3342 44.9689 48.1997C44.9553 48.2268 44.9689 48.2606 44.9689 48.3349H46.9087C46.2396 48.9635 45.638 49.5313 45.0094 50.1194C45.8543 50.775 46.6722 51.4171 47.5103 52.0728C48.1592 51.2414 48.6458 50.3424 49.0514 49.4029C50.3627 46.3545 50.9643 43.1236 51.4306 39.8657C51.4847 39.4939 51.6537 39.3047 51.9984 39.1627C51.897 39.8454 51.7956 40.5078 51.701 41.1499C51.7686 41.1769 51.7889 41.1905 51.8092 41.1905C52.7419 41.1905 53.6747 41.1905 54.6074 41.1905C55.3712 41.1905 55.3645 41.1905 55.4726 40.4402C55.547 39.9265 55.6348 39.4128 55.7295 38.8518C55.9187 39.0478 56.0607 39.2033 56.2094 39.3587C56.4459 39.1897 56.6487 39.041 56.9258 38.8383C56.8109 39.6223 56.7028 40.3321 56.5947 41.0485C56.6352 41.035 56.669 41.0282 56.7096 41.0147C56.7772 41.1702 56.8447 41.3257 56.9461 41.5555H52.093C51.7686 43.6576 51.4509 45.7124 51.1197 47.8212H62.2521C62.1777 48.2809 62.1237 48.6864 62.0426 49.0852C62.0223 49.1798 61.9074 49.315 61.8127 49.3285C61.5897 49.3623 61.3531 49.342 61.103 49.342C61.1436 49.0041 61.1841 48.7067 61.2247 48.3822H49.7408C49.6124 49.2204 49.4907 50.0382 49.3556 50.8967H60.1094C60.1838 51.2549 60.2379 51.5928 60.3325 51.9173C60.3595 52.0119 60.5015 52.1471 60.5893 52.1403C61.7587 52.0592 62.928 52.0119 64.0838 51.8429C65.2734 51.6672 66.0034 50.9169 66.2468 49.7273C66.3482 49.2407 66.4225 48.7405 66.5036 48.2471C66.6185 47.5103 66.7267 46.7668 66.8483 45.9692H58.3182C58.8928 45.4217 59.3997 44.9418 59.9202 44.4416C59.5822 44.1375 59.2713 43.8671 58.9198 43.5562H61.7722C61.8803 43.9617 61.5897 43.9685 61.3599 43.982C60.9138 44.009 60.4609 43.9888 59.9878 43.9888C60.1094 44.6579 60.2243 45.273 60.3325 45.8611C61.2179 45.8611 62.0763 45.9151 62.9212 45.8408C63.6039 45.78 64.2934 45.6313 64.9422 45.415C65.7263 45.1581 66.2332 44.6174 66.1927 43.7116C66.1927 43.644 66.213 43.5765 66.2197 43.5089C66.3211 42.86 66.4157 42.2111 66.5239 41.5352H61.3801C61.3734 41.3797 61.3666 41.2513 61.3531 41.0823H67.6054C67.6865 40.5619 67.7608 40.082 67.8487 39.548H64.9152C64.9422 39.379 64.9558 39.2506 64.9828 39.0816H67.2809C67.335 38.7098 67.3823 38.3786 67.4364 38.0001H65.1856C65.118 37.6419 65.2532 37.527 65.5641 37.554C65.8007 37.5743 66.044 37.554 66.2806 37.554H67.6054C67.6662 37.1417 67.7135 36.7767 67.7743 36.3712H65.4492C65.4221 35.844 65.4289 35.8372 65.875 35.8372C66.1927 35.8372 66.5104 35.8372 66.8281 35.8372H68.1326C68.4435 37.3039 68.7477 38.7234 69.0586 40.1901C69.5385 39.913 69.9711 39.6629 70.451 39.3858C70.2009 41.2175 69.8291 42.9681 69.2478 44.6647C68.653 46.3883 67.8555 47.997 66.5307 49.3218C67.6121 50.3221 68.6666 51.309 69.7277 52.2958C69.8021 52.2147 69.8494 52.1674 69.89 52.1133C70.7822 50.8088 71.7285 49.5381 72.5328 48.1795C72.891 47.5779 73.2222 47.3278 73.9184 47.3886C74.6957 47.4562 75.4798 47.4022 76.2977 47.4022C76.0881 48.781 75.8786 50.1194 75.6691 51.4712H80.1639C80.3802 50.1126 80.5898 48.7675 80.7993 47.4292H84.1856C84.1248 48.22 84.0505 48.3214 83.2731 48.3484C82.5905 48.3755 81.9078 48.3484 81.2251 48.3484C81.144 48.3484 81.0561 48.3484 80.9412 48.3484C81.2116 49.6057 81.482 50.8223 81.7591 52.1201C83.0906 52.0052 84.3952 51.9714 85.6659 51.7551C87.3219 51.4779 87.964 50.8831 88.2479 49.1798C88.3358 48.6391 88.4169 48.0984 88.498 47.5576C88.9644 44.5565 89.4308 41.5555 89.8971 38.5544C90.0729 37.4391 90.2419 36.3306 90.4244 35.168L90.4514 35.1816ZM52.8568 34.384C52.6338 34.5732 52.4107 34.7625 52.1066 35.0329C52.1809 34.553 52.235 34.1744 52.2958 33.7756H53.5665C53.3029 34.0055 53.0799 34.1947 52.8636 34.384H52.8568ZM56.1012 45.9827C56.2161 45.2257 56.3243 44.4822 56.4459 43.7454C56.4595 43.6711 56.5744 43.5765 56.6622 43.5562C56.8042 43.5224 56.9529 43.5494 57.1489 43.6103C56.9056 43.7995 56.6555 43.9888 56.3986 44.1915C57.0813 44.8269 57.6626 45.3744 58.3182 45.9895H56.1012V45.9827ZM56.2297 35.8372C56.2364 35.3911 56.2905 35.0666 56.5947 34.8166C56.8245 34.6205 57.0543 34.4042 57.23 34.1542C57.5477 33.6945 57.987 33.7216 58.5481 33.7824C57.7572 34.4854 57.0205 35.141 56.2297 35.8372ZM61.3261 39.548H60.4541C60.4744 38.9599 60.2919 38.9802 61.414 39.0478C61.3869 39.2235 61.3599 39.379 61.3261 39.548ZM61.5559 38.0948H60.6434C60.6704 37.8852 60.6975 37.7027 60.7245 37.4932H61.637C61.61 37.7027 61.5829 37.8852 61.5559 38.0948ZM61.8668 36.1143C61.8533 36.1954 61.833 36.2698 61.806 36.3779H60.9543C60.9138 35.871 60.9273 35.8507 61.3937 35.8507C61.5491 35.8507 61.7046 35.8507 61.8803 35.8507C61.8736 35.9656 61.8736 36.04 61.8601 36.1143H61.8668ZM62.5157 34.1068C62.5157 34.1609 62.5089 34.215 62.5022 34.2893H61.414C61.6978 33.7824 61.8533 33.708 62.5157 33.7892C62.5157 33.9108 62.5157 34.0122 62.5157 34.1136V34.1068ZM76.2571 43.8941H73.9184C73.959 43.6305 73.9995 43.4142 74.0333 43.1912H76.933C76.933 43.1912 76.9601 43.2317 76.9533 43.2385C76.9218 43.6756 76.6897 43.8941 76.2571 43.8941ZM77.5278 39.6156H74.6755C74.716 39.3452 74.7566 39.0884 74.7971 38.8247H77.636C77.5954 39.0951 77.5616 39.3452 77.5278 39.6156ZM80.2788 35.1072C78.7107 35.1072 77.1493 35.1072 75.5001 35.1072C75.8921 34.6949 76.2233 34.4178 76.7911 34.438C78.1294 34.4854 79.4677 34.4516 80.806 34.4516H81.1846C80.9885 34.9315 80.7452 35.1072 80.2788 35.1072ZM84.6926 43.8333C84.6791 43.8941 84.5979 43.982 84.5439 43.982C83.4894 43.9888 82.4418 43.982 81.4009 43.982C81.3806 43.9279 81.3738 43.9212 81.3738 43.9077C81.4099 43.412 81.6735 43.1642 82.1646 43.1642H84.7804C84.7467 43.4142 84.7264 43.6238 84.6858 43.8265L84.6926 43.8333ZM85.382 39.3858C85.3617 39.4534 85.2739 39.5412 85.213 39.5412C84.1721 39.548 83.1245 39.548 82.0835 39.548C82.0768 39.4804 82.0633 39.4398 82.07 39.4128C82.1984 38.7031 82.0227 38.818 82.7527 38.8112C83.5368 38.8112 84.3208 38.8112 85.1049 38.8112H85.4699C85.4361 39.0275 85.4293 39.21 85.382 39.3858ZM112.865 32.6469C112.987 31.8425 113.115 31.0382 113.237 30.2271H92.175C91.0597 37.4121 89.9445 44.5768 88.8292 51.7686H92.5941C92.8171 50.3356 93.0402 48.9162 93.2767 47.436C93.9594 48.0375 94.5745 48.585 95.2301 49.1595C96.0412 47.9497 96.8321 46.7668 97.6635 45.5163C98.1163 46.4424 98.5421 47.3143 98.9815 48.2133C99.2451 48.0172 99.5087 47.8212 99.7791 47.6117C100.347 48.1254 100.901 48.6256 101.469 49.146C102.422 48.0105 103.186 46.7803 103.902 45.4082C104.348 46.3342 104.747 47.1791 105.159 48.0375C105.437 47.8145 105.7 47.5982 105.964 47.3886C106.234 47.1723 106.498 46.9628 106.802 46.7127C106.802 46.8344 106.802 46.8749 106.802 46.9223C106.667 47.7266 106.16 48.2335 105.213 48.3687C104.524 48.4701 103.814 48.4633 103.064 48.5039C103.226 49.6394 103.382 50.802 103.557 51.9579C103.571 52.0322 103.72 52.1268 103.814 52.1336C104.335 52.1471 104.862 52.1539 105.382 52.1268C106.417 52.066 107.437 51.9038 108.39 51.4509C109.377 50.9845 110.073 50.2545 110.323 49.1663C110.411 48.7945 110.411 48.4025 110.472 48.0172C110.776 46.0368 111.08 44.0631 111.391 42.0827C111.878 38.9329 112.371 35.7899 112.858 32.6401L112.865 32.6469ZM96.2373 41.596C95.3586 43.1168 94.4664 44.6377 93.5741 46.1585C93.5674 46.172 93.5403 46.1855 93.466 46.2261C93.8986 43.4278 94.3244 40.6835 94.7638 37.8717C94.8314 37.9799 94.8719 38.0272 94.8922 38.088C95.3451 39.1424 95.7979 40.1969 96.244 41.2513C96.2846 41.3527 96.2913 41.5081 96.244 41.596H96.2373ZM98.2785 37.2566C97.7851 36.1819 97.3255 35.1613 96.8388 34.0933C96.2711 34.5191 95.7438 34.9247 95.149 35.3708C95.2504 34.7219 95.3383 34.1542 95.4262 33.5729H99.6642C99.1978 34.803 98.7449 36.0062 98.2718 37.2566H98.2785ZM102.503 41.0891C102.023 42.103 101.523 43.1033 101.023 44.1104C100.982 44.1104 100.942 44.0969 100.901 44.0969C100.509 43.1304 100.117 42.1638 99.7385 41.1972C99.7115 41.1229 99.7318 41.0147 99.7588 40.9404C100.266 39.7643 100.779 38.5882 101.3 37.385C101.34 37.4729 101.388 37.554 101.415 37.6419C101.766 38.676 102.118 39.7034 102.462 40.7376C102.503 40.8525 102.544 41.0012 102.496 41.0958L102.503 41.0891ZM104.686 36.3306C104.247 35.4249 103.841 34.5935 103.422 33.7351C102.99 34.0055 102.598 34.2488 102.212 34.5056C102.057 34.6138 101.928 34.6273 101.746 34.5394C101.104 34.2217 100.455 33.9243 99.8129 33.6202C99.8129 33.5999 99.8196 33.5796 99.8264 33.5661H105.761C105.403 34.4854 105.058 35.3708 104.686 36.3306ZM107.329 43.4818C107.329 43.4818 107.289 43.4818 107.268 43.4818C106.876 42.5761 106.471 41.6771 106.092 40.7646C106.045 40.6565 106.106 40.4875 106.16 40.3591C106.971 38.3989 107.782 36.4388 108.593 34.4718C108.613 34.4178 108.62 34.3637 108.647 34.2758C108.127 34.0528 107.613 33.8365 107.106 33.6202C107.106 33.5999 107.12 33.5864 107.126 33.5661H108.877C108.363 36.8849 107.85 40.1833 107.336 43.4751L107.329 43.4818ZM131.371 38.0339C131.507 37.9393 131.601 37.8987 131.655 37.8379C132.48 36.9322 133.305 36.0197 134.122 35.1004C134.217 34.9923 134.298 34.8504 134.319 34.7152C134.427 34.0866 134.515 33.458 134.609 32.8294C134.636 32.6333 134.663 32.4373 134.69 32.194H131.912C132.392 31.7411 132.804 31.3491 133.298 30.8895H129.783C129.945 30.6056 130.081 30.3758 130.243 30.0986C130.155 30.0851 130.114 30.0716 130.074 30.0716C128.864 29.9635 127.647 29.8486 126.437 29.7539C126.302 29.7404 126.113 29.8283 126.011 29.9297C124.72 31.2139 123.456 32.5184 122.165 33.8027C121.807 34.1609 121.388 34.4651 120.989 34.8098C121.206 35.1545 121.408 35.4857 121.611 35.8169C121.591 35.8304 121.577 35.8507 121.557 35.8642C120.929 35.3911 120.293 34.9247 119.692 34.4718C119.144 35.168 118.61 35.8169 118.11 36.4928C117.786 36.9322 117.333 36.9863 116.839 37.0336C118.205 35.2897 119.55 33.5729 120.922 31.8222C119.779 31.2477 118.725 30.7137 117.664 30.1865C117.001 31.1869 116.386 32.1737 115.71 33.12C114.656 34.5935 113.744 36.1887 112.236 37.3039C112.507 38.4868 112.77 39.6764 113.047 40.8728C113.784 40.6633 114.474 40.4672 115.156 40.2712C115.183 40.305 115.21 40.3321 115.231 40.3658C114.615 41.0418 113.987 41.7042 113.385 42.4004C112.946 42.9073 112.453 43.2926 111.743 43.3399C111.939 44.4687 112.128 45.5637 112.324 46.6857C113.385 46.4288 114.406 46.1855 115.433 45.9219C117.042 45.5163 118.644 45.0973 120.253 44.6917C120.442 44.6444 120.577 44.5836 120.577 44.3402C120.577 44.0766 120.618 43.813 120.651 43.4683C120.78 43.6711 120.854 43.8063 120.942 43.9415C121.091 43.8941 121.226 43.8536 121.422 43.7928C121.01 46.4559 120.604 49.0784 120.199 51.701C120.266 51.7213 120.293 51.7483 120.327 51.7483C121.679 51.7483 123.037 51.7483 124.389 51.7551C124.599 51.7551 124.612 51.6334 124.653 51.4779C124.68 51.3833 124.775 51.2279 124.842 51.2279C125.633 51.2076 126.431 51.2143 127.255 51.2143C127.228 51.4374 127.208 51.6266 127.188 51.8362H131.493C131.933 49.0108 132.372 46.1855 132.818 43.3399C133.082 43.4345 133.291 43.5021 133.514 43.5832C134.021 42.0759 134.528 40.5821 135.035 39.0748C133.798 38.8045 132.595 38.5882 131.378 38.0339H131.371ZM119.834 39.8859C119.942 40.3456 120.043 40.7782 120.158 41.2445C119.421 41.4473 118.718 41.6433 117.941 41.8596C119.428 40.2171 120.861 38.6355 122.321 37.0201C122.51 37.3377 122.686 37.6419 122.882 37.9663C123.247 37.6622 123.578 37.3783 123.916 37.0944C124.166 37.4594 124.41 37.7974 124.666 38.1691C123.152 38.9802 121.557 39.548 119.84 39.8859H119.834ZM129.445 34.803C129.445 34.803 129.486 34.8504 129.506 34.8706C129.168 35.2154 128.823 35.5601 128.424 35.9656C128.127 35.5668 127.863 35.2221 127.607 34.8841C127.634 34.8571 127.661 34.8301 127.681 34.803H129.445ZM127.843 47.4765H125.275C125.315 47.1926 125.356 46.9087 125.403 46.6113H127.978C127.931 46.9087 127.891 47.1859 127.843 47.4765ZM124.808 42.5761C125.66 42.0624 126.512 41.5487 127.363 41.0485C127.424 41.0147 127.559 41.035 127.627 41.0823C128.452 41.6906 129.33 42.2043 130.304 42.5761H124.808ZM111.533 51.2076C114.44 50.5046 117.279 49.8152 120.172 49.1122V45.5975C117.184 46.3545 114.176 47.1183 111.134 47.8956C111.27 48.9906 111.398 50.0856 111.533 51.2076Z",
                fill: "white",
              }),
            ],
          });
        },
        x = function (t) {
          var e = t.className;
          return (0, i.tZ)("svg", {
            className: e,
            xmlns: "http://www.w3.org/2000/svg",
            width: "350",
            height: "56",
            viewBox: "0 0 350 56",
            fill: "none",
            children: (0, i.tZ)("path", {
              d: "M25.7995 22.1036H19.0372L22.8226 0.873953H9.55535L0 54.4761H13.2672L17.3834 31.4985H24.1456L20.0295 54.4761H33.3335L42.8888 0.873953H29.5848L25.7995 22.1036ZM63.9841 0.873953L57.8466 15.2213L56.1193 0.873953H43.5871L47.9973 31.6806L43.9179 54.4761H56.6339L60.7133 31.6806L75.9651 0.873953H63.9474H63.9841ZM107.755 16.6414C108.674 11.5434 108.159 7.64704 106.175 4.95237C104.227 2.2577 100.809 0.910362 95.9946 0.910362H76.3693L66.814 54.5125H80.118L84.0871 32.3725H88.5708C90.5186 32.3725 92.2459 32.2632 93.7527 32.0447C95.2595 31.8263 96.8031 31.3893 98.4201 30.7338C100.037 30.0784 101.397 29.168 102.536 28.0391C103.676 26.9103 104.741 25.3809 105.66 23.4873C106.616 21.5574 107.314 19.2997 107.792 16.6778L107.755 16.6414ZM95.3698 16.3501C94.9288 18.8263 94.3408 20.6106 93.6425 21.6666C92.9442 22.7226 91.6579 23.2688 89.8938 23.2688H85.6674L88.0195 10.0868H92.0989C92.8707 10.0868 93.5322 10.2325 94.0467 10.4874C94.5613 10.7423 94.9288 11.07 95.186 11.4341C95.4065 11.7983 95.5535 12.3081 95.6271 12.8907C95.7006 13.5098 95.7006 14.056 95.6271 14.5294C95.5903 15.0392 95.48 15.6218 95.3698 16.3501ZM117.641 45.7366L120.324 30.7702H129.365L130.982 21.6666H121.941L124.073 9.68625H136.201L137.781 0.873953H112.386L102.83 54.4761H128.373L129.953 45.7002H117.715L117.641 45.7366ZM171.592 9.10362C171.261 7.42855 170.71 6.08122 169.865 5.0252C169.02 3.96918 167.843 3.13165 166.337 2.51261C164.83 1.89356 163.213 1.45659 161.449 1.20168C159.721 0.946783 157.7 0.837531 155.385 0.837531H139.177L129.622 54.4396H142.926L147.152 30.7338H149.909L151.305 54.4396H165.234L162.404 28.7674C165.234 27.4201 167.292 25.7086 168.615 23.5602C169.902 21.4117 170.894 18.5714 171.519 14.9664C171.923 12.7087 171.96 10.7423 171.666 9.06721L171.592 9.10362ZM158.913 16.4229C158.509 18.717 157.774 20.4649 156.708 21.703C155.642 22.9411 154.025 23.5602 151.857 23.5602H148.402L150.901 9.5406H155.017C156.855 9.5406 158.068 10.1232 158.656 11.3249C159.244 12.5266 159.317 14.2017 158.95 16.4229H158.913ZM188.645 26.2548L187.285 33.7926H191.622L190.372 40.7842C190.225 41.6582 189.968 42.4957 189.637 43.2604C189.306 44.0251 188.755 44.717 188.02 45.2996C187.285 45.9187 186.44 46.21 185.521 46.21C184.786 46.21 184.198 46.0279 183.757 45.7002C183.316 45.3724 182.985 44.9355 182.838 44.3528C182.691 43.8066 182.618 43.224 182.618 42.6414C182.618 42.0587 182.654 41.4397 182.801 40.7842L187.505 14.493C187.616 13.7647 187.763 13.1456 187.946 12.6358C188.093 12.126 188.351 11.5434 188.645 10.9608C188.976 10.3781 189.38 9.90474 189.931 9.57701C190.482 9.24928 191.107 9.10362 191.805 9.10362C192.393 9.10362 192.871 9.21287 193.239 9.46777C193.606 9.72267 193.863 9.97757 194.01 10.3053C194.157 10.633 194.231 11.0336 194.268 11.6162C194.268 12.1624 194.268 12.6358 194.231 13C194.194 13.3641 194.121 13.8739 194.01 14.4566L193.092 19.591H206.138L206.837 15.7311C207.167 13.8739 207.314 12.1988 207.241 10.6694C207.204 9.14003 206.873 7.68346 206.359 6.33612C205.808 4.98879 204.999 3.85994 203.933 2.94958C202.868 2.03922 201.434 1.31093 199.67 0.801123C197.869 0.254906 195.738 0 193.275 0C190.188 0 187.432 0.436976 185.08 1.31092C182.728 2.18487 180.743 3.45937 179.163 5.13444C177.583 6.80951 176.333 8.73948 175.341 10.9608C174.385 13.182 173.613 15.7311 173.099 18.6442L169.865 36.6694C169.35 39.5097 169.167 42.0223 169.277 44.2072C169.387 46.392 169.865 48.322 170.71 50.0335C171.555 51.745 172.878 53.0559 174.716 53.9298C176.554 54.8402 178.906 55.2772 181.699 55.2772C185.741 55.2772 188.865 53.6749 191.034 50.5069V54.4032H199.854L204.889 26.182H188.571L188.645 26.2548ZM243.515 5.0252C242.669 3.96918 241.493 3.13165 239.986 2.51261C238.48 1.89356 236.863 1.45659 235.098 1.20168C233.371 0.946783 231.35 0.837531 229.035 0.837531H212.827L203.272 54.4396H216.576L220.802 30.7338H223.559L224.955 54.4396H238.884L236.054 28.7674C238.884 27.4201 240.942 25.7086 242.265 23.5602C243.551 21.4117 244.544 18.5714 245.168 14.9664C245.573 12.7087 245.609 10.7423 245.315 9.06721C244.985 7.39214 244.433 6.04481 243.588 4.98879L243.515 5.0252ZM232.599 16.4229C232.195 18.717 231.46 20.4649 230.394 21.703C229.329 22.9411 227.711 23.5602 225.543 23.5602H222.088L224.588 9.5406H228.704C230.541 9.5406 231.754 10.1232 232.342 11.3249C232.93 12.5266 233.004 14.2017 232.636 16.4229H232.599ZM267.513 0.873953L261.376 15.2213L259.648 0.873953H247.116L251.526 31.6806L247.447 54.4761H260.163L264.242 31.6806L279.494 0.873953H267.476H267.513ZM311.284 16.6414C312.203 11.5434 311.688 7.64704 309.704 4.95237C307.756 2.2577 304.338 0.910362 299.524 0.910362H279.898L270.343 54.5125H283.647L287.616 32.3725H292.1C294.048 32.3725 295.775 32.2632 297.282 32.0447C298.789 31.8263 300.332 31.3893 301.949 30.7338C303.566 30.0784 304.926 29.168 306.065 28.0391C307.205 26.9103 308.27 25.3809 309.189 23.4873C310.145 21.5574 310.843 19.2997 311.321 16.6778L311.284 16.6414ZM298.899 16.3501C298.458 18.8263 297.87 20.6106 297.172 21.6666C296.473 22.7226 295.187 23.2688 293.423 23.2688H289.196L291.549 10.0868H295.628C296.4 10.0868 297.061 10.2325 297.576 10.4874C298.09 10.7423 298.458 11.07 298.715 11.4341C298.936 11.7983 299.083 12.3081 299.156 12.8907C299.23 13.5098 299.23 14.056 299.156 14.5294C299.119 15.0392 299.009 15.6218 298.899 16.3501ZM336.275 0.873953L332.49 22.1036H325.727L329.513 0.873953H316.245L306.69 54.4761H319.957L324.074 31.4985H330.836L326.72 54.4761H340.024L349.579 0.873953H336.275Z",
              fill: "currentColor",
            }),
          });
        },
        E = function (t) {
          var e = t.className;
          return (0, i.BX)("svg", {
            className: e,
            xmlns: "http://www.w3.org/2000/svg",
            width: "40",
            height: "40",
            viewBox: "0 0 40 40",
            fill: "none",
            children: [
              (0, i.tZ)("path", {
                d: "M22.6016 22.6021L26.6661 26.6666",
                stroke: "currentColor",
                strokeWidth: "2.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              (0, i.tZ)("path", {
                d: "M13.334 13.3335L19.8303 19.8298",
                stroke: "currentColor",
                strokeWidth: "2.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              (0, i.tZ)("path", {
                d: "M26.6673 13.3335L13.334 26.6668",
                stroke: "currentColor",
                strokeWidth: "2.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
            ],
          });
        },
        L = function (t) {
          var e = t.className;
          return (0, i.BX)("svg", {
            className: e,
            xmlns: "http://www.w3.org/2000/svg",
            width: "40",
            height: "40",
            viewBox: "0 0 40 40",
            fill: "none",
            children: [
              (0, i.tZ)("path", {
                d: "M20.9375 28.0814L12.8563 20.0002L20.9375 11.9189",
                stroke: "currentColor",
                strokeWidth: "2.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              (0, i.tZ)("path", {
                d: "M20.9375 19.9999H25.2501",
                stroke: "currentColor",
                strokeWidth: "2.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
            ],
          });
        },
        S = function (t) {
          var e = t.className;
          return (0, i.BX)("svg", {
            className: e,
            viewBox: "0 0 32 32",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, i.tZ)("path", {
                d: "M22.4939 7.51408C23.0667 6.94157 23.9954 6.9414 24.5681 7.51408C25.1408 8.08677 25.1406 9.01553 24.5681 9.5883L9.67099 24.4854C9.0982 25.0577 8.16938 25.058 7.59678 24.4854C7.02417 23.9128 7.02451 22.984 7.59678 22.4112L13.9171 16.0896C13.8933 16.0687 13.8695 16.0472 13.8468 16.0245L7.43532 9.61434C6.86263 9.04165 6.86279 8.11291 7.43532 7.54012C8.00809 6.96736 8.93677 6.96736 9.50954 7.54012L15.921 13.9503C15.9437 13.973 15.9639 13.9981 15.9848 14.0219L22.4939 7.51408Z",
                fill: "currentColor",
              }),
              (0, i.tZ)("path", {
                d: "M18.4392 18.3565C19.0119 17.7838 19.9407 17.784 20.5134 18.3565L24.5681 22.4112C25.1405 22.984 25.1408 23.9128 24.5681 24.4854C23.9955 25.0579 23.0667 25.0577 22.4939 24.4854L18.4392 20.4308C17.8667 19.858 17.8667 18.9292 18.4392 18.3565Z",
                fill: "currentColor",
              }),
            ],
          });
        },
        T = function (t) {
          var e = t.className;
          return (0, i.BX)("svg", {
            className: e,
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            viewBox: "0 0 32 32",
            fill: "none",
            children: [
              (0, i.tZ)("path", {
                d: "M14.2597 6.79952C14.8228 6.32527 15.6642 6.39681 16.1386 6.95968C16.6127 7.52278 16.5413 8.36421 15.9785 8.83859L7.40554 16.0573L15.8652 23.1485C16.4295 23.6215 16.5036 24.4631 16.0305 25.0274C15.5575 25.5913 14.7171 25.6655 14.1529 25.1928L5.6933 18.1016C4.42392 17.0374 4.42247 15.0854 5.6894 14.0183L14.2597 6.79952Z",
                fill: "currentColor",
              }),
              (0, i.tZ)("path", {
                d: "M25.3339 14.7266C26.0703 14.7266 26.6672 15.3236 26.6673 16.0599C26.6673 16.7963 26.0703 17.3933 25.3339 17.3933H13.3339C12.5976 17.3933 12.0006 16.7963 12.0006 16.0599C12.0006 15.3236 12.5976 14.7266 13.3339 14.7266H25.3339Z",
                fill: "currentColor",
              }),
            ],
          });
        },
        A = function (t) {
          var e = t.title,
            n = t.showLogo,
            a = void 0 !== n && n,
            c = t.showBack,
            u = void 0 !== c && c,
            l = t.showClose,
            d = void 0 === l || l,
            h = t.onBack,
            f = t.onClose,
            _ = t.className,
            p = e,
            v = (0, o.sO)(null),
            g = (0, r.CR)((0, o.eJ)(!1), 2),
            m = g[0],
            b = g[1];
          return (
            (0, o.bt)(
              function () {
                var t = v.current;
                t && b(t.scrollWidth > t.clientWidth);
              },
              [p]
            ),
            (0, i.BX)("div", {
              className: s()(
                k["dialog-header"],
                a && k["dialog-header--with-logo"],
                u && k["dialog-header--has-back"],
                d && k["dialog-header--has-close"],
                m && k["dialog-header--long-title"],
                _
              ),
              children: [
                !a &&
                  (0, i.tZ)(x, { className: k["dialog-header__watermark"] }),
                u &&
                  (0, i.BX)("div", {
                    role: "button",
                    tabIndex: 0,
                    className: s()(
                      k["dialog-header__action"],
                      k["dialog-header__action--back"]
                    ),
                    onClick: h,
                    children: [
                      (0, i.tZ)(L, {
                        className: s()(
                          k["dialog-header__icon"],
                          k["dialog-header__icon--default"]
                        ),
                      }),
                      (0, i.tZ)(T, {
                        className: s()(
                          k["dialog-header__icon"],
                          k["dialog-header__icon--ef"]
                        ),
                      }),
                    ],
                  }),
                (0, i.tZ)("div", {
                  className: k["dialog-header__center"],
                  children: a
                    ? (0, i.tZ)(C, { className: k["dialog-header__logo"] })
                    : p
                    ? (0, i.tZ)("h1", {
                        ref: v,
                        className: s()(
                          k["dialog-header__title"],
                          m && k["dialog-header__title--long"]
                        ),
                        children: p,
                      })
                    : null,
                }),
                d &&
                  (0, i.BX)("div", {
                    role: "button",
                    tabIndex: 0,
                    className: s()(
                      k["dialog-header__action"],
                      k["dialog-header__action--close"]
                    ),
                    onClick: f,
                    children: [
                      (0, i.tZ)(E, {
                        className: s()(
                          k["dialog-header__icon"],
                          k["dialog-header__icon--default"]
                        ),
                      }),
                      (0, i.tZ)(S, {
                        className: s()(
                          k["dialog-header__icon"],
                          k["dialog-header__icon--ef"]
                        ),
                      }),
                    ],
                  }),
                (0, i.tZ)("div", { className: k["dialog-header__border"] }),
              ],
            })
          );
        };
    },
    8633: function (t, e, n) {
      "use strict";
      n.d(e, {
        RO: function () {
          return G;
        },
        EF: function () {
          return B;
        },
        ee: function () {
          return W;
        },
        g$: function () {
          return Y;
        },
        WJ: function () {
          return X;
        },
        UG: function () {
          return Z;
        },
        K6: function () {
          return J;
        },
      });
      var r = n(655),
        i = n(8311),
        o = n(7484),
        a = n.n(o),
        s = n(6400),
        c = n(396),
        u = n(8836),
        l = n(2914),
        d = n(2045),
        h = n(9054),
        f = n(635),
        _ =
          /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
        p = [
          "11",
          "12",
          "13",
          "14",
          "15",
          "21",
          "22",
          "23",
          "31",
          "32",
          "33",
          "34",
          "35",
          "36",
          "37",
          "41",
          "42",
          "43",
          "44",
          "45",
          "46",
          "50",
          "51",
          "52",
          "53",
          "54",
          "61",
          "62",
          "63",
          "64",
          "65",
          "71",
          "81",
          "82",
          "83",
          "91",
        ],
        v = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
        g = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"];
      function m(t) {
        return (
          _.test(t) &&
          (function (t) {
            return p.indexOf(t.substring(0, 2)) >= 0;
          })(t) &&
          (function (t) {
            var e = t.substring(6, 14),
              n = a()(e, "YYYYMMDD");
            return n.isValid() && n.unix() <= a()().unix();
          })(t) &&
          (function (t) {
            for (var e = 0, n = 0, r = t.length - 1; e < r; )
              (n += v[e] * parseInt(t[e], 10)), e++;
            return t[e].toUpperCase() === g[n % 11];
          })(t)
        );
      }
      var b = n(2005),
        y = n(8287),
        w = n(3379),
        k = n.n(w),
        C = n(7795),
        x = n.n(C),
        E = n(569),
        L = n.n(E),
        S = n(3565),
        T = n.n(S),
        A = n(9216),
        I = n.n(A),
        O = n(4589),
        D = n.n(O),
        N = n(9511),
        R = {};
      (R.styleTagTransform = D()),
        (R.setAttributes = T()),
        (R.insert = L().bind(null, "head")),
        (R.domAPI = x()),
        (R.insertStyleElement = I());
      k()(N.Z, R);
      var z = N.Z && N.Z.locals ? N.Z.locals : void 0,
        P = n(3131),
        j = n(6864),
        F = n(2674),
        H = n(5318),
        M = function (t) {
          return t ? a().unix(t).format("YYYY/MM/DD HH:mm:ss") : "-";
        },
        U = function (t) {
          if (!t) return "-";
          var e = new Date(1e3 * (t + 28800)),
            n = function (t) {
              return t.toString().padStart(2, "0");
            };
          return ""
            .concat(e.getUTCFullYear(), "/")
            .concat(n(e.getUTCMonth() + 1), "/")
            .concat(n(e.getUTCDate()), " ")
            .concat(n(e.getUTCHours()), ":")
            .concat(n(e.getUTCMinutes()), ":")
            .concat(n(e.getUTCSeconds()), " (GMT+8)");
        },
        G = function (t) {
          var e = t.active,
            n = t.info,
            r = t.onConfirm,
            o = n
              ? "您的鹰角通行证账号因 <b>"
                  .concat(n.banReason || "-", "</b> 处于封禁状态，预计在 <b>")
                  .concat(
                    M(n.banEndTs),
                    "</b> 解封。<br><br>在封禁期间您无法登录该鹰角通行证账号，如有疑问请联系客服。"
                  )
              : "";
          return (0, i.BX)(P.m, {
            visible: e,
            className: (0, l.dh)(z.confirmLayer, z.accountBanned),
            children: [
              (0, i.tZ)(j.f, { title: "系统提示", showClose: !1 }),
              (0, i.BX)("div", {
                className: z.scroller,
                children: [
                  (0, i.tZ)("div", {
                    className: z.body,
                    children: n
                      ? (0, i.tZ)("div", {
                          dangerouslySetInnerHTML: { __html: o },
                        })
                      : null,
                  }),
                  (0, i.tZ)("div", {
                    className: z.footer,
                    children: (0, i.tZ)(F.K, {
                      className: z.button,
                      onClick: r,
                      children: "确定",
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        B = function (t) {
          var e = t.active,
            n = t.info,
            r = t.onCancel,
            o = t.onConfirm,
            a = n
              ? "您于 <b>"
                  .concat(
                    U(n.delete_request_ts),
                    "</b> 提交了注销通行证账号请求，您的通行证账号预计在 <b>"
                  )
                  .concat(
                    U(n.delete_commit_ts),
                    "</b> 注销，期间无法登录。若您选择继续登录，即默认取消此操作。<br><br>是否继续登录？"
                  )
              : "";
          return (0, i.BX)(P.m, {
            visible: e,
            className: (0, l.dh)(z.confirmLayer, z.accountDeleting),
            children: [
              (0, i.tZ)(j.f, { title: "系统提示", showClose: !1 }),
              (0, i.BX)("div", {
                className: z.scroller,
                children: [
                  (0, i.tZ)("div", {
                    className: z.body,
                    children: n
                      ? (0, i.tZ)("div", {
                          dangerouslySetInnerHTML: { __html: a },
                        })
                      : null,
                  }),
                  (0, i.BX)("div", {
                    className: z.footer,
                    children: [
                      (0, i.tZ)(F.k, {
                        className: z.button,
                        onClick: r,
                        children: "放弃登录",
                      }),
                      (0, i.tZ)(F.K, {
                        className: z.button,
                        onClick: o,
                        children: "继续登录",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        Z = function (t) {
          var e = t.active,
            n = t.info,
            r = t.onConfirm,
            o = t.onCancel,
            a = n
              ? "您于 <b>"
                  .concat(
                    M(n.delete_request_ts),
                    "</b> 提交了注销账号请求，预计在 <b>"
                  )
                  .concat(
                    M(n.delete_commit_ts),
                    "</b> 完成注销。若您在此期间继续登录该账号，将默认撤回注销申请。<br><br>是否确认继续登录，并撤回注销申请？"
                  )
              : "";
          return (0, i.BX)(P.m, {
            visible: e,
            className: (0, l.dh)(z.confirmLayer, z.openIdDeleting),
            children: [
              (0, i.tZ)(j.f, { title: "系统提示", showClose: !1 }),
              (0, i.BX)("div", {
                className: z.scroller,
                children: [
                  (0, i.tZ)("div", {
                    className: z.body,
                    children: n
                      ? (0, i.tZ)("div", {
                          dangerouslySetInnerHTML: { __html: a },
                        })
                      : null,
                  }),
                  (0, i.BX)("div", {
                    className: z.footer,
                    children: [
                      (0, i.tZ)(F.k, {
                        className: z.button,
                        onClick: o,
                        children: "放弃登录",
                      }),
                      (0, i.tZ)(F.K, {
                        className: z.button,
                        onClick: r,
                        children: "继续登录",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        J = function (t) {
          var e = t.active,
            n = t.updatedProtocols,
            r = void 0 === n ? [] : n,
            o = t.onConfirm,
            a = t.onCancel;
          return (0, i.BX)(P.m, {
            visible: e,
            className: (0, l.dh)(z.confirmLayer, z.protocolLayer),
            children: [
              (0, i.tZ)(j.f, { title: "协议更新", showClose: !1 }),
              (0, i.BX)("div", {
                className: z.scroller,
                children: [
                  (0, i.BX)("div", {
                    className: z.body,
                    children: [
                      (0, i.BX)("div", {
                        children: [
                          (0, i.tZ)("span", {
                            children: "部分协议内容有更新，您可通过",
                          }),
                          (0, i.tZ)("a", {
                            className: z.link,
                            href: d.v.protocolMap.overview_of_changes.href,
                            target: "_blank",
                            children: "“更新概要”",
                          }),
                          (0, i.tZ)("span", {
                            children:
                              "了解本次更新内容。为保障您的个人权益，请您仔细阅读并同意以下协议。",
                          }),
                        ],
                      }),
                      (0, i.tZ)("div", {
                        className: z.protocols,
                        children: [
                          "register",
                          "privacy",
                          "childrenPrivacy",
                        ].map(function (t) {
                          return (0,
                          i.BX)("a", { className: z.protocol, href: d.v.protocolMap[t].href, target: "_blank", children: [(0, i.BX)("span", { className: z.protocolName, children: ["《", d.v.protocolMap[t].name, "》"] }), r.indexOf(t) >= 0 ? (0, i.tZ)("span", { className: z.protocolTips, children: "本次更新" }) : null] }, t);
                        }),
                      }),
                    ],
                  }),
                  (0, i.BX)("div", {
                    className: z.footer,
                    children: [
                      (0, i.tZ)(F.k, {
                        className: z.button,
                        onClick: a,
                        children: "拒绝",
                      }),
                      (0, i.tZ)(F.K, {
                        className: z.button,
                        onClick: o,
                        children: "阅读并同意",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
      function V(t) {
        return !t || t.length < 7
          ? t || ""
          : t.substring(0, 3) + "****" + t.substring(7);
      }
      var K = /^[0-9Xx]*$/,
        W = function (t) {
          var e,
            o,
            u = t.active,
            d = t.antiAddiction,
            h = t.onConfirm,
            _ = t.onCancel,
            p = t.toast,
            v = t.addLoading,
            g = t.minusLoading,
            b = (0, r.CR)((0, c.eJ)(""), 2),
            w = b[0],
            k = b[1],
            C = (0, r.CR)((0, c.eJ)(""), 2),
            x = C[0],
            E = C[1],
            L = (0, r.CR)((0, c.eJ)(!1), 2),
            S = L[0],
            T = L[1],
            A = (0, r.CR)((0, c.eJ)(!1), 2),
            I = A[0],
            O = A[1],
            D = (0, r.CR)((0, c.eJ)(!1), 2),
            N = D[0],
            R = D[1],
            M = (0, r.CR)((0, c.eJ)(!1), 2),
            U = M[0],
            G = M[1];
          (0, c.d4)(
            function () {
              if (!u) return k(""), E(""), T(!1), O(!1), R(!1), void G(!1);
            },
            [u]
          );
          var B = (0, c.sO)(null);
          (0, c.d4)(
            function () {
              var t = u
                ? N
                  ? "identity_retention"
                  : U
                  ? "identity_minorTip"
                  : null
                : null;
              B.current &&
                B.current !== t &&
                ((0, H.rM)(B.current), (B.current = null)),
                t && B.current !== t && ((0, H.pV)(t), (B.current = t));
            },
            [u, N, U]
          ),
            (0, c.d4)(function () {
              return function () {
                B.current && ((0, H.rM)(B.current), (B.current = null));
              };
            }, []);
          var Z = function () {
            return (0, r.mG)(void 0, void 0, void 0, function () {
              var t, e, n, i;
              return (0, r.Jh)(this, function (r) {
                switch (r.label) {
                  case 0:
                    return null == v || v(), [4, (0, f.YR)(w.trim(), x.trim())];
                  case 1:
                    return (
                      (t = r.sent()),
                      (e = t.result),
                      (n = t.msg),
                      (i = t.statusCode),
                      null == g || g(),
                      e
                        ? null == h || h()
                        : null == p ||
                          p(n || "认证失败，请稍后重试", { statusCode: i }),
                      [2]
                    );
                }
              });
            });
          };
          return (0, i.BX)(s.HY, {
            children: [
              (0, i.BX)(P.m, {
                visible: u && !N && !U,
                className: (0, l.dh)(z.confirmLayer, z.authenticate),
                children: [
                  (0, i.tZ)(j.f, { title: "实名认证", showClose: !1 }),
                  (0, i.BX)("div", {
                    className: z.scroller,
                    children: [
                      (0, i.BX)("div", {
                        className: z.body,
                        children: [
                          (0, i.tZ)("div", {
                            className: z.authDesc,
                            children:
                              "根据国家相关政策规定，未实名认证账号无法体验游戏，请使用有效身份证件进行实名认证。",
                          }),
                          (0, i.BX)("div", {
                            className: z.authInputGroup,
                            children: [
                              (0, i.tZ)("input", {
                                className: (0, l.dh)(z.authInput, S && z.error),
                                type: "text",
                                placeholder: "请输入真实姓名",
                                maxLength: 50,
                                value: w,
                                onInput: function (t) {
                                  k(t.target.value), S && T(!1);
                                },
                              }),
                              (0, i.tZ)("input", {
                                className: (0, l.dh)(z.authInput, I && z.error),
                                type: "text",
                                placeholder: "请输入身份证号码",
                                maxLength: 18,
                                value: x,
                                onInput: function (t) {
                                  var e = t.target,
                                    n = e.value;
                                  K.test(n)
                                    ? (E(n.toUpperCase()), I && O(!1))
                                    : (e.value = x);
                                },
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, i.BX)("div", {
                        className: z.footer,
                        children: [
                          (0, i.tZ)(F.k, {
                            className: z.button,
                            onClick: function () {
                              return R(!0);
                            },
                            children: "放弃登录",
                          }),
                          (0, i.tZ)(F.K, {
                            className: z.button,
                            onClick: function () {
                              return (0, r.mG)(
                                void 0,
                                void 0,
                                void 0,
                                function () {
                                  return (0, r.Jh)(this, function (t) {
                                    switch (t.label) {
                                      case 0:
                                        return (
                                          (0, H.i)("identity_verify"),
                                          !w.trim() || /^\s+$/.test(w)
                                            ? (T(!0),
                                              null == p ||
                                                p(
                                                  w.trim()
                                                    ? "请输入正确的姓名"
                                                    : "姓名不能为空"
                                                ),
                                              [2])
                                            : !x.trim() || /^\s+$/.test(x)
                                            ? (O(!0),
                                              null == p ||
                                                p(
                                                  x.trim()
                                                    ? "身份证号格式不正确"
                                                    : "身份证号不能为空"
                                                ),
                                              [2])
                                            : m(x.trim())
                                            ? ((e = x.trim()),
                                              (n = y.Y.hasFetched()
                                                ? y.Y.now()
                                                : void 0),
                                              (r = e.substring(6, 14)),
                                              (i = a()(r, "YYYYMMDD")),
                                              (n ? a().unix(n) : a()()).diff(
                                                i,
                                                "year"
                                              ) < 18
                                                ? (G(!0), [2])
                                                : [4, Z()])
                                            : (O(!0),
                                              null == p ||
                                                p("身份证号格式不正确"),
                                              [2])
                                        );
                                      case 1:
                                        return t.sent(), [2];
                                    }
                                    var e, n, r, i;
                                  });
                                }
                              );
                            },
                            children: "认证",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.BX)(P.m, {
                visible: u && N,
                className: (0, l.dh)(z.confirmLayer, z.authRetention),
                children: [
                  (0, i.tZ)(j.f, { title: "系统提示", showClose: !1 }),
                  (0, i.BX)("div", {
                    className: z.scroller,
                    children: [
                      (0, i.BX)("div", {
                        className: z.body,
                        children: [
                          (0, i.tZ)("img", {
                            className: z.retentionIcon,
                            src: n(8730),
                          }),
                          (0, i.tZ)("div", {
                            className: z.retentionText,
                            children: "确认退出实名认证并且重新登录？",
                          }),
                        ],
                      }),
                      (0, i.BX)("div", {
                        className: z.footer,
                        children: [
                          (0, i.tZ)(F.k, {
                            className: z.button,
                            onClick: function () {
                              (0, H.lq)(
                                "identity_retention_retention_button_exit_click"
                              ),
                                R(!1),
                                null == _ || _();
                            },
                            children: "确认退出",
                          }),
                          (0, i.tZ)(F.K, {
                            className: z.button,
                            onClick: function () {
                              (0, H.lq)("identity_retention_retention_click"),
                                R(!1);
                            },
                            children: "返回",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.BX)(P.m, {
                visible: u && U,
                className: (0, l.dh)(z.confirmLayer, z.minorInfo),
                children: [
                  (0, i.tZ)(j.f, { title: "系统提示", showClose: !1 }),
                  (0, i.BX)("div", {
                    className: z.scroller,
                    children: [
                      (0, i.BX)("div", {
                        className: z.body,
                        children: [
                          (0, i.BX)("div", {
                            children: [
                              (0, i.tZ)("span", {
                                className: z.minorTitle,
                                children:
                                  "您填写的信息为未成年人，将会受到以下限制。",
                              }),
                              (0, i.tZ)("span", {
                                className: z.minorTitleSub,
                                children:
                                  "（具体限制内容请以官方防沉迷公告为准）",
                              }),
                            ],
                          }),
                          (0, i.BX)("div", {
                            children: [
                              "仅在周五、周六、周日和法定节假日每日",
                              " ",
                              (0, i.BX)("span", {
                                className: z.primaryText,
                                children: [
                                  null !==
                                    (e =
                                      null == d
                                        ? void 0
                                        : d.minorPeriodStart) && void 0 !== e
                                    ? e
                                    : 20,
                                  " 时",
                                ],
                              }),
                              " ",
                              "至",
                              " ",
                              (0, i.BX)("span", {
                                className: z.primaryText,
                                children: [
                                  null !==
                                    (o =
                                      null == d ? void 0 : d.minorPeriodEnd) &&
                                  void 0 !== o
                                    ? o
                                    : 21,
                                  " 时",
                                ],
                              }),
                              "，向未成年人提供 1 小时游戏服务，其余时间将无法登录游戏。",
                            ],
                          }),
                          (0, i.BX)("div", {
                            children: [
                              "未满 8 周岁：无法充值。",
                              (0, i.tZ)("br", {}),
                              "8 周岁以上未满 16 周岁：单次充值限额 50 元，每月限额 200 元。",
                              (0, i.tZ)("br", {}),
                              "16 周岁以上未满 18 周岁：单次充值限额 100 元，每月限额 400 元。",
                            ],
                          }),
                        ],
                      }),
                      (0, i.BX)("div", {
                        className: z.footer,
                        children: [
                          (0, i.tZ)(F.k, {
                            className: z.button,
                            onClick: function () {
                              (0, H.lq)("identity_minorTip_back_click"), G(!1);
                            },
                            children: "返回",
                          }),
                          (0, i.tZ)(F.K, {
                            className: z.button,
                            onClick: function () {
                              return (0, r.mG)(
                                void 0,
                                void 0,
                                void 0,
                                function () {
                                  return (0, r.Jh)(this, function (t) {
                                    switch (t.label) {
                                      case 0:
                                        return (
                                          (0, H.lq)(
                                            "identity_minorTip_button_confirm_click"
                                          ),
                                          G(!1),
                                          [4, Z()]
                                        );
                                      case 1:
                                        return t.sent(), [2];
                                    }
                                  });
                                }
                              );
                            },
                            children: "认证",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        Y = function (t) {
          var e = t.active,
            n = t.onConfirm;
          return (0, i.BX)(P.m, {
            visible: e,
            className: (0, l.dh)(z.confirmLayer, z.curfewAlert),
            children: [
              (0, i.tZ)(j.f, { title: "防沉迷提示", showClose: !1 }),
              (0, i.BX)("div", {
                className: z.scroller,
                children: [
                  (0, i.BX)("div", {
                    className: z.body,
                    children: [
                      (0, i.tZ)("div", {
                        children:
                          "根据国家相关政策规定，您已到达未成年人每日游戏时长上限或不在可游戏时段内，具体规则详见官方公告。",
                      }),
                      (0, i.tZ)("div", {
                        children: "请合理安排游戏时间，享受健康生活。",
                      }),
                    ],
                  }),
                  (0, i.tZ)("div", {
                    className: z.footer,
                    children: (0, i.tZ)(F.K, {
                      className: z.button,
                      onClick: n,
                      children: "确认",
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        X = function (t) {
          var e = t.active,
            n = t.phone,
            o = t.hgId,
            a = t.appCode,
            s = t.onBack,
            d = t.onConfirm,
            _ = t.toast,
            p = t.addLoading,
            v = t.minusLoading,
            g = (0, r.CR)((0, c.eJ)(""), 2),
            m = g[0],
            y = g[1],
            w = (0, r.CR)((0, c.eJ)(0), 2),
            k = w[0],
            C = w[1],
            x = (0, c.sO)(!1),
            E = (0, c.sO)(null),
            L = (0, r.CR)((0, c.eJ)(!1), 2),
            S = L[0],
            T = L[1],
            A = (0, r.CR)((0, c.eJ)(!1), 2),
            I = A[0],
            O = A[1];
          (0, c.d4)(
            function () {
              e || (y(""), C(0), (x.current = !1));
            },
            [e]
          ),
            (0, c.d4)(
              function () {
                if (k > 0) {
                  var t = setTimeout(function () {
                    return C(function (t) {
                      return t - 1;
                    });
                  }, 1e3);
                  return function () {
                    return clearTimeout(t);
                  };
                }
              },
              [k]
            );
          var D = (0, c.I4)(
            function () {
              return (0, r.mG)(void 0, void 0, void 0, function () {
                var t, e, n, i;
                return (0, r.Jh)(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return k > 0
                        ? [2]
                        : (null == p || p(), [4, (0, f.X)(h.I.DEVICE_CHECK)]);
                    case 1:
                      return (
                        (t = r.sent()),
                        (e = t.result),
                        (n = t.msg),
                        (i = t.status),
                        null == v || v(),
                        e
                          ? C(60)
                          : i !== u.k_.REQUIRE_CAPTCHA &&
                            (null == _ || _(n || "发送验证码失败")),
                        [2]
                      );
                  }
                });
              });
            },
            [k, p, v, _]
          );
          (0, c.d4)(
            function () {
              e && !x.current && ((x.current = !0), D());
            },
            [e, D]
          ),
            (0, c.d4)(
              function () {
                e &&
                  setTimeout(function () {
                    var t;
                    return null === (t = E.current) || void 0 === t
                      ? void 0
                      : t.focus();
                  }, 100);
              },
              [e]
            );
          var N = function () {
            return (0, r.mG)(void 0, void 0, void 0, function () {
              var t, e, n, i, s;
              return (0, r.Jh)(this, function (r) {
                switch (r.label) {
                  case 0:
                    return (
                      (0, H.i)("device_verify"),
                      m.trim()
                        ? /^\d{6}$/.test(m.trim())
                          ? a && o
                            ? (null == p || p(), [4, (0, f.bc)(m.trim(), a)])
                            : [2]
                          : (null == _ || _("验证码格式不正确"), [2])
                        : (null == _ || _("验证码不能为空"), [2])
                    );
                  case 1:
                    return (
                      (t = r.sent()),
                      (e = t.result),
                      (n = t.data),
                      (i = t.msg),
                      (s = t.statusCode),
                      null == v || v(),
                      e && (null == n ? void 0 : n.deviceToken)
                        ? ((0, b.CE)(n.deviceToken, o, a),
                          null == d || d(n.deviceToken))
                        : (O(!0),
                          null == _ ||
                            _(i || "验证失败，请稍后重试", { statusCode: s })),
                      [2]
                    );
                }
              });
            });
          };
          return (0, i.BX)(P.m, {
            visible: e,
            className: (0, l.dh)(z.confirmLayer, z.deviceVerify),
            children: [
              (0, i.tZ)(j.f, {
                title: "设备验证",
                showBack: !!s,
                onBack: s,
                showClose: !1,
              }),
              (0, i.BX)("div", {
                className: z.scroller,
                children: [
                  (0, i.BX)("div", {
                    className: z.body,
                    children: [
                      (0, i.BX)("div", {
                        className: z.devicePhoneBlock,
                        children: [
                          (0, i.tZ)("div", {
                            className: z.devicePhone,
                            children: V(n),
                          }),
                          (0, i.tZ)("div", {
                            className: z.deviceDesc,
                            children:
                              "为了您的账号安全，当前操作需要您进行身份验证",
                          }),
                        ],
                      }),
                      (0, i.BX)("div", {
                        className: z.deviceCodeBoxes,
                        onClick: function () {
                          var t;
                          return null === (t = E.current) || void 0 === t
                            ? void 0
                            : t.focus();
                        },
                        children: [
                          Array.from({ length: 6 }).map(function (t, e) {
                            return (0,
                            i.tZ)("div", { className: (0, l.dh)(z.deviceCodeBox, S && e === m.length && z.active, I && z.error), children: m[e] ? m[e] : S && e === m.length ? (0, i.tZ)("span", { className: z.cursor }) : null }, e);
                          }),
                          (0, i.tZ)("input", {
                            ref: E,
                            className: z.deviceCodeHiddenInput,
                            type: "text",
                            inputMode: "numeric",
                            maxLength: 6,
                            value: m,
                            onFocus: function () {
                              return T(!0);
                            },
                            onBlur: function () {
                              return T(!1);
                            },
                            onInput: function (t) {
                              var e = t.target.value;
                              /^\d*$/.test(e) && (y(e), I && O(!1));
                            },
                            onKeyDown: function (t) {
                              13 === t.keyCode && N();
                            },
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.BX)("div", {
                    className: z.footer,
                    children: [
                      (0, i.tZ)(F.K, {
                        className: z.button,
                        disabled: 6 !== m.length,
                        onClick: N,
                        children: "确定",
                      }),
                      (0, i.tZ)("div", {
                        className: (0, l.dh)(
                          z.deviceResend,
                          k > 0 && z.disabled
                        ),
                        onClick: D,
                        children:
                          k > 0
                            ? (0, i.BX)(i.HY, {
                                children: [
                                  (0, i.tZ)("span", {
                                    className: z.countdownNum,
                                    children: k,
                                  }),
                                  " ",
                                  "秒后可重新获取验证码",
                                ],
                              })
                            : "获取验证码",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
    },
    3131: function (t, e, n) {
      "use strict";
      n.d(e, {
        m: function () {
          return j;
        },
        u: function () {
          return P;
        },
      });
      var r = n(8311),
        i = n(6400),
        o = n(4184),
        a = n.n(o),
        s = n(9111),
        c = n(3379),
        u = n.n(c),
        l = n(7795),
        d = n.n(l),
        h = n(569),
        f = n.n(h),
        _ = n(3565),
        p = n.n(_),
        v = n(9216),
        g = n.n(v),
        m = n(4589),
        b = n.n(m),
        y = n(7512),
        w = {};
      (w.styleTagTransform = b()),
        (w.setAttributes = p()),
        (w.insert = f().bind(null, "head")),
        (w.domAPI = d()),
        (w.insertStyleElement = g());
      u()(y.Z, w);
      var k = y.Z && y.Z.locals ? y.Z.locals : void 0,
        C = n(9950),
        x = {};
      (x.styleTagTransform = b()),
        (x.setAttributes = p()),
        (x.insert = f().bind(null, "head")),
        (x.domAPI = d()),
        (x.insertStyleElement = g());
      u()(C.Z, x);
      var E = C.Z && C.Z.locals ? C.Z.locals : void 0,
        L = n(655),
        S = n(396),
        T = n(6599),
        A = {};
      (A.styleTagTransform = b()),
        (A.setAttributes = p()),
        (A.insert = f().bind(null, "head")),
        (A.domAPI = d()),
        (A.insertStyleElement = g());
      u()(T.Z, A);
      var I = T.Z && T.Z.locals ? T.Z.locals : void 0,
        O = n(6197),
        D = function () {},
        N = function (t) {
          var e = t.style,
            n = t.className,
            i = t.contentClassName,
            o = t.visible,
            s = void 0 !== o && o,
            c = t.afterClose,
            u = void 0 === c ? D : c,
            l = t.children;
          return (
            (0, S.d4)(
              function () {
                s ||
                  setTimeout(function () {
                    u();
                  }, 300);
              },
              [s]
            ),
            (0, r.tZ)("div", {
              className: a()(
                I.toast,
                E["hg-sdk-dialog"],
                O.T.getClassName(),
                !!s && I.visible,
                n
              ),
              style: e,
              children: (0, r.tZ)("div", {
                className: a()(I.content, i),
                children: l,
              }),
            })
          );
        };
      var R = N;
      R.message = function (t) {
        var e = t.container,
          n = void 0 === e ? document.body : e,
          o = t.duration,
          a = void 0 === o ? 2e3 : o,
          s = t.className,
          c = t.contentClassName,
          u = t.content,
          l = t.style,
          d = document.createElement("div");
        function h(t) {
          var e = t.content,
            n = (0, L._T)(t, ["content"]);
          setTimeout(function () {
            (0, i.sY)((0, r.tZ)(N, (0, L.pi)({}, n, { children: e })), d);
          });
        }
        n.appendChild(d),
          h({
            className: s,
            contentClassName: c,
            visible: !0,
            content: u,
            style: l,
          }),
          setTimeout(function () {
            h({
              className: s,
              contentClassName: c,
              visible: !1,
              content: u,
              style: l,
              afterClose: function () {
                (0, i.sY)(null, d), d.parentNode && d.parentNode.removeChild(d);
              },
            });
          }, a);
      };
      var z = R,
        P = (function () {
          function t() {
            var t = this;
            (this.root = document.createElement("div")),
              this.root.classList.add(k.modal),
              (this.container = document.createElement("div")),
              this.container.classList.add(k.wrapper),
              this.root.appendChild(this.container),
              document.body.appendChild(this.root);
            var e = function () {
              if ("1" === document.body.dataset.rotate) {
                var e = window.innerWidth,
                  n = window.innerHeight,
                  r = e % 2 ? e + 1 : e,
                  i = n % 2 ? n + 1 : n;
                (t.container.style.transform = "rotate(-90deg)"),
                  (t.container.style.width = "".concat(r, "px")),
                  (t.container.style.height = "".concat(i, "px")),
                  (t.container.style.top = "".concat(0.5 * (r - i), "px")),
                  (t.container.style.left = "".concat(0.5 * (i - r), "px"));
              } else
                (t.container.style.transform = ""),
                  (t.container.style.width = ""),
                  (t.container.style.height = ""),
                  (t.container.style.top = ""),
                  (t.container.style.left = "");
            };
            e(), window.addEventListener("resize", (0, s.Z)(e, 100));
          }
          return (
            (t.prototype.toast = function (t, e) {
              t &&
                this.container &&
                z.message({
                  container: this.container,
                  className: (
                    null == e ? void 0 : e.resetRotateInForcedLandscape
                  )
                    ? k.resetRotateInForcedLandscape
                    : void 0,
                  content:
                    (null == e ? void 0 : e.statusCode) &&
                    e.statusCode >= 400 &&
                    401 !== e.statusCode
                      ? "".concat(t, ", 网络错误码: ").concat(e.statusCode)
                      : t,
                });
            }),
            (t.prototype.render = function (t) {
              (0, i.sY)(t, this.container);
            }),
            (t.prototype.setVisible = function (t) {
              t
                ? this.root.classList.add(k.visible)
                : this.root.classList.remove(k.visible);
            }),
            (t.prototype.show = function (t) {
              var e = this;
              this.render(t),
                requestAnimationFrame(function () {
                  e.setVisible(!0);
                });
            }),
            (t.prototype.close = function () {
              var t = this;
              this.setVisible(!1),
                setTimeout(function () {
                  t.render(null);
                }, 300);
            }),
            t
          );
        })(),
        j = function (t) {
          var e = t.visible,
            n = t.className,
            i = t.resetRotateInForcedLandscape,
            o = t.children;
          return (0, r.tZ)("div", {
            className: a()(
              k.layerContainer,
              e && k.visible,
              i && k.resetRotateInForcedLandscape,
              E["hg-sdk-dialog"],
              O.T.getClassName()
            ),
            children: (0, r.tZ)("div", {
              className: a()(k.layer, n),
              children: o,
            }),
          });
        };
    },
    6197: function (t, e, n) {
      "use strict";
      n.d(e, {
        T: function () {
          return i;
        },
      });
      var r = ["ef", "ak"],
        i = {
          skin: "ak",
          set: function (t) {
            r.includes(t) ? (this.skin = t) : (this.skin = "ak");
          },
          getClassName: function () {
            return r.includes(this.skin)
              ? "hg-sdk-base-vars ".concat("hg-sdk-skin-").concat(this.skin)
              : "hg-sdk-base-vars";
          },
        };
    },
    6096: function (t, e, n) {
      "use strict";
      n.d(e, {
        F: function () {
          return s;
        },
        f: function () {
          return a;
        },
      });
      var r = n(655),
        i = !1,
        o = [],
        a = function () {
          return (0, r.mG)(void 0, void 0, void 0, function () {
            return (0, r.Jh)(this, function (t) {
              return i
                ? [2]
                : [
                    2,
                    new Promise(function (t) {
                      o.push(function () {
                        return t();
                      });
                    }),
                  ];
            });
          });
        },
        s = function () {
          var t;
          if (!i)
            for (i = !0; o.length; )
              null === (t = o.shift()) || void 0 === t || t();
        };
    },
    1764: function (t, e, n) {
      "use strict";
      n.d(e, {
        C: function () {
          return r;
        },
        x: function () {
          return i;
        },
      });
      var r = (function () {
          function t(t) {
            void 0 === t && (t = 1e3),
              (this.cacheTime = t),
              (this.value = null),
              (this.updatedAt = 0);
          }
          return (
            (t.prototype.clear = function () {
              this.value = null;
            }),
            (t.prototype.getCache = function () {
              return this.cacheTime < 0
                ? this.value || null
                : (Date.now() - this.updatedAt < this.cacheTime &&
                    this.value) ||
                    null;
            }),
            (t.prototype.saveCache = function (t) {
              return (
                t && ((this.value = t), (this.updatedAt = Date.now())), this
              );
            }),
            t
          );
        })(),
        i = new r(-1);
    },
    4712: function (t, e, n) {
      "use strict";
      function r(t, e, n) {
        var r, i;
        if (!e) return !0;
        var o = (((new Date(1e3 * t).getUTCHours() + 8) % 24) + 24) % 24,
          a =
            null !== (r = null == n ? void 0 : n.minorPeriodStart) &&
            void 0 !== r
              ? r
              : 20,
          s =
            null !== (i = null == n ? void 0 : n.minorPeriodEnd) && void 0 !== i
              ? i
              : 21;
        return o < a || o >= s;
      }
      n.d(e, {
        f: function () {
          return r;
        },
      });
    },
    2005: function (t, e, n) {
      "use strict";
      n.d(e, {
        CE: function () {
          return f;
        },
        Ju: function () {
          return h;
        },
        XN: function () {
          return c;
        },
        Zw: function () {
          return a;
        },
        _4: function () {
          return l;
        },
        w5: function () {
          return d;
        },
      });
      var r = "hg_sdk_device_token",
        i = "hg_sdk_device_id";
      function o() {
        return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(
          /[xy]/g,
          function (t) {
            var e = (16 * Math.random()) | 0;
            return ("x" === t ? e : (3 & e) | 8).toString(16);
          }
        );
      }
      function a() {
        try {
          var t = localStorage.getItem(i);
          return t || ((t = o()), localStorage.setItem(i, t)), t;
        } catch (t) {
          return o();
        }
      }
      function s() {
        var t = navigator.userAgent;
        return t.indexOf("Win") > -1
          ? "Windows"
          : t.indexOf("Mac") > -1
          ? "macOS"
          : t.indexOf("Android") > -1
          ? "Android"
          : t.indexOf("iPhone") > -1 || t.indexOf("iPad") > -1
          ? "iOS"
          : t.indexOf("Linux") > -1
          ? "Linux"
          : "Web";
      }
      function c() {
        return {
          "X-DeviceModel":
            ((t = navigator.userAgent),
            t.indexOf("Edg") > -1
              ? "Edge"
              : t.indexOf("Chrome") > -1
              ? "Chrome"
              : t.indexOf("Firefox") > -1
              ? "Firefox"
              : t.indexOf("Safari") > -1
              ? "Safari"
              : t.indexOf("Opera") > -1 || t.indexOf("OPR") > -1
              ? "Opera"
              : "Web"),
          "X-DeviceType": "7",
          "X-OSVer": s(),
          "X-DeviceId": a(),
        };
        var t;
      }
      var u = null;
      function l(t) {
        u = t;
      }
      function d() {
        var t = u;
        return (u = null), t;
      }
      function h(t, e) {
        try {
          return localStorage.getItem(
            "".concat(r, ":").concat(t, ":").concat(e)
          );
        } catch (t) {
          return null;
        }
      }
      function f(t, e, n) {
        try {
          localStorage.setItem("".concat(r, ":").concat(e, ":").concat(n), t);
        } catch (t) {}
      }
    },
    2914: function (t, e, n) {
      "use strict";
      n.d(e, {
        GH: function () {
          return o;
        },
        ZT: function () {
          return i;
        },
        dh: function () {
          return a;
        },
        gK: function () {
          return s;
        },
      });
      var r = n(655),
        i = function () {};
      function o(t) {
        var e,
          n = document.querySelectorAll("script")[0];
        n
          ? null === (e = n.parentNode) || void 0 === e || e.insertBefore(t, n)
          : document.head.appendChild(t);
      }
      var a = function () {
          for (var t, e, n = [], i = 0; i < arguments.length; i++)
            n[i] = arguments[i];
          var o = "";
          try {
            for (var a = (0, r.XA)(n), s = a.next(); !s.done; s = a.next()) {
              var c = s.value;
              c && (o += c + " ");
            }
          } catch (e) {
            t = { error: e };
          } finally {
            try {
              s && !s.done && (e = a.return) && e.call(a);
            } finally {
              if (t) throw t.error;
            }
          }
          return o.trim();
        },
        s =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
    },
    8287: function (t, e, n) {
      "use strict";
      n.d(e, {
        Y: function () {
          return a;
        },
      });
      var r = n(655),
        i = n(8836),
        o = Number(localStorage.getItem("REFRESH_INTERVAL_MS") || 6e5),
        a = new ((function () {
          function t() {
            (this.lastServerTime = 0),
              (this.lastFetchPerfTime = 0),
              (this.lastAttemptPerfTime = -1 / 0),
              (this.isHolidayValue = !1),
              (this.fetched = !1),
              (this.pendingFetch = null);
          }
          return (
            (t.prototype.fetch = function () {
              return (0, r.mG)(this, void 0, void 0, function () {
                var t = this;
                return (0, r.Jh)(this, function (e) {
                  return (
                    this.pendingFetch ||
                      ((this.lastAttemptPerfTime = performance.now()),
                      (this.pendingFetch = i.ej.general
                        .getServerTime()
                        .then(function (e) {
                          var n = e.result,
                            r = e.data;
                          return (
                            !(!n || !r) &&
                            ((t.lastServerTime = r.serverTime),
                            (t.lastFetchPerfTime = performance.now()),
                            (t.isHolidayValue = r.isHoliday),
                            (t.fetched = !0),
                            !0)
                          );
                        })
                        .catch(function () {
                          return !1;
                        })
                        .finally(function () {
                          t.pendingFetch = null;
                        }))),
                    [2, this.pendingFetch]
                  );
                });
              });
            }),
            (t.prototype.tryRefresh = function () {
              if (!this.pendingFetch) {
                var t = performance.now() - this.lastAttemptPerfTime;
                (this.fetched && t < o) || this.fetch();
              }
            }),
            (t.prototype.ensureAvailable = function () {
              return (0, r.mG)(this, void 0, void 0, function () {
                return (0, r.Jh)(this, function (t) {
                  return this.fetched
                    ? [2, !0]
                    : this.pendingFetch
                    ? [2, this.pendingFetch]
                    : [2, this.fetch()];
                });
              });
            }),
            (t.prototype.ensureFresh = function () {
              return (0, r.mG)(this, void 0, void 0, function () {
                return (0, r.Jh)(this, function (t) {
                  return this.pendingFetch
                    ? [2, this.pendingFetch]
                    : this.fetched &&
                      performance.now() - this.lastAttemptPerfTime < o
                    ? [2, !0]
                    : [2, this.fetch()];
                });
              });
            }),
            (t.prototype.now = function () {
              if (!this.fetched) return 0;
              var t = (performance.now() - this.lastFetchPerfTime) / 1e3;
              return Math.floor(this.lastServerTime + t);
            }),
            (t.prototype.getIsHoliday = function () {
              return this.isHolidayValue;
            }),
            (t.prototype.hasFetched = function () {
              return this.fetched;
            }),
            t
          );
        })())();
    },
    4024: function (t, e, n) {
      "use strict";
      function r(t) {
        for (var e = [], n = 1; n < arguments.length; n++)
          e[n - 1] = arguments[n];
        return t;
      }
      n.d(e, {
        Z: function () {
          return r;
        },
      });
    },
    9923: function (t, e, n) {
      "use strict";
      n.d(e, {
        U: function () {
          return l;
        },
        t: function () {
          return u;
        },
      });
      var r = n(655),
        i = (n(1501), n(9412)),
        o = n(3930),
        a = { initialized: !1 },
        s = {
          appId: "tw1pons1ra4r49pdrz2xmrij" || "",
          regionTag: "cn" || "cn",
          enableAdTrack: !0,
          routeChange: "history",
        },
        c = [],
        u = {
          instance: null,
          getInstanceByAppId: function (t) {
            return (0, i.getInstance)(t);
          },
          getInstanceAsync: function (t) {
            return (0, r.mG)(void 0, void 0, void 0, function () {
              return (0, r.Jh)(this, function (e) {
                if (t) {
                  if (-1 === c.indexOf(t))
                    throw new Error("ETL instance not initialized.");
                  return [2, (0, i.getInstance)(t)];
                }
                if (!u.instance)
                  throw new Error("ETL instance not initialized.");
                return [2, u.instance];
              });
            });
          },
          event: function (t, e) {
            return (
              void 0 === e && (e = {}),
              (0, r.mG)(void 0, void 0, void 0, function () {
                var n;
                return (0, r.Jh)(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return (
                        r.trys.push([0, 2, , 3]), [4, u.getInstanceAsync()]
                      );
                    case 1:
                      return r.sent().event(t, e), [3, 3];
                    case 2:
                      return (n = r.sent()), console.warn(n), [3, 3];
                    case 3:
                      return [2];
                  }
                });
              })
            );
          },
          eventToAppId: function (t, e, n) {
            return (
              void 0 === n && (n = {}),
              (0, r.mG)(void 0, void 0, void 0, function () {
                var i;
                return (0, r.Jh)(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return (
                        r.trys.push([0, 2, , 3]), [4, u.getInstanceAsync(t)]
                      );
                    case 1:
                      return r.sent().event(e, n), [3, 3];
                    case 2:
                      return (i = r.sent()), console.warn(i), [3, 3];
                    case 3:
                      return [2];
                  }
                });
              })
            );
          },
        },
        l = function (t) {
          var e,
            n,
            l,
            d,
            h,
            f,
            _ = t.domain,
            p = t.sub_domain,
            v = t.third_domain,
            g = t.config,
            m = void 0 === g ? {} : g,
            b = t.pageProperties,
            y = void 0 === b ? {} : b,
            w = t.initialPV,
            k = void 0 === w || w,
            C = t.autoPV,
            x = void 0 === C || C;
          if (!a.initialized) {
            a.initialized = !0;
            var E = Object.assign({}, s, m);
            if (
              !(0, o.k)({
                env: E.env,
                regionTag: E.regionTag,
                enableAdTrack: E.enableAdTrack,
                routeChange: E.routeChange,
                enableRealTimeSend: E.enableRealTimeSend,
              })
            )
              return void console.warn("[@hg/hg-web-sdk] ETL init failed.");
            var L = Array.isArray(E.appId) ? E.appId : [E.appId];
            if (!L.length)
              return void console.warn(
                "[@hg/hg-web-sdk] ETL appId not specified."
              );
            try {
              for (var S = (0, r.XA)(L), T = S.next(); !T.done; T = S.next()) {
                var A = T.value,
                  I = (0, i.getInstance)(A);
                null === (l = I.setPageProperties) ||
                  void 0 === l ||
                  l.call(I, { domain: _, sub_domain: p, third_domain: v }),
                  null === (d = I.setPageProperties) ||
                    void 0 === d ||
                    d.call(I, y),
                  x &&
                    (null === (h = I.autoPageViewEvent) ||
                      void 0 === h ||
                      h.call(I)),
                  k &&
                    (null === (f = I.pageViewEvent) ||
                      void 0 === f ||
                      f.call(I, {}));
              }
            } catch (t) {
              e = { error: t };
            } finally {
              try {
                T && !T.done && (n = S.return) && n.call(S);
              } finally {
                if (e) throw e.error;
              }
            }
            (u.instance = (0, i.getInstance)(L[0])),
              c.push.apply(c, (0, r.ev)([], (0, r.CR)(L), !1));
          }
        };
    },
    2320: function (t, e, n) {
      "use strict";
      n.d(e, {
        e: function () {
          return a;
        },
      });
      var r = n(655),
        i = n(4024),
        o = n(1721);
      function a(t) {
        return o.P.create("account", (0, r.pi)({ msg: t.msg || s[t.code] }, t));
      }
      var s = {
        NO_LOGIN: (0, i.Z)("未登录"),
        LOGIN_EXPIRED: (0, i.Z)("登录状态已失效"),
        ACCOUNT_NOT_EXIST: (0, i.Z)("账号不存在"),
        LOGIN_FAILED: (0, i.Z)("登录失败"),
        CAPTCHA_VALIDATE_FAILED: (0, i.Z)("人机验证失败"),
        SMS_VALIDATE_FAILED: (0, i.Z)("手机验证码错误"),
        ACCOUNT_CANCELLING: (0, i.Z)("您的鹰角通行证账号在注销冷静期中"),
        ACCOUNT_BANNED: (0, i.Z)("通行证账号封禁中"),
        DEFAULT: (0, i.Z)("未处理异常"),
      };
    },
    3837: function (t, e, n) {
      "use strict";
      n.d(e, {
        ZH: function () {
          return h;
        },
        LP: function () {
          return l;
        },
        TG: function () {
          return d;
        },
      });
      var r = n(655),
        i = n(3661),
        o = (function () {
          function t(t) {
            (this.duration = 1e3),
              (this.running = !1),
              (this.caching = !1),
              (this.resolvers = []),
              (this.rejecters = []),
              (this.duration =
                (null == t ? void 0 : t.duration) || this.duration);
          }
          return (
            (t.prototype.run = function (t) {
              return (0, r.mG)(this, void 0, void 0, function () {
                var e,
                  n,
                  i = this;
                return (0, r.Jh)(this, function (r) {
                  switch (r.label) {
                    case 0:
                      if (this.caching) return [2, this.value];
                      if (this.running)
                        return [
                          2,
                          new Promise(function (t, e) {
                            i.resolvers.push(t), i.rejecters.push(e);
                          }),
                        ];
                      (this.running = !0), (r.label = 1);
                    case 1:
                      return r.trys.push([1, 3, , 4]), [4, t()];
                    case 2:
                      return (
                        (e = r.sent()),
                        this.resolvers.forEach(function (t) {
                          return t(e);
                        }),
                        this.cache(e),
                        this.clearRunning(),
                        [2, e]
                      );
                    case 3:
                      throw (
                        ((n = r.sent()),
                        this.rejecters.forEach(function (t) {
                          return t(n);
                        }),
                        this.clearRunning(),
                        n)
                      );
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            (t.prototype.cache = function (t) {
              var e = this;
              (this.value = t),
                (this.caching = !0),
                setTimeout(function () {
                  e.caching = !1;
                }, this.duration);
            }),
            (t.prototype.clearRunning = function () {
              (this.running = !1),
                this.rejecters.splice(0, this.rejecters.length),
                this.resolvers.splice(0, this.resolvers.length);
            }),
            t
          );
        })(),
        a = n(6096),
        s = n(2320),
        c = new o(),
        u = null;
      function l() {
        return (0, r.mG)(this, void 0, void 0, function () {
          var t = this;
          return (0, r.Jh)(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, (0, a.f)()];
              case 1:
                return (
                  e.sent(),
                  null === u
                    ? [
                        2,
                        c.run(function () {
                          return (0, r.mG)(t, void 0, void 0, function () {
                            var t;
                            return (0, r.Jh)(this, function (e) {
                              switch (e.label) {
                                case 0:
                                  return [4, (0, i.U2)("hg")];
                                case 1:
                                  return (t = e.sent()) && (u = t), [2, t];
                              }
                            });
                          });
                        }),
                      ]
                    : [2, u]
                );
            }
          });
        });
      }
      function d() {
        return (0, r.mG)(this, void 0, void 0, function () {
          var t;
          return (0, r.Jh)(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, l()];
              case 1:
                if (!(t = e.sent())) throw (0, s.e)({ code: "NO_LOGIN" });
                return [2, t];
            }
          });
        });
      }
      function h() {
        u = null;
      }
    },
    132: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return A;
        },
      });
      var r = {};
      n.r(r),
        n.d(r, {
          getInfo: function () {
            return x;
          },
          getToken: function () {
            return a.LP;
          },
          grantApp: function () {
            return T;
          },
          requireToken: function () {
            return a.TG;
          },
        });
      var i,
        o = n(655),
        a = n(3837),
        s = n(1721),
        c = n(8230),
        u = n(536),
        l = n(7902),
        d = n(6897),
        h = n(2005),
        f = n(2320);
      !(function (t) {
        (t[(t.CLIENT = 0)] = "CLIENT"), (t[(t.OTHER = 1)] = "OTHER");
      })(i || (i = {}));
      var _ = n(9923),
        p = n(1764),
        v = 0,
        g = 1,
        m = 4,
        b = 5,
        y = 9,
        w = 10,
        k = new c.KU({
          host: l.h.accountServer.getHost,
          timeout: 5e3,
          headers: h.XN,
          onResponse: function (t, e) {
            return (0, o.mG)(void 0, void 0, void 0, function () {
              var n, r, i;
              return (0, o.Jh)(this, function (a) {
                switch (a.label) {
                  case 0:
                    return t.status === v
                      ? [2, t.data]
                      : t.status !== g
                      ? [3, 3]
                      : ((n = t.data.captcha), [4, (0, d.B)(n)]);
                  case 1:
                    return (r = a.sent())
                      ? [
                          4,
                          e.client.request(
                            e.url,
                            (0, o.pi)((0, o.pi)({}, e.option), {
                              data: (0, o.pi)(
                                (0, o.pi)(
                                  {},
                                  null === (i = e.option) || void 0 === i
                                    ? void 0
                                    : i.data
                                ),
                                { captcha: r }
                              ),
                            })
                          ),
                        ]
                      : [3, 3];
                  case 2:
                    if ((t = a.sent()).status === v) return [2, t.data];
                    a.label = 3;
                  case 3:
                    switch (t.status) {
                      case m:
                        throw (0,
                        f.e)({ code: "CAPTCHA_VALIDATE_FAILED", msg: t.msg });
                      case b:
                        throw (0,
                        f.e)({ code: "SMS_VALIDATE_FAILED", msg: t.msg });
                      case w:
                        throw (0, f.e)({ code: "ACCOUNT_BANNED", msg: t.msg });
                      case y:
                        throw (0,
                        f.e)({ code: "ACCOUNT_CANCELLING", msg: t.msg, data: { requestTs: t.data.delete_request_ts, commitTs: t.data.delete_commit_ts } });
                    }
                    throw (0,
                    f.e)({ code: "DEFAULT", msg: t.msg, data: t.data, detail: t });
                }
              });
            });
          },
          onError: function (t) {
            return (0, o.mG)(void 0, void 0, void 0, function () {
              return (0, o.Jh)(this, function (e) {
                if (u.o.is(t))
                  throw 401 === t.statusCode
                    ? (0, f.e)({ code: "LOGIN_EXPIRED" })
                    : new s.q("REQUEST_ERROR", t.message);
                throw t;
              });
            });
          },
        });
      function C(t) {
        return (0, o.mG)(this, void 0, void 0, function () {
          var e;
          return (0, o.Jh)(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, k.get("/user/info/v1/basic", { token: t })];
              case 1:
                return (
                  (e = n.sent()).hgId &&
                    p.x.getCache() !== e.hgId &&
                    (p.x.saveCache(e.hgId),
                    _.t.getInstanceAsync().then(function (t) {
                      return t.userLoginEvent(e.hgId, {});
                    })),
                  [2, e]
                );
            }
          });
        });
      }
      function x() {
        return (0, o.mG)(this, void 0, void 0, function () {
          return (0, o.Jh)(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, (0, a.TG)()];
              case 1:
                return [2, C(t.sent())];
            }
          });
        });
      }
      var E = n(1157),
        L = n(8491),
        S = n(8837);
      function T(t) {
        return (0, o.mG)(this, void 0, void 0, function () {
          var e, n;
          return (0, o.Jh)(this, function (r) {
            switch (r.label) {
              case 0:
                return [4, (0, a.TG)()];
              case 1:
                return (
                  (e = r.sent()),
                  (n = (0, S.tg)(t)),
                  [
                    4,
                    (0, E.lJ)(L.D1, {
                      identifier: n,
                      verifier: e,
                      fetch: function () {
                        return (function (t, e) {
                          return (0, o.mG)(this, void 0, void 0, function () {
                            return (0, o.Jh)(this, function (n) {
                              switch (n.label) {
                                case 0:
                                  return [
                                    4,
                                    k.post("/user/oauth2/v2/grant", {
                                      token: t,
                                      appCode: e,
                                      type: i.OTHER,
                                    }),
                                  ];
                                case 1:
                                  return [2, n.sent().token];
                              }
                            });
                          });
                        })(e, n);
                      },
                    }),
                  ]
                );
              case 2:
                return [2, r.sent()];
            }
          });
        });
      }
      var A = { meta: { subjectName: "鹰角网络通行证" }, API: r };
    },
    5956: function (t, e, n) {
      "use strict";
      n.d(e, {
        tj: function () {
          return v;
        },
        bf: function () {
          return _;
        },
        Ns: function () {
          return f;
        },
        y$: function () {
          return k;
        },
        _N: function () {
          return E;
        },
        mZ: function () {
          return w;
        },
        vz: function () {
          return b;
        },
        oX: function () {
          return y;
        },
        XJ: function () {
          return p;
        },
        _K: function () {
          return x;
        },
        y3: function () {
          return C;
        },
      });
      var r = n(655),
        i = n(132),
        o = n(357);
      function a(t) {
        return (0, r.mG)(this, void 0, void 0, function () {
          return (0, r.Jh)(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, o.L.get("/account/address/v1/city", { pid: t })];
              case 1:
                return [2, e.sent().data];
            }
          });
        });
      }
      function s(t) {
        return (0, r.mG)(this, void 0, void 0, function () {
          return (0, r.Jh)(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, o.L.get("/account/address/v1/query", { token: t })];
              case 1:
                return [2, e.sent()];
            }
          });
        });
      }
      function c(t, e) {
        return (0, r.mG)(this, void 0, void 0, function () {
          return (0, r.Jh)(this, function (n) {
            switch (n.label) {
              case 0:
                return [
                  4,
                  o.L.post(
                    "/account/address/v1/add",
                    (0, r.pi)({ token: t }, e)
                  ),
                ];
              case 1:
                return [2, n.sent().id];
            }
          });
        });
      }
      function u(t, e, n) {
        return (0, r.mG)(this, void 0, void 0, function () {
          return (0, r.Jh)(this, function (i) {
            switch (i.label) {
              case 0:
                return [
                  4,
                  o.L.post(
                    "/account/address/v1/update",
                    (0, r.pi)({ token: t, id: e }, n)
                  ),
                ];
              case 1:
                return i.sent(), [2, !0];
            }
          });
        });
      }
      function l(t, e) {
        return (0, r.mG)(this, void 0, void 0, function () {
          return (0, r.Jh)(this, function (n) {
            switch (n.label) {
              case 0:
                return [
                  4,
                  o.L.post("/account/address/v1/set_default", {
                    token: t,
                    id: e,
                  }),
                ];
              case 1:
                return n.sent(), [2, !0];
            }
          });
        });
      }
      function d(t, e) {
        return (0, r.mG)(this, void 0, void 0, function () {
          return (0, r.Jh)(this, function (n) {
            switch (n.label) {
              case 0:
                return [
                  4,
                  o.L.post("/account/address/v1/delete", { token: t, id: e }),
                ];
              case 1:
                return n.sent(), [2, !0];
            }
          });
        });
      }
      var h = function (t) {
          return null == t;
        },
        f = {
          CHN: { id: 0, name: "中国内地（大陆）" },
          CHN_SP: { id: 1, name: "港澳台地区" },
          OVERSEA: { id: 2, name: "海外" },
        },
        _ = ["CHN", "CHN_SP", "OVERSEA"].map(function (t) {
          return f[t];
        }),
        p = function (t) {
          return (
            _.find(function (e) {
              return e.id === t;
            }) || null
          );
        },
        v = [
          { value: "+86", label: "+86", optionLabel: "中国大陆 +86" },
          { value: "+852", label: "+852", optionLabel: "中国香港 +852" },
          { value: "+853", label: "+853", optionLabel: "中国澳门 +853" },
          { value: "+886", label: "+886", optionLabel: "中国台湾 +886" },
        ];
      function g() {
        return (0, r.mG)(this, void 0, void 0, function () {
          return (0, r.Jh)(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, i.Z.API.grantApp("binding")];
              case 1:
                return [2, t.sent()];
            }
          });
        });
      }
      var m = {};
      function b(t) {
        return (0, r.mG)(this, void 0, void 0, function () {
          var e;
          return (0, r.Jh)(this, function (n) {
            switch (n.label) {
              case 0:
                return h(t) ? [2, _] : m[t] ? [2, m[t]] : [4, a(t)];
              case 1:
                return (e = n.sent()), (m[t] = e), [2, e];
            }
          });
        });
      }
      function y(t) {
        return (
          void 0 === t && (t = ["CHN"]),
          (0, r.mG)(this, void 0, void 0, function () {
            var e, n;
            return (0, r.Jh)(this, function (r) {
              switch (r.label) {
                case 0:
                  return [4, g()];
                case 1:
                  return [4, s(r.sent())];
                case 2:
                  return 0 === (e = r.sent().address).length
                    ? [2, null]
                    : (n =
                        e.find(function (t) {
                          return !!t.isDefault;
                        }) || null) &&
                      t
                        .map(function (t) {
                          return f[t].id;
                        })
                        .indexOf(n.region) >= 0
                    ? [2, n]
                    : [2, null];
              }
            });
          })
        );
      }
      function w() {
        return (0, r.mG)(this, void 0, void 0, function () {
          return (0, r.Jh)(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, g()];
              case 1:
                return [4, s(t.sent())];
              case 2:
                return [2, t.sent()];
            }
          });
        });
      }
      function k(t) {
        return (0, r.mG)(this, void 0, void 0, function () {
          return (0, r.Jh)(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, g()];
              case 1:
                return [4, c(e.sent(), t)];
              case 2:
                return [2, e.sent()];
            }
          });
        });
      }
      function C(t, e) {
        return (0, r.mG)(this, void 0, void 0, function () {
          return (0, r.Jh)(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, g()];
              case 1:
                return [4, u(n.sent(), t, e)];
              case 2:
                return n.sent(), [2];
            }
          });
        });
      }
      function x(t) {
        return (0, r.mG)(this, void 0, void 0, function () {
          return (0, r.Jh)(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, g()];
              case 1:
                return [4, l(e.sent(), t)];
              case 2:
                return e.sent(), [2];
            }
          });
        });
      }
      function E(t) {
        return (0, r.mG)(this, void 0, void 0, function () {
          return (0, r.Jh)(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, g()];
              case 1:
                return [4, d(e.sent(), t)];
              case 2:
                return e.sent(), [2];
            }
          });
        });
      }
    },
    3946: function (t, e, n) {
      "use strict";
      n.d(e, {
        Ke: function () {
          return p;
        },
        W0: function () {
          return g;
        },
        JV: function () {
          return b;
        },
        oM: function () {
          return v;
        },
        Mb: function () {
          return m;
        },
      });
      var r = n(655),
        i = n(1721),
        o = n(1157),
        a = n(8491),
        s = n(132),
        c = n(4024),
        u = n(357),
        l = n(4365);
      function d(t, e, n) {
        return (0, r.mG)(this, void 0, void 0, function () {
          var i, o;
          return (0, r.Jh)(this, function (a) {
            switch (a.label) {
              case 0:
                return [
                  4,
                  u.L.get(
                    "/account/binding/v1/binding_list",
                    (0, r.pi)(
                      { token: t, appCode: e },
                      (null == n ? void 0 : n.serverId) && {
                        serverId: n.serverId,
                      }
                    )
                  ),
                ];
              case 1:
                if (0 === (i = a.sent()).list.length) return [2, []];
                if (
                  !(o = i.list.find(function (t) {
                    return t.appCode === e;
                  }))
                )
                  throw (0, l.t)({
                    code: "DEFAULT",
                    msg: (0, c.Z)("角色数据不匹配"),
                  });
                return [2, o.bindingList];
            }
          });
        });
      }
      function h() {
        return (0, r.mG)(this, void 0, void 0, function () {
          return (0, r.Jh)(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, s.Z.API.grantApp("binding")];
              case 1:
                return [2, t.sent()];
            }
          });
        });
      }
      function f(t) {
        return (0, r.mG)(this, void 0, void 0, function () {
          var e;
          return (0, r.Jh)(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, h()];
              case 1:
                return (
                  (e = n.sent()),
                  [
                    4,
                    (0, o.lJ)(a.BJ, {
                      identifier: t,
                      verifier: e,
                      fetch: function () {
                        return (function (t, e) {
                          return (0, r.mG)(this, void 0, void 0, function () {
                            return (0, r.Jh)(this, function (n) {
                              switch (n.label) {
                                case 0:
                                  return [
                                    4,
                                    u.L.post(
                                      "/account/binding/v1/token_by_uid",
                                      { token: t, uid: e }
                                    ),
                                  ];
                                case 1:
                                  return [2, n.sent().token];
                              }
                            });
                          });
                        })(e, t);
                      },
                    }),
                  ]
                );
              case 2:
                return [2, n.sent()];
            }
          });
        });
      }
      function _(t) {
        return (0, r.mG)(this, void 0, void 0, function () {
          var e;
          return (0, r.Jh)(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, h()];
              case 1:
                return (
                  (e = n.sent()),
                  [
                    4,
                    (0, o.lJ)(a.HX, {
                      identifier: t,
                      verifier: e,
                      fetch: function () {
                        return (function (t, e) {
                          return (0, r.mG)(this, void 0, void 0, function () {
                            return (0, r.Jh)(this, function (n) {
                              switch (n.label) {
                                case 0:
                                  return [
                                    4,
                                    u.L.post(
                                      "/account/binding/v1/u8_token_by_uid",
                                      { token: t, uid: e }
                                    ),
                                  ];
                                case 1:
                                  return [2, n.sent().token];
                              }
                            });
                          });
                        })(e, t);
                      },
                    }),
                  ]
                );
              case 2:
                return [2, n.sent()];
            }
          });
        });
      }
      function p(t) {
        return (0, r.mG)(this, void 0, void 0, function () {
          var e, n, i, s, c, u, l, f, _;
          return (0, r.Jh)(this, function (p) {
            switch (p.label) {
              case 0:
                return [4, h()];
              case 1:
                return [4, d(p.sent(), t)];
              case 2:
                return 0 === (e = p.sent()).length
                  ? [2, null]
                  : [4, (0, o.lJ)(a.gn, { persist: !0, identifier: t })];
              case 3:
                if (
                  ((n = p.sent()) &&
                    ((i = e.find(function (t) {
                      return t.uid === n;
                    })) ||
                      (0, o.k0)(a.gn, { persist: !0, identifier: t })),
                  !i)
                ) {
                  try {
                    for (
                      s = (0, r.XA)(e), c = s.next();
                      !c.done;
                      c = s.next()
                    ) {
                      if ((u = c.value).isDefault) {
                        i = u;
                        break;
                      }
                      u.isOfficial && (i = u);
                    }
                  } catch (t) {
                    f = { error: t };
                  } finally {
                    try {
                      c && !c.done && (_ = s.return) && _.call(s);
                    } finally {
                      if (f) throw f.error;
                    }
                  }
                  i || (i = e[0]);
                }
                return [4, v(t, i.uid)];
              case 4:
                return (l = p.sent()), [2, i ? { role: i, token: l } : null];
            }
          });
        });
      }
      function v(t, e) {
        return (0, r.mG)(this, void 0, void 0, function () {
          var n;
          return (0, r.Jh)(this, function (r) {
            switch (r.label) {
              case 0:
                return [4, f(e)];
              case 1:
                return (
                  (n = r.sent()),
                  (0, o.K7)(a.gn, e, { persist: !0, identifier: t }),
                  [2, n]
                );
            }
          });
        });
      }
      function g(t, e) {
        return (
          void 0 === e && (e = {}),
          (0, r.mG)(this, void 0, void 0, function () {
            var n, i, s, c, u, l, f, _, p, v, g, b;
            return (0, r.Jh)(this, function (y) {
              switch (y.label) {
                case 0:
                  return [4, h()];
                case 1:
                  return [4, d(y.sent(), t, e)];
                case 2:
                  return 0 === (n = y.sent()).length
                    ? [2, null]
                    : [4, (0, o.lJ)(a.gn, { persist: !0, identifier: t })];
                case 3:
                  if (
                    ((i = y.sent()) &&
                      ((s = n.find(function (t) {
                        return t.uid === i;
                      })) ||
                        (0, o.k0)(a.gn, { persist: !0, identifier: t })),
                    !s)
                  ) {
                    try {
                      for (
                        c = (0, r.XA)(n), u = c.next();
                        !u.done;
                        u = c.next()
                      ) {
                        if ((l = u.value).isDefault) {
                          s = l;
                          break;
                        }
                        l.isOfficial && (s = l);
                      }
                    } catch (t) {
                      g = { error: t };
                    } finally {
                      try {
                        u && !u.done && (b = c.return) && b.call(c);
                      } finally {
                        if (g) throw g.error;
                      }
                    }
                    s || (s = n[0]);
                  }
                  return s
                    ? (_ = !!e.isMultiServers)
                      ? [4, (0, o.lJ)(a._H, { persist: !0, identifier: t })]
                      : [3, 5]
                    : [2, null];
                case 4:
                  (p = y.sent()) &&
                    ((f = s.roles.find(function (t) {
                      return t.roleId === p;
                    })) ||
                      (0, o.k0)(a._H, { persist: !0, identifier: t })),
                    f || (f = s.roles[0]),
                    (y.label = 5);
                case 5:
                  return _ && !f
                    ? [2, null]
                    : [
                        4,
                        m(t, s.uid, {
                          isMultiServers: _,
                          roleId: null == f ? void 0 : f.roleId,
                        }),
                      ];
                case 6:
                  return (
                    (v = y.sent()), [2, { role: s, serverRole: f, token: v }]
                  );
              }
            });
          })
        );
      }
      function m(t, e, n) {
        return (
          void 0 === n && (n = {}),
          (0, r.mG)(this, void 0, void 0, function () {
            var s;
            return (0, r.Jh)(this, function (r) {
              switch (r.label) {
                case 0:
                  if (n.isMultiServers && !n.roleId)
                    throw new i.q(
                      "ROLE_ID_REQUIRED",
                      (0, c.Z)("角色roleId不能为空")
                    );
                  return [4, _(e)];
                case 1:
                  return (
                    (s = r.sent()),
                    (0, o.K7)(a.gn, e, { persist: !0, identifier: t }),
                    n.isMultiServers &&
                      n.roleId &&
                      (0, o.K7)(a._H, n.roleId, { persist: !0, identifier: t }),
                    [2, s]
                  );
              }
            });
          })
        );
      }
      function b(t, e) {
        return (0, r.mG)(this, void 0, void 0, function () {
          return (0, r.Jh)(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, h()];
              case 1:
                return [4, d(n.sent(), t, e)];
              case 2:
                return [2, n.sent()];
            }
          });
        });
      }
    },
    357: function (t, e, n) {
      "use strict";
      n.d(e, {
        L: function () {
          return u;
        },
      });
      var r = n(655),
        i = n(7902),
        o = n(1721),
        a = n(8230),
        s = n(536),
        c = n(4365),
        u = new a.KU({
          host: i.h.bindingServer.getHost(),
          timeout: 1e4,
          onResponse: function (t) {
            if (0 === t.status) return t.data;
            throw (0, c.t)({
              code: "DEFAULT",
              msg: t.msg,
              data: t.data,
              detail: t,
            });
          },
          onError: function (t) {
            return (0, r.mG)(void 0, void 0, void 0, function () {
              return (0, r.Jh)(this, function (e) {
                if (s.o.is(t)) throw new o.q("REQUEST_ERROR", t.message);
                throw t;
              });
            });
          },
        });
    },
    4365: function (t, e, n) {
      "use strict";
      n.d(e, {
        t: function () {
          return a;
        },
      });
      var r = n(655),
        i = n(4024),
        o = n(1721);
      function a(t) {
        return o.P.create(
          "bindingServer",
          (0, r.pi)({ msg: t.msg || s[t.code] }, t)
        );
      }
      var s = { DEFAULT: (0, i.Z)("未处理异常") };
    },
    655: function (t, e, n) {
      "use strict";
      n.d(e, {
        CR: function () {
          return l;
        },
        Jh: function () {
          return c;
        },
        XA: function () {
          return u;
        },
        ZT: function () {
          return i;
        },
        _T: function () {
          return a;
        },
        ev: function () {
          return d;
        },
        mG: function () {
          return s;
        },
        pi: function () {
          return o;
        },
      });
      /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
      var r = function (t, e) {
        return (
          (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            }),
          r(t, e)
        );
      };
      function i(t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Class extends value " + String(e) + " is not a constructor or null"
          );
        function n() {
          this.constructor = t;
        }
        r(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((n.prototype = e.prototype), new n()));
      }
      var o = function () {
        return (
          (o =
            Object.assign ||
            function (t) {
              for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var i in (e = arguments[n]))
                  Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
              return t;
            }),
          o.apply(this, arguments)
        );
      };
      function a(t, e) {
        var n = {};
        for (var r in t)
          Object.prototype.hasOwnProperty.call(t, r) &&
            e.indexOf(r) < 0 &&
            (n[r] = t[r]);
        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
            e.indexOf(r[i]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
              (n[r[i]] = t[r[i]]);
        }
        return n;
      }
      function s(t, e, n, r) {
        return new (n || (n = Promise))(function (i, o) {
          function a(t) {
            try {
              c(r.next(t));
            } catch (t) {
              o(t);
            }
          }
          function s(t) {
            try {
              c(r.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function c(t) {
            var e;
            t.done
              ? i(t.value)
              : ((e = t.value),
                e instanceof n
                  ? e
                  : new n(function (t) {
                      t(e);
                    })).then(a, s);
          }
          c((r = r.apply(t, e || [])).next());
        });
      }
      function c(t, e) {
        var n,
          r,
          i,
          o,
          a = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: s(0), throw: s(1), return: s(2) }),
          "function" == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function s(o) {
          return function (s) {
            return (function (o) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; a; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (i =
                        2 & o[0]
                          ? r.return
                          : o[0]
                          ? r.throw || ((i = r.return) && i.call(r), 0)
                          : r.next) &&
                      !(i = i.call(r, o[1])).done)
                  )
                    return i;
                  switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                    case 0:
                    case 1:
                      i = o;
                      break;
                    case 4:
                      return a.label++, { value: o[1], done: !1 };
                    case 5:
                      a.label++, (r = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (
                        !((i = a.trys),
                        (i = i.length > 0 && i[i.length - 1]) ||
                          (6 !== o[0] && 2 !== o[0]))
                      ) {
                        a = 0;
                        continue;
                      }
                      if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                        a.label = o[1];
                        break;
                      }
                      if (6 === o[0] && a.label < i[1]) {
                        (a.label = i[1]), (i = o);
                        break;
                      }
                      if (i && a.label < i[2]) {
                        (a.label = i[2]), a.ops.push(o);
                        break;
                      }
                      i[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  o = e.call(t, a);
                } catch (t) {
                  (o = [6, t]), (r = 0);
                } finally {
                  n = i = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 };
            })([o, s]);
          };
        }
      }
      Object.create;
      function u(t) {
        var e = "function" == typeof Symbol && Symbol.iterator,
          n = e && t[e],
          r = 0;
        if (n) return n.call(t);
        if (t && "number" == typeof t.length)
          return {
            next: function () {
              return (
                t && r >= t.length && (t = void 0),
                { value: t && t[r++], done: !t }
              );
            },
          };
        throw new TypeError(
          e ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function l(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r,
          i,
          o = n.call(t),
          a = [];
        try {
          for (; (void 0 === e || e-- > 0) && !(r = o.next()).done; )
            a.push(r.value);
        } catch (t) {
          i = { error: t };
        } finally {
          try {
            r && !r.done && (n = o.return) && n.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
        return a;
      }
      function d(t, e, n) {
        if (n || 2 === arguments.length)
          for (var r, i = 0, o = e.length; i < o; i++)
            (!r && i in e) ||
              (r || (r = Array.prototype.slice.call(e, 0, i)), (r[i] = e[i]));
        return t.concat(r || Array.prototype.slice.call(e));
      }
      Object.create;
    },
    6592: function (t, e, n) {
      "use strict";
      t.exports = n.p + "assets/age-tip.d3f95bcd751e47d767d6.png";
    },
    2673: function (t, e, n) {
      "use strict";
      t.exports = n.p + "assets/title.f6520729281d9edac80f.png";
    },
    563: function (t, e, n) {
      "use strict";
      t.exports = n.p + "assets/anti-fraud.b04767f0bd0747af1db9.jpg";
    },
    5652: function (t, e, n) {
      "use strict";
      t.exports = n.p + "assets/policy.2c053d4c81fc2b352043.png";
    },
    9609: function (t, e, n) {
      "use strict";
      t.exports = n.p + "assets/report.83391bf7a0f2ed53708b.png";
    },
    399: function (t, e, n) {
      "use strict";
      t.exports = n.p + "assets/age-tip.d3f95bcd751e47d767d6.png";
    },
    6418: function (t, e, n) {
      "use strict";
      t.exports = n.p + "assets/favicon.98a40473bb90d3d9c3eb.ico";
    },
    6048: function (t, e, n) {
      "use strict";
      t.exports = n.p + "assets/copyright.db1b9e24ce6627cad56d.png";
    },
    6758: function (t, e, n) {
      "use strict";
      t.exports = n.p + "assets/favicon.98a40473bb90d3d9c3eb.ico";
    },
    7452: function (t, e, n) {
      "use strict";
      t.exports = n.p + "assets/icon.e6666cd11b2a7b982b6d.png";
    },
    3051: function (t, e, n) {
      "use strict";
      t.exports = n.p + "assets/logo.76b3b2e7ccc47405bfe9.png";
    },
    3122: function (t, e, n) {
      "use strict";
      t.exports = n.p + "assets/copyright.34c739e28f189ed9d13a.png";
    },
    2558: function (t, e, n) {
      "use strict";
      t.exports = n.p + "assets/copyright.738cc8f5e5180e9a20aa.png";
    },
    4732: function (t, e, n) {
      "use strict";
      t.exports = n.p + "assets/copyright.534cad1bad936a31ec6c.png";
    },
    8537: function (t, e, n) {
      "use strict";
      t.exports = n.p + "assets/copyright_c.f52c8b067e2adcea4ace.png";
    },
    8391: function (t, e, n) {
      "use strict";
      t.exports = n.p + "assets/copyright_c_oversea.f724e68cddeedec689f8.png";
    },
    3025: function (t, e, n) {
      "use strict";
      t.exports = n.p + "assets/copyright.54f797f5ac3a48765165.png";
    },
    5708: function (t, e, n) {
      "use strict";
      t.exports = n.p + "assets/ak-header-bg.3d4e97044a24b025009e.png";
    },
    8002: function (t, e, n) {
      "use strict";
      t.exports = n.p + "assets/ef-header-bg.2dc6d833b3055a6e5e82.png";
    },
    5387: function (t, e, n) {
      "use strict";
      t.exports = n.p + "assets/gf-header-bg.3f04de5eac58115b6e7d.png";
    },
    8730: function (t, e, n) {
      "use strict";
      t.exports = n.p + "assets/question.38bb7e8a98fc3888206d.svg";
    },
    181: function (t, e, n) {
      "use strict";
      t.exports = n.p + "assets/ef-bg-bottom-right.6153bd1715acad456bf6.svg";
    },
    2437: function (t, e, n) {
      "use strict";
      t.exports = n.p + "assets/ef-bg-top-left.7448823f5279f5995857.svg";
    },
    6290: function (t, e, n) {
      "use strict";
      t.exports = n.p + "assets/copy.15f85e8ef7e8f0fc0c99.svg";
    },
    3491: function (t, e, n) {
      "use strict";
      t.exports = n.p + "assets/qq.75cd6afa66a9161f557d.svg";
    },
    7376: function (t, e, n) {
      "use strict";
      t.exports = n.p + "assets/qzone.23d57ba17dd878a447f3.svg";
    },
    7317: function (t, e, n) {
      "use strict";
      t.exports = n.p + "assets/system.c68527cf6c667a6aeb14.svg";
    },
    8185: function (t, e, n) {
      "use strict";
      t.exports = n.p + "assets/weibo.a5dfc59f5e120e89f74e.svg";
    },
    1501: function (t, e, n) {
      "use strict";
      var r = n(2719);
      t.exports = r;
    },
    9798: function (t, e, n) {
      "use strict";
      n(2795), n(3383);
      var r = n(8749);
      t.exports = r("Array", "flat");
    },
    509: function (t, e, n) {
      "use strict";
      var r = n(9985),
        i = n(3691),
        o = TypeError;
      t.exports = function (t) {
        if (r(t)) return t;
        throw new o(i(t) + " is not a function");
      };
    },
    7370: function (t, e, n) {
      "use strict";
      var r = n(4201),
        i = n(5391),
        o = n(2560).f,
        a = r("unscopables"),
        s = Array.prototype;
      void 0 === s[a] && o(s, a, { configurable: !0, value: i(null) }),
        (t.exports = function (t) {
          s[a][t] = !0;
        });
    },
    5027: function (t, e, n) {
      "use strict";
      var r = n(8999),
        i = String,
        o = TypeError;
      t.exports = function (t) {
        if (r(t)) return t;
        throw new o(i(t) + " is not an object");
      };
    },
    4328: function (t, e, n) {
      "use strict";
      var r = n(5290),
        i = n(7578),
        o = n(6310),
        a = function (t) {
          return function (e, n, a) {
            var s = r(e),
              c = o(s);
            if (0 === c) return !t && -1;
            var u,
              l = i(a, c);
            if (t && n != n) {
              for (; c > l; ) if ((u = s[l++]) != u) return !0;
            } else
              for (; c > l; l++)
                if ((t || l in s) && s[l] === n) return t || l || 0;
            return !t && -1;
          };
        };
      t.exports = { includes: a(!0), indexOf: a(!1) };
    },
    5271: function (t, e, n) {
      "use strict";
      var r = n(2297),
        i = n(9429),
        o = n(8999),
        a = n(4201)("species"),
        s = Array;
      t.exports = function (t) {
        var e;
        return (
          r(t) &&
            ((e = t.constructor),
            ((i(e) && (e === s || r(e.prototype))) ||
              (o(e) && null === (e = e[a]))) &&
              (e = void 0)),
          void 0 === e ? s : e
        );
      };
    },
    7120: function (t, e, n) {
      "use strict";
      var r = n(5271);
      t.exports = function (t, e) {
        return new (r(t))(0 === e ? 0 : e);
      };
    },
    6648: function (t, e, n) {
      "use strict";
      var r = n(8844),
        i = r({}.toString),
        o = r("".slice);
      t.exports = function (t) {
        return o(i(t), 8, -1);
      };
    },
    926: function (t, e, n) {
      "use strict";
      var r = n(3043),
        i = n(9985),
        o = n(6648),
        a = n(4201)("toStringTag"),
        s = Object,
        c =
          "Arguments" ===
          o(
            (function () {
              return arguments;
            })()
          );
      t.exports = r
        ? o
        : function (t) {
            var e, n, r;
            return void 0 === t
              ? "Undefined"
              : null === t
              ? "Null"
              : "string" ==
                typeof (n = (function (t, e) {
                  try {
                    return t[e];
                  } catch (t) {}
                })((e = s(t)), a))
              ? n
              : c
              ? o(e)
              : "Object" === (r = o(e)) && i(e.callee)
              ? "Arguments"
              : r;
          };
    },
    8758: function (t, e, n) {
      "use strict";
      var r = n(6812),
        i = n(9152),
        o = n(2474),
        a = n(2560);
      t.exports = function (t, e, n) {
        for (var s = i(e), c = a.f, u = o.f, l = 0; l < s.length; l++) {
          var d = s[l];
          r(t, d) || (n && r(n, d)) || c(t, d, u(e, d));
        }
      };
    },
    5773: function (t, e, n) {
      "use strict";
      var r = n(7697),
        i = n(2560),
        o = n(5684);
      t.exports = r
        ? function (t, e, n) {
            return i.f(t, e, o(1, n));
          }
        : function (t, e, n) {
            return (t[e] = n), t;
          };
    },
    5684: function (t) {
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
    1880: function (t, e, n) {
      "use strict";
      var r = n(9985),
        i = n(2560),
        o = n(8702),
        a = n(5014);
      t.exports = function (t, e, n, s) {
        s || (s = {});
        var c = s.enumerable,
          u = void 0 !== s.name ? s.name : e;
        if ((r(n) && o(n, u, s), s.global)) c ? (t[e] = n) : a(e, n);
        else {
          try {
            s.unsafe ? t[e] && (c = !0) : delete t[e];
          } catch (t) {}
          c
            ? (t[e] = n)
            : i.f(t, e, {
                value: n,
                enumerable: !1,
                configurable: !s.nonConfigurable,
                writable: !s.nonWritable,
              });
        }
        return t;
      };
    },
    5014: function (t, e, n) {
      "use strict";
      var r = n(9037),
        i = Object.defineProperty;
      t.exports = function (t, e) {
        try {
          i(r, t, { value: e, configurable: !0, writable: !0 });
        } catch (n) {
          r[t] = e;
        }
        return e;
      };
    },
    7697: function (t, e, n) {
      "use strict";
      var r = n(3689);
      t.exports = !r(function () {
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
    6420: function (t, e, n) {
      "use strict";
      var r = n(9037),
        i = n(8999),
        o = r.document,
        a = i(o) && i(o.createElement);
      t.exports = function (t) {
        return a ? o.createElement(t) : {};
      };
    },
    5565: function (t) {
      "use strict";
      var e = TypeError;
      t.exports = function (t) {
        if (t > 9007199254740991) throw e("Maximum allowed index exceeded");
        return t;
      };
    },
    71: function (t) {
      "use strict";
      t.exports =
        ("undefined" != typeof navigator && String(navigator.userAgent)) || "";
    },
    3615: function (t, e, n) {
      "use strict";
      var r,
        i,
        o = n(9037),
        a = n(71),
        s = o.process,
        c = o.Deno,
        u = (s && s.versions) || (c && c.version),
        l = u && u.v8;
      l && (i = (r = l.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])),
        !i &&
          a &&
          (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) &&
          (r = a.match(/Chrome\/(\d+)/)) &&
          (i = +r[1]),
        (t.exports = i);
    },
    8749: function (t, e, n) {
      "use strict";
      var r = n(9037),
        i = n(8844);
      t.exports = function (t, e) {
        return i(r[t].prototype[e]);
      };
    },
    2739: function (t) {
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
    9989: function (t, e, n) {
      "use strict";
      var r = n(9037),
        i = n(2474).f,
        o = n(5773),
        a = n(1880),
        s = n(5014),
        c = n(8758),
        u = n(5266);
      t.exports = function (t, e) {
        var n,
          l,
          d,
          h,
          f,
          _ = t.target,
          p = t.global,
          v = t.stat;
        if ((n = p ? r : v ? r[_] || s(_, {}) : r[_] && r[_].prototype))
          for (l in e) {
            if (
              ((h = e[l]),
              (d = t.dontCallGetSet ? (f = i(n, l)) && f.value : n[l]),
              !u(p ? l : _ + (v ? "." : "#") + l, t.forced) && void 0 !== d)
            ) {
              if (typeof h == typeof d) continue;
              c(h, d);
            }
            (t.sham || (d && d.sham)) && o(h, "sham", !0), a(n, l, h, t);
          }
      };
    },
    3689: function (t) {
      "use strict";
      t.exports = function (t) {
        try {
          return !!t();
        } catch (t) {
          return !0;
        }
      };
    },
    7809: function (t, e, n) {
      "use strict";
      var r = n(2297),
        i = n(6310),
        o = n(5565),
        a = n(4071),
        s = function (t, e, n, c, u, l, d, h) {
          for (var f, _, p = u, v = 0, g = !!d && a(d, h); v < c; )
            v in n &&
              ((f = g ? g(n[v], v, e) : n[v]),
              l > 0 && r(f)
                ? ((_ = i(f)), (p = s(t, e, f, _, p, l - 1) - 1))
                : (o(p + 1), (t[p] = f)),
              p++),
              v++;
          return p;
        };
      t.exports = s;
    },
    4071: function (t, e, n) {
      "use strict";
      var r = n(6576),
        i = n(509),
        o = n(7215),
        a = r(r.bind);
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
    7215: function (t, e, n) {
      "use strict";
      var r = n(3689);
      t.exports = !r(function () {
        var t = function () {}.bind();
        return "function" != typeof t || t.hasOwnProperty("prototype");
      });
    },
    2615: function (t, e, n) {
      "use strict";
      var r = n(7215),
        i = Function.prototype.call;
      t.exports = r
        ? i.bind(i)
        : function () {
            return i.apply(i, arguments);
          };
    },
    1236: function (t, e, n) {
      "use strict";
      var r = n(7697),
        i = n(6812),
        o = Function.prototype,
        a = r && Object.getOwnPropertyDescriptor,
        s = i(o, "name"),
        c = s && "something" === function () {}.name,
        u = s && (!r || (r && a(o, "name").configurable));
      t.exports = { EXISTS: s, PROPER: c, CONFIGURABLE: u };
    },
    6576: function (t, e, n) {
      "use strict";
      var r = n(6648),
        i = n(8844);
      t.exports = function (t) {
        if ("Function" === r(t)) return i(t);
      };
    },
    8844: function (t, e, n) {
      "use strict";
      var r = n(7215),
        i = Function.prototype,
        o = i.call,
        a = r && i.bind.bind(o, o);
      t.exports = r
        ? a
        : function (t) {
            return function () {
              return o.apply(t, arguments);
            };
          };
    },
    6058: function (t, e, n) {
      "use strict";
      var r = n(9037),
        i = n(9985);
      t.exports = function (t, e) {
        return arguments.length < 2
          ? ((n = r[t]), i(n) ? n : void 0)
          : r[t] && r[t][e];
        var n;
      };
    },
    4849: function (t, e, n) {
      "use strict";
      var r = n(509),
        i = n(981);
      t.exports = function (t, e) {
        var n = t[e];
        return i(n) ? void 0 : r(n);
      };
    },
    9037: function (t, e, n) {
      "use strict";
      var r = function (t) {
        return t && t.Math === Math && t;
      };
      t.exports =
        r("object" == typeof globalThis && globalThis) ||
        r("object" == typeof window && window) ||
        r("object" == typeof self && self) ||
        r("object" == typeof n.g && n.g) ||
        r("object" == typeof this && this) ||
        (function () {
          return this;
        })() ||
        Function("return this")();
    },
    6812: function (t, e, n) {
      "use strict";
      var r = n(8844),
        i = n(690),
        o = r({}.hasOwnProperty);
      t.exports =
        Object.hasOwn ||
        function (t, e) {
          return o(i(t), e);
        };
    },
    7248: function (t) {
      "use strict";
      t.exports = {};
    },
    2688: function (t, e, n) {
      "use strict";
      var r = n(6058);
      t.exports = r("document", "documentElement");
    },
    8506: function (t, e, n) {
      "use strict";
      var r = n(7697),
        i = n(3689),
        o = n(6420);
      t.exports =
        !r &&
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
    4413: function (t, e, n) {
      "use strict";
      var r = n(8844),
        i = n(3689),
        o = n(6648),
        a = Object,
        s = r("".split);
      t.exports = i(function () {
        return !a("z").propertyIsEnumerable(0);
      })
        ? function (t) {
            return "String" === o(t) ? s(t, "") : a(t);
          }
        : a;
    },
    6738: function (t, e, n) {
      "use strict";
      var r = n(8844),
        i = n(9985),
        o = n(4091),
        a = r(Function.toString);
      i(o.inspectSource) ||
        (o.inspectSource = function (t) {
          return a(t);
        }),
        (t.exports = o.inspectSource);
    },
    618: function (t, e, n) {
      "use strict";
      var r,
        i,
        o,
        a = n(9834),
        s = n(9037),
        c = n(8999),
        u = n(5773),
        l = n(6812),
        d = n(4091),
        h = n(2713),
        f = n(7248),
        _ = "Object already initialized",
        p = s.TypeError,
        v = s.WeakMap;
      if (a || d.state) {
        var g = d.state || (d.state = new v());
        (g.get = g.get),
          (g.has = g.has),
          (g.set = g.set),
          (r = function (t, e) {
            if (g.has(t)) throw new p(_);
            return (e.facade = t), g.set(t, e), e;
          }),
          (i = function (t) {
            return g.get(t) || {};
          }),
          (o = function (t) {
            return g.has(t);
          });
      } else {
        var m = h("state");
        (f[m] = !0),
          (r = function (t, e) {
            if (l(t, m)) throw new p(_);
            return (e.facade = t), u(t, m, e), e;
          }),
          (i = function (t) {
            return l(t, m) ? t[m] : {};
          }),
          (o = function (t) {
            return l(t, m);
          });
      }
      t.exports = {
        set: r,
        get: i,
        has: o,
        enforce: function (t) {
          return o(t) ? i(t) : r(t, {});
        },
        getterFor: function (t) {
          return function (e) {
            var n;
            if (!c(e) || (n = i(e)).type !== t)
              throw new p("Incompatible receiver, " + t + " required");
            return n;
          };
        },
      };
    },
    2297: function (t, e, n) {
      "use strict";
      var r = n(6648);
      t.exports =
        Array.isArray ||
        function (t) {
          return "Array" === r(t);
        };
    },
    9985: function (t) {
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
    9429: function (t, e, n) {
      "use strict";
      var r = n(8844),
        i = n(3689),
        o = n(9985),
        a = n(926),
        s = n(6058),
        c = n(6738),
        u = function () {},
        l = s("Reflect", "construct"),
        d = /^\s*(?:class|function)\b/,
        h = r(d.exec),
        f = !d.test(u),
        _ = function (t) {
          if (!o(t)) return !1;
          try {
            return l(u, [], t), !0;
          } catch (t) {
            return !1;
          }
        },
        p = function (t) {
          if (!o(t)) return !1;
          switch (a(t)) {
            case "AsyncFunction":
            case "GeneratorFunction":
            case "AsyncGeneratorFunction":
              return !1;
          }
          try {
            return f || !!h(d, c(t));
          } catch (t) {
            return !0;
          }
        };
      (p.sham = !0),
        (t.exports =
          !l ||
          i(function () {
            var t;
            return (
              _(_.call) ||
              !_(Object) ||
              !_(function () {
                t = !0;
              }) ||
              t
            );
          })
            ? p
            : _);
    },
    5266: function (t, e, n) {
      "use strict";
      var r = n(3689),
        i = n(9985),
        o = /#|\.prototype\./,
        a = function (t, e) {
          var n = c[s(t)];
          return n === l || (n !== u && (i(e) ? r(e) : !!e));
        },
        s = (a.normalize = function (t) {
          return String(t).replace(o, ".").toLowerCase();
        }),
        c = (a.data = {}),
        u = (a.NATIVE = "N"),
        l = (a.POLYFILL = "P");
      t.exports = a;
    },
    981: function (t) {
      "use strict";
      t.exports = function (t) {
        return null == t;
      };
    },
    8999: function (t, e, n) {
      "use strict";
      var r = n(9985);
      t.exports = function (t) {
        return "object" == typeof t ? null !== t : r(t);
      };
    },
    3931: function (t) {
      "use strict";
      t.exports = !1;
    },
    734: function (t, e, n) {
      "use strict";
      var r = n(6058),
        i = n(9985),
        o = n(3622),
        a = n(9525),
        s = Object;
      t.exports = a
        ? function (t) {
            return "symbol" == typeof t;
          }
        : function (t) {
            var e = r("Symbol");
            return i(e) && o(e.prototype, s(t));
          };
    },
    6310: function (t, e, n) {
      "use strict";
      var r = n(3126);
      t.exports = function (t) {
        return r(t.length);
      };
    },
    8702: function (t, e, n) {
      "use strict";
      var r = n(8844),
        i = n(3689),
        o = n(9985),
        a = n(6812),
        s = n(7697),
        c = n(1236).CONFIGURABLE,
        u = n(6738),
        l = n(618),
        d = l.enforce,
        h = l.get,
        f = String,
        _ = Object.defineProperty,
        p = r("".slice),
        v = r("".replace),
        g = r([].join),
        m =
          s &&
          !i(function () {
            return 8 !== _(function () {}, "length", { value: 8 }).length;
          }),
        b = String(String).split("String"),
        y = (t.exports = function (t, e, n) {
          "Symbol(" === p(f(e), 0, 7) &&
            (e = "[" + v(f(e), /^Symbol\(([^)]*)\).*$/, "$1") + "]"),
            n && n.getter && (e = "get " + e),
            n && n.setter && (e = "set " + e),
            (!a(t, "name") || (c && t.name !== e)) &&
              (s ? _(t, "name", { value: e, configurable: !0 }) : (t.name = e)),
            m &&
              n &&
              a(n, "arity") &&
              t.length !== n.arity &&
              _(t, "length", { value: n.arity });
          try {
            n && a(n, "constructor") && n.constructor
              ? s && _(t, "prototype", { writable: !1 })
              : t.prototype && (t.prototype = void 0);
          } catch (t) {}
          var r = d(t);
          return (
            a(r, "source") || (r.source = g(b, "string" == typeof e ? e : "")),
            t
          );
        });
      Function.prototype.toString = y(function () {
        return (o(this) && h(this).source) || u(this);
      }, "toString");
    },
    8828: function (t) {
      "use strict";
      var e = Math.ceil,
        n = Math.floor;
      t.exports =
        Math.trunc ||
        function (t) {
          var r = +t;
          return (r > 0 ? n : e)(r);
        };
    },
    5391: function (t, e, n) {
      "use strict";
      var r,
        i = n(5027),
        o = n(8920),
        a = n(2739),
        s = n(7248),
        c = n(2688),
        u = n(6420),
        l = n(2713),
        d = "prototype",
        h = "script",
        f = l("IE_PROTO"),
        _ = function () {},
        p = function (t) {
          return "<" + h + ">" + t + "</" + h + ">";
        },
        v = function (t) {
          t.write(p("")), t.close();
          var e = t.parentWindow.Object;
          return (t = null), e;
        },
        g = function () {
          try {
            r = new ActiveXObject("htmlfile");
          } catch (t) {}
          var t, e, n;
          g =
            "undefined" != typeof document
              ? document.domain && r
                ? v(r)
                : ((e = u("iframe")),
                  (n = "java" + h + ":"),
                  (e.style.display = "none"),
                  c.appendChild(e),
                  (e.src = String(n)),
                  (t = e.contentWindow.document).open(),
                  t.write(p("document.F=Object")),
                  t.close(),
                  t.F)
              : v(r);
          for (var i = a.length; i--; ) delete g[d][a[i]];
          return g();
        };
      (s[f] = !0),
        (t.exports =
          Object.create ||
          function (t, e) {
            var n;
            return (
              null !== t
                ? ((_[d] = i(t)), (n = new _()), (_[d] = null), (n[f] = t))
                : (n = g()),
              void 0 === e ? n : o.f(n, e)
            );
          });
    },
    8920: function (t, e, n) {
      "use strict";
      var r = n(7697),
        i = n(5648),
        o = n(2560),
        a = n(5027),
        s = n(5290),
        c = n(300);
      e.f =
        r && !i
          ? Object.defineProperties
          : function (t, e) {
              a(t);
              for (var n, r = s(e), i = c(e), u = i.length, l = 0; u > l; )
                o.f(t, (n = i[l++]), r[n]);
              return t;
            };
    },
    2560: function (t, e, n) {
      "use strict";
      var r = n(7697),
        i = n(8506),
        o = n(5648),
        a = n(5027),
        s = n(8360),
        c = TypeError,
        u = Object.defineProperty,
        l = Object.getOwnPropertyDescriptor,
        d = "enumerable",
        h = "configurable",
        f = "writable";
      e.f = r
        ? o
          ? function (t, e, n) {
              if (
                (a(t),
                (e = s(e)),
                a(n),
                "function" == typeof t &&
                  "prototype" === e &&
                  "value" in n &&
                  f in n &&
                  !n[f])
              ) {
                var r = l(t, e);
                r &&
                  r[f] &&
                  ((t[e] = n.value),
                  (n = {
                    configurable: h in n ? n[h] : r[h],
                    enumerable: d in n ? n[d] : r[d],
                    writable: !1,
                  }));
              }
              return u(t, e, n);
            }
          : u
        : function (t, e, n) {
            if ((a(t), (e = s(e)), a(n), i))
              try {
                return u(t, e, n);
              } catch (t) {}
            if ("get" in n || "set" in n)
              throw new c("Accessors not supported");
            return "value" in n && (t[e] = n.value), t;
          };
    },
    2474: function (t, e, n) {
      "use strict";
      var r = n(7697),
        i = n(2615),
        o = n(9556),
        a = n(5684),
        s = n(5290),
        c = n(8360),
        u = n(6812),
        l = n(8506),
        d = Object.getOwnPropertyDescriptor;
      e.f = r
        ? d
        : function (t, e) {
            if (((t = s(t)), (e = c(e)), l))
              try {
                return d(t, e);
              } catch (t) {}
            if (u(t, e)) return a(!i(o.f, t, e), t[e]);
          };
    },
    2741: function (t, e, n) {
      "use strict";
      var r = n(4948),
        i = n(2739).concat("length", "prototype");
      e.f =
        Object.getOwnPropertyNames ||
        function (t) {
          return r(t, i);
        };
    },
    7518: function (t, e) {
      "use strict";
      e.f = Object.getOwnPropertySymbols;
    },
    3622: function (t, e, n) {
      "use strict";
      var r = n(8844);
      t.exports = r({}.isPrototypeOf);
    },
    4948: function (t, e, n) {
      "use strict";
      var r = n(8844),
        i = n(6812),
        o = n(5290),
        a = n(4328).indexOf,
        s = n(7248),
        c = r([].push);
      t.exports = function (t, e) {
        var n,
          r = o(t),
          u = 0,
          l = [];
        for (n in r) !i(s, n) && i(r, n) && c(l, n);
        for (; e.length > u; ) i(r, (n = e[u++])) && (~a(l, n) || c(l, n));
        return l;
      };
    },
    300: function (t, e, n) {
      "use strict";
      var r = n(4948),
        i = n(2739);
      t.exports =
        Object.keys ||
        function (t) {
          return r(t, i);
        };
    },
    9556: function (t, e) {
      "use strict";
      var n = {}.propertyIsEnumerable,
        r = Object.getOwnPropertyDescriptor,
        i = r && !n.call({ 1: 2 }, 1);
      e.f = i
        ? function (t) {
            var e = r(this, t);
            return !!e && e.enumerable;
          }
        : n;
    },
    5899: function (t, e, n) {
      "use strict";
      var r = n(2615),
        i = n(9985),
        o = n(8999),
        a = TypeError;
      t.exports = function (t, e) {
        var n, s;
        if ("string" === e && i((n = t.toString)) && !o((s = r(n, t))))
          return s;
        if (i((n = t.valueOf)) && !o((s = r(n, t)))) return s;
        if ("string" !== e && i((n = t.toString)) && !o((s = r(n, t))))
          return s;
        throw new a("Can't convert object to primitive value");
      };
    },
    9152: function (t, e, n) {
      "use strict";
      var r = n(6058),
        i = n(8844),
        o = n(2741),
        a = n(7518),
        s = n(5027),
        c = i([].concat);
      t.exports =
        r("Reflect", "ownKeys") ||
        function (t) {
          var e = o.f(s(t)),
            n = a.f;
          return n ? c(e, n(t)) : e;
        };
    },
    4684: function (t, e, n) {
      "use strict";
      var r = n(981),
        i = TypeError;
      t.exports = function (t) {
        if (r(t)) throw new i("Can't call method on " + t);
        return t;
      };
    },
    2713: function (t, e, n) {
      "use strict";
      var r = n(3430),
        i = n(4630),
        o = r("keys");
      t.exports = function (t) {
        return o[t] || (o[t] = i(t));
      };
    },
    4091: function (t, e, n) {
      "use strict";
      var r = n(3931),
        i = n(9037),
        o = n(5014),
        a = "__core-js_shared__",
        s = (t.exports = i[a] || o(a, {}));
      (s.versions || (s.versions = [])).push({
        version: "3.36.1",
        mode: r ? "pure" : "global",
        copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
        license: "https://github.com/zloirock/core-js/blob/v3.36.1/LICENSE",
        source: "https://github.com/zloirock/core-js",
      });
    },
    3430: function (t, e, n) {
      "use strict";
      var r = n(4091);
      t.exports = function (t, e) {
        return r[t] || (r[t] = e || {});
      };
    },
    146: function (t, e, n) {
      "use strict";
      var r = n(3615),
        i = n(3689),
        o = n(9037).String;
      t.exports =
        !!Object.getOwnPropertySymbols &&
        !i(function () {
          var t = Symbol("symbol detection");
          return (
            !o(t) ||
            !(Object(t) instanceof Symbol) ||
            (!Symbol.sham && r && r < 41)
          );
        });
    },
    7578: function (t, e, n) {
      "use strict";
      var r = n(8700),
        i = Math.max,
        o = Math.min;
      t.exports = function (t, e) {
        var n = r(t);
        return n < 0 ? i(n + e, 0) : o(n, e);
      };
    },
    5290: function (t, e, n) {
      "use strict";
      var r = n(4413),
        i = n(4684);
      t.exports = function (t) {
        return r(i(t));
      };
    },
    8700: function (t, e, n) {
      "use strict";
      var r = n(8828);
      t.exports = function (t) {
        var e = +t;
        return e != e || 0 === e ? 0 : r(e);
      };
    },
    3126: function (t, e, n) {
      "use strict";
      var r = n(8700),
        i = Math.min;
      t.exports = function (t) {
        var e = r(t);
        return e > 0 ? i(e, 9007199254740991) : 0;
      };
    },
    690: function (t, e, n) {
      "use strict";
      var r = n(4684),
        i = Object;
      t.exports = function (t) {
        return i(r(t));
      };
    },
    8732: function (t, e, n) {
      "use strict";
      var r = n(2615),
        i = n(8999),
        o = n(734),
        a = n(4849),
        s = n(5899),
        c = n(4201),
        u = TypeError,
        l = c("toPrimitive");
      t.exports = function (t, e) {
        if (!i(t) || o(t)) return t;
        var n,
          c = a(t, l);
        if (c) {
          if (
            (void 0 === e && (e = "default"), (n = r(c, t, e)), !i(n) || o(n))
          )
            return n;
          throw new u("Can't convert object to primitive value");
        }
        return void 0 === e && (e = "number"), s(t, e);
      };
    },
    8360: function (t, e, n) {
      "use strict";
      var r = n(8732),
        i = n(734);
      t.exports = function (t) {
        var e = r(t, "string");
        return i(e) ? e : e + "";
      };
    },
    3043: function (t, e, n) {
      "use strict";
      var r = {};
      (r[n(4201)("toStringTag")] = "z"),
        (t.exports = "[object z]" === String(r));
    },
    3691: function (t) {
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
    4630: function (t, e, n) {
      "use strict";
      var r = n(8844),
        i = 0,
        o = Math.random(),
        a = r((1).toString);
      t.exports = function (t) {
        return "Symbol(" + (void 0 === t ? "" : t) + ")_" + a(++i + o, 36);
      };
    },
    9525: function (t, e, n) {
      "use strict";
      var r = n(146);
      t.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator;
    },
    5648: function (t, e, n) {
      "use strict";
      var r = n(7697),
        i = n(3689);
      t.exports =
        r &&
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
    9834: function (t, e, n) {
      "use strict";
      var r = n(9037),
        i = n(9985),
        o = r.WeakMap;
      t.exports = i(o) && /native code/.test(String(o));
    },
    4201: function (t, e, n) {
      "use strict";
      var r = n(9037),
        i = n(3430),
        o = n(6812),
        a = n(4630),
        s = n(146),
        c = n(9525),
        u = r.Symbol,
        l = i("wks"),
        d = c ? u.for || u : (u && u.withoutSetter) || a;
      t.exports = function (t) {
        return o(l, t) || (l[t] = s && o(u, t) ? u[t] : d("Symbol." + t)), l[t];
      };
    },
    2795: function (t, e, n) {
      "use strict";
      var r = n(9989),
        i = n(7809),
        o = n(690),
        a = n(6310),
        s = n(8700),
        c = n(7120);
      r(
        { target: "Array", proto: !0 },
        {
          flat: function () {
            var t = arguments.length ? arguments[0] : void 0,
              e = o(this),
              n = a(e),
              r = c(e, 0);
            return (r.length = i(r, e, e, n, 0, void 0 === t ? 1 : s(t))), r;
          },
        }
      );
    },
    3383: function (t, e, n) {
      "use strict";
      n(7370)("flat");
    },
    2719: function (t, e, n) {
      "use strict";
      var r = n(9798);
      t.exports = r;
    },
    7626: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return R;
        },
      });
      var r = n(5032),
        i = (0, r.Z)(Object, "create");
      var o = function () {
        (this.__data__ = i ? i(null) : {}), (this.size = 0);
      };
      var a = function (t) {
          var e = this.has(t) && delete this.__data__[t];
          return (this.size -= e ? 1 : 0), e;
        },
        s = Object.prototype.hasOwnProperty;
      var c = function (t) {
          var e = this.__data__;
          if (i) {
            var n = e[t];
            return "__lodash_hash_undefined__" === n ? void 0 : n;
          }
          return s.call(e, t) ? e[t] : void 0;
        },
        u = Object.prototype.hasOwnProperty;
      var l = function (t) {
        var e = this.__data__;
        return i ? void 0 !== e[t] : u.call(e, t);
      };
      var d = function (t, e) {
        var n = this.__data__;
        return (
          (this.size += this.has(t) ? 0 : 1),
          (n[t] = i && void 0 === e ? "__lodash_hash_undefined__" : e),
          this
        );
      };
      function h(t) {
        var e = -1,
          n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n; ) {
          var r = t[e];
          this.set(r[0], r[1]);
        }
      }
      (h.prototype.clear = o),
        (h.prototype.delete = a),
        (h.prototype.get = c),
        (h.prototype.has = l),
        (h.prototype.set = d);
      var f = h;
      var _ = function () {
        (this.__data__ = []), (this.size = 0);
      };
      var p = function (t, e) {
        return t === e || (t != t && e != e);
      };
      var v = function (t, e) {
          for (var n = t.length; n--; ) if (p(t[n][0], e)) return n;
          return -1;
        },
        g = Array.prototype.splice;
      var m = function (t) {
        var e = this.__data__,
          n = v(e, t);
        return (
          !(n < 0) &&
          (n == e.length - 1 ? e.pop() : g.call(e, n, 1), --this.size, !0)
        );
      };
      var b = function (t) {
        var e = this.__data__,
          n = v(e, t);
        return n < 0 ? void 0 : e[n][1];
      };
      var y = function (t) {
        return v(this.__data__, t) > -1;
      };
      var w = function (t, e) {
        var n = this.__data__,
          r = v(n, t);
        return r < 0 ? (++this.size, n.push([t, e])) : (n[r][1] = e), this;
      };
      function k(t) {
        var e = -1,
          n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n; ) {
          var r = t[e];
          this.set(r[0], r[1]);
        }
      }
      (k.prototype.clear = _),
        (k.prototype.delete = m),
        (k.prototype.get = b),
        (k.prototype.has = y),
        (k.prototype.set = w);
      var C = k,
        x = n(8003),
        E = (0, r.Z)(x.Z, "Map");
      var L = function () {
        (this.size = 0),
          (this.__data__ = {
            hash: new f(),
            map: new (E || C)(),
            string: new f(),
          });
      };
      var S = function (t) {
        var e = typeof t;
        return "string" == e || "number" == e || "symbol" == e || "boolean" == e
          ? "__proto__" !== t
          : null === t;
      };
      var T = function (t, e) {
        var n = t.__data__;
        return S(e) ? n["string" == typeof e ? "string" : "hash"] : n.map;
      };
      var A = function (t) {
        var e = T(this, t).delete(t);
        return (this.size -= e ? 1 : 0), e;
      };
      var I = function (t) {
        return T(this, t).get(t);
      };
      var O = function (t) {
        return T(this, t).has(t);
      };
      var D = function (t, e) {
        var n = T(this, t),
          r = n.size;
        return n.set(t, e), (this.size += n.size == r ? 0 : 1), this;
      };
      function N(t) {
        var e = -1,
          n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n; ) {
          var r = t[e];
          this.set(r[0], r[1]);
        }
      }
      (N.prototype.clear = L),
        (N.prototype.delete = A),
        (N.prototype.get = I),
        (N.prototype.has = O),
        (N.prototype.set = D);
      var R = N;
    },
    7685: function (t, e, n) {
      "use strict";
      var r = n(8003).Z.Symbol;
      e.Z = r;
    },
    3243: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return h;
        },
      });
      var r = n(7685),
        i = Object.prototype,
        o = i.hasOwnProperty,
        a = i.toString,
        s = r.Z ? r.Z.toStringTag : void 0;
      var c = function (t) {
          var e = o.call(t, s),
            n = t[s];
          try {
            t[s] = void 0;
            var r = !0;
          } catch (t) {}
          var i = a.call(t);
          return r && (e ? (t[s] = n) : delete t[s]), i;
        },
        u = Object.prototype.toString;
      var l = function (t) {
          return u.call(t);
        },
        d = r.Z ? r.Z.toStringTag : void 0;
      var h = function (t) {
        return null == t
          ? void 0 === t
            ? "[object Undefined]"
            : "[object Null]"
          : d && d in Object(t)
          ? c(t)
          : l(t);
      };
    },
    5032: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return y;
        },
      });
      var r = n(3243),
        i = n(7226);
      var o,
        a = function (t) {
          if (!(0, i.Z)(t)) return !1;
          var e = (0, r.Z)(t);
          return (
            "[object Function]" == e ||
            "[object GeneratorFunction]" == e ||
            "[object AsyncFunction]" == e ||
            "[object Proxy]" == e
          );
        },
        s = n(8003).Z["__core-js_shared__"],
        c = (o = /[^.]+$/.exec((s && s.keys && s.keys.IE_PROTO) || ""))
          ? "Symbol(src)_1." + o
          : "";
      var u = function (t) {
          return !!c && c in t;
        },
        l = Function.prototype.toString;
      var d = function (t) {
          if (null != t) {
            try {
              return l.call(t);
            } catch (t) {}
            try {
              return t + "";
            } catch (t) {}
          }
          return "";
        },
        h = /^\[object .+?Constructor\]$/,
        f = Function.prototype,
        _ = Object.prototype,
        p = f.toString,
        v = _.hasOwnProperty,
        g = RegExp(
          "^" +
            p
              .call(v)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?"
              ) +
            "$"
        );
      var m = function (t) {
        return !(!(0, i.Z)(t) || u(t)) && (a(t) ? g : h).test(d(t));
      };
      var b = function (t, e) {
        return null == t ? void 0 : t[e];
      };
      var y = function (t, e) {
        var n = b(t, e);
        return m(n) ? n : void 0;
      };
    },
    8003: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return o;
        },
      });
      var r =
          "object" == typeof global &&
          global &&
          global.Object === Object &&
          global,
        i = "object" == typeof self && self && self.Object === Object && self,
        o = r || i || Function("return this")();
    },
    9111: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return u;
        },
      });
      var r = n(7226),
        i = n(8003),
        o = function () {
          return i.Z.Date.now();
        },
        a = n(3782),
        s = Math.max,
        c = Math.min;
      var u = function (t, e, n) {
        var i,
          u,
          l,
          d,
          h,
          f,
          _ = 0,
          p = !1,
          v = !1,
          g = !0;
        if ("function" != typeof t) throw new TypeError("Expected a function");
        function m(e) {
          var n = i,
            r = u;
          return (i = u = void 0), (_ = e), (d = t.apply(r, n));
        }
        function b(t) {
          var n = t - f;
          return void 0 === f || n >= e || n < 0 || (v && t - _ >= l);
        }
        function y() {
          var t = o();
          if (b(t)) return w(t);
          h = setTimeout(
            y,
            (function (t) {
              var n = e - (t - f);
              return v ? c(n, l - (t - _)) : n;
            })(t)
          );
        }
        function w(t) {
          return (h = void 0), g && i ? m(t) : ((i = u = void 0), d);
        }
        function k() {
          var t = o(),
            n = b(t);
          if (((i = arguments), (u = this), (f = t), n)) {
            if (void 0 === h)
              return (function (t) {
                return (_ = t), (h = setTimeout(y, e)), p ? m(t) : d;
              })(f);
            if (v) return clearTimeout(h), (h = setTimeout(y, e)), m(f);
          }
          return void 0 === h && (h = setTimeout(y, e)), d;
        }
        return (
          (e = (0, a.Z)(e) || 0),
          (0, r.Z)(n) &&
            ((p = !!n.leading),
            (l = (v = "maxWait" in n) ? s((0, a.Z)(n.maxWait) || 0, e) : l),
            (g = "trailing" in n ? !!n.trailing : g)),
          (k.cancel = function () {
            void 0 !== h && clearTimeout(h), (_ = 0), (i = f = u = h = void 0);
          }),
          (k.flush = function () {
            return void 0 === h ? d : w(o());
          }),
          k
        );
      };
    },
    2172: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return C;
        },
      });
      var r = Array.isArray,
        i = n(8645),
        o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        a = /^\w*$/;
      var s = function (t, e) {
          if (r(t)) return !1;
          var n = typeof t;
          return (
            !(
              "number" != n &&
              "symbol" != n &&
              "boolean" != n &&
              null != t &&
              !(0, i.Z)(t)
            ) ||
            a.test(t) ||
            !o.test(t) ||
            (null != e && t in Object(e))
          );
        },
        c = n(7626);
      function u(t, e) {
        if ("function" != typeof t || (null != e && "function" != typeof e))
          throw new TypeError("Expected a function");
        var n = function () {
          var r = arguments,
            i = e ? e.apply(this, r) : r[0],
            o = n.cache;
          if (o.has(i)) return o.get(i);
          var a = t.apply(this, r);
          return (n.cache = o.set(i, a) || o), a;
        };
        return (n.cache = new (u.Cache || c.Z)()), n;
      }
      u.Cache = c.Z;
      var l = u;
      var d =
          /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        h = /\\(\\)?/g,
        f = (function (t) {
          var e = l(t, function (t) {
              return 500 === n.size && n.clear(), t;
            }),
            n = e.cache;
          return e;
        })(function (t) {
          var e = [];
          return (
            46 === t.charCodeAt(0) && e.push(""),
            t.replace(d, function (t, n, r, i) {
              e.push(r ? i.replace(h, "$1") : n || t);
            }),
            e
          );
        }),
        _ = n(7685);
      var p = function (t, e) {
          for (
            var n = -1, r = null == t ? 0 : t.length, i = Array(r);
            ++n < r;

          )
            i[n] = e(t[n], n, t);
          return i;
        },
        v = _.Z ? _.Z.prototype : void 0,
        g = v ? v.toString : void 0;
      var m = function t(e) {
        if ("string" == typeof e) return e;
        if (r(e)) return p(e, t) + "";
        if ((0, i.Z)(e)) return g ? g.call(e) : "";
        var n = e + "";
        return "0" == n && 1 / e == -Infinity ? "-0" : n;
      };
      var b = function (t) {
        return null == t ? "" : m(t);
      };
      var y = function (t, e) {
        return r(t) ? t : s(t, e) ? [t] : f(b(t));
      };
      var w = function (t) {
        if ("string" == typeof t || (0, i.Z)(t)) return t;
        var e = t + "";
        return "0" == e && 1 / t == -Infinity ? "-0" : e;
      };
      var k = function (t, e) {
        for (var n = 0, r = (e = y(e, t)).length; null != t && n < r; )
          t = t[w(e[n++])];
        return n && n == r ? t : void 0;
      };
      var C = function (t, e, n) {
        var r = null == t ? void 0 : k(t, e);
        return void 0 === r ? n : r;
      };
    },
    7226: function (t, e) {
      "use strict";
      e.Z = function (t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e);
      };
    },
    8645: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return o;
        },
      });
      var r = n(3243);
      var i = function (t) {
        return null != t && "object" == typeof t;
      };
      var o = function (t) {
        return (
          "symbol" == typeof t || (i(t) && "[object Symbol]" == (0, r.Z)(t))
        );
      };
    },
    3782: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return f;
        },
      });
      var r = /\s/;
      var i = function (t) {
          for (var e = t.length; e-- && r.test(t.charAt(e)); );
          return e;
        },
        o = /^\s+/;
      var a = function (t) {
          return t ? t.slice(0, i(t) + 1).replace(o, "") : t;
        },
        s = n(7226),
        c = n(8645),
        u = /^[-+]0x[0-9a-f]+$/i,
        l = /^0b[01]+$/i,
        d = /^0o[0-7]+$/i,
        h = parseInt;
      var f = function (t) {
        if ("number" == typeof t) return t;
        if ((0, c.Z)(t)) return NaN;
        if ((0, s.Z)(t)) {
          var e = "function" == typeof t.valueOf ? t.valueOf() : t;
          t = (0, s.Z)(e) ? e + "" : e;
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = a(t);
        var n = l.test(t);
        return n || d.test(t) ? h(t.slice(2), n ? 2 : 8) : u.test(t) ? NaN : +t;
      };
    },
    8311: function (t, e, n) {
      "use strict";
      n.d(e, {
        HY: function () {
          return r.HY;
        },
        tZ: function () {
          return o;
        },
        BX: function () {
          return o;
        },
      });
      n(8661);
      var r = n(6400);
      var i = 0;
      Array.isArray;
      function o(t, e, n, o, a, s) {
        var c,
          u,
          l = {};
        for (u in e) "ref" == u ? (c = e[u]) : (l[u] = e[u]);
        var d = {
          type: t,
          props: l,
          key: n,
          ref: c,
          __k: null,
          __: null,
          __b: 0,
          __e: null,
          __d: void 0,
          __c: null,
          constructor: void 0,
          __v: --i,
          __i: -1,
          __u: 0,
          __source: a,
          __self: s,
        };
        if ("function" == typeof t && (c = t.defaultProps))
          for (u in c) void 0 === l[u] && (l[u] = c[u]);
        return r.YM.vnode && r.YM.vnode(d), d;
      }
    },
    3737: function (t) {
      "use strict";
      t.exports = JSON.parse(
        '{"ICP":"沪ICP备17022476号-1","href_ICP":"https://beian.miit.gov.cn/","NCL":"沪网文〔2022〕0241-018号","PSR":"沪公网安备 31010402005145号","href_PSR":"http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010402005145","copyright":"Copyright ©2017 - 2026 Hypergryph Co.,Ltd. All Rights Reserved.","copyright_CN":"Copyright ©2017 - 2026 上海鹰角网络科技有限公司","address":"上海市嘉定区南翔镇银翔路799号昌辉大厦504-1室","telephone":"021-64399377","CS_QQ":"","antiFraud":"亲爱的市民朋友，上海警方反诈劝阻电话“962110”系专门针对避免您财产被骗受损而设，请您一旦收到来电，立即接听。","healthTips":["抵制不良游戏","拒绝盗版游戏","注意自我保护","谨防受骗上当","适度游戏益脑","沉迷游戏伤身","合理安排时间","享受健康生活"],"arknights":{"ageTips":["本网络游戏适合年满12周岁以上的用户使用","为了您的健康，请合理控制游戏时间"],"approval":"国新出审〔2019〕49号","ISBN":"ISBN 978-7-498-05646-7"},"exa":{"approval":"国新出审〔2023〕2031号","ISBN":"ISBN 978-7-498-12813-3"},"popucom":{"approval":"国新出审〔2024〕250号","ISBN":"ISBN 978-7-498-13121-8"},"endfield":{"approval":"国新出审〔2024〕1795号","ISBN":"ISBN 978-7-498-13884-2","NCL":"沪网文〔2025〕0013-002号"}}'
      );
    },
  },
]);
