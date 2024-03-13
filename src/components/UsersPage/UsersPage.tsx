import React, { FC } from 'react'
import { UsersList } from '../UsersList/UsersList'
import { useUsersList } from '../../hooks/useUsersList'
import { Error } from '../Error/Error'
import { Loader } from '../Loader/Loader'

export const UsersPage: FC = () => {
    const { data, isLoading, isError, error } = useUsersList()

    return (
        <div className="container">
            {isError && error && <Error message={error.message} />}
            {isLoading && <Loader />}
            {data && <UsersList users={data} />}
        </div>
    )
}
