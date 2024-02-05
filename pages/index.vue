<script setup lang="ts">
const router = useRouter();

function clickPost(post : any){
  router.push(`/posts/${post.id}`);
}
</script>


<template>
<div>
  <div class="flex flex-row-reverse mx-auto max-w-2xl lg:max-w-4xl mt-8">
    <button type="button" class="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" @click="router.push('/posts/new')">
      Novo Post
    </button>
  </div>
  <ListPost @on-click-post="clickPost"></ListPost>
</div>
</template>
<style></style>