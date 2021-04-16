<template>
  <div>
    <h2>Works</h2>
    <div v-for="n in works" :key="n.slug">
      <nuxt-link :to="'/works/'+ n.slug">{{n.title}} {{n.date}}</nuxt-link>
    </div>
  </div>
</template>

<script>

export default {
  async asyncData ({ $content, params }) {
    const query = await $content('works' || 'index').limit(15)
    const works = await query.fetch()
    return { works }
  }
}
</script>
