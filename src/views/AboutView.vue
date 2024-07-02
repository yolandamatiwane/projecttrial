<template>
    <div>
        <h1>
            {{pageAboutData()}}
        </h1>
    </div>
</template>
<script>
export default {
    methods: {
      pageAboutData(){
        return this.$store.state.aboutMe
      }
    },
    computed:{
      getAboutMe(){
        return this.$store.dispatch('getAboutMe')
      }
    },
    mounted() {
      this.getAboutMe
    }
    
}
</script>
<style scoped>
    .card{
        background-color: palevioletred;
        height: 400px;
    }
</style>