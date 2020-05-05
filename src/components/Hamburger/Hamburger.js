import React from 'react'
import classes from './Hamburger.module.scss'

const Hamburger = (props) => {


    return (
        <div className={`${classes.hamburger} ${props.navIsOpen ? classes.open : classes.closed}`} onClick={props.openNav}>
            <div className={classes.middleLine}></div>
        </div>
    );
}

export default Hamburger;