import { RequestParams } from "~/types";

export const useApiRequest = <T>(
  url: string,
  params: RequestParams,
  options: any = {},
) => {
  const config = useRuntimeConfig();
  return useFetch<T>(url, {
    baseURL: config.public.appUrl,
    query: {
      ...params,
    },
    server: false,
    ...options,
  });
};

export const useApiRequestReset = () => {
  return {
    offset: 0,
    limit: 40,
  };
};
