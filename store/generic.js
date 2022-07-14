import GenericService from '@/services/genericService'

const crudStore = ({ name, url, keyName }) => {
  const genericService = new GenericService({
    name,
    url
  })

  return {
    state: () => ({
      item: {},
      items: [],
      itemError: null
    }),
    getters: {
      ITEM: state => state.item,
      ITEMS: state => state.items,
      ITEM_ERROR: state => state.itemError
    },
    mutations: {
      UPDATE_ITEM_SUCCESS: (state, item) => {
        state.item = item
      },
      UPDATE_ITEM_FAIL (state, err) {
        state.itemError = err
      },

      CREATE_ITEM_SUCCESS (state, item) {
        state.item = item
      },
      CREATE_ITEM_FAIL (state, err) {
        state.itemError = err
      },

      FETCH_ITEM_SUCCESS (state, item) {
        state.item = item
      },
      FETCH_ITEM_FAIL (state, err) {
        state.itemError = err
      },

      FETCH_ITEMS_SUCCESS (state, items) {
        state.items = items
      },
      FETCH_ITEMS_FAIL (state, err) {
        state.itemError = err
      },

      DELETE_ITEM_SUCCESS () {},
      DELETE_ITEM_FAIL (state, err) {
        state.itemError = err
      }
    },
    actions: {
      FETCH_ALL: async ({ commit }) => {
        try {
          const items = await genericService.fetchAll()
          commit('FETCH_ITEMS_SUCCESS', items)
        } catch (err) {
          commit('FETCH_ITEMS_FAIL', {
            errType: `${name} fetchAll failed`,
            err
          })
        }
      },
      FETCH_ONE: async ({ commit }, id) => {
        try {
          const item = await genericService.fetchOne(id)
          commit('FETCH_ITEM_SUCCESS', item)
        } catch (err) {
          commit('FETCH_ITEM_FAIL', {
            errType: `${name} fetch failed`,
            err
          })
        }
      },
      CREATE: async ({ commit }, payload) => {
        try {
          const item = await genericService.create(payload)
          commit('CREATE_ITEM_SUCCESS', item)
        } catch (err) {
          commit('CREATE_ITEM_FAIL', {
            errType: `${name} create failed`,
            err
          })
          throw err
        }
      },
      UPDATE: async ({ commit }, { payload, id }) => {
        try {
          const item = await genericService.update(id, payload)
          commit('UPDATE_ITEM_SUCCESS', item)
        } catch (err) {
          commit('UPDATE_ITEM_FAIL', {
            errType: `${name} update failed`,
            err
          })
        }
      },
      DELETE: async ({ commit }, id) => {
        try {
          const item = await genericService.delete(id)
          commit('DELETE_ITEM_SUCCESS', item)
        } catch (err) {
          commit('DELETE_ITEM_FAIL', {
            errType: `${name} delete failed`,
            err
          })
        }
      }
    }
  }
}

export default crudStore
