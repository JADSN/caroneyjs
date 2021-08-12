import { createStore, createLogger } from 'vuex'

import { state } from './state'
import { getters } from './getters'
import { mutations } from './mutations'
import { actions } from './actions'

const debug = process.env.NODE_ENV !== 'production'

// Create a new store instance.
const store = createStore({
    state,
    getters,
    mutations,
    actions,
    modules: {},
    strict: debug,
    plugins: [createLogger()]
})

export default store