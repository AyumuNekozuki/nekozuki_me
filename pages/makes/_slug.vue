<template>
  <div id="page_makeids" class="wrapper">
    <article>
      <div class="text_area">
        <h2 class="title">
          {{ contetnts_document.title }}
        </h2>
        <div class="thumbnail">
          <img
            :src="contetnts_document.thumbnail.url+'?fit=max&w=960&h=540'"
            :alt="contetnts_document.title"
            srcset=""
          />
        </div>
        <div v-if="contetnts_document.contents_text">
          <div
            v-for="contntdata in contetnts_document.contents_text"
            :key="contntdata"
            v-html="contntdata.editor"
          ></div>
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

      let contetnts_document = await $microcms
        .get({
          endpoint: `makes/${params.slug}`,
          query: { limit: 0 },
        })
        .catch(function (error) {
          this.$nuxt.error({
            statusCode: 404,
            message: error,
          });
        });

      ogp_title = contetnts_document.title;
      ogp_id = contetnts_document.id;
      ogp_image = contetnts_document.thumbnail.url;
      return {
        contetnts_document,
        ogp_title,
        ogp_id,
        ogp_image,
      };
    } catch {
      error({ statusCode: 404, message: "Page not Found" });
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

<style lang="scss" scoped>
.wrapper {
  max-width: 960px;
  margin: 0 auto;
}

.thumbnail {
  width: 100%;
  height: 300px;
  aspect-ratio: 16 / 9;
  display: flex;
  margin-top: 10px;
  img{
    height: 100%;
    width: 100%;
    object-fit: contain;
    margin: 0 auto;
    display: block;
  }
}
</style>