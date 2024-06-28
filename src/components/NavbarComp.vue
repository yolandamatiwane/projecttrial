<template>
    <nav>
        <img src="../assets/Beige Minimal Personal Make Up Artist Logo.png">
        <router-link to="/" @mousemove="show('Home')" @mouseleave="hide()">Home</router-link> 
        <router-link to="/about" @mousemove="show('About)" @mouseleave="hide()">About</router-link>
        <router-link to="/resume" @mousemove="show('Resume)" @mouseleave="hide()"> Resume</router-link>
        <router-link to="/projects" @mousemove="show('Projects)" @mouseleave="hide()"> Projects</router-link>
        <router-link to="/testimonials" @mousemove="show('Testimonials)" @mouseleave="hide()"> Testimonials</router-link>
        <router-link to="/contacts" @mousemove="show('About)" @mouseleave="hide()"> Contacts</router-link>
  </nav>

  <span v-if="displayLabel" class="nav-label">{{ label }}</span>
</template>
<script>


export default {
    data() {
        return {
            displayLabel:false,
            label: ''
        }
    },
    methods:{
        show(name){
            this.displayLabel = true;
            this.label = name;
        },
        hide(){
            this.displayLabel = false;
        }
    }
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