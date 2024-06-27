<template>
    <nav>
        <img src="../assets/Beige Minimal Personal Make Up Artist Logo.png">
        <router-link to="/"><span @mousemove="hehe=true" @mouseleave="hehe=false">Home</span></router-link> 
        <router-link to="/about"><span @mousemove="hehe=true" @mouseleave="hehe=false">About</span></router-link>
        <router-link to="/resume"> Resume</router-link>
        <router-link to="/projects"> Projects</router-link>
        <router-link to="/testimonials"> Testimonials</router-link>
        <router-link to="/contacts"> Contacts</router-link>
  </nav>

  <span v-if="hehe">home</span>
</template>
<script>


export default {
    data() {
        return {
            hehe:false
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