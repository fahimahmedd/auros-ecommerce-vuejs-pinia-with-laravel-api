<script setup>
import Category from "@/components/category/Category.vue";
import Feature from "@/components/feature/Feature.vue";
import ProductFeature from "@/components/feature/ProductFeature.vue";
import ServiceFeature from "@/components/feature/ServiceFeature.vue";
import Hero from "@/components/hero/Hero.vue";
import BestSellingProduct from "@/components/homePageSection/BestSellingProduct.vue";
import PopularProduct from "@/components/homePageSection/PopularProduct.vue";
import ProductShow from "@/components/homePageSection/ProductShow.vue";
import { useCategoryStore } from "@/stores/categoryStore";
import { useProductStore } from "@/stores/productStore";
import { computed } from "vue";

const useProduct = useProductStore();
const products = computed(() => {
  return useProduct.products;
});
useProduct.fetchProductExecute();

const useCategory = useCategoryStore();

const catgeory = computed(() => {
  return useCategory.category;
});
</script>
<template>
  <div
    v-if="useProduct.productsLoading"
    class="d-flex justify-center align-center"
    style="height: 600px"
  >
    <div class="text-h4 font-weight-bold text-medium-emphasis">Loading...</div>
  </div>
  <div v-else>
    <Hero />
    <Category :all-category="catgeory" />
    <Feature />
    <BestSellingProduct :products="products" />
    <ProductFeature />
    <ProductShow />
    <HomeFeature />
    <PopularProduct />
    <ServiceFeature />
  </div>
</template>
