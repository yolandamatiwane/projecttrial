<template>
  <h1>Projects:</h1>
  <select class="btn btn-outline-dark" v-model="selectedCategory">
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
      <h3><span>></span> {{ project.name }}:</h3>
      <img data-aos="zoom-in" data-aos-duration="1500" v-if="project.visuals.type === 'image'" :src="project.visuals.url">
      <video v-else :src="project.visuals.url" type="video/mp4" controls>
      </video>
      <p>{{ project.description }}</p>
      <div id="bnts">
        <a :href="project.gitHub" target="_blank" class="btn btn-outline-custom">GitHub</a>
        <a :href="project.vercel" target="_blank" class="btn btn-outline-custom">Live Demo</a>
      </div>
      
        
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
    width:80%;
    height:250px;
    border-radius: 10px;
    box-shadow: 10px 10px 5px #670652;
    margin-bottom: 20px;
  }
  #about {
    /* margin-top: 60px; */
    display: flex;
    justify-content: center; /* Center align cards horizontally */
    flex-wrap: wrap;  /* Allow cards to wrap to the next line if space is insufficient */
    text-align:start;
  }
  h5{
    color:white;
    font-weight: 800;
  }
  p{
    width: 80%;
  }
  .card{
    background-color: rgba(128, 0, 128, 0.0);
    width:40%;
    margin-left:70px;
    margin-top:10px;
    margin-bottom:30px;
    border: none;
    font-weight:900;
  }
  .btn-outline-custom, .btn-outline-dark{
    margin-left:20px;
    height:60px;
  }
  .btn-outline-dark{
    padding: auto;
    font-family: "Bangers";
    font-size: 20px;
    box-shadow: 2px 2px 4px;
    width:15%;
    /* margin-left:100px; */
  }
  .btn-outline-custom{
    padding: auto;
    font-family:"Bangers";
    font-size: 20px;
    color: white;
    background-color: #670652;
    box-shadow: 2px 2px 4px;
    width: 200px ;
  }
  .btn-outline-custom:hover{
    background-color: white;
    color: #670652;
  }
  #btns{
    display: inline;
    padding: 100px;
    width:100%;
    justify-content: space-between;
    
  }
</style>