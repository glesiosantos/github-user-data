<script setup>
import { computed, reactive, ref } from "vue"
import UserInfo from "./UserInfo.vue";
import Repository from "./Repository.vue";
import Form from "./Form.vue";

  const username = ref('')

  const state = reactive({
    login: '',
    name: '',
    bio: '...',
    company: '',
    avatar_url: '',
    repos: [],
  })

  async function fetchGitUser(username) {
    
    const res = await fetch(`https://api.github.com/users/${username}`)
    const { login, name, bio, company, avatar_url} = await res.json()
    
    state.login = login
    state.name = name
    state.bio = bio
    state.company = company
    state.avatar_url = avatar_url

    await fetchUserRepositories(login)
  }

  async function fetchUserRepositories(searchInput) {
    const res = await fetch(`https://api.github.com/users/${searchInput}/repos`)
    state.repos = await res.json()
  }

  const reposCountMessage = computed(() => state.repos.length > 0 ? 
    `@${state.login} possui ${state.repos.length} repositórios publicos` : 
    `@${state.login} Não possui repositorio publico`)

</script>
<template>
  <slot></slot>
  <p>Pesquisando por: <strong>{{ username }}</strong></p>
  <Form v-on:form-submit="fetchGitUser" v-model="username"/>
  <UserInfo
      v-if="state.login" 
      :login="state.login" 
      :name="state.name" 
      :company="state.company"
      :bio="state.bio"
      :avatar="state.avatar_url"
    />
  
  <section v-if="state.repos.length > 0">
    <h2>{{ reposCountMessage }}</h2>
      <Repository 
        v-for="repos of state.repos" :key="repos"
        :full-name="repos.full_name" 
        :url="repos.html_url" 
        :description="repos.description"/>
  </section>
  <slot name="footer"></slot>
</template>