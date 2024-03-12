import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const url = "https://fakestoreapi.com/products?limit=30";

export const shopApi = createApi({
    reducerPath: "shopApi",
    baseQuery: fetchBaseQuery({ baseUrl: url }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            queryFn: async (arg) => {
                try {
                    const response = await fetch(url);
                    return { data: await response.json() };
                } catch (e) {
                    return { error: e.message };
                }
            },
        }),
    }),
});

export const {useGetProductsQuery, useGetProductQuery, useGetPostQuery} = shopApi