// Utilities
import { url } from "@/plugins/url.js";
import { useAxios } from "@vueuse/integrations/useAxios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthentication = defineStore("authentication", () => {
  const showSigIn = ref(true);

  const authenticateSwitch = () => {
    showSigIn.value = !showSigIn.value;
  };

  const { execute: executeRegister, isLoading: signUpLoading } = useAxios(
    `${url}/auth/register`,
    { method: "POST" },
    { immediate: false }
  );

  const { execute: executeLogin, isLoading: signInLoading } = useAxios(
    `${url}/auth/login`,
    { method: "POST", withCredentials: true },
    { immediate: false }
  );

  return {
    showSigIn,
    authenticateSwitch,
    signUpLoading,
    executeRegister,
    executeLogin,
    signInLoading,
  };
  
});
