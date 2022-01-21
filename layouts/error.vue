<template>
  <div class="nuxt_error">
    <div class="body_wrapper">

      <div class="wrapper">
        <div class="text_area" v-if="error.statusCode === 404">
          <h2>ページが見つかりませんでした</h2>
          <p>URLに間違いがないかご確認ください。</p>
          <p><nuxt-link to="/"> TOP</nuxt-link></p>
        </div>

        <div class="text_area" v-if="error.statusCode !== 404">
          <h2>エラーが発生しました</h2>
          <p>URLに間違いがないかご確認ください。</p>
          <p><nuxt-link to="/"> TOP</nuxt-link></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"],
};
</script>

<style lang="scss" scoped>
.body_wrapper {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0;
  background-color: white;
  box-shadow: none;
}

.wrapper {
  max-width: 960px;
  margin: 20px auto;
}
</style>