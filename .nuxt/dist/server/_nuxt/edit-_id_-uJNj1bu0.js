import { defineComponent, ref, unref, useSSRContext } from "vue";
import { d as useRoute, u as useRouter } from "../server.mjs";
import { ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
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
  __name: "edit-[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const post = ref({
      category: {
        title: ""
      }
    });
    useRoute();
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="mx-auto max-w-2xl lg:max-w-4xl mt-8"><div><label for="email" class="block text-sm font-medium leading-6 text-gray-900">Titulo</label><div class="mt-2"><input class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-2" placeholder="titulo"${ssrRenderAttr("value", unref(post).title)}></div></div><div><label for="email" class="block text-sm font-medium leading-6 text-gray-900">Categoria</label><div class="mt-2"><input class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-2" placeholder="Categoria"${ssrRenderAttr("value", unref(post).category)}></div></div><div><label class="block text-sm font-medium leading-6 text-gray-900">Descrição</label><div class="mt-2"><textarea class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-2" placeholder="Descrição">${ssrInterpolate(unref(post).description)}</textarea></div></div><div><label class="block text-sm font-medium leading-6 text-gray-900">Conteudo</label><div class="mt-2"><textarea class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-2" placeholder="Conteudo" rows="15">${ssrInterpolate(unref(post).content)}</textarea></div></div></div><div class="flex flex-row-reverse mx-auto max-w-2xl lg:max-w-4xl mt-8 mb-8"><button type="button" class="rounded-md bg-indigo-600 px-2.5 mx-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"> Salvar </button><button type="button" class="rounded-md ml-4 bg-red-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"> Deletar </button></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/posts/edit-[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=edit-_id_-uJNj1bu0.js.map
