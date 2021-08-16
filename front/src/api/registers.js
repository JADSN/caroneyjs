import api from './api.js'

const END_POINT = 'registers';

export const apiRegister = {
    all() {
        return api.get(END_POINT);
    },

    create(newItem) {
        return api.post(END_POINT, newItem);
    },

    edit(item) {
        const END_POINT_WITH_PARAM = END_POINT + `/${item.id}`
        return api.put(END_POINT_WITH_PARAM, item);
    },

    remove(id) {
        return api.delete(`${END_POINT}/${id}`);
    }
}