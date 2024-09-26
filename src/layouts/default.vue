<script setup>
import Header from "@/components/header/Header.vue";
import { useRoute } from "vue-router";
import { computed, onMounted } from "vue";
import CartDrawer from "@/components/cart/CartDrawer.vue";
import { useUserStore } from "@/stores/userStore";

const route = useRoute();
const authentiacatePage = computed(() => route.path === "/authentication/user");

const userStore = useUserStore();
const user = computed(() => userStore.user);

onMounted(() => {
  userStore.fetchUserExecute();
});
</script>
<template>
  <v-app>
    <Header v-if="!authentiacatePage" :user="user" />
    <v-main>
      <router-view />
    </v-main>
    <CartDrawer />
    <Footer v-if="!authentiacatePage" />
  </v-app>
</template>
