import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authors: [
      {id: 1, name: "Author 001", description: "Author 001 description", email: "author.001@email.com"},
      {id: 2, name: "Author 002", description: "Author 002 description", email: "author.002@email.com"},
      {id: 3, name: "Author 003", description: "Author 003 description", email: "author.003@email.com"},
      {id: 4, name: "Author 004", description: "Author 004 description", email: "author.004@email.com"},
    ]
  },
  mutations: {
    ADD_AUTHOR: (state, author) => {
      state.authors.push(author)
    }
  },
  actions: {

  }
})
