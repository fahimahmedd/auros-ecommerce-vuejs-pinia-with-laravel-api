<script setup>
import { useProductStore } from "@/stores/productStore";
import { useStoreDrawerCart } from "@/stores/storeDrawerCart";
import { useUserStore } from "@/stores/userStore";
import { ref, computed, onMounted, reactive } from "vue";
import { RouterLink, useRoute } from "vue-router";
const storeDrawer = useStoreDrawerCart();
const userStore = useUserStore();
const productStore = useProductStore();
const drawer = ref(false);
const group = ref(null);

watch(group, () => {
  drawer.value = false;
});

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
          <v-img
            width="160"
            aspect-ratio="16/9"
            src="../../assets/images/logo/logo.svg"
            class="logo-img"
          >
          </v-img>
        </RouterLink>

        <!-- Navigation links -->
        <div class="login-btn d-flex align-center">
          <div class="navigation-link mr-10 d-none d-sm-block">
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
            @click.stop="userStore.userLogout"
          >
            <span class="text-h5 font-weight-bold">
              {{ user.name.toUpperCase().slice(0, 1) }}
            </span>
          </v-avatar>
          <v-btn
            @click.stop="drawer = !drawer"
            elevation="0"
            color="primary"
            rounded="lg"
            icon="mdi-menu"
            size="small"
            class="ml-4 d-sm-none"
          ></v-btn>
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
          class="d-sm-none d-md-none mt-4"
        >
        </v-text-field>
      </div>
    </v-container>
  </header>
  <!-- Navigation Drawer -->
  <v-navigation-drawer
    v-model="drawer"
    location="left"
    temporary
    width="260"
    elevation="0"
    class="header-drawer"
  >
    <v-btn
      class="drawer-close"
      icon="mdi-close"
      elevation="0"
      variant="tonal"
      color="primary"
      size="small"
      @click.stop="drawer = !drawer"
    >
    </v-btn>

    <div class="drawer-container">
      <div class="navigation-link d-flex flex-column">
        <v-btn
          size="medium"
          variant="plain"
          v-for="(item, index) in links"
          :key="index"
          :to="item.route"
          color="#000"
          active-color="primary"
          class="mt-6"
        >
          {{ item.text }}
        </v-btn>
      </div>
    </div>
  </v-navigation-drawer>
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
  .v-navigation-drawer__scrim {
    opacity: 0.3;
    z-index: 9999999 !important;
  }
  .v-navigation-drawer {
    z-index: 99999999 !important;
    transform: none !important;
    left: -265px !important;
    transition: left 0.3s ease !important;
    position: fixed !important;
    height: 100vh !important;
    top: 0 !important;
  }
  .v-navigation-drawer--active {
    left: 0 !important;
  }

  .header-drawer {
    position: relative;
  }
  .drawer-close {
    position: absolute;
    right: 10px;
    top: 10px;
  }
  .drawer-container {
    height: 100%;
    padding-top: 40px;
  }

  .logo-img {
    width: 140px !important;
  }
}
</style>
