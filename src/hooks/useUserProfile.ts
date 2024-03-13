import { useParams } from 'react-router-dom'
import { FullUserResponse, RepositoryResponse, UrlParams, UserProfile } from '../types/types'
import { useFetchStatus } from './useFetchStatus'
import { fetchData } from '../components/api/fetchData'
import { useCallback, useEffect, useState } from 'react'

export const useUserProfile = () => {
    const { userId } = useParams<UrlParams>()
    const { setLoading, setIsError, setError, ...fetchStatuses } = useFetchStatus()
    const [data, setData] = useState<UserProfile | null>(null)

    const fetchUserData = useCallback(async () => {
        setLoading(true)
        setIsError(false)
        setError(null)

        try {
            const userData = await fetchData<FullUserResponse>(`https://api.github.com/users/${userId}`)
            const repos = await fetchData<RepositoryResponse[]>(`${userData.repos_url}?per_page=6`)

            const userProfileData: UserProfile = {
                name: userData.name,
                login: userData.login,
                followers: userData.followers,
                following: userData.following,
                blog: userData.blog,
                avatar_url: userData.avatar_url,
                repos,
            }

            setData(userProfileData)
        } catch {
            setError({ message: 'Ошибка запроса данных пользователя' })
            setIsError(true)
        } finally {
            setLoading(false)
        }
    }, [setError, setIsError, setLoading, userId])

    useEffect(() => {
        fetchUserData()
    }, [fetchUserData, userId])
    return {
        ...fetchStatuses,
        data,
    }
}
