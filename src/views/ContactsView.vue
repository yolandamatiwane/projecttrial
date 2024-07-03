<template>
    <div>
        <h1>Contact Me!</h1>
        <form @submit.prevent="formSubmit">
            <label>Name and Surname </label>
            <input type="password" required v-model="name">
            <label>Email: </label>
            <input type="email" required v-model="email">
             
        </form>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    div{
        margin-top:60px;
    }
</style>