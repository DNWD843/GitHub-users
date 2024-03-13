import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import './UsersList.css'
import { pluralize, PluralizeConfigKeys, PluralizedTextForms } from '../../utils/pluralize'
import { UsersList as UsersListProps } from '../../types/types'

const repoDeclensionForms: PluralizedTextForms = {
    [PluralizeConfigKeys.nominativeCaseForm]: 'репозиторий',
    [PluralizeConfigKeys.genitiveCaseForm]: 'репозитория',
    [PluralizeConfigKeys.pluralForm]: 'репозиториев',
}

export const UsersList: FC<{ users: UsersListProps }> = ({ users }) => {
    return (
        <div className="users-list">
            {users?.map(({ id, login, avatar_url, company, public_repos }) => (
                <section className="users-list__item" key={String(id)}>
                    <div className="users-list__image-container">
                        <img className="users-list__image" src={avatar_url} alt="defunkt profile photo" />
                    </div>
                    <div className="users-list__content">
                        <h2 className="users-list__title">
                            <Link to={`/users/${login}`} className="link">
                                {login}
                            </Link>
                            {`, ${public_repos} ${pluralize({ quantity: public_repos, textForms: repoDeclensionForms })}`}
                        </h2>
                        <p className="users-list__text">{company}</p>
                    </div>
                </section>
            ))}
        </div>
    )
}
