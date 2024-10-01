<template>
  <swiper
    :spaceBetween="10"
    :navigation="true"
    :thumbs="{ swiper: thumbsSwiper }"
    :modules="modules"
    class="mySwiper2"
  >
    <swiper-slide v-for="(productImage, index) in productSlideImg" :key="index">
      <v-img :src="productImage.image" width="100%"></v-img>
    </swiper-slide>
  </swiper>

  <swiper
    @swiper="setThumbsSwiper"
    :spaceBetween="10"
    :slidesPerView="5"
    :freeMode="true"
    :watchSlidesProgress="true"
    :modules="modules"
    :breakpoints="{
      '280': {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      '768': {
        slidesPerView: 5,
        spaceBetween: 10,
      },
    }"
    class="mySwiper"
  >
    <swiper-slide
      v-for="(productImage, index) in productSlideImg"
      :key="index"
      class="border"
    >
      <v-img
        :src="productImage.image"
        max-height="80"
        width="100%"
        class="mob-sub-img"
      ></v-img>
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { ref } from "vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// Import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

// Set up thumbsSwiper and modules in Composition API
const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

const modules = [FreeMode, Navigation, Thumbs];

const productSlideImg = ref([
  {
    image: "../src/assets/images/product/brown-coution.png",
  },
  {
    image: "../src/assets/images/product/purple-chair.png",
  },
  {
    image: "../src/assets/images/product/sofaset.png",
  },
  {
    image: "../src/assets/images/product/chair.png",
  },
  {
    image: "../src/assets/images/product/leather-soft.png",
  },
  {
    image: "../src/assets/images/product/soft-chair.png",
  },
]);
</script>

<style lang="scss" scoped>
.mySwiper2 {
  width: 100%;
  height: 450px;
}

.mySwiper {
  width: 100%;
  height: 110px;
  padding-bottom: 10px;
  padding-right: 10px;
  margin-top: 20px;
  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
  }
}

@media (min-width: 280px) and (max-width: 599.98px) {
  .mySwiper2 {
    height: 260px;
  }
  .mySwiper {
    height: 100px;
  }
}
</style>
