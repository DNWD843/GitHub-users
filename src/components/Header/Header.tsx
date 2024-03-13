import React, { ChangeEvent, FC, FormEvent, useCallback, useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { routesMap } from '../../constants'
import classNames from 'classnames'
import { BreadCrumb } from '../BreadCrumb/BreadCrumb'
import './Header.css'

const resolveSearchFromUrl = (search: string) => {
    if (!search) {
        return ''
    }

    const [, value] = search.split('=')

    return value
}

export const Header: FC = () => {
    const { search, pathname } = useLocation()
    const navigate = useNavigate()

    const [searchValue, setSearchValue] = useState(resolveSearchFromUrl(search))

    const isSubmitDisabled = useMemo(() => !searchValue, [searchValue])

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (!searchValue.trim().length) {
            return
        }

        navigate(`${routesMap.search}?query=${searchValue}`)
    }

    const handleInputValueChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            setSearchValue(event.currentTarget.value)

            if (!event.currentTarget.value) {
                navigate(routesMap.users)
            }
        },
        [navigate],
    )

    useEffect(() => {
        if (pathname !== routesMap.search) {
            setSearchValue('')
        }
    }, [pathname])

    return (
        <header className="header">
            <div className="container header__container">
                <nav className="header__navigation">
                    <BreadCrumb />
                </nav>

                <div className="header__search">
                    <form className="header__search-form" onSubmit={onSubmit}>
                        <input
                            type="search"
                            className="header__search-input"
                            placeholder="Поиск пользователя"
                            value={searchValue}
                            onChange={handleInputValueChange}
                        />
                        <button
                            type="submit"
                            className={classNames('header__search-button', { 'header__search-button_disabled': isSubmitDisabled })}
                            disabled={isSubmitDisabled}
                        >
                            Найти
                        </button>
                    </form>
                </div>
            </div>
        </header>
    )
}
