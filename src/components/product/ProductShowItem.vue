<template>
  <v-card elevation="0" color="#fff">
    <v-img
      height="220"
      :src="`${imgUrl}/${showItem.product_image}`"
      class="mob-adjust-height"
    ></v-img>
    <v-card-item class="pb-4 bg-ash">
      <div class="text-subtitle-1 font-weight-bold secondary-font">
        {{ showItem.title }}
      </div>
      <div class="text-subtitle-2 secondary-font">
        LDSH-D{{ showItem.productdata?.[0]?.rack_number || "N/A" }}
      </div>
    </v-card-item>
  </v-card>
</template>

<script setup>
import { imgUrl } from "@/plugins/imgUrl";
import { defineProps } from "vue";

const props = defineProps({
  showItem: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.bg-ash {
  background-color: #f3f3f3;
}

@media (min-width: 280px) and (max-width: 599.98px) {
  .mob-adjust-height {
    height: 140px !important;
  }
  .text-subtitle-1 {
    font-size: 13px !important;
  }
}
</style>
