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

.works_list {
  display: flex;
  flex-wrap: wrap;
}

.works {
  width: 33%; /* 79.591%; 780/980 */
  margin-bottom: 40px;
  /* margin-right: auto;
  margin-left: auto; */
}

/*
  ===========================
  target size:
  375px(750px)x677px(1334px);
  ===========================
*/ 

@media screen and (max-width: 780px) {
  .works {
    /* 効いてない気がする */
    /* width: 370px; */
    width: 100%; /* 370/370 */
  }
}
</style>>
