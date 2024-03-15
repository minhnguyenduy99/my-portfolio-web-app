<template>
  <div class="certificate-group">
    <p class="is-title">{{ groupName }}</p>
    <div v-if="type == 'image'" class="certificate-image-group">
      <div v-for="item in items" :key="item.id" class="certificate">
        <img :src="item.image" />
      </div>
    </div>
    <div v-else class="certificate-text-group">
      <ul>
        <li v-for="item in items" :key="item.id">
          <p>
            <span v-html="item.text"></span>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CertificateGroup",
  props: {
    groupName: String,
    type: String,
    items: Array,
  },
};
</script>

<style lang="scss">
.certificate-group {
  .is-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 16px;
  }

  .certificate-image-group {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 16px;

    .certificate {
      img {
        max-width: 150px;
        width: 100%;
        height: auto;
        border-radius: 8px;
      }
    }
  }

  .certificate-text-group {
    ul {
      li {
        margin-bottom: 16px;
      }
    }
  }
}
</style>
