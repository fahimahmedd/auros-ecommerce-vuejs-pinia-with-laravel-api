<script setup>
import { useAuthentication } from "@/stores/authentication";
import { useUserStore } from "@/stores/userStore";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
const authenticate = useAuthentication();
const userStore = useUserStore();
const router = useRouter();

const email = ref();
const password = ref();

const loginFailed = ref("");

const signIn = async () => {
  if (isSubmitDisable.value) return;

  try {
    const res = await authenticate.executeLogin({
      data: {
        email: email.value,
        password: password.value,
      },
    });

    if (res.response.value && res.response.value.status === 200) {
      const token = res.response.value.data.token;
      localStorage.setItem("token", token);
      await userStore.updateToken(token);
      userStore.user;
      router.push("/");
    } else {
      console.error("Login was unsuccessful:", res.response.value);
      loginFailed.value = "Login failed, please check your credentials.";
    }
  } catch (e) {
    console.error(e);
    loginFailed.value = e.response ? e.response.data.message : "An error occurred";
  }
};

const isSubmitDisable = computed(() => {
  return (
    !email.value ||
    !password.value ||
    rules.email(email.value) !== true ||
    rules.min(password.value) !== true
  );
});

const rules = {
  email: (v) => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(v) || "Invalid e-mail";
  },
  min: (v) => (v || "").length >= 8 || "Min 8 characters",
};
</script>

<template>
  <v-card width="100%" max-width="400" elevation="0" class="pl-8 mob-width-adjust">
    <div class="text-h5 font-weight-black text-uppercase text-center">Sign In</div>
    <v-divider class="my-5"></v-divider>

    <div class="text-subtitle-1 text-medium-emphasis mt-8">Email Address</div>
    <v-text-field
      v-model="email"
      prepend-inner-icon="mdi-email"
      class="mt-3"
      :rules="[rules.email]"
      @keydown.enter="signIn"
    ></v-text-field>

    <div
      class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
    >
      Password

      <a
        class="text-caption text-subtitle-2 font-weight-medium text-decoration-none primary-color"
        href="#"
      >
        Forgot password?</a
      >
    </div>
    <v-text-field
      v-model="password"
      type="password"
      :rules="[rules.min]"
      prepend-inner-icon="mdi-lock"
      class="mt-3"
      @keydown.enter="signIn"
    ></v-text-field>
    <div
      class="text-medium-emphasis text-center text-caption"
      v-if="loginFailed && loginFailed.length"
    >
      {{ loginFailed }}
    </div>
    <v-btn
      @click="signIn"
      color="primary"
      class="mt-2"
      size="large"
      :disabled="isSubmitDisable"
      block
      :loading="authenticate.signInLoading"
    >
      Sign In
    </v-btn>
    <div
      class="text-subtitle-2 mt-5 text-center font-weight-medium text-decoration-none"
      href="#"
    >
      <span class="cursor-pointer" @click="authenticate.authenticateSwitch"
        >Don't have an account ? SIGN UP now</span
      >
    </div>
  </v-card>
</template>

<style scoped lang="scss">
@media (min-width: 280px) and (max-width: 960.98px) {
  .mob-width-adjust {
    padding-left: 0px !important;
    padding: 40px 40px !important;
    margin: 0 auto;
  }
}
</style>
