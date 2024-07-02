<template>
    <div>
        <form @submit.prevent="formSubmit">
            <h1>Sign Up Form hehe</h1>
            <!-- using v-model to save data in properties -->
             <label>Email: </label>
             <input type="email" required v-model="email">
             <label>Password: </label>
             <input type="password" required v-model="password">
             <label>Role: </label>
        </form>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    
</style>