import axios from 'axios'
const API_URL = "http://localhost:3000/api/v1/"

export default {
    async getTasks() {
        return await axios.get(`${API_URL}/task`)
    },
    async newTask(payload) {
        return axios.post(`${API_URL}/task`, payload)
    },
    async removeTask(id) {
        return axios.delete(`${API_URL}/task/${id}`)
    },
    async updateTask(id, payload) {
        return axios.put(`${API_URL}/task/${id}`, payload)
    },
    async newCategory(payload) {
        return axios.post(`${API_URL}/category`, { name: payload })
    },
}