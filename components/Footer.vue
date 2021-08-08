<template>
  <footer id="commonFooter" class="justify-content-center p-2">
    <p class="text-center footer_links">
      <nuxt-link to="/policy">Policy</nuxt-link>
      <a href="https://github.com/AyumuNekozuki/nekozuki_me">GitHub</a>
      <span class="cl"><span style="font-family:'Times New Roman', 'Times';">&copy;</span> 2018-2021 AyumuNekozuki</span>
    </p>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss">
footer#commonFooter{
  margin-top: 20px;
  line-height: 2;
  box-shadow: 0px -5px 10px -5px rgba(0,0,0,0.6);
  background-color: rgba(40,44,52,0.5);
  backdrop-filter: none;

  a{
    color: rgba(255, 255, 255, 0.5);
    font-size: 14px;
    &:hover{
      color: rgba(255, 255, 255, 0.75);
      text-decoration: none;
      &:not(:last-of-type)::after{
        color: rgba(255, 255, 255, 0.5);
      }
    }
    &:not(:last-of-type)::after{
      content: " -";
      color: rgba(255, 255, 255, 0.5);
    }
  }
  span.cl{
    display: block;
    color: rgba(255, 255, 255, 0.5);
    font-size: 14px;
  }
}
</style>