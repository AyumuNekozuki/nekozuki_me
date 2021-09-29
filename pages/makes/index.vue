<template>
  <div id="page_makes">
    <main>
      <!--<Mainvisual />-->
      <div class="parts_area">
        <section id="pickup" class="makes_pickup_contents">
          <h3>ピックアップ</h3>
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
        <section id="web" class="makes_pickup_contents">
          <h3>Webページ／Webアプリ</h3>
          <div class="contents_list_area">
            <div
              class="item"
              v-for="web_datas in web_datas"
              :key="web_datas.length"
            >
              <nuxt-link :to="web_datas.link">
                <div class="thumb_area">
                  <img :src="web_datas.thumb" alt="" srcset="" />
                </div>
                <div class="title_area">
                  <p class="title">{{ web_datas.title }}</p>
                  <p class="desc">{{ web_datas.desc }}</p>
                </div>
              </nuxt-link>
            </div>
            <div
              class="contents_list_area_err"
              v-if="web_datas.length == 0"
            >
              <p>データの取得に失敗しました</p>
            </div>
          </div>
        </section>
        <section id="extentions" class="makes_pickup_contents">
          <h3>ブラウザ拡張機能</h3>
          <div class="contents_list_area">
            <div
              class="item"
              v-for="extention_datas in extention_datas"
              :key="extention_datas.length"
            >
              <nuxt-link :to="extention_datas.link">
                <div class="thumb_area">
                  <img :src="extention_datas.thumb" alt="" srcset="" />
                </div>
                <div class="title_area">
                  <p class="title">{{ extention_datas.title }}</p>
                  <p class="desc">{{ extention_datas.desc }}</p>
                </div>
              </nuxt-link>
            </div>
            <div
              class="contents_list_area_err"
              v-if="extention_datas.length == 0"
            >
              <p>データの取得に失敗しました</p>
            </div>
          </div>
        </section>
        <section id="contents" class="makes_pickup_contents">
          <h3>コンテンツ</h3>
          <div class="contents_list_area">
            <div
              class="item"
              v-for="contents_datas in contents_datas"
              :key="contents_datas.length"
            >
              <nuxt-link :to="contents_datas.link">
                <div class="thumb_area">
                  <img :src="contents_datas.thumb" alt="" srcset="" />
                </div>
                <div class="title_area">
                  <p class="title">{{ contents_datas.title }}</p>
                  <p class="desc">{{ contents_datas.desc }}</p>
                </div>
              </nuxt-link>
            </div>
            <div
              class="contents_list_area_err"
              v-if="contents_datas.length == 0"
            >
              <p>データの取得に失敗しました</p>
            </div>
          </div>
        </section>
        <section id="solid" class="makes_pickup_contents">
          <h3>3Dアイテム／3Dコンテンツ</h3>
          <div class="contents_list_area">
            <div
              class="item"
              v-for="solid_datas in solid_datas"
              :key="solid_datas.length"
            >
              <nuxt-link :to="solid_datas.link">
                <div class="thumb_area">
                  <img :src="solid_datas.thumb" alt="" srcset="" />
                </div>
                <div class="title_area">
                  <p class="title">{{ solid_datas.title }}</p>
                  <p class="desc">{{ solid_datas.desc }}</p>
                </div>
              </nuxt-link>
            </div>
            <div
              class="contents_list_area_err"
              v-if="solid_datas.length == 0"
            >
              <p>データの取得に失敗しました</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import firebase from "~/plugins/firebase";
const db = firebase.firestore();
const makes_db = db.collection("works");
const components_db = db.collection("components");

import Meta from "~/mixins/meta";
import Mainvisual from "@/components/Mainvisual.vue";

let pickup_datas = [];
let extention_datas = [];
let web_datas = [];
let contents_datas = [];
let solid_datas = [];
let trycount = 0;

export default {
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: "Makes",
        description: "ねこづきあゆむの制作物",
        type: "pages",
        url: "https://nekozuki.me/makes",
      },
    };
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

      const Snapshot_extention = await makes_db
        .orderBy("update", "desc")
        .where("type", "==", "extentions")
        .get()
        .catch(function (error) {
          console.error(error);
        });
      Snapshot_extention.forEach((doc) => {
        var data = doc.data();
        data.link = "/makes/" + data.id;
        extention_datas.push(data);
      });

      const Snapshot_web = await makes_db
        .orderBy("update", "desc")
        .where("type", "==", "web")
        .get()
        .catch(function (error) {
          console.error(error);
        });
      Snapshot_web.forEach((doc) => {
        var data = doc.data();
        data.link = "/makes/" + data.id;
        web_datas.push(data);
      });

      const Snapshot_contents = await makes_db
        .orderBy("update", "desc")
        .where("type", "==", "contents")
        .get()
        .catch(function (error) {
          console.error(error);
        });
      Snapshot_contents.forEach((doc) => {
        var data = doc.data();
        data.link = "/makes/" + data.id;
        contents_datas.push(data);
      });

      const Snapshot_solid = await makes_db
        .orderBy("update", "desc")
        .where("type", "==", "solid")
        .get()
        .catch(function (error) {
          console.error(error);
        });
      Snapshot_solid.forEach((doc) => {
        var data = doc.data();
        data.link = "/makes/" + data.id;
        solid_datas.push(data);
      });

      trycount = 1;
      return {
        pickup_datas,
        web_datas,
        extention_datas,
        contents_datas,
        solid_datas,
      };
    }
  },
  components: {
    Mainvisual,
  },
};
</script>