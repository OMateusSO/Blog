<script setup lang="ts">
import axios from "axios";
import { baseURL } from '@/config/config';


const post = ref<any>({
  category: {
    title: '',
  },
});

const route = useRoute();
const router = useRouter();

onMounted(() => {
  sendGetById(route.params.id);
});

function sendGetById(id: any) {
  axios
    .get(`${baseURL}/posts/${id}`)
    .then((resp) => {
      post.value = resp.data;
    })
    .catch((error) => {
      console.log(error);
    });
}

function clickSalvar() {
  sendUpdatePosts();
}

function sendUpdatePosts() {
  axios
    .put(`${baseURL}/posts/${route.params.id}`, post.value)
    .then(() => {
      console.log("success");
      router.push("/");
    })
    .catch(() => {
      console.log("error");
    });
}

function clickDeletar() {
  sendDeletePosts();
}

function sendDeletePosts() {
  axios
    .delete(`${baseURL}/posts/${route.params.id}`)
    .then(() => {
      console.log("success");
      router.push("/");
    })
    .catch(() => {
      console.log("error");
    });
}
</script>

<template>
  <div class="mx-auto max-w-2xl lg:max-w-4xl mt-8">
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
      class="rounded-md bg-indigo-600 px-2.5 mx-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      @click="clickSalvar"
    >
      Salvar
    </button>

    <button
      type="button"
      class="rounded-md ml-4 bg-red-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
      @click="clickDeletar"
    >
      Deletar
    </button>
  </div>
</template>

<style></style>