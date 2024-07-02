<template>
  <div class="card" id="home">
    <div class="container text-center">
      <div class="row">
        <div class="col-lg-6 col-sm-12" id="homeText">
          <h1 class="animate__animated animate__zoomIn">Good {{ timeOfDay }}</h1>
      <h2>I am <span>YOLANDA MATIWANE</span>...</h2>
      <h4>AN ASPIRING DEVELOPER</h4>
      <h2>  Welcome To My Portfolio!</h2>
      <p>
        <button>More About Me</button>
        <button>Contact Me</button>
      </p>
        </div>
        <div class="col-lg-6 col-sm-12" id="image">
          <img src="https://yolandamatiwane.github.io/vueProjectImages/istockphoto-1225005851-612x612.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data(){
    return {
      currentTime: new Date()
    }
  },
  computed:{
    timeOfDay(){
      let hour = this.currentTime.getHours()
      if(hour>= 5 && hour<12){
        return 'Morning'
      } else if(hour>=12 && hour < 18){
        return 'Afternoon'
      }else{
        return 'Evening'
      }
    }
  },
  components: {
   
  }
}
</script>
<style scoped>
  
  h1{
    font-family:fantasy;
    font-size: 70px;
    color: #670652
  }
  
  nav a {
    font-weight: bold;
    color: #670652;
    text-decoration: none;
    padding: 10px;
  }
  nav a.router-link-exact-active {
    color: #e2d794;
  }
  #homeText{
    margin-top: 100px;
  }
  img{
    height:300px;
  }
  #image{
    
    margin-top: 50px;
    /* margin-left: 300px; */
    width: 40%;
    height: 350px;
    border-radius: 20%;
  }
 #home{
  display: flex;
  justify-content: space-between;
  margin-left: 30px;
  margin-top: 100px;
  height: 450px;
  width: 95%;
  color: rgba(20, 0, 109, 0.705);
  font-weight: 900;
  background-color: rgba(153, 116, 150, 0.466);
  }

</style>