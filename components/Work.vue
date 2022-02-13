<template>
  <article class="work">
    <nuxt-link class="works-slug" :to="{ name: 'works-slug', params: { slug: slug } }">
      <div class="work-card" :style="{ backgroundImage: 'url(' + image + ')' }">
        <!-- <p class="work_key_img"><img :src="image"></p> -->
        <!-- <time class="date" :datetime="date">{{ date | moment('YYYY') }}</time> -->
        <!-- <div class="mask">
          <h2 class="caption">{{ title }}</h2>
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
  .work-card::before {
    content: "";
    display: block;
    padding-top: 100%;
  }

  .work-card {
    width: 100%;
   /* bindでbgimageつけてる */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  /* .work-card .mask {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 2.564%;
    text-align: center;
    transition: background-color .6s;
  } */

  .work-card:hover .mask {
    background-color: rgba(0,0,0,.6);
  }

  .work-card .mask .caption {
    opacity: 0;
    color: #fff;
    letter-spacing: .1em;
    font-size: 1rem;
    transition: opacity .6s;
  }

  .work-card:hover .mask .caption {
    opacity: 1;
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

  /*
    ===========================
    target size:
    375px(750px)x677px(1334px);
    ===========================
  */ 

  @media screen and (max-width: 780px) {
    .work-card {
      width: 100%; /* 370/370 */;
    }
  }
</style>>
