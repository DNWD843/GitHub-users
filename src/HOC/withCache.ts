export const withCache = (fetchFn: <T>(url: string) => Promise<T>) => {
    const cache = new Map()

    return async <T>(url: string): Promise<T> => {
        if (cache.has(url)) {
            return cache.get(url)
        }

        const response = await fetchFn<T>(url)

        cache.set(url, response)

        return response
    }
}
