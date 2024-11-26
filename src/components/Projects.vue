<template>
            <div :key="project.id" class="mb-8 flex flex-wrap lg:justify-around">
                <div class="w-full lg:w-1/4">
                    <a :href="project.domain">
                        <img 
                            :src="getImageUrl(`/${project.image}`)"
                            width="300" 
                            height="auto" 
                            :alt="project.title"
                            class="mb-6 rounded"
                        >
                    </a>
                </div>
                <div class="w-full max-w-xl lg:w-3/4">
                    <h6 class="mb-2 font-semibold">{{ project.title }}</h6>
                    <p class="mb-4 text-neutral-400">{{ project.description }}</p>
                    <div class="flex flex-wrap gap-y-3">
                        <span class="mr-3 gap-y-2   rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"  v-for="tech in project.technologies">
                            {{ tech }}
                        </span>
                    </div>
                 
                </div>
            </div>
</template>
<script setup>
const props = defineProps(['project'])

const getImageUrl = (imageUrl) => {
    console.log(imageUrl)
  return new URL(`${imageUrl}`, import.meta.url).href; 
};
</script>