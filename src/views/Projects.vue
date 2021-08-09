<template>
  <div class="projects">
    <div class="body-content">
      <header>
        <h1 class="is-header has-border">Projects</h1>
      </header>
      <section class="project-container">
        <project
          v-for="project in projects"
          :key="project.id"
          v-bind="project"
        />
      </section>
    </div>
  </div>
</template>

<script>
import Project from "../components/project.vue";

export default {
  name: "Projects",
  components: {
    Project,
  },
  data: () => ({
    projects: [],
  }),
  created: function () {
    this.projects = this.$profileService.getProjects();
  },
};
</script>

<style lang="scss">
@import "../scss/_responsive.scss";

.project-container {
  display: grid;
  gap: 16px;

  @include tablet {
    grid-template-columns: repeat(2, max(300px));
  }

  @include desktop-fullhd {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
