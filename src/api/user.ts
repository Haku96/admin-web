import service from '@/utils/request'

export const login = (data) => {
  return service.post('/user/login', data)
}

export const getUserInfo = () => {
  return service.get('/user/info')
}

export const logout = () => {
  return service.post('/user/logout')
}
