/*! Copyright (C) 2017 - 2026 HYPERGRYPH. All rights reserved. */
!(function () {
  try {
    var a =
      "u" > typeof window
        ? window
        : "u" > typeof global
        ? global
        : "u" > typeof globalThis
        ? globalThis
        : "u" > typeof self
        ? self
        : {};
    a.SENTRY_RELEASE = { id: "v1d5-synthesize-tuantuan-web@1.1.2" };
    var e = new a.Error().stack;
    e &&
      ((a._sentryDebugIds = a._sentryDebugIds || {}),
      (a._sentryDebugIds[e] = "37d000d8-b1c2-4845-9833-aa6e64536c0a"),
      (a._sentryDebugIdIdentifier =
        "sentry-dbid-37d000d8-b1c2-4845-9833-aa6e64536c0a"));
  } catch (a) {}
})();
("use strict");
(self.webpackChunkv1d5_synthesize_tuantuan_web =
  self.webpackChunkv1d5_synthesize_tuantuan_web || []).push([
  ["325"],
  {
    17403: function (a, e, i) {
      a.exports = i.p + "assets/imgs/logo-h.ee2a87.svg";
    },
    55276: function (a, e, i) {
      a.exports = i.p + "assets/imgs/logo.58540a.svg";
    },
    7156: function (a, e, i) {
      i.r(e),
        i.d(e, {
          locale: function () {
            return r;
          },
        });
      var n = i(61402),
        t = JSON.parse(
          '{"biz":{"meta":{"title":"OrbiPom! MERGE!","keywords":"","description":""},"common":{"return":""},"account":{"login":"","switch_role":"","logout":"","confirm_logout":""},"msg":{"server_error":"","claim_failed":"Gagal mengambil imbalan. Coba lagi nanti.","image_save_unsupported":"Gambar tidak bisa disimpan ke perangkatmu di lingkungan game saat ini. Ambil cuplikan layar atau gunakan perangkat lain."},"scene_loading":{"connecting":"","loading":"Memuat ..."},"scene_main":{"title":"","greeting":"","not_logged_in":"","go_extra":""},"scene_extra":{"title":"","desc":""},"scene_carousel":{"title":"","open_game":"","enter_activity":""},"game":{"score":"Score","merge_count":"Merges","high_score":"Best","back":"Back","next":"Next","collection":"Guide","toolbar":"Items","cost":"AP-{{n}}","golden_toast":"Merged the Golden Tuan!","exit_title":"Exit","exit_content":"Quit this run? Progress will be lost.","loading":"Loading...","skill":{"clear":"Pop","wind":"Blow","shake":"Shake","swap":"Swap"},"result":{"this_score":"Score","merge_times":"Merges","skill_times":"Skills","new_best":"New Best!","replay":"Play Again","share":"Share","win_title":"Golden Tuan Merged!","over_title":"Game Over"},"leaderboard":{"title":"Leaderboard","empty":"No ranking yet","loading":"Loading…"},"rules":{"title":"Rules","time_title":"Event Period","time_desc":"2026/06/01 12:00 (Server Time) – 2026/06/10 06:00 (UTC+8)","rule_title":"Event Rules","item_basic":"Basics: Tap above the playfield to drop fruit. Matching fruits merge into a larger one.","item_score":"Scoring: Larger fruits award more points. The goal is to create the “Watermelon.”","item_over":"Game Over: When the stack touches the red warning line, the run ends and the score is settled.","item_reward":"Rewards:","item_reward_1":"During the event, rankings use each player’s highest single-run score.","item_reward_2":"After the event, the top 10 players receive exclusive rewards (delivered within 3 business days)."},"reward":{"title":"Rewards","claim":"Claim","claimed":"Claimed","cond":"Reach {{n}} pts","tier1":"Starter","tier2":"Advanced","tier3":"Master"},"share":{"title":"Share","copy":"Copy Link","save":"Save Result","copied":"Link copied","copy_failed":"Copy failed","saved":"Image saved"},"settings":{"title":"Settings","sound":"Sound","rules":"Rules","view":"View"},"guide":{"s1_title":"Drag & Drop","s1_text":"Drag the tuan on top to aim, release to drop","s2_title":"Merge Same","s2_text":"Two identical tuans merge into a higher one","s3_title":"Use Skills","s3_text":"Charge AP by merging, then cast skills","next":"Next","start":"Start"}},"scene_game":{"score":"Skor","merge_count":"Jumlah Penggabungan","high_score":"Skor Tertinggi","back":"Kembali","next":"Berikutnya","collection":"Koleksi","toolbar":"Bilah Skill","cost":"SP -{{n}}","cost_progress":"Total SP yang Dipakai: {{n}}/{{m}}","golden_toast":"Kamu berhasil menemukan Endmin Emas!","restart_game":"Mulai Ulang Game","submit_game":"Akhiri Game","skill":{"clear":"Cast Off","wind":"Protocol: Levitate","shake":"Shake Up!","swap":"Fated Exchange"},"skill_desc":{"clear":"Semua akan kuberantas!","wind":"Sterilkan area ini!","shake":"Aku datang!","swap":"Percayalah pada tuntunan takdir!"},"skill_tip":{"clear":"Klik OrbiPom untuk menghapus.","wind":"Klik di mana saja untuk meniup OrbiPom ke atas.","shake":"Klik di mana saja untuk mulai mengguncang.","swap":"Pilih dua OrbiPom mana saja untuk menukar keduanya."},"energy_insufficient":"SP Tidak Cukup"},"modal_confirm":{"exit_title":"Keluar Sekarang?","exit_content":"Game-mu masih berlangsung. Jika keluar sekarang, skor dan progresmu untuk game ini akan difinalisasi.","go_to_complete_title":"Selesaikan Sekarang","go_to_complete_desc":"Agar bisa menyelesaikan misi ini, kamu harus memulai game baru. Mulai sekarang?","confirm_exit_title":"Keluar Sekarang?","confirm_exit_desc":"Keluar dari event ini?","confirm_restart_title":"Mulai Ulang Game?","confirm_restart_desc":"Game-mu masih berlangsung. Jika dimulai ulang, game ini akan diakhiri, skor dan progresmu akan difinalisasi, dan game baru akan dimulai.","confirm_submit_title":"Akhiri Game?","confirm_submit_desc":"Game-mu masih berlangsung. Jika diakhiri sekarang, skor dan progresmu untuk game ini akan difinalisasi.","share_confirm_submit_desc":"Kamu harus mengakhiri game-mu sebelum membuat gambar untuk dibagikan. Akhiri sekarang dan finalisasikan skor terkinimu?"},"scene_result":{"this_score":"Skor","max_synth":"Penggabungan Terbaik","skill_times":"Jumlah Skill yang Dipakai","replay":"Main Lagi","share":"Bagikan Skor","win_title":"Kamu berhasil menemukan Endmin Emas!","over_title":"Game Over"},"modal_leaderboard":{"pause_desc":"Game Dijeda","continue":"Lanjutkan","title":"Papan Peringkat","empty":"Belum ada peringkat"},"modal_rule":{"title":"Aturan Event","time_title":"Waktu Event","time_desc":"1 Juni 2026 pukul 12.00 (waktu server) – 10 Juni 2026 pukul 06.00 (UTC+8)","join_title":"Persyaratan Partisipasi","join_desc":"Setelah Pusat Event terbuka","play_title":"Aturan Event","play_desc":"Gabungkan OrbiPom dengan tipe yang sama menjadi OrbiPom yang lebih besar untuk mendapatkan poin dan memenangkan imbalan berlimpah.","notice_title":"Catatan Penting untuk Event Ini","notice_1":"Selama event, peringkatmu akan dibandingkan dengan teman-temanmu berdasarkan skor tertinggi yang pernah kamu raih, dan peringkat 25 teratas akan ditampilkan di papan peringkat.","notice_2":"Setelah menyelesaikan misi dan mengambil imbalan, imbalan akan didistribusikan melalui kotak pesan dalam game. Segera ambil imbalan ini karena pesan imbalan akan kedaluwarsa dalam 30 hari.","play_desc_2":"Dengan menggabungkan OrbiPom, kamu akan mendapatkan SP yang bisa dipakai untuk menggunakan skill. Saat mulai terdesak, gunakan skill secara strategis untuk membalikkan keadaan."},"modal_reward":{"title":"Imbalan Misi","go":"Buka","claim":"Ambil","claimed":"Diambil","claim_all":"Ambil Semua","completed_toast":"Imbalan sudah diambil","claim_title":"Berhasil Diambil","claim_continue":"Klik untuk Melanjutkan","claim_accept":"Terima","mail_sent":"Terkirim ke kotak pesan dalam game","task":{"merge":"Gabungkan OrbiPom sebanyak {{target}} kali","skill":"Gunakan skill sebanyak {{target}} kali","high_score":"Capai skor tertinggi sebesar {{target}}","share":"Bagikan sebanyak {{target}} kali","golden_admin":"Buat Endmin Emas sebanyak {{target}} kali"}},"modal_share":{"prompt":"Ikuti event ini untuk mendapatkan <br>Oroberyl<br> dan masih banyak lagi","title":"Bagikan Skor","save":"Simpan Hasil"},"guide":{"s1_title":"Gabungkan dan Kembangkan!","s1_text":"Tumpuk OrbiPom. Saat bersentuhan, dua OrbiPom yang sama akan menyatu menjadi versi yang lebih besar.","s2_title":"Cari Endmin Emas","s2_text":"Ada total 11 OrbiPom yang berbeda. Lihat Koleksi untuk melacak Endmin Emas.","s3_title":"Perhatikan Garis Peringatan!","s3_text":"Susun tumpukan secara strategis. Game akan berakhir jika tinggi tumpukan melebihi garis peringatan selama 3 detik.","s4_title":"Gunakan Skill-mu","s4_text":"Dapatkan SP dengan menggabungkan OrbiPom, lalu pakailah untuk menggunakan skill. Gunakan dengan cermat untuk merebut kendali saat papan permainan mulai kacau!","s5_title":"Jatuhkan OrbiPom","s5_text":"Klik di mana saja pada layar untuk menjatuhkan OrbiPom pertama. Ayo Main!","next":"Berikutnya","start":"Main"},"npc":{"npc_01":"Akekuri","npc_02":"Estella","npc_03":"Fluorite","npc_04":"Purrchena","npc_05":"Typhoeus"}},"general":{"common":{"copy":"Salin","copy_url":"Salin Tautan","paste":"Rekat","share":"Bagikan","close":"Tutup","confirm":"Konfirmasi","cancel":"Batal","tap_blank_to_close":"Klik di luar untuk tutup","long_tap_to_save":"Tekan lama untuk simpan gambar","click_to_save":"Klik untuk simpan gambar","return_to_homepage":"Kembali ke Beranda","msg":{"loading":"Memuat ...","network_error":"Kesalahan jaringan","copy_success":"Berhasil disalin","copy_failed":"Gagal disalin","url_copy_success":"Tautan disalin","url_copy_failed":"Gagal menyalin tautan","share_success":"Berhasil dibagikan","share_failed":"Gagal dibagikan","auth_failed":"Login gagal","params_error":"Kesalahan parameter","network_issue":"Kesalahan jaringan. Silakan coba lagi nanti.","auth_expired":"Login kedaluwarsa. Silakan login lagi.","request_too_fast":"Terlalu banyak upaya. Silakan coba lagi nanti.","char_error":"Kesalahan status karakter game saat ini","account_error":"Kesalahan status Akun Gryphline saat ini","char_error_retry":"Kesalahan info karakter. Silakan coba lagi nanti.","network_error_retry":"Kesalahan jaringan. Silakan refresh, lalu coba lagi."}},"activity":{"act_ended":"Event sudah berakhir.","act_not_start":"Event belum dimulai.","msg":{"image_saved":"Gambar disimpan di {{path}}"}},"gamepad":{"keyhint":{"confirm":"Konfirmasi","close":"Tutup","close_current_page":"Tutup Halaman Ini","exit_page":"Keluar dari Halaman","claim_all":"Ambil Semua","go_to_complete":"Buka","claim":"Ambil","move":"Pindahkan","scroll":"Gulir","continue":"Lanjutkan","back":"Kembali","next":"Berikutnya","drop":"Jatuhkan"}},"reward":{"claim_success":"Berhasil diambil!"}}}'
        ),
        r = {
          lang: n.ELanguage["id-id"],
          text: t,
          fonts: {},
          logoH: i(17403),
          logo: i(55276),
        };
    },
  },
]);
