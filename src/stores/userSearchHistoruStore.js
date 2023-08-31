import { defineStore } from 'pinia'

export const userSearchHistoryStore = defineStore('searchHistory', {
  state: () => {
    return {users: []}
  },
  actions: {
    pushToHistory(username) {
      this.users.unshift(username)
    }
  }
})