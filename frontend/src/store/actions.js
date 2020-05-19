import api from '../api/tasks'

export default {
    async taskListAction({ commit }) {
        let data = await api.getTasks()
        commit('setTaskList', data)
        commit('setCategorySelected', data.data[0])
    },
    async newTaskAction({ commit }, payload) {
        let data = await api.newTask(payload)
        commit('newTask', data)
    },
    async removeTaskAction({ commit }, id) {
        await api.removeTask(id)
        commit('removeTask', id)
    },

    async updateTaskAction({ commit }, payload) {
        await api.updateTask(payload.id, payload)
        commit('updateTask', payload)
    },
    async newCategoryAction({ commit }, payload) {
        let data = await api.newCategory(payload)
        commit('newCategory', data)
    },
    async changeCategoryAction({ commit }, payload) {
        commit('changeCategory', payload)
    },
    async doneTaskAction({ commit }, payload) {
        await api.updateTask(payload.id, payload)
        commit('doneTask', payload)
    }
}
