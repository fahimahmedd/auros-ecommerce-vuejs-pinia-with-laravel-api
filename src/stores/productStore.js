import { defineStore } from "pinia";
import { useAxios } from "@vueuse/integrations/useAxios";
import { url } from "@/plugins/url.js";

export const useProductStore = defineStore("productStore", () => {
  const {
    execute: fetchProductExecute,
    data: products,
    isLoading: productsLoading,
  } = useAxios(`${url}/all-product`);

  return { products, productsLoading, fetchProductExecute };
  
});
