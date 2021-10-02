<template>
  <div id="page_links">
    <h2>Contact</h2>
    <h3>Direct Message</h3>
    <b-button href="https://twitter.com/nekozuki_2525" class="twitter">
      <font-awesome-icon :icon="['fab', 'twitter']" /><span>@nekozuki_2525</span>
    </b-button>
    <b-button href="https://twitter.com/nekozuki_2525" class="twitter">
      <font-awesome-icon :icon="['fab', 'twitter']" /><span>@nekozuki_dev</span>
    </b-button>
    <b-button href="https://friends.cafe/@nekozuki_2525" class="mastodon">
      <font-awesome-icon :icon="['fab', 'mastodon']" /><span>friends.cafe@nekozuki_2525</span>
    </b-button>
    <b-button href="https://discordapp.com/users/305238286581104642" class="discord">
      <font-awesome-icon :icon="['fab', 'discord']" /><span>猫月遥歩（ねこづきあゆむ）#2525</span>
    </b-button>

    <h3 class="mt-5">Mail</h3>
    <b-button href="mailto:ayumu@nekozuki.me" class="mail">
      <font-awesome-icon :icon="['fas', 'envelope']" /><span>ayumu@nekozuki.me</span>
    </b-button>
    <b-button href="mailto:develop@nekozuki.me" class="mail">
      <font-awesome-icon :icon="['fas', 'envelope']" /><span>develop@nekozuki.me</span>
    </b-button>

    <h3 class="mt-5">Forms</h3>
    <b-button href="https://forms.gle/yZtasUR7hZGoCjtK8" class="form">
      <font-awesome-icon :icon="['fas', 'file-alt']" /><span>niconico Darkmode</span>
    </b-button>
    <b-button href="https://forms.gle/iwawNpvK5Rs2qhDHA" class="form">
      <font-awesome-icon :icon="['fas', 'file-alt']" /><span>ニコニ広告ex.</span>
    </b-button>
    <b-button href="https://forms.gle/C5K2Ueia1ar2BDo3A" class="form">
      <font-awesome-icon :icon="['fas', 'file-alt']" /><span>ゆかりんRADIO</span>
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
        title: "Contact",
        description: "猫月遥歩（ねこづきあゆむ）の連絡先です",
        type: "pages",
        url: "https://nekozuki.me/contact",
      },
    };
  },
}
</script>