<template>
  <v-container fluid class="pa-0">
    <div class="authentication-graphic">
      <v-row class="align-center ma-0">
        <v-col cols="8" class="pa-0">
          <AuthenticationGraphic />
        </v-col>
        <v-col v-if="autheticate.showSigIn" cols="4" class="pa-0">
          <SignIn />
        </v-col>
        <v-col v-if="!autheticate.showSigIn" cols="4" class="pa-0">
          <SignUp />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script setup>
import SignIn from "@/components/authenticationComp/SignIn.vue";
import SignUp from "@/components/authenticationComp/SignUp.vue";
import { useAuthentication } from "@/stores/authentication";

const autheticate = useAuthentication();
</script>

<style scoped lang="scss"></style>
