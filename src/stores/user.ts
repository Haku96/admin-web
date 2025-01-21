import { defineStore } from 'pinia'
import { clearToken, setToken } from '@/utils/auth'
import { login, logout, getUserInfo } from '@/api/user'

export const useUserStore = defineStore('user', () => {
  const router = useRouter()
  const userInfo = ref()

  const asyncLogin = (userInfo) => {
    login(userInfo).then((res) => {
      setToken(res?.token)
      router.push({ name: 'home' })
    })
  }

  const asyncGetUserInfo = () => {
    getUserInfo().then(() => {})
  }

  const asyncLogout = () => {
    logout().then(() => {
      router.push('/login')

      clearToken()
    })
  }

  return { userInfo, asyncLogin, asyncGetUserInfo, asyncLogout }
})
