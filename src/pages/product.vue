<script setup>
import AllProduct from "@/components/homePageSection/AllProduct.vue";
import PageIntro from "@/components/pageExist/PageIntro.vue";
import { useProductStore } from "@/stores/productStore";
import { computed } from "vue";

const useProducts = useProductStore();

useProducts.fetchProductExecute();

const products = computed(() => {
  return useProducts.products;
});
</script>

<template>
  <PageIntro />
  <AllProduct :products="products" />
</template>

<style lang="scss" scoped></style>
