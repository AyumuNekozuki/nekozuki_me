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
                    <img
                      class="events"
                      v-if="data.thumbnail"
                      :src="data.thumbnail.url + '?fit=max&w=960&h=540'"
                      :alt="data.title"
                      srcset=""
                    />
                    <img
                      class="events"
                      v-if="!data.thumbnail"
                      src="data.thumbnail.url"
                      :alt="data.title"
                      srcset=""
                    />
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
                    <img
                      v-if="data.thumbnail"
                      :src="data.thumbnail.url + '?fit=max&w=960&h=540'"
                      :alt="data.title"
                      srcset=""
                    />
                    <img
                      v-if="!data.thumbnail"
                      src="https://blog.nekozuki.me/favicon.png"
                      :alt="data.title"
                      srcset=""
                    />
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
      </client-only>
    </div>
  </div>
</template>

<script>
import Meta from "~/mixins/meta";
export default {
  async asyncData({ $axios }) {
    let [eventslist, newest_nicovideo, newest_nicolive, blogdata] = await Promise.all([
      $axios.$get("/api_mc_nekozukime/v1/schedule"),
      $axios.$get("/api_nicorepo/last-6-months/users/45048152/pc/entries.json?object%5Btype%5D=video&type=upload"),
      $axios.$get("/api_nicorepo/last-6-months/users/45048152/pc/entries.json?object%5Btype%5D=program&type=onair"),
      $axios.$get("/api_mc_nekolog/v1/article"),
    ])

    return {
      eventslist,
      newest_nicovideo,
      newest_nicolive,
      blogdata,
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
    };
  },
};
</script>


<style lang="scss" scoped>
.wrapper {
  max-width: 1280px;
  margin: 0 auto;
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

    h2 {
      display: inline-block;
      margin: 0;
      padding: 0.25rem 1.25rem;
      font-family: "M PLUS Rounded 1c", sans-serif;
      transform: rotate(.03deg);
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
            object-fit: contain;
            width: 100%;
            height: 100%;
            border-radius: 10px 10px 0 0;
            transition: transform ease 0.1s;

            &.events {
              object-fit: cover;
            }
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

      &.events {
        a {
          width: 300px;
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

.about {
  display: flex;
  justify-content: center;
  max-width: 600px;
  width: 100%;
  margin: 1rem auto;

  .icon {
    height: 100px;
    width: 100px;
    background-image: url(~/assets/svg/icon.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 70%;
    box-shadow: 0 0 3px #7f7fff;
    border-radius: 100%;
  }
  .text {
    font-family: "M PLUS Rounded 1c", sans-serif;
    transform: rotate(.03deg);
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

  section.about{
    .icon{
      display: none;
    }
    .text{
      margin: 0 5px;
      padding: 10px; 
      font-size: 14px;
      p{
        margin: 0;
      }
      &::before{
        display: none;
      }
    }
  }

  section.contents_list_wrap{
    margin: 1rem 0;
    
    &+.contents_list_wrap{
      margin: 1rem 0;
    }

    .contents_list_header{
      margin: 0 10px;
      a{
        display: none;
      }
      h2{
        min-width: 70px;
        padding: 0.25rem 20px 0.25rem 10px;
        font-size: 16px;
        &::before{
          top: -10px;
        }
        &::after{
          bottom: 5px;
        }
      }
    }
    .contents_list_area{
      padding: 0 0 0 10px;

      .swiper-container{
        .item{
          width: 150px !important;

          a{
            .title_area{
              .title{
                font-size: 12px;
              }
            }
          }
        }
      }
      &::after{
        width: 20px;
      }
    }

    [slot="button-prev"], [slot="button-next"]{
      display: none;
    }
  }
}
</style>