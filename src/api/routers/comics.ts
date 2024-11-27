import { router } from "react-query-kit";
import client from "../client";

export const comics = router("comics", {
  new: router.query({
    fetcher: async () => {
      const result = await client.get("/new");

      return result.data;
    },
  }),
  query: router.mutation({
    mutationFn: async (params: { title: string }) => {
      const result = await client.get(`/query?title=${params.title}`);

      return result.data;
    },
  }),
});
