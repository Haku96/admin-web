class LocalStorage {
  public storagePrefix: string

  constructor(storagePrefix = 'admin') {
    this.storagePrefix = storagePrefix
  }

  setItem(key: string, value: any) {
    try {
      const stringValue = JSON.stringify(value)
      localStorage.setItem(this.storagePrefix + key, stringValue)
    } catch (error) {
      console.error('LocalStorage setItem error:', error)
    }
  }

  getItem(key: string) {
    try {
      const stringValue = localStorage.getItem(this.storagePrefix + key)
      if (stringValue === null) return null
      return JSON.parse(stringValue)
    } catch (error) {
      console.error('LocalStorage getItem error:', error)
      return null
    }
  }

  removeItem(key: string) {
    try {
      localStorage.removeItem(this.storagePrefix + key)
    } catch (error) {
      console.error('LocalStorage removeItem error:', error)
    }
  }

  clear() {
    try {
      localStorage.clear()
    } catch (error) {
      console.error('LocalStorage clear error:', error)
    }
  }
}

export const storage = new LocalStorage()
