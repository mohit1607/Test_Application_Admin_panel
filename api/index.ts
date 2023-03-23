import axios from "axios"

const URL = 'http://localhost:5000/api/v1/auth'

interface adminLoginBody{
    email: string,
    password: string,
}
export const adminLogin = (body: adminLoginBody) => axios.post(`${URL}/admin/login`, body)

export const addTest = (body: any, token: any) => axios.post(`${URL}/tests/create`, body, {
    headers: {
        Authorization: `Bearer ${token}`
    }
}) 

export const getAllTests = (token: any) => axios.get(`${URL}/tests/get`,{
headers: {
    Authorization: `Bearer ${token}`
}
})

export const deleteTest = (id:string, token: any) => axios.delete(`${URL}/tests/del`, {
    data: {id},
    headers: {
         Authorization: `Bearer ${token}`
    }
})

export const createStudent = (body: any) => axios.post(`${URL}/student/create`, body)

export const getAllStudentsByUniversity = (university: any) => axios.post(`${URL}/student/all`, { university})

export const deleteStudent = (body: any) => axios.delete(`${URL}/student/del`, {
    data: body
}) 