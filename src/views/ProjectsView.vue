<template>
  <h1>Projects:</h1>
  <select v-model="selectedCategory">
    <option value="">
      All categories
    </option>
    <option value="javascript">
      Javascript
    </option>
    <option value="bootstrap">
      Bootstrap
    </option>
  </select>
  <div id="about">
    <div class="card" v-for="project in filterProjects" :key="project.name">
      <h5>{{ project.name }}:</h5>
      <img v-if="project.visuals.type === 'image'" :src="project.visuals.url">
      <video :src="project.visuals.url"></video>

      <a :href="project.gitHub" target="_blank" class="btn btn-outline-light">GitHub</a>
      <a :href="project.vercel" target="_blank" class="btn btn-outline-light">Live Demo</a>
      
        
    </div>
  </div>
    
</template>
<script>
export default {
    data(){
      return {
        selectedCategory:''
      }

    },
    computed:{
      filterProjects(){
        if(this.selectedCategory === '') {
          return this.$store.state.projects
        } else{
          return this.$store.state.projects.filter(project => project.category === this.selectedCategory)
        }
      }
      
    }
    
}
</script>
<style scoped>
  h1{
    margin-top: 50px;
    font-family:"Bangers";
    font-size: 100px;
    color: #670652;
    text-shadow: 2px 2px 4px #000000;
  }
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
    background-color: rgba(128, 0, 128, 0.086);
    /* height: 400px; */
    width:350px;
    margin-left:45px;
    margin-top:10px;
    margin-bottom:30px;
    border: 4px solid white;
    font-weight:900;
  }
</style>