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
  background: #bbc8e6;
  color: #fff;
}

.body-class {
  background-color: #000;
  color: #fff;
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
