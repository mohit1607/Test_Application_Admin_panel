import React, { FC } from 'react'
import { Navbar, Footer } from './index'

type propType = {
    children: JSX.Element
}

export const Wrapper = ({ children }: propType) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}
