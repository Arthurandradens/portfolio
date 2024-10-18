<template>
    <div class="relative isolate   min-h-screen overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">

      <div class="absolute inset-0 -z-10 overflow-hidden">
      </div>
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div class="lg:pr-4">
            <div class="lg:max-w-lg">
              <p class="text-base font-semibold leading-7 text-indigo-600">{{ post.category.title }}</p>
              <h1 class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">A better workflow</h1>
              <p class="mt-6 text-xl leading-8 text-white">{{ post.date }}</p>
            </div>
          </div>
        </div>
        <div class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div class="lg:pr-4">
            <div class="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                {{ post.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
const props = defineProps(['post'])
 
  </script>

