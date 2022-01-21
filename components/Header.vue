<template>
  <header class="global_header">
    <h1>nekozuki.me</h1>
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
  background: linear-gradient(white, rgba(250, 250, 250, 0));
  width: 100%;
  border-top: 20px solid #7F7FFF;
  position: sticky;
  top: 0;

  font-family: 'M PLUS Rounded 1c', sans-serif;
  font-weight: 700;

  display: flex;
  justify-content: center;

  z-index: 30;
  height: 60px;

  h1{
    display: none;
  }

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
