const services = {}

export function StorageService(
  key,
  defaultValue = null,
  storage = localStorage,
) {
  if (services[key]) {
    return services[key]
  }

  const service = {
    get() {
      const data = storage.getItem(key)
      return data ? JSON.parse(data) : defaultValue
    },
    set(data) {
      storage.setItem(key, JSON.stringify(data))
    },
  }

  services[key] = service

  return service
}
