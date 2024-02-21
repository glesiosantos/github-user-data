<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { reactive } from "vue"

const state = reactive({
    login: '',
    name: '',
    bio: '...',
    company: 'Acme Inc.',
    avatarUrl: 'https://unsplash.it/256',
    repos: [],
    searchInput: ''
})

async function fetchGithubUser() {
    const resp = await fetch(`https://api.github.com/users/${state.searchInput}`)
    const { login, name, bio, company, avatar_url } = await resp.json()

    state.login = login
    state.name = name
    state.bio = bio
    state.company = company
    state.avatarUrl = avatar_url
    fetchUserRepos(login)
}

async function fetchUserRepos(username) {
    const res = await fetch(`https://api.github.com/users/${username}/repos`)
    const repos = await res.json()
    state.repos = repos
}
</script>
<template>
    <h1 class="text-red-500 font-bold text-3xl mb-5">Github User Data</h1>

    <div class="flex flex-row w-full px-5 mb-5 space-x-2 justify-center">
        <input type="text" v-model="state.searchInput" class="text-md w-96 px-2 py-3 rounded-md" />
        <button @click="fetchGithubUser" class="bg-red-500 px-2 py-3 text-md font-bold text-white rounded-md">Load
            User</button>
    </div>
    <div class="flex flex-col items-center" v-if="state">
        <img :src="state.avatarUrl" class="w-60 h-60 rounded-full" /> avatar
        <strong class="text-red-500 ">@{{ state.login }}</strong>
        <h2 class="text-white">{{ state.name }}</h2>
        <h3 class="text-white">{{ state.company }}</h3>
        <span class="text-white">{{ state.bio ? state.bio : '...' }}</span>
    </div>
    <div>
        <!-- <p>{{ repos.length }}</p> -->
        <section v-if="state.repos.length > 0">
            <article v-for="repo in state.repos" :key="repo" class="flex flex-col items-center">
                <h3 class="text-white">{{ repo.full_name }}</h3>
                <p class="text-white">{{ repo.description }}</p>
                <a :href="repo.html_url" class="text-white" target="_blank">Ver no Github</a>
            </article>
        </section>
    </div>
</template>