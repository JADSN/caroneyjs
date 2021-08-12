import { apiRegister } from "../api/registers"

import { formatDateForInputDateHtmlField } from '../utils/date'

export const actions = {
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

    // async createTask({ commit, dispatch, state }, newDescription) {
    //     const newItem = {
    //         description: newDescription,
    //     }

    //     await tasksApi.create(newItem)
    //         .then(response => {
    //             if (response.status === 201) {
    //                 commit('SET_TASK_DESCRIPTION', '')
    //                 dispatch('getAllTasks')
    //             }
    //         })
    //         .catch(error => []);
    // },

    // async updateTask({ commit, dispatch, state }, { taskDesc, taskId }) {

    //     const newItem = {
    //         description: taskDesc,
    //     }

    //     await tasksApi.edit(newItem, taskId)
    //         .then(response => {
    //             if (response.status === 200) {
    //                 commit('SET_TASK_DESCRIPTION', '')
    //                 dispatch('getAllTasks')
    //             }
    //         })
    //         .catch(error => []);
    // },

    // async removeTask({ commit, dispatch, state }, taskId) {

    //     // await fetch(`http://localhost:5000/tasks/${taskId}`, {
    //     //     method: 'DELETE',
    //     //     headers: { 'Content-Type': 'application/json' },
    //     // })
    //     await tasksApi.remove(taskId)
    //         .then(response => {
    //             if (response.status === 200) {
    //                 commit('SET_TASK_DESCRIPTION', '')
    //                 dispatch('getAllTasks')
    //             }
    //         })
    //         .catch(error => []);
    // }
}