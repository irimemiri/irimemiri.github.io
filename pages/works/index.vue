<template>
  <div class="works-wrapper">
    <h1 class="page-title">制作実績</h1>
    <ul class="works-type">
      <li class="works-type-item"><a href="#webdesign">Webサイト<span class="arrow-bottom"></span></a></li>
      <li class="works-type-item"><a href="#others">ロゴ・バナー<span class="arrow-bottom"></span></a></li>
    </ul>
    <h2 class="type-title" id="webdesign">Webサイト制作</h2>
    <div v-if="works.length">
      <work-list :works="works" />
    </div>
    <div v-else>
      <p>データが見つかりません</p>
    </div>
    <h2 class="type-title" id="others">ロゴ・バナー制作</h2>
  </div>
</template>

<style>
/* とりあえず全体に幅設定 */
.works-wrapper {
  width: 980px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 150px;
}

.page-title {
  margin-bottom: 64px;
}

.works-type {
  list-style-type: none;
  width: 580px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-bottom: 80px;
}

.works-type .works-type-item {
  width: 280px;
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
  width: 10px;
  height: 10px;
  margin: 0 10px;
  border-bottom: 2px solid #fff;
  border-right: 2px solid #fff;
  /* 調整 */
  transform: translateY(-3px) rotate(45deg);
}

.type-title {
  text-align: center;
  margin-bottom: 58px;
}

</style>

<script>
import WorkList from "~/components/WorkList.vue"

export default {
  components: { WorkList }, //　これいらない？なくても動く
  async asyncData ({ $content, params }) {
    const query = await $content('works' || 'index').limit(15)
    const works = await query.fetch()
    return { works }
  }
}
</script>
