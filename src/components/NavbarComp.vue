<template>
    <nav>
        <!-- <img class="logo" src="../assets/Beige Minimal Personal Make Up Artist Logo.png"> -->
        <router-link to="/" @mousemove="show('Home')" @mouseleave="hide()">
            <img src="https://yolandamatiwane.github.io/vueProjectImages/animatedIcons/new-house.png">
            <span v-if="displayLabel && label==='Home'" class="nav-label">Home</span>
        </router-link> 
        <router-link to="/about" @mousemove="show('About')" @mouseleave="hide()">
            <img src="https://yolandamatiwane.github.io/vueProjectImages/animatedIcons/new-house.png">
            <span v-if="displayLabel && label==='About'" class="nav-label">About</span>
        </router-link>
        <router-link to="/resume" @mousemove="show('Resume')" @mouseleave="hide()"> 
            <img src="https://yolandamatiwane.github.io/vueProjectImages/animatedIcons/new-house.png">
            <span v-if="displayLabel && label==='Resume'" class="nav-label">Resume</span>
        </router-link>
        <router-link to="/projects" @mousemove="show('Projects')" @mouseleave="hide()"> 
            <img src="">
            <span v-if="displayLabel && label==='Projects'" class="nav-label">Projects</span>
        </router-link>
        <router-link to="/testimonials" @mousemove="show('Testimonials')" @mouseleave="hide()"> 
            <img src="https://yolandamatiwane.github.io/vueProjectImages/animatedIcons/tech-support.gif">
            <span v-if="displayLabel && label==='Testimonials'" class="nav-label">Testimonials</span>
        </router-link>
        <router-link to="/contacts" @mousemove="show('Contacts')" @mouseleave="hide()"> 
            <img src="https://yolandamatiwane.github.io/vueProjectImages/animatedIcons/phone-contact.gif">
            <span v-if="displayLabel && label==='Contacts'" class="nav-label">Contacts</span>
        </router-link>
  </nav>

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
    nav{
        display: flex;
        align-items: center;
    }
    img{
        width: 30px;
        height: 30px;
    }
    .logo{
        width: 100px;
        height:40px;
    }
    
</style>