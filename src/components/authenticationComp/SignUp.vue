<script setup>
import { useAuthentication } from "@/stores/authentication";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

const authenticate = useAuthentication();
const name = ref();
const email = ref();
const password = ref();
const password_confirmation = ref();
const showPass = ref(false);
const showConfirmedPass = ref(false);

const register = async () => {
  const res = await authenticate.executeRegister({
    data: {
      name: name.value,
      email: email.value,
      password: password.value,
      password_confirmation: password_confirmation.value,
    },
  });

  if (res.response.value.status === 200) {
    authenticate.authenticateSwitch();
    emit("showSnackbar");
  }
};

const emit = defineEmits();

const rules = {
  required: (value) => !!value || "Required",
  min: (v) => (v || "").length >= 8 || "Min 8 characters",
  email: (v) => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(v) || "Invalid e-mail";
  },
  pass: (value) => value === password.value || "Password Not Matched!",
};

const isSubmitDisable = computed(() => {
  return (
    !name.value ||
    !email.value ||
    !password.value ||
    !password_confirmation.value ||
    rules.required(password.value) !== true ||
    rules.min(password.value) !== true ||
    rules.email(email.value) !== true ||
    rules.pass(password_confirmation.value) !== true
  );
});
</script>

<template>
  <v-card width="100%" max-width="400" elevation="0" class="pl-8">
    <div class="text-h5 font-weight-black text-uppercase text-center">Sign Up</div>
    <v-divider class="my-5"></v-divider>
    <div class="text-subtitle-1 text-medium-emphasis mt-8">Name</div>
    <v-text-field
      v-model="name"
      prepend-inner-icon="mdi-account"
      class="mt-2"
      color="primary"
    ></v-text-field>

    <div class="text-subtitle-1 text-medium-emphasis">Email Address</div>
    <v-text-field
      v-model="email"
      type="email"
      :rules="[rules.email]"
      class="mt-2"
      prepend-inner-icon="mdi-email"
      color="primary"
    ></v-text-field>
    <div
      class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
    >
      Password
    </div>
    <v-text-field
      v-model="password"
      :type="showPass ? 'text' : 'password'"
      prepend-inner-icon="mdi-lock"
      :rules="[rules.required, rules.min]"
      :append-inner-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
      class="mt-2"
      placeholder="Password"
      color="primary"
      @click:append-inner="showPass = !showPass"
    ></v-text-field>

    <v-text-field
      v-model="password_confirmation"
      :rules="[rules.pass]"
      :type="showConfirmedPass ? 'text' : 'password'"
      prepend-inner-icon="mdi-lock"
      :append-inner-icon="showConfirmedPass ? 'mdi-eye' : 'mdi-eye-off'"
      placeholder="Confirm Password"
      color="primary"
      class="mt-1"
      @click:append-inner="showConfirmedPass = !showConfirmedPass"
    ></v-text-field>
    <v-btn
      @click="register"
      color="primary"
      class="mt-3"
      size="large"
      block
      :disabled="isSubmitDisable"
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
