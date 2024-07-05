<template>
    <div id="resumeMainDiv">
        <h1>Resume:</h1>
        <div class="card">
            <img src="https://yolandamatiwane.github.io/vueProjectImages/resume/Animation%20-%201720060177546.gif">
            <h3>Education:</h3>
            <div v-for="edu in educationData" :key="edu.description">
                
                <h4><span>></span> {{ edu.year }}</h4>
                <h5>{{ edu.institution }}</h5>
                <h5>{{edu.description}}</h5>

            </div>
            

            
        </div>
        <div class="card">
            <h5>Work Experience:</h5>
            <img src="https://yolandamatiwane.github.io/vueProjectImages/resume/Animation%20-%201720014506045.gif">
            <div v-for="work in workExpData" :key="work.description">
                <h4><span>></span>  {{ work.year }}</h4>
                <h5><label>Place of Employment:</label> {{ work.placeOfWork }}</h5>
                <h5>{{ work.description }}</h5>
                <h6>Reference:</h6>
                <h5><label>Name:</label> {{ work.contact.name }}</h5>
                <h5><label>Position:</label> {{ work.contact.position }}</h5>
                <h5><label>Email:</label> {{ work.contact.email }}</h5>

            </div>

        </div>
        <div class="card">
            <h5>Skills:</h5>
            <img src="https://yolandamatiwane.github.io/vueProjectImages/resume/Animation%20-%201720014157565.gif">
            <div v-for="skill in skillsData" :key="skill.name">
                <h5><span>></span> {{ skill.name }}</h5>
                <!-- <img :src="skill.image"> -->

            </div>

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
    label{
        color:white;
    }
    @media only screen and (max-width: 768px) {
        img {
            width: 100%; /* Make image take up full width on mobile */
            height: auto; /* Maintain aspect ratio */
            margin-left: 0; /* Remove margin on mobile */
        }
    }

   .card {
        background-color: rgb(204, 192, 255);
        font-family: "Bangers";
        margin-bottom: 20px;
    }

    #resumeMainDiv {
        margin-top: 60px;
    }

    h1 {
        font-family: "Bangers";
        font-size: 100px;
        color: #bb7aad;
        text-shadow: 2px 2px 4px #000000;
    }

    label {
        color: white;
    }
</style>