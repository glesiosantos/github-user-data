<script setup>
  defineProps(['avatar', 'login', 'name', 'company', 'bio'])
</script>

<template>
  <img :src="avatar"/>
  <strong>@{{login}}</strong>
  <h2>{{name}}</h2>
  <h3>{{ company }}</h3>
  <span>{{ bio }}</span>
</template>