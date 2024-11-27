<template>
    <div class="min-h-screen py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Artigos</h2>
          <p class="mt-2 text-lg leading-8 text-gray-600">guias para assuntos que trabalhei.</p>
        </div>
        <div class="mx-auto max-w-2xl border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <ArticleCard v-for="post in posts" :post="post"/>
        </div>
      </div>
    </div>
</template>
<script setup>
import ArticleCard from '../components/ArticleCard.vue';
import { ref } from 'vue';
 const posts = ref([
    {
      id: 1,
      title: 'Tutorial Github',
      fileName: 'githubPost',
      description:'Tutorial de como inicar um projeto com git e github e mais alguns comandos úteis',
      date: 'Out 13, 2024',
      datetime: '2024-10-13',
      category: 'Git e Github'
    },
    {
      id: 2,
      title: 'O que são Arrays ??',
      fileName: 'EstruturaDeDadosPost',
      description:'Entendo a principal estrutura de dados e como ela pode ser útil',
      date: 'Out 13, 2024',
      datetime: '2024-10-13',
      category: 'Estrutura de dados'
    },
    {
      id: 3,
      title: 'Guia SIEPEX ??',
      fileName: 'siepex',
      description:'Passo a Passo do desenvolvimento do portfólio com html e css',
      date: 'Nov 27, 2024',
      datetime: '2024-11-27',
      category: 'HTML & CSS'
    },
  ])


</script>