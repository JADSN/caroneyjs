import api from './api'

const END_POINT = 'registers';

export const apiRegister = {
    all() {
        return api.get(END_POINT);
    },

    create(newItem) {
        return api.post(END_POINT, newItem);
    },

    // edit(newDescription, id) {
    //     const END_POINT_WITH_PARAM = END_POINT + `/${id}`
    //     return api.put(END_POINT_WITH_PARAM, newDescription);
    // },

    remove(id) {
        return api.delete(`${END_POINT}/${id}`);
    }
}