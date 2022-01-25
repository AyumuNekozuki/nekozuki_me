<template>
  <header class="global_header">
    <h1>nekozuki.me</h1>
    <nav class="wrap">
      <nuxt-link class="to_about" @click.native="sp_hidewrap" to="/about"
        >About</nuxt-link
      >
      <nuxt-link class="to_makes" @click.native="sp_hidewrap" to="/makes"
        >Makes</nuxt-link
      >
      <nuxt-link class="to_top" @click.native="sp_hidewrap" to="/"
        >nekozuki.me</nuxt-link
      >
      <nuxt-link class="to_links" @click.native="sp_hidewrap" to="/links"
        >Links</nuxt-link
      >
      <nuxt-link class="to_contact" @click.native="sp_hidewrap" to="/contact"
        >Contact</nuxt-link
      >
    </nav>
    <button @click="sp_openmenu">
      <font-awesome-icon :icon="['fas', 'bars']" />
    </button>
  </header>
</template>

<style lang="scss" scoped>
.global_header {
  background: linear-gradient(white, rgba(250, 250, 250, 0));
  width: 100%;
  border-top: 20px solid #7f7fff;
  position: sticky;
  top: 0;

  font-family: "M PLUS Rounded 1c", sans-serif;
  font-weight: 700;

  display: flex;
  justify-content: center;

  z-index: 30;

  h1 {
    display: none;
  }

  .wrap {
    display: flex;
    position: fixed;
    top: 0;
    justify-content: space-around;

    max-width: 900px;
    width: 100%;
    background-color: #7f7fff;
    color: white;

    padding: 0.5rem;
    font-size: 20px;
    border-radius: 0 0 5px 5px;

    a {
      color: white;
      text-decoration: none;
      padding: 0 0.5rem;
    }
  }
}

@media screen and (min-width: 767px) {
  .global_header {
    button {
      display: none;
    }
  }
}
@media screen and (max-width: 767px) {
  .global_header {
    margin: 0;
    border: none;
    background: #7f7fff;
    padding: 10px 0;

    h1 {
      display: block;
      margin: 0;
      color: white;
      z-index: 501;
      font-size: 22px;
    }

    button {
      display: block;
      background: none;
      color: white;
      border: none;
      position: absolute;
      top: 0;
      right: 0;
      height: 53px;
      font-size: 22px;
      z-index: 501;
    }

    .wrap {
      z-index: 500;
      display: none;
      height: 100vh;
      width: 100vw;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      a {
        margin: 0.5rem;
        font-size: 28px;
      }

      &.fadeIn,
      &.fadeOut {
        display: flex !important;
      }
    }
  }
}
</style>

<script>
export default {
  methods: {
    sp_openmenu() {
      document.querySelector(".global_header .wrap").classList.toggle("fadeIn");
      document.querySelector(".global_header .wrap").classList.add("spmode");
    },
    sp_hidewrap() {
      if (
        document
          .querySelector(".global_header .wrap")
          .classList.contains("spmode")
      ) {
        document
          .querySelector(".global_header .wrap")
          .classList.remove("fadeIn");
        document.querySelector(".global_header .wrap").classList.add("fadeOut");
        setTimeout(() => {
          document
            .querySelector(".global_header .wrap")
            .classList.remove("fadeOut");
        }, 300);
      }
    },
  },
};
</script>