import { url } from "@/plugins/url";
import { useLocalStorage } from "@vueuse/core";
import { useAxios } from "@vueuse/integrations/useAxios";
import { defineStore } from "pinia";
import { watch } from "vue";

export const useUserStore = defineStore("userStore", () => {
  const token = useLocalStorage("token", "");
  const user = ref(null); 

  const fetchUserExecute = async () => {
    try {
      const { data } = await useAxios(`${url}/auth/user`, {
        withCredentials: true,
        headers: {
          Authorization: token.value ? `Bearer ${token.value}` : undefined,
        },
      });
      user.value = data.value; 
      console.log(user.value)
    } catch (error) {
      user.value = null; 
    } 
  };

  const updateToken = async (newToken) => {
    token.value = newToken; 
    await fetchUserExecute(); 
  };


  const { execute: executeLogout, isLoading: logoutLoading } = useAxios(
    `${url}/auth/logout`,
    {
      method: "POST",
      withCredentials: true,
      headers: {
        Authorization: token.value ? `Bearer ${token.value}` : undefined,
      },
    },
    { immediate: false }
  );

  const userLogout = async () => {
    try {
      await executeLogout();
      localStorage.removeItem("token");
      window.location.reload();
    } catch (error) {
      console.log("Logout failed:", error);
    }
  };

  

  return {
    fetchUserExecute,
    user,
    executeLogout,
    logoutLoading,
    userLogout,
    updateToken,
    token,
  };
});
