<template>
  <v-container>
    <div class="category-list">
      <swiper
        :slidesPerView="6"
        :spaceBetween="20"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="(item, index) in allCategory" :key="index" class="pb-1">
          <CategoryItem
            :category-item="item"
            @click="$router.push(`category/${item.id}`)"
          />
          <!-- ${item.category_title.toLowerCase().replace(/\s+/g, '-')} -->
        </swiper-slide>
      </swiper>
    </div>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import CategoryItem from "./CategoryItem.vue";

import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

// Define the modules
const modules = [Navigation];

const props = defineProps({
  allCategory: {
    type: Array,
    default: [],
  },
});
</script>

<style lang="scss" scoped></style>
