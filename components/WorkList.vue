<template>
  <div class="works_list">
    <div :class="{'works': true, 'is-hover': isHover}" v-for="work in works" @click="openModal(work)" @mouseover="handleMouseOver(work)" @mouseleave="handleMouseLeave()" :key="work.slug">
      <work 
        :title="work.title"
        :body="work.body"
        :tags="work.tags"
        :date="work.date"
        :slug="work.slug"
        :image="work.image"/>
    </div>
    <modal v-show="showContent" :val="workItem" :image="workItemImage" :url="workItemUrl" @close="closeModal"/>
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
      workItem: "",
      workItemImage: "",
      workItemUrl: "",
      isHover: false
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
      this.workItemImage = work.image;
      if(work.url) this.workItemUrl = work.url
      if (process.browser) {
        // ここに window とか document を使った処理
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight= '15px';
      }
    },
    closeModal() {
      // FIXME: モーダル側が、消える最中に数px左にずれる
      document.body.style.paddingRight= '';
      document.body.style.overflow = 'auto';
      this.showContent = false;
    },
    handleMouseOver(hoverItem) {
      // item全部にノイズを加える
      this.isHover = true;
      // ホバー中のitemだけノイズ対象から除外する
      // -> 多分おかしいけどcss川の:hoverでやってみる
    },
    handleMouseLeave() {
      this.isHover = false;
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

.works.is-hover {
  opacity: 0.2;
}

.works.is-hover:hover {
  opacity: 1;
}

</style>>
