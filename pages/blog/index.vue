<template>
  <div class="blog-wrapper">
    <h1 class="page-title"><span class="marker">ブログ</span></h1>
    <div v-if="posts.length">
      <card-list :posts="posts" />
    </div>
    <div v-else>
      <p class="no-content">記事がありません</p>
    </div>
  </div>
</template>
<style scoped>
.blog-wrapper {
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

@media screen and (max-width: 780px) {
  .blog-wrapper {
    width: 96%; /* 370/375 edited */
    padding-top: 60px;
  }
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
