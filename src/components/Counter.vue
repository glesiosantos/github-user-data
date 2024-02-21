<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from "vue";

let count = ref(0)
</script>

<template>
  <div class="container mx-auto py-5 flex flex-col items-center">
    <h1 className="font-bold text-white text-9xl">
      {{ count }}
    </h1>

    <button 
      @click="count++"
      class="text-3xl text-white bg-purple-700 p-2 mt-2 rounded" >+</button> 
  </div>
</template>

