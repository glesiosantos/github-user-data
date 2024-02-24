<script setup>
import Github from './components/Github.vue'
</script>

<template>
  <div class="container mx-auto py-10 flex flex-col items-center gap-5">
    <!-- <input type="checkbox" v-model="isOpen"/><span class="text-white my-2">Is Open</span> -->
    <Github>
      <h1 class="text-white font-bold text-3xl mb-5">Github User Data</h1>
      <template v-slot:footer>
        <p class="text-white font-thin text-base">
          Desenvolvido por <b class="text-red-500 mt-5">@glesiosantos</b>
        </p>
      </template>
    </Github>     
  </div>
</template>

