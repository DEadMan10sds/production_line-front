import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const UserApi = createApi({
  reducerPath: "UserApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
  }),
  endpoints: (build) => ({
    getUser: build.query<unknown, unknown>({
      query: (id: string) => `/users/${id}`,
    }),
  }),
});

export const { useGetUserQuery } = UserApi;
