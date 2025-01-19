import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from 'axios'

const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.BASE_URL,
  timeout: 5000,
})

service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token')
    if (token && config.headers) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

service.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default service
