<template>
  <div>
    <h2>Blog</h2>
    <div v-for="n in blog" :key="n.slug">
      <nuxt-link :to="'/blog/'+ n.slug">{{n.title}} {{n.date}}</nuxt-link>
    </div>
  </div>
</template>

<script>

export default {
  async asyncData ({ $content, params }) {
    const query = await $content('blog' || 'index').limit(15)
    const blog = await query.fetch()
    return { blog }
  }
}
</script>
