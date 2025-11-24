import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

export type OperationFeature = {
  elementKey: string;
  id: number;
  name: string;
};

export type Operation = {
  id: string;
  name: string;
  features: OperationFeature[];
};

export const OperationApi = createApi({
  reducerPath: "OperationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
  }),
  endpoints: (build) => ({
    getAll: build.query<Operation[], unknown>({
      query: () => "/operation",
    }),
  }),
});

export const { useGetAllQuery } = OperationApi;
