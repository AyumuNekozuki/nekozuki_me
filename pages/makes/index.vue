<template>
  <div class="makes">
    <div class="wrapper">
      <h2>Makes - つくったもの</h2>
      <client-only>
        <section class="contents_list_wrap pickup">
          <div class="contents_list_header">
            <h3>ピックアップ</h3>
          </div>
          <div class="contents_list_area pickup">
            <swiper
              class="pickup"
              :options="swiperOption_pickup"
              v-if="pickup_datas"
            >
              <swiper-slide
                class="item pickup"
                v-for="data in pickup_datas.pickupid"
                :key="data.id"
              >
                <nuxt-link
                  :to="'/makes/' + data.id"
                  :v-data-id="data.id"
                  class="pickup"
                >
                  <div class="thumb_area">
                    <img
                      class="pickup"
                      v-if="data.thumbnail"
                      :src="data.thumbnail.url + '?fit=max&w=960&h=540'"
                      :alt="data.title"
                      srcset=""
                    />
                  </div>
                  <div class="title_area">
                    <p class="title">{{ data.title }}</p>
                    <p class="desc">{{ data.desc }}</p>
                  </div>
                </nuxt-link>
              </swiper-slide>
            </swiper>
            <div
              slot="button-prev"
              class="swiper-button-prev pickup"
              v-if="pickup_datas"
            />
            <div
              slot="button-next"
              class="swiper-button-next pickup"
              v-if="pickup_datas"
            />
            <div class="contents_list_area_err" v-if="!pickup_datas">
              <p>データの取得に失敗しました</p>
            </div>
          </div>
        </section>

        <section class="contents_list_wrap web">
          <div class="contents_list_header">
            <h3>Webページ／Webアプリ</h3>
          </div>
          <div class="contents_list_area web">
            <swiper class="web" :options="swiperOption_web" v-if="web_datas">
              <swiper-slide
                class="item web"
                v-for="data in web_datas.contents"
                :key="data.id"
              >
                <nuxt-link
                  :to="'/makes/' + data.id"
                  :v-data-id="data.id"
                  class="web"
                >
                  <div class="thumb_area">
                    <img
                      class="web"
                      v-if="data.thumbnail"
                      :src="data.thumbnail.url + '?fit=max&w=960&h=540'"
                      :alt="data.title"
                      srcset=""
                    />
                  </div>
                  <div class="title_area">
                    <p class="title">{{ data.title }}</p>
                    <p class="desc">{{ data.desc }}</p>
                  </div>
                </nuxt-link>
              </swiper-slide>
            </swiper>
            <div
              slot="button-prev"
              class="swiper-button-prev web"
              v-if="web_datas"
            />
            <div
              slot="button-next"
              class="swiper-button-next web"
              v-if="web_datas"
            />
            <div class="contents_list_area_err" v-if="!web_datas">
              <p>データの取得に失敗しました</p>
            </div>
          </div>
        </section>

        <section class="contents_list_wrap extentions">
          <div class="contents_list_header">
            <h3>ブラウザ拡張機能</h3>
          </div>
          <div class="contents_list_area extentions">
            <swiper
              class="extentions"
              :options="swiperOption_extentions"
              v-if="extention_datas"
            >
              <swiper-slide
                class="item extentions"
                v-for="data in extention_datas.contents"
                :key="data.id"
              >
                <nuxt-link
                  :to="'/makes/' + data.id"
                  :v-data-id="data.id"
                  class="extentions"
                >
                  <div class="thumb_area">
                    <img
                      class="extentions"
                      v-if="data.thumbnail"
                      :src="data.thumbnail.url + '?fit=max&w=960&h=540'"
                      :alt="data.title"
                      srcset=""
                    />
                  </div>
                  <div class="title_area">
                    <p class="title">{{ data.title }}</p>
                    <p class="desc">{{ data.desc }}</p>
                  </div>
                </nuxt-link>
              </swiper-slide>
            </swiper>
            <div
              slot="button-prev"
              class="swiper-button-prev extentions"
              v-if="extention_datas"
            />
            <div
              slot="button-next"
              class="swiper-button-next extentions"
              v-if="extention_datas"
            />
            <div class="contents_list_area_err" v-if="!extention_datas">
              <p>データの取得に失敗しました</p>
            </div>
          </div>
        </section>

        <section class="contents_list_wrap contents">
          <div class="contents_list_header">
            <h3>コンテンツ</h3>
          </div>
          <div class="contents_list_area contents">
            <swiper
              class="contents"
              :options="swiperOption_contents"
              v-if="contents_datas"
            >
              <swiper-slide
                class="item contents"
                v-for="data in contents_datas.contents"
                :key="data.id"
              >
                <nuxt-link
                  :to="'/makes/' + data.id"
                  :v-data-id="data.id"
                  class="contents"
                >
                  <div class="thumb_area">
                    <img
                      class="contents"
                      v-if="data.thumbnail"
                      :src="data.thumbnail.url + '?fit=max&w=960&h=540'"
                      :alt="data.title"
                      srcset=""
                    />
                  </div>
                  <div class="title_area">
                    <p class="title">{{ data.title }}</p>
                    <p class="desc">{{ data.desc }}</p>
                  </div>
                </nuxt-link>
              </swiper-slide>
            </swiper>
            <div
              slot="button-prev"
              class="swiper-button-prev contents"
              v-if="contents_datas"
            />
            <div
              slot="button-next"
              class="swiper-button-next contents"
              v-if="contents_datas"
            />
            <div class="contents_list_area_err" v-if="!contents_datas">
              <p>データの取得に失敗しました</p>
            </div>
          </div>
        </section>
      </client-only>
    </div>
  </div>
</template>

<script>
import Meta from "~/mixins/meta";
export default {
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: "Makes - つくったもの",
        description: "つくったもの",
        type: "pages",
        url: "https://nekozuki.me/makes",
      },
      swiperOption_pickup: {
        width: 220,
        autoheight: true,
        setWrapperSize: true,
        freeModeSticky: true,
        mousewheel: {
          forceToAxis: true,
        },
        navigation: {
          nextEl: ".swiper-button-next.pickup",
          prevEl: ".swiper-button-prev.pickup",
        },
      },
      swiperOption_web: {
        width: 220,
        autoheight: true,
        setWrapperSize: true,
        freeModeSticky: true,
        mousewheel: {
          forceToAxis: true,
        },
        navigation: {
          nextEl: ".swiper-button-next.web",
          prevEl: ".swiper-button-prev.web",
        },
      },
      swiperOption_extentions: {
        width: 220,
        autoheight: true,
        setWrapperSize: true,
        freeModeSticky: true,
        mousewheel: {
          forceToAxis: true,
        },
        navigation: {
          nextEl: ".swiper-button-next.extentions",
          prevEl: ".swiper-button-prev.extentions",
        },
      },
      swiperOption_contents: {
        width: 220,
        autoheight: true,
        setWrapperSize: true,
        freeModeSticky: true,
        mousewheel: {
          forceToAxis: true,
        },
        navigation: {
          nextEl: ".swiper-button-next.contents",
          prevEl: ".swiper-button-prev.contents",
        },
      },
    };
  },
  async asyncData({ $axios, params }) {
    let [pickup_datas, extention_datas, web_datas, contents_datas] =
      await Promise.all([
        $axios.$get("/api_mc_nekozukime/v1/works_pickup"),
        $axios.$get(
          "/api_mc_nekozukime/v1/makes?filters=type%5Bequals%5Dextentions&orders=createdAt"
        ),
        $axios.$get(
          "/api_mc_nekozukime/v1/makes?filters=type%5Bequals%5Dweb&orders=createdAt"
        ),
        $axios.$get(
          "/api_mc_nekozukime/v1/makes?filters=type%5Bequals%5Dcontents&orders=createdAt"
        ),
      ]);

    return {
      pickup_datas,
      extention_datas,
      web_datas,
      contents_datas,
    };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 10px;
}

h2 {
  display: inline-block;
  margin: 0 1rem;
  padding: 0.25rem 1.25rem;
  font-family: "M PLUS Rounded 1c", sans-serif;
  transform: rotate(.03deg);
  font-weight: 700;
  background-color: #7f7fff;
  color: white;
  border-radius: 20px;
  position: relative;

  &::before {
    content: url(~assets/svg/ear.svg);
    position: absolute;
    top: -20px;
    height: 20px;
    width: 40px;
  }
  &::after {
    content: url(~assets/svg/tail.svg);
    position: absolute;
    height: 20px;
    width: 30px;
    right: -15px;
    bottom: 12.5px;
  }
}

@media screen and (max-width: 767px) {
  .wrapper{
    padding: 0;
  }

  h2 {
    margin: 10px 10px 0;
    min-width: 70px;
    padding: 0.25rem 20px 0.25rem 10px;
    font-size: 16px;
    &::before {
      top: -10px;
    }
    &::after {
      bottom: 5px;
    }
  }

  section.contents_list_wrap {
    margin: 1rem 0;

    & + .contents_list_wrap {
      margin: 1rem 0;
    }
  }
}
</style>