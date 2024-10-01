<template>
  <v-container>
    <v-row>
      <v-col cols="6" lg="3" v-for="(item, index) in 4" :key="index">
        <v-skeleton-loader
          class="mx-auto border"
          width="100%"
          type="card"
        ></v-skeleton-loader>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup></script>

<style lang="scss" scoped></style>
