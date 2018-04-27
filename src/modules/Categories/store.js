import  Category from './resources'

export default {
  state: {
    items: []
  },
  mutations: {
    CATEGORIES_FIND_ALL (state, playload) {
      state.items = playload
    },
  },
  actions: {
    CategoriesFindAll (context) {
      Category.list().then(response => {
        context.commit('CATEGORIES_FIND_ALL', response.data)
      }).catch(errors => {
        console.log(errors)
      })
    }
  },
  getters: {

  }
}
