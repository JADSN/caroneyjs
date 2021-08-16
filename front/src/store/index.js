import { createStore, createLogger } from 'vuex'

import { state } from './state.js'
import { getters } from './getters.js'
import { mutations } from './mutations.js'
import { actions } from './actions.js'

const debug = process.env.NODE_ENV !== 'production'

// Create a new store instance.
const store = createStore({
    state,
    getters,
    mutations,
    actions,
    modules: {},
    strict: false,
    plugins: [createLogger()]
})

export default store