<template>
  <div class="about">
    <div class="body-content">
      <header>
        <h1 class="is-header has-border">About me</h1>
      </header>
      <section>
        <p v-html="aboutMe"></p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data: () => ({
    aboutMe: null,
  }),
  created: function () {
    this.aboutMe = this.$profileService.getAboutMe();
  },
};
</script>
