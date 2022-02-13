<template>
  <header>
    <nuxt-link exact to="/">Emiri Ito<span>portfolio</span></nuxt-link>
    <nav id="g_nav">
      <ul>
        <li><nuxt-link exact to="/bio">Biography</nuxt-link></li>
        <li><nuxt-link exact to="/career">Career</nuxt-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  padding-top: 60px;
  padding-bottom: 80px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  top: 0;
  z-index: 1000;
}

#g_nav{
  /* FIXME: fixedにすると右側(#g_nav)がはみ出るので確認してくれ */
  /* position: absolute; */
  /* top: 0; */
}

#g_nav ul{
  display: flex;
}

#g_nav ul li {
  list-style-type: none;
  font-size: 1rem;
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