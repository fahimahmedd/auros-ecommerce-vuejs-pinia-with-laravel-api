import { url } from "@/plugins/url";
import { useAxios } from "@vueuse/integrations/useAxios";
import { defineStore } from "pinia";

export const useCategoryStore = defineStore("categoryStore", () => {
  const {
    execute: fetchCategoryExecute,
    data: category,
    isLoading: categoryLoading,
  } = useAxios(`${url}/all-category`, { immediate: false });  


  const getSubCategory = (id) => {
    // Ensure data is loaded and defined
    if (category.value && category.value.length > 0) {
      return category.value.find((item) => item.id == id);
    }
    return null; // Or handle it as needed
  };
  
  return { fetchCategoryExecute, category, categoryLoading , getSubCategory};
});
