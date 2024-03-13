import { RoutesMapKeys } from '../types/types'

export const enum UrlParamNames {
    userId = 'userId',
}

export const routesMap: Record<RoutesMapKeys, string> = {
    root: '/',
    users: '/users',
    userProfile: '/users/:userId',
    search: '/search',
    any: '*',
}
