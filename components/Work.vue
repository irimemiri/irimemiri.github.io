<template>
  <article class="work">
    <nuxt-link class="works-slug" :to="{ name: 'works-slug', params: { slug: slug } }">
      <p class="work_key_img"><img :src="image"></p>
      <!-- <time class="date" :datetime="date">{{ date | moment('YYYY') }}</time> -->
    </nuxt-link>
    <h2 class="title">{{ title }}</h2>
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
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
  .work_key_img {
    width: 100%;
    /* border: solid 1px #000; */
  }

  .work a {
    text-decoration: none;
  }

  .work a:link, .work a:visited {
    color: #000;
  }

  .work a:hover {
    text-decoration: underline;
  }

  .work .title {
    font-size: 1em;
    font-weight: normal;
  }
</style>>
