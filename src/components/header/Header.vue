<script setup>
import { useStoreDrawerCart } from "@/stores/storeDrawerCart";
import { useUserStore } from "@/stores/userStore";
import { reactive, ref, computed, onMounted } from "vue";
import { RouterLink, useRoute } from "vue-router";
const storeDrawer = useStoreDrawerCart();
const userStore = useUserStore();

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
  <v-app-bar elevation="0">
    <v-container class="d-flex align-center justify-space-between">
      <!-- App logo -->
      <RouterLink class="log" to="/">
        <v-img width="160" aspect-ratio="16/9" src="../../assets/images/logo/logo.svg">
        </v-img>
      </RouterLink>

      <!-- Navigation links -->

      <div class="login-btn d-flex align-center">
        <div class="navigation-link mr-10">
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
        >
        </v-text-field>
        <v-badge
          color="red"
          class="mx-5"
          :content="0"
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
          <span class="text-h5 font-weight-bold">{{
            user.name.toUpperCase().slice(0, 1)
          }}</span>
        </v-avatar>
      </div>
    </v-container>
  </v-app-bar>
</template>
