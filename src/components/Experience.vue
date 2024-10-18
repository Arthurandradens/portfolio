<template>
    <div class="border-b border-neutral-900 pb-4">
       <h2 class="my-20 text-center text-4xl">Experiências</h2>
       <div v-for="ex in experienceStore.experiences" :key="ex.id"> 
        <div class="mb-8 flex flex-wrap lg:justify-center">
            <div class="w-full lg:w-1/4">
                <p class="mb-2 text-sm text-neutral-400">{{ ex.period }}</p>
            </div>
            <div class="w-full  max-w-xl lg:w-3/4">
                <h6 class="mb-2 font-semibold">
                    {{ ex.role }} - <span class="text-sm text-purple-100">{{ ex.company }}</span>
                </h6>
                <p class="mb-4 text-neutral-400">{{ ex.description }}</p>
                <div class="flex flex-wrap">
                    <span class="mr-2 mt-4  rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800" v-for="tech in ex.technologies">
                    {{ tech }}
                </span>
                </div>
            </div>
        </div>
       </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useExperienceStore } from '../stores/experienceStore.js'

const experienceStore = useExperienceStore()

onMounted(() => {
    experienceStore.fetchExperiences()
})

</script>
