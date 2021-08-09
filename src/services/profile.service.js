export default {
  data: null,

  // eslint-disable-next-line no-unused-vars
  loadDataSource(url) {
    // return new Promise((resolve, reject) => {
    //   readFile(path.resolve(__dirname, "../../profile.json"), (err, data) => {
    //     if (err) {
    //       return reject(err);
    //     }
    //     console.log(data);
    //     resolve(JSON.parse(data));
    //   });
    // });
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
