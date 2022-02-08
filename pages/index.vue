<template>
  <div class="container">
    <div v-if="works.length">
      <work-list :works="works" />
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

.sect-header {
  width: 100%;
  margin-bottom: 45px;
  display: flex;
  align-items: center;
}

.sect-header::before {
  content: "";
  display: block;
  height: 4px;
  width: 8.163%; /* 80/980 */
  background-color: #333;
  margin-right: 20px;
}

.contact-bg {
  background-color: #d9dadc;
  padding: 45px;
}

.about-sect, .policy-sect, .works-sect, .profile-sect, .contact-sect {
  width: 76.562%; /* 980/1280 */
  max-width: 980px;
  margin-left: auto;
  margin-right: auto;
}

.about-sect, .policy-sect, .works-sect, .profile-sect {
  margin-bottom: 80px;
}

.about-sect .about-dsc {
  width: 69.387%; /* 680/980 */
  margin-left: 30.612%; /* 300/980 */
  line-height: 1.8;
}

.policy-sect .policy-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.policy-sect .policy-item {
  width: 31.938%; /* 313/980 */
  background-color: #fff;
  padding: 18px 3.265%; /* 32/980 */
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
  width: 59.183%; /* 580/980 */
  margin: 0 auto 60px;
}

.works-sect .works-card {
  width: 100%; /* ~~580/980~~ 980/980 */
  height: auto; /* 326px */
  overflow: hidden;
  position: relative;
}

/* .works-sect .works-card .mask {
	width: 140%;
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
} */

/* .works-sect .works-card:hover .mask .caption {
  opacity: 1;
} */

.works-sect .works-link {
  text-align: right;
}

.works-sect .works-link a {
  text-decoration: none;
  display: inline-block;
  font-size: .8em;
  line-height: 28px;
  padding-right: 20px; /*fixed*/
  padding-left: 20px; /*fixed*/
  margin-right: 10.204%; /* 100/980 */
  border-bottom: solid 1px #333;
}

.works-sect .works-link a:link, .works-sect .works-link a:visited {
  color: #333;
}

.works-sect .works-link a:hover {
  opacity: 0.6;
}

.profile-sect .profile-card {
  width: 79.591%; /* 780/980 */
  background-color: #fff;
  padding: 5.128%; /* 40/780 */
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.profile-sect .profile-card .profile-img {
  width: 35.897%; /* 280/780 */
  /* TODO: なんか変なので計算し直す */
  /*padding-right: 20px; /* 20/280 */
  /*padding-left: 20px; /* 20/280 */
  margin-right: 2.564%; /* 20/780 */
  border-radius: 50%;
  border: solid 4px #ddd;
}

.profile-sect .profile-card .profile-text {
  width: 61.538%; /* 480/780 */
  padding: 28px 5.833% /* 28/480 */;
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
  width: 7.916%; /* 38/480 */
  height: 2px;
  border-radius: 10px;
  background-color: #333;
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
  border-bottom: solid 1px #333;
}

.profile-sect .profile-link a:link, .profile-sect .profile-link a:visited {
  color: #333;
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
  box-shadow: 0 0 10px #ccc;
}

.contact-sect .contact-link:link, .contact-sect .contact-link:visited {
  color: #333;
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

@keyframes text-in {
  0% {
    transform: translate(0, -20px);
    opacity: 0;
  }
}
.item {
  display: inline-block;
  min-width: 0.3em;
  font-size: 2rem;
  animation: text-in .8s cubic-bezier(0.22, 0.15, 0.25, 1.43) 0s backwards;
}

/*
  ===========================
  target size:
  375px(750px)x677px(1334px);
  ===========================
*/ 

@media screen and (max-width: 780px) {
  .site-title {
    /* FIXME: 位置崩れやすい */
    width: 96%; /* 370/375 edited */
    bottom: 40px;
    right: auto;
    left: auto;
    text-align: center;
  }
  /* wrapper */
  .about-sect, .policy-sect, .works-sect, .profile-sect, .contact-sect {
    width: 96%; /* 370/375 edited */
  }

  .about-sect .about-dsc {
    width: 100%;
    margin-left: 0; /*ちゃんと計算する*/
  }

  .policy-sect .policy-list {
    justify-content: center;
  }

  .policy-sect .policy-item {
    width: 96%; /* 370/375 edited */
    background-color: #fff;
    padding: 18px 8.648%; /* 32/370 */
    margin-bottom: 20px;
  }

  .policy-sect .policy-item:last-child {
    margin-bottom: 0px;
  }

  .works-sect .works-slider {
    width: 96%; /* 370/375 edited */
  }

  .works-sect .works-card {
    width: 96%; /* 370/375 edited */
    height: auto;
  }

  .works-sect .works-link a {
    padding-right: 20px; /* fixed */
    margin-right: 2.702%; /* 10/370 */
  }


  .profile-sect .profile-card {
    width: 80%; /* 370/370 edited */
    padding: 20px 0.02%; /* 10/370 edited */
    display: block;
  }

  .profile-sect .profile-card .profile-img {
    width: 140px;
    padding: 0;
    margin: 0 auto 10px;
    border-radius: 50%;
    /* border: solid 4px #ddd; */
  }

  .profile-sect .profile-card .my-name {
    text-align: center;
  }

  .profile-sect .profile-card .my-name::after {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }

  .profile-sect .profile-card .profile-text {
    width: 91.891%; /* 340/370 */
    padding: 10px 2%;
    margin-right: auto;
    margin-left: auto;
  }
}
</style>

<script>
import WorkList from "~/components/WorkList.vue"

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
      },
      text: "irimemiri's web portfolio"
    }
  },
  methods: {
    handleScroll: function(evt, el) {
      // FIXME: スクロールのたびにディレクティブ使った回数だけ計算されてるので重くなる気がする いくつ使おうが1回で済むようにしたい
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
    const query = await $content('works' || 'index').limit(15)
    const allWorks = await query.fetch()
    const works = allWorks.sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    });
    return { works }
  }
}
</script>
