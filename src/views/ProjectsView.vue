<template>
  <h3>Projects:</h3>
  <div id="about">
    <div class="card" v-for="project in pageProjectData()" :key="project.name">
      <h5>{{ project.name }}:</h5>
      <img :src="project.image" alt="">
      <a :href="project.gitHub" target="_blank" class="btn btn-outline-light">GitHub</a>
      <a :href="project.vercel" target="_blank" class="btn btn-outline-light">Live Demo</a>
      
        
    </div>
  </div>
    
</template>
<script>
export default {
    methods: {
      pageProjectData(){
        return this.$store.state.projects
      }
    },
    computed:{
      getProjects(){
        return this.$store.dispatch('getProjects')
      }
    },
    mounted() {
      this.getProjects
    }
    
}
</script>
<style scoped>
  h3{
    color:white;
    font-weight: 900;
    font-size:30px;
    margin-top:80px;
  }
  img{
    width:100%;
    height:200px;
  }
  #about {
    /* margin-top: 60px; */
    display: flex;
    justify-content: center; /* Center align cards horizontally */
    flex-wrap: wrap; /* Allow cards to wrap to the next line if space is insufficient */
    text-align:center;
  }
  h5{
    color:white;
    font-weight: 800;
  }
  
  .card{
    background-color: purple;
    /* height: 400px; */
    width:350px;
    margin-left:45px;
    margin-top:10px;
    margin-bottom:30px;
    border: 4px solid white;
    font-weight:900;
  }
</style>