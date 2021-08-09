<template>
  <div class="skill-group-item">
    <p class="has-border has-border-thin">{{ itemName }}</p>
    <div class="group-item-list">
      <ul>
        <li>
          <p v-for="skill in skills" :key="skill.id">
            {{ skill }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillGroupItem",
  props: {
    itemName: String,
    skills: Array,
  },
};
</script>

<style lang="scss">
.skill-group-item {
  > p {
    font-weight: bold;
  }

  > .group-item-list {
    ul {
      list-style-type: none;
      margin: 0;
      padding-left: 24px;
      list-style-position: inside;

      > li {
        > p {
          position: relative;
          margin: 0;
          margin-bottom: 8px;

          &::before {
            content: "";
            position: absolute;
            width: 6px;
            height: 6px;
            left: 0;
            top: calc(50% - 3px);
            transform: translateX(-20px);
            border-radius: 50%;
            background-color: var(--primary-color);
          }
        }
      }
    }
  }
}
</style>
