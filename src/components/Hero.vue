<template>
  <div class="border-b border-neutral-900 pb-4 lg:mb-35">
    <div class="flex flex-wrap">
      <div class="w-full lg:w-1/2">
        <div class="flex flex-col items-center lg:items-start">
          <h1
            class="animate__animated animate__fadeInLeft pb-16 text-6xl font-thin tracking-tight opacity-0 transform translate-y-[-20px] lg:mt-16 lg:text-8xl"
          >
            Arthur Nunes
          </h1>
          <span
            ref="myElement"
            @mouseover="hoverElement"
            @mouseleave="resetElement"
            @mousedown="tapElement"
            @mouseup="resetElement"
            @touchstart="tapElement"
            @touchend="resetElement"
            class="animate__animated animate__fadeInLeft animate__delay-1s  bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
          >
            BackEnd Developer
          </span>
          <p class="animate__animated animate__fadeInLeft animate__delay-2s my-2 max-w-xl py-6 font-light tracking-tighter">
            {{ description }}
          </p>
        </div>
      </div>
      <div class="w-full lg:w-1/2 lg:p-8">
        <div class="animate__animated  animate__fadeInRight  flex justify-center">
          <img style="width: 450px;" src="../assets/Eu.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { animate, spring, inView } from 'motion';

const description = `Olá ! me chamo arthur nunes é sou um desenvolvedor backend com experiência em criação e 
otimização de aplicações web, com conhecimento em design de API's e gerenciamento de banco de dados relacionais.
Também tenho certa familiariadade com frontend para aplicações SPA`;

// Referências
const myElement = ref(null);

// Funções de animação
const hoverElement = () => {
  animate(myElement.value, { scale: 1.2 });
};

const tapElement = () => {
  animate(myElement.value, { scale: 1.1 });
};

const resetElement = () => {
  animate(myElement.value, { scale: 1 });
};

// Função de arrastar
const enableDrag = () => {
  const element = myElement.value;
  let startX = 0;
  let currentX = 0;

  // Limites de arrasto apenas no eixo X
  const dragConstraints = { left: 0, right: 300 };

  const moveAt = (x) => {
    animate(element, { x: currentX + x }, { easing: spring() });
  };

  const onMouseMove = (event) => {
    let x = event.clientX - startX;
    // Limitar o movimento ao intervalo de 0px até 300px
    if (currentX + x < dragConstraints.left) x = dragConstraints.left - currentX;
    if (currentX + x > dragConstraints.right) x = dragConstraints.right - currentX;
    moveAt(x);
  };

  const onMouseUp = () => {
    // Atualiza a posição atual
    currentX = parseFloat(getComputedStyle(element).transform.split(',')[4] || 0);
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  };

  element.onmousedown = (event) => {
    startX = event.clientX;
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };
};

onMounted(() => {
  enableDrag();
});
</script>

<style scoped>
.draggable {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
}
</style>
