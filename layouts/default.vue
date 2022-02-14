<template>
  <div id="wrapper">
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

 
#cursor,
#stalker {
  border-radius: 50%;
  cursor: none;
  pointer-events: none;
}
 
#cursor {
  position: fixed;
  top: -4px;
  left: -4px;
  width: 8px;
  height: 8px;
  background-color: yellow;
  z-index: 2001;
}
 
#stalker {
  position: fixed;
  top: -20px;
  left: -20px;
  width: 40px;
  height: 40px;
  background: rgba(255,255,255, .6);
  transform: translate(0,0);
  transition: transform 0.2s ease-out;
  transition-timing-function: ease-out;
  z-index: 2000;
}
</style>
<script>
  if (process.browser) {
    const cursor = document.createElement('div');
    cursor.id = 'cursor';
    document.body.appendChild(cursor);

    const stalker = document.createElement('div');
    stalker.id = 'stalker';
    document.body.appendChild(stalker);

    //上記のdivタグをマウスに追従させる処理
    document.addEventListener('mousemove', function (e) {
      cursor.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
      stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
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
