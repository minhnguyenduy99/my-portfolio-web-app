<template>
  <div class="skill-group">
    <p class="is-title">{{ groupName }}</p>
    <slot name="items">
      <skill-group-item v-for="item in items" :key="item.id" v-bind="item" />
    </slot>
  </div>
</template>

<script>
import SkillGroupItem from "./skill-group-item.vue";

export default {
  name: "SkillGroup",
  components: {
    SkillGroupItem,
  },
  props: {
    groupName: String,
    items: Array,
  },
};
</script>

<style lang="scss">
.skill-group {
  padding: 24px;
  background-color: var(--primary-dark-color);

  > p:first-child {
    margin: 0;
  }
}
</style>
