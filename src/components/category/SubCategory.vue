<template>
  <v-container>
    <div class="all-product-container mt-1">
      <swiper
        :slidesPerView="6"
        :spaceBetween="20"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="(item, index) in subCategory" :key="index" class="pb-1">
          <CategoryItem :category-item="item" />
          <!-- ${item.category_title.toLowerCase().replace(/\s+/g, '-')} -->
        </swiper-slide>
      </swiper>
    </div>
  </v-container>
</template>

<script setup>
import { ref, defineProps } from "vue";

import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import CategoryItem from "../category/CategoryItem.vue";

// Define the modules
const modules = [Navigation];
const props = defineProps({
  subCategory: {
    type: Array,
    default: [],
  },
});
</script>

<style lang="scss" scoped></style>
