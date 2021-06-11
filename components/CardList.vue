<template>
  <div class="card_list">
    <card
      class="card"
      v-for="post in posts"
      :title="post.title"
      :category="post.category"
      :tags="post.tags"
      :date="post.date"
      :slug="post.slug"
      :key="post.slug"
      :thumbnail="post.thumbnail"
      :image="post.image"
    />
  </div>
</template>

<script>
import Card from "~/components/Card"

export default {
  components: { Card },
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
  .card_list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .card_list::after {
    /* 最後の行左詰めにするため */
    display: block;
    content:"";
    width: 32%;
  }

  .card {
    margin-bottom: 20px;
  }
</style>>
