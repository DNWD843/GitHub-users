import React, { FC } from 'react'
import './UserProfilePage.css'
import { useUserProfile } from '../../hooks/useUserProfile'
import { UserProfile } from './UserProfile'
import { Error } from '../Error/Error'
import { Loader } from '../Loader/Loader'

export const UserProfilePage: FC = () => {
    const { data, isLoading, isError, error } = useUserProfile()

    return (
        <div className="container">
            {isError && error ? <Error message={error.message} /> : null}
            {isLoading ? <Loader /> : null}
            {data && !isError && !isLoading ? <UserProfile {...data} /> : null}
        </div>
    )
}
