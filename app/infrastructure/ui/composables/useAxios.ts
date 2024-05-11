// composables/useAxios.ts
import { ref, type Ref } from 'vue';
import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios';

interface UseAxios {
  isLoading: Ref<boolean>;
  get: (url: string, config?: AxiosRequestConfig) => Promise<any>;
  post: (url: string, data?: any, config?: AxiosRequestConfig) => Promise<any>;
  // Add other methods here if needed
}

export default function useAxios(): UseAxios {
  const isLoading = ref(false);

  const get = async (url: string, config?: AxiosRequestConfig): Promise<any> => {
    try {
      isLoading.value = true;
      const response: AxiosResponse = await axios.get(url, config);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
    } finally {
      isLoading.value = false;
    }
  };

  const post = async (url: string, data?: any, config?: AxiosRequestConfig): Promise<any> => {
    try {
      isLoading.value = true;
      const response: AxiosResponse = await axios.post(url, data, config);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
    } finally {
      isLoading.value = false;
    }
  };

  const handleAxiosError = (error: any) => {
    const message = 'Failed to load track data';
    if (axios.isAxiosError(error) && error.response) {
      console.error('API call failed:', error.response.data);
      throw createError({
        statusCode: error.response.status,
        statusMessage: error.response.statusText,
        message: message,
        data: error.response.data
      });
    } else {
      console.error('An unexpected error occurred:', error);
      throw createError({ statusCode: 500, message: message, data: error });
    }
  };

  // You can add more methods for other HTTP verbs if needed (PUT, DELETE, etc.)

  return {
    isLoading,
    get,
    post
    // Add other HTTP methods here if needed
  };
}
