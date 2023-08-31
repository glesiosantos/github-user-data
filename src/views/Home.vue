<script setup>
// import { searchHistory } from '../stores/searchHistory'

import { userSearchHistoryStore } from "../stores/userSearchHistoruStore";

const searchHistory = userSearchHistoryStore()
</script>
<template>
  <h1>Welcome!</h1>
  <p>This is the homepage of the app.</p>

  <section>
    <h2>Histório de pesquisa</h2>
    <p v-for="user in searchHistory.users" :key="user">{{user}}</p>
  </section>
</template>

<style scoped>
section {
  margin: 1rem 0;
}

p{
  margin-top: 1rem;
}
</style>