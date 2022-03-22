import axios from 'axios'

export const baseTestURL = axios.create({
    baseURL: `https://jsonplaceholder.typicode.com`
})