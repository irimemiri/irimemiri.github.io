<template>
  <div id="wrapper">
    <Loading />
    <Header />
    <Nuxt id="main_content" />
    <Footer />
  </div>
</template>

<style>
html {
  font-family:
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
  background: #bbc8e6;
  color: #fff;
}

#wrapper {
  /* for fixed footer */
  /* width: 100%;
  position: relative;
  min-height: 100vh;
  overflow: hidden; */
}

#main_content {
  padding-top: 100px; /*ヘッダー分。仮*/
  /* padding-bottom: 40px; フッターの高さ */
}

.body-class {
  background-color: #000;
}
</style>

<script>
  export default {
    head: {
      bodyAttrs: {
        class: 'body-class'
      }
    }
  }
</script>
