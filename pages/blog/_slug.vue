<template>
  <article class="blog_post">
    <p class="post_eyecatch"><img :src="blog.image" /></p>
    <h1 class="post_title">{{ blog.title }}</h1>
    <p class="created_at">{{ blog.date | moment('YYYY.MM.DD') }}</p>
    <ul class="post_tags">
      <li v-for="tag in blog.tags" :key="tag" class="tag_label">{{ tag }}</li>
    </ul>

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

<style>
  .blog_post {
    width: 980px;
    margin-left: auto;
    margin-right: auto;
    line-height: 2;
    padding-top: 55px;
    padding-bottom: 55px;
  }

  .blog_post .post_eyecatch img {
    margin: 0 auto;
  }

  .blog_post .post_title, .blog_post .created_at, .blog_post .post_tags {
    text-align: center;
  }

  .blog_post .post_title {
    margin-top: 58px;
  }

  .post_tags {
    list-style-type: none;
    display: flex;
    justify-content: center;
  }

  .post_tags .tag_label {
    font-family: sans-serif;
    font-size: .8em;
    padding: 5px;
  }

  .nuxt-content {
    width: 79.591%; /* 780/980 */
    margin-right: auto;
    margin-left: auto;
  }

  .nuxt-content h2 {
    line-height: 60px;
    margin-top: 10px;
  }
</style>