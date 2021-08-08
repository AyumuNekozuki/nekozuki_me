<template>
  <div class="mainvisual_area">
    <hooper
      :infiniteScroll="true"
      :centerMode="true"
      :itemsToShow="2.5"
      :autoPlay="true"
      :playSpeed="5000"
    >
      <slide>
        <nuxt-link to="/makes/nicodark">
          <img
            src="~static/img/thumb/extentions/nicodark/nicodark-logo.png"
            alt=""
            srcset=""
          />
        </nuxt-link>
      </slide>
      <slide>
        <nuxt-link to="/makes/nicoadex">
          <img
            src="~static/img/thumb/extentions/nicoadex/nicoadex_logo.png"
            alt=""
            srcset=""
          />
        </nuxt-link>
      </slide>
      <slide>
        <nuxt-link to="/makes/vcnp">
          <img src="~static/img/thumb/web/vcnp/vcnp_ogp.png" alt="" srcset="" />
        </nuxt-link>
      </slide>
      <hooper-navigation slot="hooper-addons"></hooper-navigation>
      <hooper-pagination slot="hooper-addons"></hooper-pagination>
    </hooper>
  </div>
</template>

<script>
import {
  Hooper,
  Slide,
  Pagination as HooperPagination,
  Navigation as HooperNavigation,
} from "hooper";
import "hooper/dist/hooper.css";

export default {
  components: {
    Hooper,
    Slide,
    HooperPagination,
    HooperNavigation,
  }
};
</script>

<style>
</style>