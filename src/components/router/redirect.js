import React from 'react'
import { Navigate } from 'react-router-dom'

const Redirect = () => {
    return (
        <>
            <h1>页面重定向跳转到登录界面 /router/login</h1>
            <Navigate to="/router/login" replace={true} />
        </>
    )
}

export default Redirect