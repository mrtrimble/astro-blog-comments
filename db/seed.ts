import { db, BlogComments } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(BlogComments).values([
    {
      author: 'John Doe',
      content: 'You are so cool!',
      post: 'first-post',
    },
    {
      author: 'John Doe, The Second',
      content: 'I agree with my dad!',
      post: 'markdown-style-guide',
    },
    {
      author: 'John Doe, The Second',
      content: 'I agree with my dad!',
      post: 'first-post',
    },
  ]);
}
