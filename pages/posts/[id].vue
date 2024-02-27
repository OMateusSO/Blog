<script setup lang="ts">
    import axios from 'axios';
    import { ref, onMounted } from 'vue'
    import { baseURL } from '@/config/config';


    const route = useRoute();
    const post = ref<any>({});

    onMounted(() => {
        sendGetById(route.params.id as string);
    })

    function sendGetById(id : any) {
        axios
            .get(`${baseURL}/posts/${id}`)
            .then((resposta) => {
              post.value = resposta.data;
            })
            .catch(() => {
                console.log('error');
            });
    } 
</script>


<template>
    <div class="flex flex-row-reverse mx-auto max-w-2xl lg:max-w-3xl mt-8">  
    <button
      type="button"
      class="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      @click="$router.push(`/posts/edit-${$route.params.id}`)"
    >
      Editar
    </button>
  </div>
  <div class="bg-white px-6 py-31 lg:px-8">
    <div class="mx-auto max-w-3xl text-base leading-7 text-gray-700">
      <p class="text-base font-semibold leading-7 text-indigo-600">
        {{ post.category }} 
      </p>
      <h1
        class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
      >
        {{ post.title }}
      </h1>
      <p class="mt-6 text-xl  leading-8">
        {{ post.description }}
      </p>
      <div class="mt-10 text-justify max-w-2xl">
        <p>
          {{ post.content }}
        </p>
      </div>
      <div>
        <p class="flex flex-row-reverse text-x1 leading-8">
          {{ post.createAt ? post.createAt.split('T')[0] : 'Data não disponível' }}
        </p>
      </div>
    </div>
  </div>
</template>
  
  <style></style>

<style></style>