<template>
  <div class="blog-wrapper">
    <h1 class="page-title">ブログ</h1>
    <div v-if="posts.length">
      <card-list :posts="posts" />
    </div>
    <div v-else>
      <p class="no-content">記事がありません</p>
    </div>
  </div>
</template>
<style>
/* とりあえず全体に幅設定 */
.blog-wrapper {
  width: 980px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 150px;
}
</style>
<script>
import CardList from "~/components/CardList.vue"

export default {
  components: { CardList }, //　これいらない？なくても動く
  async asyncData ({ $content, params }) {
    const query = await $content('blog' || 'index').limit(15)
    const posts = await query.fetch()
    return { posts }
  }
}
</script>
