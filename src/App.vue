<script setup>
import Profile from './components/Profile.vue'

</script>

<template>
  <Profile>
    <h1>GitHub User Data</h1>
    <template v-slot:footer>
      <footer>
        Desenvolvido por <a href="https://github.com/glesiosantos" target="_blank">Glêsio Santos</a>
      </footer>
    </template>
  </Profile>
</template>

