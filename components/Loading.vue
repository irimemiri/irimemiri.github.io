<template>
  <div id="line">
    <span :class="{'expand': loaded}"></span>
  </div>
</template>
<style>
/* #line {
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background-color:#1e1e1e;
  z-index:9999;
}
#line::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  background-color: #fff;
  width: 0;
  height: 1px;
} */

#line {
    width: 100vw;
    height: 100vh;
    background: #000;
    margin: auto;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
}
 
/* TODO: jsでcss付与するなりしてアニメーション発火させる */
.expand {
    width:100%;
    height:1px;
    margin:0;
    background:#fff;
    position:absolute;
    top: 50vh;
    animation: fullexpand 5s ease-out;
    z-index: 1000;
}

/* loading完了したら消す */
.loaded {
  opacity: 0;
  visibility: hidden;
}

@keyframes fullexpand {
    0%  { width:0px;}
    100%{ width:100%;} 
}
</style>
<script>
export default {
  name: 'Loading',
  data() {
    return {
      loaded: false
    }
  },
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    }
  },
  props: {
    loading: {
      type: Boolean,
      required: true
    }
  }
}
</script>

