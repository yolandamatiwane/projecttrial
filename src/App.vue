<template>
  <navbar-comp>
  </navbar-comp>
  <router-view/>
</template>

<script>
import NavbarComp from "./components/NavbarComp.vue"
export default{
  components:{
    NavbarComp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav a {
  font-weight: bold;
  color: #670652;
  text-decoration: none;
  padding: 10px;
}

nav a.router-link-exact-active {
  color: #b9427d;
}
body{
    background-color: rgb(255, 255, 255);
  }
</style>
