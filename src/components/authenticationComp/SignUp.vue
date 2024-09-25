<script setup>
import { useAuthentication } from "@/stores/authentication";
import { computed, ref } from "vue";

const authenticate = useAuthentication();

const name = ref();
const email = ref();
const password = ref();
const password_confirmation = ref();
const phone = ref();

function register() {
  // if (!name.value || !email.value || !password.value || !password_confirmation.value)
  //   return;

  console.log("ksdjfhgal");
  authenticate.executeRegister({
    data: {
      name: name.value,
      email: email.value,
      password: password.value,
      password_confirmation: password_confirmation.value,
      phone: phone.value,
    },
  });
}
</script>

<template>
  <v-card width="100%" max-width="400" elevation="0" class="pl-8">
    <div class="text-h5 font-weight-black text-uppercase text-center">Sign Up</div>
    <v-divider class="my-5"></v-divider>
    <div class="text-subtitle-1 text-medium-emphasis mt-8">Full Name</div>
    <v-text-field
      v-model="name"
      prepend-inner-icon="mdi-account"
      class="mt-3"
    ></v-text-field>

    <!-- <div class="text-subtitle-1 text-medium-emphasis">Email Address</div> -->
    <v-text-field
      v-model="email"
      type="email"
      prepend-inner-icon="mdi-email"
    ></v-text-field>
    <v-text-field
      v-model="phone"
      type="number"
      prepend-inner-icon="mdi-phone"
    ></v-text-field>
    <div
      class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
    >
      Password
    </div>
    <v-text-field
      v-model="password"
      type="password"
      prepend-inner-icon="mdi-lock"
      class="mt-3"
      placeholder="6+ Character"
    ></v-text-field>
    <v-text-field
      v-model="password_confirmation"
      type="password"
      prepend-inner-icon="mdi-lock"
      placeholder="Confirm Password"
    ></v-text-field>

    <v-card-text class="d-none text-medium-emphasis text-caption pa-2 assh-bg-color">
      Warning: After 3 consecutive failed login attempts,
    </v-card-text>

    <!-- <div class="d-flex align-center">
      <v-checkbox
        class="shrink mr-0 mt-0"
        color="primary"
        hide-details
        density="compact"
      ></v-checkbox>
      <span class="text-subtitle-2 font-weight-regular text-medium-emphasis ml-4">
        I agree with Auros's Terms of Service.</span
      >
    </div> -->

    <v-btn
      @click="register"
      color="primary"
      class="mt-5"
      size="large"
      variant="tonal"
      block
      :loading="authenticate.signUpLoading"
    >
      Create Account
    </v-btn>
    <div
      class="text-subtitle-2 mt-5 text-center font-weight-medium text-decoration-none"
      href="#"
    >
      <span class="cursor-pointer" @click="authenticate.authenticateSwitch"
        >Already have account ? SIGN IN</span
      >
    </div>
  </v-card>
</template>

<style scoped lang="scss"></style>
