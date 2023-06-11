import apiSlice from "../api/apiSlice";

export const contactsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllContacts: builder.query({
      query: () => "/contacts/?format=json",
    }),

    getUsContacts: builder.query({
      query: () => "/country-contacts/United%20States/?format=json",
    }),
  }),
});

export const { useGetAllContactsQuery, useGetUsContactsQuery } = contactsApi;
