<template>
  <div id="line">
    <span class="expand"></span>
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
    width: 100%; /* 横幅100% */
    height: 1px;
    margin: auto;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
 
/* TODO: jsでcss付与するなりしてアニメーション発火させる */
  .expand {
    width:100%;
    height:1px;
    margin:0;
    background:#fff;
    position:absolute;
    animation: fullexpand 5s ease-out;
}

@keyframes fullexpand {
    0%  { width:0px;}
    100%{ width:100%;} 
}
</style>
