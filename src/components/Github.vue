<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { computed, reactive, ref } from "vue"

import UserInfo from "./UserInfo.vue"
import FormUser from "./FormUser.vue";
import UserRepository from "./UserRepository.vue"

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

async function fetchGithubUser(username) {
    const resp = await fetch(`https://api.github.com/users/${username}`)
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
    <slot></slot>
    <FormUser @formSearch="fetchGithubUser"/>
    <UserInfo 
        v-if="state.login" 
        :login="state.login" 
        :bio="state.bio" 
        :avatarUrl="state.avatarUrl" 
        :company="state.company" 
        :name="state.name" />
    <!-- <span v-else class="text-red-500 text-4xl font-bold m-2">Nenhum usuário encontrado</span> -->
    <section class="flex flex-col space-y-5 px-5 " v-if="state.repos.length > 0">
        <h2 class="text-white font-thin text-3xl my-2 text-center">{{ reposCountMessage }}</h2>
        <UserRepository :repo="repo" v-for="repo in state.repos" :key="repo"/>
    </section>  
    <slot name="footer"></slot>      
</template>