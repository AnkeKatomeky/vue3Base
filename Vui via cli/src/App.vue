<template>
  <nav>
    <router-link to="/">Дом</router-link> |
    <router-link to="/pairs">Пары</router-link> |
    <router-link to="/about">Про меня</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: rgb(146, 146, 146);
}

nav a.router-link-exact-active {
  color: darkcyan;
}

body {
  background: black;
  color: #9cb0c5;
  zoom: 200%;
}
</style>
