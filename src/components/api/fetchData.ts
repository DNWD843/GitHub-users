import { withCache } from '../../HOC/withCache'

const fetchDataFn = <T>(url: string): Promise<T> => {
    return fetch(url, {
        headers: {
            Accept: 'application/vnd.github+json',
            Authorization: `Bearer ${process.env.TOKEN}`,
            'X-GitHub-Api-Version': '2022-11-28',
        },
    }).then((res) => {
        if (res.ok) {
            return res.json()
        }

        return Promise.reject({ message: 'Ошибка запроса данных' })
    })
}

export const fetchData = withCache(fetchDataFn)
