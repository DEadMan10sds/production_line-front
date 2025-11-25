import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { AuthData } from "../reducer/Auth/Auth";

export const AuthApi = createApi({
  reducerPath: "AuthApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
  }),
  endpoints: (build) => ({
    login: build.mutation<AuthData, unknown>({
      query: (body) => ({
        method: "POST",
        url: "/auth",
        body,
      }),
    }),
  }),
});

export const { useLoginMutation } = AuthApi;
