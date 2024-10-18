<template>
    <div class="norder-b border-neutral-900 pb-4">
        <h1 class="my-20 text-center text-4xl">
            Sobre <span class="text-neutral-500">Mim</span> 
        </h1>
        <div class="flex flex-wrap">
            <div  class="w-full lg:w-1/2 lg:p-8">
                <div  class="flex items-center justify-center">
                    <img class="rounded-2xl w-1/2" src="../assets/Tenis.jpg" alt="">
                </div>
            </div>
            <div class="w-full lg:w-1/2">
                    <div class="flex justify-center lg:justify-start">
                        <p class="my-16 max-w-xl py-6 text-neutral-400 font-bold tracking-tighter">
                            {{ description }}
                        </p>
                    </div>
                </div>
        </div>
    </div>
</template>
<script setup>

const description = `Desde pequeno, tive contato com esportes, mas o tênis sempre foi meu favorito e a atividade que mais amo.
 Durante seis anos, dediquei-me como atleta de competição, mas eventualmente precisei encerrar esse ciclo para iniciar minha
 vida profissional. Foi nesse momento que descobri a tecnologia como uma nova paixão. Desde então, venho me esforçando para
 entender cada vez mais esse universo e aprimorar meus conhecimentos. Atualmente, estou cursando Ciência da Computação 
 no IFPA (Instituto Federal do Pará) e, em paralelo, busco me atualizar nas tecnologias e criar projetos pessoais para 
 aprender coisas novas e me desenvolver.`

</script>