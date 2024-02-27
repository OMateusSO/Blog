import { _ as _export_sfc, u as useRouter } from "../server.mjs";
import axios from "axios";
import { ref, reactive, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
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
const baseURL = "http://localhost:3333";
const Post = {
  title: "",
  DateTime: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
  category: "",
  description: "",
  content: ""
};
const post = ref(reactive({ ...Post }));
const _sfc_main = {
  setup() {
    const router = useRouter();
    function sendCreatePosts() {
      axios.post(`${baseURL}/posts`, post.value).then(() => {
        console.log("success");
        router.back();
        resetPost();
      }).catch(() => {
        console.log("error");
      });
    }
    function resetPost() {
      post.value = {
        ...Post
      };
    }
    return {
      post,
      sendCreatePosts
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto max-w-2xl lg:max-w-4xl mt-8" }, _attrs))}><div class="mx-auto max-w-2xl lg:max-w-4xl mt-8"><div class="font-semibold text-3xl my-10">Novo post</div><div><label for="email" class="block text-sm font-medium leading-6 text-gray-900">Titulo</label><div class="mt-2"><input class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-2" placeholder="titulo"${ssrRenderAttr("value", $setup.post.title)}></div></div><div><label for="email" class="block text-sm font-medium leading-6 text-gray-900">Categoria</label><div class="mt-2"><input class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-2" placeholder="Categoria"${ssrRenderAttr("value", $setup.post.category)}></div></div><div><label class="block text-sm font-medium leading-6 text-gray-900">Descrição</label><div class="mt-2"><textarea class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-2" placeholder="Descrição">${ssrInterpolate($setup.post.description)}</textarea></div></div><div><label class="block text-sm font-medium leading-6 text-gray-900">Conteudo</label><div class="mt-2"><textarea class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-2" placeholder="Conteudo" rows="15">${ssrInterpolate($setup.post.content)}</textarea></div></div></div><div class="flex flex-row-reverse mx-auto max-w-2xl lg:max-w-4xl mt-8 mb-8"><button type="button" class="rounded-md bg-indigo-600 px-2.5 px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"> Salvar </button></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/posts/new.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _new = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _new as default
};
//# sourceMappingURL=new-BFZVaZTM.js.map
