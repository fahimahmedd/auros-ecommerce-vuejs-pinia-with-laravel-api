<template>
  <v-card rounded="lg" elevation="0" class="pa-2" width="100%" link>
    <v-card-item class="text-center pa-2">
      <v-img :src="`${imgUrl}/${categoryItem.category_image}`" max-height="65"></v-img>
      <div class="text-subtitle-1 my-1 mt-5 font-weight-bold">
        {{ categoryItem.category_title }}
      </div>
      <!-- <v-card-subtitle> {{ categoryItem.child.length }} Items </v-card-subtitle> -->
    </v-card-item>
  </v-card>
</template>

<script setup>
import { defineProps } from "vue";
import { imgUrl } from "@/plugins/imgUrl.js";
const props = defineProps({
  categoryItem: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
@media (min-width: 280px) and (max-width: 599.98px) {
  .text-subtitle-1 {
    font-size: 13px !important;
  }
}
</style>
