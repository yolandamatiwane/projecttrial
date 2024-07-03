<template>
  <div class="card" id="home">
    <div class="container text-start">
      <div class="row">
        <div class="col-lg-7 col-sm-12" id="homeText">
          <h1 class="animate__animated animate__zoomIn">Good {{ timeOfDay }}</h1>
          <h2>I am <span>YOLANDA MATIWANE</span>...</h2>
          <h4>AN ASPIRING DEVELOPER</h4>
          <h2>  Welcome To My Portfolio!</h2>
          <p>
            <a href="/about" class="btn btn-outline-custom">More About Me</a>
            <a href="/contacts" class="btn btn-outline-light">Contact Me</a>
          </p>
        </div>
        <div class="col-lg-5 col-sm-12" id="image">
          <img src="https://yolandamatiwane.github.io/vueProjectImages/Untitled%20design%20(1).png" class="animate__animated animate__bounce">
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
  .animate__animated.animate__bounce {
    --animate-duration: 5s;
    --animate-repeat: 5;
  }
  .btn-outline-custom, .btn-outline-light{
    margin-left:20px;
    height:60px;
  }
  .btn-outline-light{
    font-family: "Bangers";
    font-size: 20px;
    box-shadow: 2px 2px 4px;
    width:150px;
  }
  .btn-outline-custom{
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
  p{
    margin-top: 20px;
  }
  h1{
    font-family:"Bangers";
    font-size: 100px;
    color: #670652;
    text-shadow: 2px 2px 4px #000000;
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
    width:800px;
    height:500px;
  }
  h2,h4{
    font-family:"Bangers";
    /* font-weight:800; */
  }
  span{
    font-size: 40px;
  }
  span,h4{
    color:white;
  }
  #image{
    margin-top: 50px;
    /* margin-left: 300px; */
    /* width: 40%; */
    /* height: 350px;
    border-radius: 20%; */
  }
  #home{
    display: flex;
    justify-content: space-between;
    margin-left: 30px;
    margin-top: 120px;
    height: 600px;
    width: 95%;
    color: rgba(20, 0, 109, 0.705);
    font-weight: 900;
    background-color: rgba(153, 116, 150, 0.3);
    box-shadow: 10px 15px 5px;
    border: none;
  }


</style>