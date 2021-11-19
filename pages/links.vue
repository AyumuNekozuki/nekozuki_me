<template>
  <div id="page_links">
    <h2>Links</h2>
    <h3>SNS＆Blog</h3>
    <b-button href="https://twitter.com/nekozuki_2525" class="twitter">
      <font-awesome-icon :icon="['fab', 'twitter']" /><span>@nekozuki_2525</span>
    </b-button>
    <b-button href="https://twitter.com/nekozuki_2525" class="twitter">
      <font-awesome-icon :icon="['fab', 'twitter']" /><span>@nekozuki_dev</span>
    </b-button>
    <b-button href="https://friends.cafe/@nekozuki_2525" class="mastodon">
      <font-awesome-icon :icon="['fab', 'mastodon']" /><span>friends.cafe@nekozuki_2525</span>
    </b-button>
    <b-button href="https://blog.nekozuki.me" class="nekolog">
      <font-awesome-icon :icon="['fas', 'blog']" /><span>ねころぐ</span>
    </b-button>

    <h3 class="mt-5">Publication Product</h3>
    <b-button href="https://www.nicovideo.jp/user/45048152" class="nicovideo">
      <i class="icon2-niconico"></i><span>user/45048152</span>
    </b-button>
    <b-button href="https://github.com/AyumuNekozuki" class="github">
      <font-awesome-icon :icon="['fab', 'github']" /><span>AyumuNekozuki</span>
    </b-button>

    <h3 class="mt-5">Other Links</h3>
    <b-button href="https://www.youtube.com/channel/UCD-PH_nLtGqDeEmjspuTVHA" class="youtube">
      <font-awesome-icon :icon="['fab', 'youtube']" /><span>YouTube</span>
    </b-button>
    <b-button href="https://space.bilibili.com/395580752" class="bilibili">
      <span class="font-weight-bold">bilibili</span><span>nekozuki_2525</span>
    </b-button>
    <b-button href="https://ayumunekozuki.fanbox.cc" class="fanbox">
      <span class="font-weight-bold">pixivFANBOX</span><span>ayumunekozuki</span>
    </b-button>
    <b-button href="https://cat-moon.booth.pm" class="booth">
      <span class="font-weight-bold">BOOTH</span><span>ねこづきあゆむのお店</span>
    </b-button>
    <b-button href="https://seed.online/users/100010" class="tso">
      <span>THE SEED ONLINE</span><span>users/100010</span>
    </b-button>
    <b-button href="https://www.amazon.jp/hz/wishlist/ls/3FW64MQR2N8WH?ref_=wl_share" class="amazon">
      <font-awesome-icon :icon="['fab', 'amazon']" /><span>干し芋</span>
    </b-button>

    <h3 class="mt-5">Please Follow Me!</h3>
    <b-button href="https://steamcommunity.com/id/ayumunekozuki/" class="steam">
      <font-awesome-icon :icon="['fab', 'steam']" /><span>ayumunekozuki</span>
    </b-button>
    <b-button href="https://vrchat.com/home/user/usr_62e775f8-64f3-4192-8a3f-7d8d758c10c2" class="vrchat">
      <span>VRChat</span><span>AyumuNekozuki</span>
    </b-button>
    <b-button href="https://room.virtualcast.jp/users/100010" class="tso">
      <span>VirtutalCast</span><span>users/100010</span>
    </b-button>
    <b-button href="https://jp.finalfantasyxiv.com/lodestone/character/37497187/" class="ff14">
      <span>FF14</span><span>Yuuna Minazuki (Asura)</span>
    </b-button>
    <b-button class="switch">
      <span>Nintendo Switch</span><span>SW-16295666-8388</span>
    </b-button>
  </div>
</template>

<script>
import Meta from "~/mixins/meta";
export default {
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: "Links",
        description: "猫月遥歩（ねこづきあゆむ）の関連リンクです",
        type: "pages",
        url: "https://nekozuki.me/links",
      },
    };
  },
}
</script>