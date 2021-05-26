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
  },
  head() {
    return {
      title: this.work.title,
    }
  }
}
</script>

<style>
/* FIXME: scopedにするとnuxt-contentのスタイルがきれる */

.work_piece {
  width: 76.562%; /* 980/1280 */
  max-width: 980px;
  padding-bottom: 55px;
  background-color: #fff;
  line-height: 2;
  margin-left: auto;
  margin-right: auto;
  margin-top: 55px;
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
  padding: 5px; /* fixed */
}

.piece_link a {
  text-decoration: none;
  font-family: sans-serif;
  border: solid 1px #ccc;
  border-radius: 2px;
  font-size: .6em;
  padding: 5px 8px; /* fixed */
}

.piece_link a:link, .piece_link a:visited {
  color: #000;
}

.work_piece .nuxt-content {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 10px;
  padding-left: 16.326%; /* 160/980 */
  padding-right: 16.326%; /* 160/980 */
  padding-top: 40px;
  padding-bottom: 40px;
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
  padding: 0px 20px; /* fixed */
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

/*
  ===========================
  target size:
  375px(750px)x677px(1334px);
  ===========================
*/ 

@media screen and (max-width: 780px) {
  .work_piece {
    width: 96%; /* 370/375 edited */
  }

  .work_piece .nuxt-content {
    width: 100%;
    padding-left: 4.054%; /* 15/370 */
    padding-right: 4.054%;
    padding-top: 20px;
  }

  .work_piece .nuxt-content h2 {
    margin-top: 10px;
  }

  .work_piece .nuxt-content h2:first-child {
    margin-top: 0;
  }
}
</style>
