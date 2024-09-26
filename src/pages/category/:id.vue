<script setup>
import PageIntro from "@/components/pageExist/PageIntro.vue";
import CategoryProduct from "@/components/homePageSection/CategoryProduct.vue";
import { useCategoryStore } from "@/stores/categoryStore";
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const categoryStore = useCategoryStore();
const subCategory = categoryStore.getSubCategory(route.params.id).child;
</script>

<template>
  <PageIntro />
  <SubCategory :sub-category="subCategory" />
  <CategoryProduct />
</template>

<style scoped lang="scss"></style>
