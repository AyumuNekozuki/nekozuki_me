<template>
  <div class="error">
    <div class="text_pages">
      <article>
        <div class="article_thumb">
          <img src="~static/img/assets/404_img.jpg" alt="" srcset="">
        </div>
        <div class="text_area">
          <h2>{{ error.statusCode }} - {{ error.message }}</h2>
          <p v-if="error.statusCode == 418">私はコーヒーが苦手なの！</p>
          <p><nuxt-link to="/">Back to the TOP</nuxt-link></p>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import Meta from "~/mixins/meta";

export default {
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: error.statusCode + " - " + error.message,
        description: "",
        type: "pages",
        url: "https://nekozuki.me",
      },
    };
  },
  props: {
    error: { type: Object, default () { return {} } }
  }
}
</script>