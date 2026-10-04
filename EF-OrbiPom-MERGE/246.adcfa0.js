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
      (e._sentryDebugIds[t] = "a16fdef3-f75c-4924-8c12-1bcceab798d0"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-a16fdef3-f75c-4924-8c12-1bcceab798d0"));
  } catch (e) {}
})();
("use strict");
(self.webpackChunkv1d5_synthesize_tuantuan_web =
  self.webpackChunkv1d5_synthesize_tuantuan_web || []).push([
  ["246"],
  {
    97763: function (e, t, s) {
      e.exports = s.p + "assets/imgs/logo-h.f64eda.svg";
    },
    60532: function (e, t, s) {
      e.exports = s.p + "assets/imgs/logo.848039.svg";
    },
    81725: function (e, t, s) {
      s.r(t),
        s.d(t, {
          locale: function () {
            return a;
          },
        });
      var i = s(61402),
        r = JSON.parse(
          '{"biz":{"meta":{"title":"バブル、合体！","keywords":"","description":""},"common":{"return":""},"account":{"login":"","switch_role":"","logout":"","confirm_logout":""},"msg":{"server_error":"","claim_failed":"報酬を受け取れませんでした。しばらくしてからもう一度お試しください","image_save_unsupported":"現在のご利用環境では、画像を端末に保存できません。スクリーンショットを撮るか、別の端末でお試しください。"},"scene_loading":{"connecting":"","loading":"読み込み中…"},"scene_main":{"title":"","greeting":"","not_logged_in":"","go_extra":""},"scene_extra":{"title":"","desc":""},"scene_carousel":{"title":"","open_game":"","enter_activity":""},"game":{"score":"Score","merge_count":"Merges","high_score":"Best","back":"Back","next":"Next","collection":"Guide","toolbar":"Items","cost":"AP-{{n}}","golden_toast":"Merged the Golden Tuan!","exit_title":"Exit","exit_content":"Quit this run? Progress will be lost.","loading":"Loading...","skill":{"clear":"Pop","wind":"Blow","shake":"Shake","swap":"Swap"},"result":{"this_score":"Score","merge_times":"Merges","skill_times":"Skills","new_best":"New Best!","replay":"Play Again","share":"Share","win_title":"Golden Tuan Merged!","over_title":"Game Over"},"leaderboard":{"title":"Leaderboard","empty":"No ranking yet","loading":"Loading…"},"rules":{"title":"Rules","time_title":"Event Period","time_desc":"2026/06/01 12:00 (Server Time) – 2026/06/10 06:00 (UTC+8)","rule_title":"Event Rules","item_basic":"Basics: Tap above the playfield to drop fruit. Matching fruits merge into a larger one.","item_score":"Scoring: Larger fruits award more points. The goal is to create the “Watermelon.”","item_over":"Game Over: When the stack touches the red warning line, the run ends and the score is settled.","item_reward":"Rewards:","item_reward_1":"During the event, rankings use each player’s highest single-run score.","item_reward_2":"After the event, the top 10 players receive exclusive rewards (delivered within 3 business days)."},"reward":{"title":"Rewards","claim":"Claim","claimed":"Claimed","cond":"Reach {{n}} pts","tier1":"Starter","tier2":"Advanced","tier3":"Master"},"share":{"title":"Share","copy":"Copy Link","save":"Save Result","copied":"Link copied","copy_failed":"Copy failed","saved":"Image saved"},"settings":{"title":"Settings","sound":"Sound","rules":"Rules","view":"View"},"guide":{"s1_title":"Drag & Drop","s1_text":"Drag the tuan on top to aim, release to drop","s2_title":"Merge Same","s2_text":"Two identical tuans merge into a higher one","s3_title":"Use Skills","s3_text":"Charge AP by merging, then cast skills","next":"Next","start":"Start"}},"scene_game":{"score":"スコア","merge_count":"合体回数","high_score":"最高スコア","back":"戻る","next":"次へ","collection":"合体図鑑","toolbar":"戦技バー","cost":"SP-{{n}}","cost_progress":"累計SP消費 {{n}}/{{m}}","golden_toast":"黄金の管理人を見つけた！","restart_game":"やり直す","submit_game":"終了","skill":{"clear":"破棄","wind":"協約：浮遊","shake":"シェイク！","swap":"運命転位"},"skill_desc":{"clear":"当棄即棄！","wind":"帝江号、全域一掃！","shake":"任せてくださ～い！","swap":"すべてを運命にゆだねる。"},"skill_tip":{"clear":"消したいバブルを選択してください","wind":"押してバブルを吹き上げる","shake":"押して揺らす","swap":"2つのバブルを選択して入れ替える"},"energy_insufficient":"SP不足"},"modal_confirm":{"exit_title":"退出しますか？","exit_content":"ゲームは進行中です。退出すると、今回のスコアと進捗が確定します。","go_to_complete_title":"挑戦へ","go_to_complete_desc":"クエストを達成するには、新しいゲームを開始する必要があります。今すぐ開始しますか？","confirm_exit_title":"退出しますか？","confirm_exit_desc":"イベントを退出しますか？","confirm_restart_title":"最初からやり直しますか？","confirm_restart_desc":"ゲームは進行中です。今回のスコアと進捗を確定して、最初からやり直します。","confirm_submit_title":"終了して結果を確認しますか？","confirm_submit_desc":"ゲームは進行中です。終了して結果を確認すると、今回のスコアと進捗が確定します。","share_confirm_submit_desc":"シェア画像を作成するには、先に今回のゲームを終了する必要があります。現在のスコアを確定して終了しますか？"},"scene_result":{"this_score":"今回のスコア","max_synth":"今回の最高合体","skill_times":"戦技発動回数","replay":"もう一度","share":"スコアをシェア","win_title":"黄金の管理人を見つけた！","over_title":"ゲーム終了"},"modal_leaderboard":{"pause_desc":"一時停止","continue":"再開","title":"ランキング","empty":"ランキングはありません"},"modal_rule":{"title":"ルール","time_title":"開催期間","time_desc":"2026/06/01 12:00（サーバー時間）～2026/06/10 06:00（UTC+8）","join_title":"参加条件","join_desc":"イベント機能解放済み","play_title":"ルール","play_desc":"同じバブルを合体させてより大きなバブルを作り、スコアを獲得することで、豪華報酬を受け取れます。","notice_title":"注意事項","notice_1":"イベント期間中、これまでのプレイで記録した最高スコアをもとに、フレンド間の順位が決まります。上位25名がランキングに表示されます。","notice_2":"クエストを完了して受け取った報酬は、ゲーム内メールで配布されます。メールの有効期間は30日間ですので、忘れずにお受け取りください。","play_desc_2":"バブルを合体させるとSPを獲得します。SPを消費することで、\\n戦技を発動できます。盤面がごちゃごちゃしてきたら、戦技をうまく使ってピンチを切り抜けましょう！"},"modal_reward":{"title":"クエスト報酬","go":"挑戦","claim":"受け取る","claimed":"受取済み","claim_all":"一括受取","completed_toast":"報酬はすでに受け取っています","claim_title":"受け取り完了","claim_continue":"押して続ける","claim_accept":"受け取る","mail_sent":"ゲーム内メールに送付しました","task":{"merge":"バブルを{{target}}回合体させる","skill":"戦技を{{target}}回発動する","high_score":"最高スコアが{{target}}に達する","share":"{{target}}回シェアする","golden_admin":"黄金の管理人を{{target}}回合体させる"}},"modal_share":{"prompt":"イベントに参加して<br>赤晶玉<br>などの報酬をゲット","title":"スコアをシェア","save":"結果を保存"},"guide":{"s1_title":"合体！もっと大きく！","s1_text":"バブルを積み上げましょう。同じバブル同士がくっつくと、ひと回り大きなバブルに合体します。","s2_title":"黄金の管理人を探そう","s2_text":"バブルは全部で11種類。図鑑を参考に、黄金の管理人を見つけましょう。","s3_title":"警戒ラインに注意！","s3_text":"積み方を工夫してスペースを有効に使いましょう。警戒ラインを超えた状態が3秒続くと、ゲーム終了となります。","s4_title":"戦技を活用しよう","s4_text":"バブルを合体させてSPを獲得すると、戦技を発動できます。盤面がごちゃごちゃしてきたら、戦技をうまく使ってピンチを切り抜けましょう！","s5_title":"バブルを落とそう","s5_text":"画面を押すと、最初のバブルを落とせます！さっそくゲームを始めましょう！","next":"次へ","start":"スタート"},"npc":{"npc_01":"アケクリ","npc_02":"エステーラ","npc_03":"フローライト","npc_04":"プチエナ","npc_05":"ティフォロス"}},"general":{"common":{"copy":"コピー","copy_url":"URLをコピー","paste":"貼り付け","share":"シェア","close":"閉じる","confirm":"確定","cancel":"キャンセル","tap_blank_to_close":"画面を押して閉じる","long_tap_to_save":"画像を長押しで保存","click_to_save":"画像を押して保存","return_to_homepage":"トップに戻る","msg":{"loading":"読み込み中","network_error":"ネットワークエラー","copy_success":"コピーしました","copy_failed":"コピーに失敗しました","url_copy_success":"URLをコピーしました","url_copy_failed":"URLのコピーに失敗しました","share_success":"シェアしました","share_failed":"シェアに失敗しました","auth_failed":"ログインに失敗しました","params_error":"パラメーターエラー","network_issue":"ネットワーク接続が不安定です。しばらくしてからもう一度お試しください","auth_expired":"ログインの有効期限が切れました。再度ログインしてください","request_too_fast":"操作が頻繁に行われています。しばらくしてからもう一度お試しください","char_error":"ゲームデータに異常があります","account_error":"Gryphlineアカウントに異常があります","char_error_retry":"ゲームデータに異常があります。しばらくしてからもう一度お試しください","network_error_retry":"ネットワークエラーです。ページを更新してからもう一度お試しください"}},"activity":{"act_ended":"イベントは終了しました","act_not_start":"イベントはまだ開始していません","msg":{"image_saved":"画像を保存しました{{path}}"}},"gamepad":{"keyhint":{"confirm":"確定","close":"閉じる","close_current_page":"この画面を閉じる","exit_page":"ページを閉じる","claim_all":"一括受取","go_to_complete":"挑戦","claim":"受け取る","move":"移動","scroll":"スクロール","continue":"再開","back":"戻る","next":"次へ","drop":"落とす"}},"reward":{"claim_success":"受け取りました"}}}'
        ),
        a = {
          lang: i.ELanguage["ja-jp"],
          text: r,
          fonts: {},
          logoH: s(97763),
          logo: s(60532),
        };
    },
  },
]);
