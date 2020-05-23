export const state = () => ({
  uid: '',
  displayName: ''
})

export const actions = {
  login({ commit }, user) {
    if (!user) return
    commit('setUid', user.uid)
    commit('setDisplayName', user.displayName)
  },
  logout({ commit }) {
    commit('setUid', '')
    commit('setDisplayName', '')
  }
}

export const mutations = {
  setUid(state, uid) {
    state.uid = uid
  },
  setDisplayName(state, displayName) {
    state.displayName = displayName
  }
}

export const getters = {
  isLogin: state => {
    return !!state.uid
  },
  displayName: state => {
    return state.displayName
  },
  user: state => {
    return {
      id: state.uid,
      name: state.displayName
    }
  }
}
