<template>
  <article class="work_piece">
    <p class="piece_eyecatch"><img :src="work.image" /></p>
    <h1 class="piece_title">{{ work.title }}</h1>
    <p class="created_at">{{ work.date | moment('YYYY') }}</p>
    <p v-if="work.url" class="piece_link"><a :href="work.url">VISIT&nbsp;<i class="fas fa-external-link-alt"></i></a></p>

    <nuxt-content :document="work" />
    <div class="bottom-menu">
      <nuxt-link to="/works" class="back-link">←&nbsp;一覧へ戻る</nuxt-link>
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
    margin-top: 55px;
    padding-bottom: 55px;
    background-color: #fff;
    margin-bottom: 80px;
  }

  .work_piece .piece_eyecatch img {
    margin: 0 auto;
  }

  .work_piece .piece_title, .work_piece .created_at, .work_piece .piece_link {
    text-align: center;
  }

  .work_piece .created_at {
    font-size: .8em;
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

  .work_piece .nuxt-content {
    width: 980px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 10px;
    padding: 40px 160px;
  }

  .work_piece .nuxt-content h2 {
    font-size: 1.1em;
    line-height: 60px;
    margin-top: 10px;
  }

  .work_piece .nuxt-content h2:first-child {
    margin-top: 30px;
  }

  .work_piece .nuxt-content h3 {
    font-size: 1em;
    margin-top: 18px;
    margin-bottom: 8px;
  }

  .work_piece .nuxt-content p {
    font-size: .9em;
  }

  .work_piece .bottom-menu {
    text-align: center;
  }

  .work_piece .back-link {
    text-decoration: none;
    display: inline-block;
    padding: 0px 20px;
    border: solid 1px skyblue;
    border-radius: 50px;
    font-size: .8em;
    line-height: 32px;
    transition-duration: .3s;
  }
  
  .work_piece .back-link:link, .back-link:visited {
    color: skyblue; /*temp*/
  }

  .work_piece .back-link:hover {
    color: #fff;
    background-color: skyblue;
  }
  </style>
