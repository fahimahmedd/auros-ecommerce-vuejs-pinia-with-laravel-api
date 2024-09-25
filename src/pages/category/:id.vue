<script setup>
import PageIntro from "@/components/pageExist/PageIntro.vue";
import CategoryProduct from "@/components/homePageSection/CategoryProduct.vue";
import { useCategoryStore } from "@/stores/categoryStore";
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();

const catgeoryStore = useCategoryStore();

const soterSubCategory = catgeoryStore.getSubCategory(route.params.id);

const subCategory = soterSubCategory.child;

console.log(subCategory);
</script>

<template>
  <PageIntro />
  <CategoryProduct :sub-category="subCategory" />
</template>

<style scoped lang="scss"></style>
