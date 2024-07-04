<template>
  <navbar-comp/>
  <router-view/>
  <footer-comp/>

</template>

<script>
import NavbarComp from "./components/NavbarComp.vue"
import FooterComp from "./components/FooterComp.vue"


export default{
  
  components:{
    NavbarComp,
    FooterComp
  },
  computed:{
    getAboutMe(){
      return this.$store.dispatch('getAboutMe')
    }
  },
  mounted() {
    this.getAboutMe
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
  padding: 30px;
  font-weight: 900;
}
.nav-item{
  transition:2s;
}
.nav-item:hover{
}
nav a.router-link-exact-active {
  color: rgb(160, 115, 156);

}
body{
  /* background-image: url('https://slidescorner.com/wp-content/uploads/2022/09/01-Heidi-Pastel-Abstract-Organic-Shapes-Background-by-SlidesCorner.jpg');
  background-size: cover; */
  background-color:rgb(204, 192, 255);
}
footer{
  height: 40px;
  position: fixed;
  color:rgb(0, 0, 42); 
  font-weight: 900;
  font-size: 18px;
  bottom: 0;
  width: 100%;

}
</style>
