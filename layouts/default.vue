<template>
  <div id="wrapper">
    <!-- <div id="cursor"></div>
    <div id="stalker"></div> -->
    <!-- <Loading :loading="loading" /> -->
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
  /* TODO: マウスストーカー等実装ちゃんとできたら以下有効にする */
  /* cursor: none; */
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
  background-color: rgb(255, 255, 1);
  z-index: 2001;
}
 
#stalker {
  position: fixed;
  top: -15px;
  left: -15px;
  width: 30px;
  height: 30px;
  background: rgb(255, 255, 1);
  opacity: .6;
  mix-blend-mode:exclusion;
  transform: translate(0,0);
  transition: width .2s, height .2s, background-color .2s, transform 0.2s ease-out;
  transition-timing-function: ease-out;
  z-index: 2000;
}

#stalker.hov {
  top: -25px;
  left: -25px;
  width: 50px;
  height: 50px;
  background: rgba(33, 157, 221);
}

</style>
<script>
  import Loading from "~/components/Loading.vue"
  import Header from "~/components/Header.vue"
  import Footer from "~/components/Footer.vue"

  export default {
    data() {
      return {
        loading: true
      }
    },
    mounted() {
      // setTimeout(() => {
      //   this.loading = false;
      // }, 1000);

      // const cursor = document.getElementById('cursor');
      // // const cursor = document.createElement('div');
      // // cursor.id = 'cursor';
      // // document.body.appendChild(cursor);

      // const stalker = document.getElementById('stalker');
      // // const stalker = document.createElement('div');
      // // stalker.id = 'stalker';
      // // document.body.appendChild(stalker);

      // //上記のdivタグをマウスに追従させる処理
      // document.addEventListener('mousemove', function (e) {
      //   cursor.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
      //   stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
      // });
      // //リンクにホバー時はクラスをつける see@https://wemo.tech/3229
      // const linkElem = document.querySelectorAll("a, div.works");
      // for (let i = 0; i < linkElem.length; i++) {
      //   linkElem[i].addEventListener('mouseover', function (e) {
      //     stalker.classList.add('hov');
      //   });
      //   linkElem[i].addEventListener('mouseout', function (e) {
      //     stalker.classList.remove('hov'); 
      //   });
      // }
    },
    head: {
      bodyAttrs: {
        class: 'body-class'
      }
    }
  }

</script>
