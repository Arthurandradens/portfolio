<template>
    <div class="border-b border-neutral-900 pb-20">
        <h1 class="my-10 text-center text-4xl">Fale comigo</h1>
        <div class="text-center tracking-tighter">
            <a href="#" class="border-b">{{ contact.mail }}</a>
            <p class="my-4">{{ contact.phone}}</p>
        </div>
    </div>
</template>
<script setup>
const contact = {phone: "+55 (91) 98375-1695",mail:"nunesarthur.dev@gmail.com"}
</script>