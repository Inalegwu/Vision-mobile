import { createFetch, createSchema } from "@better-fetch/fetch";
import axios from "axios";
// import {Env} from "@env";

const client = axios.create({
  baseURL: "https://api.shortboxed.com/comics/v1",
});

const schema = createSchema({});

export const client$ = createFetch({
  baseURL: "https://api.shortboxed.com/comics/v1",
  schema,
  retry: {
    type: "exponential",
    attempts: 6,
    baseDelay: 2000,
    maxDelay: 10_000,
  },
});

export default client;
