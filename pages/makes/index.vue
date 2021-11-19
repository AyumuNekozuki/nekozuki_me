<template>
  <div id="page_makes">
    <main>
      <!--<Mainvisual />-->
      <div class="parts_area">
        <section id="pickup" class="makes_pickup_contents">
          <h3>ピックアップ</h3>
          <div class="contents_list_area">
            <div
              class="item"
              v-if="pickup_datas" 
              v-for="data in pickup_datas.pickupid"
              :key="data"
            >
              <a :href="'/makes/' + data.id">
                <div class="thumb_area">
                  <img :src="data.thumbnail.url" alt="" srcset="" />
                </div>
                <div class="title_area">
                  <p class="title">{{ data.title }}</p>
                  <p class="desc">{{ data.desc }}</p>
                </div>
              </a>
            </div>
            <div
              class="contents_list_area_err"
              v-if="!pickup_datas"
            >
              <p>データの取得に失敗しました</p>
            </div>
          </div>
        </section>
        <section id="web" class="makes_pickup_contents">
          <h3>Webページ／Webアプリ</h3>
          <div class="contents_list_area">
            <div
              class="item" v-if="web_datas"
              v-for="data in web_datas.contents"
              :key="data"
            >
              <a :href="'/makes/' + data.id">
                <div class="thumb_area">
                  <img :src="data.thumbnail.url" alt="" srcset="" />
                </div>
                <div class="title_area">
                  <p class="title">{{ data.title }}</p>
                  <p class="desc">{{ data.desc }}</p>
                </div>
              </a>
            </div>
            <div
              class="contents_list_area_err"
              v-if="!web_datas"
            >
              <p>データの取得に失敗しました</p>
            </div>
          </div>
        </section>
        <section id="extentions" class="makes_pickup_contents">
          <h3>ブラウザ拡張機能</h3>
          <div class="contents_list_area">
            <div
              class="item" v-if="extention_datas"
              v-for="data in extention_datas.contents"
              :key="data"
            >
              <a :href="'/makes/' + data.id">
                <div class="thumb_area">
                  <img :src="data.thumbnail.url" alt="" srcset="" />
                </div>
                <div class="title_area">
                  <p class="title">{{ data.title }}</p>
                  <p class="desc">{{ data.desc }}</p>
                </div>
              </a>
            </div>
            <div
              class="contents_list_area_err"
              v-if="!extention_datas"
            >
              <p>データの取得に失敗しました</p>
            </div>
          </div>
        </section>
        <section id="contents" class="makes_pickup_contents">
          <h3>コンテンツ</h3>
          <div class="contents_list_area">
            <div
              class="item" v-if="contents_datas"
              v-for="data in contents_datas.contents"
              :key="data"
            >
              <a :href="'/makes/' + data.id">
                <div class="thumb_area">
                  <img :src="data.thumbnail.url" alt="" srcset="" />
                </div>
                <div class="title_area">
                  <p class="title">{{ data.title }}</p>
                  <p class="desc">{{ data.desc }}</p>
                </div>
              </a>
            </div>
            <div
              class="contents_list_area_err"
              v-if="!contents_datas"
            >
              <p>データの取得に失敗しました</p>
            </div>
          </div>
        </section>
        <section id="solid" class="makes_pickup_contents">
          <h3>3Dアイテム／3Dコンテンツ</h3>
          <div class="contents_list_area">
            <div
              class="item" v-if="solid_datas"
              v-for="data in solid_datas.contents"
              :key="data"
            >
              <a :href="'/makes/' + data.id">
                <div class="thumb_area">
                  <img :src="data.thumbnail.url" alt="" srcset="" />
                </div>
                <div class="title_area">
                  <p class="title">{{ data.title }}</p>
                  <p class="desc">{{ data.desc }}</p>
                </div>
              </a>
            </div>
            <div
              class="contents_list_area_err"
              v-if="!solid_datas"
            >
              <p>データの取得に失敗しました</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import Meta from "~/mixins/meta";

let trycount = 0;

export default {
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: "Makes",
        description: "ねこづきあゆむの制作物",
        type: "pages",
        url: "https://nekozuki.me/makes",
      },
    };
  },
  async asyncData({ $microcms, params }) {
    let pickup_datas = await $microcms.get({
      endpoint: "works_pickup",
      queries: {orders: 'createdAt'}
    });

    let extention_datas = await $microcms.get({
      endpoint: "makes",
      queries: {
        filters: 'type[equals]extentions',
        orders: 'createdAt'
      },
    });

    let web_datas = await $microcms.get({
      endpoint: "makes",
      queries: {filters: 'type[equals]web', orders: 'createdAt'}
    });

    let contents_datas = await $microcms.get({
      endpoint: "makes",
      queries: {filters: 'type[equals]contents', orders: 'createdAt'}
    });

    let solid_datas = await $microcms.get({
      endpoint: "makes",
      queries: {filters: 'type[equals]solid', orders: 'createdAt'}
    });

    trycount = 1;

    console.log(pickup_datas);
    console.log(extention_datas);


    return {
      pickup_datas,
      extention_datas,
      web_datas,
      contents_datas,
      solid_datas
    }
  }
}

</script>