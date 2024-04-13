import { d as db, B as BlogComments } from './_slug__BzQek1qW.mjs';

const GET = async ({ params, request }) => {
  let postComments = await db.select().from(BlogComments);
  return new Response(
    JSON.stringify({
      path: new URL(request.url).pathname,
      ...postComments
    })
  );
};

export { GET };
