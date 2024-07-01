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
  color: rgb(2, 2, 94);
  text-decoration: none;
  padding: 10px;
  font-weight: 900;
}

nav a.router-link-exact-active {
  color: rgb(160, 115, 156)
  
}
body{
  background-image: url('https://yolandamatiwane.github.io/vueProjectImages/3430298.jpg');
  background-size: cover;
  }
</style>
