<template>
  <transition name="modal" appear>
    <div class="modal-overlay">
      <div class="modal-window">
        <p>ここにクリックした要素のアイテムを表示させる予定</p>
        <button @click="$emit('close')">閉じる</button>
      </div>
    </div>
  </transition>
</template>

<style scoped>
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
  overflow: hidden;
  background-color: rgba(0,0,0,0.1);
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
</style>