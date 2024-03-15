<template>
  <div class="experience">
    <div
      class="experience__item"
      v-for="experience in experiences"
      :key="experience.id"
    >
      <span class="line"></span>
      <div class="content">
        <div class="is-caption">
          {{ experience.from }} - {{ experience.to }}
        </div>
        <div class="company">
          {{ experience.company }}
          <span v-if="experience.company">/</span>
          {{ experience.position }}
        </div>
      </div>
      <div class="achievement">
        <ul>
          <li
            v-for="achievement in experience.achievements"
            :key="achievement.id"
          >
            <span>{{ achievement }}</span>
          </li>
        </ul>
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
      .company, .position {
        font-weight: bold;
      }
    }

    .achievement {
      margin-top: 16px;

      ul {
        padding-inline: 20px;
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
