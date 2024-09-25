<template>
  <v-card elevation="0" class="border">
    <v-img
      :src="`${imgUrl}/${productItem.product_image}`"
      :height="`${height}px`"
    ></v-img>
    <v-card-item class="pb-4 bg-ash">
      <div class="text-subtitle-1 font-weight-bold secondary-font">
        {{ productItem.title }}
      </div>
      <div class="text-subtitle-2 secondary-font">
        LD-SHD-{{ productItem.productdata?.[0]?.rack_number || "N/A" }}
      </div>
      <div class="sell-content mt-2">
        <div class="text-h6 secondary-font font-weight-bold">
          {{ productItem.productdata?.[0]?.regular_price }} BDT
        </div>
      </div>
    </v-card-item>
  </v-card>
</template>

<script setup>
import { defineProps } from "vue";
import { imgUrl } from "@/plugins/imgUrl.js";

const props = defineProps({
  productItem: {
    type: Object,
    required: true,
  },
  height: {
    type: [String, Number], // Accept both string or number
    default: 300, // Set the default height to 300 if not provided
  },
});
</script>

<style lang="scss" scoped>
.bg-ash {
  background-color: #f3f3f3;
}
</style>
