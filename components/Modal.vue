<template>
  <transition name="modal" appear>
    <div class="modal-overlay">
      <div class="modal-window">
        <nuxt-content :document="val"/>
        <button class="modal-close-btn" @click="$emit('close')">閉じる</button>
      </div>
    </div>
  </transition>
</template>

<style>
/* FIXME: scopedにするとnuxt-contentのスタイルがきれる */

.modal-overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
}

.modal-window {
  height: 70%;
  width: 60%;
  border-radius: 30px;
  position: relative;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: rgba(0,0,0,0.8);
  padding: 100px;
}

.modal-close-btn {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
}

.modal-content {
  height: 100%;
  padding: 30px;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.4s;
}

.modal-leave-active .modal-window {
  transition: opacity 0.4s, transform 0.4s;
}

.modal-leave-active {
  transition: opacity 0.6s ease 0.4s;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
}

.modal-enter .modal-window,
.modal-leave-to .modal-window {
  opacity: 0;
  transform: translateY(-20px);
}

.modal-window .nuxt-content h2 {
  font-size: 1.1em;
  line-height: 60px;
  margin-top: 10px;
}

.modal-window .nuxt-content h2:first-child {
  margin-top: 30px;
}

.modal-window .nuxt-content h3 {
  font-size: 1em;
  margin-top: 18px;
  margin-bottom: 8px;
}
</style>

<script>
  export default {
    name: 'Modal',
    props: ['val'],
  }
</script>