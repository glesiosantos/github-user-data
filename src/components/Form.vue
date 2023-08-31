<script setup>
import { ref } from "vue"

  const emit = defineEmits(['formSubmit', 'update:modelValue'])
  const searchInput = ref('')

  function handleSubmit(event) {
    event.preventDefault()
    emit('formSubmit', searchInput.value)
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
  </form>
</template>