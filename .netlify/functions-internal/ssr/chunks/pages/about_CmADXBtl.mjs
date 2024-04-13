import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, m as maybeRenderHead, s as spreadAttributes, f as renderSlot, g as renderComponent, h as renderHead } from '../astro_DwS5PhWu.mjs';
/* empty css                          */
/* empty css                                                                   */
/* empty css                          */

const $$Astro$6 = createAstro("https://example.com");
const $$BaseHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image = "/blog-placeholder-1.jpg" } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Font preloads --><link rel="preload" href="/fonts/atkinson-regular.woff" as="font" type="font/woff" crossorigin><link rel="preload" href="/fonts/atkinson-bold.woff" as="font" type="font/woff" crossorigin><!-- Canonical URL --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}>`;
}, "/Users/ryantrimble/Development/blog-comments/src/components/BaseHead.astro", void 0);

const $$Astro$5 = createAstro("https://example.com");
const $$HeaderLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$HeaderLink;
  const { href, class: className, ...props } = Astro2.props;
  const { pathname } = Astro2.url;
  const subpath = pathname.match(/[^\/]+/g);
  const isActive = href === pathname || href === "/" + subpath?.[0];
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([className, { active: isActive }], "class:list")}${spreadAttributes(props)} data-astro-cid-eimmu3lg> ${renderSlot($$result, $$slots["default"])} </a> `;
}, "/Users/ryantrimble/Development/blog-comments/src/components/HeaderLink.astro", void 0);

const SITE_TITLE = "Astro Blog";
const SITE_DESCRIPTION = "Welcome to my website!";

const $$Astro$4 = createAstro("https://example.com");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-3ef6ksr2> <nav data-astro-cid-3ef6ksr2> <h2 data-astro-cid-3ef6ksr2><a href="/" data-astro-cid-3ef6ksr2>${SITE_TITLE}</a></h2> <div class="internal-links" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`Home` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/blog", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`Blog` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/about", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`About` })} </div> <div class="social-links" data-astro-cid-3ef6ksr2> <a href="https://m.webtoo.ls/@astro" target="_blank" data-astro-cid-3ef6ksr2> <span class="sr-only" data-astro-cid-3ef6ksr2>Follow Astro on Mastodon</span> <svg viewBox="0 0 16 16" aria-hidden="true" width="32" height="32" data-astro-cid-3ef6ksr2><path fill="currentColor" d="M11.19 12.195c2.016-.24 3.77-1.475 3.99-2.603.348-1.778.32-4.339.32-4.339 0-3.47-2.286-4.488-2.286-4.488C12.062.238 10.083.017 8.027 0h-.05C5.92.017 3.942.238 2.79.765c0 0-2.285 1.017-2.285 4.488l-.002.662c-.004.64-.007 1.35.011 2.091.083 3.394.626 6.74 3.78 7.57 1.454.383 2.703.463 3.709.408 1.823-.1 2.847-.647 2.847-.647l-.06-1.317s-1.303.41-2.767.36c-1.45-.05-2.98-.156-3.215-1.928a3.614 3.614 0 0 1-.033-.496s1.424.346 3.228.428c1.103.05 2.137-.064 3.188-.189zm1.613-2.47H11.13v-4.08c0-.859-.364-1.295-1.091-1.295-.804 0-1.207.517-1.207 1.541v2.233H7.168V5.89c0-1.024-.403-1.541-1.207-1.541-.727 0-1.091.436-1.091 1.296v4.079H3.197V5.522c0-.859.22-1.541.66-2.046.456-.505 1.052-.764 1.793-.764.856 0 1.504.328 1.933.983L8 4.39l.417-.695c.429-.655 1.077-.983 1.934-.983.74 0 1.336.259 1.791.764.442.505.661 1.187.661 2.046v4.203z" data-astro-cid-3ef6ksr2></path></svg> </a> <a href="https://twitter.com/astrodotbuild" target="_blank" data-astro-cid-3ef6ksr2> <span class="sr-only" data-astro-cid-3ef6ksr2>Follow Astro on Twitter</span> <svg viewBox="0 0 16 16" aria-hidden="true" width="32" height="32" data-astro-cid-3ef6ksr2><path fill="currentColor" d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" data-astro-cid-3ef6ksr2></path></svg> </a> <a href="https://github.com/withastro/astro" target="_blank" data-astro-cid-3ef6ksr2> <span class="sr-only" data-astro-cid-3ef6ksr2>Go to Astro's GitHub repo</span> <svg viewBox="0 0 16 16" aria-hidden="true" width="32" height="32" data-astro-cid-3ef6ksr2><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" data-astro-cid-3ef6ksr2></path></svg> </a> </div> </nav> </header> `;
}, "/Users/ryantrimble/Development/blog-comments/src/components/Header.astro", void 0);

const $$Astro$3 = createAstro("https://example.com");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  const today = /* @__PURE__ */ new Date();
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte>
&copy; ${today.getFullYear()} Your name here. All rights reserved.
<div class="social-links" data-astro-cid-sz7xmlte> <a href="https://m.webtoo.ls/@astro" target="_blank" data-astro-cid-sz7xmlte> <span class="sr-only" data-astro-cid-sz7xmlte>Follow Astro on Mastodon</span> <svg viewBox="0 0 16 16" aria-hidden="true" width="32" height="32" astro-icon="social/mastodon" data-astro-cid-sz7xmlte><path fill="currentColor" d="M11.19 12.195c2.016-.24 3.77-1.475 3.99-2.603.348-1.778.32-4.339.32-4.339 0-3.47-2.286-4.488-2.286-4.488C12.062.238 10.083.017 8.027 0h-.05C5.92.017 3.942.238 2.79.765c0 0-2.285 1.017-2.285 4.488l-.002.662c-.004.64-.007 1.35.011 2.091.083 3.394.626 6.74 3.78 7.57 1.454.383 2.703.463 3.709.408 1.823-.1 2.847-.647 2.847-.647l-.06-1.317s-1.303.41-2.767.36c-1.45-.05-2.98-.156-3.215-1.928a3.614 3.614 0 0 1-.033-.496s1.424.346 3.228.428c1.103.05 2.137-.064 3.188-.189zm1.613-2.47H11.13v-4.08c0-.859-.364-1.295-1.091-1.295-.804 0-1.207.517-1.207 1.541v2.233H7.168V5.89c0-1.024-.403-1.541-1.207-1.541-.727 0-1.091.436-1.091 1.296v4.079H3.197V5.522c0-.859.22-1.541.66-2.046.456-.505 1.052-.764 1.793-.764.856 0 1.504.328 1.933.983L8 4.39l.417-.695c.429-.655 1.077-.983 1.934-.983.74 0 1.336.259 1.791.764.442.505.661 1.187.661 2.046v4.203z" data-astro-cid-sz7xmlte></path></svg> </a> <a href="https://twitter.com/astrodotbuild" target="_blank" data-astro-cid-sz7xmlte> <span class="sr-only" data-astro-cid-sz7xmlte>Follow Astro on Twitter</span> <svg viewBox="0 0 16 16" aria-hidden="true" width="32" height="32" astro-icon="social/twitter" data-astro-cid-sz7xmlte><path fill="currentColor" d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" data-astro-cid-sz7xmlte></path></svg> </a> <a href="https://github.com/withastro/astro" target="_blank" data-astro-cid-sz7xmlte> <span class="sr-only" data-astro-cid-sz7xmlte>Go to Astro's GitHub repo</span> <svg viewBox="0 0 16 16" aria-hidden="true" width="32" height="32" astro-icon="social/github" data-astro-cid-sz7xmlte><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" data-astro-cid-sz7xmlte></path></svg> </a> </div> </footer> `;
}, "/Users/ryantrimble/Development/blog-comments/src/components/Footer.astro", void 0);

const $$Astro$2 = createAstro("https://example.com");
const $$FormattedDate = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date } = Astro2.props;
  console.log({ date });
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date.toISOString(), "datetime")}> ${date.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })} </time>`;
}, "/Users/ryantrimble/Development/blog-comments/src/components/FormattedDate.astro", void 0);

const $$Astro$1 = createAstro("https://example.com");
const $$BlogPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title, description, pubDate, updatedDate, heroImage } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-bvzihdzo> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "data-astro-cid-bvzihdzo": true })}${renderHead()}</head> <body data-astro-cid-bvzihdzo> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-bvzihdzo": true })} <main data-astro-cid-bvzihdzo> <article data-astro-cid-bvzihdzo> <div class="hero-image" data-astro-cid-bvzihdzo> ${heroImage && renderTemplate`<img${addAttribute(1020, "width")}${addAttribute(510, "height")}${addAttribute(heroImage, "src")} alt="" data-astro-cid-bvzihdzo>`} </div> <div class="prose" data-astro-cid-bvzihdzo> <div class="title" data-astro-cid-bvzihdzo> <div class="date" data-astro-cid-bvzihdzo> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": pubDate, "data-astro-cid-bvzihdzo": true })} ${updatedDate && renderTemplate`<div class="last-updated-on" data-astro-cid-bvzihdzo>
Last updated on ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": updatedDate, "data-astro-cid-bvzihdzo": true })} </div>`} </div> <h1 data-astro-cid-bvzihdzo>${title}</h1> <hr data-astro-cid-bvzihdzo> </div> ${renderSlot($$result, $$slots["default"])} </div> </article> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-bvzihdzo": true })} </body></html>`;
}, "/Users/ryantrimble/Development/blog-comments/src/layouts/BlogPost.astro", void 0);

const $$Astro = createAstro("https://example.com");
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$BlogPost, { "title": "About Me", "description": "Lorem ipsum dolor sit amet", "pubDate": /* @__PURE__ */ new Date("August 08 2021"), "heroImage": "/blog-placeholder-about.jpg" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua. Vitae ultricies leo integer malesuada nunc vel risus commodo
		viverra. Adipiscing enim eu turpis egestas pretium. Euismod elementum nisi quis eleifend quam
		adipiscing. In hac habitasse platea dictumst vestibulum. Sagittis purus sit amet volutpat. Netus
		et malesuada fames ac turpis egestas. Eget magna fermentum iaculis eu non diam phasellus
		vestibulum lorem. Varius sit amet mattis vulputate enim. Habitasse platea dictumst quisque
		sagittis. Integer quis auctor elit sed vulputate mi. Dictumst quisque sagittis purus sit amet.
</p> <p>
Morbi tristique senectus et netus. Id semper risus in hendrerit gravida rutrum quisque non
		tellus. Habitasse platea dictumst quisque sagittis purus sit amet. Tellus molestie nunc non
		blandit massa. Cursus vitae congue mauris rhoncus. Accumsan tortor posuere ac ut. Fringilla urna
		porttitor rhoncus dolor. Elit ullamcorper dignissim cras tincidunt lobortis. In cursus turpis
		massa tincidunt dui ut ornare lectus. Integer feugiat scelerisque varius morbi enim nunc.
		Bibendum neque egestas congue quisque egestas diam. Cras ornare arcu dui vivamus arcu felis
		bibendum. Dignissim suspendisse in est ante in nibh mauris. Sed tempus urna et pharetra pharetra
		massa massa ultricies mi.
</p> <p>
Mollis nunc sed id semper risus in. Convallis a cras semper auctor neque. Diam sit amet nisl
		suscipit. Lacus viverra vitae congue eu consequat ac felis donec. Egestas integer eget aliquet
		nibh praesent tristique magna sit amet. Eget magna fermentum iaculis eu non diam. In vitae
		turpis massa sed elementum. Tristique et egestas quis ipsum suspendisse ultrices. Eget lorem
		dolor sed viverra ipsum. Vel turpis nunc eget lorem dolor sed viverra. Posuere ac ut consequat
		semper viverra nam. Laoreet suspendisse interdum consectetur libero id faucibus. Diam phasellus
		vestibulum lorem sed risus ultricies tristique. Rhoncus dolor purus non enim praesent elementum
		facilisis. Ultrices tincidunt arcu non sodales neque. Tempus egestas sed sed risus pretium quam
		vulputate. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Fringilla
		urna porttitor rhoncus dolor purus non. Amet dictum sit amet justo donec enim.
</p> <p>
Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Tortor posuere ac ut consequat semper
		viverra. Tellus mauris a diam maecenas sed enim ut sem viverra. Venenatis urna cursus eget nunc
		scelerisque viverra mauris in. Arcu ac tortor dignissim convallis aenean et tortor at. Curabitur
		gravida arcu ac tortor dignissim convallis aenean et tortor. Egestas tellus rutrum tellus
		pellentesque eu. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet. Ut enim
		blandit volutpat maecenas volutpat blandit aliquam etiam. Id donec ultrices tincidunt arcu. Id
		cursus metus aliquam eleifend mi.
</p> <p>
Tempus quam pellentesque nec nam aliquam sem. Risus at ultrices mi tempus imperdiet. Id porta
		nibh venenatis cras sed felis eget velit. Ipsum a arcu cursus vitae. Facilisis magna etiam
		tempor orci eu lobortis elementum. Tincidunt dui ut ornare lectus sit. Quisque non tellus orci
		ac. Blandit libero volutpat sed cras. Nec tincidunt praesent semper feugiat nibh sed pulvinar
		proin gravida. Egestas integer eget aliquet nibh praesent tristique magna.
</p> ` })}`;
}, "/Users/ryantrimble/Development/blog-comments/src/pages/about.astro", void 0);

const $$file = "/Users/ryantrimble/Development/blog-comments/src/pages/about.astro";
const $$url = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$FormattedDate as $, SITE_TITLE as S, $$BaseHead as a, $$Header as b, $$Footer as c, SITE_DESCRIPTION as d, $$BlogPost as e, $$HeaderLink as f, about as g };
