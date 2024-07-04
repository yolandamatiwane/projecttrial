<template>
    <div id="contactMainDiv">
        <h1>Contact Me!</h1>
       <div class="card">
        <form @submit.prevent="formSubmit">
            <label>Name and Surname </label>
            <br>
            <input type="name" required v-model="name">
            <br>
            <!-- displaying error -->
            <span class="error" v-if="!nameValid"> Please input name, thank you.</span>
            <br>
            <label>Email: </label>
            <br>
            <input type="email" required v-model="email">
            <br>
            <span class="error" v-if="!emailValid"> Please input email, thank you.</span>
            <br>
            <label>Message: </label>
            <br>
            <textarea v-model="message"></textarea>
            <br>
            <span class="error" v-if="!messageValid"> Please input message, thank you. </span>
            <br>
            <button type="submit">Send</button>
            <button type="reset">Clear</button>
             
        </form>
       </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            name:'',
            email:'',
            message:'',
            nameValid: true,
            emailValid:true,
            messageValid:true

        }
    },
    methods:{
        // checks if the form is valid before submission
        formSubmit(){
            this.validateForm()
            if(this.nameValid && this.emailValid && this.messageValid){
                console.log('Submitting form...');
            } else{
                console.log('Form is invalid');
            }
        }
    },
    // checks each input field
    validateForm(){
        // error flags
        this.nameValid = true
        this.emailValid = true
        this.messageValid = true
        // name validation
        if(!this.name.trim()){
            this.nameValid = false
            console.log('Name is required');
        }
        // email validation
        if(!this.isValidEmail(this.email)){
            this.emailValid = false
            console.log('Email is invalid');
        }
        // message validation
        if(!this.message.trim()){
            this.messageValid = false
            console.log('Message is required');
        } 
    },
    // checks email format
    isValidEmail(email){
        let emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailFormat.test(email);
    }
    
}
</script>
<style scoped>
    #contactMainDiv{
        margin-top:60px;
    }
    .card{
        width: 40%;
        height:500px;
    }
</style>