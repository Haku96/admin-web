import { defineStore } from 'pinia'
import { clearToken, setToken } from '@/utils/auth'
import { login, logout, getUserInfo } from '@/api/user'

export const useUserStore = defineStore('user', () => {
  const router = useRouter()
  const userInfo = ref()

  const asyncLogin = (userInfo) => {
    login(userInfo).then((res) => {
      // TODO res 响应类型
      setToken(res?.token)
      router.push({ name: 'home' })
    })
  }

  // TODO 获取用户信息的时机
  const asyncGetUserInfo = async () => {
    const res = await getUserInfo()

    userInfo.value = res.data
  }

  const asyncLogout = () => {
    logout().then(() => {
      router.push('/login')

      clearToken()
    })
  }

  return { userInfo, asyncLogin, asyncGetUserInfo, asyncLogout }
})
