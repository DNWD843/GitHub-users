import { routesMap } from '../constants'
import { To, useLocation, useMatch } from 'react-router-dom'

const ROOT_LABEL = 'Пользователи гитхаба'
const SEARCH_LABEL = 'Поиск'

const breadcrumbs: Record<string, { label: string; isLink: boolean; to?: To }> = {
    rootActive: { label: ROOT_LABEL, isLink: true, to: routesMap.users },
    rootInactive: { label: ROOT_LABEL, isLink: false },
    search: { label: SEARCH_LABEL, isLink: false },
    userProfile: { label: '', isLink: false },
}

export const useBreadCrumb = () => {
    const { pathname } = useLocation()
    const matchUserProfileRoute = useMatch(routesMap.userProfile)

    if (pathname === routesMap.search) {
        return [breadcrumbs.rootActive, breadcrumbs.search]
    }

    if (matchUserProfileRoute) {
        return [
            breadcrumbs.rootActive,
            {
                ...breadcrumbs.userProfile,
                label: matchUserProfileRoute.params?.userId || '',
            },
        ]
    }

    return [breadcrumbs.rootInactive]
}
