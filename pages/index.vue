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
              v-for="data in pickup_datas.pickupid"
              :key="data"
            >
              <nuxt-link :to="'/makes/'+ data.id" >
                <div class="thumb_area">
                  <img :src="data.thumbnail.url" alt="" srcset="" />
                </div>
                <div class="title_area">
                  <p class="title">{{ data.title }}</p>
                  <p class="desc">{{ data.desc }}</p>
                </div>
              </nuxt-link>
            </div>
            <div class="contents_list_area_err" v-if="!pickup_datas">
              <p>データの取得に失敗しました</p>
            </div>
          </div>
        </section>
      </div>
      <div id="page_index_schedule" class="text_pages">
        <article>
          <div class="text_area">
            <h2>猫月遥歩（ねこづきあゆむ）公開スケジュール</h2>
            <div class="list_picks mb-4" style="border-bottom: 2px dashed #ccc" v-if="schedule_datas">
              <table class="mb-3">
                <thead>
                  <tr>
                    <th style="width:25%;">形式</th>
                    <th style="width:20%;">日時</th>
                    <th>タイトル・リンク</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="scdata in schedule_datas.contents" :key="scdata">
                    <td><b-badge :variant="scdata.typecolor" style="font-size:110%">{{ scdata.category }}（{{ scdata.type }}）</b-badge></td>
                    <td>{{ $dateFns.format(new Date(scdata.date), 'yyyy/MM/dd HH:mm') }}〜
                    </td>
                    <td style="font-weight: 800;"><a :href="scdata.href" target="_blank" rel="noopener noreferrer">{{ scdata.title }}</a></td>
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
import Meta from "~/mixins/meta";
import Mainvisual from "~/components/Mainvisual.vue";

// let schedule_datas = [];
let trycount = 0;

export default {
  components:{
    Mainvisual
  },
  mixins: [Meta],
  head() {
    return {
      titleTemplate: null,
      title: "ねこづきあゆむのうぇぶさいと",
    };
  },
  async asyncData({ $microcms }) {
    let pickup_datas = await $microcms.get({
      endpoint: "works_pickup"
    });

    let yesterday_date = new Date(); 
    yesterday_date.setDate(yesterday_date.getDate() - 1);

    console.log(yesterday_date)

    let schedule_datas = await $microcms.get({
      endpoint: "schedule",
      queries: {
        orders: 'date',
        filters: 'date[greater_than]'+yesterday_date.toISOString()
      }
    });
    console.log(schedule_datas.contents)

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

    return {
      pickup_datas,
      schedule_datas
    };
  },
};
</script>
