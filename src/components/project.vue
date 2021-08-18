<template>
  <div class="project">
    <div class="project__header">
      <span class="icon is-medium is-primary">
        <i class="far fa-folder"></i>
      </span>
      <p class="project__type">{{ projectType }}</p>
    </div>
    <div class="project__content">
      <p class="is-title">{{ title }}</p>
      <div class="project__description">
        <p class="is-caption" v-html="description"></p>
      </div>
    </div>
    <div class="project__footer">
      <div>
        <div>
          <span
            class="technology"
            v-for="tech in technologies"
            :key="tech.id"
            >{{ tech }}</span
          >
        </div>
        <a :href="githubLink" target="blank">
          <span class="icon is-light is-medium">
            <i class="fab fa-github"></i>
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: {
    title: String,
    description: String,
    projectType: String,
    technologies: Array,
    githubLink: String,
    productLink: String,
  },
  setup() {},
  computed: {
    technologiesStr() {
      return this.technologies.join(", ");
    },
  },
};
</script>

<style lang="scss">
.project {
  padding: 24px;
  background-color: var(--primary-dark-color);
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    box-shadow: black 0px 10px 15px -3px,
      rgba(255, 255, 255, 0.05) 0px 4px 6px -2px;
  }

  &__header {
    margin-bottom: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__type {
    padding: 5px 10px;
    margin: 0;
    margin: -5px;
    font-weight: bold;
    color: var(--primary-color);
    transition: 0.15s ease;

    &:hover {
      opacity: 1;
    }
  }

  &__content {
    flex-grow: 1;
    > :first-child {
      margin-bottom: 12px;
    }
  }

  &__description {
    > :not(:last-child) {
      margin-bottom: 16px;
    }
  }

  &__footer {
    margin-top: 24px;
    padding-top: 16px;
    border-top: 2px solid var(--dark-color);

    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;

      span.technology {
        display: inline-block;
        padding: 0 8px;
        opacity: 0.8;
        transition: 0.15s ease;
        color: var(--primary-color);
        font-weight: bold;

        &:not(:last-child) {
          border-right: 1px solid var(--dark-color);
        }
        &:first-child {
          padding-left: 0;
        }

        &:hover {
          opacity: 1;
        }
      }
    }
  }
}
</style>
