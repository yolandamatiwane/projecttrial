<template>
  <div class="about">
    <h1 v-for="detail in pageAboutData()" :key="detail">
      {{ detail }}
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
    },
}
</script>
