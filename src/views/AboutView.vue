<template>
  <div id="mainAboutDiv">  
    <h1>
      About Me:
    </h1> 
    <div class="card">
      <div class="container text-center">
        <div class="row">
          <div class="col-sm-8 lg-12">
            <h5 class="card-text">
              Hello! I'm Yolanda Matiwane, an aspiring developer with a passion for creating and problem-solving. Originally from Langa, I graduated from high school in 2018 and have since embarked on an exciting journey into the world of coding.
              <br>
              Since my introduction to coding in 2020 through visual Python in a physics class, I've been captivated by the process of turning code into tangible creations. This initial experience sparked my fascination with understanding how things work and the thrill of seeing ideas materialize into visualizations or functional applications.
              While I'm still in the early stages of my coding career, I'm eager to expand my skills and knowledge. I enjoy tackling challenges and am constantly exploring new concepts to enhance my understanding of programming.
              I thrive on learning new things and applying my creativity to problem-solving. Beyond coding, I indulge in reading, watching movies, and gaming, activities that fuel my imagination and inspire my work.
              My goal is to continue growing as a developer, translating my ideas into impactful projects. I'm excited about the possibilities that coding offers and look forward to contributing to innovative solutions in the tech industry.
            </h5>
            <h6>For more? please feel free to contact me</h6>
          </div>
          <div class="col-sm-4 lg-12">
            <img src="https://yolandamatiwane.github.io/vueProjectImages/girl%20on%20laptop.png">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    computed: {
      pageAboutData(){
        return this.$store.state.aboutMe
      }
    }
}
</script>
<style scoped>
  img{
    width:300px;
    height:300px;
    border-radius:50%;
    /* margin-left:600px; */
    box-shadow:10px 10px 5px black;
  }
  .col-sm-8 {
    box-shadow:10px 10px 5px black;
    /* background-image:url('https://yolandamatiwane.github.io/vueProjectImages/168f0adf88b26e7c025e3db7b93607a2.png');
    background-size:cover; */
  }
  #mainAboutDiv {
    margin: 60px;
    font-family:"Bangers";
  }
  h1{
    font-size: 100px;
    color: #bb7aad;
    text-shadow: 2px 2px 4px #000000;
  }
  .card{
    color: white;
    padding:50px;
    height:450px;
    background-color:rgb(204, 192, 255);
    width:90%;
    border:none;
    margin-top:20px;
    /* margin-left:90px; */
    /* box-shadow:10px 10px 5px; */
  }
</style>