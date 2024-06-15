import { createClient } from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_SPACE_ID as string,
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN as string,
});

export default client;
