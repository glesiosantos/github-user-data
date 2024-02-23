<script setup>
import { ref } from 'vue';
import Github from './components/Github.vue'

const isOpen = ref(true)

</script>

<template>
  <div class="container mx-auto py-5 flex flex-col items-center">
    <input type="checkbox" v-model="isOpen"/><span class="text-white my-2">Is Open</span>
    <Github v-if="isOpen"/>     
  </div>
</template>

