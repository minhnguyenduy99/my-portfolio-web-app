<template>
  <div class="skill-group">
    <div class="skill-group-header">
      <span class="icon is-primary is-medium">
        <i :class="groupIcon"></i>
      </span>
      <span class="group-name is-title">
        {{ groupName }}
      </span>
    </div>
    <div class="items">
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
  name: "SkillGroup",
  props: {
    groupName: String,
    groupIcon: String,
    skills: Array,
  },
};
</script>

<style lang="scss">
.skill-group {
  > .skill-group-header {
    .icon {
      margin-right: 8px;
    }
    > .group-name {
      font-weight: bold;
    }
  }

  > .items {
    ul {
      list-style-type: none;
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
