<template>
  <article>
    <h1>{{blog.title}}</h1>
    <dl>
      <dt>date</dt>
      <dd>{{blog.date}}</dd>
    </dl>
    <div><img :src="blog.image" /></div>
    <div v-for="tag in blog.tags" :key="tag">{{tag}}</div>

    <nuxt-content :document="blog" />
  </article>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const blog = await $content('blog', params.slug || 'index').fetch()
    return { blog }
  }
}
</script>
