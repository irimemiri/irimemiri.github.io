<template>
  <header>
    <nav id="g_nav">
      <ul>
        <li><nuxt-link exact to="/">Emiri Ito<span>portfolio</span></nuxt-link></li>
        <li><nuxt-link exact to="/bio">Biography</nuxt-link></li>
        <li><nuxt-link exact to="/career">Career</nuxt-link></li>
      </ul>
    </nav>
  </header>
</template>

<style>
header {
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
}

#g_nav{
  width: 100%;
  position: absolute;
  top: 0;
  /* background: #000; */
}

#g_nav ul{
  display: flex;
}

#g_nav ul li {
  list-style-type: none;
  font-size: 16px;
}

#g_nav a{
  text-decoration: none;
  color: #fff;
  margin: 0 auto;
  padding: 10px;
  transition: .5s;
}

#g_nav a.nuxt-link-active::after {
  content: '';
  display: block;
  position: relative;
  margin: 3px auto 0;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #fff;
}

/* #g_nav a.nuxt-link-active:link, #g_nav a.nuxt-link-active:visited, #g_nav a.nuxt-link-active:hover, #g_nav a.nuxt-link-active:active {
  color: tomato;
} */

@media screen and (max-width: 780px) {
  #g_nav{
    width: 100%;
    right: -100%;
  }
}
</style>