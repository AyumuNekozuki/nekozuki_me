<template>
  <nuxt />
</template>
<script>
import Meta from "~/mixins/meta";
export default {
  mixins: [Meta],
  head() {
    return {
      titleTemplate: null,
      title: "ねこづきあゆむのうぇぶさいと",
    };
  },
}
</script>