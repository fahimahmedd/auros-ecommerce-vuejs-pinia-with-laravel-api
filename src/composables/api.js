import { useAxios } from "@vueuse/integrations/useAxios";

// const url = 'http://localhost:8000/api';


export function useApi(url, method, options) {
  const { execute, isLoading, data } = useAxios( url , method, {
    immediate: false,
    options,
  });

  console.log(method)
   
  return { execute, isLoading, data };
}
