<!-- eslint-disable vue/multi-word-component-names -->
<script>
export default {
    data() {
        return {
            login: '',
            name: '',
            bio: '...',
            company: 'Acme Inc.',
            avatarUrl: 'https://unsplash.it/256',
            searchInput: ''   
        }
    },
    methods: {
        async fetchGithubUser(){
            const resp = await fetch(`https://api.github.com/users/${this.searchInput}`)
            const {login, name, bio, company, avatar_url} = await resp.json()

            this.login = login
            this.name = name
            this.bio = bio,
            this.company = company
            this.avatarUrl = avatar_url
        }    
    }
}
</script>
<template>
    <h1 class="text-red-500 font-bold text-3xl mb-5">Github User Data</h1>

    <div class="flex flex-col space-y-3 w-full px-5 mb-5">
        <input type="text" v-model="searchInput" class="w-full text-lg p-3 "/>
        <button @click="fetchGithubUser" class="bg-red-500 px-2 py-3 text-lg font-bold text-white rounded-sm">Load User</button>
    </div>
    <div class="flex flex-col items-center">
        <img :src="avatarUrl" class="w-60 h-60 rounded-full"/> avatar
        <strong class="text-red-500 ">@{{login}}</strong>
        <h2 class="text-white">{{name}}</h2>
        <h3 class="text-white">{{company}}</h3>
        <span class="text-white">{{bio ? bio : '...'}}</span>
    </div>
</template>