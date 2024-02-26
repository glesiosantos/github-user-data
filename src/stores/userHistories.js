import {defineStore} from 'pinia'

export const searchHistoryStore = defineStore('searchHistory',{
    state: () => {
        return {
            users: []
        }
    },
    actions: {
        pushToHistory(username) {
            this.users.unshift(username)
        }
    }
})