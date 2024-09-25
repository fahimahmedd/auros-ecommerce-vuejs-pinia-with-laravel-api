<template>
  <v-container class="mt-5">
    <v-row>
      <v-col cols="7">
        <ProductImages />
      </v-col>
      <v-col cols="5">
        <ProductInfo />
      </v-col>
    </v-row>
    <div class="product-overview mt-10">
      <v-tabs v-model="tab">
        <v-tab value="description">Product Description</v-tab>
        <v-tab value="question">Questions</v-tab>
        <v-tab value="review">Reviews</v-tab>
      </v-tabs>
      <v-card-text>
        <v-tabs-window v-model="tab">
          <v-tabs-window-item value="description"> <Description /> </v-tabs-window-item>

          <v-tabs-window-item value="question"> Two </v-tabs-window-item>

          <v-tabs-window-item value="review"> Three </v-tabs-window-item>
        </v-tabs-window>
      </v-card-text>
    </div>
  </v-container>
</template>

<script setup>
import Description from "@/components/productDetail/Description.vue";
import ProductImages from "@/components/productDetail/ProductImages.vue";
import { ref } from "vue";

const tab = ref(null);
</script>

<style scoped lang="scss">
.product-overview {
  padding: 20px;
  border: 1px solid #e4e4e4;
  border-radius: 16px;
}
</style>
