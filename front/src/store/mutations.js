export const mutations = {
    SET_CONGREGATION_NAME(state, payload) {
        state.congregationName = payload;
    },

    SET_ACTUAL_CITY_NAME(state, payload) {
        state.cityName = payload;
    },

    SET_ACTUAL_STATE_NAME(state, payload) {
        state.stateName = payload;
    },

    SET_MONTH(state, payload) {
        state.actualMonth = payload;
    },

    SET_ALL_MONTHS(state, payload) {
        state.allMonths = payload;
    },

    SET_YEAR(state, payload) {
        state.actualYear = payload;
    },

    SET_REGISTERS(state, payload) {
        state.registers = payload;
    },

    SET_REGISTER(state, payload) {
        state.register = payload;
    },


}

