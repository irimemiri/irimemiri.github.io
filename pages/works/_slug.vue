<template>
  <article>
    <h1>{{work.title}}</h1>
    <dl>
      <dt>created_at</dt>
      <dd>{{work.created_at | moment('YYYY-MM-DD') }}</dd>
    </dl>
    <div><img :src="work.image" /></div>
    <div v-for="tag in work.tags" :key="tag">{{tag}}</div>

    <nuxt-content :document="work" />
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
    const work = await $content('works', params.slug || 'index').fetch()
    return { work }
  }
}
</script>
