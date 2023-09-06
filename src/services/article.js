import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const summarizeAPI = createApi({
  reducerPath: "summarizeAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", import.meta.env.VITE_RAPIDAPI_KEU);
      headers.set(
        "X-RapidAPI-Host",
        "article-extractor-and-summarizer.p.rapidapi.com"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSummaryOfArticle: builder.query({
      query: (params) =>
        `summarize?url=${encodeURIComponent(params.articleURL)}&length=5`,
    }),
  }),
});

export const { useLazyGetSummaryOfArticleQuery } = summarizeAPI;
