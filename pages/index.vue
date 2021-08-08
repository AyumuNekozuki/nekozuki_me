<template>
  <div id="page_index">
    <main>
      <Mainvisual />
      <div class="parts_area">
        <section class="video_newest_contents">
          <h3>
            <a
              target="_blank"
              href="https://www.nicovideo.jp/user/45048152/video"
              >だいたい直近の新着動画</a
            >
          </h3>
          <div id="video_contents_area" class="top_contents_list_area">
            <div
              class="item"
              v-for="video_datas in video_datas"
              :key="video_datas.length"
            >
              <a :href="video_datas.link">
                <div class="thumb_area">
                  <iframe :src="video_datas.embed_src" frameborder="0"></iframe>
                </div>
                <div class="title_area">
                  <p>{{ video_datas.title }}</p>
                </div>
              </a>
            </div>
            <div
              id="video_contents_area"
              class="top_contents_list_area_err"
              v-if="video_datas.length == 0"
            >
              <p>データの取得に失敗しました</p>
            </div>
          </div>
        </section>
        <section class="blog_newest_contents">
          <h3>
            <a target="_blank" href="https://blog.nekozuki.me"
              >だいたい直近の新着記事</a
            >
          </h3>
          <div id="blog_contents_area" class="top_contents_list_area">
            <div
              class="item"
              v-for="blog_datas in blog_datas"
              :key="blog_datas.length"
            >
              <a :href="blog_datas.link">
                <div class="thumb_area">
                  <img src="~static/img/ogp/blog_icon.png" alt="" srcset="" />
                </div>
                <div class="title_area">
                  <p>{{ blog_datas.title }}</p>
                </div>
              </a>
            </div>
            <div
              id="blog_contents_area"
              class="top_contents_list_area_err"
              v-if="blog_datas.length == 0"
            >
              <p>データの取得に失敗しました</p>
            </div>
          </div>
        </section>
        <section class="top_pickup_contents">
          <h3><nuxt-link to="/makes">制作物ピックアップ</nuxt-link></h3>
          <div class="top_contents_list_area">
            <div
              class="item"
              v-for="pickup_datas in pickup_datas"
              :key="pickup_datas.length"
            >
              <a :href="pickup_datas.link">
                <div class="thumb_area">
                  <img :src="pickup_datas.thumb" alt="" srcset="" />
                </div>
                <div class="title_area">
                  <p class="title">{{ pickup_datas.title }}</p>
                  <p class="desc">{{ pickup_datas.desc }}</p>
                </div>
              </a>
            </div>
            <div
              class="top_contents_list_area_err"
              v-if="pickup_datas.length == 0"
            >
              <p>データの取得に失敗しました</p>
            </div>
          </div>
        </section>
      </div>
      <div id="page_index_about" class="text_pages">
        <article>
          <div class="article_thumb">
            <img src="~static/img/thumb/nekozuki.png" alt="" srcset="" />
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
    </main>
  </div>
</template>

<script>
import firebase from "~/plugins/firebase";
const db = firebase.firestore();
const makes_db = db.collection("works");
const components_db = db.collection("components");
import Mainvisual from "@/components/Mainvisual.vue";

let Parser = require("rss-parser");
let parser = new Parser();

let blog_datas = [];
let video_datas = [];
let pickup_datas = [];

export default {
  head() {
    return {
      titleTemplate: null,
      title: "ねこづきあゆむのうぇぶさいと",
    };
  },
  async asyncData({ params }) {
    try {
      const blog_rss = await parser.parseURL(
        "http://localhost:3000/api/nekozuki_blog/"
      );

      setTimeout(timeup_blog, 3000);
      function timeup_blog() {
        if (blog_datas.length == 0) {
          console.error("getblog: timeup");
        }
      }

      for (var i = 1; i <= 4; i++) {
        var blog_data = {};
        blog_data.title = blog_rss.items[i].title;
        blog_data.link = blog_rss.items[i].link;
        blog_datas.push(blog_data);
      }
    } catch (err) {
      console.error(err);
    }

    try {
      const video_rss = await parser.parseURL(
        "http://localhost:3000/api/nico/user_45048152/"
      );

      setTimeout(timeup_video, 3000);
      function timeup_video() {
        if (video_datas.length == 0) {
          console.error("getvideo: timeup");
        }
      }

      for (var i = 0; i < 4; i++) {
        var video_data = {};
        video_data.title = video_rss.items[i].title;

        var href_index = video_rss.items[i].link.indexOf("sm");
        video_data.id = video_rss.items[i].link.substring(href_index);
        video_data.link = "https://www.nicovideo.jp/watch/" + video_data.id;

        video_data.embed_src =
          "https://embed.nicovideo.jp/watch/" + video_data.id;

        video_datas.push(video_data);
      }
    } catch (err) {
      console.error(err);
    }

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

    return {
      blog_datas,
      video_datas,
      pickup_datas,
    };
  },
  mounted() {
    if (process.client) {
      $("#video_contents_area > .item").slice(4).remove();
      $("#blog_contents_area > .item").slice(4).remove();
    }
  },
  components: {
    Mainvisual,
  },
};
</script>


<style lang="scss">
#page_index {
  .mainvisual_area {
    height: 350px;
    overflow: hidden;
    .hooper {
      height: inherit;
      .hooper-slide {
        padding: 0 20px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .hooper-prev,
      .hooper-next {
        margin: 1rem;
        border-radius: 50px;
        background-color: rgba(40, 44, 52, 0.5);
        svg {
          fill: #c0c0c0;
        }
      }
    }
  }
  .parts_area {
    width: calc(100% - 20px);
    max-width: 1152px;
    margin: 0 auto;

    section {
      margin-top: 40px;
    }

    .top_contents_list_area {
      display: flex;
      flex-wrap: wrap;
      .item {
        width: calc(100% / 4);
        padding: 5px;

        a {
          display: block;
          cursor: pointer;
          border-radius: 4px;
          width: 100%;
          background-color: rgba(40, 44, 52, 0.5);
          backdrop-filter: none;

          .thumb_area {
            width: 100%;
            height: 150px;
            display: flex;
            align-content: center;
            background-image: url("~static/img/assets/spin-gray.svg");
            background-position: 50%;
            background-repeat: no-repeat;
            background-size: 25%;

            img,
            iframe {
              object-fit: cover;
              width: 100%;
              height: auto;
              border-radius: 4px 4px 0 0;
            }
          }
          .title_area {
            padding: 0.5rem;
            height: 75px;
            overflow: hidden;
            p {
              word-break: break-all;
              text-align: justify;
              color: #c0c0c0;
              overflow: hidden;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;

              &.title {
                margin-bottom: 0.25rem;
              }
              &.desc {
                font-size: 11px;
                margin-bottom: 0;
                color: #a2a2a2;
              }
            }
          }

          &:hover {
            text-decoration: none;
            opacity: 0.8;
          }
        }
      }
    }
    .top_contents_list_area_err {
      padding: 1.5rem;
      background-color: rgba(40, 44, 52, 0.5);
      border-radius: 4px;
      width: 100%;

      p {
        margin: 0;
        text-align: center;
      }
    }
  }
  #page_index_about {
    margin-top: 40px;
    article {
      max-width: 1152px;
    }
  }
}
</style>