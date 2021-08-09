<template>
  <div class="experience">
    <header class="is-header">Experiences</header>
    <div
      class="experience__item"
      v-for="experience in experiences"
      :key="experience.id"
    >
      <span class="line" />
      <div class="content">
        <span class="is-caption">{{ experience.time }}</span>
        <span>{{ experience.content }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Experiences",
  props: {
    experiences: Array,
  },
  computed: {
    itemCount() {
      return this.experiences.length;
    },
  },
};
</script>

<style lang="scss">
.experience {
  position: relative;

  > header {
    margin-bottom: 32px;
  }

  & > &__item {
    position: relative;
    padding-left: 4rem;

    .content {
      span {
        display: block;

        &:first-child {
          margin-bottom: 8px;
        }
      }
    }

    &::before {
      content: "";
      position: absolute;
      left: 0;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background-color: var(--primary-color);
    }

    &:not(:last-child) {
      margin-bottom: 32px;

      > span.line {
        position: absolute;
        top: 14px;
        left: 14px;
        width: 1px;
        bottom: -32px;
        background-color: var(--primary-color);
      }
    }
  }
}
</style>
