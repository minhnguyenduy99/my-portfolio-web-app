<template>
  <div class="skills">
    <div class="body-content">
      <header>
        <h1 class="is-header has-border">Experiences</h1>
      </header>
      <div class="skill-page-layout">
        <div>
          <section class="description">
            <p v-html="description"></p>
            <section class="experiences">
              <experiences :experiences="experiences" />
            </section>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Experiences from "../components/experiences.vue";

export default {
  name: "Skills",
  components: {
    Experiences,
  },
  data: () => ({
    experiences: [],
  }),
  created: function () {
    this.experiences = this.$profileService.getExperiences();
  },
};
</script>

<style lang="scss">
@import "../scss/_responsive.scss";

.skill-page-layout {
  display: grid;

  .experiences {
    margin: 2rem 0;
  }

  @include desktop {
    grid-template-columns: auto max(300px);
    column-gap: 32px;
  }

  .skill-groups {
    > :not(:last-child) {
      margin-bottom: 16px;
    }
  }
}
</style>
