import { defineStore } from 'pinia'
import { clearToken, setToken } from '@/utils/auth'
import { login, logout, getUserInfo } from '@/api/user'

export const useUserStore = defineStore('user', () => {
  const router = useRouter()
  const userInfo = ref()

  const asyncLogin = (userInfo) => {
    login(userInfo).then((res: any) => {
      const { token } = res

      setToken(token)
    })
  }

  const asyncGetUserInfo = () => {
    getUserInfo().then((res) => {})
  }

  const asyncLogout = () => {
    logout().then((res) => {
      router.push('/login')

      clearToken()
    })
  }

  return { userInfo, asyncLogin, asyncGetUserInfo, asyncLogout }
})
