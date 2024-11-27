<template>
	<div class="max-w-4xl mx-auto p-6 shadow-md mt-6">
	  <div class="markdown-body rounded-2xl" v-html="markdownContent"></div>
	</div>
  </template>
  
  <script setup>
  import 'highlight.js/styles/github.css'; // Tema claro
  import 'github-markdown-css/github-markdown-light.css'; // Estilo do corpo do Markdown
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { marked } from 'marked'; // Note a troca de `Marked` para `marked`
  import { markedHighlight } from 'marked-highlight';
  import hljs from 'highlight.js'; // Biblioteca para realce de código
  
  // Configuração do `marked` com destaque de código e suporte completo ao Markdown
  marked.use(
	markedHighlight({
	  langPrefix: 'hljs language-', // Prefixo para as classes das linguagens
	  emptyLangClass: 'hljs',
	  highlight(code, lang) {
		const language = hljs.getLanguage(lang) ? lang : 'plaintext';
		return hljs.highlight(code, { language }).value;
	  },
	})
  );
  
  const route = useRoute();
  const fileName = route.params.file;
  const markdownContent = ref('');
  
  onMounted(async () => {
	// Carregue o arquivo markdown usando fetch
	const response = await fetch(`/posts/${fileName}.md`);
	const markdown = await response.text();
  
	// Use o `marked` para converter o markdown em HTML
	markdownContent.value = marked(markdown);
  });
  </script>
  
  <style>
  .markdown-body {
	background: none;
	color: #ffff;
	box-sizing: border-box;
	min-width: 200px;
	max-width: 980px;
	margin: 0 auto;
	padding: 45px;
  }
  
  @media (max-width: 767px) {
	.markdown-body {
	  padding: 15px;
	}
  }
  </style>
  