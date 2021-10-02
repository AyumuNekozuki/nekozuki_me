<template>
  <div id="page_index">
    <main>
      <Mainvisual />
      <div id="page_index_about" class="text_pages">
        <article>
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
          <h3><nuxt-link to="/makes">制作物ピックアップ</nuxt-link></h3>
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
            <div class="contents_list_area_err" v-if="pickup_datas.length == 0">
              <p>データの取得に失敗しました</p>
            </div>
          </div>
        </section>
      </div>
      <div id="page_index_schedule" class="text_pages">
        <article>
          <div class="text_area">
            <h2>猫月遥歩（ねこづきあゆむ）公開スケジュール</h2>
            <div class="list_picks mb-4" style="border-bottom: 2px dashed #ccc" v-if="!schedule_datas.length == 0">
              <table class="mb-3">
                <thead>
                  <tr>
                    <th style="width:25%;">形式</th>
                    <th style="width:20%;">日時</th>
                    <th>タイトル・リンク</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="schedule_datas in schedule_datas" :key="schedule_datas.length">
                    <td><b-badge :variant="schedule_datas.typecolor" style="font-size:110%">{{ schedule_datas.category }}（{{ schedule_datas.type }}）</b-badge></td>
                    <td>{{ schedule_datas.date }}~</td>
                    <td style="font-weight: 800;"><a :href="schedule_datas.href" target="_blank" rel="noopener noreferrer">{{ schedule_datas.title }}</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="calender">
              <b-button
                href="https://ayumunekozuki.notion.site/AyumuNekozuki-s-Open-Schedule-4fc70ebaadf64ce6a9571278a895a4bf"
                target="_blank"
                rel="noopener noreferrer"
                >スケジュールの詳細はこちらで！（クリックで開く）</b-button
              >
              <div class="wrap mt-3">
                <div class="iframecover"></div>
                <iframe
                  src="https://calendar.google.com/calendar/embed?height=500&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FTokyo&showTitle=0&showCalendars=0&showTz=1&showTabs=0&showPrint=0&showDate=1&showNav=1&src=Y19rM2wydHNmODdzNGxnOWZwY3BhYnFlMzVub0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%239E69AF"
                  style="border-width: 0"
                  width="1100"
                  height="500"
                  frameborder="0"
                  scrolling="no"
                ></iframe>
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  </div>
</template>

<script>
import firebase from "~/plugins/firebase";
import Mainvisual from "~/components/Mainvisual.vue";

const db = firebase.firestore();
const makes_db = db.collection("works");
const components_db = db.collection("components");
const schedule_db = db.collection("schedule_pick");

let pickup_datas = [];
let schedule_datas = [];
let trycount = 0;

export default {
  components: {
    Mainvisual
  },
  head() {
    return {
      titleTemplate: null,
      title: "ねこづきあゆむのうぇぶさいと",
    };
  },
  async asyncData() {
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

      const today_timestamp = new Date().getTime();
      const Snapshot_schedule = await schedule_db
        .orderBy("date")
        .get()
        .catch(function (error) {
          console.error(error);
        });
      Snapshot_schedule.forEach((doc) => {
        var data = doc.data();

        if(data.date.seconds > Math.floor(today_timestamp / 1000)){
          data.date = new Date(data.date.seconds * 1000);
          data.date = changedatetype(data.date);

          if(data.category == '生放送番組' && (data.type == 'ゲスト出演' || data.type == '企画参加')){
            data.typecolor = 'info';
          }else{
            data.typecolor = 'secondary';
          }

          schedule_datas.push(data)
        }
      });

      function changedatetype(dt){
        var year = dt.getFullYear() ;
        var month = dt.getMonth() + 1 ;
        var date = dt.getDate();
        var hours = dt.getHours() ;
        var minutes = dt.getMinutes();
        var ymdhms = new String( year ) + "/" + ( "00" + new String( month )).slice( -2 ) + "/" + ( "00" + new String( date )).slice( -2 ) ;
        ymdhms += " " + ( "00" + new String( hours )).slice( -2 ) + ":" + ( "00" + new String( minutes )).slice( -2 );
        return ymdhms;
      }


      trycount = 1;
      return {
        pickup_datas,
        schedule_datas
      };
    }
  },
};
</script>
