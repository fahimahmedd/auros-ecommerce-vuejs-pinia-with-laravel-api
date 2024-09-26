<script setup>
import { defineProps } from "vue";
const timeout = 2000;
const snackbar = ref(true);
const props = defineProps({
  content: {
    type: String,
  },
});
</script>

<template>
  <v-snackbar v-model="snackbar" :timeout="timeout" class="text-center">
    {{ content }}
  </v-snackbar>
</template>

<style lang="scss" scoped></style>
