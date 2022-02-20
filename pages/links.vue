<template>
  <div class="links" id="page_links">
    <div class="wrapper">
      <h2>Links - 関連リンク</h2>
      <br />
      <h3>SNS＆Blog</h3>
      <a href="https://twitter.com/nekozuki_2525" class="twitter">
        <font-awesome-icon :icon="['fab', 'twitter']" /><span
          >@nekozuki_2525</span
        >
      </a>
      <a href="https://twitter.com/nekozuki_2525" class="twitter">
        <font-awesome-icon :icon="['fab', 'twitter']" /><span
          >@nekozuki_dev</span
        >
      </a>
      <a href="https://blog.nekozuki.me" class="nekolog">
        <font-awesome-icon :icon="['fas', 'blog']" /><span>ねころぐ</span>
      </a>

      <h3 class="mt-5">Publication Product</h3>
      <a href="https://www.nicovideo.jp/user/45048152" class="nicovideo">
        <i class="nico-tvchan"></i><span>user/45048152</span>
      </a>
      <a href="https://github.com/AyumuNekozuki" class="github">
        <font-awesome-icon :icon="['fab', 'github']" /><span
          >AyumuNekozuki</span
        >
      </a>

      <h3 class="mt-5">Other Links</h3>
      <a
        href="https://www.youtube.com/channel/UCD-PH_nLtGqDeEmjspuTVHA"
        class="youtube"
      >
        <font-awesome-icon :icon="['fab', 'youtube']" /><span>YouTube</span>
      </a>
      <a href="https://space.bilibili.com/395580752" class="bilibili">
        <span class="font-weight-bold">bilibili</span><span>nekozuki_2525</span>
      </a>
      <a
        href="https://www.amazon.jp/hz/wishlist/ls/3FW64MQR2N8WH?ref_=wl_share"
        class="amazon"
      >
        <font-awesome-icon :icon="['fab', 'amazon']" /><span>干し芋</span>
      </a>

      <h3 class="mt-5">Game</h3>
      <a href="https://steamcommunity.com/id/ayumunekozuki/" class="steam">
        <font-awesome-icon :icon="['fab', 'steam']" /><span>ayumunekozuki</span>
      </a>
      <a class="switch">
        <span>Nintendo Switch</span><span>SW-16295666-8388</span>
      </a>
      <a class="psn">
        <font-awesome-icon :icon="['fab', 'playstation']" /><span>AyumuNekozuki</span>
      </a>
      <a
        href="https://jp.finalfantasyxiv.com/lodestone/character/37497187/"
        class="ff14"
      >
        <span>FF14</span><span>Yuuna Minazuki (Asura)</span>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  max-width: 500px;
  margin: 20px auto;
}
</style>

<script>
import Meta from "~/mixins/meta";
export default {
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: "Links - 関連リンク",
        description: "ねこづきあゆむの関連リンクです",
        type: "pages",
        url: "https://www.nekozuki.me/links",
      },
    };
  },
};
</script>