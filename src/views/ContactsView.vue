<template>
    <div id="contactMainDiv">
        <h1>Contact Me!</h1>
       <div class="card">
        <form @submit.prevent="formSubmit">
            <label>Name and Surname </label>
            <br>
            <input type="name" required v-model="name">
            <br>
            <label>Email: </label>
            <br>
            <input type="email" required v-model="email">
            <br>
            <label>Message: </label>
            <br>
            <textarea required v-model="message"></textarea>
            <br>
            <button type="submit">Send</button>
            <button type="reset">Clear</button>
             
        </form>
       </div>
    </div>
</template>
<script>
export default {
    
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