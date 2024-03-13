import { useLocation } from 'react-router-dom'
import { useCallback, useEffect, useState } from 'react'
import { useFetchStatus } from './useFetchStatus'
import { fetchData } from '../components/api/fetchData'
import { UsersListResponse, UsersSearchListResponse, FullUserResponse, UsersList } from '../types/types'

export const useUsersList = () => {
    const { search } = useLocation()
    const query = new URLSearchParams(search).get('query')

    const { setLoading, setIsError, setError, ...fetchStatuses } = useFetchStatus()
    const [data, setData] = useState<UsersList | null>(null)

    const fetchUsers = useCallback(async () => {
        setLoading(true)
        setData(null)
        setIsError(false)
        setError(null)

        const usersEndpoint = query ? `/search/users?q=${query}` : '/users'

        try {
            const usersData = await fetchData<UsersListResponse | UsersSearchListResponse>(`https://api.github.com${usersEndpoint}`)

            const usersList = 'items' in usersData ? usersData.items : usersData

            const usersFullData = await Promise.all(usersList.map(({ login }) => fetchData<FullUserResponse>(`https://api.github.com/users/${login}`)))

            setData(usersFullData)
        } catch (err: any) {
            setError(err)
            setIsError(true)
        } finally {
            setLoading(false)
        }
    }, [query, setError, setIsError, setLoading])

    useEffect(() => {
        fetchUsers()
    }, [fetchUsers, query])

    return {
        ...fetchStatuses,
        data,
        query,
    }
}
