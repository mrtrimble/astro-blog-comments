import { createRemoteDatabaseClient, asDrizzleTable } from '@astrojs/db/runtime';
import { like } from '@astrojs/db/dist/runtime/virtual.js';

const db = await createRemoteDatabaseClient(process.env.ASTRO_STUDIO_APP_TOKEN, {"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://example.com", "ASSETS_PREFIX": undefined}.ASTRO_STUDIO_REMOTE_DB_URL ?? "https://db.services.astro.build");
const BlogComments = asDrizzleTable("BlogComments", { "columns": { "id": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "BlogComments", "primaryKey": true } }, "post": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "post", "collection": "BlogComments", "primaryKey": false, "optional": false } }, "author": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "author", "collection": "BlogComments", "primaryKey": false, "optional": false } }, "content": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "content", "collection": "BlogComments", "primaryKey": false, "optional": false } }, "timestamp": { "type": "date", "schema": { "optional": false, "unique": false, "deprecated": false, "name": "timestamp", "collection": "BlogComments", "default": { "__serializedSQL": true, "sql": "CURRENT_TIMESTAMP" } } } }, "deprecated": false, "indexes": {} }, false);

const GET = async ({ params, request }) => {
  let comments;
  const slug = params.slug;
  if (slug)
    comments = await db.select().from(BlogComments).where(like(BlogComments.post, slug));
  return new Response(
    JSON.stringify({
      slug,
      results: comments
    })
  );
};

const _slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET
}, Symbol.toStringTag, { value: 'Module' }));

export { BlogComments as B, _slug_ as _, db as d };
