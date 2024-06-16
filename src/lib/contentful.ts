import { createClient } from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string,
  accessToken: process.NEXT_PUBLIC_env.CONTENTFUL_ACCESS_TOKEN as string,
});

export default client;
