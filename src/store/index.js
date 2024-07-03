import { createStore } from 'vuex'

export default createStore({
  state: {
    aboutMe:null,
    projects:null,
    education:null,
    skills:null,
    workExperience:null,
    testimonials:null
  },
  getters: {
  },
  mutations: {
    setAboutMe(state,payload){
      state.aboutMe = payload
    },
    setProjects(state,payload){
      state.projects = payload
    },
    setEducation(state,payload){
      state.education = payload
    },
    setSkills(state,payload){
      state.skills = payload
    },
    setWorkExperience(state,payload){
      state.workExperience = payload
    },
    setTestimonials(state,payload){
      state.testimonials = payload
    }
  },
  actions: {
    async getAboutMe({commit}){
      
      try {let fetchedInfo = await fetch('https://yolandamatiwane.github.io/first_api/data/')
      let data = await fetchedInfo.json()
      let {aboutMe,projects,education,skills,workExperience,testimonails}= data
      console.log(data);
      

      commit('setAboutMe',aboutMe)
      commit('setProjects',projects)
      commit('setEducation',education)
      commit('setSkills',skills)
      commit('setWorkExperience',workExperience)
      commit('setTestimonials',testimonails)
    } catch(error){
      console.log('Error fetching data',error.message)
    }
    }
  },
  modules: {
  }
})
