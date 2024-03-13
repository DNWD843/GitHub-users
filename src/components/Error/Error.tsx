import React, { FC } from 'react'
import { ErrorType } from '../../types/types'
import './Error.css'

export const Error: FC<ErrorType> = ({ message }) => <p className="error">{message}</p>
