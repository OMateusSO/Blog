<script setup lang="ts">
    import axios from 'axios';
    import { ref, onMounted } from 'vue'

    const route = useRoute();
    const post = ref<any>({});

    onMounted(() => {
        sendGetById(route.params.id as string);
    })

    function sendGetById(id : string) {
        axios
            .get(`http://localhost:3030/posts/${id}`)
            .then((resposta) => {
            console.log(resposta.data);
            post.value = resposta.data;
            })
            .catch(() => {
                console.log('error');
            });
    }
</script>

<template>
  <div class="bg-white px-6 py-32 lg:px-8">
    <div class="mx-auto max-w-3xl text-base leading-7 text-gray-700">
      <p class="text-base font-semibold leading-7 text-indigo-600">
        {{ post.category?.title }}
      </p>
      <h1
        class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
      >
        {{ post.title }}
      </h1>
      <p class="mt-6 text-xl leading-8">
        {{ post.description }}
      </p>
      <div class="mt-10 max-w-2xl">
        <p>
          {{ post.content }}
        </p>
      </div>
    </div>
  </div>
</template>
  
  <style></style>

<style></style>