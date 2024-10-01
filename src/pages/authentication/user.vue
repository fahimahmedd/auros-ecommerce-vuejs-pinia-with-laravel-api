<script setup>
import SignIn from "@/components/authenticationComp/SignIn.vue";
import SignUp from "@/components/authenticationComp/SignUp.vue";
import CommonSnackbar from "@/components/snackbars/CommonSnackbar.vue";
import { useAuthentication } from "@/stores/authentication";
import { ref } from "vue";

const autheticate = useAuthentication();

const showSignupSnackBar = ref(false);
const handleShowSnackbar = () => {
  showSignupSnackBar.value = true;
};
</script>

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
          <SignUp @showSnackbar="handleShowSnackbar" />
        </v-col>
      </v-row>
    </div>

    <!-- Sign Up Massage-->
    <CommonSnackbar v-if="showSignupSnackBar" content="Sign Up Successfull!" />
  </v-container>
</template>

<style scoped lang="scss"></style>
