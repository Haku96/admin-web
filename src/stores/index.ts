import { createPinia } from 'pinia'
export { useUserStore } from './user'
export { useAppStore } from './app'

const pinia = createPinia()

export default pinia
