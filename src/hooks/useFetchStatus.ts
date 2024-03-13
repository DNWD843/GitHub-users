import { useState } from 'react'
import { ErrorType } from '../types/types'

export const useFetchStatus = () => {
    const [isLoading, setLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [error, setError] = useState<ErrorType | null>(null)

    return {
        isLoading,
        setLoading,
        isError,
        setIsError,
        error,
        setError,
    }
}
