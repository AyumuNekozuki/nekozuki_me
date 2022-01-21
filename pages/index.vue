<template>
  <div class="index">
    <div class="wrapper">
      <section class="about"></section>

      <client-only>
        <section class="contents_list_wrap events">
          <div class="contents_list_header">
            <h2>スケジュールピックアップ</h2>
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
                :key="data"
              >
                <a :href="data.href" class="events">
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
                    <p class="desc">
                      {{
                        $dateFns.format(
                          new Date(data.date),
                          "yyyy/MM/dd HH:mm"
                        )
                      }}~
                    </p>
                  </div>
                </a>
              </swiper-slide>

              <swiper-slide class="item more" v-if="eventslist">
                <a href="https://ayumunekozuki.notion.site/AyumuNekozuki-s-Open-Schedule-4fc70ebaadf64ce6a9571278a895a4bf">
                  <font-awesome-icon :icon="['fas', 'calendar']" class="events" />
                  <p>予定を見る</p>
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
          <div class="contents_list_area nico">
            <swiper
              class="nicovideo"
              :options="swiperOption_nicovideo"
              v-if="newest_nicovideo"
            >
              <swiper-slide
                class="item"
                v-for="data in newest_nicovideo.data"
                :key="data"
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
              v-if="newest_nicovideo"
            />
            <div
              slot="button-next"
              class="swiper-button-next nicovideo"
              v-if="newest_nicovideo"
            />
            <div class="contents_list_area_err" v-if="!newest_nicovideo">
              <p>データの取得に失敗しました</p>
            </div>
          </div>
        </section>

        <section class="contents_list_wrap nicolive">
          <div class="contents_list_area nico">
            <swiper
              class="nicolive"
              :options="swiperOption_nicolive"
              v-if="newest_nicolive"
            >
              <swiper-slide
                class="item"
                v-for="data in newest_nicolive.data"
                :key="data"
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
            <div slot="button-prev" class="swiper-button-prev nicolive" />
            <div slot="button-next" class="swiper-button-next nicolive" />
            <div class="contents_list_area_err" v-if="!newest_nicolive">
              <p>データの取得に失敗しました</p>
            </div>
          </div>
        </section>
      </client-only>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, $microcms }) {
    let yesterday_date = new Date();
    yesterday_date.setDate(yesterday_date.getDate() - 1);
    let eventslist = await $microcms.get({
      endpoint: "schedule",
      queries: {
        orders: "date",
        filters: "date[greater_than]" + yesterday_date.toISOString(),
      },
    });

    let newest_nicovideo = await $axios.$get(
      "https://public.api.nicovideo.jp/v1/timelines/nicorepo/last-6-months/users/45048152/pc/entries.json?object%5Btype%5D=video&type=upload"
    );

    let newest_nicolive = await $axios.$get(
      "https://public.api.nicovideo.jp/v1/timelines/nicorepo/last-6-months/users/45048152/pc/entries.json?object%5Btype%5D=program&type=onair"
    );

    return {
      eventslist,
      newest_nicovideo,
      newest_nicolive,
    };
  },
  data() {
    return {
      swiperOption_events: {
        width: 220,
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
  position: relative;

  .contents_list_header{
    margin: 0 30px;
    h2{
      display: inline-block;
      margin: 0;
      padding: .25rem 1rem;
      font-family: "M PLUS Rounded 1c", sans-serif;
      font-weight: 700;
      background-color: #7f7fff;
      color: white;
      border-radius: 20px;
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
          svg.events {
            font-size: 35px;
          }

          p {
            font-family: "M PLUS Rounded 1c", sans-serif;
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
      display: flex;

      p {
        box-shadow: 0 0 3px #7f7fff;
        width: 500px;
        margin: 0.5rem;
        padding: 2rem 0.5rem;
        text-align: center;
        border-radius: 10px;
        font-family: "M PLUS Rounded 1c", sans-serif;
        font-weight: 700;
        background-color: #efefff;
      }
    }
  }
}
</style>