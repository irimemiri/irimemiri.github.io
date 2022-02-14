<template>
  <div class="works_list">
    <div class="works" v-for="work in works" @click="openModal(work)" :key="work.slug">
      <work 
        :title="work.title"
        :body="work.body"
        :tags="work.tags"
        :date="work.date"
        :slug="work.slug"
        :image="work.image"/>
    </div>
    <modal v-show="showContent" :val="workItem" @close="closeModal"/>
  </div>
</template>

<script>
import Work from "~/components/Work.vue"
import Modal from "~/components/Modal.vue"

export default {
  components: {
    Work,
    Modal
  },
  data() {
    return {
      showContent: false,
      workItem: ""
    }
  },
  props: {
    works: {
      type: Array,
      required: true
    }
  },
  methods: {
    openModal(work) {
      this.showContent = true;
      this.workItem = work;
    },
    closeModal() {
      console.log('押された---------');
      console.log(this.showContent);
      this.showContent = false;
    }
  }
}
</script>

<style scoped>

.works_list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.works {
  width: 29%;
  margin-bottom: 6.5%;
}

</style>>
