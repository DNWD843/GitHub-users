import React, { FC } from 'react'
import './Loader.css'

export const Loader: FC = () => (
    <div className="loader">
        <span className="loader__text">Загрузка</span>
        <span className="loader__indicator">.</span>
        <span className="loader__indicator loader__indicator_delay300">.</span>
        <span className="loader__indicator loader__indicator_delay600">.</span>
    </div>
)
