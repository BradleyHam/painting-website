import React from 'react'
import classes from './Nav.module.scss'
import { Link } from 'react-router-dom'
import ReactDOM from 'react-dom'
import Social from '../SocialLinks/Social'


const Nav = (props) => {

    return (

        <header className={`${classes.header} ${props.navIsOpen ? classes.open : classes.closed}`}>
            <div className={classes.logo}><h4>Hamilton</h4> Painting & Decorating</div>
            <nav className={classes.nav}>
                <Link to='/' onClick={() => { (props.setNavOpen()) }}><div>Home</div></Link>
                <Link to='/about' onClick={() => { (props.setNavOpen()) }}><div>About</div></Link>
                {/* <Link to='/gallery' onClick={() => { (props.setNavOpen()) }}><div>Gallery</div></Link> */}
                {/* <Link to='/services' onClick={() => { (props.setNavOpen()) }}><div>Services</div></Link> */}
                <Link to='/contact' onClick={() => { (props.setNavOpen()) }}><div>Contact Us</div></Link>
            </nav>
            <Social />
        </header>

    )
}

export default Nav; 