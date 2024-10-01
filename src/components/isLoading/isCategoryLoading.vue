<template>
  <v-container>
    <v-row>
      <v-col lg="2" cols="4" v-for="(item, index) in 6" :key="index">
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
