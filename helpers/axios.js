import axios from 'axios'
import {api} from '../urlConfig.js'

const axiosInstance = axios.create({
    baseUrl: api,
    // headers: {}
})

export default axiosInstance