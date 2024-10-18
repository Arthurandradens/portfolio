<script setup>
import Hero from '../components/Hero.vue'
import About from '../components/About.vue'
import Technologies from '../components/Technologies.vue'
import Experience from '../components/Experience.vue'
import Contact from '../components/Contact.vue'
</script>

<template>
   <div >
       <Hero/>
       <About />
       <Technologies/>
       <Experience />
       <Contact/>
   </div>
</template>

<!-- <template>
   <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-200">
     <div className="fixed top-0 -z-10 h-full w-full">
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
     </div>

     <div className="container mx-auto px-8">
       <NavBar />
       <Hero/>
       <About />
       <Technologies/>
       <Experience />
      
     </div>

   </div>
</template> -->

