<template>
  <div class="cart-card d-flex ml-2" rounded="0" elevation="0">
    <div>
      <v-img :src="`${imgUrl}/${cartItem.product_image}`" height="70" width="70"> </v-img>
    </div>
    <div class="card-content ml-2">
      <div class="text-subtitle-2">
        {{ cartItem.title }}
      </div>
      <div class="text-caption mt-1 text-medium-emphasis">
        SDC-{{ cartItem.productdata?.[0]?.rack_number }}
      </div>
      <div class="card-bottom d-flex align-end justify-space-between">
        <div class="item-counter">
          <v-icon icon="mdi-minus" @click="quantityDecrease"> </v-icon>
          <span> {{ productQuantity }} </span>
          <v-icon icon="mdi-plus" @click="quantityIncrease"> </v-icon>
        </div>
        <div class="text-subtitle-1 font-weight-bold">
          {{ cartItem.productdata?.[0]?.sale_price * productQuantity }} BDT
        </div>
      </div>
    </div>
    <v-icon class="close-icon" icon="mdi-delete" color="red" @click="deleteItem">
    </v-icon>
  </div>
</template>

<script setup>
import { imgUrl } from "@/plugins/imgUrl";
import { useProductStore } from "@/stores/productStore";
import { ref } from "vue";
const productStore = useProductStore();
const props = defineProps({
  cartItem: {
    type: Object,
    default: {},
  },
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

const deleteItem = () => {
  productStore.removeFromCart(props.cartItem.id);
};
</script>

<style lang="scss" scoped>
.cart-card {
  padding: 15px 10px 10px 10px;
  position: relative;
  border-bottom: 1px solid #c3c3c35b;
}
.close-icon {
  position: absolute;
  top: 10px;
  right: 12px;
  font-size: 18px;
  color: #8e8e8e;
  cursor: pointer;
  &:hover {
    color: #000;
  }
}
.card-content {
  width: 100%;
}
.card-bottom {
  width: 100%;
}

.item-counter {
  padding: 2px 7px;
  width: 100%;
  max-width: 80px;
  background-color: #f3f3f3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  border-radius: 4px;
  border: 1px solid #c3c3c337;
}
.item-counter .v-icon {
  font-size: 16px;
  color: #777676;
  cursor: pointer;
  &:hover {
    color: #000;
  }
}
.item-counter span {
  font-size: 14px;
  color: #333;
}
</style>
