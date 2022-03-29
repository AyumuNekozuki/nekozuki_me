<template>
  <div class="about">
    <div class="wrapper">
      <div class="text_area">
        <h2>About - ねこづきあゆむとは</h2>
        <p>
          重度のニコ厨。2021年4月現在、専門学生。将来のためにWeb方面を中心にプログラミングなどを勉強中。将来はドワンゴに入社してニコニコに携わりたいと思っている。
        </p>
        <p>
          好きなものはスイーツとガジェット。嫌いなものは辛い/苦いものと生き物。趣味でVOICEROIDを利用した動画を投稿したり生放送をしたりしている。
        </p>

        <h3>活動</h3>
        <p>
          Webページ・Webアプリ制作、ブラウザ拡張機能の制作をはじめ、動画制作、生配信、コンテンツ制作など、多岐にわたって活動を行っています。
        </p>

        <h3>合格・受賞歴</h3>
        <table>
          <thead>
            <tr>
              <th>受賞年月</th>
              <th>内容</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2019/03</td>
              <td>ニコニコ大百科より「百ッカデミー賞」受賞</td>
            </tr>
            <tr>
              <td>2020/06</td>
              <td>ニコニコ大百科より「百ッカデミー賞2020」受賞</td>
            </tr>
            <tr>
              <td>2020/10</td>
              <td>「N予備校 動くWebページコンテスト2020夏」にて『シベリア送り』が「N高部門 優秀賞」受賞</td>
            </tr>
            <tr>
              <td>2021/03</td>
              <td>ニコニコ大百科より「百ッカデミー賞2021」受賞</td>
            </tr>
            <tr>
              <td>2021/04</td>
              <td>「The VOCALOID Collection -2021 Spring-」にてREMIXランキング 11位ランクイン</td>
            </tr>
            <tr>
              <td>2021/08</td>
              <td>CG-ARTS Webデザイナー検定 ベーシック　合格</td>
            </tr>
            <tr>
              <td>2021/10</td>
              <td>「ニコニコ動画プレミアムアワード2021秋」1次ノミネート</td>
            </tr>
            <tr>
              <td>2021/10</td>
              <td>某都内専門学校「美しいWEBデザイン学内コンペ」にて「独創力賞」受賞</td>
            </tr>
            <tr>
              <td>2021/12</td>
              <td>CG-ARTS Webデザイナー検定 エキスパート　合格</td>
            </tr>
            <tr>
              <td>2022/03</td>
              <td>「ニコニコ動画プレミアムアワード2022春」1次ノミネート</td>
            </tr>
            <tr>
              <td>2022/03</td>
              <td>「ニコニコ動画プレミアムアワード2022春」1次ノミネート</td>
            </tr>
          </tbody>
        </table>

        <h3>経歴</h3>
        <table>
          <thead>
            <tr>
              <th>年月</th>
              <th>内容</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2002/09</td>
              <td>鹿児島県で生まれる</td>
            </tr>
            <tr>
              <td>小4</td>
              <td>プログラミングに興味を持つ</td>
            </tr>
            <tr>
              <td>2016/10</td>
              <td>中学校で生徒会長に就任</td>
            </tr>
            <tr>
              <td>2017/02</td>
              <td>ニコニコ生放送で生配信を始める</td>
            </tr>
            <tr>
              <td>2017/12</td>
              <td>ニコニコ大百科で記事編集を始める</td>
            </tr>
            <tr>
              <td>2018/03</td>
              <td>初めて動画を投稿する（初投稿動画は現在非公開）</td>
            </tr>
            <tr>
              <td>2018/04</td>
              <td>鹿児島県内の全日制高校に入学するも、鬱で不登校に</td>
            </tr>
            <tr>
              <td>2019/04</td>
              <td>角川ドワンゴ学園 N高等学校 に転入学</td>
            </tr>
            <tr>
              <td>2020/08</td>
              <td>ニコニコをダークモード化する拡張機能「niconico Darkmode」リリース</td>
            </tr>
            <tr>
              <td>2020/10</td>
              <td>「niconico Darkmode」の紹介動画がバズる</td>
            </tr>
            <tr>
              <td>2021/04</td>
              <td>N高等学校を卒業、東京都内の専門学校に入学</td>
            </tr>
            <tr>
              <td>2021/12</td>
              <td>「niconico Darkmode」ユーザー１万人突破</td>
            </tr>
            <tr>
              <td></td>
              <td>現在、東京都内の専門学校に通学中。</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  max-width: 960px;
  margin: 20px auto;
}
</style>

<script>
import Meta from "~/mixins/meta";
export default {
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: "About - ねこづきあゆむとは",
        description: "ねこづきあゆむとは",
        type: "pages",
        url: "https://www.nekozuki.me/about",
      },
    };
  },
}
</script>