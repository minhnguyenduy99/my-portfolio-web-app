<template>
  <div class="sidebar">
    <div class="sidebar__header">
      <p class="is-header">My Portfolio</p>
    </div>
    <div class="sidebar__container">
      <div class="sidebar__info">
        <figure class="avatar">
          <img :src="profile.avatar" />
        </figure>
        <p class="fullname is-title">
          {{ profile.fullName }}
        </p>
        <p class="info-caption is-paragraph" v-html="profile.introduction"></p>
      </div>
      <nav class="sidebar__navigator">
        <ul class="navigation">
          <li
            v-for="(nav, index) in navigators"
            :key="nav.id"
            :class="{
              'navigation-item': true,
              'is-active': index === active,
            }"
          >
            <span class="active--up" v-if="index === active" />
            <router-link :to="nav.to">
              <span>
                {{ nav.name }}
              </span>
            </router-link>
            <span v-if="index === active" class="active--down" />
          </li>
        </ul>
      </nav>
      <div class="sidebar__footer">
        <div class="contact">
          <ul>
            <li v-for="(contact, index) in profile.contacts" :key="contact.id">
              <div v-if="contact.type === 'tooltip'" class="tooltip">
                <button
                  class="app-btn is-icon-btn"
                  @click="$_copyToClipboard(index, contact.value)"
                >
                  <span class="icon is-primary is-medium">
                    <i :class="contact.iconClass"></i>
                  </span>
                </button>
                <span class="tooltip-text">{{ contact.value }}</span>
              </div>
              <a v-else :href="contact.link" target="blank">
                <span class="icon is-primary is-medium">
                  <i :class="contact.iconClass"></i> </span
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
  props: {
    navigators: Array,
    active: Number,
    profileInfo: Object,
  },
  data: () => ({
    profile: null,
  }),
  created: function () {
    this.profile = { ...this.profileInfo };
  },
  methods: {
    async $_copyToClipboard(index, contact) {
      const cb = navigator.clipboard;
      await cb.writeText(contact).then(
        function () {
          this.profile.contacts[index].value = "Copied";
          this.$nextTick(() => {
            setTimeout(() => {
              this.profile.contacts[index].value = contact;
            }, 2000);
          });
        }.bind(this)
      );
    },
  },
};
</script>

<style lang="scss">
@import "../scss/_responsive.scss";
@import "../scss/_typography.scss";

.sidebar {
  height: 100%;
  display: flex;
  flex-direction: column;

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  & &__header {
    padding: 1rem;
    box-sizing: border-box;
    height: var(--navbar-height);
    color: var(--primary-color);
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;

    @include desktop {
      display: none;
    }
  }

  & &__container {
    flex-grow: 1;
    width: 100%;
    padding: 1rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__info {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;

    .avatar {
      width: 100px;
      height: 100px;
      max-width: 200px;
      margin: 0;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
      }
    }

    .fullname {
      color: var(--primary-color);
      margin: 20px 0;
    }

    .info-caption {
      margin: 10px 0;
    }
  }
}

nav.sidebar__navigator {
  padding: 2rem 0;
}

.sidebar__footer {
  display: flex;
  justify-content: center;
  padding: 1rem 0;
}

.contact {
  ul {
    display: flex;
    > li {
      padding: 10px 16px;
    }
  }
}
</style>
