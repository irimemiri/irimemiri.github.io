<template>
  <div id="wrapper">
    <div class="cursor"></div>
    <div class="follower"></div>
    <!-- <Loading /> -->
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Work+Sans&display=swap');

html {
  font-family:
    'Work Sans',  
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

::selection {
  background: #fff100;
  color: #000;
}

.body-class {
  background-color: #000;
  color: #fff;
  margin: 0 auto;
  cursor: none;
}

#wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

 
.cursor,
.follower {
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0; 
  cursor: none;
  pointer-events: none;
}
 
.cursor {
  width: 8px;
  height: 8px;
  background-color: #000;
  z-index: 2001;
}
 
.follower {
  width: 40px;
  height: 40px;
  background-color: #fdfe00;
  z-index: 2000;
}
</style>
<script>
  if (process.browser) {
    // ここに window とか document を使った処理
    var
    cursor = document.getElementsByClassName("cursor")[0],
    cWidth = 20, //カーソルの大きさ
    mouseX = 0, //マウスのX座標
    mouseY = 0; //マウスのY座標

    document.body.addEventListener('mousemove', function(e){
      mouseX = e.pageX;
      mouseY = e.pageY;
      cursor.style.left = (mouseX - (cWidth / 2)) + 'px';
      cursor.style.top = (mouseY - (cWidth / 2)) + 'px';
    });
  }

  export default {
    head: {
      bodyAttrs: {
        class: 'body-class'
      }
    }
  }
</script>
