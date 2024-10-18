<template>
  <div class="max-w-4xl mx-auto p-6  shadow-md mt-6">
    <div class="markdown-body rounded-2xl " v-html="markdownContent"></div>
  </div>
</template>

<script setup>
import 'github-markdown-css';
import { ref, onMounted } from 'vue';
import {useRoute} from 'vue-router';
import { marked } from 'marked'; // Alteração aqui
const route = useRoute();

const fileName = route.params.file;



const markdownContent = ref('');

onMounted(async () => {
  // Carregue o arquivo markdown usando fetch
  const response = await fetch(`/posts/${fileName}.md`);
  const markdown = await response.text();

  // Use marked.js para converter o markdown em HTML
  markdownContent.value = marked(markdown);
});
</script>
<style>
.markdown-body {
		box-sizing: border-box;
		min-width: 200px;
		max-width: 980px;
    background: scroll;
    /* background-color: rgb(34, 25, 40); */
		margin: 0 auto;
		padding: 45px;
	}

	@media (max-width: 767px) {
		.markdown-body {
			padding: 15px;
		}
	}
</style>
