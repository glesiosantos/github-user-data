<!-- eslint-disable vue/multi-word-component-names -->
<script>
  export default {
    data(){
      return {
        login: 'glesiosantos',
        name: 'Glêsio Santos',
        bio: '...',
        company: 'gooff.digital',
        avatar_url: 'https://unsplash.it/256',
        searchInput: ''
      }
    },
    methods: {
      async fetchGitUser() {
        const res = await fetch(`https://api.github.com/users/${this.searchInput}`)
        const { login, name, bio, company, avatar_url} = await res.json()

        this.login = login
        this.name = name
        this.bio = bio
        this.company = company
        this.avatar_url = avatar_url
      }
    }
  }
</script>
<template>
  <h1>GitHub User Data</h1>
  <input type="text" v-model="searchInput"/>
  <button v-bind="fetchGitUser">Carregar Usuário</button>
  <br>
  <img v-bind:src="avatar_url"/><br>
  <strong>@{{login}}</strong>
  <h2>{{name}}</h2>
  <h3>{{ company }}</h3>
  <span>{{ bio }}</span>
</template>