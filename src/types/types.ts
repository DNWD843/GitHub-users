import { UrlParamNames } from '../constants/routesMap'

export type UrlParams = {
    [UrlParamNames.userId]: string
}

export type RoutesMapKeys = 'root' | 'users' | 'userProfile' | 'search' | 'any'

export type ErrorType = {
    message: string
}

export type ShortUserResponse = {
    id: number
    login: string
    [key: string]: string | number | boolean
}

export type UsersListResponse = ShortUserResponse[]
export type UsersSearchListResponse = {
    items: UsersListResponse
    total_count: number
    incomplete_results: boolean
}

export type FullUserResponse = {
    id: number
    name: string
    login: string
    followers: number
    following: number
    blog: string
    avatar_url: string
    public_repos: number
    company: string
    repos_url: string
    [key: string]: string | number | boolean
}

export type RepositoryResponse = {
    id: number
    name: string
    description: string
    html_url: string
    [key: string]: string | number | boolean
}

export type ShortUser = {
    id: number
    login: string
    avatar_url: string
    public_repos: number
    company: string
}

export type UsersList = ShortUser[]

export type UserRepo = Partial<RepositoryResponse>

export type UserProfile = {
    avatar_url: string
    blog: string
    followers: number
    following: number
    login: string
    name: string
    repos: UserRepo[]
}
