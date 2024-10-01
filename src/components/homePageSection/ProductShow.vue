<template>
  <v-container>
    <v-row>
      <v-col lg="4" cols="12" class="d-none d-md-block">
        <v-img
          class="img-overly"
          rounded="lg"
          src="../../assets/images/feature/home2.jpg"
          height="593"
          cover
        >
        </v-img>
      </v-col>
      <v-col lg="8" cols="12">
        <div class="v-row">
          <v-col
            lg="4"
            sm="4"
            md="4"
            cols="6"
            v-for="(item, index) in productShow"
            :key="index"
          >
            <ProductShowItem
              :showItem="item"
              @click="$router.push(`/product-detail/${item.id}`)"
            />
          </v-col>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { computed, ref } from "vue";
import ProductShowItem from "../product/ProductShowItem.vue";
const props = defineProps({
  products: {
    type: Array,
    default: [],
  },
});

const productShow = computed(() => {
  return props.products.slice(-6);
});
</script>

<style scoped lang="scss">
.img-overly {
  position: relative;
  &::after {
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
  }
}
</style>
