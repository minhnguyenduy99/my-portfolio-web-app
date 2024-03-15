<template>
  <div class="certificates-view">
    <div>
      <div class="body-content">
        <header>
          <h1 class="is-header has-border">Certificates</h1>
        </header>
        <div class="skill-page-layout">
          <section class="skill-groups">
            <certificate-group
              v-for="group in certificateGroups"
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
import CertificateGroup from "../components/certificate-group.vue";

export default {
  name: "Certificates",
  components: {
    CertificateGroup,
  },
  data: () => ({
    certificateGroups: [],
  }),
  created: function () {
    this.certificateGroups = this.$profileService.getCertificates();
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
