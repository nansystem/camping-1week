import firebase from '@/plugins/firebase'
const db = firebase.firestore()

// const uuid = () => {
//   return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
//     const r = (Math.random() * 16) | 0
//     const v = c == 'x' ? r : (r & 0x3) | 0x8
//     return v.toString(16)
//   })
// }

export const state = () => ({
  recipe: {
    title: '',
    memo: ''
  },
  list: []
})

export const actions = {
  async post({ commit }, { recipe, user }) {
    return await db
      .collection('recipe')
      .add({
        title: recipe.title,
        memo: recipe.memo,
        userId: user.id,
        userName: user.name
      })
      .then(function(docRef) {
        commit('clearRecipe')
        console.log('Document written with ID: ', docRef.id)
      })
      .catch(function(error) {
        console.error('Error adding document: ', error)
      })
  },
  async listAll({ commit }) {
    const querySnapshot = await db.collection('recipe').get()
    const data = querySnapshot.docs.map(doc => {
      return doc.data()
    })
    console.info('listAll data:', data)
    commit('setList', data)
  }
}

export const mutations = {
  updateTitle(state, title) {
    state.recipe.title = title
  },
  updateMemo(state, memo) {
    state.recipe.memo = memo
  },
  clearRecipe(state) {
    state.recipe = {
      title: '',
      memo: ''
    }
  },
  setList(state, data) {
    state.list = data
  }
}

export const getters = {
  recipe: state => {
    return state.recipe
  },
  list: state => {
    return state.list
  }
}
