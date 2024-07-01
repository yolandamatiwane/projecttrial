<template>
    <nav class="navbar navbar-expand-lg fixed-top">   
      <div id="nav" class="container-fluid">
              <a class="navbar-brand" href="#">
                YOLANDA
                <!-- <img class="logo" src="../assets/Beige Minimal Personal Make Up Artist Logo.png"> -->
            </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon" ></span>
              </button>
              <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav " ms-auto >
                  <li class="nav-item">
                    <router-link to="/" @mousemove="show('Home')" @mouseleave="hide()">
                        <img src="https://yolandamatiwane.github.io/vueProjectImages/icons/home%20(1).png">
                        <span v-if="displayLabel && label==='Home'" class="nav-label">Home</span>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/about" @mousemove="show('About')" @mouseleave="hide()">
                        <img src="https://yolandamatiwane.github.io/vueProjectImages/icons/technology.png">
                        <span v-if="displayLabel && label==='About'" class="nav-label">About</span>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/resume" @mousemove="show('Resume')" @mouseleave="hide()"> 
                        <img src="https://yolandamatiwane.github.io/vueProjectImages/icons/profile.png">
                        <span v-if="displayLabel && label==='Resume'" class="nav-label">Resume</span>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/projects" @mousemove="show('Projects')" @mouseleave="hide()"> 
                        <img src="https://yolandamatiwane.github.io/vueProjectImages/icons/idea.png">
                        <span v-if="displayLabel && label==='Projects'" class="nav-label">Projects</span>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/testimonials" @mousemove="show('Testimonials')" @mouseleave="hide()"> 
                        <img src="https://yolandamatiwane.github.io/vueProjectImages/icons/testimonial.png">
                        <span v-if="displayLabel && label==='Testimonials'" class="nav-label">Testimonials</span>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/contacts" @mousemove="show('Contacts')" @mouseleave="hide()"> 
                        <img src="https://yolandamatiwane.github.io/vueProjectImages/icons/contact-me.png">
                        <span v-if="displayLabel && label==='Contacts'" class="nav-label">Contacts</span>
                    </router-link>
                  </li>           
                </ul>
              </div>
            </div>
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
        background-color: rgba(137, 43, 226, 0.044);
        display: flex;
        align-items: center;
    }
    img{
        width: 40px;
        height: 40px;
    }
    .logo{
        width: 100px;
        height:40px;
    }
    
</style>