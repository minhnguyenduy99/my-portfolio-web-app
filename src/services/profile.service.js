export default {
  data: null,

  loadDataSource(url) {
    return fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.data = data;
      });
  },

  getAboutMe() {
    return this.data?.aboutMe;
  },

  getSkillInfo() {
    return this.data?.skillInfo;
  },

  getExperiences() {
    return this.data.experiences;
  },

  getProjects() {
    return this.data?.projects;
  },

  getProfile() {
    return this.data?.profile;
  },
};
