import React from 'react'
import "./login.scss"
import LeftPanel from "./LeftPanel"
import RightPanel from "./RightPanel"
const LoginPage = () => {
    return (
        <div className="login-app-main">
            <LeftPanel />
            <RightPanel/>
        </div>
    )
}

export default LoginPage
