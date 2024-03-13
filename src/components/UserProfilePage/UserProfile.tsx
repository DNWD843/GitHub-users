import React, { FC } from 'react'
import { UserProfile as UserProfileProps } from '../../types/types'
import { minifyNumber } from '../../utils'

export const UserProfile: FC<UserProfileProps> = (props) => {
    const { avatar_url, blog, followers, following, login, name, repos } = props

    return (
        <>
            <section className="user-profile">
                <div className="user-profile__image-container">
                    <img className="user-profile__image" src={avatar_url} alt="user profile photo" />
                </div>
                <div className="user-profile__content">
                    <h1 className="user-profile__title">
                        {name ? `${name}, ` : ''}
                        <span className="user-profile__accent">{login}</span>
                    </h1>
                    <p className="user-profile__text">
                        <span className="user-profile__accent">{minifyNumber(followers)}</span> followers ·{' '}
                        <span className="user-profile__accent">{minifyNumber(following)}</span> following ·{' '}
                        <a href={blog} target="_blank" rel="noreferrer noopener" className="link">
                            {blog}
                        </a>
                    </p>
                </div>
            </section>

            <section className="repository-list">
                <div className="repository-list__header">
                    <h2 className="repository-list__title">Репозитории</h2>
                    <a href={`https://github.com/${login}?tab=repositories`} className="link" target="_blank" rel="noreferrer noopener">
                        Все репозитории
                    </a>
                </div>

                <div className="repository-list__container">
                    {repos.map(({ id, name, description, html_url }) => (
                        <section className="repository-list__item" key={String(id)}>
                            <h3 className="repository-list__item-title">
                                <a href={html_url} rel="noreferrer noopener" target="_blank" className="link">
                                    {name}
                                </a>
                            </h3>
                            <p className="repository-list__item-text">{description}</p>
                        </section>
                    ))}
                </div>
            </section>
        </>
    )
}
