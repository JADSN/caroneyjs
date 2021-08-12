import api from './api'

const END_POINT = 'registers';

export const apiRegister = {
    all() {
        return api.get(END_POINT);
    },

    // create(newDescription) {
    //     return api.post(END_POINT, newDescription);
    // },

    // edit(newDescription, id) {
    //     const END_POINT_WITH_PARAM = END_POINT + `/${id}`
    //     return api.put(END_POINT_WITH_PARAM, newDescription);
    // },

    // remove(id) {
    //     const END_POINT_WITH_PARAM = END_POINT + `/${id}`
    //     return api.delete(END_POINT_WITH_PARAM);
    // }
}