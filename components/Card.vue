<template>
  <article class="card">
    <nuxt-link class="blog-slug" :to="{ name: 'blog-slug', params: { slug: slug } }">
      <p class="blog-thumb" v-if="thumbnail" :key="slug">
        <img :src="thumbnail">
      </p>
      <p class="blog-thumb" v-else>
        <img src="/images/blog/thumbnails/no-image.png">
      </p>
      <div class="card-description">
        <h2 class="title">{{ title }}</h2>
        <time class="date" :datetime="date">{{ date | moment('YYYY.MM.DD') }}</time>
        <!-- <div class="category">
          <span v-if="category">{{ category }}</span>
          <span v-else>未分類</span>
        </div> -->
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
    thumbnail: {
      type: String
    },
    image: {
      type: String
    }
  }
}
</script>

<style scoped>
  .card {
    /* FIXME: ここに幅を書くのはおかしいと思う */
    width: 32%;
    display: block;
    background-color: #fff;
  }

  .card a {
    text-decoration: none;
  }

  .card .blog-thumb {
    overflow: hidden;
  }

  .card .blog-thumb img {
    width: 100%;
    object-fit: cover;
    transition: transform .6s ease-in-out;
  }

  .card:hover .blog-thumb img {
    transform: scale(1.08);
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

/*
  ===========================
  target size:
  375px(750px)x677px(1334px);
  ===========================
*/ 

@media screen and (max-width: 780px) {
  .card {
    /* FIXME: ここに幅を書くのはおかしいと思う */
    width: 47.297%; /* 175/370 */
  }
}
</style>>
