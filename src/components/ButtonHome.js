import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export const ButtonHome = () => (
    <Link
        className='button is-info'
        to='/'>
        Back to Home
    </Link>
)
