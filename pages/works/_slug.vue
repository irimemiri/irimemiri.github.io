<template>
  <article class="work_piece">
    <p class="piece_eyecatch"><img :src="work.image" /></p>
    <h1 class="piece_title">{{ work.title }}</h1>
    <p class="created_at">{{ work.date | moment('YYYY') }}</p>
    <p v-if="work.url" class="piece_link"><a :href="work.url">VISIT&nbsp;<i class="fas fa-external-link-alt"></i></a></p>

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

<style>
  .work_piece {
    width: 980px;
    margin-left: auto;
    margin-right: auto;
    line-height: 2;
    padding-top: 55px;
    padding-bottom: 55px;
  }

  .work_piece .piece_eyecatch img {
    margin: 0 auto;
  }

  .work_piece .piece_title, .work_piece .created_at, .work_piece .piece_link {
    text-align: center;
  }

  .work_piece .piece_title {
    margin-top: 30px;
    font-size: 1em;
  }

  .piece_tags {
    list-style-type: none;
    display: flex;
    justify-content: center;
  }

  .piece_tags .tag_label {
    font-family: sans-serif;
    font-size: .8em;
    padding: 5px;
  }

  .piece_link a {
    text-decoration: none;
    font-family: sans-serif;
    border: solid 1px #ccc;
    border-radius: 2px;
    font-size: .8em;
    padding: 5px;
  }

  .piece_link a:link, .piece_link a:visited {
    color: #000;
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
