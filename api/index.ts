import axios from "axios"

const URL = 'http://localhost:5000/api/v1/auth/admin'

interface adminLoginBody{

    email: string,
    password: string,
}
export const adminLogin = (body: adminLoginBody) => axios.post(`${URL}/login`, body)