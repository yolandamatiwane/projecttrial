<template>
    <nav>
        <img src="../assets/Beige Minimal Personal Make Up Artist Logo.png">
        <router-link to="/">Home</router-link> 
        <router-link to="/about"> About</router-link>
        <router-link to="/resume"> Resume</router-link>
        <router-link to="/projects"> Projects</router-link>
        <router-link to="/testimonials"> Testimonials</router-link>
        <router-link to="/contacts"> Contacts</router-link>
  </nav>
  <div 
  @mouseover="hehe =true"
  @mouseleave="hehe =false"
  >hehe hover over me</div>

  <p v-if="hehe">this is the power of hehe</p>
</template>
<script>


export default {
    data() {
        return {
            home:false
        }
    },
}
</script>
<style scoped>
    img{
        width: 100px;
        height:40px;
    }
    nav img{
        margin-right: 800px;
    }
</style>