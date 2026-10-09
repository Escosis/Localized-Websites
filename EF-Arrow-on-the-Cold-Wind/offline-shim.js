(function() {
	try {
		window._HG_ACCOUNT_SDK_INIT_OPTIONS = window._HG_ACCOUNT_SDK_INIT_OPTIONS || {};
		window._HG_ACCOUNT_SDK_INIT_OPTIONS.sentry = {
			enabled: false
		};
		window._HG_WEB_SDK_INIT_OPTIONS = window._HG_WEB_SDK_INIT_OPTIONS || {};
		window._HG_WEB_SDK_INIT_OPTIONS.sentry = {
			enabled: false
		};
	} catch (e) {}
	'use strict';
	window.__FW_PATH__ = '/mini-game/frostwind-arrow';

	var LANG_LIST = ['de_DE', 'en', 'es_MX', 'fr_FR', 'id_ID', 'it_IT',
		'ja', 'ko', 'pt_BR', 'ru_RU', 'th_TH', 'vi_VN', 'zh_Hans', 'zh_Hant'
	];
	var qs = new URLSearchParams(location.search);
	var lang = qs.get('lang') || localStorage.getItem('__fw_lang') || 'zh_Hans';
	window.__FW_LANG__ = lang;
	try {
		localStorage.setItem('__fw_lang', lang);
	} catch (e) {}

	function toPF(l) {
		var m = {
			'zh_Hans': 'zh-Hans',
			'zh_Hant': 'zh-Hant',
			'ja': 'ja-JP',
			'ko': 'ko-KR',
			'en': 'en-US'
		};
		return m[l] || (l.indexOf('_') !== -1 ? l.replace('_', '-') : l);
	}
	try {
		localStorage.setItem('SK_THEME_INFO', JSON.stringify({
			region: lang,
			regionPF: toPF(lang),
			lang: lang,
			device: 'desktop',
			color: 'light'
		}));
	} catch (e) {}
	try {
		Object.defineProperty(navigator, 'language', {
			get: function() {
				return toPF(lang);
			},
			configurable: true
		});
	} catch (e) {}
	try {
		if (document.documentElement)
			document.documentElement.setAttribute('lang', toPF(lang));
	} catch (e) {}

	window.SMSdk = window.SMSdk || {
		ready: function(cb) {
			if (typeof cb === 'function') cb();
			return this;
		},
		getDeviceId: function() {
			return 'offline-device-000000000000';
		},
		getDeviceToken: function() {
			return 'offline-device-000000000000';
		},
		getToken: function() {
			return 'offline-device-000000000000';
		},
	};
	window._smConf = window._smConf || {
		apiHost: '',
		apiPath: '',
		protocol: 'https'
	};

	var CRED = 'offline-local-cred';
	try {
		localStorage.removeItem('SK_OAUTH_CRED_KEY');
		localStorage.setItem('SK_ADMIN_CRED_KEY', CRED);
	} catch (e) {}

	try {
		var hasCred = localStorage.getItem('SK_ADMIN_CRED_KEY');
		if (!qs.get('code') && !hasCred) {
			var np = new URLSearchParams(location.search);
			np.set('code', 'offline-code');
			np.set('kind', '1');
			if (!np.get('lang')) np.set('lang', lang);
			location.replace(location.href.replace(/[?#].*$/, '') + '?' + np.toString());
			return;
		}
	} catch (e) {}

	/* SK_OAUTH_CRED_KEY 被清时保持空 */
	try {
		var nR = Storage.prototype.removeItem;
		Storage.prototype.removeItem = function(k) {
			var r = nR.apply(this, arguments);
			if (k === 'SK_OAUTH_CRED_KEY') {
				try {
					nR.call(this, k);
				} catch (e) {}
			}
			return r;
		};
	} catch (e) {}

	function loc(u) {
		u = String(u);
		if (!/^https?:\/\//.test(u)) return u;
		if (/^https?:\/\/(bbs\.hycdn\.cn|assets\.skland\.com|assets\.skport\.com|web\.hycdn\.cn|act\.skland\.com|www\.skland\.com)\//i.test(u)) {
			try {
				var x = new URL(u);
				return './' + x.pathname.replace(/^\//, '') + x.search;
			} catch (e) {
				return u;
			}
		}
		return u;
	}

	function apiToLocal(u) {
		var s = String(u);
		s = s.replace(/^https?:\/\/[^/]+/, '');
		s = s.replace(/^\.\//, '').replace(/^\//, '');
		var m = s.match(/^((?:api|h5|web|account)\/[^?#]+)/);
		if (!m) return null;
		return './' + m[1] + '.json';
	}

	function loadOv(k, d) {
		try {
			var v = sessionStorage.getItem('__fw_' + k);
			return v == null ? d : v;
		} catch (e) {
			return d;
		}
	}

	function saveOv(k, v) {
		try {
			v === '' || v == null ? sessionStorage.removeItem('__fw_' + k) :
				sessionStorage.setItem('__fw_' + k, v);
		} catch (e) {}
	}

	function applyEndGame(j) {
		if (!j || !j.data) return j;
		var a = loadOv('score', null);
		if (a !== null && a !== '') j.data.score = String(a);
		else if (window.__FW_OVER__ && window.__FW_OVER__.score != null)
			j.data.score = String(window.__FW_OVER__.score);
		var b = loadOv('best', null);
		if (b !== null && b !== '') j.data.bestScore = String(b);
		var c = loadOv('rank', null);
		if (c !== null && c !== '') j.data.rank = Number(c);
		return j;
	}

	function mkResponse(body) {
		return new Response(JSON.stringify(body), {
			status: 200,
			headers: {
				'Content-Type': 'application/json; charset=utf-8'
			},
		});
	}

	try {
		window.open = function(url) {
			console.warn('[frostwind] blocked window.open:', url);
			return null;
		};
	} catch (e) {}

	var END_GAME_BASE = {
		code: 0,
		message: 'OK',
		data: {
			valid: true,
			score: '0',
			bestScore: '0',
			rank: 100000,
			isNewRecord: false
		},
	};

	var nf = window.fetch && window.fetch.bind(window);
	window.fetch = function(input, init) {
		var url = typeof input === 'string' ? input : (input && input.url) || '';

		if (url.indexOf('__blocked') !== -1) {
			return Promise.resolve(new Response('', {
				status: 200
			}));
		}

		if (/\/end-game(\?|$)/.test(url)) {
			var j = JSON.parse(JSON.stringify(END_GAME_BASE));
			return Promise.resolve(mkResponse(applyEndGame(j)));
		}

		if (/\/activity\/endfield\/archery\/brief(\?|$)/.test(url)) {
			var briefPath = apiToLocal(url);
			if (briefPath) {
				return nf(briefPath, {
					method: 'GET'
				}).then(function(r) {
					return r.json();
				}).then(function(j) {
					try {
						if (localStorage.getItem('__fw_tutorial_done') === '1' &&
							j && j.data) {
							j.data.tutorialCompleted = true;
						}
					} catch (e) {}
					return mkResponse(j);
				});
			}
		}

		if (/\/activity\/endfield\/archery\/mark-tutorial-completed(\?|$)/.test(url)) {
			try {
				localStorage.setItem('__fw_tutorial_done', '1');
			} catch (e) {}
			return Promise.resolve(mkResponse({
				code: 0,
				message: 'OK',
				data: {}
			}));
		}

		var apiPath = apiToLocal(url);
		if (apiPath) return nf(apiPath, {
			method: 'GET'
		});

		var mapped = loc(url);
		if (mapped !== url) {
			if (typeof input === 'string') input = mapped;
			else if (input && typeof Request !== 'undefined' && input instanceof Request) {
				try {
					input = new Request(mapped, input);
				} catch (e) {
					input = mapped;
				}
			}
			return nf ? nf(input, init) : Promise.reject(new Error('offline'));
		}

		if (/^https?:\/\//i.test(url)) {
			console.warn('[frostwind] blocked foreign fetch:', url);
			return Promise.resolve(new Response('', {
				status: 200
			}));
		}

		return nf ? nf(input, init) : Promise.reject(new Error('offline'));
	};

	var nOpen = XMLHttpRequest.prototype.open,
		nSend = XMLHttpRequest.prototype.send;
	XMLHttpRequest.prototype.open = function(m, u) {
		this.__fw = u;
		var args = Array.prototype.slice.call(arguments);
		if (String(u).indexOf('__blocked') !== -1) {
			this.__blocked = true;
			return nOpen.apply(this, ['GET', './__blocked/_']);
		}
		this.__blocked = false;
		var apiPath = apiToLocal(u);
		if (apiPath) {
			args[0] = 'GET';
			args[1] = apiPath;
		} else {
			args[1] = loc(u);
		}
		return nOpen.apply(this, args);
	};
	XMLHttpRequest.prototype.send = function(body) {
		if (this.__blocked) {
			var self = this;
			try {
				Object.defineProperty(self, 'readyState', {
					value: 4,
					configurable: true
				});
			} catch (e) {}
			try {
				Object.defineProperty(self, 'status', {
					value: 200,
					configurable: true
				});
			} catch (e) {}
			try {
				Object.defineProperty(self, 'statusText', {
					value: 'OK',
					configurable: true
				});
			} catch (e) {}
			try {
				Object.defineProperty(self, 'responseText', {
					value: '',
					configurable: true
				});
			} catch (e) {}
			try {
				Object.defineProperty(self, 'response', {
					value: '',
					configurable: true
				});
			} catch (e) {}
			setTimeout(function() {
				if (typeof self.onreadystatechange === 'function') self.onreadystatechange();
				if (typeof self.onload === 'function') self.onload();
				if (typeof self.onloadend === 'function') self.onloadend();
			}, 0);
			return;
		}
		if (apiToLocal(this.__fw || '')) return nSend.call(this);
		return nSend.apply(this, arguments);
	};

	if (navigator.sendBeacon) navigator.sendBeacon = function() {
		return true;
	};
	var nWS = window.WebSocket;
	if (nWS) {
		window.WebSocket = function(url) {
			var s = this;
			s.readyState = 3;
			s.url = String(url);
			s.send = function() {};
			s.close = function() {};
			s.addEventListener = function() {};
			s.removeEventListener = function() {};
			setTimeout(function() {
				if (typeof s.onerror === 'function') s.onerror({
					type: 'error'
				});
				if (typeof s.onclose === 'function') s.onclose({
					type: 'close',
					code: 1006,
					wasClean: false
				});
			}, 0);
			return s;
		};
		window.WebSocket.CONNECTING = 0;
		window.WebSocket.OPEN = 1;
		window.WebSocket.CLOSING = 2;
		window.WebSocket.CLOSED = 3;
	}

	function patchProp(proto, prop) {
		try {
			var d = Object.getOwnPropertyDescriptor(proto, prop);
			if (d && d.set) Object.defineProperty(proto, prop, {
				get: d.get,
				set: function(v) {
					d.set.call(this, loc(v));
				},
				configurable: true,
			});
		} catch (e) {}
	}
	patchProp(HTMLScriptElement.prototype, 'src');
	patchProp(HTMLImageElement.prototype, 'src');
	patchProp(HTMLLinkElement.prototype, 'href');
	patchProp(HTMLAudioElement.prototype, 'src');

	try {
		var sA = Element.prototype.setAttribute;
		Element.prototype.setAttribute = function(n, v) {
			if (String(n).toLowerCase() === 'crossorigin') return undefined;
			return sA.call(this, n, v);
		};
		['HTMLImageElement', 'HTMLVideoElement'].forEach(function(k) {
			var d = Object.getOwnPropertyDescriptor(window[k].prototype, 'crossOrigin');
			if (d && d.set) Object.defineProperty(window[k].prototype, 'crossOrigin', {
				get: function() {
					return '';
				},
				set: function() {},
				configurable: true
			});
		});
	} catch (e) {}

	function buildPanel() {
		if (window.__FW_PANEL_BUILT__) return;
		window.__FW_PANEL_BUILT__ = true;

		var css = document.createElement('style');
		css.textContent = [
			'#__fw_p{position:fixed;top:10px;right:10px;z-index:2147483647;',
			'font:12px/1.5 system-ui,sans-serif;color:#eee}',
			'#__fw_btn{display:block;margin-left:auto;width:32px;height:32px;border-radius:50%;',
			'border:0;background:#222a;color:#fff;font-size:16px;cursor:pointer}',
			'#__fw_box{display:none;position:absolute;top:44px;right:0;padding:10px 12px;',
			'background:#181a1cdd;border:1px solid #333;border-radius:8px;width:280px;',
			'max-height:88vh;overflow-y:auto}',
			'#__fw_box.on{display:block}',
			'#__fw_box h4{margin:0 0 8px;font-size:13px;color:#9ad}',
			'#__fw_box h5{margin:12px 0 4px;font-size:11px;color:#7ac;text-transform:uppercase}',
			'#__fw_box label{display:block;margin:6px 0 2px;color:#aaa;font-size:11px}',
			'#__fw_box select,#__fw_box input{width:100%;box-sizing:border-box;padding:3px 5px;',
			'background:#0e0f10;border:1px solid #333;color:#eee;border-radius:4px;font-size:12px}',
			'#__fw_box button.wide{width:100%;margin-top:6px;padding:5px;background:#2a5d8f;',
			'border:0;color:#fff;border-radius:4px;cursor:pointer;font-size:12px}',
			'#__fw_box .live{padding:6px 8px;background:#0e0f10;border-radius:4px;',
			'font-family:monospace;font-size:11px;color:#9cf;margin-bottom:6px}',
			'#__fw_hint{color:#777;font-size:10px;margin-top:8px}',
		].join('');
		document.head.appendChild(css);

		var cur = window.__FW_LANG__ || 'zh_Hans';
		var LANG_LABEL = {
			zh_Hans: '简体中文',
			zh_Hant: '繁體中文',
			en: 'English',
			ja: '日本語',
			ko: '한국어',
			de_DE: 'Deutsch',
			es_MX: 'Español',
			fr_FR: 'Français',
			id_ID: 'Bahasa Indonesia',
			it_IT: 'Italiano',
			pt_BR: 'Português',
			ru_RU: 'Русский',
			th_TH: 'ไทย',
			vi_VN: 'Tiếng Việt'
		};
		var opts = LANG_LIST.map(function(k) {
			return '<option value="' + k + '"' + (k === cur ? ' selected' : '') + '>' +
				(LANG_LABEL[k] || k) + '</option>';
		}).join('');

		var wrap = document.createElement('div');
		wrap.id = '__fw_p';
		wrap.innerHTML =
			'<button id="__fw_btn">⚙</button>' +
			'<div id="__fw_box">' +
			'<h4>修改面板</h4>' +
			'<h5>语言</h5>' +
			'<select id="__fw_lang">' + opts + '</select>' +
			'<button class="wide" id="__fw_lang_go">切换并重载</button>' +
			'<h5>实时状态</h5><div id="__fw_live" class="live">等待…</div>' +
			'<label>设置当前分数</label>' +
			'<input id="__fw_set_score" placeholder="输入分数">' +
			'<button class="wide" id="__fw_set_score_go">应用</button>' +
			'<button class="wide" id="__fw_cheat_kill">秒杀全场</button>' +
			'<h5>结算显示覆盖</h5>' +
			'<label>本局得分</label><input id="__fw_score" placeholder="留空=真实分数" value="' + (loadOv('score', '') || '') + '">' +
			'<label>历史最高</label><input id="__fw_best"  placeholder="留空=不覆盖"   value="' + (loadOv('best', '') || '') + '">' +
			'<label>排名</label>    <input id="__fw_rank"  placeholder="留空=不覆盖"   value="' + (loadOv('rank', '') || '') + '">' +
			'<button class="wide" id="__fw_apply">保存</button>' +
			'<h5>游戏参数</h5>' +
			'<label>箭矢速度</label>  <input id="__fw_p_speed"  placeholder="720">' +
			'<label>主箭矢数</label>  <input id="__fw_p_volley" placeholder="5">' +
			'<label>每轮最多怪</label><input id="__fw_p_maxmon" placeholder="4">' +
			'<label>每轮最少怪</label><input id="__fw_p_minmon" placeholder="2">' +
			'<label>清屏奖励</label>  <input id="__fw_p_bcb"    placeholder="1000">' +
			'<label>分裂箭数</label>  <input id="__fw_p_split"  placeholder="10">' +
			'<button class="wide" id="__fw_p_apply">应用参数</button>' +
			'<div id="__fw_hint">参数仅在游戏中可生效</div>' +
			'<hr style="border:0;border-top:1px solid #333;margin:10px 0 6px">' +
			'<div id="__fw_hide" style="text-align:center;color:#9ad;cursor:pointer;font-size:11px;padding:4px 0">隐藏面板</div>' +
			'</div>';
		document.body.appendChild(wrap);

		document.getElementById('__fw_btn').onclick = function() {
			document.getElementById('__fw_box').classList.toggle('on');
		};
		document.getElementById('__fw_hide').onclick = function() {
			document.getElementById('__fw_p').style.display = 'none';
		};
		document.getElementById('__fw_lang_go').onclick = function() {
			var v = document.getElementById('__fw_lang').value;
			try {
				localStorage.setItem('__fw_lang', v);
			} catch (e) {}
			var np = new URLSearchParams(location.search);
			np.set('lang', v);
			if (!np.get('code')) {
				np.set('code', 'offline-code');
				np.set('kind', '1');
			}
			location.href = location.href.replace(/[?#].*$/, '') + '?' + np.toString();
		};
		document.getElementById('__fw_apply').onclick = function() {
			saveOv('score', document.getElementById('__fw_score').value.trim());
			saveOv('best', document.getElementById('__fw_best').value.trim());
			saveOv('rank', document.getElementById('__fw_rank').value.trim());
			this.textContent = '已保存 ✓';
			var b = this;
			setTimeout(function() {
				b.textContent = '保存';
			}, 1200);
		};
		setInterval(function() {
			var g = window.__FW_GAME__,
				sc = g && g.scene,
				s = window.__FW_SCORE__ || {};
			var round = sc && sc.turnController ? sc.turnController.currentRound : '—';
			var alive = sc && sc.spawnController ? sc.spawnController.activeMonsters.length : '—';
			var el = document.getElementById('__fw_live');
			if (el) el.textContent = '得分 ' + (s.score != null ? s.score : '—') +
				' 连击数 ' + (s.combo != null ? s.combo : '—') +
				' 回合数 ' + round + ' 怪物数 ' + alive;
		}, 300);

		document.getElementById('__fw_set_score_go').onclick = function() {
			var g = window.__FW_GAME__;
			if (!g || !g.scene) return alert('请先进入游戏');
			var v = Number(document.getElementById('__fw_set_score').value);
			if (!Number.isFinite(v)) return;
			var s = g.scene.scoreController;
			s.snapshot.score = v;
			s.emitScore();
		};

		document.getElementById('__fw_cheat_kill').onclick = function() {
			var g = window.__FW_GAME__;
			if (!g || !g.scene) return alert('请先进入游戏');
			var sc = g.scene,
				sctrl = sc.scoreController;
			sc.spawnController.monsters.forEach(function(m) {
				if (m.defeated) return;
				while (!m.defeated) {
					var died = m.takeDamage();
					sctrl.recordDamage(m, died);
				}
			});
			sc.refreshDangerZoneState();
			sc.checkBoardClear();
		};
		document.getElementById('__fw_p_apply').onclick = function() {
			var c = window.__FW_CFG__;
			if (!c) return alert('配置未就绪（先进入游戏）');

			function ap(o, k, id) {
				var v = document.getElementById(id).value.trim();
				if (v === '') return;
				var n = Number(v);
				if (Number.isFinite(n)) o[k] = n;
			}
			ap(c.arrow, 'speed', '__fw_p_speed');
			ap(c.arrow, 'mainVolleyCount', '__fw_p_volley');
			ap(c.row, 'maxMonsters', '__fw_p_maxmon');
			ap(c.row, 'minMonsters', '__fw_p_minmon');
			ap(c.score, 'boardClearBonus', '__fw_p_bcb');
			ap(c.splitItem, 'directions', '__fw_p_split');
			this.textContent = '已应用';
			var b = this;
			setTimeout(function() {
				b.textContent = '应用参数';
			}, 1200);
		};
	}
	if (document.readyState === 'loading')
		document.addEventListener('DOMContentLoaded', buildPanel);
	else buildPanel();

	console.info('[frostwind] lang=' + lang);
})();