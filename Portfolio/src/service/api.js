import axios from 'axios'
const API="https://66e526d95cc7f9b6273c6a2b.mockapi.io"
const getProjects = () => axios.get(`${API}/projects`)
export {getProjects}
 