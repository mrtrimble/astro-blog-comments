import { d as db, B as BlogComments } from './_slug__BzQek1qW.mjs';

const POST = async ({ request }) => {
  let data;
  try {
    const body = await request.json();
    const { author, content, slug } = body;
    if (typeof author === "string" && typeof content === "string" && typeof slug === "string") {
      await db.insert(BlogComments).values({ author, content, post: slug });
      data = await db.select().from(BlogComments);
    }
  } catch (error) {
    throw new Error(JSON.stringify({ message: "There was an error processing this form" }, error));
  }
  return new Response(
    JSON.stringify({
      path: new URL(request.url).pathname,
      data
    })
  );
};

export { POST };
