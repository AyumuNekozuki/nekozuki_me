<template>
  <div class="index">
    <div class="wrapper">
      <section class="about">
        <div class="icon"></div>
        <div class="text">
          <p>ねこづきあゆむのポータルサイトへようこそ！</p>
        </div>
      </section>

      <client-only>
        <section class="contents_list_wrap events">
          <div class="contents_list_header">
            <h2>ピックアップ＆お知らせ</h2>
            <a
              href="https://ayumunekozuki.notion.site/AyumuNekozuki-s-Open-Schedule-4fc70ebaadf64ce6a9571278a895a4bf"
            >
              <font-awesome-icon :icon="['fas', 'calendar']" class="events" />
              予定を見る
            </a>
          </div>
          <div class="contents_list_area events">
            <swiper
              class="events"
              :options="swiperOption_events"
              v-if="eventslist"
            >
              <swiper-slide
                class="item events"
                v-for="data in eventslist.contents"
                :key="data.id"
              >
                <a :href="data.href" :v-data-id="data.id" class="events">
                  <div class="thumb_area">
                    <span class="event">{{ data.category }}</span>
                    <picture>
                      <source
                        v-if="data.thumbnail"
                        :srcset="data.thumbnail.url + '?fm=webp&w=960&h=270'"
                        type="image/webp"
                      />
                      <img
                        class="events"
                        v-if="data.thumbnail"
                        :src="data.thumbnail.url + '?fit=max&w=960&h=540'"
                        :alt="data.title"
                        :srcset="data.thumbnail.url + '?fit=max&w=960&h=540'"
                      />
                    </picture>
                  </div>
                  <div class="title_area">
                    <p class="title">{{ data.title }}</p>
                    <p class="desc" v-if="data.type[0] !== '特になし'">
                      <span v-if="data.type[0] == '締切'">〜</span>
                      {{
                        $dateFns.format(new Date(data.date), "yyyy/MM/dd HH:mm")
                      }}
                      <span v-if="data.type[0] == 'スタート'">〜</span>
                    </p>
                  </div>
                </a>
              </swiper-slide>
            </swiper>
            <div
              slot="button-prev"
              class="swiper-button-prev events"
              v-if="eventslist"
            />
            <div
              slot="button-next"
              class="swiper-button-next events"
              v-if="eventslist"
            />
          </div>
        </section>

        <section class="contents_list_wrap nicovideo">
          <div class="contents_list_header">
            <h2>動画</h2>
            <a href="https://www.nicovideo.jp/user/45048152/video">
              <i class="nico-tvchan"></i>
              もっとみる
            </a>
          </div>
          <div class="contents_list_area nico">
            <swiper
              class="nicovideo"
              :options="swiperOption_nicovideo"
              v-if="newest_nicovideo && newest_nicovideo.meta.status == 200"
            >
              <swiper-slide
                class="item"
                v-for="data in newest_nicovideo.data"
                :key="data.id"
              >
                <a :href="data.object.url">
                  <div class="thumb_area">
                    <span class="video">動画</span>
                    <img
                      :src="data.object.image"
                      :alt="data.object.name"
                      srcset=""
                    />
                  </div>
                  <div class="title_area">
                    <p class="title">{{ data.object.name }}</p>
                    <p class="desc">
                      {{
                        $dateFns.format(
                          new Date(data.updated),
                          "yyyy/MM/dd HH:mm"
                        )
                      }}
                    </p>
                  </div>
                </a>
              </swiper-slide>

              <swiper-slide class="item more" v-if="newest_nicovideo">
                <a href="https://www.nicovideo.jp/user/45048152/video">
                  <i class="nico-tvchan"></i>
                  <p>もっと見る</p>
                </a>
              </swiper-slide>
            </swiper>
            <div
              slot="button-prev"
              class="swiper-button-prev nicovideo"
              v-if="newest_nicovideo && newest_nicovideo.meta.status == 200"
            />
            <div
              slot="button-next"
              class="swiper-button-next nicovideo"
              v-if="newest_nicovideo && newest_nicovideo.meta.status == 200"
            />
            <div
              class="contents_list_area_err"
              v-if="!newest_nicovideo || newest_nicovideo.meta.status !== 200"
            >
              <p>データの取得に失敗しました</p>
            </div>
          </div>
        </section>

        <section class="contents_list_wrap nicolive">
          <div class="contents_list_header">
            <h2>生放送</h2>
            <a
              href="https://www.nicovideo.jp/user/45048152/nicorepo?type=programOnair"
            >
              <i class="nico-namaco"></i>
              もっとみる
            </a>
          </div>
          <div class="contents_list_area nico">
            <swiper
              class="nicolive"
              :options="swiperOption_nicolive"
              v-if="newest_nicolive && newest_nicolive.meta.status == 200"
            >
              <swiper-slide
                class="item"
                v-for="data in newest_nicolive.data"
                :key="data.id"
              >
                <a :href="data.object.url">
                  <div class="thumb_area">
                    <span class="live">生放送</span>
                    <img
                      :src="data.object.image"
                      :alt="data.object.name"
                      srcset=""
                    />
                  </div>
                  <div class="title_area">
                    <p class="title live">{{ data.object.name }}</p>
                    <p class="desc">
                      {{
                        $dateFns.format(
                          new Date(data.updated),
                          "yyyy/MM/dd HH:mm"
                        )
                      }}~
                    </p>
                  </div>
                </a>
              </swiper-slide>
              <swiper-slide class="item more" v-if="newest_nicolive">
                <a
                  href="https://www.nicovideo.jp/user/45048152/nicorepo?type=programOnair"
                >
                  <i class="nico-namaco"></i>
                  <p>もっと見る</p>
                </a>
              </swiper-slide>
            </swiper>
            <div
              slot="button-prev"
              class="swiper-button-prev nicolive"
              v-if="newest_nicolive && newest_nicolive.meta.status == 200"
            />
            <div
              slot="button-next"
              class="swiper-button-next nicolive"
              v-if="newest_nicolive && newest_nicolive.meta.status == 200"
            />
            <div
              class="contents_list_area_err"
              v-if="!newest_nicolive || newest_nicolive.meta.status !== 200"
            >
              <p>データの取得に失敗しました</p>
            </div>
          </div>
        </section>

        <section class="contents_list_wrap blog">
          <div class="contents_list_header">
            <h2>ブログ記事</h2>
            <a href="https://blog.nekozuki.me/">
              <font-awesome-icon :icon="['fas', 'blog']" class="blog" />
              もっとみる
            </a>
          </div>
          <div class="contents_list_area blog">
            <swiper class="blog" :options="swiperOption_blog" v-if="blogdata">
              <swiper-slide
                class="item"
                v-for="data in blogdata.contents"
                :key="data.id"
              >
                <a :href="'https://blog.nekozuki.me/' + data.id">
                  <div class="thumb_area">
                    <span class="blog">記事</span>
                    <picture>
                      <source
                        v-if="data.thumbnail"
                        :srcset="data.thumbnail.url + '?fm=webp&w=480&h=270'"
                        type="image/webp"
                      />
                      <img
                        v-if="data.thumbnail"
                        :src="data.thumbnail.url + '?fit=max&w=480&h=270'"
                        :alt="data.title"
                        :srcset="data.thumbnail.url + '?fit=max&w=480&h=270'"
                      />
                      <img
                        v-if="!data.thumbnail"
                        src="https://blog.nekozuki.me/favicon.png"
                        :alt="data.title"
                        srcset="https://blog.nekozuki.me/favicon.png"
                      />
                    </picture>
                  </div>
                  <div class="title_area">
                    <p class="title live">{{ data.title }}</p>
                    <p class="desc">
                      {{
                        $dateFns.format(
                          new Date(data.publishedAt),
                          "yyyy/MM/dd HH:mm"
                        )
                      }}
                    </p>
                  </div>
                </a>
              </swiper-slide>
              <swiper-slide class="item more" v-if="blogdata">
                <a href="https://blog.nekozuki.me/">
                  <font-awesome-icon :icon="['fas', 'blog']" class="blog" />
                  <p>もっと見る</p>
                </a>
              </swiper-slide>
            </swiper>
            <div slot="button-prev" class="swiper-button-prev blog" />
            <div slot="button-next" class="swiper-button-next blog" />
            <div class="contents_list_area_err" v-if="!blogdata">
              <p>データの取得に失敗しました</p>
            </div>
          </div>
        </section>

        <section class="contents_list_wrap contents">
          <div class="contents_list_header">
            <h2>つくったもの</h2>
            <nuxt-link to="/makes"> もっとみる </nuxt-link>
          </div>
          <div class="contents_list_area contents">
            <swiper
              class="contents"
              :options="swiperOption_contents"
              v-if="makesdata"
            >
              <swiper-slide
                class="item contents"
                v-for="data in makesdata.pickupid"
                :key="data.id"
              >
                <nuxt-link :to="'/makes/' + data.id">
                  <div class="thumb_area">
                    <span class="contents">{{ data.type }}</span>
                    <picture>
                      <source
                        class="contents"
                        v-if="data.thumbnail"
                        :srcset="data.thumbnail.url + '?fm=webp&w=480&h=270'"
                        type="image/webp"
                      />
                      <img
                        class="contents"
                        v-if="data.thumbnail"
                        :src="data.thumbnail.url + '?fit=max&w=480&h=270'"
                        :alt="data.title"
                        :srcset="data.thumbnail.url + '?fit=max&w=480&h=270'"
                      />
                    </picture>
                  </div>
                  <div class="title_area">
                    <p class="title live">{{ data.title }}</p>
                    <p class="desc">
                      {{ data.desc }}
                    </p>
                  </div>
                </nuxt-link>
              </swiper-slide>
              <swiper-slide class="item more" v-if="makesdata">
                <nuxt-link to="/makes">
                  <p>もっと見る</p>
                </nuxt-link>
              </swiper-slide>
            </swiper>
            <div slot="button-prev" class="swiper-button-prev contents" />
            <div slot="button-next" class="swiper-button-next contents" />
            <div class="contents_list_area_err" v-if="!makesdata">
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
  async asyncData({ $axios }) {
    let [eventslist, newest_nicovideo, newest_nicolive, blogdata, makesdata] =
      await Promise.all([
        $axios.$get("/api_mc_nekozukime/v1/schedule"),
        $axios.$get(
          "/api_nicorepo/last-6-months/users/45048152/pc/entries.json?object%5Btype%5D=video&type=upload"
        ),
        $axios.$get(
          "/api_nicorepo/last-6-months/users/45048152/pc/entries.json?object%5Btype%5D=program&type=onair"
        ),
        $axios.$get("/api_mc_nekolog/v1/article"),
        $axios.$get("/api_mc_nekozukime/v1/works_pickup"),
      ]);

    return {
      eventslist,
      newest_nicovideo,
      newest_nicolive,
      blogdata,
      makesdata,
    };
  },
  mixins: [Meta],
  head() {
    return {
      titleTemplate: null,
      title: "nekozuki.me - ねこづきあゆむポータルサイト",
    };
  },
  data() {
    return {
      swiperOption_events: {
        width: 320,
        autoheight: true,
        setWrapperSize: true,
        freeModeSticky: true,
        mousewheel: {
          forceToAxis: true,
        },
        navigation: {
          nextEl: ".swiper-button-next.events",
          prevEl: ".swiper-button-prev.events",
        },
      },
      swiperOption_nicovideo: {
        width: 220,
        autoheight: true,
        setWrapperSize: true,
        edgeSwipeDetection: true,
        mousewheel: {
          forceToAxis: true,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next.nicovideo",
          prevEl: ".swiper-button-prev.nicovideo",
        },
      },
      swiperOption_nicolive: {
        width: 220,
        autoheight: true,
        setWrapperSize: true,
        freeModeSticky: true,
        mousewheel: {
          forceToAxis: true,
        },
        navigation: {
          nextEl: ".swiper-button-next.nicolive",
          prevEl: ".swiper-button-prev.nicolive",
        },
      },
      swiperOption_blog: {
        width: 220,
        autoheight: true,
        setWrapperSize: true,
        freeModeSticky: true,
        mousewheel: {
          forceToAxis: true,
        },
        navigation: {
          nextEl: ".swiper-button-next.blog",
          prevEl: ".swiper-button-prev.blog",
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
};
</script>


<style lang="scss" scoped>
.wrapper {
  max-width: 1280px;
  margin: 0 auto;
}

.about {
  display: flex;
  justify-content: center;
  max-width: 600px;
  width: 100%;
  margin: 1rem auto;

  .icon {
    height: 100px;
    width: 100px;
    background-image: url(~/assets/icons/icon_1000x1000.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    box-shadow: 0 0 3px #7f7fff;
    border-radius: 100%;
  }
  .text {
    font-family: "M PLUS Rounded 1c", sans-serif;
    transform: rotate(0.03deg);
    font-weight: 500;
    margin: 10px 0 10px 2rem;
    padding: 1rem;
    box-shadow: 0 0 3px #7f7fff;
    border-radius: 10px;
    position: relative;
    text-align: center;

    &::before {
      content: "◀︎";
      font-size: 150%;
      position: absolute;
      left: -20px;
      top: 1.5rem;
      color: white;
      text-shadow: 0 0 3px #7f7fff;
    }
  }
}

@media screen and (max-width: 767px) {
  section.about {
    .icon {
      display: none;
    }
    .text {
      margin: 0 5px;
      padding: 10px;
      font-size: 14px;
      p {
        margin: 0;
      }
      &::before {
        display: none;
      }
    }
  }
}
</style>