<script setup>
import { useProductStore } from "@/stores/productStore";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
const productStore = useProductStore();
const route = useRoute();

const productId = route.params.id;

const isItemInCart = computed(() => {
  return productStore.cartItems.some((item) => item.id == productId);
});

const productQuantity = ref(1);
const quantityIncrease = () => productQuantity.value++;
const quantityDecrease = () => {
  if (productQuantity.value === 1) {
    productQuantity.value = 1;
  } else {
    productQuantity.value--;
  }
};

productStore.fetchProductExecute();
</script>

<template>
  <div class="category-highlight">Sofa</div>
  <div class="text-h4 font-weight-black mt-2">DOUBLE SOFA - POMPEI</div>
  <div class="text-subtitle-2 font-weight-regular mt-2">
    <span class="font-weight-medium">Code :</span> SDC-227-9-1-66 (REXINE)
  </div>
  <div class="text-subtitle-2 font-weight-regular mt-2">
    <span class="font-weight-medium">Brand :</span> Auros XHM
  </div>
  <div class="mt-3 text-h5 secondary-font font-weight-bold">23,000 BDT</div>
  <v-divider class="mt-5"></v-divider>
  <div class="product-feature mt-5">
    <ul>
      <li>Ergonomic Comfort: Designed to support your posture .</li>
      <li>Durable Fabric: Upholstered in high-quality.</li>
      <li>Spacious Seating: Generously sized .</li>
      <li>Stylish Design: A sleek, modern design that complements any interior decor,</li>
      <li>Sturdy Build: Constructed with a solid wood frame and reinforced.</li>
      <li>Durable Fabric: Upholstered in high-quality.</li>
      <li>Spacious Seating: Generously sized .</li>
    </ul>
  </div>
  <v-divider class="mt-5"></v-divider>
  <div class="add-cart-container mt-5">
    <div class="d-flex align-center mt-5">
      <v-btn
        prepend-icon="mdi-cart"
        color="primary"
        height="50"
        rounded="lg"
        width="48%"
        v-if="isItemInCart"
        disabled
      >
        Already added
      </v-btn>
      <v-btn
        prepend-icon="mdi-cart"
        color="primary"
        height="50"
        rounded="lg"
        variant="outlined"
        width="48%"
        @click="productStore.addToCard(productId)"
        v-else
      >
        Add To Cart
      </v-btn>
      <v-btn width="48%" class="ml-4" color="primary" height="50" rounded="lg">
        Buy Now
      </v-btn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.category-highlight {
  padding: 4px 15px;
  background-color: #dabdf04a;
  border-radius: 35px;
  display: inline-block;
  font-size: 12px;
}
.product-feature {
  ul {
    margin-left: 20px;
    li {
      list-style: disc;
      color: #545353;
      font-weight: normal;
      margin-top: 8px;
      font-size: 14px;
    }
  }
}
.number-text-center :deep(input) {
  text-align: center;
}

@media (min-width: 280px) and (max-width: 960.98px) {
  .text-h4 {
    font-size: 30px !important;
  }
}
</style>
