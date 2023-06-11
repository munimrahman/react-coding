import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://contact.mediusware.com/api/",
    // mode: "no-cors",
    // prepareHeaders: (headers) => {
    //   headers.set("Access-Control-Allow-Origin", "*");
    // },
  }),
  tagTypes: [],
  endpoints: (builder) => ({}),
});

export default apiSlice;
