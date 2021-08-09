import profileService from "./profile.service";

export function loadDataSource(url) {
  return profileService.loadDataSource(url);
}

export const servicePlugin = {
  install(app) {
    app.config.globalProperties.$profileService = profileService;
  },
};
