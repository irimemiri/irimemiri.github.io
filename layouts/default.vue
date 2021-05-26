<template>
  <div id="wrapper">
    <Header />
    <Nuxt id="main_content" />
    <Footer />
  </div>
</template>

<style>
/* TODO: nuxt初期スタイル整理する */
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
  width: 100%;
  position: relative;
  min-height: 100vh;
  overflow: hidden;
}

#main_content {
  padding-bottom: 40px; /*フッターの高さ*/
}
</style>
