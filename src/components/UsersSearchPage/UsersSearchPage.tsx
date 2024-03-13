import React, { FC } from 'react'
import { UsersList } from '../UsersList/UsersList'
import { useUsersList } from '../../hooks/useUsersList'
import { Error } from '../Error/Error'
import { Loader } from '../Loader/Loader'

export const UsersSearchPage: FC = () => {
    const { data, isLoading, isError, error, query } = useUsersList()

    return (
        <div className="container">
            {isError && error && <Error message={error.message} />}
            {isLoading && <Loader />}
            {data && !data.length && <h1 className="title">Ничего не найдено по запросу {query}</h1>}
            {data && Boolean(data.length) && (
                <>
                    <h1 className="title">Пользователи по запросу {query}</h1>
                    <UsersList users={data} />
                </>
            )}
        </div>
    )
}
