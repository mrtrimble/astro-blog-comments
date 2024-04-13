import type { APIRoute } from 'astro';
import { db, BlogComments, like } from 'astro:db';

export const GET: APIRoute = async ({ params, request }) => {
  let comments;
  const slug = params.slug;

  if (slug) comments = await db.select().from(BlogComments).where(like(BlogComments.post, slug));

  return new Response(
    JSON.stringify({
      slug,
      results: comments,
    })
  );
};
