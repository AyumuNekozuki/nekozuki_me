<template>
    <div id="page_about" class="text_pages">
    <article>
      <div class="article_thumb">
        <img src="~static/img/thumb/nekozuki.png" alt="" srcset="">
      </div>
      <div class="text_area">
        <h2>『ねこづきあゆむのうぇぶさいと』関連情報</h2>
        <h3 style="margin-top:0;">このサイトについて</h3>
        <p>当サイトは、猫月遥歩（ねこづきあゆむ）のポートフォリオ的なものです。猫月遥歩（ねこづきあゆむ）が何者なのかまとめています。猫月遥歩（ねこづきあゆむ）本人については <a href="/about">こちら</a> のページを御覧ください。</p>
        <p>当サイトに掲載されている情報は、 <a href="https://creativecommons.org/licenses/by-nd/4.0/deed.ja" target="_blank" rel="noopener noreferrer">CC BY-ND 4.0</a> で利用可能です。</p>

        <h3>当サイトの構成</h3>
        <p>詳細は <a href="/makes/nekozuki_portal">こちら</a> のページを御覧ください。</p>

        <h3>免責事項</h3>
        <h4>当サイトの情報の正確性について</h4>
        <p>当サイトのコンテンツや情報において、可能な限り正確な情報を掲載するよう努めています。しかし、誤情報が入り込んだり、情報が古くなったりすることもあります。必ずしも正確性を保証するものではありません。また合法性や安全性なども保証しません。</p>
        <h4>損害等の責任について</h4>
        <p>当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますので、ご了承ください。 また当サイトからリンクやバナーなどによって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について一切の責任も負いません。</p>
        <p>当サイトの保守、火災、停電、その他の自然災害、ウィルスや第三者の妨害等行為による不可抗力によって、当サイトによるサービスが停止したことに起因して利用者に生じた損害についても、何ら責任を負うものではありません。</p>
        <p>当サイトを利用する場合は、自己責任で行う必要があります。</p>
        <h4>画像の著作権や肖像権等について</h4>
        <p>当サイトで掲載している画像の著作権や肖像権等は、各権利所有者に帰属します。万が一問題がある場合は、以下お問い合わせよりご連絡いただけますよう宜しくお願い致します。</p>
        <h4>問い合わせ先</h4>
        <p>猫月遥歩（ねこづきあゆむ）</p>
        <p>メール: <a href="mailto:ayumu@nekozuki.me">ayumu@nekozuki.me</a></p>
        <p>TwitterDM: <a href="https://twitter.com/nekozuki_2525">@nekozuki_2525</a></p>
      </div>
    </article>
  </div>
</template>

<script>
import Meta from "~/mixins/meta";
export default {
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: "Policy",
        description: "当ウェブサイトのポリシーです",
        type: "pages",
        url: "https://nekozuki.me/policy",
      },
    };
  },
}
</script>