<template>
    <nav className="mb-20 flex items-center justify-center py-6">
        <div className="m-8 flex space-x-4 items-center justify-center gap-4 text-2xl">
           <router-link to="/" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</router-link>
           <router-link to="/articles" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Artigos</router-link>
           <router-link to="/projects" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projetos</router-link>
        </div>
    </nav>
</template>
<script setup>

import  {RouterLink} from 'vue-router'

</script>