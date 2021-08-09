<template>
  <div class="theme-dark app">
    <div class="app__container">
      <div class="app__sidebar">
        <app-sidebar
          :navigators="navigators"
          :active="active"
          :profileInfo="profileInfo"
        />
      </div>
      <div class="app__page">
        <header class="navbar">
          <div class="navbar-content">
            <h1 id="page-header" class="is-header">My Portfolio</h1>
          </div>
        </header>
        <router-view v-slot="{ Component }">
          <transition
            enter-active-class="animate__animated animate__zoomIn"
            leave-active-class="animate__animated animate__zoomOut"
            mode="out-in"
          >
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script>
import AppSidebar from "./components/app-sidebar.vue";

export default {
  components: {
    AppSidebar,
  },
  setup() {},
  data: () => ({
    navigators: [
      { name: "About Me", to: "/aboutme" },
      { name: "Skills", to: "/skills" },
      { name: "Projects", to: "/projects" },
    ],
    active: 0,
    profileInfo: null,
  }),
  watch: {
    $route(to) {
      this.active = this.navigators.findIndex((nav) => nav.to === to.path);
    },
  },
  created: function () {
    this.profileInfo = this.$profileService.getProfile();
  },
};
</script>

<style lang="scss">
@import "./scss/_main.scss";

html {
  margin: 0;
  font-size: var(--default-font-size);
  font-family: "Titillium Web", sans-serif;
  overflow-x: hidden;
  overflow-y: scroll;
}

body {
  margin: 0;
}

#app {
  box-sizing: border-box;

  p {
    line-height: 1.5;
  }
}

#page-header {
  // font-family: "Saira", sans-serif;
  font-weight: 900;
  color: var(--primary-color);
}

.app {
  min-height: 100vh;
  box-sizing: border-box;

  &__container {
    display: block;
  }

  &__sidebar {
    box-sizing: border-box;
    width: var(--sidebar-width);
    background: var(--primary-dark-color);
    height: 100%;
    min-height: 100vh;
  }

  &__page {
    box-sizing: border-box;
  }

  @include desktop {
    &__sidebar {
      position: fixed;
      top: 0;
      right: 0;
    }

    &__container {
      display: grid;
      grid-template-columns: auto var(--sidebar-width);
    }

    &__page {
      display: block;
    }
  }
}
</style>
