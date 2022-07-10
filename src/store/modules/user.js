import UserApi from '../../api/user'
import { setItem, getItem } from '../../utils/storage'
const TOKEN_KEY = 'token'
export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN_KEY) || '',
    nusas: getItem('nemus') || []
  }),
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
      setItem(TOKEN_KEY, token)
    },
    SET_PERMIS(state, data) {
      state.token = data
      setItem('nemus', data)
    }
  },
  actions: {
    async login({ commit }, payload) {
      const response = await UserApi.login(payload)
      //   console.log('vuex=>', response)
      commit('SET_TOKEN', response.token)
      return response
    },
    async getPermis({ commit }) {
      const response = await UserApi.list()
      // console.log('vuex=>', response)
      return response.menuList
    }
  }
}
