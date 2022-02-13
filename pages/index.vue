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
  /* TODO */
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
