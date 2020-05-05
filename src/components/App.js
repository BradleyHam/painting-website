import React, { useState } from 'react'
import Nav from './Navigation/Nav'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import About from './pages/About/About'
// import Gallery from './pages/Gallery/Gallery'
import Contact from './pages/Contact/Contact'
// import Services from './pages/ServicesPage/Services'
import FreeQuote from './FreeQuote/FreeQuote'
import Hamburger from './Hamburger/Hamburger'
import ContactComponent from './ContactComponent/ContactComponent'

const App = () => {
    const [navOpen, setNavOpen] = useState(false)

    function openNav() {
        setNavOpen(!navOpen)
    }

    return (
        <div>
            <Router>
                <Nav navIsOpen={navOpen} setNavOpen={setNavOpen} />
                <FreeQuote />
                <Hamburger openNav={openNav} navIsOpen={navOpen} />
                <Route path='/' exact component={Home} />
                <Route path='/about' component={About} />
                {/* <Route path='/gallery' component={Gallery} /> */}
                {/* <Route path='/services' component={Services} /> */}
                <Route path='/contact' component={Contact} />
                <ContactComponent />
            </Router>
        </div>
    );
}

export default App;