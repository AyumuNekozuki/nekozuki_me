<template>
  <div id="page_makeids" class="text_pages">
    <article>
      <div class="article_thumb">
        <img
          :src="contetnts_document.thumbnail.url"
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
                v-for="tag in contetnts_document.tag"
                :key="tag"
              >
                <font-awesome-icon :icon="['fas', 'tag']" />
                {{ tag.tag }}
              </li>
            </ul>
            <ul class="tag_img_list">
              <li
                v-for="imgtag in contetnts_document.imglinks"
                :key="imgtag"
              >
                <img :src="imgtag.imglink" alt="" srcset="" />
              </li>
            </ul>
          </div>
          <div class="link_area">
            <ul class="link_list">
              <li
                v-for="link in contetnts_document.links"
                :key="link"
              >
                <a :href="link.href">
                  <span class="title">{{ link.title }}</span>
                  <span class="ex">
                    <font-awesome-icon :icon="['fas', 'external-link-alt']" />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div v-if="contetnts_document.contents_text">
          <div v-for="contntdata in contetnts_document.contents_text" :key="contntdata" v-html="contntdata.editor"></div>
        </div>
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
import Meta from "~/mixins/meta";
let ogp_title, ogp_id, ogp_image;

export default {
  async asyncData({ $microcms, params, error }) {
    try {
      let taghide = false;

      let contetnts_document = await $microcms.get({
        endpoint: `makes/${params.slug}`,
        query: {limit: 0}
      }).catch(function (error) {
        this.$nuxt.error({
          statusCode: 404,
          message: error,
        });
      });

      if (contetnts_document.type == "contents") {
        taghide = true;
      }

      ogp_title = contetnts_document.title;
      ogp_id = contetnts_document.id;
      ogp_image = contetnts_document.thumbnail.url;

      return {
        contetnts_document,
        ogp_title,
        ogp_id,
        ogp_image,
        taghide,
      };
    } catch {
      error({ statusCode: 404, message: 'Page not Found' })
    }
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: ogp_title,
        description: ogp_title + "について",
        type: "pages",
        url: "https://nekozuki.me/makes/" + ogp_id,
        image: ogp_image,
      },
    };
  },
};
</script>