
<script setup lang="ts">
import axios from 'axios';
import { ref, onMounted } from 'vue'

const posts = ref<Array<any>>([]);

onMounted(() => {
  sendGetallPosts();
})

function sendGetallPosts() {
  axios
    .get('http://localhost:3030/posts')
    .then((resposta) => {
      posts.value = resposta.data;
    })
    .catch(() => {
      console.log('error');
    });
}

const emits = defineEmits(["onClickPost"]);

function clickPost(post: any) {
  emits("onClickPost", post);
}

</script>

<template>
  <div class="bg-white py-24 sm:py-1">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">BlogView</h2>
        <p class="mt-2 text-lg leading-8 text-gray-600">Esse é um blog que está em desenvolvimento.</p>
        <div class="flex flex-row-reverse mx-auto max-w-2xl lg:max-w-4xl mt-8">
        </div>
      </div>
      <div
        class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <article v-for="post in posts" :key="post.id" class="flex max-w-xl flex-col items-start justify-between">
          <div @click="clickPost(post)">
            <div class="flex items-center gap-x-4 text-xs">
              <time :datetime="post.datetime" class="text-gray-500">{{ post.datetime }}</time>
              <a :href="post.category.href"
                class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 hover:cursor-pointer"
                @click.prevent>
                {{ post.category.title }}
              </a>
            </div>
            <div class="group relative">
              <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <a :href="post.href" @click.prevent>
                  <span class="absolute inset-0 hover:cursor-pointer" />
                  {{ post.title }}
                </a>
              </h3>
              <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 hover:cursor-pointer">{{ post.description }}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>
  
 