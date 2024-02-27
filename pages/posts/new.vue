<script>
import axios from "axios";
import { ref, reactive} from 'vue';
import { baseURL } from '@/config/config';


const Post = {
  title: '',
  DateTime: new Date().toISOString().split('T')[0],
  category:'',
  description: '',
  content: '',
};

const post = ref(reactive({ ...Post }));

export default {
  setup() {
    const router = useRouter();

    function sendCreatePosts() {
      axios
        .post(`${baseURL}/posts`, post.value)
        .then(() => {
          console.log("success");
          router.back();
          resetPost();
        })
        .catch(() => {
          console.log("error");
        });
    }

    function resetPost() {
      post.value = {
        ...Post,
      };
    }

    return {
      post,
      sendCreatePosts,
    };
  },
};
</script>

<template>
    <div class="mx-auto max-w-2xl lg:max-w-4xl mt-8">
        <div class="mx-auto max-w-2xl lg:max-w-4xl mt-8">
    <div class="font-semibold text-3xl my-10">Novo post</div>

    <div>
      <label
        for="email"
        class="block text-sm font-medium leading-6 text-gray-900"
        >Titulo</label
      >
      <div class="mt-2">
        <input
          class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-2"
          placeholder="titulo"
          v-model="post.title"
        />
      </div>
    </div>

    <div>
      <label
        for="email"
        class="block text-sm font-medium leading-6 text-gray-900"
        >Categoria</label
      >
      <div class="mt-2">
        <input
          class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-2"
          placeholder="Categoria"
          v-model="post.category"
        />
      </div>
    </div>

    
    <div>
      <label class="block text-sm font-medium leading-6 text-gray-900"
        >Descrição</label
      >
      <div class="mt-2">
        <textarea
          class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-2"
          placeholder="Descrição"
          v-model="post.description"
        >
        </textarea>
      </div>
    </div>

    <div>
      <label class="block text-sm font-medium leading-6 text-gray-900"
        >Conteudo</label
      >
      <div class="mt-2">
        <textarea
          class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-2"
          placeholder="Conteudo"
          v-model="post.content"
          rows="15"
        >
        </textarea>
      </div>
    </div>
  </div>
  <div class="flex flex-row-reverse mx-auto max-w-2xl lg:max-w-4xl mt-8 mb-8">
    <button
      type="button"
      class="rounded-md bg-indigo-600 px-2.5 px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      @click="sendCreatePosts"
    >
      Salvar
    </button>
  </div>
    </div>
</template>

<style></style>