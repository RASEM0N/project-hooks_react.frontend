import React from 'react'
import Routes from './Components/routes'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Components/common/Navbar'
import { CurrentUserProvider } from './Components/contexts/currentUser'
import UserChecker from './Components/common/UserChecker'

const App = () => {
    return (
        <CurrentUserProvider>
            <UserChecker>
                <BrowserRouter>
                    <Navbar />
                    <Routes />
                </BrowserRouter>
            </UserChecker>
        </CurrentUserProvider>
    )
}

export default App
