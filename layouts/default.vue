<template>
  <div class="nuxt_default">
    <Header />
    <div class="body_wrapper">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<style lang="scss">
*{
  box-sizing: border-box;
}
body{
  margin: 0;
  background-color: #7F7FFF;
}

.nuxt_default{
  width: 100%;
  border: 20px solid #7F7FFF;
  background-color: rgba(255, 255, 255, 1);
  background-image: repeating-linear-gradient(-45deg, transparent, transparent 15px, rgba(239, 239, 255, 1) 15px, rgba(239, 239, 255, 1) 30px );
  border-top: 0;
}

.body_wrapper{
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 50px 0;
  background-color: white;
  box-shadow: 0 0 10px #7f7fff;
}
</style>