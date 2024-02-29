<script setup>
import { ref } from "vue"
import { searchHistoryStore } from '../stores/userHistories'

const searchInput = ref('')
const emit = defineEmits(['formSearch'])
const store = searchHistoryStore()

function handleSubmit() {
    store.pushToHistory(searchInput.value.trim())
    emit('formSearch', searchInput.value)
}

function showHistory () {
    alert(`Historico:\n ${store.users.join('\n')}` )
}

</script>
<template>
    <form @submit.prevent.enter="handleSubmit">
        <div class="flex flex-row w-full px-5 mb-5 space-x-2 justify-center">
            <input type="text" v-model.lazy="searchInput" class="text-md w-96 px-2 py-3 rounded-md" />
            <button type="submit" class="bg-red-500 px-2 py-3 text-md font-bold text-white rounded-md">Search</button>
            <button type="button" class="bg-green-500 px-2 py-3 text-md font-bold text-white rounded-md" @click="showHistory">Show History</button>
        </div>
    </form>
</template>