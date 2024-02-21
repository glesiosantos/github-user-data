<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { reactive } from "vue"

const state = reactive({
    login: '',
    name: '',
    bio: '...',
    company: 'Acme Inc.',
    avatarUrl: 'https://unsplash.it/256',
    searchInput: ''   
})

async function fetchGithubUser(){
    const resp = await fetch(`https://api.github.com/users/${state.searchInput}`)
    const {login, name, bio, company, avatar_url} = await resp.json()

    state.login = login
    state.name = name
    state.bio = bio,
    state.company = company
    state.avatarUrl = avatar_url
}
</script>
<template>
    <h1 class="text-red-500 font-bold text-3xl mb-5">Github User Data</h1>

    <div class="flex flex-row w-full px-5 mb-5 space-x-2">
        <input type="text" v-model="state.searchInput" class="text-md flex-1 px-2 py-3 rounded-md"/>
        <button @click="fetchGithubUser" class="bg-red-500 px-2 py-3 text-md font-bold text-white rounded-md">Load User</button>
    </div>
    <div class="flex flex-col items-center">
        <img :src="state.avatarUrl" class="w-60 h-60 rounded-full"/> avatar
        <strong class="text-red-500 ">@{{state.login}}</strong>
        <h2 class="text-white">{{state.name}}</h2>
        <h3 class="text-white">{{state.company}}</h3>
        <span class="text-white">{{state.bio ? state.bio : '...'}}</span>
    </div>
</template>