<template>
  <v-app>
    <Header v-if="!authentiacatePage" />
    <v-main>
      <router-view />
    </v-main>
    <CartDrawer />
    <Footer v-if="!authentiacatePage" />
  </v-app>
</template>

<script setup>
import Header from "@/components/header/Header.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";
import CartDrawer from "@/components/cart/CartDrawer.vue";
import { useUserStore } from "@/stores/userStore";

const route = useRoute();

const authentiacatePage = computed(() => route.path === "/authentication/user");
const userStore = useUserStore();
</script>
