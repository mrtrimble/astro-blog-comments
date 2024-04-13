import { c as createAstro, d as createComponent, r as renderTemplate } from '../astro_DwS5PhWu.mjs';
import { d as db, B as BlogComments } from './_slug__BzQek1qW.mjs';

const $$Astro = createAstro("https://example.com");
const $$Redirect = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Redirect;
  if (Astro2.request.method === "POST") {
    let formData = await Astro2.request.formData();
    let author = formData.get("author");
    let content = formData.get("content");
    let slug = formData.get("slug");
    if (typeof author === "string" && typeof content === "string" && typeof slug === "string") {
      await db.insert(BlogComments).values({ author, content, post: slug });
      return Astro2.redirect(`/blog/${slug}`);
    }
  }
  return renderTemplate``;
}, "/Users/ryantrimble/Development/blog-comments/src/pages/blog/redirect.astro", void 0);

const $$file = "/Users/ryantrimble/Development/blog-comments/src/pages/blog/redirect.astro";
const $$url = "/blog/redirect";

export { $$Redirect as default, $$file as file, $$url as url };
