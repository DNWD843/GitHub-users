import React, { memo } from 'react'
import { useBreadCrumb } from '../../hooks/useBreadCrumb'
import './BreadCrumb.css'
import { Link } from 'react-router-dom'
import { routesMap } from '../../constants'
import classNames from 'classnames'

const BreadCrumbComponent = () => {
    const breadcrumbs = useBreadCrumb()

    return (
        <ul className="header__navigation-list">
            {breadcrumbs.map(({ isLink, label, to = routesMap.users }, index) => {
                const linkClassName = classNames('header__navigation-link', {
                    'header__navigation-link_inactive': index > 0,
                })

                return (
                    <li key={label} className="header__navigation-list-item">
                        {isLink ? (
                            <Link to={to} className={linkClassName}>
                                {label}
                            </Link>
                        ) : (
                            <span className={linkClassName}>{label}</span>
                        )}
                    </li>
                )
            })}
        </ul>
    )
}

export const BreadCrumb = memo(BreadCrumbComponent)
