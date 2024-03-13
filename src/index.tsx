import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import './common.css'
import { App } from './components/App/App'

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/sw.js', { scope: '/' })
        .then((registration) => {
            console.log('Service worker is registered', registration)
        })
        .catch((err) => {
            console.error('Service worker failed to register!', err)
        })
}

const root = createRoot(document.getElementById('root') || document.body)

root.render(
    <Router>
        <App />
    </Router>,
)
