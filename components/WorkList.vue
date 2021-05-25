<template>
  <div class="works_list">
    <work
      class="works"
      v-for="work in works"
      :title="work.title"
      :tags="work.tags"
      :date="work.date"
      :slug="work.slug"
      :key="work.slug"
      :image="work.image"
    />
  </div>
</template>

<script>
import Work from "~/components/Work"

export default {
  components: { Work },
  props: {
    works: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
  .works {
    width: 780px;
    margin-bottom: 40px;
    margin-right: auto;
    margin-left: auto;
  }
</style>>
