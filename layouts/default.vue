<template>
  <div id="wrapper">
    <Header />
    <Nuxt />
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

/* #wrapper {
  width: 76.562%; 980/1280 
  max-width: 980px;
  font-family: "游明朝", YuMincho, "Hiragino Mincho ProN W3", "ヒラギノ明朝 ProN W3", "Hiragino Mincho ProN", "HG明朝E", "ＭＳ Ｐ明朝", "ＭＳ 明朝", serif;
  margin-left: auto;
  margin-right: auto;
} */

</style>
