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

  .card {
    margin-bottom: 20px;
  }
</style>>
