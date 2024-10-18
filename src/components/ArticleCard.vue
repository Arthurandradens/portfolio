<template>
  <div>
    <article class="flex max-w-xl flex-col items-start justify-between">
      <div class="flex items-center mt-10 gap-x-4 text-xs">
        <time :datetime="post.datetime" class="text-gray-500">{{ post.date }}</time>
        <a  href="#" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-neutral-800">
          {{ post.category }}
        </a>
      </div>

      <div class="group relative">
        <h3 class="mt-3 text-lg font-semibold leading-6 text-white ">
          <span class="absolute inset-0" />
          {{ post.title }}
        </h3>
        <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{{ post.description }}</p>
      </div>

      <button @click="redirectToArticle" class="text-blue-600 mb-10">Ler artigo</button>
    </article>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

// Props recebidas do componente pai
const props = defineProps(['post']);

// Correção: Nome do roteador é `router`, não `route`
const router = useRouter();

// Função de redirecionamento
function redirectToArticle() {
  
  // Verificando se `router` está presente e redirecionando
  if (router) {
    router.push({
      name: 'article',
      params: {file: props.post.fileName}
    });
  }
}
</script>
