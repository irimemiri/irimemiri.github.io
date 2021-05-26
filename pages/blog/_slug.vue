<template>
  <article class="blog_post">
    <p class="post_eyecatch"><img :src="blog.image" /></p>
    <h1 class="post_title">{{ blog.title }}</h1>
    <p class="created_at">{{ blog.date | moment('YYYY.MM.DD') }}</p>
    <ul class="post_tags">
      <li v-for="tag in blog.tags" :key="tag" class="tag_label">{{ tag }}</li>
    </ul>

    <nuxt-content :document="blog" />
    <div class="bottom-menu">
      <nuxt-link to="/blog" class="back-link">←&nbsp;一覧へ戻る</nuxt-link>
    </div>
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
  width: 76.562%; /* 980/1280 */
  max-width: 980px;
  margin-left: auto;
  margin-right: auto;
  line-height: 2.2;
  margin-top: 55px;
  padding-bottom: 55px;
  background-color: #fff;
  margin-bottom: 80px;
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
  padding: 5px; /* fixed */
}

.blog_post .nuxt-content {
  width: 79.591%; /* 780/980 */
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 10px;
  padding: 40px 40px;
}

.blog_post .nuxt-content h2 {
  border-bottom: solid 1px #999;
  margin-top: 40px;
  margin-bottom: 20px;
}

.blog_post .nuxt-content h2:first-child {
  margin-top: 30px;
}

.blog_post .nuxt-content h3 {
  margin-top: 18px;
  margin-bottom: 8px;
}

.blog_post .bottom-menu {
  text-align: center;
}

.blog_post .back-link {
  text-decoration: none;
  display: inline-block;
  padding: 0px 20px; /* fixed */
  border: solid 1px skyblue;
  border-radius: 50px;
  font-size: .8em;
  line-height: 32px;
  transition-duration: .3s;
}

.blog_post .back-link:link, .back-link:visited {
  color: skyblue; /*temp*/
}

.blog_post .back-link:hover {
  color: #fff;
  background-color: skyblue;
}

@media screen and (max-width: 780px) {
  .blog_post {
    width: 96%; /* 370/375 edited */
  }

  .blog_post .nuxt-content {
    width: 100%;
    padding-left: 4.054%; /* 15/370 */
    padding-right: 4.054%;
    padding-top: 20px;
  }

  .blog_post .nuxt-content h2 {
    margin-top: 10px;
  }

  .blog_post .nuxt-content h2:first-child {
    margin-top: 0;
  }

  .blog_post .nuxt-content p, .blog_post .nuxt-content code {
    font-size: .9em;
  }
}

</style>