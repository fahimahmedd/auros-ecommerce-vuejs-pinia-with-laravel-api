import { url } from "@/plugins/url";
import { useAxios } from "@vueuse/integrations/useAxios";
import { defineStore } from "pinia";



export const useUserStore =  defineStore('userStore', ()=>{


   const { execute:fetchUserExecute , data:user , isLoading:userLoading } = useAxios(`${url}/auth/user`,{withCredentials: true } ,  {immediate: false});


   return{  fetchUserExecute , user , userLoading}
})

