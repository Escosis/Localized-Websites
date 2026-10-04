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
      (e._sentryDebugIds[t] = "c5abb622-0751-44d6-957a-d6c000c6fe5c"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-c5abb622-0751-44d6-957a-d6c000c6fe5c"));
  } catch (e) {}
})();
("use strict");
(self.webpackChunkv1d5_synthesize_tuantuan_web =
  self.webpackChunkv1d5_synthesize_tuantuan_web || []).push([
  ["675"],
  {
    47657: function (e, t, s) {
      e.exports = s.p + "assets/imgs/logo-h.b667c9.svg";
    },
    2098: function (e, t, s) {
      e.exports = s.p + "assets/imgs/logo.c49d72.svg";
    },
    22950: function (e, t, s) {
      s.r(t),
        s.d(t, {
          locale: function () {
            return a;
          },
        });
      var r = s(61402),
        i = JSON.parse(
          '{"biz":{"meta":{"title":"융합! 버블!","keywords":"","description":""},"common":{"return":""},"account":{"login":"","switch_role":"","logout":"","confirm_logout":""},"msg":{"server_error":"","claim_failed":"보상 획득 실패, 잠시 후 다시 시도해 주세요.","image_save_unsupported":"현재 게임 환경에서는 이미지를 로컬에 저장할 수 없습니다. 스크린샷을 찍거나 다른 기기를 이용해 주세요."},"scene_loading":{"connecting":"","loading":"로딩 중..."},"scene_main":{"title":"","greeting":"","not_logged_in":"","go_extra":""},"scene_extra":{"title":"","desc":""},"scene_carousel":{"title":"","open_game":"","enter_activity":""},"game":{"score":"Score","merge_count":"Merges","high_score":"Best","back":"Back","next":"Next","collection":"Guide","toolbar":"Items","cost":"AP-{{n}}","golden_toast":"Merged the Golden Tuan!","exit_title":"Exit","exit_content":"Quit this run? Progress will be lost.","loading":"Loading...","skill":{"clear":"Pop","wind":"Blow","shake":"Shake","swap":"Swap"},"result":{"this_score":"Score","merge_times":"Merges","skill_times":"Skills","new_best":"New Best!","replay":"Play Again","share":"Share","win_title":"Golden Tuan Merged!","over_title":"Game Over"},"leaderboard":{"title":"Leaderboard","empty":"No ranking yet","loading":"Loading…"},"rules":{"title":"Rules","time_title":"Event Period","time_desc":"2026/06/01 12:00 (Server Time) – 2026/06/10 06:00 (UTC+8)","rule_title":"Event Rules","item_basic":"Basics: Tap above the playfield to drop fruit. Matching fruits merge into a larger one.","item_score":"Scoring: Larger fruits award more points. The goal is to create the “Watermelon.”","item_over":"Game Over: When the stack touches the red warning line, the run ends and the score is settled.","item_reward":"Rewards:","item_reward_1":"During the event, rankings use each player’s highest single-run score.","item_reward_2":"After the event, the top 10 players receive exclusive rewards (delivered within 3 business days)."},"reward":{"title":"Rewards","claim":"Claim","claimed":"Claimed","cond":"Reach {{n}} pts","tier1":"Starter","tier2":"Advanced","tier3":"Master"},"share":{"title":"Share","copy":"Copy Link","save":"Save Result","copied":"Link copied","copy_failed":"Copy failed","saved":"Image saved"},"settings":{"title":"Settings","sound":"Sound","rules":"Rules","view":"View"},"guide":{"s1_title":"Drag & Drop","s1_text":"Drag the tuan on top to aim, release to drop","s2_title":"Merge Same","s2_text":"Two identical tuans merge into a higher one","s3_title":"Use Skills","s3_text":"Charge AP by merging, then cast skills","next":"Next","start":"Start"}},"scene_game":{"score":"점수","merge_count":"합체 횟수","high_score":"최고 점수","back":"돌아가기","next":"다음","collection":"융합 도감","toolbar":"배틀 스킬 슬롯","cost":"스킬 게이지-{{n}}","cost_progress":"스킬 게이지 소모 {{n}}/{{m}}","golden_toast":"황금 관리자를 찾았어요!","restart_game":"한 번 더","submit_game":"종료하기","skill":{"clear":"포기","wind":"프로토콜 \xb7 부유","shake":"흔들기!","swap":"운명 체인지"},"skill_desc":{"clear":"버려야 할 땐 단호히!","wind":"제강호, 끝내버려!","shake":"이거 받아!","swap":"모든 건 운명의 인도에 맡기리라!"},"skill_tip":{"clear":"없애고 싶은 버블을 눌러 선택하세요","wind":"아무 곳이나 눌러 버블을 띄워 보세요","shake":"아무 곳이나 눌러 흔들어 보세요","swap":"두 버블을 선택해 위치를 바꿔 보세요"},"energy_insufficient":"스킬 게이지 부족"},"modal_confirm":{"exit_title":"종료하시겠습니까?","exit_content":"현재 게임이 진행 중입니다. 종료 시 이번 점수와 진행도가 즉시 결산됩니다.","go_to_complete_title":"완료하기","go_to_complete_desc":"해당 임무를 완료하려면 새 게임을 시작해야 합니다. 지금 시작하시겠습니까?","confirm_exit_title":"종료하시겠습니까?","confirm_exit_desc":"해당 이벤트에서 나가시겠습니까?","confirm_restart_title":"다시 시작하시겠습니까?","confirm_restart_desc":"현재 게임이 진행 중입니다. 이번 점수와 진행도가 즉시 결산되며, 새로운 게임이 시작됩니다.","confirm_submit_title":"결산을 진행하시겠습니까?","confirm_submit_desc":"현재 게임이 진행 중입니다. 지금 종료하면 이번 점수와 진행도가 즉시 결산됩니다.","share_confirm_submit_desc":"포스터를 생성하려면 현재 게임을 종료해야 합니다. 현재 점수로 결산하시겠습니까?"},"scene_result":{"this_score":"이번 점수","max_synth":"이번 최고 합체 기록","skill_times":"스킬 사용 횟수","replay":"한 번 더","share":"점수 공유","win_title":"황금 관리자를 찾았어요!","over_title":"게임 종료"},"modal_leaderboard":{"pause_desc":"일시 정지","continue":"계속하기","title":"랭킹","empty":"랭킹 없음"},"modal_rule":{"title":"이벤트 규칙","time_title":"이벤트 기간","time_desc":"2026/06/01 12:00(서버 시간) ~ 2026/06/10 06:00(UTC+8)","join_title":"참여 조건","join_desc":"이벤트 센터 잠금 해제 후","play_title":"이벤트 규칙","play_desc":"같은 버블을 융합시켜 더 큰 버블을 만들어 포인트를 획득하면, 다양한 보상을 수령할 수 있습니다.","notice_title":"이벤트 유의 사항","notice_1":"이벤트 기간에는 관리자님께서 기록한 최고 점수를 기준으로 랭킹이 집계되며, 상위 25명까지 표시됩니다.","notice_2":"임무를 완료하고 보상을 수령한 후, 보상은 게임 내 메일을 통해 지급됩니다. 메일 유효 기간은 30일이니 제때 수령해 주세요.","play_desc_2":"버블을 융합하면 스킬 게이지를 획득하며, 이를 소모해 배틀 스킬을 사용할 수 있습니다. 배틀 스킬을 적절히 활용해 위기를 넘겨보세요!"},"modal_reward":{"title":"임무 보상","go":"완료하기","claim":"획득하기","claimed":"획득 완료","claim_all":"일괄 획득","completed_toast":"보상을 이미 획득했습니다.","claim_title":"획득 성공","claim_continue":"눌러 계속하기","claim_accept":"받기","mail_sent":"게임 내 메일함으로 발송되었습니다.","task":{"merge":"버블 {{target}}회 합체","skill":"배틀 스킬 {{target}}회 사용","high_score":"최고 점수 {{target}}점 달성","share":"{{target}}회 공유","golden_admin":"황금 관리자 {{target}}회 합체"}},"modal_share":{"prompt":"이벤트 참여 시, <br>오로베릴<br> 등 보상 획득","title":"점수 공유","save":"기록 저장"},"guide":{"s1_title":"융합하면 사이즈 UP!","s1_text":"버블을 쌓아보세요. 같은 버블 두 개가 붙으면 더 큰 버블로 합쳐집니다.","s2_title":"황금 관리자 찾기","s2_text":"총 11종의 버블이 있습니다. 도감을 참고해 황금 관리자를 찾아보세요.","s3_title":"경고선 주의!","s3_text":"공간을 잘 활용해 버블을 쌓아보세요. 경계선을 3초 이상 넘으면 게임이 종료됩니다.","s4_title":"배틀 스킬 활용","s4_text":"버블을 합체하면 스킬 게이지를 획득해 배틀 스킬을 사용할 수 있습니다. 배틀 스킬을 적절히 활용해 위기를 넘겨보세요!","s5_title":"버블을 떨어뜨리기","s5_text":"화면을 누르면 첫 번째 버블이 떨어집니다! 게임을 시작해 보세요!","next":"다음","start":"게임 시작"},"npc":{"npc_01":"아케쿠리","npc_02":"에스텔라","npc_03":"플루라이트","npc_04":"푸치나","npc_05":"티프로스"}},"general":{"common":{"copy":"복사","copy_url":"링크 복사","paste":"붙여넣기","share":"공유","close":"닫기","confirm":"확인","cancel":"취소","tap_blank_to_close":"빈 곳을 눌러 닫기","long_tap_to_save":"길게 눌러 이미지 저장","click_to_save":"눌러 이미지 저장","return_to_homepage":"메인 화면으로 돌아가기","msg":{"loading":"로딩 중","network_error":"네트워크 비정상","copy_success":"복사 성공","copy_failed":"복사 실패","url_copy_success":"링크 복사 성공","url_copy_failed":"링크 복사 실패","share_success":"공유 성공","share_failed":"공유 실패","auth_failed":"로그인 실패","params_error":"파라미터 오류","network_issue":"네트워크 불안정, 잠시 후 다시 시도해 주세요.","auth_expired":"로그인 상태 만료, 다시 로그인해 주세요.","request_too_fast":"조작이 너무 잦습니다. 잠시 후 다시 시도해 주세요.","char_error":"현재 게임 캐릭터에 오류가 발생했습니다.","account_error":"현재 통합 계정에 오류가 발생했습니다.","char_error_retry":"캐릭터 정보 오류, 잠시 후 다시 시도해 주세요.","network_error_retry":"네트워크 오류, 새로고침 후 다시 시도해 주세요."}},"activity":{"act_ended":"이벤트 종료","act_not_start":"이벤트 시작 전","msg":{"image_saved":"{{path}}에 이미지 저장 완료"}},"gamepad":{"keyhint":{"confirm":"확인","close":"닫기","close_current_page":"현재 페이지 닫기","exit_page":"페이지에서 나가기","claim_all":"일괄 획득","go_to_complete":"완료하기","claim":"획득하기","move":"이동하기","scroll":"스크롤하기","continue":"계속하기","back":"돌아가기","next":"다음","drop":"떨어뜨리기"}},"reward":{"claim_success":"획득 성공!"}}}'
        ),
        a = {
          lang: r.ELanguage["ko-kr"],
          text: i,
          fonts: {},
          logoH: s(47657),
          logo: s(2098),
        };
    },
  },
]);
