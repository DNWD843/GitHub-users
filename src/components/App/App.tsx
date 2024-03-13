import React, { FC } from 'react'
import { UserProfilePage } from '../UserProfilePage/UserProfilePage'
import { UsersPage } from '../UsersPage/UsersPage'
import { UsersSearchPage } from '../UsersSearchPage/UsersSearchPage'
import { Header } from '../Header/Header'
import { Navigate, Route, Routes } from 'react-router-dom'
import { routesMap } from '../../constants'

export const App: FC = () => {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path={routesMap.users} element={<UsersPage />}></Route>
                    <Route path={routesMap.userProfile} element={<UserProfilePage />}></Route>
                    <Route path={routesMap.search} element={<UsersSearchPage />}></Route>
                    <Route path={routesMap.any} element={<Navigate to={routesMap.users} replace />}></Route>
                </Routes>
            </main>
        </>
    )
}
