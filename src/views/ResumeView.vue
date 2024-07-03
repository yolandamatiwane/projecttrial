<template>
    <div id="resumeMainDiv">
        <h1>Resume:</h1>
        <div class="card">
            <h5>Education:</h5>
            <img src="https://yolandamatiwane.github.io/vueProjectImages/resume/Animation%20-%201720014157565.gif">
            

            
        </div>
        <div class="card">
            <h5>Work Experience:</h5>
            <img src="https://yolandamatiwane.github.io/vueProjectImages/resume/Animation%20-%201720014157565.gif">

        </div>
        <div class="card">
            <h5>Skills:</h5>
            <img src="https://yolandamatiwane.github.io/vueProjectImages/resume/Animation%20-%201720014157565.gif">

        </div>
    </div>
</template>
<script>
export default {
    computed:{
        educationData(){
            return this.$store.state.education
        },
        workExpData(){
            return this.$store.state.workExperience
        },
        skillsData(){
            return this.$store.state.skills
        }
    }
}
</script>
<style scoped>
    img{
        width:300px;
        height:200px;
        margin-left:700px;
    }
    .card{
        background-color:rgb(204, 192, 255);
        font-family:"Bangers";
        margin-bottom: 20px;
        height:500px;
    }
    #resumeMainDiv {
        margin-top: 60px;

    }
    h1{
        font-family:"Bangers";
        font-size: 100px;
        color: #bb7aad;
        text-shadow: 2px 2px 4px #000000;
    }
</style>