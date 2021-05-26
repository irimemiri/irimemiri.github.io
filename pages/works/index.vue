<template>
  <div class="works-wrapper">
    <h1 class="page-title"><span class="marker">制作実績</span></h1>
    <ul class="works-type">
      <li class="works-type-item"><a href="#webdesign">Web制作<span class="arrow-bottom"></span></a></li>
      <li class="works-type-item"><a href="#others">印刷物・その他<span class="arrow-bottom"></span></a></li>
    </ul>
    <h2 class="type-title" id="webdesign">Web制作</h2>
    <div v-if="works.length">
      <work-list :works="works" />
    </div>
    <div v-else>
      <p class="no-data">データが見つかりません</p>
    </div>
    <h2 class="type-title" id="others">印刷物・その他</h2>
    <p class="no-data">準備中です</p>
  </div>
</template>

<style scoped>
.works-wrapper {
  width: 76.562%; /* 980/1280 */
  max-width: 980px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 150px;
}

.page-title .marker {
  background: linear-gradient(transparent 60%, #c1e0ff 60%);
}

.page-title {
  margin-bottom: 40px;
}

.works-type {
  list-style-type: none;
  width: 59.183%; /* 580/980 */
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-bottom: 80px;
}

.works-type .works-type-item {
  width: 48.275%; /* 280/580 */
  line-height: 55px;
  text-align: center;
}

.works-type .works-type-item a {
  text-decoration: none;
  display: block;
  font-weight: bold;
  background-color: #003557;
}

.works-type .works-type-item a:link, .works-type .works-type-item a:visited {
  color: #fff;
}

.works-type .works-type-item a:hover {
  opacity: .6;
  color: #fff;
}

.arrow-bottom {
  display: inline-block;
  width: .6em; /* 10px */
  height: .6em; /* 10px */
  margin: 0 10px; /* fixed */
  border-bottom: 2px solid #fff;
  border-right: 2px solid #fff;
  /* 調整 */
  transform: translateY(-3px) rotate(45deg);
}

.type-title {
  text-align: center;
  margin-bottom: 58px;
}

.no-data {
  text-align: center;
  margin-bottom: 100px;
}

/*
  ===========================
  target size:
  375px(750px)x677px(1334px);
  ===========================
*/ 

@media screen and (max-width: 780px) {
  .works-wrapper {
    width: 96%; /* 370/375 edited */
    padding-top: 60px;
  }

  .works-type {
    width: 100%;
  }

  .works-type .works-type-item {
    width: 48.108%; /* 178/370 */
  }
}
</style>

<script>
import WorkList from "~/components/WorkList.vue"

export default {
  components: { WorkList }, //　これいらない？なくても動く
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
