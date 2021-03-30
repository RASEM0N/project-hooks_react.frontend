import React from 'react'
import Routes from './Components/routes'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Components/common/Navbar'

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes />
            </BrowserRouter>
        </div>
    )
}

export default App
