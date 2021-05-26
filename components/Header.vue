<template>
  <header>
    <div id="hamburger-bg"></div>
    <div id="hamburger" @click="activeMenu=!activeMenu">
      <span class="inner_line" id="line1" :class="{open:activeMenu}"></span>
      <span class="inner_line" id="line2" :class="{open:activeMenu}"></span>
      <span class="inner_line" id="line3" :class="{open:activeMenu}"></span>
    </div>

    <nav id="g_nav" :class="{open: activeMenu}">
      <ul>
        <li><nuxt-link to="/" @click.native="activeMenu=false">HOME</nuxt-link></li>
        <li><nuxt-link to="/works" @click.native="activeMenu=false">制作実績</nuxt-link></li>
        <li><nuxt-link to="/about" @click.native="activeMenu=false">私について</nuxt-link></li>
        <li><nuxt-link to="/blog" @click.native="activeMenu=false">ブログ</nuxt-link></li>
      </ul>
    </nav>
    <div id="nav_bg" :class="{active:activeMenu}" @click="activeMenu=false"></div>
  </header>
</template>

<style>
header {
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
  background: #000;
}

#hamburger {
  display: block;
  position: absolute;
  top: 20px;
  right: 30px;
  width: 30px;
  height: 24px;
  cursor: pointer;
  transition: 1s;
}

#hamburger-bg {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  display: block;
  width: 0;
  height: 0;
  border: solid 60px;
  border-width: 55px 60px;
  border-color: #003557 #003557 transparent transparent;
}

.inner_line {
  display: block;
  position: absolute;
  /* TODO: z-indexの数値適当なので調整する */
  z-index: 1000;
  left: 0;
  width: 30px;
  height: 3px;
  background-color: #fff;
  transition: 1s;
  border-radius: 4px;
}

.inner_line.open {
  background-color: #000;
}

#line1 {
  top: 0;
}

#line1.open {
  transform: translateX(5px) rotate(45deg);
  transform-origin: top left;
}

#line2 {
  top: 10px;
}

#line2.open {
  opacity: 0;
}

#line3 {
  bottom: 0px;
}

#line3.open {
  transform: translateX(5px) rotate(-45deg);
  transform-origin: bottom left;
}

.logo {
  line-height: 52px;
}

#g_nav{
  position: absolute;
  top: 0;
  right: -40%;
  width: 40%;
  height: 100vh;
  background: #fff;
  transition: .7s;
  clip-path: polygon(0 0, 100% 0%, 100% 100%, 20% 100%);
}

#g_nav.open {
  right: 0px;
}

#g_nav ul{
  padding-left: 25%;
  padding-top: 80px;
}

#g_nav ul li {
  list-style-type: none;
  font-size: 20px;
  margin-bottom: 5%;
}

#g_nav a{
  display: block;
  text-decoration: none;
  color: #000000;
  margin: 0 15px;
  padding: 10px;
  transition: .5s;
}

#nav_bg {
  background-color: rgba(0,0,0,.6);
  display: block;
  height: 100%;
  opacity: 0;
  pointer-events: none;
  position: fixed;
  right: 0;
  top: 0;
  transition: all 0.3s linear 0s;
  width: 100%;
  z-index: -1;
}

#nav_bg.active {
  opacity: 1;
  pointer-events: auto;
}

@media screen and (max-width: 780px) {
  #g_nav{
    width: 100%;
    right: -100%;
  }
}

</style>

<script>
export default {
  data() {
    return {
      activeMenu: false
    }
  },
}
</script>
