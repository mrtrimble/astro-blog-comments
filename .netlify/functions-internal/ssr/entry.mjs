import { renderers } from './renderers.mjs';
import { manifest } from './manifest_CSXfG6pg.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_CdscyOJN.mjs');
const _page1 = () => import('./chunks/about_B-E0bmsR.mjs');
const _page2 = () => import('./chunks/submit_C1JYK-GG.mjs');
const _page3 = () => import('./chunks/_slug__DpXHWbF7.mjs');
const _page4 = () => import('./chunks/index_DJqoCYN2.mjs');
const _page5 = () => import('./chunks/redirect_BJIgoyUs.mjs');
const _page6 = () => import('./chunks/index_DAmLbGXH.mjs');
const _page7 = () => import('./chunks/_.._BBPxDT4r.mjs');
const _page8 = () => import('./chunks/rss_B2tydAM6.mjs');
const _page9 = () => import('./chunks/index_5qpxixsT.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.5.16_typescript@5.4.4/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/api/comments/submit.ts", _page2],
    ["src/pages/api/comments/[slug].ts", _page3],
    ["src/pages/api/comments/index.ts", _page4],
    ["src/pages/blog/redirect.astro", _page5],
    ["src/pages/blog/index.astro", _page6],
    ["src/pages/blog/[...slug].astro", _page7],
    ["src/pages/rss.xml.js", _page8],
    ["src/pages/index.astro", _page9]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "69b2ece2-c5a7-4184-9c89-d80c129b5560"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
