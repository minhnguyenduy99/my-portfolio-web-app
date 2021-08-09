<template>
  <div class="project">
    <div class="project__header">
      <span class="icon is-medium is-primary">
        <i class="far fa-folder"></i>
      </span>
    </div>
    <div class="project__content">
      <p class="is-title">{{ title }}</p>
      <div class="project__description">
        <p class="is-caption" v-html="description"></p>
      </div>
    </div>
    <div class="project__footer">
      <div>
        <p class="is-caption">{{ projectType }}</p>
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
    githubLink: String,
    productLink: String,
  },
  setup() {},
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
    padding-top: 24px;
    border-top: 2px solid black;

    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>
