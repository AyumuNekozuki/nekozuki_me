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
.contents_list_wrap {
  margin: 1.5rem 0;
  position: relative;

  & + .contents_list_wrap {
    margin: 2.5rem 0;
  }

  .contents_list_header {
    margin: 0 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      display: inline-block;
      margin: 0;
      padding: 0.25rem 1.25rem;
      font-family: "M PLUS Rounded 1c", sans-serif;
      transform: rotate(.03deg);
      font-weight: 700;
      background-color: #7f7fff;
      color: white;
      border-radius: 20px;
      position: relative;
    }
    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      font-family: "M PLUS Rounded 1c", sans-serif;
      transform: rotate(.03deg);
      font-weight: 500;
      color: white;
      background-color: #7f7fff;
      padding: 0.25rem 1.25rem;
      border-radius: 20px;
      z-index: 2;
      transition: box-shadow ease 0.2s;

      i,
      svg {
        margin-right: 5px;

        &.nico-tvchan {
          margin-bottom: 2px;
        }
        &.nico-namaco {
          font-size: 120%;
        }
        &.blog {
          margin-bottom: 2px;
        }
      }

      &:hover {
        box-shadow: 0 0 3px #7f7fff;
      }
    }
  }

  .contents_list_area {
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 0 0 0 35px;

    .swiper-container {
      margin-left: 0;
      margin-right: 0;
    }

    &::after {
      content: "";
      display: block;
      height: 100%;
      right: 0;
      position: absolute;
      top: 0;
      width: 100px;
      z-index: 1;
      background: linear-gradient(90deg, rgba(250, 250, 250, 0), white);
    }

    .item {
      display: flex;
      padding: 10px;

      a {
        border-radius: 10px;
        width: 200px;
        box-shadow: 0 0 3px #7f7fff;
        display: flex;
        flex-direction: column;
        text-decoration: none;

        .thumb_area {
          aspect-ratio: 16 / 9;
          width: 100%;
          height: auto;
          position: relative;
          overflow: hidden;
          border-radius: 10px 10px 0 0;
          background-color: #efefff;

          span {
            position: absolute;
            font-size: 10px;
            margin: 0.5em;
            padding: 0 0.25em;
            border-radius: 3px;
            z-index: 2;

            &.video {
              background-color: #252525;
              color: #fafafa;
            }
            &.live {
              background-color: #f03;
              color: #fafafa;
            }
            &.event {
              background-color: orangered;
              color: #fafafa;
            }
            &.blog {
              background-color: #7f7fff;
              color: #fafafa;
            }
          }
          img {
            object-fit: cover;
            width: 100%;
            height: 100%;
            border-radius: 10px 10px 0 0;
            transition: transform ease 0.1s;
          }
        }

        .title_area {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          justify-content: space-between;
          padding: 0.5rem;

          .title {
            font-family: "M PLUS Rounded 1c", sans-serif;
            transform: rotate(.03deg);
            margin: 0;
            font-size: 14px;
            color: #333;
            margin-bottom: 0.25rem;
            font-weight: 500;

            display: -webkit-box;
            overflow: hidden;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          .desc {
            font-size: 11px;
            margin-bottom: 0;
            color: #333;
            margin-top: 0;
          }
        }

        &:hover {
          .thumb_area {
            img {
              transform: scale(110%);
            }
          }
        }
      }

      &.more {
        a {
          display: flex;
          justify-content: center;
          align-items: center;
          color: #252525;

          * {
            transition: transform ease 0.1s;
          }

          i.nico-namaco {
            font-size: 50px;
          }
          i.nico-tvchan {
            font-size: 40px;
          }
          svg.events,
          svg.blog {
            font-size: 35px;
          }

          p {
            font-family: "M PLUS Rounded 1c", sans-serif;
            transform: rotate(.03deg);
            font-weight: 700;
            margin: 0.5rem;
            font-size: 20px;
          }

          &:hover {
            * {
              transform: scale(110%);
            }
          }
        }
      }
    }

    .swiper-button-prev,
    .swiper-button-next {
      color: #7f7fff;
    }

    .contents_list_area_err {
      width: 90%;
      margin: 0 auto;

      p {
        box-shadow: 0 0 3px #7f7fff;
        width: 100%;
        margin: 0.5rem;
        padding: 2rem 0.5rem;
        text-align: center;
        border-radius: 10px;
        font-family: "M PLUS Rounded 1c", sans-serif;
        transform: rotate(.03deg);
        font-weight: 700;
        background-color: #efefff;
      }
    }
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

    .contents_list_header {
      margin: 0 10px;
      a {
        display: none;
      }
      h3 {
        min-width: 70px;
        padding: 0.25rem 20px 0.25rem 10px;
        font-size: 16px;
      }
    }
    .contents_list_area {
      padding: 0 0 0 10px;

      .swiper-container {
        .item {
          width: 150px !important;

          a {
            .title_area {
              .title {
                font-size: 12px;
              }
            }
          }
        }
      }
      &::after {
        width: 20px;
      }
    }

    [slot="button-prev"],
    [slot="button-next"] {
      display: none;
    }
  }
}
</style>