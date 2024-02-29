<script setup>
import { RouterLink } from 'vue-router'
import { searchHistoryStore } from '../stores/userHistories'
const store = searchHistoryStore()
console.log(store.users)
</script>
<template>
    <div class="flex flex-col gap-4 items-center">
        <img src="https://static-00.iconduck.com/assets.00/github-icon-2048x1998-3j08tfre.png" 
            class="w-20">
        <h1 
            class="text-white">Github Data Search</h1>
        <RouterLink 
            to="/search" 
            class="bg-red-500 rounded-md py-2 px-3 text-white font-bold">Search Account</RouterLink>  
    </div>
    <div>
        <article v-for="user in store.users" :key="user">
            <span class="text-white">{{ user }}</span>
        </article>
    </div>
</template>