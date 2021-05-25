<template>
  <article class="card">
    <nuxt-link class="blog-slug" :to="{ name: 'blog-slug', params: { slug: slug } }">
      <img :src="image">
      <div class="card-description">
        <h2 class="title">{{ title }}</h2>
        <time class="date" :datetime="date">{{ date | moment('YYYY.MM.DD') }}</time>
        <div class="category">
          <span v-if="category">{{ category }}</span>
          <span v-else>未分類</span>
        </div>
      </div>
    </nuxt-link>
  </article>
</template>

<script>
import moment from 'moment';

export default {
  filters: {
      moment(value, format) {
      return moment(value).format(format);
    }
  },
  props: {
    title: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: false
    },
    tags: {
      type: Array,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    },
    image: {
      type: String
    }
  }
}
</script>

<style scoped>
  .card {
    width: 32%;
    display: block;
    background-color: #fff;
    /* width: 48.979%; */
    /* border: solid 1px #000; */
    /* border-radius: 2px; */
  }

  .card a {
    text-decoration: none;
  }

  .card a:link, .card a:visited {
    color: #000;
  }

  .card a:hover {
    color: #999;
    text-decoration: underline;
  }

  .card .card-description {
    padding: 14px 2.083% 14px 2.083%; /* 10/480 */
  }

  .card .title {
    /* font-family: sans-serif; */
    font-size: 1em;
    margin-bottom: 4px;
  }

  .card .date {
    font-family: 'Helvetica Neue','Helvetica','Arial',sans-serif;
    font-size: .8em;
    color: #999;
    display: inline-block;
    margin-bottom: 5px;
  }

  .card .category span {
    font-family: sans-serif;
    display: inline-block;
    color: #333;
    border: solid 1px #333; 
    padding: 3px 5px;
    font-size: .8em;
  }
</style>>
