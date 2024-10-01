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
        <v-col lg="8" cols="12" class="pa-0 d-none d-md-block">
          <AuthenticationGraphic />
        </v-col>
        <v-col v-if="autheticate.showSigIn" lg="4" cols="12" class="pa-0">
          <SignIn />
        </v-col>
        <v-col v-if="!autheticate.showSigIn" lg="4" cols="12" class="pa-0">
          <SignUp @showSnackbar="handleShowSnackbar" />
        </v-col>
      </v-row>
    </div>

    <!-- Sign Up Massage-->
    <CommonSnackbar v-if="showSignupSnackBar" content="Sign Up Successfull!" />
  </v-container>
</template>

<style scoped lang="scss">
@media (min-width: 280px) and (max-width: 960.98px) {
  .authentication-graphic {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
