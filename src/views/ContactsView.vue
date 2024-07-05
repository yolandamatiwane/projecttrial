<template>
  <div id="contactsMainDiv">
    <!-- <spinner-comp></spinner-comp> -->
    <div class="container-fluid">
      <div class="row">
        <h2>Have questions? Feel free to reach out to me!</h2>
        <div class="col-sm-6 lg-12">
          <div class="formcarry-container">
            <form @submit="onSubmit">
              <div class="formcarry-block">
                <label class="form-label" for="name">Full Name</label>
                <input class="form-control" type="text" required v-model="name" id="name" placeholder="Your first and last name" />
              </div>
              <div class="formcarry-block">
                <label for="email">Your Email Address</label>
                <input class="form-control" type="email" required v-model="email" id="email" placeholder="john@doe.com" />
              </div>
              <div class="formcarry-block">
                <label for="message">Your message</label>
                <textarea class="form-control" required v-model="message" id="message" placeholder="Enter your message..."></textarea>
              </div>
              <div class="formcarry-block" id="buttons">
                <button class="btn btn-outline-dark" type="submit">
                  send
                </button>
                
                <button class="btn btn-outline-dark" type="reset">Clear</button>
              </div>
        
              <div v-if="showNotification" class="formcarry-block">
                <div :class="`formcarry-message-block fc-${icon} active`">
                  <div class="fc-message-icon"></div>
                  <div class="fc-message-content">{{ errorMessage }}</div>
                  <div class="fc-message-close" @click="resetStates"></div>
                </div>
              </div>
        
            </form>
           </div>
        </div>
        <div class="col-sm-6 lg-12" id="dets">
          <label>cell: </label><h6>071 312 4564</h6>
          <label>email: </label><h6>mbalentle.matiwane21@gmail.com</h6>
          <label>location:</label><h6>Langa, Cape Town, 7455</h6>
          <h5>socials:</h5>
          <a href="https://github.com/yolandamatiwane" target="_blank"><img src="https://yolandamatiwane.github.io/vueProjectImages/icons/github.png"></a>
          <a href="www.linkedin.com/in/yolanda-matiwane-73683a17b" target="_blank"><img src="https://yolandamatiwane.github.io/vueProjectImages/icons/linkedin%20(1).png"></a>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
// import SpinnerComp from "../components/SpinnerComp.vue"; 
  export default {
  //   components:{
  //   SpinnerComp
  // },
    data() {
      return {
        name: '',
        email: '',
        message: '',
        error: '',
        submitted: false
      };
    },
    methods: {
      resetStates() {
        this.submitted = false;
        this.error = '';
      },
      resetForm() {
        this.name = '';
        this.email = '';
        this.message = '';
      },
      async onSubmit() {
        this.resetStates();
  
        try {
          const response = await fetch("https://formcarry.com/s/rKSODvoEfoK", {
            method: 'POST',
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: this.name, email: this.email, message: this.message })
          });
  
          const data = await response.json();
  
          if (response.ok) {
            this.submitted = true;
            this.resetForm();
          } else {
            this.error = data.message || 'Unknown error occurred.';
          }
        } catch (err) {
          this.error = err.message ? err.message : err;
        }
      }
    },
    computed: {
      showNotification() {
        return this.submitted || this.error;
      },
      icon() {
        return this.error ? 'error' : 'success';
      },
      errorMessage() {
        return this.error ? this.error : "Thanks for reaching out! I'll be sure to get back to you soon.";
      }
    }
  };
  
</script>

<style scoped>
  img{
    width:50px;
    height: 50px;
    margin-left: 20px;
  }
  img:hover{
    transform: scaleX(1.5);
    border:4px solid #2c3e50;
    border-radius: 50%
  }
  #contactsMainDiv{
    font-family: "Bangers";
    text-align: center;
  }
  h2{
    margin-top:70px;
  }
  input,textarea{
    text-align: center;
  }
  input:hover,textarea:hover{
    border: 5px solid #2c3e50;
  }
  .formcarry-container{
    margin-top: 100px;
    width:60%;
    margin-left:200px;
  }
  label{
    font-size:20px ;
  }
  button{
    width:30%;
  }
  #dets{
    margin-top: 100px;
  }
    /* For small screens (max-width: 768px) */
    @media only screen and (max-width: 768px) {
    .formcarry-container {
      width: 90%;
      margin-left: 20px;
    }
    .col-sm-6 {
      width: 100%;
    }
    #dets {
      margin-top: 50px;
    }
    label {
      font-size: 18px;
    }
    input, textarea {
      font-size: 16px;
    }
    button {
      width: 40%;
    }
  }

  /* For extra small screens (max-width: 480px) */
  @media only screen and (max-width: 480px) {
    .formcarry-container {
      width: 95%;
      margin-left: 10px;
    }
    label {
      font-size: 16px;
    }
    input, textarea {
      font-size: 14px;
    }
    button {
      width: 50%;
    }
  }
</style>