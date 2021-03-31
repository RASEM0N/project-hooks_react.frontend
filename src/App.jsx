import React from 'react'
import Routes from './Components/routes'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Components/common/Navbar'
import { CurrentUserProvider } from './Components/contexts/currentUser'

const App = () => {
    return (
        <div>
            <CurrentUserProvider>
                <BrowserRouter>
                    <Navbar />
                    <Routes />
                </BrowserRouter>
            </CurrentUserProvider>
        </div>
    )
}

export default App
