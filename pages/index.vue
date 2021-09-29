<template>
  <div id="page_index">
    <main>
      <!-- <Mainvisual /> -->
      <div id="page_index_about" class="text_pages">
        <article>
          <div class="article_thumb">
            <img src="@/static/img/thumb/nekozuki.png" alt="" srcset="" />
          </div>
          <div class="text_area">
            <h2>ねこづきあゆむとは</h2>
            <p>
              動画投稿・生配信・大百科編集をはじめ、Webアプリ/Webページ、ブラウザ拡張機能といった技術方面まで多方面で活動しているあまねくクリエイター。
            </p>
            <p>
              好きなものはスイーツとガジェット。嫌いなものは辛い/苦いものと生き物。詳細は
              <nuxt-link to="/about">こちら</nuxt-link> から。
            </p>

            <h3>このサイトについて</h3>
            <p>
              このサイトは、猫月遥歩（ねこづきあゆむ）の多彩な活動を1点に集約しているポートフォリオ的なものである。
            </p>
          </div>
        </article>
      </div>
      <div id="page_index_parts_area" class="text_pages">
        <section id="pickup" class="makes_pickup_contents">
          <h3><a href="/makes">制作物ピックアップ</a></h3>
          <div class="contents_list_area">
            <div
              class="item"
              v-for="pickup_datas in pickup_datas"
              :key="pickup_datas.length"
            >
              <nuxt-link :to="pickup_datas.link">
                <div class="thumb_area">
                  <img :src="pickup_datas.thumb" alt="" srcset="" />
                </div>
                <div class="title_area">
                  <p class="title">{{ pickup_datas.title }}</p>
                  <p class="desc">{{ pickup_datas.desc }}</p>
                </div>
              </nuxt-link>
            </div>
            <div
              class="contents_list_area_err"
              v-if="pickup_datas.length == 0"
            >
              <p>データの取得に失敗しました</p>
            </div>
          </div>
        </section>
      </div>
      <div id="page_index_schedule" class="text_pages">
        <article>
          <div class="text_area">
            <h2>猫月遥歩（ねこづきあゆむ） 公開スケジュール</h2>
            <b-button vb-buttonriant="outline-primary" href="https://ayumunekozuki.notion.site/AyumuNekozuki-s-Open-Schedule-4fc70ebaadf64ce6a9571278a895a4bf" target="_blank" rel="noopener noreferrer">スケジュールの詳細はこちらで！</b-button>
            <div class="wrap mt-3">
              <div class="iframecover"></div>
              <iframe src="https://calendar.google.com/calendar/embed?height=500&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FTokyo&showTitle=0&showCalendars=0&showTz=1&showTabs=0&showPrint=0&showDate=1&showNav=1&src=Y19rM2wydHNmODdzNGxnOWZwY3BhYnFlMzVub0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%239E69AF" style="border-width:0" width="1100" height="500" frameborder="0" scrolling="no"></iframe>
            </div>
            
          </div>
        </article>
      </div>
    </main>
  </div>
</template>

<script>
import firebase from "~/plugins/firebase";
const db = firebase.firestore();
const makes_db = db.collection("works");
const components_db = db.collection("components");
import Mainvisual from "@/components/Mainvisual.vue";
let pickup_datas = [];
let trycount = 0;

export default {
  head() {
    return {
      titleTemplate: null,
      title: "ねこづきあゆむのうぇぶさいと",
    };
  },
  components: {
    Mainvisual,
  },
  async asyncData({ params }) {
    if (trycount == 0) {
      const document_pickup_ids = await components_db
        .doc("works_pickup")
        .get()
        .catch(function (error) {
          console.error(error);
        });
      var document_pickup_ids_doc = document_pickup_ids.data();
      for (var i = 0; i < document_pickup_ids_doc.pickup_id.length; i++) {
        var document_pickup_doc = await makes_db
          .doc(document_pickup_ids_doc.pickup_id[i])
          .get()
          .catch(function (error) {
            console.error(error);
          });
        var data = document_pickup_doc.data();
        data.link = "/makes/" + data.id;
        pickup_datas.push(data);
      }
      trycount = 1;
      return {
        pickup_datas
      }
    }
  }
};
</script>
