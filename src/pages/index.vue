<script setup>
import Category from "@/components/category/Category.vue";
import Feature from "@/components/feature/Feature.vue";
import ProductFeature from "@/components/feature/ProductFeature.vue";
import ServiceFeature from "@/components/feature/ServiceFeature.vue";
import Hero from "@/components/hero/Hero.vue";
import BestSellingProduct from "@/components/homePageSection/BestSellingProduct.vue";
import PopularProduct from "@/components/homePageSection/PopularProduct.vue";
import ProductShow from "@/components/homePageSection/ProductShow.vue";
import IsCategoryLoading from "@/components/isLoading/isCategoryLoading.vue";
import IsProductLoading from "@/components/isLoading/isProductLoading.vue";
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
  <Hero />
  <!-- Category Section -->
  <div>
    <IsCategoryLoading v-if="useCategory.categoryLoading" />
    <Category v-else :all-category="catgeory" />
  </div>

  <Feature />
  <div>
    <IsProductLoading v-if="useProduct.productsLoading" />
    <BestSellingProduct v-else :products="products" />
  </div>

  <ProductFeature />
  <ProductShow :products="products" />
  <HomeFeature :products="products" />
  <div>
    <IsProductLoading v-if="useProduct.productsLoading" />
    <PopularProduct v-else :products="products" />
  </div>
  <ServiceFeature />
</template>
