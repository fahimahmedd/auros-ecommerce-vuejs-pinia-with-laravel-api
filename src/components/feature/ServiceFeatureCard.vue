<template>
  <v-card class="service-feature-item text-center" elevation="0" color="transparent">
    <v-img :src="serviceFeature.image" height="65" class="mob-adjust-height"> </v-img>
    <div class="mt-5 text-h6 text-uppercase font-weight-black secondary-font">
      {{ serviceFeature.title }}
    </div>
    <p class="mt-1">{{ serviceFeature.detail }}</p>
  </v-card>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  serviceFeature: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped lang="scss">
@media (min-width: 280px) and (max-width: 599.98px) {
  .mob-adjust-height {
    height: 50px !important;
  }
  .text-h6 {
    font-size: 15px !important;
  }
}
</style>
