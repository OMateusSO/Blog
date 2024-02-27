import { defineComponent, ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { u as useRouter } from "../server.mjs";
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
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "listPost",
  __ssrInlineRender: true,
  emits: ["onClickPost"],
  setup(__props, { emit: __emit }) {
    const posts = ref([]);
    const invertDate = (dateString) => {
      const parts = dateString.split("-");
      return parts.reverse().join("-");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white py-24 sm:py-1" }, _attrs))}><div class="mx-auto max-w-7xl px-6 lg:px-8"><div class="mx-auto max-w-2xl lg:mx-0"><h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">BlogView</h2><p class="mt-2 text-lg leading-8 text-gray-600">Esse é um blog que está em desenvolvimento.</p><div class="flex flex-row-reverse mx-auto max-w-2xl lg:max-w-4xl mt-8"></div></div><div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"><!--[-->`);
      ssrRenderList(posts.value, (post) => {
        _push(`<article class="flex max-w-xl flex-col items-start justify-between"><div><div class="flex items-center gap-x-4 text-xs"><time${ssrRenderAttr("createAt", invertDate(post.createAt.split("T")[0]))} class="text-gray-500">${ssrInterpolate(invertDate(post.createAt.split("T")[0]))}</time><a${ssrRenderAttr("href", post.category)} class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 hover:cursor-pointer">${ssrInterpolate(post.category)}</a></div><div class="group relative"><h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600"><a${ssrRenderAttr("href", post.href)}><span class="absolute inset-0 hover:cursor-pointer"></span> ${ssrInterpolate(post.title)}</a></h3><p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 hover:cursor-pointer">${ssrInterpolate(post.description)}</p></div></div></article>`);
      });
      _push(`<!--]--><div class="flex flex-row-reverse mx-auto max-w-2xl lg:max-w-4xl mt-8"></div></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/listPost.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    function clickPost(post) {
      router.push(`/posts/${post.id}`);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ListPost = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex flex-row-reverse mx-auto max-w-2xl lg:max-w-4xl mt-8"><button type="button" class="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"> Novo Post </button></div>`);
      _push(ssrRenderComponent(_component_ListPost, { onOnClickPost: clickPost }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-wOeklmMc.js.map
