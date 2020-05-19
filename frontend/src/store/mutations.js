export default {
    setCategorySelected(state, payload) {
        state.selectedCategory = payload
    },
    setTaskList(state, payload) {
        state.taskList = payload.data
    },
    newTask(state, payload) {
        if (payload.created_at) state.selectedCategory.tasks.push(payload.data)
    },
    removeTask(state, id) {
        if (id) state.selectedCategory.tasks.splice(state.selectedCategory.tasks.findIndex(i => i.id === id), 1);
    },
    updateTask(state, payload) {
        let i = state.selectedCategory.tasks.findIndex(i => i.id === payload.id)
        state.selectedCategory.tasks[i].title = payload.title
    },
    newCategory(state, payload) {
        state.taskList.push(payload.data)
    },
    changeCategory(state, payload) {
        state.selectedCategory = payload
    },
    doneTask(state, payload) {
        let i = state.selectedCategory.tasks.findIndex(i => i.id === payload.id)
        state.selectedCategory.tasks[i].done = payload.done
    },
}
