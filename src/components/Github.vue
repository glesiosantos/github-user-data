<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { computed, reactive, ref } from "vue"

const searchInput = ref('')

const state = reactive({
    login: '',
    name: '',
    bio: '...',
    company: '',
    avatarUrl: '',
    repos: []
})

const reposCountMessage = computed(() => state.repos.length > 0 
    ? `${state.name} possui ${state.repos.length} repositório(s) públicos`
    : 'Não possui nenhum repositório')

async function fetchGithubUser() {
    const resp = await fetch(`https://api.github.com/users/${searchInput.value}`)
    const { login, name, bio, company, avatar_url } = await resp.json()

    state.login = login
    state.name = name
    state.bio = bio
    state.company = company
    state.avatarUrl = avatar_url
    fetchUserRepos(login)
    searchInput.value = ''
}

async function fetchUserRepos(username) {
    const res = await fetch(`https://api.github.com/users/${username}/repos`)
    const repos = await res.json()
    state.repos = repos
}
</script>
<template>
    <h1 class="text-red-500 font-bold text-3xl mb-5">Github User Data</h1>

    <p class="text-white ">Pesquisando por: <strong>https://api.github.com/users/{{ searchInput }}</strong></p>

    <form @submit.prevent.enter="fetchGithubUser">
        <div class="flex flex-row w-full px-5 mb-5 space-x-2 justify-center">
            <input type="text" v-model.lazy="searchInput" class="text-md w-96 px-2 py-3 rounded-md" />
            <button type="submit" class="bg-red-500 px-2 py-3 text-md font-bold text-white rounded-md">Load
                User</button>
        </div>
    </form>
    <div class="flex flex-col items-center px-5" v-if="state.login">
        <img :src="state.avatarUrl" class="w-60 h-60 rounded-full" /> avatar
        <strong class="text-white ">@{{ state.login }}</strong>
        <h2 class="text-red-500 text-4xl font-bold my-2">{{ state.name }}</h2>
        <h3 class="text-white">{{ state.company }}</h3>
        <span class="text-white text-justify my-5">{{ state.bio ? state.bio : '...' }}</span>
    </div>
    <section v-if="state.repos.length > 0" class="flex flex-col space-y-5 px-5 ">
        <h2 class="text-white font-thin text-3xl my-2">{{ reposCountMessage }}</h2>
        <article v-for="repo in state.repos" :key="repo" class="flex flex-col items-center">
            <h3 class="text-white text-md">{{ repo.full_name }}</h3>
            <p class="text-white text-justify">{{ repo.description }}</p>
            <a :href="repo.html_url" class="text-red-500 text-base" target="_blank">Ver no Github</a>
        </article>
    </section>
</template>