<template>
  <header class="global_header">
    <nav class="wrap">
      <nuxt-link to="/about">About</nuxt-link>
      <nuxt-link to="/makes">Makes</nuxt-link>
      <nuxt-link to="/">nekozuki.me</nuxt-link>
      <nuxt-link to="/links">Links</nuxt-link>
      <nuxt-link to="/contact">Contact</nuxt-link>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.global_header{
  width: 100%;
  border-top: 20px solid #7F7FFF;
  position: sticky;
  top: 0;

  font-family: 'M PLUS Rounded 1c', sans-serif;
  font-weight: 700;

  display: flex;
  justify-content: center;

  z-index: 30;
  height: 50px;

  .wrap{
    display: flex;
    position: fixed;
    top: 0;
    justify-content: space-around;

    max-width: 900px;
    width: 100%;
    background-color: #7F7FFF;
    color: white;

    padding: .5rem;
    font-size: 20px;
    border-radius: 0 0 5px 5px;

    a{
      color: white;
      text-decoration: none;
    }

  }
}
</style>
