<template>
    <div class="border-b border-neutral-800 pb-24">
      <h1 class="my-20 text-center text-4xl">Tecnologias</h1>
      <div class="flex flex-wrap items-start justify-center icon-container  gap-4">
        <!-- Cada ícone recebe a classe 'float' para o movimento -->
        <div v-for="(icon, index) in icons" :key="index" :style="getAnimationDelay(index)" class="w-32 float rounded-2xl border-4 border-neutral-800 p-4">
          <img :src="icon" alt="Icon" >
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import java from "../assets/icons/java.png";
  import php from "../assets/icons/php.png";
  import js from "../assets/icons/js.png";
  import vue from "../assets/icons/vue.png";
  import spring from "../assets/icons/spring.png";
  import laravel from "../assets/icons/laravel.png";
  import postgre from "../assets/icons/postgre.png";
  
  // Ícones das tecnologias
  const icons = [java, php, js, vue, spring, laravel, postgre];
  
  // Função para definir atrasos diferentes para cada ícone
  const getAnimationDelay = (index) => {
    const delay = `${Math.random() * 4}s`;  // Atraso aleatório entre 0 e 2 segundos
    return {
      animationDelay: delay,
    };
  };
  </script>
  
  <style scoped>
  /* Animação de flutuação para cima e para baixo */
  @keyframes float {
    0%, 100% {
      transform: translateY(0);  /* Posição inicial */
    }
    50% {
      transform: translateY(-20px);  /* Movimenta para cima 20px */
    }
  }
  
  /* Classe para aplicar a animação de flutuação */
  .float {
    animation: float 3s ease-in-out infinite;  /* Duração de 3 segundos, animação infinita */
  }
  
  /* Estilização dos ícones */
  .icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>
  