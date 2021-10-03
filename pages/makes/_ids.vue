<template>
  <div id="page_makeids" class="text_pages">
    <article>
      <div class="article_thumb">
        <img
          :src="contetnts_document.thumb"
          :alt="contetnts_document.title"
          srcset=""
        />
      </div>
      <div class="text_area">
        <h2 class="title">
          {{ contetnts_document.title
          }}<span class="desc">{{ contetnts_document.desc }}</span>
        </h2>
        <div
          class="heading_contents_area"
          v-if="!taghide && contetnts_document.contents_text"
        >
          <div class="tag_area">
            <p>Category: {{ contetnts_document.type }}</p>
            <ul class="tag_list">
              <li
                v-for="contents_tags in contents_tags"
                :key="contents_tags.length"
              >
                <font-awesome-icon :icon="['fas', 'tag']" />
                {{ contents_tags }}
              </li>
            </ul>
            <ul class="tag_img_list">
              <li
                v-for="contents_tag_imgs in contents_tag_imgs"
                :key="contents_tag_imgs.length"
              >
                <img :src="contents_tag_imgs" alt="" srcset="" />
              </li>
            </ul>
          </div>
          <div class="link_area">
            <ul class="link_list">
              <li
                v-for="contents_links in contents_links"
                :key="contents_links.length"
              >
                <a :href="contents_links.href">
                  <span class="icon" v-html="contents_links.icon"> </span>
                  <span class="title">{{ contents_links.title }}</span>
                  <span class="ex">
                    <font-awesome-icon :icon="['fas', 'external-link-alt']" />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div v-html="contetnts_document.contents_text"></div>
        <div v-if="!contetnts_document.contents_text">
          <p class="h3 m-5 text-center">
            <b-badge class="p-3" variant="warning"
              >👷 このページは現在工事中です</b-badge
            >
          </p>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import firebase from "~/plugins/firebase";
const db = firebase.firestore();
const makes_db = db.collection("works");

import Meta from "~/mixins/meta";
let title,
  contents_id,
  ogp_image,
  contetnts_document,
  contents_tags,
  contents_tag_imgs,
  contents_links;

export default {
  async asyncData({ params, error }) {
    try {
      let taghide = false;

      //データ取得
      contents_id = params.ids + "";
      const document_contents_snapshot = await makes_db
        .doc(contents_id)
        .get()
        .catch(function (error) {
          this.$nuxt.error({
            statusCode: 404,
            message: error,
          });
        });
      contetnts_document = document_contents_snapshot.data();

      //データ整備
      title = contetnts_document.title;
      ogp_image = contetnts_document.thumb;
      if (ogp_image.slice(0, 1) == "/") {
        ogp_image = "https://nekozuki.me" + ogp_image;
      }
      contents_tags = contetnts_document.tags;
      contents_tag_imgs = contetnts_document.tag_imgs;
      contents_links = contetnts_document.links;

      if (contetnts_document.type == "contents") {
        taghide = true;
      }

      return {
        title,
        contents_id,
        ogp_image,
        contetnts_document,
        contents_tags,
        contents_tag_imgs,
        contents_links,
        taghide,
      };
    } catch (e) {
      error({
        statusCode: 404,
        message: 'This page could not be found'
      })
    }
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: title,
        description: title + "について",
        type: "pages",
        url: "https://nekozuki.me/makes/" + contents_id,
        image: ogp_image,
      },
    };
  },
};
</script>

<style lang="scss">
</style>