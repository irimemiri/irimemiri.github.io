<template>
  <div class="container">
    <div class="key-back">
      <img src="/images/key_top.jpg">
      <!-- <p class="catch">
        <span>どんなにいいサービスも、</span>
        <span>知ってもらわなきゃ届かない。</span>
      </p> -->
    </div>
    <div>
      <section class="about-sect">
        <h2 class="sect-header">このサイトについて</h2>
        <p class="about-dsc">
          本サイトは就職活動用に作成したポートフォリオサイトです。<br>
          私にとってデザインとは「届けること」です。<br>
          いいものやサービスを、必要としている人のところに届ける、そして同時に依頼主の想いを届けることを大事にしたいと思い、
          当サイトのモチーフには紙飛行機を選びました。
        </p>
      </section>
      <section class="policy-sect">
        <h2 class="sect-header">大事にしていること</h2>
        <div class="policy-list">
          <section class="policy-item fadein policy1" v-scroll="handleScroll">
            <h3 class="policy-item-title">サイトの目的設定</h3>
            <p class="policy-item-text">
              どんな人に届けたいか、目的や目標を立てることがサイト制作にもその後の改善を行う際にも役立つと考えています。
            </p>
          </section>
          <section class="policy-item fadein policy2" v-scroll="handleScroll">
            <h3 class="policy-item-title">内部性能・保守性</h3>
            <p class="policy-item-text">
              ローディング時間が長いとユーザーが離れてしまったり、コードが汚いと修正時に工数がかかるため、コーディング時は内部の設計にも気をつけています。
            </p>
          </section>
          <section class="policy-item fadein policy3" v-scroll="handleScroll">
            <h3 class="policy-item-title">ユーザー目線の設計</h3>
            <p class="policy-item-text">
              おしゃれなデザインはもとより、誰にでもわかりやすく誤解のないサイト作りを目指しています。
            </p>
          </section>
        </div>
      </section>
      <section class="works-sect">
        <h2 class="sect-header">最新の制作実績</h2>
        <div v-if="latestWorks.length">
          <swiper :options="swiperOptions" class="works-slider">
            <swiper-slide class="works-card" v-for="lw in latestWorks" :key="lw.slug">
              <nuxt-link class="works-slug" :to="{ name: 'works-slug', params: { slug: lw.slug } }">
                <img :src="lw.image">
              </nuxt-link>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
        <div class="works-link">
          <nuxt-link to="/works">もっと見る→</nuxt-link>
        </div>
      </section>
      <section class="profile-sect">
        <h2 class="sect-header">私について</h2>
        <div class="profile-card fadein" v-scroll="handleScroll">
          <p class="profile-img"><img src="/images/profile.png"></p>
          <div class="profile-text">
            <p class="my-name">irimemiri</p>
            <!-- <a><i class="fab fa-github"></i></a> -->
            <p class="my-comment">絵とロックバンドとスプラトゥーンが好きです。<br>サークル活動がきっかけで広告に興味を持ち、広告系の企業でWebエンジニアとして働いていましたが、2020年の退職を機にデザインを学び始めました。</p>
            <p class="profile-link"><nuxt-link to="/about">詳しく→</nuxt-link></p>
          </div>
        </div>
      </section>
      <div class="contact-bg">
        <section class="contact-sect">
          <h2 class="sect-header">お問い合わせ</h2>
          <div class="contact-gr">
            <p class="contact-dsc">ご質問や本サイトへのご意見・ご感想などお待ちしております。</p>
            <a href="https://forms.gle/KSYc1iwvHBYrxwnd9" class="contact-link"><i class="far fa-envelope"></i>&nbsp;お問い合わせ</a>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style>

* {
  box-sizing: border-box;
}

img {
  vertical-align: middle;
  height: auto;
}

.key-back {
  background-color: #003557;
  position: relative;
  margin-bottom: 150px;
}

.key-back::after {
  box-sizing: border-box;
  display: block;
  content: "";
  position: absolute;
  bottom: -200px;
  left: 0;
  width: 0;
  height: 0;
  border-style: solid; 
  border-width: 200px 0 0 100vw ;
  border-color: #003557 transparent transparent transparent;
  z-index: 1;
}

.key-back .catch {
  position: absolute;
  width: 600px;
  z-index: 100;
  top: 600px;
  right: 10px;
}

.key-back .catch span {
  display: block;
  background: #fff;
  margin-bottom: 10px;
  font-size: 2em;
  line-height: 1.8;
  letter-spacing: .08em;
  /* border: solid 5px #000; */
}

body {
  background-color: #f6f6f6;
  color: #333;
}

.sect-header {
  width: 380px;
  margin-bottom: 45px;
  display: flex;
  align-items: center;
}

.sect-header::before {
  content: "";
  display: block;
  height: 4px;
  width: 80px;
  background-color: #333;
  margin-right: 20px;
}

.contact-bg {
  background-color: #d9dadc;
  padding: 45px;
}

.about-sect, .policy-sect, .works-sect, .profile-sect, .contact-sect {
  width: 980px;
  margin-left: auto;
  margin-right: auto;
}

.about-sect, .policy-sect, .works-sect, .profile-sect {
  margin-bottom: 80px;
}

.about-dsc {
  width: 680px;
  margin-left: 300px;
  line-height: 1.8;
}

.policy-list {
  display: flex;
  justify-content: space-between;
}

.policy-sect .policy-item {
  width: 313px;
  background-color: #fff;
  padding: 18px 32px;
}

.policy-sect .policy-item .policy-item-title {
  text-align: center;
  margin-bottom: 8px;
}

.policy-sect .policy-item .policy-item-text {
  font-size: .9em;
  line-height: 1.9;
}

.works-sect .works-slider {
  width: 580px;
  margin: 0 auto 60px;
}

.works-sect .works-card {
  width: 580px;
  height: 326px; /*temp*/
  overflow: hidden;
  position: relative;
}

.works-sect .works-card .mask {
	width: 140%;	/* 画像の半分の大きさにする */
  height: 100%;
  transform: skewX(-30deg) scale(0, 1);
  transform-origin: left top;
  transition: transform .4s;
  position: absolute;
	top: 0;
	left: 0;
	background-color: rgba(0,0,0,.6);
}

.works-sect .works-card:hover .mask {
  transform: skewX(-30deg) scale(1, 1);
  transform-origin: right top;
  display: flex;
  justify-content: center;
  align-items: center;
}

.works-sect .works-card .mask .caption {
  transform: skewX(30deg);
  color: #fff;
  font-weight: bold;
  opacity: 0;
}

.works-sect .works-card:hover .mask .caption {
  opacity: 1;
}

.works-sect .works-link {
  text-align: right;
}

.works-sect .works-link a {
  text-decoration: none;
  display: inline-block;
  font-size: .8em;
  line-height: 28px;
  padding-right: 20px;
  padding-left: 20px;
  margin-right: 100px;
  border-bottom: solid 1px #000;
}

.works-sect .works-link a:link, .works-sect .works-link a:visited {
  color: #000;
}

.works-sect .works-link a:hover {
  opacity: 0.6;
}

.profile-sect .profile-card {
  width: 780px;
  background-color: #fff;
  padding: 40px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.profile-sect .profile-card .profile-img {
  width: 280px;
  padding-right: 20px;
  padding-left: 20px;
  margin-right: 20px;
}

.profile-sect .profile-card .profile-text {
  width: 480px;
  padding: 28px;
}

.profile-sect .profile-card .my-name {
  font-weight: bold;
  position: static;
}

.profile-sect .profile-card .my-comment {
  font-size: .8em;
  line-height: 1.7;
  margin-bottom: 18px;
}

.profile-sect .profile-card .my-name::after {
  content: "";
  display: block;
  position: relative;
  top: 5px;
  width: 38px;
  height: 2px;
  border-radius: 10px;
  background-color: #000;
  margin-bottom: 28px;
}

.profile-sect .profile-link {
  text-align: right;
}

.profile-sect .profile-link a {
  text-decoration: none;
  font-size: .8em;
  line-height: 28px;
  display: inline-block;
  padding-right: 20px;
  padding-left: 20px;
  border-bottom: solid 1px #000;
}

.profile-sect .profile-link a:link, .profile-sect .profile-link a:visited {
  color: #000;
}

.profile-sect .profile-link a:hover {
  opacity: .6;
}

.contact-sect .contact-gr {
  text-align: center;
}

.contact-sect {
  color: #333;
}

.contact-sect .sect-header:before {
  background-color: #333;
}

.contact-sect .contact-dsc:first-child {
  margin-bottom: 28px;
}

.contact-sect .contact-link {
  display: inline-block;
  padding: 0px 30px;
  background-color: #fff;
  border-radius: 50px;
  line-height: 48px;
  text-decoration: none;
  font-weight: bold;
}

.contact-sect .contact-link:link, .contact-sect .contact-link:visited {
  color: #000;
}

.contact-sect .contact-link:hover {
  opacity: 0.6;
}

/* for fade-in */
.fadein {
  opacity: 0;
  transform: translateY(10px);
  transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
}

.fadein.policy1 {
  transition-delay: 0ms;
}

.fadein.policy2 {
  transition-delay: 500ms;
}

.fadein.policy3 {
  transition-delay: 1000ms;
}

</style>

<script>
export default {
  data() {
    return {
      swiperOptions: {
        loop: true,
        slidePerView: 1,
        speed: 1200,
        autoplay: {
          delay: 5000
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  methods: {
    handleScroll: function(evt, el) {
      // FIXME: スクロールのたびにディレクティブ使った回数だけ計算されてるので重くなる気がする いくつ使おうが1回で住むようにしたい
      let top = el.getBoundingClientRect().top;
      let wHeight = window.innerHeight;
      if ( top < wHeight / 1.5 ) {
        el.setAttribute(
          "style",
          "opacity: 1; transform: translateY(0px)"
        );
      }
    }
  },
  async asyncData ({ $content, params }) {
    const query = await $content('works' || 'index').limit(3)
    const latestWorks = await query.fetch()
    return { latestWorks }
  }
}
</script>
