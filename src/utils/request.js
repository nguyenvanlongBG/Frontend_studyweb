import axios from "axios"
const service=axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: {
        'Accept': 'Application/json'
    }
})
export default service