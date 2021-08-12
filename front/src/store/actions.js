import { apiRegister } from "../api/registers"

import { formatDateForInputDateHtmlField } from '../utils/date'

export const actions = {

    async getRegisterById({ commit }, id) {
        const dataFromRequest = await apiRegister.all().then(response => response.data).catch(error => [])
        const result = await dataFromRequest.filter(item => item.id === id)[0]

        // const normalizedData = dataFromRequest.map(({ date, ...item }) => {
        //     const newDate = formatDateForInputDateHtmlField(date);
        //     const result = {
        //         ...item,
        //         date: newDate,
        //     }
        //     return result;
        // })

        console.log(result);
        return result;
    },

    async getAllRegisters({ commit }) {
        const dataFromRequest = await apiRegister.all().then(response => response.data).catch(error => [])

        const normalizedData = dataFromRequest.map(({ date, ...item }) => {
            const newDate = formatDateForInputDateHtmlField(date);
            const result = {
                ...item,
                date: newDate,
            }
            return result;
        })

        commit('SET_REGISTERS', normalizedData)
    },

    async createRegister({ dispatch, getters }, newItem) {

        const registerMaxCode = getters.getMaxCode + 1;
        const timestampDate = new Date(newItem.date).getTime()

        const itemToCreate = {
            code: registerMaxCode,
            date: timestampDate,
            description: newItem.description,
            symbol: newItem.symbol,
            donateInput: newItem.donateInput,
            donateOutput: newItem.donateOutput,
            cbInput: newItem.cbInput,
            cbOutput: newItem.cbOutput,
            otherInput: newItem.otherInput,
            otherOutput: newItem.otherOutput,
        }

        await apiRegister.create(itemToCreate)
            .then(response => {
                if (response.status === 201) {
                    dispatch('getAllRegisters')
                }
            })
            .catch(error => []);
    },

    async changeRegister({ commit, dispatch, state }) {

        // console.log(item);
    },

    async removeRegister({ dispatch }, id) {

        await apiRegister.remove(id)
            .then(response => {
                if (response.status === 200) {
                    dispatch('getAllRegisters')
                }
            })
            .catch(error => []);
    }
}