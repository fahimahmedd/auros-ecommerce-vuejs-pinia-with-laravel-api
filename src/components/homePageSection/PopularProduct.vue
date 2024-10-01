<template>
  <v-container fluid>
    <div class="section-heading text-center mb-10">
      <div class="text-h3 secondary-font font-weight-bold">Our Popular Product</div>
    </div>
    <swiper
      :slidesPerView="4"
      :spaceBetween="20"
      :navigation="true"
      :modules="modules"
      :breakpoints="{
        '280': {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        '650': {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        '1024': {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }"
      class="mySwiper"
    >
      <swiper-slide v-for="(product, index) in products" :key="index" class="pb-1">
        <ProductItem
          :product-item="product"
          @click="$router.push(`/product-detail/${product.id}`)"
        />
      </swiper-slide>
    </swiper>
  </v-container>
</template>

<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { ref } from "vue";
import ProductItem from "../product/ProductItem.vue";

// Define the modules
const modules = [Navigation];

const props = defineProps({
  products: {
    type: Array,
    default: [],
  },
});
</script>

<style lang="scss" scoped>
@media (min-width: 280px) and (max-width: 960.98px) {
  .section-heading {
    margin-bottom: 20px !important;
  }
  .text-h3 {
    font-size: 30px !important;
  }
}
</style>
