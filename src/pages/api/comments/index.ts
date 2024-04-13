import type { APIRoute } from 'astro';
import { db, BlogComments } from 'astro:db';

export const GET: APIRoute = async ({ params, request }) => {
  let postComments = await db.select().from(BlogComments);
  return new Response(
    JSON.stringify({
      path: new URL(request.url).pathname,
      ...postComments,
    })
  );
};
