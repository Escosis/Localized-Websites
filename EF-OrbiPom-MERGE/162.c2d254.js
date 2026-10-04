/*! Copyright (C) 2017 - 2026 HYPERGRYPH. All rights reserved. */
!(function () {
  try {
    var e =
      "u" > typeof window
        ? window
        : "u" > typeof global
        ? global
        : "u" > typeof globalThis
        ? globalThis
        : "u" > typeof self
        ? self
        : {};
    e.SENTRY_RELEASE = { id: "v1d5-synthesize-tuantuan-web@1.1.2" };
    var t = new e.Error().stack;
    t &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[t] = "6c8b032c-4dd4-4163-b0fe-6003fce1f14d"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-6c8b032c-4dd4-4163-b0fe-6003fce1f14d"));
  } catch (e) {}
})();
("use strict");
(self.webpackChunkv1d5_synthesize_tuantuan_web =
  self.webpackChunkv1d5_synthesize_tuantuan_web || []).push([
  ["162"],
  {
    38469: function (e, t, s) {
      e.exports = s.p + "assets/imgs/logo-h.223519.svg";
    },
    23718: function (e, t, s) {
      e.exports = s.p + "assets/imgs/logo.39da19.svg";
    },
    19489: function (e, t, s) {
      s.r(t),
        s.d(t, {
          locale: function () {
            return r;
          },
        });
      var i = s(61402),
        _ = JSON.parse(
          '{"biz":{"meta":{"title":"融合！山團團！","keywords":"","description":""},"common":{"return":""},"account":{"login":"","switch_role":"","logout":"","confirm_logout":""},"msg":{"server_error":"","claim_failed":"領取獎勵失敗，請稍後再試","image_save_unsupported":"目前無法將圖片儲存至本機，請截圖或更換其他裝置"},"scene_loading":{"connecting":"","loading":"載入中…"},"scene_main":{"title":"","greeting":"","not_logged_in":"","go_extra":""},"scene_extra":{"title":"","desc":""},"scene_carousel":{"title":"","open_game":"","enter_activity":""},"game":{"score":"得分","merge_count":"合成次数","high_score":"最高分","back":"返回","next":"下一个","collection":"合成图鉴","toolbar":"道具栏","cost":"技力-{{n}}","golden_toast":"合成成功\xb7黄金山团团！","exit_title":"退出","exit_content":"确定退出本局吗？当前进度将不保留。","loading":"加载中...","skill":{"clear":"点选消除","wind":"吹风","shake":"摇曳","swap":"交换"},"result":{"this_score":"本局得分","merge_times":"合成次数","skill_times":"技能释放","new_best":"新纪录!","replay":"再来一局","share":"分享战绩","win_title":"合成黄金山团团啦！","over_title":"本局结束"},"leaderboard":{"title":"排行榜","empty":"暂无排名","loading":"加载中…"},"rules":{"title":"活动规则","time_title":"活動時間","time_desc":"2026/06/01 12:00（伺服器時間）至 2026/06/10 06:00 （UTC+8）","rule_title":"活動規則","item_basic":"基礎玩法：點擊螢幕上方任意位置，控制水果下落。兩個相同體積/種類的水果相觸碰，即可合成一個更大的高階水果。","item_score":"積分結算：合成的水果體積越大，單次獲得的積分越高。終極目標為合成「大西瓜」。","item_over":"遊戲結束：當螢幕內的水果堆積高度觸碰到頂部的「警戒紅線」時，遊戲結束，系統將結算本次挑戰的總積分。","item_reward":"獎勵發放：","item_reward_1":"活動期間，系統將根據用戶的【單次最高歷史積分】進行排行榜排名。","item_reward_2":"活動結束後，排行榜前 10 名的用戶將獲得專屬大獎（獎品將在活動結束後 3 個工作日內發放至帳戶）。"},"reward":{"title":"任务奖励","claim":"点击领取","claimed":"已领取","cond":"达成 {{n}} 分","tier1":"入门奖励","tier2":"进阶奖励","tier3":"大师奖励"},"share":{"title":"分享战绩","copy":"复制链接","save":"保存战绩","copied":"链接已复制","copy_failed":"复制失败","saved":"已生成分享图"},"settings":{"title":"设置","sound":"音乐 / 音效","rules":"活动规则","view":"查看"},"guide":{"s1_title":"拖动投放","s1_text":"拖动顶部团团选择落点，松手即可投放","s2_title":"相同合成","s2_text":"两个相同的团团相撞，会合成为更高一级","s3_title":"技能助力","s3_text":"合成累积技力，释放技能扭转局势","next":"下一步","start":"开始游戏"}},"scene_game":{"score":"得分","merge_count":"合成次數","high_score":"最高分","back":"返回","next":"下一個","collection":"融合圖鑑","toolbar":"戰技欄","cost":"技力-{{n}}","cost_progress":"累計技力消耗 {{n}}/{{m}}","golden_toast":"找到黃金管理員啦！","restart_game":"重開一局","submit_game":"結算本局","skill":{"clear":"捨棄","wind":"協議\xb7浮動","shake":"搖晃！","swap":"命定互換"},"skill_desc":{"clear":"當棄即棄！","wind":"帝江號，清空區域！","shake":"我來了！","swap":"將一切交予命運指引！"},"skill_tip":{"clear":"點擊選擇想要清除的山團團","wind":"點擊任意處吹起山團團","shake":"點擊任意處開始搖晃","swap":"任選兩個山團團交換位置"},"energy_insufficient":"技力不足"},"modal_confirm":{"exit_title":"確定退出？","exit_content":"目前對局正在進行中，退出將直接結算本局所有得分與進度。","go_to_complete_title":"前往完成","go_to_complete_desc":"完成該任務需要開啟新一輪遊戲。是否立即開始？","confirm_exit_title":"確定退出？","confirm_exit_desc":"是否退出目前活動？","confirm_restart_title":"確定重新開始？","confirm_restart_desc":"目前對局正在進行中，即將直接結算本局得分和進度並重新開始。","confirm_submit_title":"確定結算？","confirm_submit_desc":"目前對局正在進行中，提前結算將直接結算本局所有得分與進度。","share_confirm_submit_desc":"需先結束本局遊戲，才能生成海報分享。是否以目前得分進行結算？"},"scene_result":{"this_score":"本局得分","max_synth":"本局最大合成","skill_times":"技能釋放次數","replay":"再來一局","share":"分享得分","win_title":"找到黃金管理員啦！","over_title":"本局結束"},"modal_leaderboard":{"pause_desc":"遊戲暫停","continue":"繼續","title":"排行榜","empty":"尚無排名"},"modal_rule":{"title":"活動規則","time_title":"活動時間","time_desc":"2026/06/01 12:00（伺服器時間） ~ 2026/06/10 06:00 (UTC+8)","join_title":"參與條件","join_desc":"活動中心解鎖後","play_title":"活動規則","play_desc":"管理員透過融合相同的山團團，找到更大的山團團並獲得積分，領取豐厚獎勵。","notice_title":"活動注意事項","notice_1":"活動期間，系統將根據管理員過往遊玩過程中的歷史最高分與好友們進行排名，前25名會在排行榜上展示。","notice_2":"完成任務並領取獎勵後，獎勵將透過遊戲內信件發放。信件有效期限為30天，請及時領取。","play_desc_2":"融合山團團時，管理員將獲得技力，消耗技力可以釋放戰技。在場面混亂的時候，記得靈活使用戰技改變局面！"},"modal_reward":{"title":"任務獎勵","go":"去完成","claim":"領取","claimed":"已領取","claim_all":"快速領取","completed_toast":"獎勵已經領取過了","claim_title":"領取成功","claim_continue":"點擊繼續","claim_accept":"收下","mail_sent":"已發送至遊戲內信箱","task":{"merge":"合成山團團{{target}}次","skill":"施放戰技{{target}}次","high_score":"歷史最高分達到{{target}}分","share":"完成分享{{target}}次","golden_admin":"合成黃金管理員{{target}}次"}},"modal_share":{"prompt":"參與活動，獲得<br>嵌晶玉<br>等獎勵","title":"分享得分","save":"儲存戰績"},"guide":{"s1_title":"融合！變大！","s1_text":"堆疊山團團。兩個相同的山團團靠在一起會融合成更大的山團團。","s2_title":"尋找黃金管理員","s2_text":"共有11個不同的山團團。參考圖鑑，尋找黃金管理員。","s3_title":"小心警戒線！","s3_text":"合理規劃堆疊空間，超過警戒線3秒則遊戲結束。","s4_title":"運用戰技","s4_text":"透過融合獲得技力可以釋放戰技。在場面混亂的時候，記得靈活使用戰技改變局面！","s5_title":"投出山團團","s5_text":"點擊螢幕就能投出第一個山團團啦！開始遊戲吧！","next":"下一步","start":"開始遊戲"},"npc":{"npc_01":"秋栗","npc_02":"埃特拉","npc_03":"螢石","npc_04":"噗切娜","npc_05":"提弗洛斯"}},"general":{"common":{"copy":"複製","copy_url":"複製連結","paste":"貼上","share":"分享","close":"關閉","confirm":"確定","cancel":"取消","tap_blank_to_close":"點擊空白處關閉","long_tap_to_save":"長按儲存圖片","click_to_save":"點擊儲存圖片","return_to_homepage":"返回首頁","msg":{"loading":"載入中","network_error":"網路異常","copy_success":"複製成功","copy_failed":"複製失敗","url_copy_success":"複製連結成功","url_copy_failed":"複製連結失敗","share_success":"分享成功","share_failed":"分享失敗","auth_failed":"登入失敗","params_error":"參數錯誤","network_issue":"網路不穩定，請稍後再試~","auth_expired":"登入失效，請重新登入","request_too_fast":"操作頻繁，請稍後再試","char_error":"目前的遊戲角色異常","account_error":"目前的通行證異常","char_error_retry":"角色資訊異常，請稍後再試","network_error_retry":"目前網路異常，請重新整理"}},"activity":{"act_ended":"活動已結束","act_not_start":"活動未開始","msg":{"image_saved":"圖片已儲存{{path}}"}},"gamepad":{"keyhint":{"confirm":"確定","close":"關閉","close_current_page":"關閉目前頁面","exit_page":"退出網頁","claim_all":"快速領取","go_to_complete":"去完成","claim":"領取","move":"位移","scroll":"滾動","continue":"繼續","back":"返回","next":"下一步","drop":"落下"}},"reward":{"claim_success":"領取成功！"}}}'
        ),
        r = {
          lang: i.ELanguage["zh-tw"],
          text: _,
          fonts: {},
          logoH: s(38469),
          logo: s(23718),
        };
    },
  },
]);
