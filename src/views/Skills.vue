<template>
  <div class="skills">
    <div>
      <div class="body-content">
        <header>
          <h1 class="is-header has-border">Skills</h1>
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
          <section class="skill-groups">
            <skill-group
              v-for="group in skillGroups"
              :key="group.id"
              v-bind="group"
            />
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SkillGroup from "../components/skill-group.vue";
import Experiences from "../components/experiences.vue";

export default {
  name: "Skills",
  components: {
    SkillGroup,
    Experiences,
  },
  data: () => ({
    description: `For the last one year, I've been working on multiple Web projects varied from both frontend and backend development.
    On the progress of working with them, I've learned a lot of essential and highly-demanded techniques. Besides, I'm always considerate of pratical aspects of the project such as project structure, modulization, scalability, etc.
    <p>I'm mainly specialised in <strong>Javascript / NodeJS</strong>. I once worked on Python and AWS as part of my internship as well. Nonetheless, I always prepare myself to adapt and work with other technologies in term of job requirement.</p>`,
    skillGroups: [],
    experiences: [],
  }),
  created: function () {
    const { description, skills } = this.$profileService.getSkillInfo();
    this.experiences = this.$profileService.getExperiences();
    this.description = description;
    this.skillGroups = skills;
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
