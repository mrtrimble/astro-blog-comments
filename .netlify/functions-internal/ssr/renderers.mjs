import { defineComponent, h, createSSRApp } from 'vue';
import { renderToString } from 'vue/server-renderer';
import { t as AstroJSX, A as AstroError, v as renderJSX, w as createVNode } from './chunks/astro_DwS5PhWu.mjs';

/**
 * Astro passes `children` as a string of HTML, so we need
 * a wrapper `div` to render that content as VNodes.
 *
 * This is the Vue + JSX equivalent of using `<div v-html="value" />`
 */
const StaticHtml = defineComponent({
	props: {
		value: String,
		name: String,
		hydrate: {
			type: Boolean,
			default: true,
		},
	},
	setup({ name, value, hydrate }) {
		if (!value) return () => null;
		let tagName = hydrate ? 'astro-slot' : 'astro-static-slot';
		return () => h(tagName, { name, innerHTML: value });
	},
});

const setup = () => {};

function check$1(Component) {
	return !!Component['ssrRender'] || !!Component['__ssrInlineRender'];
}

async function renderToStaticMarkup$1(Component, inputProps, slotted, metadata) {
	const slots = {};
	const props = { ...inputProps };
	delete props.slot;
	for (const [key, value] of Object.entries(slotted)) {
		slots[key] = () =>
			h(StaticHtml, {
				value,
				name: key === 'default' ? undefined : key,
				// Adjust how this is hydrated only when the version of Astro supports `astroStaticSlot`
				hydrate: metadata.astroStaticSlot ? !!metadata.hydrate : true,
			});
	}
	const app = createSSRApp({ render: () => h(Component, props, slots) });
	await setup();
	const html = await renderToString(app);
	return { html };
}

const _renderer0 = {
	check: check$1,
	renderToStaticMarkup: renderToStaticMarkup$1,
	supportsAstroStaticSlot: true,
};

const slotName = (str) => str.trim().replace(/[-_]([a-z])/g, (_, w) => w.toUpperCase());
async function check(Component, props, { default: children = null, ...slotted } = {}) {
  if (typeof Component !== "function")
    return false;
  const slots = {};
  for (const [key, value] of Object.entries(slotted)) {
    const name = slotName(key);
    slots[name] = value;
  }
  try {
    const result = await Component({ ...props, ...slots, children });
    return result[AstroJSX];
  } catch (e) {
    const error = e;
    if (Component[Symbol.for("mdx-component")]) {
      throw new AstroError({
        message: error.message,
        title: error.name,
        hint: `This issue often occurs when your MDX component encounters runtime errors.`,
        name: error.name,
        stack: error.stack
      });
    }
  }
  return false;
}
async function renderToStaticMarkup(Component, props = {}, { default: children = null, ...slotted } = {}) {
  const slots = {};
  for (const [key, value] of Object.entries(slotted)) {
    const name = slotName(key);
    slots[name] = value;
  }
  const { result } = this;
  const html = await renderJSX(result, createVNode(Component, { ...props, ...slots, children }));
  return { html };
}
var server_default = {
  check,
  renderToStaticMarkup
};

const renderers = [Object.assign({"name":"@astrojs/vue","clientEntrypoint":"@astrojs/vue/client.js","serverEntrypoint":"@astrojs/vue/server.js"}, { ssr: _renderer0 }),Object.assign({"name":"astro:jsx","serverEntrypoint":"astro/jsx/server.js","jsxImportSource":"astro"}, { ssr: server_default }),];

export { renderers };
