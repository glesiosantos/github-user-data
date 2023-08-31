<script setup>
  defineProps(['fullName', 'description', 'url'])
</script>
<template>
  <article>
    <h3>{{ fullName }}</h3>
    <p>{{ description }}</p>
    <a :href="url" target="_blank">Ver no GitHub</a>
  </article>  
</template>