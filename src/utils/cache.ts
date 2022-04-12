class localStorage {
  setItem(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  getItem(key: string) {
    // obj => string => obj
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }

  removeItem(key: string) {
    window.localStorage.removeItem(key)
  }

  clear() {
    window.localStorage.clear()
  }
}

export default new localStorage()
