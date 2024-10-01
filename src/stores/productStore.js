import { defineStore } from "pinia";
import { useAxios } from "@vueuse/integrations/useAxios";
import { url } from "@/plugins/url.js";
import { ref } from "vue";

export const useProductStore = defineStore("productStore", () => {
  const {
    execute: fetchProductExecute,
    data: products,
    isLoading: productsLoading,
  } = useAxios(`${url}/all-product`);

  const cartItems = ref(
    JSON.parse(sessionStorage.getItem('cartItems')) || []
  );

  const addToCard = (id) =>{
    const cartItem =  products.value.find( (item) => item.id == id )
    if(cartItem){
      cartItems.value.push(cartItem);
      sessionStorage.setItem('cartItems', JSON.stringify(cartItems.value))
    }
  }

  const removeFromCart = (id) => {
    const index = cartItems.value.findIndex((item) => item.id === id);
    if(index !== -1 ){
      cartItems.value.splice(index, 1);
      sessionStorage.setItem('cartItems', JSON.stringify(cartItems.value));
    }
  }

  watch(cartItems, (newCartItems) => {
    sessionStorage.setItem('cartItems', JSON.stringify(newCartItems));
  });


  return { products, productsLoading, fetchProductExecute , addToCard , removeFromCart, cartItems};
  
});
