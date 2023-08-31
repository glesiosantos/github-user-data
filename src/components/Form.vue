<script setup>
import { ref } from "vue"
import { userSearchHistoryStore } from "../stores/userSearchHistoruStore";
// import {searchHistory} from '../stores/searchHistory'

  const emit = defineEmits(['formSubmit', 'update:modelValue'])
  const searchInput = ref('')

  const searchHistory = userSearchHistoryStore()

  function handleSubmit(event) {
    event.preventDefault()
    searchHistory.pushToHistory(searchInput.value)
    emit('formSubmit', searchInput.value)
  }

  function showSearchHistory(){
    alert(`Histórico de Pesquisa:\n${searchHistory.users.join('\n')}`)
  }

</script>
<template>
  <form @submit="handleSubmit">
    <input 
      type="text" 
      v-model.lazy="searchInput"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <button>Carregar Usuário</button>
    <button type="button" @click="showSearchHistory">Carregar Historico</button>
  </form>
</template>