/* =====================================================
 * 修改面板
 * 由 821.67c1cf.js 在 dh(f().Fragment, uQ); 之后动态加载
 * 通过 window.__TT_PANEL__.init(deps) 注入依赖
 * ===================================================== */
(function () {
  'use strict';

  var LOCK_KEY = 'tt-lock-next-level';
  var TUTORIAL_KEY = 'tt-tutorial-skipped';
  var PROGRESS_KEY = 'tt-task-progress';
  var CLAIMED_KEY = 'tt-task-claimed';
  var USER_KEY = 'tt-user-info';
  var INF_KEY = 'tt-infinite-energy';
  var INV_KEY = 'tt-invincible';
  var HIGHSCORE_KEY = 'tt-high-score';

  /* ---------- i18n ---------- */
  var PT = {
    'zh-cn': {
      openBtn: '修改面板',
      gameLang: '游戏语言',
      panelLang: '面板语言',
      score: '得分',
      mergeCount: '合成次数',
      skillCount: '技能释放次数',
      highScore: '历史最高分',
      energy: '技力（0~3）',
      swapCharge: '累计技力消耗（0~6）',
      curLevel: '当前山团团等级（1~11）',
      nextLevel: '下一个山团团等级（1~11）',
      lockNext: '锁定下一个山团团等级',
      infEnergy: '无限技力',
      invincible: '无敌（不触发结算倒计时）',
      golden: '解锁黄金管理员',
      skipTut: '跳过教程',
      showTut: '显示教程',
      resetSettings: '恢复默认设置',
      clearAllData: '清除所有数据',
      nickname: '昵称（空=管理员）',
      uid: 'UID（空=10000001）',
      avatar: '头像编号（3~53，空=默认头像）',
      apply: '应用',
      close: '关闭面板',
      remove: '移除面板',
      defaultNickname: '管理员',
      confirmClear: '确定要清除所有数据吗？包括设置、进度、教程状态。清空后页面将自动刷新。',
      confirmReset: '确定要恢复默认设置吗？仅清除设置项（用户信息、无限技力、无敌、锁定等级、历史最高分），不影响任务进度。页面将自动刷新。',
      confirmLang: '切换游戏语言后将重新加载页面，是否继续？'
    },
    'en-us': {
      openBtn: 'Mod Panel',
      gameLang: 'Game Language',
      panelLang: 'Panel Language',
      score: 'Score',
      mergeCount: 'Merge Count',
      skillCount: 'Skill Cast Count',
      highScore: 'High Score',
      energy: 'Skill (0~3)',
      swapCharge: 'Total SP Used (0~6)',
      curLevel: 'Current OrbiPom Lv (1~11)',
      nextLevel: 'Next OrbiPom Lv (1~11)',
      lockNext: 'Lock Next OrbiPom Lv',
      infEnergy: 'Infinite Skill',
      invincible: 'Invincible (No Death Timer)',
      golden: 'Unlock Golden Endmin',
      skipTut: 'Skip Tutorial',
      showTut: 'Show Tutorial',
      resetSettings: 'Reset Settings',
      clearAllData: 'Clear All Data',
      nickname: 'Nickname (blank=Endmin)',
      uid: 'UID (blank=10000001)',
      avatar: 'Avatar # (3~53, blank=default)',
      apply: 'Apply',
      close: 'Close Panel',
      remove: 'Remove Panel',
      defaultNickname: 'Endmin',
      confirmClear: 'Clear ALL data? Settings, progress, tutorial state. Page will reload.',
      confirmReset: 'Reset all settings? (user info, infinite skill, invincible, level lock, high score) Progress is unaffected. Page will reload.',
      confirmLang: 'Page will reload with new language. Continue?'
    }
  };

  var LANGS = [
    { v: 'zh-cn', label: '简体中文' },
    { v: 'zh-tw', label: '繁體中文' },
    { v: 'en-us', label: 'English' },
    { v: 'ja-jp', label: '日本語' },
    { v: 'ko-kr', label: '한국어' },
    { v: 'de-de', label: 'Deutsch' },
    { v: 'fr-fr', label: 'Français' },
    { v: 'it-it', label: 'Italiano' },
    { v: 'es-mx', label: 'Español' },
    { v: 'pt-br', label: 'Português' },
    { v: 'ru-ru', label: 'Русский' },
    { v: 'id-id', label: 'Bahasa Indonesia' },
    { v: 'vi-vn', label: 'Tiếng Việt' },
    { v: 'th-th', label: 'ภาษาไทย' }
  ];

  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function lsDel(k) { try { localStorage.removeItem(k); } catch (e) {} }
  function lsGetJSON(k, def) {
    var s = lsGet(k);
    if (s) { try { return JSON.parse(s); } catch (e) {} }
    return def;
  }

  window.__TT_PANEL__ = {
    init: function (D) {
      try {
        if (!D || !D.e3 || !D.ty || !D.tA) throw new Error('missing deps');

        var e3 = D.e3;
        var ty = D.ty;
        var tA = D.tA;
        var tg = D.tg;
        var aO = D.aO;
        var e8 = D.e8;
        var j = D.j;
        var o2 = D.o2;
        var aw = D.aw;
        var eF = D.eF;
        var eI = D.eI;
        var getIH = D.getIH || function () { return null; };
        var getEq = D.getEq || function () { return null; };
        var setEq = D.setEq || function () {};

        /* ---------- hook 排行榜：按分数降序重排 ---------- */
        try {
          var _origEq = getEq();
          if (typeof _origEq === 'function') {
            setEq(function () {
              return _origEq().then(function (res) {
                if (!res || res.code !== 0 || !res.data || !Array.isArray(res.data.list)) return res;
                var list = res.data.list.slice();
                list.sort(function (a, b) { return (b.score || 0) - (a.score || 0); });
                var newList = list.map(function (x, i) {
                  return Object.assign({}, x, { rank: i + 1 });
                });
                var self = res.data.self || {};
                var selfRank = newList.length;
                for (var i = 0; i < newList.length; i++) {
                  if (newList[i].isNpc !== true) { selfRank = i + 1; break; }
                }
                return {
                  code: 0,
                  data: {
                    list: newList,
                    self: Object.assign({}, self, { rank: selfRank })
                  }
                };
              });
            });
          }
        } catch (e) { console.warn('[TT-Panel] hook eq failed', e); }

        /* ---------- 竖屏旋转坐标修正 ---------- */
        try {
          setInterval(function () {
            var ih = getIH();
            if (!ih || ih.__rtPatched || !ih.renderer || !ih.renderer.canvas) return;
            ih.__rtPatched = 1;
            var R = ih.renderer, PX = 75, PY = 135, W = 230, H = 280;
            var toW = function (cx, cy) {
              var r = R.canvas.getBoundingClientRect();
              var rot = document.body && document.body.dataset && document.body.dataset.rotate === "1";
              var s = (rot ? r.height : r.width) / (W + 2 * PX) || 1;
              return rot
                ? { x: (cy - r.top) / s - PX, y: (cx - r.left) / s - PY }
                : { x: (cx - r.left) / s - PX, y: (cy - r.top) / s - PY };
            };
            var inW = function (p) { return p.x >= 0 && p.x <= W && p.y >= 0 && p.y <= H; };

            ih.handlePointerMove = function (cx, cy) {
              var st = e3.getState();
              if (st.state !== "playing" || st.paused) return;
              var w = toW(cx, cy);
              if (!ih.skillController.pointerMove(w.x, w.y) && inW(w)) ih.movePreview(ih.clampX(w.x));
            };

            var _up = ih.onPointerUp;
            ih.onPointerUp = function (e) {
              var st = e3.getState();
              if (st.state !== "playing" || st.paused) return;
              var w = toW(e.clientX, e.clientY);
              if (ih.skillController.pointerUp(w.x, w.y) || !inW(w)) return;
              if (performance.now() < ih.dropLockUntil) return;
              ih.drop(ih.clampX(w.x));
            };
            if (ih.inputTarget) {
              ih.inputTarget.removeEventListener("pointerup", _up);
              ih.inputTarget.addEventListener("pointerup", ih.onPointerUp);
            }
          }, 300);
        } catch (e) { console.warn('[TT-Panel] rotate patch failed', e); }

        /* ---------- 无敌：hook 越线检测 ---------- */
        try {
          if (o2 && o2.prototype && o2.prototype.checkGameOver) {
            var _origCGO = o2.prototype.checkGameOver;
            o2.prototype.checkGameOver = function (e) {
              if (tA.getState().invincible) {
                try { if (this.renderer) this.renderer.setDangerCountdown(null); } catch (x) {}
                try { if (this.dangerCountdown && this.dangerCountdown.reset) this.dangerCountdown.reset(); } catch (x) {}
                return;
              }
              return _origCGO.call(this, e);
            };
          }
        } catch (e) { console.warn('[TT-Panel] patch invincible failed', e); }

        /* ---------- 面板语言：初始由游戏语言决定，可手动改但不存储 ---------- */
        function resolvePanelLang() {
          var gl = 'zh-cn';
          try { gl = j.getState().lang || 'zh-cn'; } catch (e) {}
          return (gl === 'zh-cn' || gl === 'zh-tw') ? 'zh-cn' : 'en-us';
        }
        var panelLang = resolvePanelLang();
        (function () {
          try {
            if (!document.fonts || !document.fonts.load) return;
            var fam = (panelLang === 'zh-cn') ? '"HarmonyOS_Sans_SC"' : '"HarmonyOS_Sans"';
            document.fonts.load('16px ' + fam, 'A');
            document.fonts.load('bold 16px ' + fam, 'A');
          } catch (e) {}
        })();
        function t(k) {
          var T = PT[panelLang] || PT['en-us'];
          return T[k] || PT['en-us'][k] || k;
        }

        /* ---------- 面板字体：直接引用游戏已注册的 family ---------- */
        function getPanelFontFamily() {
          if (panelLang === 'zh-cn') {
            return '"HarmonyOS_Sans_SC", "HarmonyOS_Sans", sans-serif';
          }
          return '"HarmonyOS_Sans", "HarmonyOS_Sans_SC", sans-serif';
        }
        function applyFontsToDom() {
          var f = getPanelFontFamily();
          if (btnEl) btnEl.style.fontFamily = f;
          if (panelEl) panelEl.style.fontFamily = f;
        }

        /* ---------- URL 游戏语言 ---------- */
        var currentURLang = (function () {
          try { return new URL(window.location.href).searchParams.get('lang') || 'zh-cn'; } catch (e) { return 'zh-cn'; }
        })();

        /* ---------- 排行榜 mock 同步 ---------- */
        function syncMockSelf(nick, avatar, score) {
          try {
            if (eF) {
              if (nick !== undefined && nick !== null) eF.nickname = nick;
              if (avatar !== undefined) eF.avatar = avatar;
              if (score !== undefined && score !== null) eF.score = score;
            }
          } catch (e) {}
          try {
            if (eI) {
              if (nick !== undefined && nick !== null) eI.nickname = nick;
              if (avatar !== undefined) eI.avatar = avatar;
            }
          } catch (e) {}
        }

        /* ---------- 自动保存用户信息 ---------- */
        function saveUserInfo() {
          try {
            var u = ty.getState().userInfo || {};
            lsSet(USER_KEY, JSON.stringify({
              nickname: u.nickname || '',
              uid: u.roleId || '',
              avatar: (u.avatar === null || u.avatar === undefined) ? null : u.avatar
            }));
          } catch (e) {}
        }

        /* ---------- 启动：应用已保存的用户信息 / 无限技力 / 无敌 / 历史最高分 ---------- */
        try {
          var _su = lsGetJSON(USER_KEY, null);
          if (_su) {
            var _old = ty.getState().userInfo || {};
            ty.getState().setUserInfo(Object.assign({}, _old, {
              nickname: _su.nickname,
              roleId: _su.uid,
              uid: _su.uid,
              avatar: (_su.avatar === undefined ? null : _su.avatar)
            }));
            syncMockSelf(_su.nickname, _su.avatar);
          }
        } catch (e) {}
        try {
          if (lsGet(INF_KEY) === '1') {
            tA.getState().setInfiniteEnergy(true);
            e3.setState({ energy: 3, energyProgress: 0, energyDecayStartedAt: 0, nextEnergyDecayAt: 0, swapCharge: 6 });
          }
        } catch (e) {}
        try {
          if (lsGet(INV_KEY) === '1') {
            tA.setState({ invincible: true });
          }
        } catch (e) {}
        try {
          var _hs = lsGet(HIGHSCORE_KEY);
          if (_hs !== null) {
            var _hsn = parseInt(_hs, 10);
            if (isFinite(_hsn) && _hsn >= 0) {
              e3.setState({ highScore: _hsn });
              if (eF) eF.score = _hsn;
            }
          }
        } catch (e) {}

        /* ---------- 锁定等级 ---------- */
        var lockLevel = lsGetJSON(LOCK_KEY, { on: false, next: 5 });
        function saveLock() { lsSet(LOCK_KEY, JSON.stringify(lockLevel)); }

        /* ---------- 教程持久化 ---------- */
        function isTutorialSkipped() { return lsGet(TUTORIAL_KEY) === '1'; }
        function setTutorialSkipped(v) { if (v) lsSet(TUTORIAL_KEY, '1'); else lsDel(TUTORIAL_KEY); }
        function applyTutorialSkip() {
          if (!isTutorialSkipped()) return;
          try {
            var g = e3.getState();
            if (!g.guideDone) e3.setState({ guideDone: true, paused: false });
          } catch (e) {}
          try {
            var ao = aO.getState();
            if (ao.isActive) aO.setState({ isActive: false, currentStepIndex: 0, steps: [], onComplete: void 0 });
          } catch (e) {}
        }
        applyTutorialSkip();
        setInterval(applyTutorialSkip, 500);

        /* ---------- 任务进度持久化 ---------- */
        var ttTotal = lsGetJSON(PROGRESS_KEY, { merge: 0, skill: 0, goldenAdmin: 0, highScore: 0, shared: false });
        var ttClaimed = lsGetJSON(CLAIMED_KEY, {});
        function saveTT() { lsSet(PROGRESS_KEY, JSON.stringify(ttTotal)); }
        function saveClaimed() { lsSet(CLAIMED_KEY, JSON.stringify(ttClaimed)); }
        var lastE3Snapshot = { mergeCount: 0, skillUseCount: 0 };

        /* ---------- 领取快照 ---------- */
        var claimSnapshot = null;
        try {
          tg.subscribe(function (state, prev) {
            if (!prev) return;
            if (!prev.claimingTaskId && state.claimingTaskId) {
              claimSnapshot = {
                id: state.claimingTaskId,
                tasks: (state.tasks || []).map(function (x) {
                  return { id: x.id, claimable: !!x.claimable };
                })
              };
            }
            if (prev.claimingTaskId && !state.claimingTaskId && claimSnapshot) {
              if (claimSnapshot.id === '__all__') {
                claimSnapshot.tasks.forEach(function (x) { if (x.claimable) ttClaimed[x.id] = true; });
              } else {
                ttClaimed[claimSnapshot.id] = true;
              }
              saveClaimed();
              claimSnapshot = null;
            }
          });
        } catch (e) { console.warn('[TT-Panel] subscribe failed', e); }

        /* ---------- 累计 ---------- */
        setInterval(function () {
          try {
            var g = e3.getState();
            if (g.mergeCount < lastE3Snapshot.mergeCount) lastE3Snapshot.mergeCount = 0;
            if (g.skillUseCount < lastE3Snapshot.skillUseCount) lastE3Snapshot.skillUseCount = 0;
            var dM = g.mergeCount - lastE3Snapshot.mergeCount;
            if (dM > 0) { ttTotal.merge += dM; lastE3Snapshot.mergeCount = g.mergeCount; saveTT(); }
            var dS = g.skillUseCount - lastE3Snapshot.skillUseCount;
            if (dS > 0) { ttTotal.skill += dS; lastE3Snapshot.skillUseCount = g.skillUseCount; saveTT(); }
            if (g.highScore > ttTotal.highScore) { ttTotal.highScore = g.highScore; saveTT(); }
            if (g.maxLevelThisRun >= 11 && !ttTotal.goldenAdmin) { ttTotal.goldenAdmin = 1; saveTT(); }
          } catch (e) {}
          try {
            if (e8.getState().shared && !ttTotal.shared) { ttTotal.shared = true; saveTT(); }
          } catch (e) {}
        }, 200);

        /* ---------- 回写 tasks ---------- */
        setInterval(function () {
          try {
            var st = tg.getState();
            if (!st.tasks || !st.tasks.length) return;
            var changed = false;
            var newTasks = st.tasks.map(function (x) {
              var isClaimed = x.status !== null || !!ttClaimed[x.id];
              var shouldBe = 0;
              if (x.id === 'merge') shouldBe = ttTotal.merge;
              else if (x.id === 'skill') shouldBe = ttTotal.skill;
              else if (x.id === 'highScore') shouldBe = ttTotal.highScore;
              else if (x.id === 'goldenAdmin') shouldBe = ttTotal.goldenAdmin;
              else if (x.id === 'share') shouldBe = ttTotal.shared ? 1 : 0;

              if (isClaimed) {
                if (x.status !== null && !x.claimable && x.current >= x.target) return x;
                changed = true;
                return Object.assign({}, x, {
                  current: Math.max(shouldBe, x.target),
                  status: x.status !== null ? x.status : 1,
                  claimable: false
                });
              }
              var claimable = shouldBe >= x.target;
              if (x.current === shouldBe && x.claimable === claimable && x.status === null) return x;
              changed = true;
              return Object.assign({}, x, { current: shouldBe, claimable: claimable });
            });
            if (changed) {
              var claimableCount = newTasks.filter(function (x) { return x.claimable; }).length;
              tg.setState({ tasks: newTasks, claimableCount: claimableCount });
            }
          } catch (e) {}
        }, 300);

        /* ---------- 定时任务 ---------- */
        setInterval(function () {
          try {
            if (tA.getState().infiniteEnergy) {
              var g = e3.getState();
              if (g.energy < 3 || g.swapCharge < 6) {
                e3.setState({ energy: 3, energyProgress: 0, energyDecayStartedAt: 0, nextEnergyDecayAt: 0, swapCharge: 6 });
              }
            }
          } catch (e) {}
          try {
            if (lockLevel.on) {
              var g2 = e3.getState();
              if (g2.next !== lockLevel.next) e3.setState({ next: lockLevel.next });
            }
          } catch (e) {}
        }, 120);

        /* ---------- DOM ---------- */
        var btnEl = null;
        var panelEl = null;
        var panelVisible = false;

        var FIELD_MAP = {
          'tt-score': { field: 'score', min: 0, max: 99999 },
          'tt-merge': { field: 'mergeCount', min: 0, max: 99999 },
          'tt-skill': { field: 'skillUseCount', min: 0, max: 9999 },
          'tt-high': { field: 'highScore', min: 0, max: 99999 },
          'tt-energy': { field: 'energy', min: 0, max: 3 },
          'tt-swap': { field: 'swapCharge', min: 0, max: 6 },
          'tt-cur': { field: 'current', min: 1, max: 11 },
          'tt-next': { field: 'next', min: 1, max: 11 }
        };

        function buildLangOptions() {
          return LANGS.map(function (l) {
            return '<option value="' + l.v + '"' + (l.v === currentURLang ? ' selected' : '') + '>' + l.label + '</option>';
          }).join('');
        }
        function buildPanelLangOptions() {
          return [
            '<option value="zh-cn"' + (panelLang === 'zh-cn' ? ' selected' : '') + '>简体中文</option>',
            '<option value="en-us"' + (panelLang === 'en-us' ? ' selected' : '') + '>English</option>'
          ].join('');
        }
        function buildRow(label, id, type, extra) {
          return '<div class="tt-row"><label>' + label + '</label>' +
            '<div class="tt-inline">' +
            '<input id="' + id + '" type="' + (type || 'number') + '"' + (extra ? ' ' + extra : '') + '>' +
            '<button class="tt-mini" data-apply="' + id + '">' + t('apply') + '</button>' +
            '</div></div>';
        }
        function buildPanelHTML() {
          return [
            '<style>',
            '.tt-row{margin-bottom:0.3125em}',
            '.tt-row label{display:block;font-size:0.6875em;color:#666;margin-bottom:0.125em}',
            '.tt-inline{display:flex;gap:0.25em}',
            '.tt-inline input,.tt-inline select{flex:1;min-width:0;padding:0.25em 0.5em;border:1px solid #ccc;border-radius:0.25em;box-sizing:border-box;font-size:0.8125em;background:#fff;font-family:inherit}',
            '.tt-mini{padding:0.25em 0.5em;background:#c2d73b;color:#fff;border:none;border-radius:0.25em;cursor:pointer;font-size:0.72em;font-weight:bold;font-family:inherit;white-space:nowrap;flex-shrink:0}',
            '.tt-btn{padding:0.375em 0.625em;border:none;border-radius:0.375em;cursor:pointer;font-weight:bold;color:#fff;font-size:0.75em;font-family:inherit}',
            '.tt-gap{margin-top:0.5em;margin-bottom:0.5em;height:1px;background:#eee}',
            '.tt-checks{margin-top:0.375em;margin-bottom:0.375em;display:flex;flex-direction:column;gap:0.25em;font-size:0.75em;}',
            '.tt-checks label{display:flex;align-items:center;gap:0.375em;padding:0.3125em;border-radius:0.25em;background:#f7f7f7;cursor:pointer;}',
            '.tt-checks input[type="checkbox"]{width:1em;height:1em;min-width:1em;max-width:1em;margin:0;padding:0;flex-shrink:0;appearance:auto;-webkit-appearance:checkbox;box-sizing:border-box;}',
            '.tt-btnrow{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:0.375em;margin-top:0.375em}',
            '.tt-grid2{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:0.3125em 0.5em}',
            '.tt-grid2 .tt-row{margin-bottom:0}',
            '</style>',

            '<div class="tt-row"><label>' + t('gameLang') + '</label><div class="tt-inline"><select id="tt-lang">' + buildLangOptions() + '</select></div></div>',
            '<div class="tt-row"><label>' + t('panelLang') + '</label><div class="tt-inline"><select id="tt-panel-lang">' + buildPanelLangOptions() + '</select></div></div>',
            '<div class="tt-gap"></div>',

            '<div class="tt-grid2">',
            buildRow(t('score'), 'tt-score'),
            buildRow(t('mergeCount'), 'tt-merge'),
            buildRow(t('skillCount'), 'tt-skill'),
            buildRow(t('highScore'), 'tt-high'),
            buildRow(t('energy'), 'tt-energy', 'number', 'min="0" max="3"'),
            buildRow(t('swapCharge'), 'tt-swap', 'number', 'min="0" max="6"'),
            buildRow(t('curLevel'), 'tt-cur', 'number', 'min="1" max="11"'),
            buildRow(t('nextLevel'), 'tt-next', 'number', 'min="1" max="11"'),
            '</div>',

            '<div class="tt-gap"></div>',

            '<div class="tt-grid2">',
            '<div class="tt-row"><label>' + t('nickname') + '</label><div class="tt-inline"><input id="tt-nick" type="text"><button class="tt-mini" id="tt-apply-nick">' + t('apply') + '</button></div></div>',
            '<div class="tt-row"><label>' + t('uid') + '</label><div class="tt-inline"><input id="tt-uid" type="text"><button class="tt-mini" id="tt-apply-uid">' + t('apply') + '</button></div></div>',
            '<div class="tt-row" style="grid-column:1 / -1"><label>' + t('avatar') + '</label><div class="tt-inline"><input id="tt-avatar" type="text" placeholder="3~53"><button class="tt-mini" id="tt-apply-avatar">' + t('apply') + '</button></div></div>',
            '</div>',

            '<div class="tt-gap"></div>',

            '<div class="tt-checks">',
            '<label><input type="checkbox" id="tt-lock-level"> ' + t('lockNext') + '</label>',
            '<label><input type="checkbox" id="tt-inf-energy"> ' + t('infEnergy') + '</label>',
            '<label><input type="checkbox" id="tt-invincible"> ' + t('invincible') + '</label>',
            '</div>',

            '<div class="tt-btnrow">',
            '<button class="tt-btn" id="tt-golden" style="background:#e6b800;grid-column:1 / -1;">' + t('golden') + '</button>',
            '<button class="tt-btn" id="tt-skip-tutorial" style="background:#4a90e2;">' + t('skipTut') + '</button>',
            '<button class="tt-btn" id="tt-show-tutorial" style="background:#4a90e2;">' + t('showTut') + '</button>',
            '<button class="tt-btn" id="tt-reset-settings" style="background:#e67e22;">' + t('resetSettings') + '</button>',
            '<button class="tt-btn" id="tt-clear-progress" style="background:#c0392b;">' + t('clearAllData') + '</button>',
            '</div>',

            '<div class="tt-gap"></div>',

            '<div class="tt-btnrow">',
            '<button class="tt-btn" id="tt-close" style="background:#888;">' + t('close') + '</button>',
            '<button class="tt-btn" id="tt-hide" style="background:#c0392b;">' + t('remove') + '</button>',
            '</div>'
          ].join('');
        }

        function refresh() {
          if (!panelEl) return;
          var q = function (id) { return document.getElementById(id); };
          if (!q('tt-score')) return;
          var g = e3.getState(), u = ty.getState(), d = tA.getState();
          q('tt-score').value = g.score;
          q('tt-merge').value = g.mergeCount;
          q('tt-skill').value = g.skillUseCount;
          q('tt-high').value = g.highScore;
          q('tt-energy').value = g.energy;
          q('tt-swap').value = g.swapCharge;
          q('tt-cur').value = g.current;
          q('tt-next').value = g.next;
          q('tt-inf-energy').checked = !!d.infiniteEnergy;
          q('tt-lock-level').checked = !!lockLevel.on;
          q('tt-invincible').checked = !!d.invincible;
          var ui = u.userInfo || {};
          q('tt-nick').value = ui.nickname || '';
          q('tt-uid').value = ui.roleId || '';
          q('tt-avatar').value = (ui.avatar === null || ui.avatar === undefined) ? '' : ui.avatar;
        }

        function bindPanelEvents() {
          var q = function (id) { return document.getElementById(id); };

          ['tt-lang', 'tt-panel-lang'].forEach(function (id) {
            var s = q(id);
            if (!s) return;
            var stop = function (e) { e.stopPropagation(); };
            s.addEventListener('mousedown', stop);
            s.addEventListener('pointerdown', stop);
            s.addEventListener('click', stop);
          });

          q('tt-lang').onchange = function () {
            var sel = this;
            var lang = sel.value;
            if (!lang || lang === currentURLang) return;
            void sel.offsetHeight;
            requestAnimationFrame(function () {
              requestAnimationFrame(function () {
                if (!confirm(t('confirmLang'))) {
                  sel.value = currentURLang;
                  return;
                }
                try {
                  var url = new URL(window.location.href);
                  url.searchParams.set('lang', lang);
                  window.location.href = url.toString();
                } catch (e) {
                  window.location.search = '?lang=' + encodeURIComponent(lang);
                }
              });
            });
          };

          q('tt-panel-lang').onchange = function () {
            var lang = this.value;
            if (lang !== 'zh-cn' && lang !== 'en-us') lang = 'en-us';
            panelLang = lang;
            rebuildPanel();
          };

          Array.prototype.forEach.call(panelEl.querySelectorAll('[data-apply]'), function (b) {
            b.onclick = function () {
              var id = b.getAttribute('data-apply');
              var meta = FIELD_MAP[id];
              if (!meta) return;
              var v = parseInt(q(id).value, 10);
              if (!isFinite(v)) v = meta.min;
              v = Math.max(meta.min, Math.min(meta.max, v));
              var patch = {}; patch[meta.field] = v;
              e3.setState(patch);
              q(id).value = v;
              if (id === 'tt-next' && lockLevel.on) { lockLevel.next = v; saveLock(); }
              if (id === 'tt-high') {
                ttTotal.highScore = Math.max(ttTotal.highScore, v);
                saveTT();
                lsSet(HIGHSCORE_KEY, String(v));
                try { if (eF) eF.score = v; } catch (e) {}
              }
              var ih = getIH();
              if (ih && ih.refreshPreview) { try { ih.refreshPreview(); } catch (e) {} }
            };
          });

          q('tt-close').onclick = function () { panelVisible = false; panelEl.style.display = 'none'; };
          q('tt-hide').onclick = function () {
            if (btnEl) btnEl.remove();
            if (panelEl) panelEl.remove();
            btnEl = null; panelEl = null;
          };

          q('tt-apply-nick').onclick = function () {
            var nick = q('tt-nick').value.trim() || t('defaultNickname');
            var old = ty.getState().userInfo || {};
            ty.getState().setUserInfo(Object.assign({}, old, { nickname: nick }));
            syncMockSelf(nick, undefined);
            saveUserInfo();
          };
          q('tt-apply-uid').onclick = function () {
            var uid = q('tt-uid').value.trim() || '10000001';
            var old = ty.getState().userInfo || {};
            ty.getState().setUserInfo(Object.assign({}, old, { roleId: uid, uid: uid }));
            saveUserInfo();
          };
          q('tt-apply-avatar').onclick = function () {
            var s = q('tt-avatar').value.trim();
            var avatar = null;
            if (s !== '') {
              var n = parseInt(s, 10);
              if (isFinite(n) && n >= 3 && n <= 53) avatar = n;
            }
            var old = ty.getState().userInfo || {};
            ty.getState().setUserInfo(Object.assign({}, old, { avatar: avatar }));
            syncMockSelf(undefined, avatar);
            saveUserInfo();
            q('tt-avatar').value = avatar === null ? '' : avatar;
          };

          q('tt-inf-energy').onchange = function () {
            var v = this.checked;
            tA.getState().setInfiniteEnergy(v);
            lsSet(INF_KEY, v ? '1' : '0');
            if (v) {
              e3.setState({ energy: 3, energyProgress: 0, energyDecayStartedAt: 0, nextEnergyDecayAt: 0, swapCharge: 6 });
            }
          };
          q('tt-invincible').onchange = function () {
            var v = this.checked;
            tA.setState({ invincible: v });
            lsSet(INV_KEY, v ? '1' : '0');
          };
          q('tt-lock-level').onchange = function () {
            lockLevel.on = this.checked;
            if (lockLevel.on) {
              var v = Math.max(1, Math.min(11, parseInt(q('tt-next').value, 10) || 1));
              lockLevel.next = v;
            }
            saveLock();
          };

          q('tt-skip-tutorial').onclick = function () {
            setTutorialSkipped(true);
            applyTutorialSkip();
          };
          q('tt-show-tutorial').onclick = function () {
            setTutorialSkipped(false);
            e3.setState({ guideDone: false, paused: true });
            try {
              aO.getState().startTutorial(aw, function () {
                setTutorialSkipped(true);
                e3.setState({ guideDone: true, paused: false });
                var ih = getIH();
                if (ih && ih.dropCurrent) { try { ih.dropCurrent(); } catch (e) {} }
              });
            } catch (e) { console.warn('[TT-Panel] show tutorial', e); }
          };

          q('tt-reset-settings').onclick = function () {
            if (!confirm(t('confirmReset'))) return;
            lsDel(LOCK_KEY);
            lsDel(USER_KEY);
            lsDel(INF_KEY);
            lsDel(INV_KEY);
            lsDel(HIGHSCORE_KEY);
            location.reload();
          };

          q('tt-clear-progress').onclick = function () {
            if (!confirm(t('confirmClear'))) return;
            try { localStorage.clear(); } catch (e) {}
            try { sessionStorage.clear(); } catch (e) {}
            location.reload();
          };

          q('tt-golden').onclick = function () {
            e3.setState({ unlockedMax: 11, maxLevelThisRun: Math.max(e3.getState().maxLevelThisRun, 11) });
            refresh();
          };
        }

        function rebuildPanel() {
          if (!panelEl) return;
          var wasVisible = panelVisible;
          panelEl.innerHTML = buildPanelHTML();
          panelEl.style.display = wasVisible ? 'block' : 'none';
          applyFontsToDom();
          bindPanelEvents();
          if (wasVisible) refresh();
          if (btnEl) btnEl.innerText = t('openBtn');
        }

        /* ---------- 初始构建 ---------- */
        btnEl = document.createElement('div');
        btnEl.innerText = t('openBtn');
        btnEl.style.cssText = 'position:fixed;top:0.325rem;right:0.325rem;z-index:100001;background:#ffb347;color:#fff;border-radius:0.325rem;padding:0.25rem 0.5rem;font-size:0.528rem;font-weight:bold;cursor:pointer;box-shadow:0 0.1625rem 0.4875rem rgba(0,0,0,.35);user-select:none;';
        document.body.appendChild(btnEl);

        panelEl = document.createElement('div');
        panelEl.style.cssText = 'display:none;position:fixed;top:1.87rem;right:0.325rem;z-index:100002;background:#fff;border-radius:0.4875rem;padding:0.56875rem;width:20.7em;max-height:80vh;overflow-y:auto;box-shadow:0 0.325rem 0.975rem rgba(0,0,0,.35);color:#333;font-size:0.65rem;';
        panelEl.innerHTML = buildPanelHTML();
        document.body.appendChild(panelEl);
        applyFontsToDom();
        bindPanelEvents();

        btnEl.onclick = function () {
          if (!panelEl) return;
          if (panelEl.style.display === 'none') {
            panelEl.style.display = 'block';
            panelVisible = true;
            refresh();
          } else {
            panelEl.style.display = 'none';
            panelVisible = false;
          }
        };
      } catch (err) {
        console.error('[TT-Panel] init failed', err);
      }
    }
  };
})();