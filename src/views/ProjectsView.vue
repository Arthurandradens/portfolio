<template>
  <div class="min-h-screen pb-4">
    <h1 class="my-20 text-5xl lg:text-8xl text-center">Projetos</h1>
    <Projects v-for="project in projectStore.projects" :project="project" />
  </div>
</template>
<script setup>
import Projects from '../components/Projects.vue'
import { onMounted } from 'vue';
import { useProjectStore } from '../stores/projectStore.js';

const projectStore = useProjectStore()

onMounted(()=>{
  projectStore.fetchProjects()
})

</script>
