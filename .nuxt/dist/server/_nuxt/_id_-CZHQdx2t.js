import { d as useRoute } from "../server.mjs";
import { defineComponent, ref, useSSRContext } from "vue";
import { ssrInterpolate } from "vue/server-renderer";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "defu";
import "klona";
import "devalue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    const post = ref({});
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="flex flex-row-reverse mx-auto max-w-2xl lg:max-w-3xl mt-8"><button type="button" class="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"> Editar </button></div><div class="bg-white px-6 py-31 lg:px-8"><div class="mx-auto max-w-3xl text-base leading-7 text-gray-700"><p class="text-base font-semibold leading-7 text-indigo-600">${ssrInterpolate(post.value.category)}</p><h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">${ssrInterpolate(post.value.title)}</h1><p class="mt-6 text-xl leading-8">${ssrInterpolate(post.value.description)}</p><div class="mt-10 text-justify max-w-2xl"><p>${ssrInterpolate(post.value.content)}</p></div><div><p class="flex flex-row-reverse text-x1 leading-8">${ssrInterpolate(post.value.createAt ? post.value.createAt.split("T")[0] : "Data não disponível")}</p></div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/posts/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-CZHQdx2t.js.map
