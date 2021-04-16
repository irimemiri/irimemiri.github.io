<template>
  <article>
    <h1>{{blog.title}}</h1>
    <dl>
      <dt>created_at</dt>
      <dd>{{blog.created_at | moment('YYYY-MM-DD') }}</dd>
    </dl>
    <div><img :src="blog.image" /></div>
    <div v-for="tag in blog.tags" :key="tag">{{tag}}</div>

    <nuxt-content :document="blog" />
  </article>
</template>

<script>
import moment from 'moment'

export default {
  filters: {
      moment(value, format) {
      return moment(value).format(format);
    }
  },
  async asyncData ({ $content, params }) {
    const blog = await $content('blog', params.slug || 'index').fetch()
    return { blog }
  }
}
</script>
