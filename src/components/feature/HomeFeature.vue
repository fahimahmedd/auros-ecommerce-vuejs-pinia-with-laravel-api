<template>
  <div class="home-feature">
    <v-container fluid>
      <v-row>
        <v-col lg="5" cols="12">
          <div class="text-h2 font-weight-black">
            Transform your living space with style that lasts
          </div>
          <div class="text-h5 mt-4">
            Organize every space with our timeless furniture collections
          </div>
          <ul class="mt-5">
            <li>
              <span class="mdi mdi-check"></span> At eleifend mattis ligula, porta finibus
              urna gvida at.
            </li>
            <li>
              <span class="mdi mdi-check"></span> Kenean vehicula sodales arcu non mattis.
            </li>
            <li>
              <span class="mdi mdi-check"></span> Ginteger dapibus ac dui pretium blanss
              aptent.
            </li>
          </ul>
        </v-col>
        <v-col lg="7" cols="12">
          <div class="feature-image">
            <v-img src="../../assets/images/feature/d.png"></v-img>
          </div>
          <div class="feature-image-slide mt-5">
            <swiper
              :slidesPerView="3"
              :spaceBetween="20"
              :navigation="true"
              :modules="modules"
              :breakpoints="{
                '280': {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                '768': {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
              }"
              class="mySwiper"
            >
              <swiper-slide
                v-for="(product, index) in products"
                :key="index"
                class="pb-1"
              >
                <ProductShowItem
                  :show-item="product"
                  @click="$router.push(`/product-detail/${product.id}`)"
                />
              </swiper-slide>
            </swiper>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { ref } from "vue";
import ProductShowItem from "../product/ProductShowItem.vue";

// Define the modules
const modules = [Navigation];

const props = defineProps({
  products: {
    type: Array,
    default: [],
  },
});
</script>

<style scoped lang="scss">
.home-feature {
  background-color: rgba(229, 228, 228, 0.5);
  padding: 100px 0;
  margin: 70px 0 70px 0;
}

@media (min-width: 280px) and (max-width: 960.98px) {
  .text-h2 {
    font-size: 30px !important;
  }
  .text-h5 {
    font-size: 17px !important;
  }
  .home-feature {
    padding: 40px 0;
    margin: 20px 0 20px 0;
  }
}
</style>
