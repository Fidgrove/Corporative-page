import { RequestParams, TableSort } from "~/types";

export const useApiRequest = <T>(
  url: string,
  params: RequestParams,
  options: any = [],
) => {
  const config = useRuntimeConfig();
  return useFetch<T>(url, {
    baseURL: config.public.appUrl,
    query: {
      ...params,
    },
    ...options,
  });
};

export const useApiRequestReset = ({ sort, asc }: TableSort) => {
  return {
    offset: 0,
    limit: 20,
    sort,
    direction: asc,
    dry: true,
  };
};
