import { url } from "@/plugins/url";
import { useAxios } from "@vueuse/integrations/useAxios";
import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", () => {

  const {
    execute: fetchUserExecute,
    data: user,
    isLoading: userLoading,
  } = useAxios(
    `${url}/auth/user`,
    { withCredentials: true },
    { immediate: false }
  );

  const { execute: executeLogout, isLoading: logoutLoading } = useAxios(
    `${url}/auth/logout`,
    { method: "POST", withCredentials: true },
    { immediate: false }
  );
  
  const userLogout = async () => {
    try {
      await executeLogout();
      window.location.reload();
    } catch (error) {
      console.log('Logout failed:', error);
    }
  };

  return {
    fetchUserExecute,
    user,
    userLoading,
    executeLogout,
    logoutLoading,
    userLogout,
  };
});
