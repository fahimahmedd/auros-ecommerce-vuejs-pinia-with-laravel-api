<script setup>
import { useProductStore } from "@/stores/productStore";
import { useStoreDrawerCart } from "@/stores/storeDrawerCart";
import { useUserStore } from "@/stores/userStore";
import { ref, computed, onMounted, reactive } from "vue";
import { RouterLink, useRoute } from "vue-router";
const storeDrawer = useStoreDrawerCart();
const userStore = useUserStore();
const productStore = useProductStore();

const cartProduct = computed(() => {
  return productStore.cartItems.length;
});

const links = ref([
  { text: "Home", route: "/" },
  { text: "Product", route: "/product" },
  { text: "Showroom", route: "/signin" },
]);
const route = useRoute();
const isActiveRoute = (routePath) => route.path === routePath;

const props = defineProps({
  user: {
    type: Object,
    default: null,
  },
});
</script>

<template>
  <header class="app-header">
    <v-container class="pa-0">
      <div class="d-flex align-center justify-space-between">
        <!-- App logo -->
        <RouterLink class="log" to="/">
          <v-img width="160" aspect-ratio="16/9" src="../../assets/images/logo/logo.svg">
          </v-img>
        </RouterLink>

        <!-- Navigation links -->
        <div class="login-btn d-flex align-center">
          <div class="navigation-link mr-10 d-none">
            <v-btn
              size="small"
              variant="text"
              v-for="item in links"
              :key="item.text"
              :to="item.route"
              :active="isActiveRoute(item.route)"
              active-color="primary"
            >
              {{ item.text }}
            </v-btn>
          </div>
          <v-text-field
            density="compact"
            label="Search"
            prepend-inner-icon="mdi-magnify"
            variant="solo-filled"
            flat
            hide-details
            single-line
            width="260"
            class="d-none d-md-block"
          >
          </v-text-field>
          <v-badge
            color="red"
            class="mx-5"
            :content="cartProduct"
            @click.stop="storeDrawer.drawerHandle"
          >
            <v-icon
              class="cursor-pointer"
              color="#333"
              icon="mdi-cart"
              size="x-large"
            ></v-icon>
          </v-badge>
          <v-btn
            min-width="100"
            append-icon="mdi-account-circle"
            variant="outlined"
            color="primary"
            rounded="lg"
            to="/authentication/user"
            v-if="!user"
          >
            Login
          </v-btn>

          <v-avatar
            v-if="user"
            class="cursor-pointer"
            color="primary"
            @click="userStore.userLogout"
          >
            <span class="text-h5 font-weight-bold">
              {{ user.name.toUpperCase().slice(0, 1) }}
            </span>
          </v-avatar>
        </div>
      </div>
      <div>
        <v-text-field
          density="compact"
          label="Search"
          prepend-inner-icon="mdi-magnify"
          variant="solo-filled"
          flat
          hide-details
          single-line
          width="100%"
          class="d-sm-block d-md-none mt-4"
        >
        </v-text-field>
      </div>
    </v-container>
  </header>
</template>

<style scoped>
.app-header {
  background-color: #fff;
  padding: 20px 10px;
  /* position: fixed;
  top: 0;
  left: 0;
  width: 100%; */
}

@media (min-width: 280px) and (max-width: 599.98px) {
}
</style>
